/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/maps/init.js":
/*!***********************************!*\
  !*** ./resources/js/maps/init.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "div_map": () => (/* binding */ div_map)
/* harmony export */ });
// select id map
var div_map = document.getElementById("map"); // style div_map

div_map.style.width = "100%";
div_map.style.height = "100vh";
mapboxgl.accessToken = "pk.eyJ1Ijoia2luZ3BybyIsImEiOiJjbDQ3anFhenMwaTh4M2ptb3NlamczZDQyIn0.w9C4ttg39IoyFfBDp3dSkg";
var map = new mapboxgl.Map({
  container: "map",
  // container ID
  style: "mapbox://styles/mapbox/streets-v11",
  // style URL
  center: [-74.5, 40],
  // starting position [lng, lat]
  zoom: 9 // starting zoom

}); // Add zoom and rotation controls to the map.

map.addControl(new mapboxgl.NavigationControl(), "top-left");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);

/***/ }),

/***/ "./resources/js/maps/polygon.js":
/*!**************************************!*\
  !*** ./resources/js/maps/polygon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./resources/js/maps/init.js");

_init__WEBPACK_IMPORTED_MODULE_0__.div_map.style.height = "80vh";
_init__WEBPACK_IMPORTED_MODULE_0__["default"].setCenter([-68.137343, 45.137451]);
_init__WEBPACK_IMPORTED_MODULE_0__["default"].setZoom(5);
_init__WEBPACK_IMPORTED_MODULE_0__["default"].setStyle("mapbox://styles/mapbox/satellite-streets-v11");

var showPolygon = function showPolygon() {
  _init__WEBPACK_IMPORTED_MODULE_0__["default"].on("load", function () {
    // Add a data source containing GeoJSON data.
    _init__WEBPACK_IMPORTED_MODULE_0__["default"].addSource("maine", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          // These coordinates outline Maine.
          coordinates: [[[-67.13734, 45.13745], [-66.96466, 44.8097], [-68.03252, 44.3252], [-69.06, 43.98], [-70.11617, 43.68405], [-70.64573, 43.09008], [-70.75102, 43.08003], [-70.79761, 43.21973], [-70.98176, 43.36789], [-70.94416, 43.46633], [-71.08482, 45.30524], [-70.66002, 45.46022], [-70.30495, 45.91479], [-70.00014, 46.69317], [-69.23708, 47.44777], [-68.90478, 47.18479], [-68.2343, 47.35462], [-67.79035, 47.06624], [-67.79141, 45.70258], [-67.13734, 45.13745]]]
        }
      }
    }); // Add a new layer to visualize the polygon.

    _init__WEBPACK_IMPORTED_MODULE_0__["default"].addLayer({
      id: "maine",
      type: "fill",
      source: "maine",
      // reference the data source
      layout: {},
      paint: {
        "fill-color": "#0080ff",
        // blue color fill
        "fill-opacity": 0.5
      }
    }); // Add a black outline around the polygon.

    _init__WEBPACK_IMPORTED_MODULE_0__["default"].addLayer({
      id: "outline",
      type: "line",
      source: "maine",
      layout: {},
      paint: {
        "line-color": "#000",
        "line-width": 3
      }
    });
  });
};

var drawPolygon = function drawPolygon() {
  var draw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
      polygon: true,
      trash: true
    },
    // Set mapbox-gl-draw to draw by default.
    // The user does not have to click the polygon control button first.
    defaultMode: "draw_polygon"
  });
  _init__WEBPACK_IMPORTED_MODULE_0__["default"].addControl(draw);
  _init__WEBPACK_IMPORTED_MODULE_0__["default"].on("draw.create", updateArea);
  _init__WEBPACK_IMPORTED_MODULE_0__["default"].on("draw.delete", updateArea);
  _init__WEBPACK_IMPORTED_MODULE_0__["default"].on("draw.update", updateArea);

  function updateArea(e) {
    var data = draw.getAll();
    var answer = document.getElementById("calculated-area");

    if (data.features.length > 0) {
      var area = turf.area(data); // Restrict the area to 2 decimal points.

      var rounded_area = Math.round(area * 100) / 100;
      console.log(rounded_area);
    } else {
      if (e.type !== "draw.delete") alert("Click the map to draw a polygon.");
    }
  }
};

showPolygon();
drawPolygon();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/maps.js ***!
  \******************************/
__webpack_require__(/*! ./maps/polygon */ "./resources/js/maps/polygon.js");
})();

/******/ })()
;