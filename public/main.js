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

eval("// require images\n__webpack_require__(/*! ./images/errors/back-home.svg */ \"./src/images/errors/back-home.svg\")\n\n// require css\n__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/tailwind.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n\n// require js\n__webpack_require__(/*! ./javascripts/main */ \"./src/javascripts/main.js\")\n__webpack_require__(/*! ./javascripts/form */ \"./src/javascripts/form.js\")\n\n\n//# sourceURL=webpack://etaluna-ecommerce/./src/index.js?");

/***/ }),

/***/ "./src/javascripts/form.js":
/*!*********************************!*\
  !*** ./src/javascripts/form.js ***!
  \*********************************/
/***/ (() => {

eval("if (document.getElementById('mainForm')) {\r\n  const validation = new JustValidate('#mainForm', {\r\n    errorFieldCssClass: 'invalid',\r\n    errorLabelCssClass: 'error'\r\n  })\r\n  \r\n  if (document.getElementById('email')) {\r\n    validation\r\n      .addField('#email', [\r\n        {\r\n          rule: 'required',\r\n          errorMessage: 'Email is required',\r\n        },\r\n        {\r\n          validator: (value) =>\r\n            value.split('').find((e) => e === '@') ? true : false,\r\n          errorMessage: 'Email must have @ in it.',\r\n        },\r\n        {\r\n          rule: 'email',\r\n          errorMessage:\r\n            'After @ there must be at least 2 letters, point (.), And 2 letters behind the point (.)',\r\n        },\r\n      ])\r\n      .addField(\r\n        '#password',\r\n        [\r\n          {\r\n            rule: 'required',\r\n            errorMessage: 'Password is required.',\r\n          },\r\n          {\r\n            rule: 'customRegexp',\r\n            value: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,\r\n            errorMessage:\r\n              'Passwords must at least have 8 characters and contain 1 capital letter, 1 lowercase, and 1 number.',\r\n          },\r\n        ]\r\n      )\r\n  }\r\n  \r\n  if (document.getElementById('name')) {\r\n    validation.addField('#name', [\r\n      {\r\n        rule: 'required',\r\n        errorMessage: 'Name is required.',\r\n      },\r\n      {\r\n        rule: 'minLength',\r\n        value: 2,\r\n        errorMessage: 'The name must contain a minimum of 2 letters.',\r\n      },\r\n    ])\r\n  }\r\n  \r\n  if (document.getElementById('firstName')) {\r\n    validation.addField('#firstName', [\r\n      {\r\n        rule: 'required',\r\n        errorMessage: 'First Name is required.',\r\n      },\r\n      {\r\n        rule: 'minLength',\r\n        value: 2,\r\n        errorMessage: 'The first name must contain a minimum of 2 letters.',\r\n      },\r\n    ])\r\n  }\r\n  \r\n  validation.onSuccess(() => {\r\n    document.getElementById('mainForm').submit()\r\n  })\r\n}\r\n\r\nconsole.log('form js');\n\n//# sourceURL=webpack://etaluna-ecommerce/./src/javascripts/form.js?");

/***/ }),

/***/ "./src/javascripts/main.js":
/*!*********************************!*\
  !*** ./src/javascripts/main.js ***!
  \*********************************/
/***/ (() => {

eval("const button = document.getElementById('nav-button')\r\nconst nav = document.getElementById('nav-menu')\r\n\r\nconst navChildren = nav.querySelectorAll('a, input')\r\n\r\nbutton.addEventListener('click', () => {\r\n\tif (button.ariaExpanded == 'true') {\r\n\t\tbutton.ariaExpanded = 'false'\r\n\t\tnav.classList.remove('show')\r\n\t\tfor (const child of navChildren) {\r\n\t\t\tchild.setAttribute('tabindex', '-1')\r\n\t\t}\r\n\t} else if (button.ariaExpanded == 'false') {\r\n\t\tbutton.ariaExpanded = 'true'\r\n\t\tnav.classList.add('show')\r\n\t\tfor (const child of navChildren) {\r\n\t\t\tchild.removeAttribute('tabindex')\r\n\t\t}\r\n\t}\r\n\tconsole.log('button click nav');\r\n})\r\n\r\ndocument.addEventListener('focusin', e => {\r\n\tif (e.target !== nav && !nav.contains(e.target) && e.target !== button) {\r\n\t\tbutton.ariaExpanded = 'false'\r\n\t\tnav.classList.remove('show')\r\n\t\tfor (const child of navChildren) {\r\n\t\t\tchild.setAttribute('tabindex', '-1')\r\n\t\t}\r\n\t}\r\n})\r\n\r\n// Menjalankan feather icons\r\nfeather.replace({\r\n\tclass: 'icons'\r\n\t// color: '#1B1B1B',\r\n\t// width: '16px',\r\n})\r\n\r\nconsole.log('main.js');\r\n\n\n//# sourceURL=webpack://etaluna-ecommerce/./src/javascripts/main.js?");

/***/ }),

/***/ "./src/images/errors/back-home.svg":
/*!*****************************************!*\
  !*** ./src/images/errors/back-home.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/back-home.svg\";\n\n//# sourceURL=webpack://etaluna-ecommerce/./src/images/errors/back-home.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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