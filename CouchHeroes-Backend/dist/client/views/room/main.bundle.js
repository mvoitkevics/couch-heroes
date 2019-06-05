/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "static/views/room/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/views/room/components/animations.ts":
/*!********************************************************!*\
  !*** ./src/client/views/room/components/animations.ts ***!
  \********************************************************/
/*! exports provided: createDudeAnimations, setDudeAnimation, createMummyAnimation, setMummyAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDudeAnimations\", function() { return createDudeAnimations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDudeAnimation\", function() { return setDudeAnimation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMummyAnimation\", function() { return createMummyAnimation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMummyAnimation\", function() { return setMummyAnimation; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ \"./src/constants.ts\");\n\r\nvar createDudeAnimations = function (scene) {\r\n    scene.anims.create({\r\n        key: 'left',\r\n        frames: scene.anims.generateFrameNumbers(_constants__WEBPACK_IMPORTED_MODULE_0__[\"SKINS\"].DUDE.toString(), { start: 0, end: 3 }),\r\n        frameRate: 10,\r\n        repeat: -1\r\n    });\r\n    scene.anims.create({\r\n        key: 'idle',\r\n        frames: [{ key: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SKINS\"].DUDE.toString(), frame: 4 }],\r\n        frameRate: 20\r\n    });\r\n    scene.anims.create({\r\n        key: 'right',\r\n        frames: scene.anims.generateFrameNumbers(_constants__WEBPACK_IMPORTED_MODULE_0__[\"SKINS\"].DUDE.toString(), { start: 5, end: 8 }),\r\n        frameRate: 10,\r\n        repeat: -1\r\n    });\r\n};\r\nvar setDudeAnimation = function (sprite, animation) {\r\n    if (animation === void 0) { animation = 'idle'; }\r\n    if (!sprite.anims.isPlaying)\r\n        sprite.play(animation);\r\n    else if (sprite.anims.isPlaying && sprite.anims.getCurrentKey() !== animation)\r\n        sprite.play(animation);\r\n};\r\nvar createMummyAnimation = function (scene) {\r\n    scene.anims.create({\r\n        key: 'walk',\r\n        frames: scene.anims.generateFrameNumbers(_constants__WEBPACK_IMPORTED_MODULE_0__[\"SKINS\"].MUMMY.toString(), {}),\r\n        frameRate: 16,\r\n        repeat: 7\r\n    });\r\n};\r\nvar setMummyAnimation = function (sprite, direction) {\r\n    if (!sprite.anims.isPlaying)\r\n        sprite.anims.play('walk');\r\n    var flipX = direction === 'left' ? true : false;\r\n    sprite.setFlipX(flipX);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/animations.ts?");

/***/ }),

