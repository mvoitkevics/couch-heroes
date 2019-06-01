/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/managers/roomManager.ts":
/*!********************************************!*\
  !*** ./src/server/managers/roomManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MAX_PLAYERS_PER_ROOM = 4;
var USER_KICK_TIMEOUT = 60000;
var RoomManager = /** @class */ (function () {
    function RoomManager(ioNspGame) {
        var _this = this;
        this.ioNspGame = ioNspGame;
        this.rooms = {};
        this.createRoom = function (roomId, scene, level) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rooms[roomId] = {
                    roomId: roomId,
                    users: {},
                    // @ts-ignore
                    scene: game.scene.keys['MainScene'],
                    removing: false
                };
                return [2 /*return*/];
            });
        }); };
        this.removeRoom = function (roomId) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.rooms[roomId].removing)
                    return [2 /*return*/];
                this.rooms[roomId].removing = true;
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // @ts-ignore
                        this.rooms[roomId].game = null;
                        delete this.rooms[roomId];
                        return [2 /*return*/];
                    });
                }); }, 5000);
                return [2 /*return*/];
            });
        }); };
        this.chooseRoom = function (props) {
            var scene = props.scene, level = props.level;
            var rooms = Object.keys(_this.rooms);
            if (rooms.length === 0)
                return uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
            // check for the next room with 1 or more free spaces
            var chosenRoom = null;
            for (var i = 0; i < Object.keys(_this.rooms).length; i++) {
                var room = _this.rooms[rooms[i]];
                var count = Object.keys(room.users).length;
                if (count < MAX_PLAYERS_PER_ROOM &&
                    !_this.isRemoving(rooms[i])) {
                    chosenRoom = rooms[i];
                    break;
                }
            }
            if (chosenRoom)
                return chosenRoom;
            // create a new room with a new uuidv4 id
            return uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
        };
        setInterval(function () {
            _this.removeInactiveRooms();
            _this.removeInactiveUsers();
        }, 10000);
    }
    RoomManager.prototype.generateClientId = function (socket) {
        var clientId = Math.random() * 1000;
        socket.clientId = clientId;
        socket.emit('clientId', clientId);
    };
    // the 2 functions below should be better
    RoomManager.prototype.joinRoom = function (socket, scene, level) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof scene !== 'string' || typeof level !== 'number') {
                            console.error('level or scene is not defined in ioGame.ts');
                            return [2 /*return*/];
                        }
                        socket.room = this.chooseRoom({ scene: scene, level: +level });
                        if (!!this.rooms[socket.room]) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoom(socket.room, scene, +level)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.addUser(socket);
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomManager.prototype.leaveRoom = function (socket) {
        this.removeUser(socket.room, socket.id);
        this.ioNspGame
            .in(socket.room)
            .emit('S' /* short for syncGame */, { connectCounter: this.getRoomUsersArray(socket.room).length });
    };
    RoomManager.prototype.changeRoom = function (socket, scene, level) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.leaveRoom(socket);
                        return [4 /*yield*/, this.joinRoom(socket, scene, +level)];
                    case 1:
                        _a.sent();
                        socket.emit('changingRoom', { scene: scene, level: +level });
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomManager.prototype.addUser = function (socket) {
        var _a;
        var newUsers = (_a = {},
            _a[socket.id] = {
                roomId: socket.room,
                lastUpdate: Date.now(),
                clientId: socket.clientId,
                id: socket.id
            },
            _a);
        this.rooms[socket.room].users = __assign({}, this.rooms[socket.room].users, newUsers);
        // join the socket room
        socket.join(socket.room);
    };
    /** Removed the user from the room */
    RoomManager.prototype.removeUser = function (roomId, userId, log) {
        if (log === void 0) { log = true; }
        if (this.ioNspGame.sockets[userId])
            this.ioNspGame.sockets[userId].leave(roomId);
        if (this.userExists(roomId, userId)) {
            delete this.rooms[roomId].users[userId];
            return true;
        }
        return false;
    };
    /** Check if this user exists */
    RoomManager.prototype.userExists = function (roomId, userId) {
        if (this.roomExists(roomId) && this.rooms[roomId].users && this.rooms[roomId].users[userId])
            return true;
        return false;
    };
    /** Check if this room exists */
    RoomManager.prototype.roomExists = function (roomId) {
        if (this.rooms && this.rooms[roomId])
            return true;
        return false;
    };
    RoomManager.prototype.isRemoving = function (roomId) {
        if (!!!this.rooms[roomId] || this.rooms[roomId].removing)
            return true;
        else
            return false;
    };
    RoomManager.prototype.getRoomsArray = function () {
        var _this = this;
        var rooms = [];
        Object.keys(this.rooms).forEach(function (roomId) {
            rooms.push(_this.rooms[roomId]);
        });
        return rooms;
    };
    /** Returns an Array of all users in a specific room */
    RoomManager.prototype.getRoomUsersArray = function (roomId) {
        var _this = this;
        var users = [];
        if (!this.roomExists(roomId))
            return users;
        Object.keys(this.rooms[roomId].users).forEach(function (userId) {
            users.push(_this.rooms[roomId].users[userId]);
        });
        return users;
    };
    /** Returns an Array of all users in all rooms */
    RoomManager.prototype.getAllUsersArray = function () {
        var _this = this;
        var users = [];
        Object.keys(this.rooms).forEach(function (roomId) {
            Object.keys(_this.rooms[roomId].users).forEach(function (userId) {
                users.push(_this.rooms[roomId].users[userId]);
            });
        });
        return users;
    };
    RoomManager.prototype.disconnectUser = function (userId) {
        if (this.ioNspGame.connected && this.ioNspGame.connected[userId]) {
            this.ioNspGame.connected[userId].disconnect(true);
            return true;
        }
        return false;
    };
    RoomManager.prototype.removeInactiveRooms = function () {
        var _this = this;
        this.getRoomsArray().forEach(function (room) {
            if (!room.users || Object.keys(room.users).length === 0)
                _this.removeRoom(room.roomId);
        });
    };
    RoomManager.prototype.removeInactiveUsers = function () {
        var _this = this;
        this.getAllUsersArray().forEach(function (user) {
            if (Date.now() - user.lastUpdate > USER_KICK_TIMEOUT) {
                var removed = _this.removeUser(user.roomId, user.id, false);
                var disconnected = _this.disconnectUser(user.id);
            }
        });
    };
    return RoomManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (RoomManager);


