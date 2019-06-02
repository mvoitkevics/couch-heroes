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
    function RoomManager(ioNspGame) {
        var _this = this;
        this.ioNspGame = ioNspGame;
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
    RoomManager.prototype.generateClientId = function (socket) {
        var clientId = Math.random() * 1000;
        socket.clientId = clientId;
        socket.emit('clientId', clientId);
    };
    // the 2 functions below should be better
    RoomManager.prototype.joinRoom = function (socket, isScreen) {
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
                        console.log('hello: ', isScreen);
                        // dont add user if its a screen
                        if (!isScreen) {
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
    RoomManager.prototype.changeRoom = function (socket, isScreen) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.leaveRoom(socket);
                        return [4 /*yield*/, this.joinRoom(socket, isScreen)];
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
/* harmony import */ var _socket_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./socket/controller */ "./src/server/socket/controller.ts");





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
var ioController = new _socket_controller__WEBPACK_IMPORTED_MODULE_9__["default"](ioNspController, roomManager);
app.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.set('view engine', 'ejs');
app.use('/static', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, '../client')));
app.use('/', new _routes_routes__WEBPACK_IMPORTED_MODULE_7__["default"](roomManager).router);
server.listen(port, function () {
    console.log('App is listening on port ' + port);
});


/***/ }),