/***/ "./src/client/views/room/components/controls.ts":
/*!******************************************************!*\
  !*** ./src/client/views/room/components/controls.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Controls = /** @class */ (function () {\r\n    function Controls(scene, socket) {\r\n        var _this = this;\r\n        this.scene = scene;\r\n        this.socket = socket;\r\n        this.left = false;\r\n        this.right = false;\r\n        this.up = false;\r\n        this.controls = [];\r\n        this.none = true;\r\n        this.prevNone = true;\r\n        // add a second pointer\r\n        scene.input.addPointer();\r\n        var detectPointer = function (gameObject, down) {\r\n            if (gameObject.btn) {\r\n                switch (gameObject.btn) {\r\n                    case 'left':\r\n                        _this.left = down;\r\n                        break;\r\n                    case 'right':\r\n                        _this.right = down;\r\n                        break;\r\n                    case 'up':\r\n                        _this.up = down;\r\n                        break;\r\n                }\r\n            }\r\n        };\r\n        scene.input.on('gameobjectdown', function (pointer, gameObject) {\r\n            return detectPointer(gameObject, true);\r\n        });\r\n        scene.input.on('gameobjectup', function (pointer, gameObject) {\r\n            return detectPointer(gameObject, false);\r\n        });\r\n        var left = new Control(scene, 0, 0, 'left').setRotation(-0.5 * Math.PI);\r\n        var right = new Control(scene, 0, 0, 'right').setRotation(0.5 * Math.PI);\r\n        var up = new Control(scene, 0, 0, 'up');\r\n        this.controls.push(left, right, up);\r\n        this.resize();\r\n        this.scene.events.on('update', this.update, this);\r\n    }\r\n    Controls.prototype.controlsDown = function () {\r\n        return { left: this.left, right: this.right, up: this.up, none: this.none };\r\n    };\r\n    Controls.prototype.resize = function () {\r\n        var SCALE = 1;\r\n        var controlsRadius = (192 / 2) * SCALE;\r\n        var w = this.scene.cameras.main.width - 10 - controlsRadius;\r\n        var h = this.scene.cameras.main.height - 10 - controlsRadius;\r\n        var positions = [\r\n            {\r\n                x: controlsRadius + 10,\r\n                y: h\r\n            },\r\n            { x: controlsRadius + 214, y: h },\r\n            { x: w, y: h }\r\n        ];\r\n        this.controls.forEach(function (ctl, i) {\r\n            ctl.setPosition(positions[i].x, positions[i].y);\r\n            ctl.setScale(SCALE);\r\n        });\r\n    };\r\n    Controls.prototype.update = function () {\r\n        this.none = this.left || this.right || this.up ? false : true;\r\n        if (!this.none || this.none !== this.prevNone) {\r\n            var total = 0;\r\n            if (this.left)\r\n                total += 1;\r\n            if (this.right)\r\n                total += 2;\r\n            if (this.up)\r\n                total += 4;\r\n            if (this.none)\r\n                total += 8;\r\n            this.socket.emit('U' /* short for updateDude */, total);\r\n        }\r\n        this.prevNone = this.none;\r\n    };\r\n    return Controls;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controls);\r\nvar Control = /** @class */ (function (_super) {\r\n    __extends(Control, _super);\r\n    function Control(scene, x, y, btn) {\r\n        var _this = _super.call(this, scene, x, y, 'controls') || this;\r\n        _this.btn = btn;\r\n        scene.add.existing(_this);\r\n        _this.setInteractive()\r\n            .setScrollFactor(0)\r\n            .setAlpha(0.5)\r\n            .setDepth(2);\r\n        if (!scene.sys.game.device.input.touch)\r\n            _this.setAlpha(0);\r\n        return _this;\r\n    }\r\n    return Control;\r\n}(Phaser.GameObjects.Image));\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/controls.ts?");

/***/ }),

/***/ "./src/client/views/room/components/cursors.ts":
/*!*****************************************************!*\
  !*** ./src/client/views/room/components/cursors.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Cursors = /** @class */ (function () {\r\n    function Cursors(scene, socket) {\r\n        this.scene = scene;\r\n        this.socket = socket;\r\n        this.none = true;\r\n        this.prevNone = true;\r\n        this.left = false;\r\n        this.right = false;\r\n        this.up = false;\r\n        this.cursors = scene.input.keyboard.createCursorKeys();\r\n        this.scene.events.on('update', this.update, this);\r\n    }\r\n    Cursors.prototype.cursorsDown = function () {\r\n        return { left: this.left, right: this.right, up: this.up, none: this.none };\r\n    };\r\n    Cursors.prototype.update = function () {\r\n        if (!this.cursors.left || !this.cursors.right || !this.cursors.up)\r\n            return;\r\n        this.none = this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.up.isDown ? false : true;\r\n        if (!this.none || this.none !== this.prevNone) {\r\n            this.left = false;\r\n            this.right = false;\r\n            this.up = false;\r\n            if (this.cursors.left.isDown) {\r\n                this.left = true;\r\n            }\r\n            else if (this.cursors.right.isDown) {\r\n                this.right = true;\r\n            }\r\n            if (this.cursors.up.isDown) {\r\n                this.up = true;\r\n            }\r\n        }\r\n        this.prevNone = this.none;\r\n    };\r\n    return Cursors;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursors);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/cursors.ts?");

/***/ }),

/***/ "./src/client/views/room/components/fullscreenButton.ts":
/*!**************************************************************!*\
  !*** ./src/client/views/room/components/fullscreenButton.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar fullscreenButton = function (scene) {\r\n    var button = scene.add\r\n        .image(0, 0, 'fullscreen', 0)\r\n        .setOrigin(1, 0)\r\n        .setInteractive()\r\n        .setScrollFactor(0)\r\n        .setDepth(100);\r\n    button.on('pointerup', function () {\r\n        if (scene.scale.isFullscreen) {\r\n            button.setFrame(0);\r\n            scene.scale.stopFullscreen();\r\n        }\r\n        else {\r\n            button.setFrame(1);\r\n            scene.scale.startFullscreen();\r\n        }\r\n    });\r\n    return button;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fullscreenButton);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/fullscreenButton.ts?");

/***/ }),