/***/ }),

/***/ "./src/server/routes/routes.ts":
/*!*************************************!*\
  !*** ./src/server/routes/routes.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


var Routes = /** @class */ (function () {
    function Routes(roomManager) {
        this.roomManager = roomManager;
        this.time = new Date();
        this.router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
        // Client Side Render
        this.router.get('/', function (_req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../../src/client/index.html'));
        });
        // Server Side
        this.router.get('/:roomID', function (_req, res) {
            // res.sendFile(path.join(__dirname, '../../dist/client/views/room.html'))
            res.render(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../../src/server/routes/views/room'));
        });
    }
    return Routes;
}());
/* harmony default export */ __webpack_exports__["default"] = (Routes);


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _managers_roomManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./managers/roomManager */ "./src/server/managers/roomManager.ts");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/routes */ "./src/server/routes/routes.ts");
/* harmony import */ var _socket_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socket/game */ "./src/server/socket/game.ts");





var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
var server = __webpack_require__(/*! http */ "http").Server(app);
var ejs = __webpack_require__(/*! ejs */ "ejs");

var io = socket_io__WEBPACK_IMPORTED_MODULE_5___default()(server);



var port = process.env.PORT || 3000;
// create socket.io namespace
var ioNspGame = io.of('/G' /* short for game */);
var ioNspController = io.of('/C' /* short for controller */);
var roomManager = new _managers_roomManager__WEBPACK_IMPORTED_MODULE_6__["default"](ioNspGame);
// /G namespace
var ioGame = new _socket_game__WEBPACK_IMPORTED_MODULE_8__["default"](ioNspGame, roomManager);
// /C namespace
var ioController = new _socket_game__WEBPACK_IMPORTED_MODULE_8__["default"](ioNspController, roomManager);
app.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.set('view engine', 'ejs');
app.use('/static', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, '../client')));
app.use('/', new _routes_routes__WEBPACK_IMPORTED_MODULE_7__["default"](roomManager).router);
server.listen(port, function () {
    console.log('App is listening on port ' + port);
});


/***/ }),

/***/ "./src/server/socket/game.ts":
/*!***********************************!*\
  !*** ./src/server/socket/game.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/** Handles all the communication for /game namespace (ioNspGame) */
