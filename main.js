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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp */ \"./src/temp.js\");\n\r\n\r\nfetch(`https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=Clouds`, {mode: 'cors'})\r\n    .then(function(response) {\r\n      return response.json();\r\n    })\r\n    .then(function(response) {\r\n      document.body.style.backgroundImage = `url(${response.data.images.original.url})`;\r\n      document.body.style.backgroundRepeat = 'no-repeat';\r\n      document.body.style.backgroundSize = 'cover';\r\n    });\r\n\r\nconst runTemp = () => {\r\n  let input = document.querySelector('#location');\r\n  (0,_temp__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\r\n}\r\n\r\nconst butt = document.querySelector('.locationButton');\r\nbutt.addEventListener('click', runTemp);\r\n\r\nconst img = document.querySelector('.body');\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeAllChildNodes = (parent) => {\r\n  while (parent.firstChild) {\r\n    parent.removeChild(parent.firstChild);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);\n\n//# sourceURL=webpack://weatherapp/./src/removeAllChildNodes.js?");

/***/ }),

/***/ "./src/temp.js":
/*!*********************!*\
  !*** ./src/temp.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n\r\n\r\nlet tempType = [];\r\nif (localStorage.getItem('tempType') === null) {\r\n  localStorage.setItem('tempType', JSON.stringify([]));\r\n} else {\r\n  tempType = JSON.parse(localStorage.getItem('tempType'));\r\n}\r\n\r\n\r\nconst fahCel = document.querySelector('.fahCel');\r\nlet fahCel2 = '';\r\ntempType = JSON.parse(localStorage.getItem('tempType'));\r\n\r\nif(tempType[0] === undefined){\r\n  fahCel.value = 'Get Celsius';\r\n  fahCel2 = 'imperial';\r\n}else{\r\n  \r\n  if(tempType[0] === 'Get Fahrenheit'){\r\n    \r\n    fahCel.value = 'Get Celsius';\r\n    fahCel2 = 'metric';\r\n  }else{\r\n    fahCel.value = 'Get Fahrenheit';\r\n    fahCel2 = 'imperial';\r\n  }\r\n  fahCel.value = tempType[0];\r\n}\r\n\r\nconst changeTemp = () => {\r\n  if(fahCel.value === 'Get Fahrenheit'){\r\n    tempType = JSON.parse(localStorage.getItem('tempType'));\r\n    tempType[0] = 'Get Fahrenheit';\r\n    fahCel.value = 'Get Celsius';\r\n    fahCel2 = 'imperial';\r\n    localStorage.setItem('tempType', JSON.stringify(tempType));\r\n\r\n  }else{\r\n    tempType = JSON.parse(localStorage.getItem('tempType'));\r\n    tempType[0] = 'Get Celsius';\r\n    fahCel.value = 'Get Fahrenheit';\r\n    fahCel2 = 'metric';\r\n    localStorage.setItem('tempType', JSON.stringify(tempType));\r\n  }\r\n}\r\n\r\nlet changeBut = document.querySelector('.fahCel');\r\nchangeBut.addEventListener('click', changeTemp);\r\n\r\nconst temp = async (input) => {\r\n  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6828c8e901ce61eba78b5d02535eeed1&units=${fahCel2}`;\r\n\r\n  const grab = await fetch(url, {\r\n    method: 'GET',\r\n    mode: 'cors',\r\n  })\r\n\r\n  let grab2 = grab.json();\r\n  \r\n\r\n  const weatherInfo = document.querySelector('.feedBackDiv');\r\n  let place = document.createElement('p');\r\n  let temp = document.createElement('p');\r\n\r\n  let condition = document.createElement('p');\r\n\r\n  let degree = document.createElement('span');\r\n  if(fahCel.value === 'Get Fahrenheit'){\r\n    degree.innerHTML = '&nbsp;  &#176; C';\r\n  }else{\r\n    degree.innerHTML = '&nbsp;  &#176; F';\r\n  }\r\n  \r\n  degree.setAttribute('color', 'whitesmoke');\r\n \r\n  degree.setAttribute('font-size', '1rem');\r\n\r\n  \r\n\r\n  grab2.then(function(result){\r\n    place.innerText = result.name + ' ' +  result.sys.country;\r\n    condition.innerText = result.weather[0].main;\r\n    \r\n    temp.innerText = result.main.temp;\r\n    temp.appendChild(degree);\r\n    if(weatherInfo.firstChild === null){\r\n      weatherInfo.firstChild = null;\r\n      weatherInfo.appendChild(place);\r\n      weatherInfo.appendChild(condition);\r\n      weatherInfo.appendChild(temp);\r\n    }else{\r\n      (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__.default)(weatherInfo);\r\n      weatherInfo.appendChild(place);\r\n      weatherInfo.appendChild(condition);\r\n      weatherInfo.appendChild(temp);\r\n    }\r\n\r\n    let weather = ''\r\n    if(result.weather[0].main === \"Clear\"){\r\n      weather = 'sun';\r\n    }\r\n    else{\r\n       weather = result.weather.main;\r\n    }\r\n\r\n    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=${weather}`, {mode: 'cors'})\r\n    .then(function(response) {\r\n      return response.json();\r\n    })\r\n    .then(function(response) {\r\n\r\n      document.body.style.backgroundImage = `url(${response.data.images.original.url})`;\r\n      document.body.style.backgroundRepeat = 'no-repeat';\r\n      document.body.style.backgroundSize = 'cover';\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (temp);\r\n\n\n//# sourceURL=webpack://weatherapp/./src/temp.js?");

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