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

/***/ "./script/app.js":
/*!***********************!*\
  !*** ./script/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {  validateInput, generateText, createElement } = __webpack_require__(/*! ./util */ \"./script/util.js\");\nconst initApp =() => {\n    // registring the button \n    const newUserBtn = document.querySelector(\"#btnAddUser\"); \n    newUserBtn.addEventListener(\"click\", addUser)\n}\n\nconst addUser = () =>{\n    \n    const newUserName = document.querySelector(\"input#name\")\n    const newUserAge = document.querySelector(\"input#age\")\n\n    if(\n        !validateInput(newUserName.value, true, false) || \n        !validateInput(newUserAge.value, false, true)) {\n            return ; \n        }\n       \n        const userList = document.querySelector(\".user-list\")\n        const outputText = generateText(newUserName.value, newUserAge.value)\n        \n        const element = createElement('li', outputText, 'user-item')\n        userList.appendChild(element)\n\n        document.querySelector(\"input#name\").value = ''; \n        document.querySelector(\"input#age\").value = ''; \n}\n\ninitApp(); \n\n//# sourceURL=webpack://js-app-tdd/./script/app.js?");

/***/ }),

/***/ "./script/util.js":
/*!************************!*\
  !*** ./script/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.generateText = (name, age) => {\n    // Returns output text\n    return `${name} (${age} years old)`;\n  };\n  \n\nexports.createElement = (type, text, className) => {\n    // Creates a new HTML element and returns it\n    const newElement = document.createElement(type);\n    newElement.classList.add(className);\n    newElement.textContent = text;\n    return newElement;\n  };\n   \n  exports.validateInput = (text, notEmpty, isNumber) => {\n    // Validate user input with two pre-defined rules\n    if (!text) {\n      return false;\n    }\n    if (notEmpty && text.trim().length === 0) {\n      return false;\n    }\n\n    //+text or parseInt(text)\n    if (isNumber && +text === NaN) {\n      return false;\n    }\n    return true;\n  };\n\n//# sourceURL=webpack://js-app-tdd/./script/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./script/app.js");
/******/ 	
/******/ })()
;