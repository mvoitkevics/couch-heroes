import RoomManager from '../managers/roomManager'
import { GameSocket } from '../customTypes';
import SocketIO from 'socket.io';

/** Handles all the communication for /game namespace (ioNspGame) */
export default class Game {
    time = new Date()

    constructor(public ioNspGame: SocketIO.Namespace, public roomManager: RoomManager) {
        ioNspGame.on('connection', async (socket: GameSocket) => {
            console.log('connected');
            roomManager.generateClientId(socket, true)

            socket.on('joinRoom', async () => {
                console.log('receiving data from client: ');
                await roomManager.joinRoom(socket)
            })

            socket.on('disconnect', () => {
                roomManager.leaveRoom(socket);
                console.log('disconnected');
            })

            socket.on('changeRoom', () => {
                roomManager.changeRoom(socket)
            })

            socket.on('sendPing', (id: string) => {
                socket.emit('getPong', id)
            })

            socket.on('U' /* short for updateDude */, (updates: any) => {
                if (roomManager.isRemoving(socket.room)) return
                if (!roomManager.userExists(socket.room, socket.id)) return

                roomManager.rooms[socket.room].users[socket.id].lastUpdate = Date.now()
            })

            socket.on('getInitialState', () => {
                if (roomManager.isRemoving(socket.room)) return
                if (!roomManager.roomExists(socket.room)) return

                let payload = {
                    time: this.time,
                    // @ts-ignore
                    O /* short for objects */: roomManager.rooms[socket.room].scene.getInitialState(),
                    connectCounter: roomManager.getRoomUsersArray(socket.room).length,
                    initialState: true,
                    roomId: socket.room
                };

                socket.emit('S' /* short for syncGame */, payload)
                // ioNspGame.in(socket.room).emit('S' /* short for syncGame */, payload)
            })
        })
    }
}
