/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp */ \"./src/temp.js\");\n\r\n\r\n//API KEY FOR GIF: DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR\r\n//  API KEY FOR WEATHER: 6828c8e901ce61eba78b5d02535eeed1\r\n\r\n// KEY USAGE WEATHER: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6828c8e901ce61eba78b5d02535eeed1\r\n// KEY USAGE GIF: 'https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s=cats'\r\n\r\n\r\n// let input = document.querySelector('.userInput');\r\n// async function postData(url = ''){\r\n//   const response = await fetch(url, {\r\n//     method: 'GET',\r\n//     mode: 'cors',\r\n//   })\r\n//   return response.json();\r\n// }\r\n\r\n// const run = () => {\r\n//   let grab = postData(`https://api.openweathermap.org/data/2.5/weather?q=${input}ca&appid=6828c8e901ce61eba78b5d02535eeed1&units=imperial`);\r\n\r\n//   const weatherInfo = document.querySelector('.feedBack');\r\n//   let temp = document.createElement('p');\r\n\r\n//   grab.then(function(result){\r\n//     temp.innerText = result.main.temp\r\n//     weatherInfo.appendChild(temp);\r\n//   });\r\n// }\r\n\r\nconst runTemp = () => {\r\n  let input = document.querySelector('#location');\r\n  (0,_temp__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\r\n}\r\n\r\nconst butt = document.querySelector('.locationButton');\r\nbutt.addEventListener('click', runTemp);\r\n\r\nconst img = document.querySelector('.body');\r\n\r\nfetch('https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=cloud', {mode: 'cors'})\r\n    .then(function(response) {\r\n      return response.json();\r\n    })\r\n    .then(function(response) {\r\n      // img.setAttribute('background-color', response.data.images.original.url);\r\n      document.body.style.backgroundImage = `url(${response.data.images.original.url})`;\r\n      document.body.style.backgroundRepeat = 'no-repeat';\r\n      document.body.style.backgroundSize = 'cover';\r\n      // img.style.backgroundImage =  response.data.images.original.url;\r\n\r\n    });\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeAllChildNodes = (parent) => {\r\n  while (parent.firstChild) {\r\n    parent.removeChild(parent.firstChild);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);\n\n//# sourceURL=webpack://todolist/./src/removeAllChildNodes.js?");

/***/ }),

/***/ "./src/temp.js":
/*!*********************!*\
  !*** ./src/temp.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n\r\n\r\nconst temp = async (input) => {\r\n  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6828c8e901ce61eba78b5d02535eeed1&units=imperial`;\r\n\r\n  const grab = await fetch(url, {\r\n    method: 'GET',\r\n    mode: 'cors',\r\n  })\r\n\r\n  let grab2 = grab.json();\r\n  \r\n\r\n  const weatherInfo = document.querySelector('.feedBack');\r\n  let temp = document.createElement('p');\r\n\r\n  let degree = document.createElement('span');\r\n  degree.innerHTML = '&nbsp;  &#176;';\r\n  degree.setAttribute('color', 'whitesmoke');\r\n  // degree.setAttribute('font-weight', 'bolder');\r\n  degree.setAttribute('font-size', '1rem');\r\n\r\n  \r\n\r\n  grab2.then(function(result){\r\n    console.log(result);\r\n    temp.innerText = result.main.temp\r\n    temp.appendChild(degree);\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__.default)(weatherInfo);\r\n    weatherInfo.appendChild(temp);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (temp);\r\n\n\n//# sourceURL=webpack://todolist/./src/temp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;