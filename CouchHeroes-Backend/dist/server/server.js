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
    function RoomManager(ioNspGame, ioNspController) {
        var _this = this;
        this.ioNspGame = ioNspGame;
        this.ioNspController = ioNspController;
        this.rooms = {};
        this.createRoom = function (roomId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rooms[roomId] = {
                    roomId: roomId,
                    users: {},
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
                        delete this.rooms[roomId];
                        return [2 /*return*/];
                    });
                }); }, 5000);
                return [2 /*return*/];
            });
        }); };
        this.chooseRoom = function () {
            var rooms = Object.keys(_this.rooms);
            if (rooms.length === 0)
                return _this.generateRoomID(4);
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
            // create a new room with a new 4 letter id
            return _this.generateRoomID(4);
        };
        this.generateRoomID = function (size) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var charactersLength = characters.length;
            for (var i = 0; i < size; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        };
        setInterval(function () {
            _this.removeInactiveRooms();
            _this.removeInactiveUsers();
        }, 10000);
    }
    RoomManager.prototype.generateClientId = function (socket, isScreen) {
        var clientId = Math.random() * 1000;
        socket.clientId = clientId;
        socket.isScreen = isScreen;
        socket.emit('clientId', clientId);
    };
    // the 2 functions below should be better
    RoomManager.prototype.joinRoom = function (socket) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socket.room = this.chooseRoom();
                        if (!!this.rooms[socket.room]) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoom(socket.room)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('hello: ', socket.isScreen);
                        // dont add user if its a screen
                        if (!socket.isScreen) {
                            this.addUser(socket);
                        }
                        else {
                            // join the socket room
                            socket.join(socket.room);
                            socket.emit('roomId', socket.room);
                            console.log('emitting roomId: ', socket.room);
                        }
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
    RoomManager.prototype.changeRoom = function (socket) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.leaveRoom(socket);
                        return [4 /*yield*/, this.joinRoom(socket)];
                    case 1:
                        _a.sent();
                        socket.emit('changingRoom');
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
                id: socket.id,
                isMaster: false
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
        this.router.get('/room', function (_req, res) {
            var roomID = _req.query.roomID;
            if (roomID && roomID !== '') {
                if (!roomManager.roomExists(roomID)) {
                    res.render(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../../src/server/routes/views/controller'), _req.query);
                }
                else {
                    res.redirect('/?status=false');
                }
            }
            else {
                res.redirect('/?status=false');
            }
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
var roomManager = new _managers_roomManager__WEBPACK_IMPORTED_MODULE_6__["default"](ioNspGame, ioNspController);
// /G namespace
var ioGame = new _socket_game__WEBPACK_IMPORTED_MODULE_8__["default"](ioNspGame, roomManager);
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
                console.log('connected');
                roomManager.generateClientId(socket, true);
                socket.on('joinRoom', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('receiving data from client: ');
                                return [4 /*yield*/, roomManager.joinRoom(socket)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                socket.on('disconnect', function () {
                    roomManager.leaveRoom(socket);
                    console.log('disconnected');
                });
                socket.on('changeRoom', function () {
                    roomManager.changeRoom(socket);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9tYW5hZ2Vycy9yb29tTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zb2NrZXQvZ2FtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFD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QUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hERCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3RCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgR2FtZVNvY2tldCwgUm9vbXMsIFVzZXJzLCBSb29tLCBVc2VyIH0gZnJvbSAnLi4vY3VzdG9tVHlwZXMnO1xyXG5cclxuY29uc3QgTUFYX1BMQVlFUlNfUEVSX1JPT00gPSA0XHJcbmNvbnN0IFVTRVJfS0lDS19USU1FT1VUID0gNjAwMDBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb21NYW5hZ2VyIHtcclxuICAgIHJvb21zOiBSb29tcyA9IHt9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlvTnNwR2FtZTogU29ja2V0SU8uTmFtZXNwYWNlLCBwdWJsaWMgaW9Oc3BDb250cm9sbGVyOiBTb2NrZXRJTy5OYW1lc3BhY2UpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSW5hY3RpdmVSb29tcygpXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSW5hY3RpdmVVc2VycygpXHJcbiAgICAgICAgfSwgMTAwMDApXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDbGllbnRJZChzb2NrZXQ6IEdhbWVTb2NrZXQsIGlzU2NyZWVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGNsaWVudElkID0gTWF0aC5yYW5kb20oKSAqIDEwMDA7XHJcbiAgICAgICAgc29ja2V0LmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgc29ja2V0LmlzU2NyZWVuID0gaXNTY3JlZW47XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NsaWVudElkJywgY2xpZW50SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSAyIGZ1bmN0aW9ucyBiZWxvdyBzaG91bGQgYmUgYmV0dGVyXHJcbiAgICBhc3luYyBqb2luUm9vbShzb2NrZXQ6IEdhbWVTb2NrZXQpIHtcclxuICAgICAgICBzb2NrZXQucm9vbSA9IHRoaXMuY2hvb3NlUm9vbSgpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZ2FtZSBpbnN0YW5jZSBpZiB0aGlzIHJvb20gZG9lcyBub3QgZXhpc3QgeWV0XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb21zW3NvY2tldC5yb29tXSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVJvb20oc29ja2V0LnJvb20pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbzogJywgc29ja2V0LmlzU2NyZWVuKTtcclxuICAgICAgICAvLyBkb250IGFkZCB1c2VyIGlmIGl0cyBhIHNjcmVlblxyXG4gICAgICAgIGlmICghc29ja2V0LmlzU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVXNlcihzb2NrZXQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gam9pbiB0aGUgc29ja2V0IHJvb21cclxuICAgICAgICAgICAgc29ja2V0LmpvaW4oc29ja2V0LnJvb20pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgncm9vbUlkJywgc29ja2V0LnJvb20pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtaXR0aW5nIHJvb21JZDogJywgc29ja2V0LnJvb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZWF2ZVJvb20oc29ja2V0OiBHYW1lU29ja2V0KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VyKHNvY2tldC5yb29tLCBzb2NrZXQuaWQpXHJcbiAgICAgICAgdGhpcy5pb05zcEdhbWVcclxuICAgICAgICAgICAgLmluKHNvY2tldC5yb29tKVxyXG4gICAgICAgICAgICAuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCB7IGNvbm5lY3RDb3VudGVyOiB0aGlzLmdldFJvb21Vc2Vyc0FycmF5KHNvY2tldC5yb29tKS5sZW5ndGggfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGFuZ2VSb29tKHNvY2tldDogR2FtZVNvY2tldCkge1xyXG4gICAgICAgIHRoaXMubGVhdmVSb29tKHNvY2tldClcclxuICAgICAgICBhd2FpdCB0aGlzLmpvaW5Sb29tKHNvY2tldClcclxuICAgICAgICBzb2NrZXQuZW1pdCgnY2hhbmdpbmdSb29tJylcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyKHNvY2tldDogR2FtZVNvY2tldCkge1xyXG4gICAgICAgIGxldCBuZXdVc2VyczogVXNlcnMgPSB7XHJcbiAgICAgICAgICAgIFtzb2NrZXQuaWRdOiB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQ6IHNvY2tldC5yb29tLFxyXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIGNsaWVudElkOiBzb2NrZXQuY2xpZW50SWQsXHJcbiAgICAgICAgICAgICAgICBpZDogc29ja2V0LmlkLFxyXG4gICAgICAgICAgICAgICAgaXNNYXN0ZXI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm9vbXNbc29ja2V0LnJvb21dLnVzZXJzID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnJvb21zW3NvY2tldC5yb29tXS51c2VycyxcclxuICAgICAgICAgICAgLi4ubmV3VXNlcnNcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gam9pbiB0aGUgc29ja2V0IHJvb21cclxuICAgICAgICBzb2NrZXQuam9pbihzb2NrZXQucm9vbSlcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmVtb3ZlZCB0aGUgdXNlciBmcm9tIHRoZSByb29tICovXHJcbiAgICByZW1vdmVVc2VyKHJvb21JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlvTnNwR2FtZS5zb2NrZXRzW3VzZXJJZF0pIHRoaXMuaW9Oc3BHYW1lLnNvY2tldHNbdXNlcklkXS5sZWF2ZShyb29tSWQpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVzZXJFeGlzdHMocm9vbUlkLCB1c2VySWQpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2hlY2sgaWYgdGhpcyB1c2VyIGV4aXN0cyAqL1xyXG4gICAgdXNlckV4aXN0cyhyb29tSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5yb29tRXhpc3RzKHJvb21JZCkgJiYgdGhpcy5yb29tc1tyb29tSWRdLnVzZXJzICYmIHRoaXMucm9vbXNbcm9vbUlkXS51c2Vyc1t1c2VySWRdKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaGVjayBpZiB0aGlzIHJvb20gZXhpc3RzICovXHJcbiAgICByb29tRXhpc3RzKHJvb21JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vbXMgJiYgdGhpcy5yb29tc1tyb29tSWRdKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGlzUmVtb3Zpbmcocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoISEhdGhpcy5yb29tc1tyb29tSWRdIHx8IHRoaXMucm9vbXNbcm9vbUlkXS5yZW1vdmluZykgcmV0dXJuIHRydWVcclxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJvb20gPSBhc3luYyAocm9vbUlkOiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5yb29tc1tyb29tSWRdID0ge1xyXG4gICAgICAgICAgICByb29tSWQ6IHJvb21JZCxcclxuICAgICAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgICAgICAgICByZW1vdmluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUm9vbSA9IGFzeW5jIChyb29tSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJvb21zW3Jvb21JZF0ucmVtb3ZpbmcpIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLnJvb21zW3Jvb21JZF0ucmVtb3ZpbmcgPSB0cnVlXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yb29tc1tyb29tSWRdXHJcbiAgICAgICAgfSwgNTAwMClcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VSb29tID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgbGV0IHJvb21zID0gT2JqZWN0LmtleXModGhpcy5yb29tcylcclxuXHJcbiAgICAgICAgaWYgKHJvb21zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSb29tSUQoNClcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIHRoZSBuZXh0IHJvb20gd2l0aCAxIG9yIG1vcmUgZnJlZSBzcGFjZXNcclxuICAgICAgICBsZXQgY2hvc2VuUm9vbSA9IG51bGxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMucm9vbXMpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb29tID0gdGhpcy5yb29tc1tyb29tc1tpXV1cclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gT2JqZWN0LmtleXMocm9vbS51c2VycykubGVuZ3RoXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGNvdW50IDwgTUFYX1BMQVlFUlNfUEVSX1JPT00gJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmlzUmVtb3Zpbmcocm9vbXNbaV0pXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY2hvc2VuUm9vbSA9IHJvb21zW2ldXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaG9zZW5Sb29tKSByZXR1cm4gY2hvc2VuUm9vbVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgcm9vbSB3aXRoIGEgbmV3IDQgbGV0dGVyIGlkXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSb29tSUQoNCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSb29tSUQgPSAoc2l6ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vbXNBcnJheSgpIHtcclxuICAgICAgICBsZXQgcm9vbXM6IFJvb21bXSA9IFtdXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb29tcykuZm9yRWFjaChyb29tSWQgPT4ge1xyXG4gICAgICAgICAgICByb29tcy5wdXNoKHRoaXMucm9vbXNbcm9vbUlkXSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByb29tc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSZXR1cm5zIGFuIEFycmF5IG9mIGFsbCB1c2VycyBpbiBhIHNwZWNpZmljIHJvb20gKi9cclxuICAgIGdldFJvb21Vc2Vyc0FycmF5KHJvb21JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHVzZXJzOiBVc2VyW10gPSBbXVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMucm9vbUV4aXN0cyhyb29tSWQpKSByZXR1cm4gdXNlcnNcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb29tc1tyb29tSWRdLnVzZXJzKS5mb3JFYWNoKHVzZXJJZCA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzLnB1c2godGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdXNlcnNcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmV0dXJucyBhbiBBcnJheSBvZiBhbGwgdXNlcnMgaW4gYWxsIHJvb21zICovXHJcbiAgICBnZXRBbGxVc2Vyc0FycmF5KCkge1xyXG4gICAgICAgIGxldCB1c2VyczogVXNlcltdID0gW11cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb21zKS5mb3JFYWNoKHJvb21JZCA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXNbcm9vbUlkXS51c2VycykuZm9yRWFjaCh1c2VySWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaCh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB1c2Vyc1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3RVc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZCAmJiB0aGlzLmlvTnNwR2FtZS5jb25uZWN0ZWRbdXNlcklkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmlvTnNwR2FtZS5jb25uZWN0ZWRbdXNlcklkXS5kaXNjb25uZWN0KHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUluYWN0aXZlUm9vbXMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSb29tc0FycmF5KCkuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJvb20udXNlcnMgfHwgT2JqZWN0LmtleXMocm9vbS51c2VycykubGVuZ3RoID09PSAwKSB0aGlzLnJlbW92ZVJvb20ocm9vbS5yb29tSWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJbmFjdGl2ZVVzZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsVXNlcnNBcnJheSgpLmZvckVhY2goKHVzZXI6IFVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSB1c2VyLmxhc3RVcGRhdGUgPiBVU0VSX0tJQ0tfVElNRU9VVCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSB0aGlzLnJlbW92ZVVzZXIodXNlci5yb29tSWQsIHVzZXIuaWQsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpc2Nvbm5lY3RlZCA9IHRoaXMuZGlzY29ubmVjdFVzZXIodXNlci5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IFJvb21NYW5hZ2VyIGZyb20gJy4uL21hbmFnZXJzL3Jvb21NYW5hZ2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIHtcclxuICAgIHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXJcclxuICAgIHRpbWUgPSBuZXcgRGF0ZSgpXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJvb21NYW5hZ2VyOiBSb29tTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxuICAgICAgICAvLyBDbGllbnQgU2lkZSBSZW5kZXJcclxuICAgICAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vc3JjL2NsaWVudC9pbmRleC5odG1sJykpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNlcnZlciBTaWRlIFxyXG4gICAgICAgIHRoaXMucm91dGVyLmdldCgnL3Jvb20nLCAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcm9vbUlEIH0gPSBfcmVxLnF1ZXJ5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvb21JRCAmJiByb29tSUQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnJvb21FeGlzdHMocm9vbUlEKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5yZW5kZXIocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL3NyYy9zZXJ2ZXIvcm91dGVzL3ZpZXdzL2NvbnRyb2xsZXInKSwgX3JlcS5xdWVyeSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCcvP3N0YXR1cz1mYWxzZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCcvP3N0YXR1cz1mYWxzZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcclxuXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0J1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKClcclxuY29uc3Qgc2VydmVyID0gcmVxdWlyZSgnaHR0cCcpLlNlcnZlcihhcHApXHJcbmNvbnN0IGVqcyA9IHJlcXVpcmUoJ2VqcycpXHJcblxyXG5pbXBvcnQgU29ja2V0SU9TdGF0aWMgZnJvbSAnc29ja2V0LmlvJ1xyXG5jb25zdCBpbyA9IFNvY2tldElPU3RhdGljKHNlcnZlcilcclxuXHJcbmltcG9ydCBSb29tTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL3Jvb21NYW5hZ2VyJ1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcydcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zb2NrZXQvZ2FtZSdcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9zb2NrZXQvY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwXHJcblxyXG4vLyBjcmVhdGUgc29ja2V0LmlvIG5hbWVzcGFjZVxyXG5jb25zdCBpb05zcEdhbWUgPSBpby5vZignL0cnIC8qIHNob3J0IGZvciBnYW1lICovKVxyXG5jb25zdCBpb05zcENvbnRyb2xsZXIgPSBpby5vZignL0MnIC8qIHNob3J0IGZvciBjb250cm9sbGVyICovKVxyXG5cclxuY29uc3Qgcm9vbU1hbmFnZXIgPSBuZXcgUm9vbU1hbmFnZXIoaW9Oc3BHYW1lLCBpb05zcENvbnRyb2xsZXIpXHJcblxyXG4vLyAvRyBuYW1lc3BhY2VcclxuY29uc3QgaW9HYW1lID0gbmV3IEdhbWUoaW9Oc3BHYW1lLCByb29tTWFuYWdlcik7XHJcblxyXG5hcHAudXNlKGhlbG1ldCgpKVxyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpXHJcblxyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcclxuXHJcbmFwcC51c2UoJy9zdGF0aWMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vY2xpZW50JykpKVxyXG5hcHAudXNlKCcvJywgbmV3IFJvdXRlcyhyb29tTWFuYWdlcikucm91dGVyKVxyXG5cclxuc2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQXBwIGlzIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBwb3J0KVxyXG59KVxyXG4iLCJpbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXHJcbmltcG9ydCB7IEdhbWVTb2NrZXQgfSBmcm9tICcuLi9jdXN0b21UeXBlcyc7XHJcbmltcG9ydCBTb2NrZXRJTyBmcm9tICdzb2NrZXQuaW8nO1xyXG5cclxuLyoqIEhhbmRsZXMgYWxsIHRoZSBjb21tdW5pY2F0aW9uIGZvciAvZ2FtZSBuYW1lc3BhY2UgKGlvTnNwR2FtZSkgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICB0aW1lID0gbmV3IERhdGUoKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpb05zcEdhbWU6IFNvY2tldElPLk5hbWVzcGFjZSwgcHVibGljIHJvb21NYW5hZ2VyOiBSb29tTWFuYWdlcikge1xyXG4gICAgICAgIGlvTnNwR2FtZS5vbignY29ubmVjdGlvbicsIGFzeW5jIChzb2NrZXQ6IEdhbWVTb2NrZXQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICByb29tTWFuYWdlci5nZW5lcmF0ZUNsaWVudElkKHNvY2tldCwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignam9pblJvb20nLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2aW5nIGRhdGEgZnJvbSBjbGllbnQ6ICcpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcm9vbU1hbmFnZXIuam9pblJvb20oc29ja2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm9vbU1hbmFnZXIubGVhdmVSb29tKHNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2NoYW5nZVJvb20nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb29tTWFuYWdlci5jaGFuZ2VSb29tKHNvY2tldClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignc2VuZFBpbmcnLCAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2dldFBvbmcnLCBpZClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignVScgLyogc2hvcnQgZm9yIHVwZGF0ZUR1ZGUgKi8sICh1cGRhdGVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tTWFuYWdlci5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnVzZXJFeGlzdHMoc29ja2V0LnJvb20sIHNvY2tldC5pZCkpIHJldHVyblxyXG5cclxuICAgICAgICAgICAgICAgIHJvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS51c2Vyc1tzb2NrZXQuaWRdLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2dldEluaXRpYWxTdGF0ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tTWFuYWdlci5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnJvb21FeGlzdHMoc29ja2V0LnJvb20pKSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIE8gLyogc2hvcnQgZm9yIG9iamVjdHMgKi86IHJvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS5zY2VuZS5nZXRJbml0aWFsU3RhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0Q291bnRlcjogcm9vbU1hbmFnZXIuZ2V0Um9vbVVzZXJzQXJyYXkoc29ja2V0LnJvb20pLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOiBzb2NrZXQucm9vbVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxyXG4gICAgICAgICAgICAgICAgLy8gaW9Oc3BHYW1lLmluKHNvY2tldC5yb29tKS5lbWl0KCdTJyAvKiBzaG9ydCBmb3Igc3luY0dhbWUgKi8sIHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==