import 'source-map-support/register'

import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import path from 'path'

const app = express()
const server = require('http').Server(app)
const ejs = require('ejs')

import SocketIOStatic from 'socket.io'
const io = SocketIOStatic(server)

import RoomManager from './managers/roomManager'
import Routes from './routes/routes'
import Game from './socket/game'
import Controller from './socket/controller';

const port = process.env.PORT || 3000

// create socket.io namespace
const ioNspGame = io.of('/G' /* short for game */)
const ioNspController = io.of('/C' /* short for controller */)

const roomManager = new RoomManager(ioNspGame)

// /G namespace
const ioGame = new Game(ioNspGame, roomManager);

// /C namespace
const ioController = new Controller(ioNspController, roomManager);

app.use(helmet())
app.use(compression())

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, '../client')))
app.use('/', new Routes(roomManager).router)

server.listen(port, () => {
    console.log('App is listening on port ' + port)
})