/***/ "./src/client/views/room/components/fullscreenEvent.ts":
/*!*************************************************************!*\
  !*** ./src/client/views/room/components/fullscreenEvent.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// listen for fullscreen change event\r\nvar FullScreenEvent = function (callback) {\r\n    var fullScreenChange = function () {\r\n        var times = [50, 100, 200, 500, 1000, 2000, 5000];\r\n        times.forEach(function (time) {\r\n            window.setTimeout(function () {\r\n                callback();\r\n            }, time);\r\n        });\r\n    };\r\n    var vendors = ['webkit', 'moz', 'ms', ''];\r\n    vendors.forEach(function (prefix) {\r\n        document.addEventListener(prefix + 'fullscreenchange', fullScreenChange, false);\r\n    });\r\n    document.addEventListener('MSFullscreenChange', fullScreenChange, false);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullScreenEvent);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/fullscreenEvent.ts?");

/***/ }),

/***/ "./src/client/views/room/components/resize.ts":
/*!****************************************************!*\
  !*** ./src/client/views/room/components/resize.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * This is a phaser 3 scaling strategy implementation from\r\n * https://github.com/yandeu/phaser3-scaling-resizing-example\r\n */\r\nvar DEFAULT_WIDTH = 896;\r\nvar DEFAULT_HEIGHT = 504;\r\nvar MAX_WIDTH = DEFAULT_WIDTH * 1.5;\r\nvar MAX_HEIGHT = DEFAULT_HEIGHT * 1.5;\r\nvar SCALE_MODE = 'SMOOTH'; // FIT OR SMOOTH\r\nvar resize = function (game) {\r\n    var w = window.innerWidth;\r\n    var h = window.innerHeight;\r\n    var width = DEFAULT_WIDTH;\r\n    var height = DEFAULT_HEIGHT;\r\n    var maxWidth = MAX_WIDTH;\r\n    var maxHeight = MAX_HEIGHT;\r\n    var scaleMode = SCALE_MODE;\r\n    var scale = Math.min(w / width, h / height);\r\n    var newWidth = Math.min(w / scale, maxWidth);\r\n    var newHeight = Math.min(h / scale, maxHeight);\r\n    var defaultRatio = DEFAULT_WIDTH / DEFAULT_HEIGHT;\r\n    var maxRatioWidth = MAX_WIDTH / DEFAULT_HEIGHT;\r\n    var maxRatioHeight = DEFAULT_WIDTH / MAX_HEIGHT;\r\n    // smooth scaling\r\n    var smooth = 1;\r\n    if (scaleMode === 'SMOOTH') {\r\n        var maxSmoothScale = 1.15;\r\n        var normalize = function (value, min, max) {\r\n            return (value - min) / (max - min);\r\n        };\r\n        if (width / height < w / h) {\r\n            smooth =\r\n                -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;\r\n        }\r\n        else {\r\n            smooth =\r\n                -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale;\r\n        }\r\n    }\r\n    // resize the game\r\n    game.scale.resize(newWidth * smooth, newHeight * smooth);\r\n    // scale the width and height of the css\r\n    game.canvas.style.width = newWidth * scale + 'px';\r\n    game.canvas.style.height = newHeight * scale + 'px';\r\n    // center the game with css margin\r\n    game.canvas.style.marginTop = (h - newHeight * scale) / 2 + \"px\";\r\n    game.canvas.style.marginLeft = (w - newWidth * scale) / 2 + \"px\";\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (resize);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/resize.ts?");

/***/ }),

