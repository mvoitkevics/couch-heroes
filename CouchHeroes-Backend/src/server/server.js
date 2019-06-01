import 'source-map-support/register';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
var app = express();
var server = require('http').Server(app);
var ejs = require('ejs');
import SocketIOStatic from 'socket.io';
var io = SocketIOStatic(server);
import RoomManager from './managers/roomManager';
import Routes from './routes/routes';
import Game from './socket/game';
var port = process.env.PORT || 3000;
// create 2 socket.io namespaces
var ioNspGame = io.of('/G' /* short for game */);
var roomManager = new RoomManager(ioNspGame);
var ioGame = new Game(ioNspGame, roomManager);
app.use(helmet());
app.use(compression());
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, '../client')));
app.use('/', new Routes(roomManager).router);
server.listen(port, function () {
    console.log('App is listening on port ' + port);
});
//# sourceMappingURL=server.js.map