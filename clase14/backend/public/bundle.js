/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ejemploPromises.js":
/*!********************************!*\
  !*** ./src/ejemploPromises.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let {SEL} = __webpack_require__(/*! ./utiles/utiles */ \"./src/utiles/utiles.js\")\r\n\r\nlet incrementaContador = contador => {\r\n   contador++\r\n   SEL('txtCity').value = contador\r\n   return contador\r\n}\r\n\r\nlet funcionAsync = (contador, onFinish) => {\r\n   contador = incrementaContador(contador)\r\n   setTimeout(() => onFinish(contador), 2000)\r\n}\r\n\r\nlet funcionSinc = contador => {\r\n   return incrementaContador(contador)\r\n   /*\r\n   setTimeout(() => {\r\n      SEL('txtFirstName').value = 'LLAMANDO A PROXY'\r\n      setTimeout(() => {\r\n         SEL('txtFirstName').value = ''\r\n      }, 500)\r\n   }, 500)\r\n   */\r\n}\r\n\r\n/*\r\nlet wrapperFuncionAsync = () => {\r\n   return new Promise((resolve, reject) => {\r\n      funcionAsync(() => {\r\n         resolve()\r\n      })\r\n   })\r\n}\r\n*/\r\n\r\nfuncionAsync(100, x => {\r\n   console.log(x)\r\n   x = funcionSinc(x)\r\n   console.log(x)\r\n   x = incrementaContador(x)\r\n   console.log(x)\r\n   funcionAsync(x, y => {\r\n      console.log(y)\r\n      y = funcionSinc(y)\r\n      console.log(y)\r\n      funcionAsync(y, z => {\r\n         console.log(z)\r\n         z = funcionSinc(z)\r\n         console.log(z)\r\n         SEL('txtFirstName').value = 'TERMINA EL EJEMPLO'\r\n      })\r\n   })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://empty-project/./src/ejemploPromises.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\r\nrequire('./ejemplitoBarraProgreso')()\r\n\r\nlet vistaUsuarios = require('./vistas/vistaUsuarios')\r\nrequire('./controllers/filtros').init()\r\nlet generacionDatos = require('./services/generacionDatos')\r\nrequire('./services/estructuraMemoria').init()\r\n\r\nlet usuOrigs = generacionDatos.obtenerDatosOriginales()\r\n\r\nvistaUsuarios()\r\n*/\r\n// require('./ejemploUpload')\r\n\r\n__webpack_require__(/*! ./ejemploPromises */ \"./src/ejemploPromises.js\")\r\n\r\n\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

/***/ }),

/***/ "./src/utiles/utiles.js":
/*!******************************!*\
  !*** ./src/utiles/utiles.js ***!
  \******************************/
/***/ ((module) => {

eval("let SEL = n => {\r\n   return document.getElementById(n)\r\n}\r\n\r\nlet selByClass = n => {\r\n   return document.getElementsByClassName(n)\r\n}\r\n\r\nlet selArrByClass = c => {\r\n   return [...selByClass(c)]\r\n   // tambien Array.from(selByClass(c))\r\n}\r\n\r\nlet formToObjectAnt = (className) => {\r\n   let obj = {}\r\n   Array.prototype.slice.call(\r\n         document.getElementsByClassName(className)).forEach(elem => {\r\n            obj[elem.dataset.name] = SEL(elem.id).value\r\n         }\r\n   )\r\n   return obj\r\n}\r\n\r\nlet formToObject = className => {\r\n   let obj = {}\r\n   selArrByClass(className).forEach(elem => {\r\n      obj[elem.dataset.name] = SEL(elem.id).value\r\n   })\r\n   return obj\r\n}\r\n\r\nwindow.test = formToObject\r\n\r\nmodule.exports = {\r\n   SEL,\r\n   formToObject\r\n}\n\n//# sourceURL=webpack://empty-project/./src/utiles/utiles.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;