/***/ "./src/client/views/room/components/texts.ts":
/*!***************************************************!*\
  !*** ./src/client/views/room/components/texts.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar texts = [\r\n    {\r\n        text: '',\r\n        y: 200,\r\n        fontSize: 28,\r\n        type: 'server_running_time'\r\n    },\r\n    {\r\n        text: 'Server is located in Europe',\r\n        y: 230,\r\n        fontSize: 28\r\n    },\r\n    {\r\n        text: '',\r\n        y: 260,\r\n        fontSize: 28,\r\n        type: 'the_room_id'\r\n    },\r\n    {\r\n        text: '',\r\n        y: 290,\r\n        fontSize: 28,\r\n        type: 'show_connected_users'\r\n    },\r\n    {\r\n        text: '',\r\n        y: 320,\r\n        fontSize: 28,\r\n        type: 'show_latency'\r\n    },\r\n    {\r\n        text: '',\r\n        y: 350,\r\n        fontSize: 28,\r\n        type: 'show_fps'\r\n    }\r\n];\r\nvar Texts = /** @class */ (function () {\r\n    function Texts(scene) {\r\n        var _this = this;\r\n        this.scene = scene;\r\n        this.textObjects = [];\r\n        this.hidden = false;\r\n        texts.forEach(function (text) {\r\n            var theText = scene.add\r\n                .text(scene.cameras.main.width / 2, text.y, text.text, {\r\n                color: '#ffffff',\r\n                fontSize: text.fontSize\r\n            })\r\n                .setOrigin(0.5)\r\n                .setResolution(window.devicePixelRatio)\r\n                .setScrollFactor(0)\r\n                .setDepth(100);\r\n            _this.textObjects.push({ text: theText, type: text.type || undefined });\r\n        });\r\n        this.makeBug();\r\n        this.resize();\r\n        this.toggleHidden();\r\n        this.scene.events.on('update', this.update, this);\r\n    }\r\n    Texts.prototype.update = function () {\r\n        if (this.hidden)\r\n            return;\r\n        this.setFps(this.scene.game.loop.actualFps);\r\n    };\r\n    Texts.prototype.makeBug = function () {\r\n        var _this = this;\r\n        this.bug = this.scene.add\r\n            .image(0, 0, 'bug')\r\n            .setOrigin(0)\r\n            .setScrollFactor(0)\r\n            .setDepth(100);\r\n        this.bug.setInteractive().on('pointerdown', function () {\r\n            _this.toggleHidden();\r\n        });\r\n    };\r\n    Texts.prototype.toggleHidden = function () {\r\n        var _this = this;\r\n        this.hidden = !this.hidden;\r\n        this.textObjects.forEach(function (textObj) {\r\n            textObj.text.setAlpha(_this.hidden ? 0 : 1);\r\n        });\r\n    };\r\n    Texts.prototype.resize = function () {\r\n        var _this = this;\r\n        this.textObjects.forEach(function (textObj) {\r\n            textObj.text.setPosition(_this.scene.cameras.main.width / 2, textObj.text.y);\r\n        });\r\n        if (this.bug)\r\n            this.bug.setPosition(16, 16);\r\n    };\r\n    Texts.prototype.setConnectCounter = function (connectCounter) {\r\n        this.textObjects.forEach(function (t) {\r\n            if (t.type && t.type === 'show_connected_users')\r\n                t.text.setText(\"Connected users: \" + connectCounter + \"/4\");\r\n        });\r\n    };\r\n    Texts.prototype.setRoomId = function (roomId) {\r\n        this.textObjects.forEach(function (t) {\r\n            if (t.type && t.type === 'the_room_id')\r\n                t.text.setText(\"RoomId \" + roomId);\r\n        });\r\n    };\r\n    Texts.prototype.setTime = function (time) {\r\n        this.textObjects.forEach(function (t) {\r\n            if (t.type && t.type === 'server_running_time')\r\n                t.text.setText(\"Server is running since \" + new Date(time).toUTCString());\r\n        });\r\n    };\r\n    Texts.prototype.setFps = function (fps) {\r\n        this.textObjects.forEach(function (t) {\r\n            if (t.type && t.type === 'show_fps')\r\n                t.text.setText(\"fps: \" + Math.round(fps));\r\n        });\r\n    };\r\n    Texts.prototype.setLatency = function (latency) {\r\n        if (isNaN(latency.current))\r\n            return;\r\n        if (isNaN(latency.high) || latency.current > latency.high)\r\n            latency.high = latency.current;\r\n        if (isNaN(latency.low) || latency.current < latency.low)\r\n            latency.low = latency.current;\r\n        var sum = latency.history.reduce(function (previous, current) { return (current += previous); });\r\n        var avg = sum / latency.history.length;\r\n        this.textObjects.forEach(function (t) {\r\n            if (t.type && t.type === 'show_latency')\r\n                t.text.setText(\"Latency \" + latency.current + \"ms (avg \" + Math.round(avg) + \"ms / low \" + latency.low + \"ms / high \" + latency.high + \"ms)\");\r\n        });\r\n    };\r\n    return Texts;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Texts);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/components/texts.ts?");

/***/ }),

/***/ "./src/client/views/room/config.ts":
/*!*****************************************!*\
  !*** ./src/client/views/room/config.ts ***!
  \*****************************************/
/*! exports provided: world, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"world\", function() { return world; });\n/* harmony import */ var _scenes_preloadScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/preloadScene */ \"./src/client/views/room/scenes/preloadScene.ts\");\n/* harmony import */ var _scenes_menuScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/menuScene */ \"./src/client/views/room/scenes/menuScene.ts\");\n/* harmony import */ var _scenes_mainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/mainScene */ \"./src/client/views/room/scenes/mainScene.ts\");\n\r\n\r\n\r\nvar DEFAULT_WIDTH = 1280;\r\nvar DEFAULT_HEIGHT = 720;\r\n// the size of the world\r\nvar world = {\r\n    x: 0,\r\n    y: 0,\r\n    width: 2560,\r\n    height: 864\r\n};\r\nvar config = {\r\n    type: Phaser.WEBGL,\r\n    backgroundColor: '#ffffff',\r\n    scale: {\r\n        parent: 'phaser-game',\r\n        mode: Phaser.Scale.NONE,\r\n        width: DEFAULT_WIDTH,\r\n        height: DEFAULT_HEIGHT\r\n    },\r\n    scene: [_scenes_preloadScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_menuScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_mainScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\r\n    physics: {\r\n        default: 'matter',\r\n        matter: {\r\n            gravity: {\r\n                y: 0.8\r\n            },\r\n            debug: false,\r\n            debugBodyColor: 0xff00ff\r\n        }\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/config.ts?");

/***/ }),