var Game = /** @class */ (function () {
    function Game(ioNspGame, roomManager) {
        var _this = this;
        this.ioNspGame = ioNspGame;
        this.roomManager = roomManager;
        this.time = new Date();
        ioNspGame.on('connection', function (socket) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                roomManager.generateClientId(socket);
                socket.on('joinRoom', function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var scene, level;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                scene = data.scene, level = data.level;
                                return [4 /*yield*/, roomManager.joinRoom(socket, scene, +level)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                socket.on('disconnect', function () {
                    roomManager.leaveRoom(socket);
                });
                socket.on('changeRoom', function (data) {
                    roomManager.changeRoom(socket, data.scene, +data.level);
                });
                socket.on('sendPing', function (id) {
                    socket.emit('getPong', id);
                });
                socket.on('U' /* short for updateDude */, function (updates) {
                    if (roomManager.isRemoving(socket.room))
                        return;
                    if (!roomManager.userExists(socket.room, socket.id))
                        return;
                    roomManager.rooms[socket.room].users[socket.id].lastUpdate = Date.now();
                    //roomManager.rooms[socket.room].scene.events.emit('U' /* short for updateDude */, {
                    //    clientId: socket.clientId,
                    //    updates
                    //})
                });
                socket.on('getInitialState', function () {
                    if (roomManager.isRemoving(socket.room))
                        return;
                    if (!roomManager.roomExists(socket.room))
                        return;
                    var payload = {
                        time: _this.time,
                        // @ts-ignore
                        O /* short for objects */: roomManager.rooms[socket.room].scene.getInitialState(),
                        connectCounter: roomManager.getRoomUsersArray(socket.room).length,
                        initialState: true,
                        roomId: socket.room
                    };
                    socket.emit('S' /* short for syncGame */, payload);
                    // ioNspGame.in(socket.room).emit('S' /* short for syncGame */, payload)
                });
                return [2 /*return*/];
            });
        }); });
    }
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9tYW5hZ2Vycy9yb29tTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zb2NrZXQvZ2FtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWQvdjRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFn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LFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUFFLE9BQU07b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQUUsT0FBTTtvQkFFaEQsSUFBSSxPQUFPLEdBQUc7d0JBQ1YsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJO3dCQUNmLGFBQWE7d0JBQ2IsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7d0JBQ2pGLGNBQWMsRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07d0JBQ2pFLFlBQVksRUFBRSxJQUFJO3dCQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7cUJBQ3RCO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQztvQkFDbEQsd0VBQXdFO2dCQUM1RSxDQUFDLENBQUM7OzthQUNMLENBQUM7SUFDTixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxREQsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCB1dWlkdjQgZnJvbSAndXVpZC92NCdcclxuaW1wb3J0IHsgR2FtZVNvY2tldCwgUm9vbXMsIFVzZXJzLCBSb29tLCBVc2VyIH0gZnJvbSAnLi4vY3VzdG9tVHlwZXMnO1xyXG5cbmNvbnN0IE1BWF9QTEFZRVJTX1BFUl9ST09NID0gNFxuY29uc3QgVVNFUl9LSUNLX1RJTUVPVVQgPSA2MDAwMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tTWFuYWdlciB7XG4gICAgcm9vbXM6IFJvb21zID0ge31cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpb05zcEdhbWU6IFNvY2tldElPLk5hbWVzcGFjZSkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUluYWN0aXZlUm9vbXMoKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVJbmFjdGl2ZVVzZXJzKClcbiAgICAgICAgfSwgMTAwMDApXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDbGllbnRJZChzb2NrZXQ6IEdhbWVTb2NrZXQpIHtcbiAgICAgICAgbGV0IGNsaWVudElkID0gTWF0aC5yYW5kb20oKSAqIDEwMDA7XG4gICAgICAgIHNvY2tldC5jbGllbnRJZCA9IGNsaWVudElkXG4gICAgICAgIHNvY2tldC5lbWl0KCdjbGllbnRJZCcsIGNsaWVudElkKVxuICAgIH1cblxuICAgIC8vIHRoZSAyIGZ1bmN0aW9ucyBiZWxvdyBzaG91bGQgYmUgYmV0dGVyXG4gICAgYXN5bmMgam9pblJvb20oc29ja2V0OiBHYW1lU29ja2V0LCBzY2VuZTogc3RyaW5nLCBsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2NlbmUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZXZlbCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xldmVsIG9yIHNjZW5lIGlzIG5vdCBkZWZpbmVkIGluIGlvR2FtZS50cycpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzb2NrZXQucm9vbSA9IHRoaXMuY2hvb3NlUm9vbSh7IHNjZW5lOiBzY2VuZSwgbGV2ZWw6ICtsZXZlbCB9KVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBnYW1lIGluc3RhbmNlIGlmIHRoaXMgcm9vbSBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgICAgaWYgKCF0aGlzLnJvb21zW3NvY2tldC5yb29tXSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVSb29tKHNvY2tldC5yb29tLCBzY2VuZSwgK2xldmVsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRVc2VyKHNvY2tldClcbiAgICB9XG5cbiAgICBsZWF2ZVJvb20oc29ja2V0OiBHYW1lU29ja2V0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVXNlcihzb2NrZXQucm9vbSwgc29ja2V0LmlkKVxuICAgICAgICB0aGlzLmlvTnNwR2FtZVxuICAgICAgICAgICAgLmluKHNvY2tldC5yb29tKVxuICAgICAgICAgICAgLmVtaXQoJ1MnIC8qIHNob3J0IGZvciBzeW5jR2FtZSAqLywgeyBjb25uZWN0Q291bnRlcjogdGhpcy5nZXRSb29tVXNlcnNBcnJheShzb2NrZXQucm9vbSkubGVuZ3RoIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgY2hhbmdlUm9vbShzb2NrZXQ6IEdhbWVTb2NrZXQsIHNjZW5lOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sZWF2ZVJvb20oc29ja2V0KVxuICAgICAgICBhd2FpdCB0aGlzLmpvaW5Sb29tKHNvY2tldCwgc2NlbmUsICtsZXZlbClcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NoYW5naW5nUm9vbScsIHsgc2NlbmU6IHNjZW5lLCBsZXZlbDogK2xldmVsIH0pXG4gICAgfVxuXG4gICAgYWRkVXNlcihzb2NrZXQ6IEdhbWVTb2NrZXQpIHtcbiAgICAgICAgbGV0IG5ld1VzZXJzOiBVc2VycyA9IHtcbiAgICAgICAgICAgIFtzb2NrZXQuaWRdOiB7XG4gICAgICAgICAgICAgICAgcm9vbUlkOiBzb2NrZXQucm9vbSxcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIGNsaWVudElkOiBzb2NrZXQuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgaWQ6IHNvY2tldC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb29tc1tzb2NrZXQucm9vbV0udXNlcnMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnJvb21zW3NvY2tldC5yb29tXS51c2VycyxcbiAgICAgICAgICAgIC4uLm5ld1VzZXJzXG4gICAgICAgIH1cbiAgICAgICAgLy8gam9pbiB0aGUgc29ja2V0IHJvb21cbiAgICAgICAgc29ja2V0LmpvaW4oc29ja2V0LnJvb20pXG4gICAgfVxuXG4gICAgLyoqIFJlbW92ZWQgdGhlIHVzZXIgZnJvbSB0aGUgcm9vbSAqL1xuICAgIHJlbW92ZVVzZXIocm9vbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBsb2c6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlvTnNwR2FtZS5zb2NrZXRzW3VzZXJJZF0pIHRoaXMuaW9Oc3BHYW1lLnNvY2tldHNbdXNlcklkXS5sZWF2ZShyb29tSWQpXG5cbiAgICAgICAgaWYgKHRoaXMudXNlckV4aXN0cyhyb29tSWQsIHVzZXJJZCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKiogQ2hlY2sgaWYgdGhpcyB1c2VyIGV4aXN0cyAqL1xuICAgIHVzZXJFeGlzdHMocm9vbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb21FeGlzdHMocm9vbUlkKSAmJiB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnMgJiYgdGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF0pIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKiBDaGVjayBpZiB0aGlzIHJvb20gZXhpc3RzICovXG4gICAgcm9vbUV4aXN0cyhyb29tSWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5yb29tcyAmJiB0aGlzLnJvb21zW3Jvb21JZF0pIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlzUmVtb3Zpbmcocm9vbUlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCEhIXRoaXMucm9vbXNbcm9vbUlkXSB8fCB0aGlzLnJvb21zW3Jvb21JZF0ucmVtb3ZpbmcpIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY3JlYXRlUm9vbSA9IGFzeW5jIChyb29tSWQ6IHN0cmluZywgc2NlbmU6IHN0cmluZywgbGV2ZWw6IG51bWJlcikgPT4ge1xuXG4gICAgICAgIHRoaXMucm9vbXNbcm9vbUlkXSA9IHtcbiAgICAgICAgICAgIHJvb21JZDogcm9vbUlkLFxuICAgICAgICAgICAgdXNlcnM6IHt9LFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2NlbmU6IGdhbWUuc2NlbmUua2V5c1snTWFpblNjZW5lJ10sXG4gICAgICAgICAgICByZW1vdmluZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVJvb20gPSBhc3luYyAocm9vbUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucm9vbXNbcm9vbUlkXS5yZW1vdmluZykgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5yb29tc1tyb29tSWRdLnJlbW92aW5nID0gdHJ1ZVxuXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy5yb29tc1tyb29tSWRdLmdhbWUgPSBudWxsXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yb29tc1tyb29tSWRdXG4gICAgICAgIH0sIDUwMDApXG4gICAgfVxuXG4gICAgY2hvb3NlUm9vbSA9IChwcm9wczogeyBzY2VuZTogc3RyaW5nOyBsZXZlbDogbnVtYmVyIH0pOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCB7IHNjZW5lLCBsZXZlbCB9ID0gcHJvcHNcblxuICAgICAgICBsZXQgcm9vbXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb21zKVxuXG4gICAgICAgIGlmIChyb29tcy5sZW5ndGggPT09IDApIHJldHVybiB1dWlkdjQoKVxuXG4gICAgICAgIC8vIGNoZWNrIGZvciB0aGUgbmV4dCByb29tIHdpdGggMSBvciBtb3JlIGZyZWUgc3BhY2VzXG4gICAgICAgIGxldCBjaG9zZW5Sb29tID0gbnVsbFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMucm9vbXMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9vbSA9IHRoaXMucm9vbXNbcm9vbXNbaV1dXG4gICAgICAgICAgICBsZXQgY291bnQgPSBPYmplY3Qua2V5cyhyb29tLnVzZXJzKS5sZW5ndGhcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb3VudCA8IE1BWF9QTEFZRVJTX1BFUl9ST09NICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNSZW1vdmluZyhyb29tc1tpXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNob3NlblJvb20gPSByb29tc1tpXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNob3NlblJvb20pIHJldHVybiBjaG9zZW5Sb29tXG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHJvb20gd2l0aCBhIG5ldyB1dWlkdjQgaWRcbiAgICAgICAgcmV0dXJuIHV1aWR2NCgpXG4gICAgfVxuXG4gICAgZ2V0Um9vbXNBcnJheSgpIHtcbiAgICAgICAgbGV0IHJvb21zOiBSb29tW10gPSBbXVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb21zKS5mb3JFYWNoKHJvb21JZCA9PiB7XG4gICAgICAgICAgICByb29tcy5wdXNoKHRoaXMucm9vbXNbcm9vbUlkXSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJvb21zXG4gICAgfVxuXG4gICAgLyoqIFJldHVybnMgYW4gQXJyYXkgb2YgYWxsIHVzZXJzIGluIGEgc3BlY2lmaWMgcm9vbSAqL1xuICAgIGdldFJvb21Vc2Vyc0FycmF5KHJvb21JZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB1c2VyczogVXNlcltdID0gW11cblxuICAgICAgICBpZiAoIXRoaXMucm9vbUV4aXN0cyhyb29tSWQpKSByZXR1cm4gdXNlcnNcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnMpLmZvckVhY2godXNlcklkID0+IHtcbiAgICAgICAgICAgIHVzZXJzLnB1c2godGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB1c2Vyc1xuICAgIH1cblxuICAgIC8qKiBSZXR1cm5zIGFuIEFycmF5IG9mIGFsbCB1c2VycyBpbiBhbGwgcm9vbXMgKi9cbiAgICBnZXRBbGxVc2Vyc0FycmF5KCkge1xuICAgICAgICBsZXQgdXNlcnM6IFVzZXJbXSA9IFtdXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXMpLmZvckVhY2gocm9vbUlkID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXNbcm9vbUlkXS51c2VycykuZm9yRWFjaCh1c2VySWQgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2godGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdXNlcnNcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0VXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5pb05zcEdhbWUuY29ubmVjdGVkICYmIHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZFt1c2VySWRdKSB7XG4gICAgICAgICAgICB0aGlzLmlvTnNwR2FtZS5jb25uZWN0ZWRbdXNlcklkXS5kaXNjb25uZWN0KHRydWUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlbW92ZUluYWN0aXZlUm9vbXMoKSB7XG4gICAgICAgIHRoaXMuZ2V0Um9vbXNBcnJheSgpLmZvckVhY2goKHJvb206IFJvb20pID0+IHtcbiAgICAgICAgICAgIGlmICghcm9vbS51c2VycyB8fCBPYmplY3Qua2V5cyhyb29tLnVzZXJzKS5sZW5ndGggPT09IDApIHRoaXMucmVtb3ZlUm9vbShyb29tLnJvb21JZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW1vdmVJbmFjdGl2ZVVzZXJzKCkge1xuICAgICAgICB0aGlzLmdldEFsbFVzZXJzQXJyYXkoKS5mb3JFYWNoKCh1c2VyOiBVc2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHVzZXIubGFzdFVwZGF0ZSA+IFVTRVJfS0lDS19USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSB0aGlzLnJlbW92ZVVzZXIodXNlci5yb29tSWQsIHVzZXIuaWQsIGZhbHNlKVxuICAgICAgICAgICAgICAgIGxldCBkaXNjb25uZWN0ZWQgPSB0aGlzLmRpc2Nvbm5lY3RVc2VyKHVzZXIuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlcyB7XG4gICAgcm91dGVyOiBleHByZXNzLlJvdXRlclxuICAgIHRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm9vbU1hbmFnZXI6IFJvb21NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG4gICAgICAgIC8vIENsaWVudCBTaWRlIFJlbmRlclxuICAgICAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vc3JjL2NsaWVudC9pbmRleC5odG1sJykpXHJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2VydmVyIFNpZGVcbiAgICAgICAgdGhpcy5yb3V0ZXIuZ2V0KCcvOnJvb21JRCcsIChfcmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIC8vIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vZGlzdC9jbGllbnQvdmlld3Mvcm9vbS5odG1sJykpXG5cbiAgICAgICAgICAgIHJlcy5yZW5kZXIocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL3NyYy9zZXJ2ZXIvcm91dGVzL3ZpZXdzL3Jvb20nKSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0J1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBzZXJ2ZXIgPSByZXF1aXJlKCdodHRwJykuU2VydmVyKGFwcClcbmNvbnN0IGVqcyA9IHJlcXVpcmUoJ2VqcycpXG5cbmltcG9ydCBTb2NrZXRJT1N0YXRpYyBmcm9tICdzb2NrZXQuaW8nXG5jb25zdCBpbyA9IFNvY2tldElPU3RhdGljKHNlcnZlcilcblxuaW1wb3J0IFJvb21NYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcydcbmltcG9ydCBHYW1lIGZyb20gJy4vc29ja2V0L2dhbWUnXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcblxuLy8gY3JlYXRlIHNvY2tldC5pbyBuYW1lc3BhY2VcbmNvbnN0IGlvTnNwR2FtZSA9IGlvLm9mKCcvRycgLyogc2hvcnQgZm9yIGdhbWUgKi8pXG5jb25zdCBpb05zcENvbnRyb2xsZXIgPSBpby5vZignL0MnIC8qIHNob3J0IGZvciBjb250cm9sbGVyICovKVxuXG5jb25zdCByb29tTWFuYWdlciA9IG5ldyBSb29tTWFuYWdlcihpb05zcEdhbWUpXG5cbi8vIC9HIG5hbWVzcGFjZVxuY29uc3QgaW9HYW1lID0gbmV3IEdhbWUoaW9Oc3BHYW1lLCByb29tTWFuYWdlcik7XG5cbi8vIC9DIG5hbWVzcGFjZVxuY29uc3QgaW9Db250cm9sbGVyID0gbmV3IEdhbWUoaW9Oc3BDb250cm9sbGVyLCByb29tTWFuYWdlcik7XG5cbmFwcC51c2UoaGVsbWV0KCkpXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpXG5cbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuXG5hcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudCcpKSlcbmFwcC51c2UoJy8nLCBuZXcgUm91dGVzKHJvb21NYW5hZ2VyKS5yb3V0ZXIpXG5cbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJyArIHBvcnQpXG59KVxuIiwiaW1wb3J0IFJvb21NYW5hZ2VyIGZyb20gJy4uL21hbmFnZXJzL3Jvb21NYW5hZ2VyJ1xuaW1wb3J0IHsgR2FtZVNvY2tldCB9IGZyb20gJy4uL2N1c3RvbVR5cGVzJztcclxuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pbyc7XG5cbi8qKiBIYW5kbGVzIGFsbCB0aGUgY29tbXVuaWNhdGlvbiBmb3IgL2dhbWUgbmFtZXNwYWNlIChpb05zcEdhbWUpICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICB0aW1lID0gbmV3IERhdGUoKVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGlvTnNwR2FtZTogU29ja2V0SU8uTmFtZXNwYWNlLCBwdWJsaWMgcm9vbU1hbmFnZXI6IFJvb21NYW5hZ2VyKSB7XG4gICAgICAgIGlvTnNwR2FtZS5vbignY29ubmVjdGlvbicsIGFzeW5jIChzb2NrZXQ6IEdhbWVTb2NrZXQpID0+IHtcbiAgICAgICAgICAgIHJvb21NYW5hZ2VyLmdlbmVyYXRlQ2xpZW50SWQoc29ja2V0KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2pvaW5Sb29tJywgYXN5bmMgKGRhdGE6IHsgc2NlbmU6IHN0cmluZzsgbGV2ZWw6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzY2VuZSwgbGV2ZWwgfSA9IGRhdGFcbiAgICAgICAgICAgICAgICBhd2FpdCByb29tTWFuYWdlci5qb2luUm9vbShzb2NrZXQsIHNjZW5lLCArbGV2ZWwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vbU1hbmFnZXIubGVhdmVSb29tKHNvY2tldClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNvY2tldC5vbignY2hhbmdlUm9vbScsIChkYXRhOiB7IHNjZW5lOiBzdHJpbmc7IGxldmVsOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb21NYW5hZ2VyLmNoYW5nZVJvb20oc29ja2V0LCBkYXRhLnNjZW5lLCArZGF0YS5sZXZlbClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNvY2tldC5vbignc2VuZFBpbmcnLCAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdnZXRQb25nJywgaWQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ1UnIC8qIHNob3J0IGZvciB1cGRhdGVEdWRlICovLCAodXBkYXRlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21NYW5hZ2VyLmlzUmVtb3Zpbmcoc29ja2V0LnJvb20pKSByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnVzZXJFeGlzdHMoc29ja2V0LnJvb20sIHNvY2tldC5pZCkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgcm9vbU1hbmFnZXIucm9vbXNbc29ja2V0LnJvb21dLnVzZXJzW3NvY2tldC5pZF0ubGFzdFVwZGF0ZSA9IERhdGUubm93KClcbiAgICAgICAgICAgICAgICAvL3Jvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS5zY2VuZS5ldmVudHMuZW1pdCgnVScgLyogc2hvcnQgZm9yIHVwZGF0ZUR1ZGUgKi8sIHtcbiAgICAgICAgICAgICAgICAvLyAgICBjbGllbnRJZDogc29ja2V0LmNsaWVudElkLFxuICAgICAgICAgICAgICAgIC8vICAgIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICAvL30pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2dldEluaXRpYWxTdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm9vbU1hbmFnZXIuaXNSZW1vdmluZyhzb2NrZXQucm9vbSkpIHJldHVyblxuICAgICAgICAgICAgICAgIGlmICghcm9vbU1hbmFnZXIucm9vbUV4aXN0cyhzb2NrZXQucm9vbSkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBPIC8qIHNob3J0IGZvciBvYmplY3RzICovOiByb29tTWFuYWdlci5yb29tc1tzb2NrZXQucm9vbV0uc2NlbmUuZ2V0SW5pdGlhbFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RDb3VudGVyOiByb29tTWFuYWdlci5nZXRSb29tVXNlcnNBcnJheShzb2NrZXQucm9vbSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogc29ja2V0LnJvb21cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgIC8vIGlvTnNwR2FtZS5pbihzb2NrZXQucm9vbSkuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9