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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp */ \"./src/temp.js\");\n\n\nconst enter = document.querySelector('#location');\n\nfetch('https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=Clouds', { mode: 'cors' })\n  .then((response) => {\n    if (!response.ok) {\n      throw Error(response.statusText);\n    }\n    return response;\n  })\n  .then((response) => response.json())\n  .then((response) => {\n    document.body.style.backgroundImage = `url(${response.data.images.original.url})`;\n    document.body.style.backgroundRepeat = 'no-repeat';\n    document.body.style.backgroundSize = 'cover';\n  });\n\nconst runTemp = () => {\n  const input = document.querySelector('#location');\n  (0,_temp__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\n};\n\nconst butt = document.querySelector('.locationButton');\nbutt.addEventListener('click', runTemp);\n\nenter.addEventListener('keyup', (e) => {\n  if (e.key === 'Enter') {\n    runTemp();\n  }\n});\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeAllChildNodes = (parent) => {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);\n\n//# sourceURL=webpack://weatherapp/./src/removeAllChildNodes.js?");

/***/ }),

/***/ "./src/temp.js":
/*!*********************!*\
  !*** ./src/temp.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n\n\nlet tempType = [];\nif (localStorage.getItem('tempType') === null) {\n  localStorage.setItem('tempType', JSON.stringify([]));\n} else {\n  tempType = JSON.parse(localStorage.getItem('tempType'));\n}\n\nconst fahCel = document.querySelector('.fahCel');\nlet fahCel2 = '';\ntempType = JSON.parse(localStorage.getItem('tempType'));\n\nif (tempType[0] === undefined) {\n  fahCel.value = 'Get Celsius';\n  fahCel2 = 'imperial';\n} else {\n  if (tempType[0] === 'Get Fahrenheit') {\n    fahCel.value = 'Get Celsius';\n    fahCel2 = 'metric';\n  } else {\n    fahCel.value = 'Get Fahrenheit';\n    fahCel2 = 'imperial';\n  }\n  fahCel.value = tempType[0];// eslint-disable-line\n}\n\nconst weatherInfo = document.querySelector('.feedBackDiv');\nconst place = document.createElement('p');\n\nconst condition = document.createElement('p');\n\nconst degree = document.createElement('span');\nif (fahCel.value === 'Get Fahrenheit') {\n  degree.innerHTML = '&nbsp;  &#176; C';\n} else {\n  degree.innerHTML = '&nbsp;  &#176; F';\n}\n\ndegree.setAttribute('color', 'whitesmoke');\n\ndegree.setAttribute('font-size', '1rem');\n\nconst temp2 = document.createElement('p');\n\nlet input2 = '';\n\nconst temp = async (input) => {\n  input2 = input;\n\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6828c8e901ce61eba78b5d02535eeed1&units=${fahCel2}`;\n\n  const grab = await fetch(url, {\n    method: 'GET',\n    mode: 'cors',\n  }).then((response) => {\n    if (!response.ok) {\n      throw Error(response.statusText);\n    }\n    return response;\n  });\n\n  const grab2 = grab.json();\n\n  grab2.then((result) => {\n    place.innerText = `${result.name} ${result.sys.country}`;\n    condition.innerText = result.weather[0].main;\n\n    temp2.innerText = result.main.temp;\n    temp2.appendChild(degree);\n    if (weatherInfo.firstChild === null) {\n      weatherInfo.firstChild = null;\n      weatherInfo.appendChild(place);\n      weatherInfo.appendChild(condition);\n      weatherInfo.appendChild(temp2);\n    } else {\n      (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__.default)(weatherInfo);\n      weatherInfo.appendChild(place);\n      weatherInfo.appendChild(condition);\n      weatherInfo.appendChild(temp2);\n    }\n\n    let weather = '';\n    if (result.weather[0].main === 'Clear') {\n      weather = 'sun';\n    } else {\n      weather = result.weather[0].main;\n    }\n\n    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=${weather}`, { mode: 'cors' })\n      .then((response) => {\n        if (!response.ok) {\n          throw Error(response.statusText);\n        }\n        return response;\n      })\n      .then((response) => response.json())\n      .then((response) => {\n        document.body.style.backgroundImage = `url(${response.data.images.original.url})`;\n        document.body.style.backgroundRepeat = 'no-repeat';\n        document.body.style.backgroundSize = 'cover';\n      });\n  });\n};\n\n\nconst changeTemp = async () => {\n  if (fahCel.value === 'Get Fahrenheit') {\n    tempType = JSON.parse(localStorage.getItem('tempType'));\n    tempType[0] = 'Get Fahrenheit';\n    fahCel.value = 'Get Celsius';\n    fahCel2 = 'imperial';\n    localStorage.setItem('tempType', JSON.stringify(tempType));\n    degree.innerHTML = '&nbsp;  &#176; C';\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=6828c8e901ce61eba78b5d02535eeed1&units=metric`;\n\n    const grab = await fetch(url, {\n      method: 'GET',\n      mode: 'cors',\n    }).then((response) => {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n      return response;\n    });\n\n    const grab2 = grab.json();\n\n    grab2.then((result) => {\n      place.innerText = `${result.name} ${result.sys.country}`;\n      temp2.innerText = result.main.temp;\n\n      temp2.appendChild(degree);\n\n    });\n  } else {\n    tempType = JSON.parse(localStorage.getItem('tempType'));\n    tempType[0] = 'Get Celsius';\n    fahCel.value = 'Get Fahrenheit';\n    fahCel2 = 'metric';\n    localStorage.setItem('tempType', JSON.stringify(tempType));\n    degree.innerHTML = '&nbsp;  &#176; F';\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=6828c8e901ce61eba78b5d02535eeed1&units=imperial`;\n\n    const grab = await fetch(url, {\n      method: 'GET',\n      mode: 'cors',\n    }).then((response) => {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n      return response;\n    });\n\n    const grab2 = grab.json();\n\n    grab2.then((result) => {\n      place.innerText = `${result.name} ${result.sys.country}`;\n      temp2.innerText = result.main.temp;\n\n      temp2.appendChild(degree);\n\n      if (weatherInfo.firstChild === null) {\n        weatherInfo.firstChild = null;\n        weatherInfo.appendChild(place);\n        weatherInfo.appendChild(condition);\n        weatherInfo.appendChild(temp2);\n      } else {\n        \n        (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_0__.default)(weatherInfo);\n        weatherInfo.appendChild(place);\n        weatherInfo.appendChild(condition);\n        weatherInfo.appendChild(temp2);\n      }\n    });\n  }\n};\n\nconst changeBut = document.querySelector('.fahCel');\nchangeBut.addEventListener('click', changeTemp);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (temp);\n\n\n//# sourceURL=webpack://weatherapp/./src/temp.js?");

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