/***/ "./src/client/views/room/game.ts":
/*!***************************************!*\
  !*** ./src/client/views/room/game.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/client/views/room/config.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Game = /** @class */ (function (_super) {\r\n    __extends(Game, _super);\r\n    function Game() {\r\n        return _super.call(this, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) || this;\r\n    }\r\n    return Game;\r\n}(Phaser.Game));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/game.ts?");

/***/ }),

/***/ "./src/client/views/room/index.ts":
/*!****************************************!*\
  !*** ./src/client/views/room/index.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resize */ \"./src/client/views/room/components/resize.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/client/views/room/game.ts\");\n/* harmony import */ var _components_fullscreenEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fullscreenEvent */ \"./src/client/views/room/components/fullscreenEvent.ts\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n    var game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    window.addEventListener('resize', function () {\r\n        Object(_components_resize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(game);\r\n    });\r\n    Object(_components_fullscreenEvent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function () { return Object(_components_resize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(game); });\r\n    Object(_components_resize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(game);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/index.ts?");

/***/ }),

/***/ "./src/client/views/room/scenes/mainScene.ts":
/*!***************************************************!*\
  !*** ./src/client/views/room/scenes/mainScene.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_texts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/texts */ \"./src/client/views/room/components/texts.ts\");\n/* harmony import */ var _components_cursors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cursors */ \"./src/client/views/room/components/cursors.ts\");\n/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/animations */ \"./src/client/views/room/components/animations.ts\");\n/* harmony import */ var _components_fullscreenButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/fullscreenButton */ \"./src/client/views/room/components/fullscreenButton.ts\");\n/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls */ \"./src/client/views/room/components/controls.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./src/client/views/room/config.ts\");\n/* harmony import */ var _components_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/resize */ \"./src/client/views/room/components/resize.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants */ \"./src/constants.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar MainScene = /** @class */ (function (_super) {\r\n    __extends(MainScene, _super);\r\n    function MainScene() {\r\n        var _this = _super.call(this, { key: 'MainScene' }) || this;\r\n        _this.objects = {};\r\n        _this.sync = {\r\n            initialState: false,\r\n            objects: []\r\n        };\r\n        _this.latency = {\r\n            current: NaN,\r\n            high: NaN,\r\n            low: NaN,\r\n            ping: NaN,\r\n            id: '',\r\n            canSend: true,\r\n            history: []\r\n        };\r\n        _this.level = 0;\r\n        return _this;\r\n    }\r\n    MainScene.prototype.init = function (props) {\r\n        var scene = props.scene, _a = props.level, level = _a === void 0 ? 0 : _a, socket = props.socket;\r\n        this.level = level;\r\n        this.socket = socket;\r\n        this.socket.emit('joinRoom', { scene: scene, level: level });\r\n    };\r\n    MainScene.prototype.create = function () {\r\n        var _this = this;\r\n        var socket = this.socket;\r\n        var levelText = this.add\r\n            .text(0, 0, \"Level \" + (this.level + 1), {\r\n            color: '#ffffff',\r\n            fontSize: 42\r\n        })\r\n            .setOrigin(0.5, 0)\r\n            .setDepth(100)\r\n            .setScrollFactor(0);\r\n        var starfield = this.add.tileSprite(_config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].x, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].y, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].width, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].height, 'starfield').setOrigin(0);\r\n        this.cursors = new _components_cursors__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, socket);\r\n        this.controls = new _components_controls__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, socket);\r\n        var texts = new _components_texts__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\r\n        var fullscreenBtn = Object(_components_fullscreenButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this);\r\n        this.cameras.main.setBounds(_config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].x, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].y, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].width, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].height);\r\n        socket.on('getPong', function (id) {\r\n            if (_this.latency.id !== id)\r\n                return;\r\n            _this.latency.canSend = true;\r\n            _this.latency.current = new Date().getTime() - _this.latency.ping;\r\n            if (_this.latency.history.length >= 200)\r\n                _this.latency.history.shift();\r\n            _this.latency.history.push(_this.latency.current);\r\n            texts.setLatency(_this.latency);\r\n        });\r\n        this.time.addEvent({\r\n            delay: 250,\r\n            loop: true,\r\n            callback: function () {\r\n                if (!_this.latency.canSend)\r\n                    return;\r\n                if (texts.hidden)\r\n                    return;\r\n                _this.latency.ping = new Date().getTime();\r\n                _this.latency.id = Phaser.Math.RND.uuid();\r\n                _this.latency.canSend = false;\r\n                socket.emit('sendPing', _this.latency.id);\r\n            }\r\n        });\r\n        socket.on('changingRoom', function (data) {\r\n            console.log('You are changing room');\r\n            // destroy all objects and get new onces\r\n            Object.keys(_this.objects).forEach(function (key) {\r\n                _this.objects[key].sprite.destroy();\r\n                delete _this.objects[key];\r\n            });\r\n            socket.emit('getInitialState');\r\n            _this.level = data.level | 0;\r\n            levelText.setText(\"Level \" + (_this.level + 1));\r\n        });\r\n        socket.on('S' /* short for syncGame */, function (res) {\r\n            if (res.connectCounter)\r\n                texts.setConnectCounter(res.connectCounter);\r\n            if (res.time)\r\n                texts.setTime(res.time);\r\n            if (res.roomId)\r\n                texts.setRoomId(res.roomId);\r\n            // res.O (objects) contains only the objects that need to be updated\r\n            if (res.O /* short for objects */) {\r\n                //res.O = SyncManager.decode(res.O)\r\n                _this.sync.objects = _this.sync.objects.concat(res.O);\r\n                _this.sync.objects.forEach(function (obj) {\r\n                    // the if the player's dude is in the objects list the camera follows it sprite\r\n                    if (_this.objects[obj.id] && obj.skin === _constants__WEBPACK_IMPORTED_MODULE_7__[\"SKINS\"].DUDE && obj.clientId && +obj.clientId === +socket.clientId) {\r\n                        _this.cameras.main.setScroll(obj.x - _this.cameras.main.width / 2, obj.y - _this.cameras.main.height / 2);\r\n                    }\r\n                    // if the object does not exist, create a new one\r\n                    if (!_this.objects[obj.id]) {\r\n                        var sprite_1 = _this.add\r\n                            .sprite(obj.x, obj.y, obj.skin.toString())\r\n                            .setOrigin(0.5)\r\n                            .setRotation(obj.angle || 0);\r\n                        // add the sprite by id to the objects object\r\n                        _this.objects[obj.id] = {\r\n                            sprite: sprite_1\r\n                        };\r\n                    }\r\n                    // set some properties to the sprite\r\n                    var sprite = _this.objects[obj.id].sprite;\r\n                    // set scale\r\n                    if (obj.scale) {\r\n                        sprite.setScale(obj.scale);\r\n                    }\r\n                    // set scale\r\n                    if (obj.tint) {\r\n                        sprite.setTint(obj.tint);\r\n                    }\r\n                    // set visibility\r\n                    sprite.setVisible(!obj.dead);\r\n                });\r\n            }\r\n        });\r\n        // request the initial state\r\n        socket.emit('getInitialState');\r\n        // request the initial state every 15 seconds\r\n        // to make sure all objects are up to date\r\n        // in case we missed one (network issues)\r\n        // should be sent from the server side not the client\r\n        // this.time.addEvent({\r\n        //   delay: 15000,\r\n        //   loop: true,\r\n        //   callback: () => {\r\n        //     socket.emit('getInitialState')\r\n        //   }\r\n        // })\r\n        // request the initial state if the game gets focus\r\n        // e.g. if the users comes from another tab or window\r\n        this.game.events.on('focus', function () { return socket.emit('getInitialState'); });\r\n        // this helps debugging\r\n        this.input.on('pointerdown', function (pointer) {\r\n            console.log(pointer.worldX, pointer.worldY);\r\n        });\r\n        var resize = function () {\r\n            starfield.setScale(Math.max(_this.cameras.main.height / starfield.height, 1));\r\n            texts.resize();\r\n            if (_this.controls)\r\n                _this.controls.resize();\r\n            fullscreenBtn.setPosition(_this.cameras.main.width - 16, 16);\r\n            _this.cameras.main.setScroll(_this.cameras.main.worldView.x, _config__WEBPACK_IMPORTED_MODULE_5__[\"world\"].height);\r\n            levelText.setPosition(_this.cameras.main.width / 2, 20);\r\n        };\r\n        this.scale.on('resize', function (gameSize, baseSize, displaySize, resolution) {\r\n            _this.cameras.resize(gameSize.width, gameSize.height);\r\n            resize();\r\n        });\r\n        Object(_components_resize__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.game);\r\n    };\r\n    MainScene.prototype.update = function (time, delta) {\r\n        var _this = this;\r\n        // update all objects\r\n        if (this.sync.objects.length > 0) {\r\n            this.sync.objects.forEach(function (obj) {\r\n                if (_this.objects[obj.id]) {\r\n                    var sprite = _this.objects[obj.id].sprite;\r\n                    if (obj.dead !== null)\r\n                        sprite.setVisible(!obj.dead);\r\n                    if (obj.x !== null)\r\n                        sprite.x = obj.x;\r\n                    if (obj.y !== null)\r\n                        sprite.y = obj.y;\r\n                    if (obj.angle !== null && typeof obj.angle !== 'undefined')\r\n                        sprite.angle = obj.angle;\r\n                    if (obj.skin !== null) {\r\n                        if (obj.skin === _constants__WEBPACK_IMPORTED_MODULE_7__[\"SKINS\"].MUMMY) {\r\n                            if (obj.direction !== null)\r\n                                Object(_components_animations__WEBPACK_IMPORTED_MODULE_2__[\"setMummyAnimation\"])(sprite, obj.direction);\r\n                        }\r\n                        if (obj.skin === _constants__WEBPACK_IMPORTED_MODULE_7__[\"SKINS\"].DUDE) {\r\n                            if (obj.animation !== null)\r\n                                Object(_components_animations__WEBPACK_IMPORTED_MODULE_2__[\"setDudeAnimation\"])(sprite, obj.animation);\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n        }\r\n        this.sync.objects = [];\r\n    };\r\n    return MainScene;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScene);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/scenes/mainScene.ts?");

