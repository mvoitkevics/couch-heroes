var __assign = (this && this.__assign) || function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import uuidv4 from 'uuid/v4';
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
                return uuidv4();
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
            return uuidv4();
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
                            socket.emit('roomId', { roomId: socket.room });
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
export default RoomManager;
//# sourceMappingURL=roomManager.js.map