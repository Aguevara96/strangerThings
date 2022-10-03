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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\r\nlet vistaUsuarios = require('./vistas/vistaUsuarios')\r\nrequire('./controllers/inputController').init()\r\nlet generacionDatos = require('./services/generacionDatos')\r\nrequire('./services/estructuraMemoria').init()\r\n\r\nlet usuOrigs = generacionDatos.obtenerDatosOriginales()\r\n\r\nvistaUsuarios()\r\n\r\nrequire('./componenteScriptCC/init')()\r\n*/\r\n\r\n(__webpack_require__(/*! ./metricas/testmetricas */ \"./src/metricas/testmetricas.js\").initComponent)()\r\n\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

/***/ }),

/***/ "./src/metricas/testmetricas.js":
/*!**************************************!*\
  !*** ./src/metricas/testmetricas.js ***!
  \**************************************/
/***/ ((module) => {

eval("\r\n\r\nlet tomaMetricaMemoria = () => {\r\n    let fn = document.getElementById('txtFirstName').value        \r\n    let ci = document.getElementById('txtCity').value\r\n    let op = document.getElementById('opcionesScript').selectedIndex\r\n\r\n    let ts = new Date()\r\n    for (let idx = 0; idx < 10000000; idx++) {\r\n        let {fnz, ciz, opz} = {fn, ci, op}\r\n    }\r\n    let diff = new Date() - ts;\r\n    alert(diff)\r\n}\r\n\r\nlet tomaMetricaDom = () => {\r\n    let ts = new Date()\r\n    for (let idx = 0; idx < 10000000; idx++) {\r\n        let fn = document.getElementById('txtFirstName').value        \r\n        let ci = document.getElementById('txtCity').value\r\n        let op = document.getElementById('opcionesScript').selectedIndex\r\n    }\r\n    let diff = new Date() - ts;\r\n    alert(diff)\r\n}\r\n\r\nlet initComponent = () => {\r\n    document.addEventListener('click', e => {\r\n        if (e.target.id === 'btnIniciar') {\r\n            e.preventDefault()\r\n            tomaMetricaDom()\r\n            tomaMetricaMemoria()\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\nmodule.exports = {\r\n    initComponent\r\n}\n\n//# sourceURL=webpack://empty-project/./src/metricas/testmetricas.js?");

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