/***/ "./src/server/socket/controller.ts":
/*!*****************************************!*\
  !*** ./src/server/socket/controller.ts ***!
  \*****************************************/
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
/** Handles all the communication for /controller namespace (ioNspController) */
var Controller = /** @class */ (function () {
    function Controller(ioNspController, roomManager) {
        var _this = this;
        this.ioNspController = ioNspController;
        this.roomManager = roomManager;
        this.time = new Date();
        ioNspController.on('connection', function (socket) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                roomManager.generateClientId(socket);
                socket.on('joinRoom', function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var isScreen;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                isScreen = data.isScreen;
                                return [4 /*yield*/, roomManager.joinRoom(socket, isScreen)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                socket.on('disconnect', function () {
                    roomManager.leaveRoom(socket);
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
    return Controller;
}());
/* harmony default export */ __webpack_exports__["default"] = (Controller);


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
                roomManager.generateClientId(socket);
                socket.on('joinRoom', function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var isScreen;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('receiving data from client: ', data.isScreen);
                                isScreen = data.isScreen;
                                return [4 /*yield*/, roomManager.joinRoom(socket, isScreen)];
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
                socket.on('changeRoom', function (data) {
                    var isScreen = data.isScreen;
                    roomManager.changeRoom(socket, isScreen);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9tYW5hZ2Vycy9yb29tTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zb2NrZXQvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NvY2tldC9nYW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBLElBQU0sb0JBQW9CLEdBQUcsQ0FBQztBQUM5QixJQUFNLGlCQUFpQixHQUFHLEtBQUs7QUFFL0I7SUFHSSxxQkFBbUIsU0FBNkI7UUFBaEQsaUJBS0M7UUFMa0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFGaEQsVUFBSyxHQUFVLEVBQUU7UUFpR2pCLGVBQVUsR0FBRyxVQUFPLE1BQWM7O2dCQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHO29CQUNqQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxRQUFRLEVBQUUsS0FBSztpQkFDbEI7OzthQUNKO1FBRUQsZUFBVSxHQUFHLFVBQU8sTUFBYzs7O2dCQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUTtvQkFBRSxzQkFBTTtnQkFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSTtnQkFFbEMsVUFBVSxDQUFDOzt3QkFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOzs7cUJBQzVCLEVBQUUsSUFBSSxDQUFDOzs7YUFDWDtRQUVELGVBQVUsR0FBRztZQUNULElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztZQUVuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBRXJELHFEQUFxRDtZQUNyRCxJQUFJLFVBQVUsR0FBRyxJQUFJO1lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2dCQUMxQyxJQUNJLEtBQUssR0FBRyxvQkFBb0I7b0JBQzVCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUI7b0JBQ0UsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLE1BQUs7aUJBQ1I7YUFDSjtZQUNELElBQUksVUFBVTtnQkFBRSxPQUFPLFVBQVU7WUFFakMsMkNBQTJDO1lBQzNDLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsbUJBQWMsR0FBRyxVQUFDLElBQVk7WUFDMUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQU0sVUFBVSxHQUFHLDRCQUE0QixDQUFDO1lBQ2hELElBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDN0U7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBakpHLFdBQVcsQ0FBQztZQUNSLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixLQUFJLENBQUMsbUJBQW1CLEVBQUU7UUFDOUIsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNiLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsTUFBa0I7UUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQXlDO0lBQ25DLDhCQUFRLEdBQWQsVUFBZSxNQUFrQixFQUFFLFFBQWlCOzs7Ozt3QkFDaEQsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7NkJBRzVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXhCLHdCQUF3Qjt3QkFDeEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzt3QkFBbEMsU0FBa0M7Ozt3QkFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ2pDLGdDQUFnQzt3QkFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRTs0QkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzt5QkFDdkI7NkJBQU07NEJBQ0gsdUJBQXVCOzRCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2pEOzs7OztLQUNKO0lBRUQsK0JBQVMsR0FBVCxVQUFVLE1BQWtCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTO2FBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0csQ0FBQztJQUVLLGdDQUFVLEdBQWhCLFVBQWlCLE1BQWtCLEVBQUUsUUFBaUI7Ozs7O3dCQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDdEIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDOzt3QkFBckMsU0FBcUM7d0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDOzs7OztLQUM5QjtJQUVELDZCQUFPLEdBQVAsVUFBUSxNQUFrQjs7UUFDdEIsSUFBSSxRQUFRO1lBQ1IsR0FBQyxNQUFNLENBQUMsRUFBRSxJQUFHO2dCQUNULE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNiLFFBQVEsRUFBRSxLQUFLO2FBQ2xCO2VBQ0o7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLGdCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQzdCLFFBQVEsQ0FDZDtRQUNELHVCQUF1QjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFxQztJQUNyQyxnQ0FBVSxHQUFWLFVBQVcsTUFBYyxFQUFFLE1BQWMsRUFBRSxHQUFtQjtRQUFuQixnQ0FBbUI7UUFDMUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRWhGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdkMsT0FBTyxJQUFJO1NBQ2Q7UUFDRCxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxnQ0FBVSxHQUFWLFVBQVcsTUFBYyxFQUFFLE1BQWM7UUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUFFLE9BQU8sSUFBSTtRQUN4RyxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxnQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPLElBQUk7UUFDakQsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJOztZQUNoRSxPQUFPLEtBQUs7SUFDckIsQ0FBQztJQXVERCxtQ0FBYSxHQUFiO1FBQUEsaUJBTUM7UUFMRyxJQUFJLEtBQUssR0FBVyxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsdUNBQWlCLEdBQWpCLFVBQWtCLE1BQWM7UUFBaEMsaUJBU0M7UUFSRyxJQUFJLEtBQUssR0FBVyxFQUFFO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUFFLE9BQU8sS0FBSztRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFNO1lBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsc0NBQWdCLEdBQWhCO1FBQUEsaUJBUUM7UUFQRyxJQUFJLEtBQUssR0FBVyxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFNO2dCQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUNGLE9BQU8sS0FBSztJQUNoQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLE1BQWM7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2pELE9BQU8sSUFBSTtTQUNkO1FBQ0QsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFVO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6RixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQW1CLEdBQW5CO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFVO1lBQ3ZDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLEVBQUU7Z0JBQ2xELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDMUQsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2xEO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNsTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNOO0FBR3ZCO0lBSUksZ0JBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjNDLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUdiLElBQUksQ0FBQyxNQUFNLEdBQUcsOENBQU8sQ0FBQyxNQUFNLEVBQUU7UUFFOUIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHO1lBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsMkNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFFSCxjQUFjO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDbEMsMEVBQTBFO1lBRTFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsMkNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9DQUFvQyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBRVA7QUFDRjtBQUNVO0FBQ2Q7QUFFdkIsSUFBTSxHQUFHLEdBQUcsOENBQU8sRUFBRTtBQUNyQixJQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLGtCQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQzFDLElBQU0sR0FBRyxHQUFHLG1CQUFPLENBQUMsZ0JBQUssQ0FBQztBQUVZO0FBQ3RDLElBQU0sRUFBRSxHQUFHLGdEQUFjLENBQUMsTUFBTSxDQUFDO0FBRWU7QUFDWjtBQUNKO0FBQ2E7QUFFN0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSTtBQUVyQyw2QkFBNkI7QUFDN0IsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7QUFDbEQsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7QUFFOUQsSUFBTSxXQUFXLEdBQUcsSUFBSSw2REFBVyxDQUFDLFNBQVMsQ0FBQztBQUU5QyxlQUFlO0FBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxvREFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVoRCxlQUFlO0FBQ2YsSUFBTSxZQUFZLEdBQUcsSUFBSSwwREFBVSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVsRSxHQUFHLENBQUMsR0FBRyxDQUFDLDZDQUFNLEVBQUUsQ0FBQztBQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLGtEQUFXLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSw4Q0FBTyxDQUFDLE1BQU0sQ0FBQywyQ0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLHNEQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDO0FBQ25ELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRixnRkFBZ0Y7QUFDaEY7SUFHSSxvQkFBbUIsZUFBbUMsRUFBUyxXQUF3QjtRQUF2RixpQkF5Q0M7UUF6Q2tCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnZGLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUdiLGVBQWUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQU8sTUFBa0I7OztnQkFDdEQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFFcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBTyxJQUEyQjs7Ozs7Z0NBQzVDLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBUztnQ0FDekIscUJBQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDOztnQ0FBNUMsU0FBNEM7Ozs7cUJBQy9DLENBQUM7Z0JBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7b0JBQ3BCLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxDQUFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsVUFBQyxPQUFZO29CQUNuRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFBRSxPQUFNO29CQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQUUsT0FBTTtvQkFFM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDdkUsb0ZBQW9GO29CQUNwRixnQ0FBZ0M7b0JBQ2hDLGFBQWE7b0JBQ2IsSUFBSTtnQkFDUixDQUFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDekIsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQUUsT0FBTTtvQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFBRSxPQUFNO29CQUVoRCxJQUFJLE9BQU8sR0FBRzt3QkFDVixJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUk7d0JBQ2YsYUFBYTt3QkFDYixDQUFDLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTt3QkFDakYsY0FBYyxFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTt3QkFDakUsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtxQkFDdEI7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDO29CQUNsRCx3RUFBd0U7Z0JBQzVFLENBQUMsQ0FBQzs7O2FBQ0wsQ0FBQztJQUNOLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNELG9FQUFvRTtBQUNwRTtJQUdJLGNBQW1CLFNBQTZCLEVBQVMsV0FBd0I7UUFBakYsaUJBaURDO1FBakRrQixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRmpGLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUdiLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQU8sTUFBa0I7OztnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFFcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBTyxJQUEyQjs7Ozs7Z0NBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUNuRCxRQUFRLEdBQUssSUFBSSxTQUFULENBQVM7Z0NBQ3pCLHFCQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzs7Z0NBQTVDLFNBQTRDOzs7O3FCQUMvQyxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO29CQUNwQixXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQyxJQUEyQjtvQkFDeEMsNEJBQVEsQ0FBVTtvQkFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2dCQUM1QyxDQUFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxFQUFVO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztnQkFFRixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxVQUFDLE9BQVk7b0JBQ25ELElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUFFLE9BQU07b0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQzt3QkFBRSxPQUFNO29CQUUzRCxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUMzRSxDQUFDLENBQUM7Z0JBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDekIsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQUUsT0FBTTtvQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFBRSxPQUFNO29CQUVoRCxJQUFJLE9BQU8sR0FBRzt3QkFDVixJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUk7d0JBQ2YsYUFBYTt3QkFDYixDQUFDLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTt3QkFDakYsY0FBYyxFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTt3QkFDakUsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtxQkFDdEIsQ0FBQztvQkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUM7b0JBQ2xELHdFQUF3RTtnQkFDNUUsQ0FBQyxDQUFDOzs7YUFDTCxDQUFDO0lBQ04sQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMURELHdDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9zZXJ2ZXIudHNcIik7XG4iLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnXHJcbmltcG9ydCB7IEdhbWVTb2NrZXQsIFJvb21zLCBVc2VycywgUm9vbSwgVXNlciB9IGZyb20gJy4uL2N1c3RvbVR5cGVzJztcclxuXG5jb25zdCBNQVhfUExBWUVSU19QRVJfUk9PTSA9IDRcbmNvbnN0IFVTRVJfS0lDS19USU1FT1VUID0gNjAwMDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbU1hbmFnZXIge1xuICAgIHJvb21zOiBSb29tcyA9IHt9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW9Oc3BHYW1lOiBTb2NrZXRJTy5OYW1lc3BhY2UpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVJbmFjdGl2ZVJvb21zKClcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSW5hY3RpdmVVc2VycygpXG4gICAgICAgIH0sIDEwMDAwKVxuICAgIH1cblxuICAgIGdlbmVyYXRlQ2xpZW50SWQoc29ja2V0OiBHYW1lU29ja2V0KSB7XG4gICAgICAgIGxldCBjbGllbnRJZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwO1xuICAgICAgICBzb2NrZXQuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NsaWVudElkJywgY2xpZW50SWQpO1xuICAgIH1cblxuICAgIC8vIHRoZSAyIGZ1bmN0aW9ucyBiZWxvdyBzaG91bGQgYmUgYmV0dGVyXG4gICAgYXN5bmMgam9pblJvb20oc29ja2V0OiBHYW1lU29ja2V0LCBpc1NjcmVlbjogYm9vbGVhbikge1xuICAgICAgICBzb2NrZXQucm9vbSA9IHRoaXMuY2hvb3NlUm9vbSgpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBnYW1lIGluc3RhbmNlIGlmIHRoaXMgcm9vbSBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgICAgaWYgKCF0aGlzLnJvb21zW3NvY2tldC5yb29tXSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVSb29tKHNvY2tldC5yb29tKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbzogJywgaXNTY3JlZW4pO1xuICAgICAgICAvLyBkb250IGFkZCB1c2VyIGlmIGl0cyBhIHNjcmVlblxuICAgICAgICBpZiAoIWlzU2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFVzZXIoc29ja2V0KVxyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBqb2luIHRoZSBzb2NrZXQgcm9vbVxuICAgICAgICAgICAgc29ja2V0LmpvaW4oc29ja2V0LnJvb20pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgncm9vbUlkJywgc29ja2V0LnJvb20pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtaXR0aW5nIHJvb21JZDogJywgc29ja2V0LnJvb20pO1xyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZWF2ZVJvb20oc29ja2V0OiBHYW1lU29ja2V0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVXNlcihzb2NrZXQucm9vbSwgc29ja2V0LmlkKVxuICAgICAgICB0aGlzLmlvTnNwR2FtZVxuICAgICAgICAgICAgLmluKHNvY2tldC5yb29tKVxuICAgICAgICAgICAgLmVtaXQoJ1MnIC8qIHNob3J0IGZvciBzeW5jR2FtZSAqLywgeyBjb25uZWN0Q291bnRlcjogdGhpcy5nZXRSb29tVXNlcnNBcnJheShzb2NrZXQucm9vbSkubGVuZ3RoIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgY2hhbmdlUm9vbShzb2NrZXQ6IEdhbWVTb2NrZXQsIGlzU2NyZWVuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubGVhdmVSb29tKHNvY2tldClcbiAgICAgICAgYXdhaXQgdGhpcy5qb2luUm9vbShzb2NrZXQsIGlzU2NyZWVuKVxuICAgICAgICBzb2NrZXQuZW1pdCgnY2hhbmdpbmdSb29tJylcbiAgICB9XG5cbiAgICBhZGRVc2VyKHNvY2tldDogR2FtZVNvY2tldCkge1xuICAgICAgICBsZXQgbmV3VXNlcnM6IFVzZXJzID0ge1xuICAgICAgICAgICAgW3NvY2tldC5pZF06IHtcbiAgICAgICAgICAgICAgICByb29tSWQ6IHNvY2tldC5yb29tLFxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6IHNvY2tldC5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICBpZDogc29ja2V0LmlkLFxuICAgICAgICAgICAgICAgIGlzTWFzdGVyOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb29tc1tzb2NrZXQucm9vbV0udXNlcnMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnJvb21zW3NvY2tldC5yb29tXS51c2VycyxcbiAgICAgICAgICAgIC4uLm5ld1VzZXJzXG4gICAgICAgIH1cbiAgICAgICAgLy8gam9pbiB0aGUgc29ja2V0IHJvb21cbiAgICAgICAgc29ja2V0LmpvaW4oc29ja2V0LnJvb20pXG4gICAgfVxuXG4gICAgLyoqIFJlbW92ZWQgdGhlIHVzZXIgZnJvbSB0aGUgcm9vbSAqL1xuICAgIHJlbW92ZVVzZXIocm9vbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBsb2c6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlvTnNwR2FtZS5zb2NrZXRzW3VzZXJJZF0pIHRoaXMuaW9Oc3BHYW1lLnNvY2tldHNbdXNlcklkXS5sZWF2ZShyb29tSWQpXG5cbiAgICAgICAgaWYgKHRoaXMudXNlckV4aXN0cyhyb29tSWQsIHVzZXJJZCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKiogQ2hlY2sgaWYgdGhpcyB1c2VyIGV4aXN0cyAqL1xuICAgIHVzZXJFeGlzdHMocm9vbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb21FeGlzdHMocm9vbUlkKSAmJiB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnMgJiYgdGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF0pIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKiBDaGVjayBpZiB0aGlzIHJvb20gZXhpc3RzICovXG4gICAgcm9vbUV4aXN0cyhyb29tSWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5yb29tcyAmJiB0aGlzLnJvb21zW3Jvb21JZF0pIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlzUmVtb3Zpbmcocm9vbUlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCEhIXRoaXMucm9vbXNbcm9vbUlkXSB8fCB0aGlzLnJvb21zW3Jvb21JZF0ucmVtb3ZpbmcpIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY3JlYXRlUm9vbSA9IGFzeW5jIChyb29tSWQ6IHN0cmluZykgPT4ge1xuXG4gICAgICAgIHRoaXMucm9vbXNbcm9vbUlkXSA9IHtcbiAgICAgICAgICAgIHJvb21JZDogcm9vbUlkLFxuICAgICAgICAgICAgdXNlcnM6IHt9LFxuICAgICAgICAgICAgcmVtb3Zpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVSb29tID0gYXN5bmMgKHJvb21JZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJvb21zW3Jvb21JZF0ucmVtb3ZpbmcpIHJldHVyblxuXG4gICAgICAgIHRoaXMucm9vbXNbcm9vbUlkXS5yZW1vdmluZyA9IHRydWVcblxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb21zW3Jvb21JZF1cbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG5cbiAgICBjaG9vc2VSb29tID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIGxldCByb29tcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vbXMpXG5cbiAgICAgICAgaWYgKHJvb21zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSb29tSUQoNClcblxuICAgICAgICAvLyBjaGVjayBmb3IgdGhlIG5leHQgcm9vbSB3aXRoIDEgb3IgbW9yZSBmcmVlIHNwYWNlc1xuICAgICAgICBsZXQgY2hvc2VuUm9vbSA9IG51bGxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnJvb21zKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvb20gPSB0aGlzLnJvb21zW3Jvb21zW2ldXVxuICAgICAgICAgICAgbGV0IGNvdW50ID0gT2JqZWN0LmtleXMocm9vbS51c2VycykubGVuZ3RoXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY291bnQgPCBNQVhfUExBWUVSU19QRVJfUk9PTSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmlzUmVtb3Zpbmcocm9vbXNbaV0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjaG9zZW5Sb29tID0gcm9vbXNbaV1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaG9zZW5Sb29tKSByZXR1cm4gY2hvc2VuUm9vbVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyByb29tIHdpdGggYSBuZXcgNCBsZXR0ZXIgaWRcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSb29tSUQoNCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSb29tSUQgPSAoc2l6ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XG5cbiAgICBnZXRSb29tc0FycmF5KCkge1xuICAgICAgICBsZXQgcm9vbXM6IFJvb21bXSA9IFtdXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXMpLmZvckVhY2gocm9vbUlkID0+IHtcbiAgICAgICAgICAgIHJvb21zLnB1c2godGhpcy5yb29tc1tyb29tSWRdKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcm9vbXNcbiAgICB9XG5cbiAgICAvKiogUmV0dXJucyBhbiBBcnJheSBvZiBhbGwgdXNlcnMgaW4gYSBzcGVjaWZpYyByb29tICovXG4gICAgZ2V0Um9vbVVzZXJzQXJyYXkocm9vbUlkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHVzZXJzOiBVc2VyW10gPSBbXVxuXG4gICAgICAgIGlmICghdGhpcy5yb29tRXhpc3RzKHJvb21JZCkpIHJldHVybiB1c2Vyc1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXNbcm9vbUlkXS51c2VycykuZm9yRWFjaCh1c2VySWQgPT4ge1xuICAgICAgICAgICAgdXNlcnMucHVzaCh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHVzZXJzXG4gICAgfVxuXG4gICAgLyoqIFJldHVybnMgYW4gQXJyYXkgb2YgYWxsIHVzZXJzIGluIGFsbCByb29tcyAqL1xuICAgIGdldEFsbFVzZXJzQXJyYXkoKSB7XG4gICAgICAgIGxldCB1c2VyczogVXNlcltdID0gW11cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb29tcykuZm9yRWFjaChyb29tSWQgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb29tc1tyb29tSWRdLnVzZXJzKS5mb3JFYWNoKHVzZXJJZCA9PiB7XG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaCh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB1c2Vyc1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmlvTnNwR2FtZS5jb25uZWN0ZWQgJiYgdGhpcy5pb05zcEdhbWUuY29ubmVjdGVkW3VzZXJJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZFt1c2VySWRdLmRpc2Nvbm5lY3QodHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVtb3ZlSW5hY3RpdmVSb29tcygpIHtcbiAgICAgICAgdGhpcy5nZXRSb29tc0FycmF5KCkuZm9yRWFjaCgocm9vbTogUm9vbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyb29tLnVzZXJzIHx8IE9iamVjdC5rZXlzKHJvb20udXNlcnMpLmxlbmd0aCA9PT0gMCkgdGhpcy5yZW1vdmVSb29tKHJvb20ucm9vbUlkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbW92ZUluYWN0aXZlVXNlcnMoKSB7XG4gICAgICAgIHRoaXMuZ2V0QWxsVXNlcnNBcnJheSgpLmZvckVhY2goKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdXNlci5sYXN0VXBkYXRlID4gVVNFUl9LSUNLX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IHRoaXMucmVtb3ZlVXNlcih1c2VyLnJvb21JZCwgdXNlci5pZCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgbGV0IGRpc2Nvbm5lY3RlZCA9IHRoaXMuZGlzY29ubmVjdFVzZXIodXNlci5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBSb29tTWFuYWdlciBmcm9tICcuLi9tYW5hZ2Vycy9yb29tTWFuYWdlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIHtcbiAgICByb3V0ZXI6IGV4cHJlc3MuUm91dGVyXG4gICAgdGltZSA9IG5ldyBEYXRlKClcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb29tTWFuYWdlcjogUm9vbU1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbiAgICAgICAgLy8gQ2xpZW50IFNpZGUgUmVuZGVyXG4gICAgICAgIHRoaXMucm91dGVyLmdldCgnLycsIChfcmVxLCByZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9zcmMvY2xpZW50L2luZGV4Lmh0bWwnKSlcclxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXJ2ZXIgU2lkZVxuICAgICAgICB0aGlzLnJvdXRlci5nZXQoJy86cm9vbUlEJywgKF9yZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9kaXN0L2NsaWVudC92aWV3cy9yb29tLmh0bWwnKSlcblxuICAgICAgICAgICAgcmVzLnJlbmRlcihwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vc3JjL3NlcnZlci9yb3V0ZXMvdmlld3Mvcm9vbScpKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IHNlcnZlciA9IHJlcXVpcmUoJ2h0dHAnKS5TZXJ2ZXIoYXBwKVxuY29uc3QgZWpzID0gcmVxdWlyZSgnZWpzJylcblxuaW1wb3J0IFNvY2tldElPU3RhdGljIGZyb20gJ3NvY2tldC5pbydcbmNvbnN0IGlvID0gU29ja2V0SU9TdGF0aWMoc2VydmVyKVxuXG5pbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9yb29tTWFuYWdlcidcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcm91dGVzJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zb2NrZXQvZ2FtZSdcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vc29ja2V0L2NvbnRyb2xsZXInO1xyXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcblxuLy8gY3JlYXRlIHNvY2tldC5pbyBuYW1lc3BhY2VcbmNvbnN0IGlvTnNwR2FtZSA9IGlvLm9mKCcvRycgLyogc2hvcnQgZm9yIGdhbWUgKi8pXG5jb25zdCBpb05zcENvbnRyb2xsZXIgPSBpby5vZignL0MnIC8qIHNob3J0IGZvciBjb250cm9sbGVyICovKVxuXG5jb25zdCByb29tTWFuYWdlciA9IG5ldyBSb29tTWFuYWdlcihpb05zcEdhbWUpXG5cbi8vIC9HIG5hbWVzcGFjZVxuY29uc3QgaW9HYW1lID0gbmV3IEdhbWUoaW9Oc3BHYW1lLCByb29tTWFuYWdlcik7XG5cbi8vIC9DIG5hbWVzcGFjZVxuY29uc3QgaW9Db250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoaW9Oc3BDb250cm9sbGVyLCByb29tTWFuYWdlcik7XG5cbmFwcC51c2UoaGVsbWV0KCkpXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpXG5cbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuXG5hcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudCcpKSlcbmFwcC51c2UoJy8nLCBuZXcgUm91dGVzKHJvb21NYW5hZ2VyKS5yb3V0ZXIpXG5cbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJyArIHBvcnQpXG59KVxuIiwiaW1wb3J0IFJvb21NYW5hZ2VyIGZyb20gJy4uL21hbmFnZXJzL3Jvb21NYW5hZ2VyJ1xuaW1wb3J0IHsgR2FtZVNvY2tldCB9IGZyb20gJy4uL2N1c3RvbVR5cGVzJztcclxuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pbyc7XG5cbi8qKiBIYW5kbGVzIGFsbCB0aGUgY29tbXVuaWNhdGlvbiBmb3IgL2NvbnRyb2xsZXIgbmFtZXNwYWNlIChpb05zcENvbnRyb2xsZXIpICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICB0aW1lID0gbmV3IERhdGUoKVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGlvTnNwQ29udHJvbGxlcjogU29ja2V0SU8uTmFtZXNwYWNlLCBwdWJsaWMgcm9vbU1hbmFnZXI6IFJvb21NYW5hZ2VyKSB7XG4gICAgICAgIGlvTnNwQ29udHJvbGxlci5vbignY29ubmVjdGlvbicsIGFzeW5jIChzb2NrZXQ6IEdhbWVTb2NrZXQpID0+IHtcbiAgICAgICAgICAgIHJvb21NYW5hZ2VyLmdlbmVyYXRlQ2xpZW50SWQoc29ja2V0KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2pvaW5Sb29tJywgYXN5bmMgKGRhdGE6IHsgaXNTY3JlZW46IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNTY3JlZW4gfSA9IGRhdGFcbiAgICAgICAgICAgICAgICBhd2FpdCByb29tTWFuYWdlci5qb2luUm9vbShzb2NrZXQsIGlzU2NyZWVuKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb21NYW5hZ2VyLmxlYXZlUm9vbShzb2NrZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ1UnIC8qIHNob3J0IGZvciB1cGRhdGVEdWRlICovLCAodXBkYXRlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21NYW5hZ2VyLmlzUmVtb3Zpbmcoc29ja2V0LnJvb20pKSByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnVzZXJFeGlzdHMoc29ja2V0LnJvb20sIHNvY2tldC5pZCkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgcm9vbU1hbmFnZXIucm9vbXNbc29ja2V0LnJvb21dLnVzZXJzW3NvY2tldC5pZF0ubGFzdFVwZGF0ZSA9IERhdGUubm93KClcbiAgICAgICAgICAgICAgICAvL3Jvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS5zY2VuZS5ldmVudHMuZW1pdCgnVScgLyogc2hvcnQgZm9yIHVwZGF0ZUR1ZGUgKi8sIHtcbiAgICAgICAgICAgICAgICAvLyAgICBjbGllbnRJZDogc29ja2V0LmNsaWVudElkLFxuICAgICAgICAgICAgICAgIC8vICAgIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICAvL30pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2dldEluaXRpYWxTdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm9vbU1hbmFnZXIuaXNSZW1vdmluZyhzb2NrZXQucm9vbSkpIHJldHVyblxuICAgICAgICAgICAgICAgIGlmICghcm9vbU1hbmFnZXIucm9vbUV4aXN0cyhzb2NrZXQucm9vbSkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBPIC8qIHNob3J0IGZvciBvYmplY3RzICovOiByb29tTWFuYWdlci5yb29tc1tzb2NrZXQucm9vbV0uc2NlbmUuZ2V0SW5pdGlhbFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RDb3VudGVyOiByb29tTWFuYWdlci5nZXRSb29tVXNlcnNBcnJheShzb2NrZXQucm9vbSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogc29ja2V0LnJvb21cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgIC8vIGlvTnNwR2FtZS5pbihzb2NrZXQucm9vbSkuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXG5pbXBvcnQgeyBHYW1lU29ja2V0IH0gZnJvbSAnLi4vY3VzdG9tVHlwZXMnO1xyXG5pbXBvcnQgU29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJztcblxuLyoqIEhhbmRsZXMgYWxsIHRoZSBjb21tdW5pY2F0aW9uIGZvciAvZ2FtZSBuYW1lc3BhY2UgKGlvTnNwR2FtZSkgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW9Oc3BHYW1lOiBTb2NrZXRJTy5OYW1lc3BhY2UsIHB1YmxpYyByb29tTWFuYWdlcjogUm9vbU1hbmFnZXIpIHtcbiAgICAgICAgaW9Oc3BHYW1lLm9uKCdjb25uZWN0aW9uJywgYXN5bmMgKHNvY2tldDogR2FtZVNvY2tldCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgcm9vbU1hbmFnZXIuZ2VuZXJhdGVDbGllbnRJZChzb2NrZXQpXG5cbiAgICAgICAgICAgIHNvY2tldC5vbignam9pblJvb20nLCBhc3luYyAoZGF0YTogeyBpc1NjcmVlbjogYm9vbGVhbiB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmluZyBkYXRhIGZyb20gY2xpZW50OiAnLCBkYXRhLmlzU2NyZWVuKTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzU2NyZWVuIH0gPSBkYXRhXG4gICAgICAgICAgICAgICAgYXdhaXQgcm9vbU1hbmFnZXIuam9pblJvb20oc29ja2V0LCBpc1NjcmVlbilcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICByb29tTWFuYWdlci5sZWF2ZVJvb20oc29ja2V0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2NoYW5nZVJvb20nLCAoZGF0YTogeyBpc1NjcmVlbjogYm9vbGVhbiB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1NjcmVlbiB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICByb29tTWFuYWdlci5jaGFuZ2VSb29tKHNvY2tldCwgaXNTY3JlZW4pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ3NlbmRQaW5nJywgKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnZ2V0UG9uZycsIGlkKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc29ja2V0Lm9uKCdVJyAvKiBzaG9ydCBmb3IgdXBkYXRlRHVkZSAqLywgKHVwZGF0ZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb29tTWFuYWdlci5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKCFyb29tTWFuYWdlci51c2VyRXhpc3RzKHNvY2tldC5yb29tLCBzb2NrZXQuaWQpKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHJvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS51c2Vyc1tzb2NrZXQuaWRdLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzb2NrZXQub24oJ2dldEluaXRpYWxTdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm9vbU1hbmFnZXIuaXNSZW1vdmluZyhzb2NrZXQucm9vbSkpIHJldHVyblxuICAgICAgICAgICAgICAgIGlmICghcm9vbU1hbmFnZXIucm9vbUV4aXN0cyhzb2NrZXQucm9vbSkpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBPIC8qIHNob3J0IGZvciBvYmplY3RzICovOiByb29tTWFuYWdlci5yb29tc1tzb2NrZXQucm9vbV0uc2NlbmUuZ2V0SW5pdGlhbFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RDb3VudGVyOiByb29tTWFuYWdlci5nZXRSb29tVXNlcnNBcnJheShzb2NrZXQucm9vbSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogc29ja2V0LnJvb21cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ1MnIC8qIHNob3J0IGZvciBzeW5jR2FtZSAqLywgcGF5bG9hZClcbiAgICAgICAgICAgICAgICAvLyBpb05zcEdhbWUuaW4oc29ja2V0LnJvb20pLmVtaXQoJ1MnIC8qIHNob3J0IGZvciBzeW5jR2FtZSAqLywgcGF5bG9hZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=