/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/list_koordinat.js":
/*!***************************************************!*\
  !*** ./resources/js/components/list_koordinat.js ***!
  \***************************************************/
/***/ (() => {

var add_koordinat = document.getElementById("add-koordinat");
var remove_koordinat = document.getElementById("remove-koordinat");
var list_koordinat = document.getElementById("list-koordinat");
var inputKoordinat = "<div class=\"col-6 mt-2 animate__animated animate__bounceInDown\">\n                            <label for=\"longitude\">Longitude</label>\n                            <input type=\"text\" class=\"form-control inputReset\" name=\"longitude[]\" id=\"longitude\"\n                                required />\n                        </div>\n                        <div class=\"col-6 mt-2 animate__animated animate__bounceInDown\">\n                            <label for=\"latitude\">Latitude</label>\n                            <input type=\"text\" class=\"form-control inputReset\" name=\"latitude[]\" id=\"latitude\"\n                                required />\n                        </div>";

var handleClick = function handleClick() {
  add_koordinat.addEventListener("click", function (e) {
    console.log("add");
    e.preventDefault();
    list_koordinat.insertAdjacentHTML("beforeend", inputKoordinat);
  });
  remove_koordinat.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("remove"); // remove 2 last element

    var last_element = list_koordinat.lastElementChild; // if there is only one element, don't remove

    if (list_koordinat.children.length > 0) {
      var second_last_element = list_koordinat.lastElementChild.previousElementSibling; // add class animate__animated animate__bounceOutDown

      last_element.classList.add("animate__animated");
      last_element.classList.add("animate__bounceOutDown");
      second_last_element.classList.add("animate__animated");
      second_last_element.classList.add("animate__bounceOutDown"); // remove element

      setTimeout(function () {
        list_koordinat.removeChild(last_element);
        list_koordinat.removeChild(second_last_element);
      }, 1000);
    }
  });
};

if (list_koordinat) {
  // style add_koordinat icon
  add_koordinat.style.cursor = "pointer";
  add_koordinat.style.color = "#007bff"; // style remove_koordinat icon

  remove_koordinat.style.cursor = "pointer";
  remove_koordinat.style.color = "#f71000";
  handleClick();
}

/***/ }),

/***/ "./resources/js/components/nav_bar.js":
/*!********************************************!*\
  !*** ./resources/js/components/nav_bar.js ***!
  \********************************************/
/***/ (() => {

var nav_bar = document.querySelector(".nav-sidebar");

var selector = function selector() {
  // select a in nav-item and add class active if it's the current page
  var nav_items = document.querySelectorAll(".nav-item a");
  var location = window.location.href;
  nav_items.forEach(function (item) {
    if (item.getAttribute("href") == location) {
      item.classList.add("active"); // check parent of nav-item and add class active if it's the current page

      var parent1 = item.parentElement.parentElement;
      var parent2 = item.parentElement.parentElement.parentElement;
      var parent;

      if (parent1.classList.contains("nav-item-submenu")) {
        parent = parent1;
      } else if (parent2.classList.contains("nav-item-submenu")) {
        parent = parent2;
      } // check if parent is nav-item-submenu


      if (parent) {
        parent.classList.add("nav-item-expanded");
        parent.classList.add("nav-item-open");
      }
    }
  });
};

if (nav_bar) {
  selector();
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./resources/js/components.js ***!
  \************************************/
__webpack_require__(/*! ./components/nav_bar */ "./resources/js/components/nav_bar.js");

__webpack_require__(/*! ./components/list_koordinat */ "./resources/js/components/list_koordinat.js");
})();

/******/ })()
;