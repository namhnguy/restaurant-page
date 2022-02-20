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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactElement() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('contact-container');\n\n    const name = document.createElement('h2');\n    name.textContent = \"Bob Ross\";\n    mainContainer.appendChild(name);\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '123 456 789'\n    mainContainer.appendChild(phoneNumber);\n\n    const address = document.createElement('p');\n    address.textContent = '123 Bob Lane'\n    mainContainer.appendChild(address);\n\n    return mainContainer;\n}\n\nfunction loadContactDiv() {\n    const main = document.querySelector('main');\n    main.textContent = '';\n    main.appendChild(createContactElement());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactDiv);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomeElement() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('home-container');\n\n    const paragraph1 = document.createElement('p');\n    paragraph1.textContent = 'Best Resturant In Your Country';\n    mainContainer.appendChild(paragraph1);\n\n    const paragraph2 = document.createElement('p');\n    paragraph2.textContent = 'Made with passions since 1900';\n    mainContainer.appendChild(paragraph2);\n\n    const homeImage = document.createElement('img');\n    homeImage.setAttribute('src', 'images/chef.png');\n    homeImage.setAttribute('alt', 'chef');\n    mainContainer.appendChild(homeImage);\n\n    const paragraph3 = document.createElement('p');\n    paragraph3.textContent = 'Order online or visit us!';\n    mainContainer.appendChild(paragraph3);\n\n    return mainContainer;\n}\n\nfunction loadHomeDiv() {\n    const main = document.querySelector('main');\n    main.textContent = '';\n    main.appendChild(createHomeElement());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeDiv);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeaderElement() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const resturantName = document.createElement(\"h1\");\n    resturantName.textContent = \"Resturant Name\";\n    header.appendChild(resturantName);\n\n    const navBar = document.createElement(\"nav\");\n\n    const homeButton = document.createElement('button');\n    homeButton.textContent = 'Home';\n    homeButton.classList.add('btn-nav');\n    homeButton.addEventListener('click', function (e) {\n        if (e.target.classList.contains('active')) {\n            return;\n        }\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    });\n    navBar.appendChild(homeButton);\n\n    const menuButton = document.createElement('button');\n    menuButton.textContent = 'Menu';\n    menuButton.classList.add('btn-nav');\n    menuButton.addEventListener('click', function (e) {\n        if (e.target.classList.contains('active')) {\n            return;\n        }\n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    });\n    navBar.appendChild(menuButton);\n\n    const contactButton = document.createElement('button');\n    contactButton.textContent = 'Contact';\n    contactButton.classList.add('btn-nav');\n    contactButton.addEventListener('click', function (e) {\n        if (e.target.classList.contains('active')) {\n            return;\n        }\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    });\n    navBar.appendChild(contactButton);\n\n    header.appendChild(navBar);\n\n    return header;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".btn-nav\");\n    buttons.forEach((button) => {\n        button.classList.remove(\"active\");\n    });\n\n    button.classList.add(\"active\");\n}\n\nfunction makeWebsite() {\n    const parentDiv = document.querySelector('#content');\n\n    const headerElement = createHeaderElement();\n    parentDiv.appendChild(headerElement);\n\n\n    const mainDiv = document.createElement('main');\n    mainDiv.classList.add('main');\n    parentDiv.appendChild(mainDiv);\n\n    setActiveButton(document.querySelector('.btn-nav'));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nmakeWebsite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuElement() {\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('menu-container');\n\n    function createMenuItem(name, text) {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item');\n\n        const menuImage = document.createElement('img');\n        menuImage.src = `images/pizzas/${name.toLowerCase()}.png`;\n        menuImage.alt = name;\n        menuItem.appendChild(menuImage);\n\n        const menuHeading = document.createElement('h2');\n        menuHeading.textContent = name;\n        menuItem.appendChild(menuHeading);\n\n        const menuText = document.createElement('p');\n        menuText.textContent = text;\n        menuItem.appendChild(menuText);\n\n        return menuItem;\n    }\n\n    mainContainer.appendChild(createMenuItem('Carne', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Colorato', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Crema', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Disgustoso', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Gamberi', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Pepe', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Pomodoro', 'A pizza'));\n    mainContainer.appendChild(createMenuItem('Salsiccia', 'A pizza'));\n\n    return mainContainer;\n}\n\nfunction loadMenuDiv() {\n    const main = document.querySelector('main');\n    main.textContent = '';\n    main.appendChild(createMenuElement());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuDiv);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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