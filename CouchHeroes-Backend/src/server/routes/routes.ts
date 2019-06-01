import express from 'express'
import path from 'path'
import RoomManager from '../managers/roomManager'

export default class Routes {
    router: express.Router
    time = new Date()

    constructor(public roomManager: RoomManager) {
        this.router = express.Router()

        // Client Side Render
        this.router.get('/', (_req, res) => {
            res.sendFile(path.join(__dirname, '../../src/client/index.html'))
        });

        // Server Side
        this.router.get('/:roomID', (_req, res) => {
            // res.sendFile(path.join(__dirname, '../../dist/client/views/room.html'))

            res.render(path.join(__dirname, '../../src/server/routes/views/room'))
        })
    }
}
