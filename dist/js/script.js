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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/add.js":
/*!***********************!*\
  !*** ./src/js/add.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Add; });
class Add {
  constructor(name, author, form, container, inputs) {
    this.name = document.querySelector(name);
    this.author = document.querySelector(author);
    this.form = document.querySelector(form);
    this.container = document.querySelector(container);
    this.inputs = document.querySelectorAll(inputs);
  }

  clearInputs() {
    this.inputs.forEach(input => {
      input.value = '';
    });
  }

  removeElem(item, selector) {
    const btnClose = item.querySelector(selector);
    btnClose.addEventListener('click', () => {
      item.classList.remove('animate__fadeInDown');
      item.style.cssText = `
            margin-top: 0px;
            max-height: 0px;
            overflow: hidden;
            `;
      setTimeout(function () {
        item.remove();
      }, 700);
    });
  }

  createElem() {
    const item = document.createElement('li');
    item.classList.add('films__list-item', 'animate__animated', 'animate__fadeInDown');
    item.innerHTML = `
            <div class="films__list-item_name">${this.name.value}</div>
            <div class="films__list-item_author">${this.author.value}</div>
            <div class="films__list-item_delete">
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
    this.removeElem(item, '.films__list-item_delete i');
    this.container.appendChild(item);
  }

  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.createElem();
      this.clearInputs();
    });
  }

}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./src/js/add.js");
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ "./src/js/start.js");


window.addEventListener('DOMContentLoaded', () => {
  new _add__WEBPACK_IMPORTED_MODULE_0__["default"]('.form__form-film', '.form__form-name', '.form__form', '.films__list', 'input').init();
  new _start__WEBPACK_IMPORTED_MODULE_1__["default"]('.start__form', '.films__list', '.start__form-check', '.films').init();
});

/***/ }),

/***/ "./src/js/start.js":
/*!*************************!*\
  !*** ./src/js/start.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Start; });
class Start {
  constructor(form, films, checkbox, container) {
    this.form = document.querySelector(form);
    this.films = document.querySelector(films);
    this.checkbox = document.querySelector(checkbox);
    this.container = document.querySelector(container);
  }

  filmList() {
    this.array = [];
    this.films.childNodes.forEach(film => {
      this.array.push(film.querySelector('.films__list-item_name').textContent);
    });
  }

  createList() {
    this.filmList();
    this.container.childNodes.forEach(child => {
      child.classList.add('animate__animated', 'animate__fadeOut');
    });
    setTimeout(() => {
      this.container.innerHTML = '';
      this.cardList = document.createElement('ul');
      this.cardList.classList.add('card__wrapper');
      this.container.appendChild(this.cardList);
    }, 1000);
  }

  createCard() {
    this.createList();
    setTimeout(() => {
      this.array.forEach(elem => {
        const card = document.createElement('li');
        card.classList.add('card', 'animate__animated', 'animate__fadeIn');
        card.innerHTML = `
                <div class = "card__name">${elem}</div>
                <div class = "card__count">100</div>
                `;
        this.cardList.appendChild(card);
      });
    }, 1000);
  }

  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.createCard();
    });
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map