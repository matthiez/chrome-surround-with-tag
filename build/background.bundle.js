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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/icon-128.png":
/*!******************************!*\
  !*** ./src/img/icon-128.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon-128.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2ljb24tMTI4LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvaWNvbi0xMjgucG5nPzM1MGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaWNvbi0xMjgucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/icon-128.png\n");

/***/ }),

/***/ "./src/img/icon-34.png":
/*!*****************************!*\
  !*** ./src/img/icon-34.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon-34.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2ljb24tMzQucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29uLTM0LnBuZz9mZGY2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImljb24tMzQucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/icon-34.png\n");

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon-128.png */ \"./src/img/icon-128.png\");\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icon-34.png */ \"./src/img/icon-34.png\");\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst parentId = \"ecolos_wdt_surround\";\n\n(async () => {\n    const menu = {\n        contexts: [\"selection\"],\n        id: parentId,\n        title: \"Surround with\",\n    };\n\n    await chrome.contextMenus.create(menu);\n\n    await addMenuEntry(\"strong\");\n    await addMenuEntry(\"sup\");\n})();\n\nasync function addMenuEntry(tag) {\n    const onClick = async info => await chrome.tabs.query({\n        active: true,\n        currentWindow: true,\n    }, tabs => chrome.tabs.sendMessage(tabs[0].id, {\n        action: \"tagify\",\n        tag,\n        text: info.selectionText\n    }, () => chrome.notifications.create({\n        type: \"basic\",\n        title: \"Copied to Clipboard!\",\n        message: `Selected text has been surrounded by <${tag}> tags and copied to clipboard.`,\n        iconUrl: \"icon-128.png\"\n    })));\n\n    const menuEntry = {\n        contexts: [\"selection\"],\n        onclick: onClick,\n        parentId,\n        title: `<${tag}></${tag}>`,\n    };\n\n    await chrome.contextMenus.create(menuEntry);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvaWNvbi0xMjgucG5nJ1xuaW1wb3J0ICcuLi9pbWcvaWNvbi0zNC5wbmcnXG5cbmNvbnN0IHBhcmVudElkID0gXCJlY29sb3Nfd2R0X3N1cnJvdW5kXCI7XG5cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IHtcbiAgICAgICAgY29udGV4dHM6IFtcInNlbGVjdGlvblwiXSxcbiAgICAgICAgaWQ6IHBhcmVudElkLFxuICAgICAgICB0aXRsZTogXCJTdXJyb3VuZCB3aXRoXCIsXG4gICAgfTtcblxuICAgIGF3YWl0IGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKG1lbnUpO1xuXG4gICAgYXdhaXQgYWRkTWVudUVudHJ5KFwic3Ryb25nXCIpO1xuICAgIGF3YWl0IGFkZE1lbnVFbnRyeShcInN1cFwiKTtcbn0pKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE1lbnVFbnRyeSh0YWcpIHtcbiAgICBjb25zdCBvbkNsaWNrID0gYXN5bmMgaW5mbyA9PiBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICB9LCB0YWJzID0+IGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYnNbMF0uaWQsIHtcbiAgICAgICAgYWN0aW9uOiBcInRhZ2lmeVwiLFxuICAgICAgICB0YWcsXG4gICAgICAgIHRleHQ6IGluZm8uc2VsZWN0aW9uVGV4dFxuICAgIH0sICgpID0+IGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZSh7XG4gICAgICAgIHR5cGU6IFwiYmFzaWNcIixcbiAgICAgICAgdGl0bGU6IFwiQ29waWVkIHRvIENsaXBib2FyZCFcIixcbiAgICAgICAgbWVzc2FnZTogYFNlbGVjdGVkIHRleHQgaGFzIGJlZW4gc3Vycm91bmRlZCBieSA8JHt0YWd9PiB0YWdzIGFuZCBjb3BpZWQgdG8gY2xpcGJvYXJkLmAsXG4gICAgICAgIGljb25Vcmw6IFwiaWNvbi0xMjgucG5nXCJcbiAgICB9KSkpO1xuXG4gICAgY29uc3QgbWVudUVudHJ5ID0ge1xuICAgICAgICBjb250ZXh0czogW1wic2VsZWN0aW9uXCJdLFxuICAgICAgICBvbmNsaWNrOiBvbkNsaWNrLFxuICAgICAgICBwYXJlbnRJZCxcbiAgICAgICAgdGl0bGU6IGA8JHt0YWd9PjwvJHt0YWd9PmAsXG4gICAgfTtcblxuICAgIGF3YWl0IGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKG1lbnVFbnRyeSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

/******/ });