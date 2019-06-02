﻿import RoomManager from '../managers/roomManager'
import { GameSocket } from '../customTypes';
import SocketIO from 'socket.io';

/** Handles all the communication for /controller namespace (ioNspController) */
export default class Controller {
    time = new Date()

    constructor(public ioNspController: SocketIO.Namespace, public roomManager: RoomManager) {
        ioNspController.on('connection', async (socket: GameSocket) => {
            roomManager.generateClientId(socket)

            socket.on('joinRoom', async (data: { isScreen: boolean }) => {
                const { isScreen } = data
                await roomManager.joinRoom(socket, isScreen)
            })

            socket.on('disconnect', () => {
                roomManager.leaveRoom(socket)
            })

            socket.on('U' /* short for updateDude */, (updates: any) => {
                if (roomManager.isRemoving(socket.room)) return
                if (!roomManager.userExists(socket.room, socket.id)) return

                roomManager.rooms[socket.room].users[socket.id].lastUpdate = Date.now()
                //roomManager.rooms[socket.room].scene.events.emit('U' /* short for updateDude */, {
                //    clientId: socket.clientId,
                //    updates
                //})
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
                // ioNspGame.in(socket.room).emit('S' /* short for syncGame */, payload)
            })
        })
    }
}