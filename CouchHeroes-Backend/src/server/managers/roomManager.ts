const MAX_PLAYERS_PER_ROOM = 4
const USER_KICK_TIMEOUT = 60000

export default class RoomManager {
    rooms: Rooms = {}

    constructor(public ioNspGame: SocketIO.Namespace, public ioNspController: SocketIO.Namespace) {
        setInterval(() => {
            this.removeInactiveRooms()
            this.removeInactiveUsers()
        }, 10000)
    }

    generateClientId(socket: GameSocket, isScreen: boolean) {
        let clientId = Math.random() * 1000;
        socket.clientId = clientId;
        socket.isScreen = isScreen;
        socket.emit('clientId', clientId);
    }

    // the 2 functions below should be better
    async joinRoom(socket: GameSocket) {
        socket.room = this.chooseRoom();

        // create a new game instance if this room does not exist yet
        if (!this.rooms[socket.room]) {
            await this.createRoom(socket.room)
        }
        console.log('hello: ', socket.isScreen);
        // dont add user if its a screen
        if (!socket.isScreen) {
            this.addUser(socket)
        } else {
            // join the socket room
            socket.join(socket.room)

            socket.emit('roomId', socket.room);

            console.log('emitting roomId: ', socket.room);
        }
    }

    leaveRoom(socket: GameSocket) {
        this.removeUser(socket.room, socket.id)
        this.ioNspGame
            .in(socket.room)
            .emit('S' /* short for syncGame */, { connectCounter: this.getRoomUsersArray(socket.room).length })
    }

    async changeRoom(socket: GameSocket) {
        this.leaveRoom(socket)
        await this.joinRoom(socket)
        socket.emit('changingRoom')
    }

    addUser(socket: GameSocket) {
        let newUsers: Users = {
            [socket.id]: {
                roomId: socket.room,
                lastUpdate: Date.now(),
                clientId: socket.clientId,
                id: socket.id,
                isMaster: false
            }
        }

        this.rooms[socket.room].users = {
            ...this.rooms[socket.room].users,
            ...newUsers
        }
        // join the socket room
        socket.join(socket.room)
    }

    /** Removed the user from the room */
    removeUser(roomId: string, userId: string, log: boolean = true) {
        if (this.ioNspGame.sockets[userId]) this.ioNspGame.sockets[userId].leave(roomId)

        if (this.userExists(roomId, userId)) {
            delete this.rooms[roomId].users[userId]
            return true
        }
        return false
    }

    /** Check if this user exists */
    userExists(roomId: string, userId: string) {
        if (this.roomExists(roomId) && this.rooms[roomId].users && this.rooms[roomId].users[userId]) return true
        return false
    }

    /** Check if this room exists */
    roomExists(roomId: string) {
        if (this.rooms && this.rooms[roomId]) return true
        return false
    }

    isRemoving(roomId: string) {
        if (!!!this.rooms[roomId] || this.rooms[roomId].removing) return true
        else return false
    }

    createRoom = async (roomId: string) => {

        this.rooms[roomId] = {
            roomId: roomId,
            users: {},
            removing: false
        }
    }

    removeRoom = async (roomId: string) => {
        if (this.rooms[roomId].removing) return

        this.rooms[roomId].removing = true

        setTimeout(async () => {
            delete this.rooms[roomId]
        }, 5000)
    }

    chooseRoom = (): string => {
        let rooms = Object.keys(this.rooms)

        if (rooms.length === 0) return this.generateRoomID(4)

        // check for the next room with 1 or more free spaces
        let chosenRoom = null
        for (let i = 0; i < Object.keys(this.rooms).length; i++) {
            let room = this.rooms[rooms[i]]
            let count = Object.keys(room.users).length
            if (
                count < MAX_PLAYERS_PER_ROOM &&
                !this.isRemoving(rooms[i])
            ) {
                chosenRoom = rooms[i]
                break
            }
        }
        if (chosenRoom) return chosenRoom

        // create a new room with a new 4 letter id
        return this.generateRoomID(4);
    }

    generateRoomID = (size: number): string => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        for (let i = 0; i < size; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    getRoomsArray() {
        let rooms: Room[] = []
        Object.keys(this.rooms).forEach(roomId => {
            rooms.push(this.rooms[roomId])
        })
        return rooms
    }

    /** Returns an Array of all users in a specific room */
    getRoomUsersArray(roomId: string) {
        let users: User[] = []

        if (!this.roomExists(roomId)) return users

        Object.keys(this.rooms[roomId].users).forEach(userId => {
            users.push(this.rooms[roomId].users[userId])
        })
        return users
    }

    /** Returns an Array of all users in all rooms */
    getAllUsersArray() {
        let users: User[] = []
        Object.keys(this.rooms).forEach(roomId => {
            Object.keys(this.rooms[roomId].users).forEach(userId => {
                users.push(this.rooms[roomId].users[userId])
            })
        })
        return users
    }

    disconnectUser(userId: string) {
        if (this.ioNspGame.connected && this.ioNspGame.connected[userId]) {
            this.ioNspGame.connected[userId].disconnect(true)
            return true
        }
        return false
    }

    removeInactiveRooms() {
        this.getRoomsArray().forEach((room: Room) => {
            if (!room.users || Object.keys(room.users).length === 0) this.removeRoom(room.roomId)
        })
    }

    removeInactiveUsers() {
        this.getAllUsersArray().forEach((user: User) => {
            if (Date.now() - user.lastUpdate > USER_KICK_TIMEOUT) {
                let removed = this.removeUser(user.roomId, user.id, false)
                let disconnected = this.disconnectUser(user.id)
            }
        })
    }
}