/***/ }),

/***/ "./src/client/views/room/scenes/menuScene.ts":
/*!***************************************************!*\
  !*** ./src/client/views/room/scenes/menuScene.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/resize */ \"./src/client/views/room/components/resize.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar MenuScene = /** @class */ (function (_super) {\r\n    __extends(MenuScene, _super);\r\n    function MenuScene() {\r\n        return _super.call(this, { key: 'MenuScene' }) || this;\r\n    }\r\n    MenuScene.prototype.init = function (props) {\r\n        var socket = props.socket;\r\n        this.socket = socket;\r\n    };\r\n    MenuScene.prototype.create = function () {\r\n        var _this = this;\r\n        var styles = {\r\n            color: '#000000',\r\n            align: 'center',\r\n            fontSize: 52\r\n        };\r\n        var texts = [];\r\n        texts.push(this.add.text(0, 0, 'Choose which Level\\nyou want to play', styles).setOrigin(0.5, 0));\r\n        texts.push(this.add\r\n            .text(0, 0, 'Matter Physics', styles)\r\n            .setOrigin(0.5, 0)\r\n            .setInteractive()\r\n            .on('pointerdown', function () {\r\n            _this.scene.start('MainScene', { scene: 'MatterScene', level: 0, socket: _this.socket });\r\n        }));\r\n        texts.push(this.add\r\n            .text(0, 0, 'Arcade Physics (Level 1)', styles)\r\n            .setOrigin(0.5, 0)\r\n            .setInteractive()\r\n            .on('pointerdown', function () {\r\n            _this.scene.start('MainScene', { scene: 'ArcadeScene', level: 0, socket: _this.socket });\r\n        }));\r\n        texts.push(this.add\r\n            .text(0, 0, 'Arcade Physics (Level 2)', styles)\r\n            .setOrigin(0.5, 0)\r\n            .setInteractive()\r\n            .on('pointerdown', function () {\r\n            _this.scene.stop();\r\n            _this.scene.start('MainScene', { scene: 'ArcadeScene', level: 1, socket: _this.socket });\r\n        }));\r\n        texts.push(this.add\r\n            .text(0, 0, 'Arcade Physics (Level 3)', styles)\r\n            .setOrigin(0.5, 0)\r\n            .setInteractive()\r\n            .on('pointerdown', function () {\r\n            _this.scene.stop();\r\n            _this.scene.start('MainScene', { scene: 'ArcadeScene', level: 2, socket: _this.socket });\r\n        }));\r\n        var resize = function () {\r\n            var _a = _this.cameras.main, centerX = _a.centerX, centerY = _a.centerY;\r\n            var posY = [20, centerY - 100, centerY - 10, centerY + 60, centerY + 130];\r\n            texts.forEach(function (text, i) {\r\n                text.setPosition(centerX, posY[i]);\r\n            });\r\n        };\r\n        this.scale.on('resize', function (gameSize, baseSize, displaySize, resolution) {\r\n            if (!_this.scene.isActive())\r\n                return;\r\n            _this.cameras.resize(gameSize.width, gameSize.height);\r\n            resize();\r\n        });\r\n        resize();\r\n        Object(_components_resize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.game);\r\n    };\r\n    return MenuScene;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuScene);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/scenes/menuScene.ts?");

