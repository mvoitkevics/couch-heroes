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

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: SKINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKINS", function() { return SKINS; });
var SKINS = {
    DUDE: 0,
    BOX: 1,
    STAR: 2,
    MUMMY: 3
};


/***/ }),

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
        // Server Side Render
        this.router.get('/', function (_req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../../src/client/index.html'));
        });
        // Client Side Render
        this.router.get('/game', function (_req, res) {
            res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../../dist/client/views/room/index.html'));
        });
        // Server Side 
        this.router.get('/room', function (_req, res) {
            var roomID = _req.query.roomID;
            if (roomID && roomID !== '') {
                if (roomManager.roomExists(roomID)) {
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21hbmFnZXJzL3Jvb21NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3JvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NvY2tldC9nYW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gs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d0JBQ2IsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7d0JBQ2pGLGNBQWMsRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07d0JBQ2pFLFlBQVksRUFBRSxJQUFJO3dCQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7cUJBQ3RCLENBQUM7b0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDO29CQUNsRCx3RUFBd0U7Z0JBQzVFLENBQUMsQ0FBQzs7O2FBQ0wsQ0FBQztJQUNOLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hERCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3RCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvc2VydmVyLnRzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IFNLSU5TID0ge1xyXG4gICAgRFVERTogMCxcclxuICAgIEJPWDogMSxcclxuICAgIFNUQVI6IDIsXHJcbiAgICBNVU1NWTogM1xyXG4gIH0iLCJjb25zdCBNQVhfUExBWUVSU19QRVJfUk9PTSA9IDRcclxuY29uc3QgVVNFUl9LSUNLX1RJTUVPVVQgPSA2MDAwMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbU1hbmFnZXIge1xyXG4gICAgcm9vbXM6IFJvb21zID0ge31cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW9Oc3BHYW1lOiBTb2NrZXRJTy5OYW1lc3BhY2UsIHB1YmxpYyBpb05zcENvbnRyb2xsZXI6IFNvY2tldElPLk5hbWVzcGFjZSkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVJbmFjdGl2ZVJvb21zKClcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVJbmFjdGl2ZVVzZXJzKClcclxuICAgICAgICB9LCAxMDAwMClcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNsaWVudElkKHNvY2tldDogR2FtZVNvY2tldCwgaXNTY3JlZW46IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgY2xpZW50SWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDtcclxuICAgICAgICBzb2NrZXQuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICBzb2NrZXQuaXNTY3JlZW4gPSBpc1NjcmVlbjtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnY2xpZW50SWQnLCBjbGllbnRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIDIgZnVuY3Rpb25zIGJlbG93IHNob3VsZCBiZSBiZXR0ZXJcclxuICAgIGFzeW5jIGpvaW5Sb29tKHNvY2tldDogR2FtZVNvY2tldCkge1xyXG4gICAgICAgIHNvY2tldC5yb29tID0gdGhpcy5jaG9vc2VSb29tKCk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBnYW1lIGluc3RhbmNlIGlmIHRoaXMgcm9vbSBkb2VzIG5vdCBleGlzdCB5ZXRcclxuICAgICAgICBpZiAoIXRoaXMucm9vbXNbc29ja2V0LnJvb21dKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlUm9vbShzb2NrZXQucm9vbSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvOiAnLCBzb2NrZXQuaXNTY3JlZW4pO1xyXG4gICAgICAgIC8vIGRvbnQgYWRkIHVzZXIgaWYgaXRzIGEgc2NyZWVuXHJcbiAgICAgICAgaWYgKCFzb2NrZXQuaXNTY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRVc2VyKHNvY2tldClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBqb2luIHRoZSBzb2NrZXQgcm9vbVxyXG4gICAgICAgICAgICBzb2NrZXQuam9pbihzb2NrZXQucm9vbSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdyb29tSWQnLCBzb2NrZXQucm9vbSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW1pdHRpbmcgcm9vbUlkOiAnLCBzb2NrZXQucm9vbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxlYXZlUm9vbShzb2NrZXQ6IEdhbWVTb2NrZXQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVVzZXIoc29ja2V0LnJvb20sIHNvY2tldC5pZClcclxuICAgICAgICB0aGlzLmlvTnNwR2FtZVxyXG4gICAgICAgICAgICAuaW4oc29ja2V0LnJvb20pXHJcbiAgICAgICAgICAgIC5lbWl0KCdTJyAvKiBzaG9ydCBmb3Igc3luY0dhbWUgKi8sIHsgY29ubmVjdENvdW50ZXI6IHRoaXMuZ2V0Um9vbVVzZXJzQXJyYXkoc29ja2V0LnJvb20pLmxlbmd0aCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoYW5nZVJvb20oc29ja2V0OiBHYW1lU29ja2V0KSB7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVJvb20oc29ja2V0KVxyXG4gICAgICAgIGF3YWl0IHRoaXMuam9pblJvb20oc29ja2V0KVxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdjaGFuZ2luZ1Jvb20nKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXIoc29ja2V0OiBHYW1lU29ja2V0KSB7XHJcbiAgICAgICAgbGV0IG5ld1VzZXJzOiBVc2VycyA9IHtcclxuICAgICAgICAgICAgW3NvY2tldC5pZF06IHtcclxuICAgICAgICAgICAgICAgIHJvb21JZDogc29ja2V0LnJvb20sXHJcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6IHNvY2tldC5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgIGlkOiBzb2NrZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBpc01hc3RlcjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb29tc1tzb2NrZXQucm9vbV0udXNlcnMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucm9vbXNbc29ja2V0LnJvb21dLnVzZXJzLFxyXG4gICAgICAgICAgICAuLi5uZXdVc2Vyc1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBqb2luIHRoZSBzb2NrZXQgcm9vbVxyXG4gICAgICAgIHNvY2tldC5qb2luKHNvY2tldC5yb29tKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSZW1vdmVkIHRoZSB1c2VyIGZyb20gdGhlIHJvb20gKi9cclxuICAgIHJlbW92ZVVzZXIocm9vbUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBsb2c6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW9Oc3BHYW1lLnNvY2tldHNbdXNlcklkXSkgdGhpcy5pb05zcEdhbWUuc29ja2V0c1t1c2VySWRdLmxlYXZlKHJvb21JZClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlckV4aXN0cyhyb29tSWQsIHVzZXJJZCkpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vbXNbcm9vbUlkXS51c2Vyc1t1c2VySWRdXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDaGVjayBpZiB0aGlzIHVzZXIgZXhpc3RzICovXHJcbiAgICB1c2VyRXhpc3RzKHJvb21JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnJvb21FeGlzdHMocm9vbUlkKSAmJiB0aGlzLnJvb21zW3Jvb21JZF0udXNlcnMgJiYgdGhpcy5yb29tc1tyb29tSWRdLnVzZXJzW3VzZXJJZF0pIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENoZWNrIGlmIHRoaXMgcm9vbSBleGlzdHMgKi9cclxuICAgIHJvb21FeGlzdHMocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5yb29tcyAmJiB0aGlzLnJvb21zW3Jvb21JZF0pIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaXNSZW1vdmluZyhyb29tSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghISF0aGlzLnJvb21zW3Jvb21JZF0gfHwgdGhpcy5yb29tc1tyb29tSWRdLnJlbW92aW5nKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUm9vbSA9IGFzeW5jIChyb29tSWQ6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnJvb21zW3Jvb21JZF0gPSB7XHJcbiAgICAgICAgICAgIHJvb21JZDogcm9vbUlkLFxyXG4gICAgICAgICAgICB1c2Vyczoge30sXHJcbiAgICAgICAgICAgIHJlbW92aW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVSb29tID0gYXN5bmMgKHJvb21JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vbXNbcm9vbUlkXS5yZW1vdmluZykgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMucm9vbXNbcm9vbUlkXS5yZW1vdmluZyA9IHRydWVcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb21zW3Jvb21JZF1cclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgfVxyXG5cclxuICAgIGNob29zZVJvb20gPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBsZXQgcm9vbXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb21zKVxyXG5cclxuICAgICAgICBpZiAocm9vbXMubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcy5nZW5lcmF0ZVJvb21JRCg0KVxyXG5cclxuICAgICAgICAvLyBjaGVjayBmb3IgdGhlIG5leHQgcm9vbSB3aXRoIDEgb3IgbW9yZSBmcmVlIHNwYWNlc1xyXG4gICAgICAgIGxldCBjaG9zZW5Sb29tID0gbnVsbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5yb29tcykubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvb20gPSB0aGlzLnJvb21zW3Jvb21zW2ldXVxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSBPYmplY3Qua2V5cyhyb29tLnVzZXJzKS5sZW5ndGhcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY291bnQgPCBNQVhfUExBWUVSU19QRVJfUk9PTSAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNSZW1vdmluZyhyb29tc1tpXSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjaG9zZW5Sb29tID0gcm9vbXNbaV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNob3NlblJvb20pIHJldHVybiBjaG9zZW5Sb29tXHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyByb29tIHdpdGggYSBuZXcgNCBsZXR0ZXIgaWRcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVJvb21JRCg0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvb21JRCA9IChzaXplOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb29tc0FycmF5KCkge1xyXG4gICAgICAgIGxldCByb29tczogUm9vbVtdID0gW11cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb21zKS5mb3JFYWNoKHJvb21JZCA9PiB7XHJcbiAgICAgICAgICAgIHJvb21zLnB1c2godGhpcy5yb29tc1tyb29tSWRdKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJvb21zXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJldHVybnMgYW4gQXJyYXkgb2YgYWxsIHVzZXJzIGluIGEgc3BlY2lmaWMgcm9vbSAqL1xyXG4gICAgZ2V0Um9vbVVzZXJzQXJyYXkocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdXNlcnM6IFVzZXJbXSA9IFtdXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5yb29tRXhpc3RzKHJvb21JZCkpIHJldHVybiB1c2Vyc1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnMpLmZvckVhY2godXNlcklkID0+IHtcclxuICAgICAgICAgICAgdXNlcnMucHVzaCh0aGlzLnJvb21zW3Jvb21JZF0udXNlcnNbdXNlcklkXSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB1c2Vyc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSZXR1cm5zIGFuIEFycmF5IG9mIGFsbCB1c2VycyBpbiBhbGwgcm9vbXMgKi9cclxuICAgIGdldEFsbFVzZXJzQXJyYXkoKSB7XHJcbiAgICAgICAgbGV0IHVzZXJzOiBVc2VyW10gPSBbXVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucm9vbXMpLmZvckVhY2gocm9vbUlkID0+IHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5yb29tc1tyb29tSWRdLnVzZXJzKS5mb3JFYWNoKHVzZXJJZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2Vycy5wdXNoKHRoaXMucm9vbXNbcm9vbUlkXS51c2Vyc1t1c2VySWRdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHVzZXJzXHJcbiAgICB9XHJcblxyXG4gICAgZGlzY29ubmVjdFVzZXIodXNlcklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pb05zcEdhbWUuY29ubmVjdGVkICYmIHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZFt1c2VySWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW9Oc3BHYW1lLmNvbm5lY3RlZFt1c2VySWRdLmRpc2Nvbm5lY3QodHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSW5hY3RpdmVSb29tcygpIHtcclxuICAgICAgICB0aGlzLmdldFJvb21zQXJyYXkoKS5mb3JFYWNoKChyb29tOiBSb29tKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcm9vbS51c2VycyB8fCBPYmplY3Qua2V5cyhyb29tLnVzZXJzKS5sZW5ndGggPT09IDApIHRoaXMucmVtb3ZlUm9vbShyb29tLnJvb21JZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUluYWN0aXZlVXNlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxVc2Vyc0FycmF5KCkuZm9yRWFjaCgodXNlcjogVXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHVzZXIubGFzdFVwZGF0ZSA+IFVTRVJfS0lDS19USU1FT1VUKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IHRoaXMucmVtb3ZlVXNlcih1c2VyLnJvb21JZCwgdXNlci5pZCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzY29ubmVjdGVkID0gdGhpcy5kaXNjb25uZWN0VXNlcih1c2VyLmlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvcm9vbU1hbmFnZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXMge1xyXG4gICAgcm91dGVyOiBleHByZXNzLlJvdXRlclxyXG4gICAgdGltZSA9IG5ldyBEYXRlKClcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm9vbU1hbmFnZXI6IFJvb21NYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG4gICAgICAgIC8vIFNlcnZlciBTaWRlIFJlbmRlclxyXG4gICAgICAgIHRoaXMucm91dGVyLmdldCgnLycsIChfcmVxLCByZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9zcmMvY2xpZW50L2luZGV4Lmh0bWwnKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xpZW50IFNpZGUgUmVuZGVyXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZ2V0KCcvZ2FtZScsIChfcmVxLCByZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9kaXN0L2NsaWVudC92aWV3cy9yb29tL2luZGV4Lmh0bWwnKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VydmVyIFNpZGUgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZ2V0KCcvcm9vbScsIChfcmVxLCByZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyByb29tSUQgfSA9IF9yZXEucXVlcnk7XHJcblxyXG4gICAgICAgICAgICBpZiAocm9vbUlEICYmIHJvb21JRCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tTWFuYWdlci5yb29tRXhpc3RzKHJvb21JRCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMucmVuZGVyKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9zcmMvc2VydmVyL3JvdXRlcy92aWV3cy9jb250cm9sbGVyJyksIF9yZXEucXVlcnkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnLz9zdGF0dXM9ZmFsc2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnLz9zdGF0dXM9ZmFsc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXHJcblxyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCdcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcbmNvbnN0IHNlcnZlciA9IHJlcXVpcmUoJ2h0dHAnKS5TZXJ2ZXIoYXBwKVxyXG5jb25zdCBlanMgPSByZXF1aXJlKCdlanMnKVxyXG5cclxuaW1wb3J0IFNvY2tldElPU3RhdGljIGZyb20gJ3NvY2tldC5pbydcclxuY29uc3QgaW8gPSBTb2NrZXRJT1N0YXRpYyhzZXJ2ZXIpXHJcblxyXG5pbXBvcnQgUm9vbU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9yb29tTWFuYWdlcidcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnXHJcbmltcG9ydCBHYW1lIGZyb20gJy4vc29ja2V0L2dhbWUnXHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vc29ja2V0L2NvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxyXG5cclxuLy8gY3JlYXRlIHNvY2tldC5pbyBuYW1lc3BhY2VcclxuY29uc3QgaW9Oc3BHYW1lID0gaW8ub2YoJy9HJyAvKiBzaG9ydCBmb3IgZ2FtZSAqLylcclxuY29uc3QgaW9Oc3BDb250cm9sbGVyID0gaW8ub2YoJy9DJyAvKiBzaG9ydCBmb3IgY29udHJvbGxlciAqLylcclxuXHJcbmNvbnN0IHJvb21NYW5hZ2VyID0gbmV3IFJvb21NYW5hZ2VyKGlvTnNwR2FtZSwgaW9Oc3BDb250cm9sbGVyKVxyXG5cclxuLy8gL0cgbmFtZXNwYWNlXHJcbmNvbnN0IGlvR2FtZSA9IG5ldyBHYW1lKGlvTnNwR2FtZSwgcm9vbU1hbmFnZXIpO1xyXG5cclxuYXBwLnVzZShoZWxtZXQoKSlcclxuYXBwLnVzZShjb21wcmVzc2lvbigpKVxyXG5cclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XHJcblxyXG5hcHAudXNlKCcvc3RhdGljJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudCcpKSlcclxuYXBwLnVzZSgnLycsIG5ldyBSb3V0ZXMocm9vbU1hbmFnZXIpLnJvdXRlcilcclxuXHJcbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0FwcCBpcyBsaXN0ZW5pbmcgb24gcG9ydCAnICsgcG9ydClcclxufSlcclxuIiwiaW1wb3J0IFJvb21NYW5hZ2VyIGZyb20gJy4uL21hbmFnZXJzL3Jvb21NYW5hZ2VyJ1xyXG5pbXBvcnQgU29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJztcclxuaW1wb3J0ICcuLi8uLi9jb25zdGFudHMnO1xyXG5cclxuLyoqIEhhbmRsZXMgYWxsIHRoZSBjb21tdW5pY2F0aW9uIGZvciAvZ2FtZSBuYW1lc3BhY2UgKGlvTnNwR2FtZSkgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICB0aW1lID0gbmV3IERhdGUoKVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpb05zcEdhbWU6IFNvY2tldElPLk5hbWVzcGFjZSwgcHVibGljIHJvb21NYW5hZ2VyOiBSb29tTWFuYWdlcikge1xyXG4gICAgICAgIGlvTnNwR2FtZS5vbignY29ubmVjdGlvbicsIGFzeW5jIChzb2NrZXQ6IEdhbWVTb2NrZXQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICByb29tTWFuYWdlci5nZW5lcmF0ZUNsaWVudElkKHNvY2tldCwgdHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignam9pblJvb20nLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2aW5nIGRhdGEgZnJvbSBjbGllbnQ6ICcpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcm9vbU1hbmFnZXIuam9pblJvb20oc29ja2V0KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm9vbU1hbmFnZXIubGVhdmVSb29tKHNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2NoYW5nZVJvb20nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb29tTWFuYWdlci5jaGFuZ2VSb29tKHNvY2tldClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignc2VuZFBpbmcnLCAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2dldFBvbmcnLCBpZClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignVScgLyogc2hvcnQgZm9yIHVwZGF0ZUR1ZGUgKi8sICh1cGRhdGVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tTWFuYWdlci5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnVzZXJFeGlzdHMoc29ja2V0LnJvb20sIHNvY2tldC5pZCkpIHJldHVyblxyXG5cclxuICAgICAgICAgICAgICAgIHJvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS51c2Vyc1tzb2NrZXQuaWRdLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2dldEluaXRpYWxTdGF0ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tTWFuYWdlci5pc1JlbW92aW5nKHNvY2tldC5yb29tKSkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvb21NYW5hZ2VyLnJvb21FeGlzdHMoc29ja2V0LnJvb20pKSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIE8gLyogc2hvcnQgZm9yIG9iamVjdHMgKi86IHJvb21NYW5hZ2VyLnJvb21zW3NvY2tldC5yb29tXS5zY2VuZS5nZXRJbml0aWFsU3RhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0Q291bnRlcjogcm9vbU1hbmFnZXIuZ2V0Um9vbVVzZXJzQXJyYXkoc29ja2V0LnJvb20pLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOiBzb2NrZXQucm9vbVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnUycgLyogc2hvcnQgZm9yIHN5bmNHYW1lICovLCBwYXlsb2FkKVxyXG4gICAgICAgICAgICAgICAgLy8gaW9Oc3BHYW1lLmluKHNvY2tldC5yb29tKS5lbWl0KCdTJyAvKiBzaG9ydCBmb3Igc3luY0dhbWUgKi8sIHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==