import RoomManager from '../managers/roomManager'

import SocketIO from 'socket.io';

/** Handles all the communication for /controller namespace (ioNspController) */
export default class Controller {
    time = new Date()

    constructor(public ioNspController: SocketIO.Namespace, public roomManager: RoomManager) {
        ioNspController.on('connection', async (socket: GameSocket) => {
            roomManager.generateClientId(socket, false)

            socket.on('joinRoom', async (data: { isScreen: boolean }) => {
                await roomManager.joinRoom(socket)
            })

            socket.on('disconnect', () => {
                roomManager.leaveRoom(socket)
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
                }

                socket.emit('S' /* short for syncGame */, payload)
            })
        })
    }
}