/***/ }),

/***/ "./src/client/views/room/scenes/preloadScene.ts":
/*!******************************************************!*\
  !*** ./src/client/views/room/scenes/preloadScene.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/animations */ \"./src/client/views/room/components/animations.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ \"./src/constants.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar PreloadScene = /** @class */ (function (_super) {\r\n    __extends(PreloadScene, _super);\r\n    function PreloadScene() {\r\n        return _super.call(this, { key: 'PreloadScene' }) || this;\r\n    }\r\n    PreloadScene.prototype.preload = function () {\r\n        this.load.setBaseURL('static/client');\r\n        this.load.image(_constants__WEBPACK_IMPORTED_MODULE_2__[\"SKINS\"].BOX.toString(), 'assets/box.png');\r\n        this.load.image(_constants__WEBPACK_IMPORTED_MODULE_2__[\"SKINS\"].STAR.toString(), 'assets/star.png');\r\n        this.load.image('bug', 'assets/bug.png');\r\n        this.load.image('starfield', 'assets/starfield.jpg');\r\n        this.load.image('controls', 'assets/controls.png');\r\n        this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_2__[\"SKINS\"].DUDE.toString(), 'assets/dude.png', {\r\n            frameWidth: 32,\r\n            frameHeight: 48\r\n        });\r\n        this.load.spritesheet('fullscreen', 'assets/fullscreen.png', {\r\n            frameWidth: 64,\r\n            frameHeight: 64\r\n        });\r\n        this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_2__[\"SKINS\"].MUMMY.toString(), 'assets/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });\r\n    };\r\n    PreloadScene.prototype.create = function () {\r\n        var _this = this;\r\n        Object(_components_animations__WEBPACK_IMPORTED_MODULE_1__[\"createDudeAnimations\"])(this);\r\n        Object(_components_animations__WEBPACK_IMPORTED_MODULE_1__[\"createMummyAnimation\"])(this);\r\n        // connecting to socket.io\r\n        var url = location.origin + \"/G\"; /* short for stats */\r\n        var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a.connect(url, { transports: ['websocket'] });\r\n        // on reconnection, reset the transports option, as the Websocket\r\n        // connection may have failed (caused by proxy, firewall, browser, ...)\r\n        socket.on('reconnect_attempt', function () {\r\n            socket.io.opts.transports = ['polling', 'websocket'];\r\n        });\r\n        socket.on('connect', function () {\r\n            console.log(\"You're connected to socket.io\");\r\n        });\r\n        // we wait until we have a valid clientId, then start the MainScene\r\n        socket.on('clientId', function (clientId) {\r\n            socket.clientId = clientId;\r\n            console.log('Your client id', clientId);\r\n            _this.scene.start('MenuScene', { socket: socket });\r\n        });\r\n    };\r\n    return PreloadScene;\r\n}(Phaser.Scene));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreloadScene);\r\n\n\n//# sourceURL=webpack:///./src/client/views/room/scenes/preloadScene.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: SKINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SKINS\", function() { return SKINS; });\nvar SKINS = {\r\n    DUDE: 0,\r\n    BOX: 1,\r\n    STAR: 2,\r\n    MUMMY: 3\r\n};\r\n\n\n//# sourceURL=webpack:///./src/constants.ts?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/client/views/room/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/client/views/room/index.ts */\"./src/client/views/room/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/client/views/room/index.ts?");

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///ws_(ignored)?");

/***/ })

/******/ });