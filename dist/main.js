/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  /* VARIABLES */
  --MAIN-BG-C: ;
}

body {
  display: grid;
  grid-template-rows: 10vh 86vh 4vh;
  overflow-y: hidden;
}

/* HEADER */

.navUl {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem 2rem;
  background-color: greenyellow;
}
.navLi {
  list-style-type: none;
  text-align: center;
}

/* MAIN */

main {
  height: 0;
  min-height: 100%;
  overflow-y: auto;
}

.listContainer {
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  justify-items: center;
  gap: 0.5rem;
}
.wrapper {
  width: 100% /* clamp(300px, 80%, 1000px) */;
}

/* PROJ */

.newObject {
  height: 2rem;
  padding: 0.5rem 1rem;
  background-color: gray;
}

.objectWrapper {
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}
.object {
  width: 100%;
  height: 2rem;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 0.5fr 0.5fr;
  background-color: gray;
  gap: 0.5rem;
}

.taskWrapper {
  padding-left: 0.5rem;
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}
.Task {
  height: 2rem;
  padding: 0.5rem 1rem;
  background-color: gray;
  display: grid;
  grid-template-columns: 0.5fr 4fr 1fr 0.5fr 0.5fr;
  gap: 0.5rem;
}
.newTask {
  height: 2rem;
  padding: 0.5rem 1rem;
  background-color: gray;
  display: grid;
  grid-template-columns: 4fr 0.5fr 0.5fr;
  gap: 0.5rem;
}
.taskDate {
  display: grid;
  font-size: 0.7rem;
}

/* NOTES */

.notesContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-auto-rows: minmax(290px, 1fr);
  gap: 1rem;
}
.newNote {
  height: 100%;
  background-color: gray;
}

/* EVENTS */

.eventsContainer {
  height: 70vh;
  width: clamp(300px, 80%, 700px);
  background-color: gray;
  display: grid;
  padding: 1rem;
}

.dateWrapper {
  height: 7vh;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  place-items: center;
}

.calendarWrapper {
  height: 50vh;
}
.headings {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  font-weight: bold;
  place-items: center;
  margin-bottom: 0.5rem;
}
.calendarDays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  place-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.calendarDay {
  position: relative;
  z-index: 1;
}
.calendarDay::before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 5px;
}
.calendarDay:hover::before {
  background: hsla(0, 0%, 100%, 0.247);
}
.inactive {
  opacity: 0.5;
}
.selected::before {
  border: 2px solid white;
}
.eventNoteWrapper {
  display: grid;
  grid-template-rows: repeat(auto-fill, 2rem);
  width: 100%;
  padding: 0.5rem;
  background-color: white;
  gap: 0.5rem;
  overflow-y: auto;
}

/* .selected::before {
  background-color: aquamarine;
} */

.eventNoteWrapper {
  height: 31vh;
}

.weekEnd {
  color: darkred;
}
.currentDay::before {
  background-color: white;
}

/* PRIORITY */

.low {
  background-color: green;
}
.med {
  background-color: yellow;
}
.high {
  background-color: red;
}

.eventlow::before {
  background-color: green;
}
.eventmed::before {
  background-color: yellow;
}
.eventhigh::before {
  background-color: red;
}

/* COMPLETED */

.true {
  opacity: 0.7;
}
.false {
  opacity: 1;
}

/* FOOTER */

footer {
  text-align: center;
}
.footerA:any-link {
  color: white;
}

/* POPUP */

.popUpContainer {
  position: absolute;
  display: grid;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.479);
  overflow: hidden;
  place-items: center;
  z-index: 2;
}

.popUpfield {
  position: relative;
  height: 70%;
  width: clamp(300px, 90%, 700px);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 5fr;
  background-color: white;
  padding: 2rem;
  gap: 0.5rem;
  position: relative;
  z-index: 3;
}

.priorityWrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,+BAA+B;EAC/B,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,2CAA2C;AAC7C;;AAEA,SAAS;;AAET;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,gDAAgD;EAChD,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gDAAgD;EAChD,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,4DAA4D;EAC5D,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;EACtB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,2CAA2C;EAC3C,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,WAAW;EACX,gBAAgB;AAClB;;AAEA;;GAEG;;AAEH;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;;AAEA,aAAa;;AAEb;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,WAAW;;AAEX;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;;AAEA,UAAU;;AAEV;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,wCAAwC;EACxC,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n  --MAIN-BG-C: ;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 10vh 86vh 4vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 1rem 2rem;\r\n  background-color: greenyellow;\r\n}\r\n.navLi {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.listContainer {\r\n  padding: 1rem 2rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: min-content;\r\n  justify-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.wrapper {\r\n  width: 100% /* clamp(300px, 80%, 1000px) */;\r\n}\r\n\r\n/* PROJ */\r\n\r\n.newObject {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  width: 100%;\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 3fr 1fr 0.5fr 0.5fr;\r\n  background-color: gray;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 4fr 1fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 4fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n/* NOTES */\r\n\r\n.notesContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r\n  grid-auto-rows: minmax(290px, 1fr);\r\n  gap: 1rem;\r\n}\r\n.newNote {\r\n  height: 100%;\r\n  background-color: gray;\r\n}\r\n\r\n/* EVENTS */\r\n\r\n.eventsContainer {\r\n  height: 70vh;\r\n  width: clamp(300px, 80%, 700px);\r\n  background-color: gray;\r\n  display: grid;\r\n  padding: 1rem;\r\n}\r\n\r\n.dateWrapper {\r\n  height: 7vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  place-items: center;\r\n}\r\n\r\n.calendarWrapper {\r\n  height: 50vh;\r\n}\r\n.headings {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  font-weight: bold;\r\n  place-items: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  place-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDay {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.calendarDay::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 25px;\r\n  width: 25px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  border-radius: 5px;\r\n}\r\n.calendarDay:hover::before {\r\n  background: hsla(0, 0%, 100%, 0.247);\r\n}\r\n.inactive {\r\n  opacity: 0.5;\r\n}\r\n.selected::before {\r\n  border: 2px solid white;\r\n}\r\n.eventNoteWrapper {\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 2rem);\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  background-color: white;\r\n  gap: 0.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* .selected::before {\r\n  background-color: aquamarine;\r\n} */\r\n\r\n.eventNoteWrapper {\r\n  height: 31vh;\r\n}\r\n\r\n.weekEnd {\r\n  color: darkred;\r\n}\r\n.currentDay::before {\r\n  background-color: white;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.low {\r\n  background-color: green;\r\n}\r\n.med {\r\n  background-color: yellow;\r\n}\r\n.high {\r\n  background-color: red;\r\n}\r\n\r\n.eventlow::before {\r\n  background-color: green;\r\n}\r\n.eventmed::before {\r\n  background-color: yellow;\r\n}\r\n.eventhigh::before {\r\n  background-color: red;\r\n}\r\n\r\n/* COMPLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n  color: white;\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  position: absolute;\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.479);\r\n  overflow: hidden;\r\n  place-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.popUpfield {\r\n  position: relative;\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 5fr;\r\n  background-color: white;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clearPage.js":
/*!**************************!*\
  !*** ./src/clearPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage)
/* harmony export */ });
const clearPage = () => {
  const page = document.querySelectorAll(".listContainer");
  const buttons = document.querySelectorAll(".navLi");
  buttons.forEach((button) => button.classList.remove("active"));
  page.forEach((page) => page.remove());
};


/***/ }),

/***/ "./src/clearPopUp.js":
/*!***************************!*\
  !*** ./src/clearPopUp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPopUp: () => (/* binding */ clearPopUp)
/* harmony export */ });
const clearPopUp = () => {
  const popUps = document.querySelectorAll(".popUpContainer");
  popUps.forEach((popUp) => popUp.remove());
};


/***/ }),

/***/ "./src/clearRenderedProjects.js":
/*!**************************************!*\
  !*** ./src/clearRenderedProjects.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearRenderedProjects: () => (/* binding */ clearRenderedProjects)
/* harmony export */ });
const clearRenderedProjects = () => {
  const renderedProjects = document.querySelectorAll(".wrapper");
  renderedProjects.forEach((proj) => {
    proj.remove();
  });
};


/***/ }),

/***/ "./src/editItem.js":
/*!*************************!*\
  !*** ./src/editItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editItem: () => (/* binding */ editItem)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");




const editItem = (ev) => {
  const Id = Number(ev.id.slice(10));
  const title = document.querySelector("#title").value;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const projectId = findProj(Id)?.id;
  if (projectId !== undefined) {
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === projectId);
    const task = project.tasks.find((task) => task.id === Id);
    if (task) {
      task.title = title;
      task.priority = priority;
      task.note = note;
    }
  } else if (projectId === undefined) {
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === Id);
    if (project) {
      if (
        (project.type === "daily" || "notes") &&
        project.type !== "proj" &&
        project.type !== "events"
      ) {
        project.title = title;
        if (project.type === "notes") {
          const priorElement = document.querySelector("[data-priority]");
          project.priority = priorElement.getAttribute("data-priority");
          project.note = note;
        } else {
          project.priority = priority;
          project.note = note;
        }
      } else {
        if (project.type === "events") {
          const dueTimeValue = document.querySelector("#time").value;
          const dueTimeObject = _renderEventsPage__WEBPACK_IMPORTED_MODULE_2__.selectedDate;
          const [hours, minutes] = dueTimeValue.split(":");
          dueTimeObject.setHours(hours);
          dueTimeObject.setMinutes(minutes);
          project.dueDate = dueTimeObject;
        } else {
          const dueDateValue = document.querySelector("#date").value;
          const dueDateObject = new Date(dueDateValue);
          project.dueDate = dueDateObject;
        }
        project.title = title;
        project.priority = priority;
        project.note = note;
      }
    }
  }
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
};

const check = () => {
  const radio = document.querySelectorAll(".priority");
  for (const button of radio) {
    if (button.checked) {
      return button.id;
    }
  }
};

function findProj(id) {
  for (const proj of _projects__WEBPACK_IMPORTED_MODULE_0__.projects) {
    const knownTask = proj.tasks.find((task) => task.id === id);
    if (knownTask) {
      return proj;
    }
  }
}


/***/ }),

/***/ "./src/editPriority.js":
/*!*****************************!*\
  !*** ./src/editPriority.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editPriority: () => (/* binding */ editPriority)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const editPriority = (ev) => {
  const id = Number(ev.target.id.slice(2));
  const object = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((obj) => obj.id === id);
  object.priority = ev.target.classList.item(1);
};


/***/ }),

/***/ "./src/filterByDate.js":
/*!*****************************!*\
  !*** ./src/filterByDate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByDate: () => (/* binding */ filterByDate)
/* harmony export */ });
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatDate */ "./src/formatDate.js");



const filterByDate = (array) => {
  if (_renderEventsPage__WEBPACK_IMPORTED_MODULE_0__.selectedDate) {
    const selectedString = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__.formatDate)(_renderEventsPage__WEBPACK_IMPORTED_MODULE_0__.selectedDate);
    const filtered = array.filter((item) => {
      if (item.dueDate) {
        const dueString = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__.formatDate)(item.dueDate);
        return dueString === selectedString;
      } else if (item.completionDate) {
        const completionString = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__.formatDate)(item.completionDate);
        return completionString === selectedString;
      }
    });
    return filtered;
  }
};


/***/ }),

/***/ "./src/filterByToday.js":
/*!******************************!*\
  !*** ./src/filterByToday.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByToday: () => (/* binding */ filterByToday)
/* harmony export */ });
const filterByToday = (array) => {
  const typeOrder = {
    events: 1,
    proj: 2,
    daily: 3,
  };
  const priorityOrder = {
    low: 3,
    med: 2,
    high: 1,
  };

  const currentDate = new Date();
  const startOfDay = new Date(currentDate);
  const endOfDay = new Date(currentDate);
  endOfDay.setHours(23, 59);
  const filtered = array.filter((item) => {
    const dueDate = new Date(item.dueDate);
    return dueDate >= startOfDay && dueDate <= endOfDay;
  });
  const sortedByPriority = filtered.sort((a, b) => {
    const typeComp = typeOrder[a.type] - typeOrder[b.type];
    if (typeComp !== 0) {
      return typeComp;
    }

    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  return sortedByPriority;
};


/***/ }),

/***/ "./src/filterByType.js":
/*!*****************************!*\
  !*** ./src/filterByType.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByType: () => (/* binding */ filterByType)
/* harmony export */ });
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./src/getType.js");


const filterByType = (array) => {
  let filtered;
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_0__.getType)() === "events") {
    filtered = array.filter(
      (item) => item.type === "events" || item.type === "proj"
    );
  } else {
    filtered = array.filter((item) => item.type === (0,_getType__WEBPACK_IMPORTED_MODULE_0__.getType)());
  }
  return filtered;
};


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ renderFooter)
/* harmony export */ });
const renderFooter = () => {
  const content = document.querySelector("footer");
  const footer = `
  <a
  href="https://github.com/DarkestofTimes"
  class="footerA"
  target="_blank"
  >DarkTimes</a
>`;

  content.insertAdjacentHTML("afterbegin", footer);
};


/***/ }),

/***/ "./src/formatDate.js":
/*!***************************!*\
  !*** ./src/formatDate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
const formatDate = (objectDate) => {
  const dueDateObject = objectDate;
  let formattedDueDate = "";
  if (objectDate) {
    const year = dueDateObject.getFullYear();
    const month = String(dueDateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dueDateObject.getDate()).padStart(2, "0");
    formattedDueDate = `${year}-${month}-${day}`;
    return formattedDueDate;
  }
};


/***/ }),

/***/ "./src/formatTime.js":
/*!***************************!*\
  !*** ./src/formatTime.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTime: () => (/* binding */ formatTime)
/* harmony export */ });
const formatTime = (objectTime) => {
  const dueDateObject = objectTime;
  let formattedTime = "";
  if (objectTime) {
    const hours = String(dueDateObject.getHours()).padStart(2, "0");
    const minutes = String(dueDateObject.getMinutes()).padStart(2, "0");
    formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  }
};


/***/ }),

/***/ "./src/getCompletion.js":
/*!******************************!*\
  !*** ./src/getCompletion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCompletion: () => (/* binding */ checkCompletion),
/* harmony export */   getCompletion: () => (/* binding */ getCompletion)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");



const getCompletion = () => {
  const boxes = document.querySelectorAll('[name="completion"]');
  boxes.forEach((box) => {
    box.removeEventListener("change", checkBoxEvent);
    box.addEventListener("change", checkBoxEvent);
  });
};

const checkBoxEvent = (ev) => {
  ev.stopPropagation();
  checkBoxes(ev);
};

function checkBoxes(ev) {
  const checkBoxId = Number(ev.target.id.slice(1));
  const currentDate = new Date();
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((obj) => obj.id === checkBoxId);
  if (project) {
    if (ev.target.checked) {
      project.complete = true;
      project.completionDate = currentDate;
    } else if (!ev.target.checked) {
      project.complete = false;
      project.completionDate = null;
    }
  } else if (!project) {
    const projectWithTask = findProj(checkBoxId);
    const object = projectWithTask.tasks.find((task) => task.id === checkBoxId);
    if (ev.target.checked) {
      object.complete = true;
      object.completionDate = currentDate;
    } else if (!ev.target.checked) {
      object.complete = false;
      object.completionDate = null;
    }
  }
  checkCompletion(ev);
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
}

const checkCompletion = (ev) => {
  const checkBoxId = ev ? Number(ev.target.id.slice(1)) : null;
  const currentDate = new Date();
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((obj) => {
    const completedObjects = obj.tasks.filter((task) => !task.complete);
    if (obj.type === "events") {
      if (obj.dueDate < currentDate) {
        obj.complete = true;
        obj.completionDate = currentDate;
      }
    } else if (
      (obj.tasks.length !== 0 && completedObjects.length === 0) ||
      (obj.type === "daily" && ev.target.checked && checkBoxId === obj.id)
    ) {
      obj.complete = true;
      obj.completionDate = currentDate;
    } else if (obj.tasks.length !== 0 && completedObjects.length !== 0) {
      obj.complete = false;
      obj.completionDate = null;
    }
  });
};

function findProj(id) {
  for (const proj of _projects__WEBPACK_IMPORTED_MODULE_0__.projects) {
    const knownTask = proj.tasks.find((task) => task.id === id);
    if (knownTask) {
      return proj;
    }
  }
}


/***/ }),

/***/ "./src/getObject.js":
/*!**************************!*\
  !*** ./src/getObject.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getObject: () => (/* binding */ getObject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idGenerator */ "./src/idGenerator.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getType */ "./src/getType.js");
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");







const getObject = (projId) => {
  const title = document.querySelector("#title").value;
  let dueDate = "";
  let type = (0,_getType__WEBPACK_IMPORTED_MODULE_4__.getType)();
  if (
    projId === undefined &&
    type !== "daily" &&
    type !== "notes" &&
    type !== "events"
  ) {
    const dueDateValue = document.querySelector("#date").value;
    if (dueDateValue) {
      const dueDateDate = new Date(dueDateValue);
      dueDateDate.setHours(23);
      dueDateDate.setMinutes(59);
      dueDate = dueDateDate;
    } else {
      dueDate = "";
    }
  } else if (type === "events") {
    const dueTimeValue = document.querySelector("#time").value;
    const [hours, minutes] = dueTimeValue.split(":");
    if (dueTimeValue) {
      _renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.selectedDate.setHours(hours);
      _renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.selectedDate.setMinutes(minutes);
      dueDate = _renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.selectedDate;
    } else {
      dueDate = _renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.selectedDate;
    }
  }

  if (type === "daily") {
    const currentDate = new Date();
    const midNight = new Date(currentDate);
    midNight.setDate(currentDate.getDate());
    midNight.setHours(23, 59, 0);
    dueDate = midNight;
  }

  const completionDate = null;
  let priority = check();
  if (type === "notes") {
    const priorElement = document.querySelector("[data-priority]");
    priority = priorElement.getAttribute("data-priority");
  }
  const note = document.querySelector("#projNote").value;
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_1__.generatedId)();
  const complete = false;

  addObject(
    projId,
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note,
    type
  );
};

const addObject = (
  projId,
  title,
  id,
  dueDate,
  completionDate,
  complete,
  priority,
  note,
  type
) => {
  const newObject = new _projects__WEBPACK_IMPORTED_MODULE_0__.Object(
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note,
    type
  );
  if (projId !== null && projId !== undefined) {
    const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === projId);
    currentProject.tasks.push(newObject);
  } else {
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(newObject);
  }
  (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__.clearRenderedProjects)();
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_2__.renderObjects)();
};

const check = () => {
  const radio = document.querySelectorAll(".priority");
  for (const button of radio) {
    if (button.checked) {
      return button.id;
    }
  }
};


/***/ }),

/***/ "./src/getType.js":
/*!************************!*\
  !*** ./src/getType.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getType: () => (/* binding */ getType)
/* harmony export */ });
const getType = () => {
  const activeTab = document.querySelector(".active");
  return activeTab.id;
};


/***/ }),

/***/ "./src/handleEnter.js":
/*!****************************!*\
  !*** ./src/handleEnter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleEnter: () => (/* binding */ handleEnter)
/* harmony export */ });
const handleEnter = (ev) => {
  const enterKeyCode = 13;
  const particularElementId = document.querySelector('[id^="addProjBtn"]');
  if (particularElementId && ev.keyCode === enterKeyCode && !ev.shiftKey) {
    ev.preventDefault();
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    particularElementId.dispatchEvent(clickEvent);
  }
};


/***/ }),

/***/ "./src/handleEscape.js":
/*!*****************************!*\
  !*** ./src/handleEscape.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleEscape: () => (/* binding */ handleEscape)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");


const handleEscape = (ev) => {
  if (ev.key === "Escape" || ev.key === "Esc") {
    (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
  }
};


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
const renderHeader = () => {
  const content = document.querySelector("header");
  const header = `
  <nav class="navbar">
  <ul class="navUl">
    <li id="proj" class="navLi">
      <span class="navSpan">Project</span>
    </li>
    <li id="daily" class="navLi">
      <span class="navSpan">Daily</span>
    </li>
    <li id="events" class="navLi">
      <span class="navSpan">Events</span>
    </li>
    <li id="notes" class="navLi">
      <span class="navSpan">Notes</span>
    </li>
  </ul>
</nav>`;

  content.insertAdjacentHTML("afterbegin", header);
};


/***/ }),

/***/ "./src/idGenerator.js":
/*!****************************!*\
  !*** ./src/idGenerator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateId: () => (/* binding */ generateId),
/* harmony export */   generatedId: () => (/* binding */ generatedId)
/* harmony export */ });
const generateId = () => {
  let value = 0;

  return function () {
    return ++value;
  };
};

let generatedId = generateId();


/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialization: () => (/* binding */ initialization)
/* harmony export */ });
const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#proj");
  button.classList.add("active");
  piece2();
  piece3();
};


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Object: () => (/* binding */ Object),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
const projects = [];

function Object(
  title,
  id,
  dueDate,
  completionDate,
  complete,
  priority,
  note,
  type
) {
  this.title = title;
  this.id = id;
  this.tasks = [];
  this.dueDate = dueDate;
  this.completionDate = completionDate;
  this.complete = complete;
  this.priority = priority;
  this.note = note;
  this.type = type;
  this.addedDate = getDate();
}

const getDate = () => {
  const currentDate = new Date();
  return currentDate;
};


/***/ }),

/***/ "./src/removeCompleted.js":
/*!********************************!*\
  !*** ./src/removeCompleted.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bin: () => (/* binding */ bin),
/* harmony export */   checkDueDatesAndRemoveCompleted: () => (/* binding */ checkDueDatesAndRemoveCompleted)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCompletion */ "./src/getCompletion.js");



const bin = [];

const removeCompleted = () => {
  const currentDate = new Date();

  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((object) => {
    if (object.dueDate) {
      const midNight = new Date(currentDate);
      midNight.setDate(object.dueDate.getDate() + 1);
      midNight.setHours(0, 0, 0);
      const midNightAhead = new Date();
      midNightAhead.setDate(object.dueDate.getDate() + 2);
      midNightAhead.setHours(0, 0, 0);

      const twoHoursAhead = new Date();
      twoHoursAhead.setHours(object.dueDate.getHours() + 2);
      if (object.type === "daily") {
        if (object.complete === true && currentDate >= object.dueDate) {
          const index = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => obj.id === object.id);
          _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
        } else if (
          object.complete === false &&
          currentDate >= object.dueDate &&
          currentDate >= midNightAhead
        ) {
          const index = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => obj.id === object.id);
          _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
        }
      } else if (
        (object.type === "proj" && object.complete === true) ||
        (object.type === "events" && object.complete === true)
      ) {
        const index = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => obj.id === object.id);
        const spliced = _projects__WEBPACK_IMPORTED_MODULE_0__.projects[index];
        if (!bin.find((obj) => obj.id === spliced.id)) {
          bin.push(spliced);
        }
      }
    }
  });
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
};

const checkDueDatesAndRemoveCompleted = () => {
  (0,_getCompletion__WEBPACK_IMPORTED_MODULE_2__.checkCompletion)();
  removeCompleted();
};


/***/ }),

/***/ "./src/removeItem.js":
/*!***************************!*\
  !*** ./src/removeItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeItem: () => (/* binding */ removeItem)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _removeCompleted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeCompleted */ "./src/removeCompleted.js");



const removeItem = (ev) => {
  const targetId = Number(ev.target.id.slice(2));
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((proj) => proj.id === targetId);
  const projectIndex = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((proj) => proj.id === targetId);
  if (
    (project !== undefined || project !== null) &&
    ev.target.id.slice(0, 2) == "dp"
  ) {
    if (
      (project.type === "events" || project.type === "proj") &&
      project.complete === true
    ) {
      if (_removeCompleted__WEBPACK_IMPORTED_MODULE_1__.bin.find((obj) => obj.id === project.id)) {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1);
      } else {
        _removeCompleted__WEBPACK_IMPORTED_MODULE_1__.bin.push(_projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1));
      }
      const projElement = document.querySelector(`#pw${targetId}`);
      projElement.remove();
    } else {
      _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1);
      const projElement = document.querySelector(`#pw${targetId}`);
      projElement.remove();
    }
  } else {
    const projWithTask = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((proj) =>
      proj.tasks.some((task) => task.id === targetId)
    );
    if (projWithTask) {
      const taskIndex = projWithTask.tasks.findIndex(
        (task) => task.id === targetId
      );
      projWithTask.tasks.splice(taskIndex, 1);
      const taskElement = document.querySelector(`#pt${targetId}`);
      taskElement.remove();
    }
  }
};


/***/ }),

/***/ "./src/renderDailyPage.js":
/*!********************************!*\
  !*** ./src/renderDailyPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDailyPage: () => (/* binding */ renderDailyPage)
/* harmony export */ });
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");



const renderDailyPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer dailyContainer">
  <div class="newObject" id="newDailyTask">
    <p class="newObject__p">Add Daily</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_0__.renderObjects)();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newDailyTask");
  newProj.removeEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__.renderGetPopUp);
  newProj.addEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__.renderGetPopUp);
};


/***/ }),

/***/ "./src/renderEditPopUp.js":
/*!********************************!*\
  !*** ./src/renderEditPopUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEditPopUp: () => (/* binding */ renderEditPopUp)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItem */ "./src/editItem.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _switchPriority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switchPriority */ "./src/switchPriority.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatDate */ "./src/formatDate.js");
/* harmony import */ var _formatTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatTime */ "./src/formatTime.js");
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getType */ "./src/getType.js");










const renderEditPopUp = (ev) => {
  const container = document.querySelector("main");
  const id = Number(ev.id.slice(2));
  let object;
  if (ev.id.slice(0, 2) !== "pt") {
    const project = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.find((project) => project.id === id);
    object = project;
  } else if (ev.id.slice(0, 2) === "pt") {
    const project = findProj(id);
    const task = project.tasks.find((task) => task.id === id);
    object = task;
  }
  let dateElement = "";
  if (object.type !== "daily" && object.type !== "events") {
    dateElement = `<label for="date" class="label">Due date:</label>
  <input type="date" id="date" value="${(0,_formatDate__WEBPACK_IMPORTED_MODULE_5__.formatDate)(object.dueDate)}">`;
  } else if (object.type === "events") {
    dateElement = `<label for="time" class="label">Due Time:</label>
    <input type="time" id="time" value="${(0,_formatTime__WEBPACK_IMPORTED_MODULE_6__.formatTime)(
      object.dueDate
    )}" min="00:00" max="23:59">`;
  }

  if (object.type === "notes") {
    const note = `<div class="popUpContainer">
    <div class="popUpfield" id="editTask">
      <label class="label" for="title">Title:</label>
      <input name="title" class="input" type="text" id="title" value="${
        object.title
      }" autofocus />
      <p class="noteDate" id="noteDate">${(0,_formatDate__WEBPACK_IMPORTED_MODULE_5__.formatDate)(object.addedDate)}</p>
      <div class="noteMark ${object.priority}" data-priority="${
      object.priority
    }" id="notePriority${object.id}">M</div>
      <textarea name="note" id="projNote" cols="30" rows="10">${
        object.note
      }</textarea>
      <button class="popUpButton" id="addProjBtn${object.id}">Edit</button>
      <button class="popUpButton" id="closeBtn">Close</button>
    </div>
  </div>`;
    container.insertAdjacentHTML("afterbegin", note);
  } else {
    const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="editTask">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" value="${
      object.title
    }" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" ${
        object.priority === "low" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" ${
        object.priority === "med" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" ${
        object.priority === "high" ? "checked" : ""
      }/>
    </div>
    ${dateElement}
    <p class="taskCompletionDate">
        ${
          object.completionDate === null
            ? ""
            : `Completed on:${object.completionDate}`
        }
      </p>
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10">${
      object.note
    }</textarea>
    <button class="popUpButton" id="addProjBtn${id}">Edit</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;
    container.insertAdjacentHTML("afterbegin", projPage);
  }
  listeners(ev.id);
};

const listeners = (id) => {
  const addBtn = document.querySelector(`#addProjBtn${id.slice(2)}`);
  const closeBtn = document.querySelector("#closeBtn");
  const priorityBtn = document.querySelector(".noteMark");
  if (priorityBtn) {
    priorityBtn.addEventListener("click", _switchPriority__WEBPACK_IMPORTED_MODULE_4__.switchPriority);
  }
  if (id.slice(0, 2) !== "pt") {
    addBtn.addEventListener("click", (ev) => {
      (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
      (0,_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(ev.target);
      if ((0,_getType__WEBPACK_IMPORTED_MODULE_8__.getType)() === "events") {
        (0,_renderEventsPage__WEBPACK_IMPORTED_MODULE_7__.markCalendarDays)();
      }
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    });
  } else if (id.slice(0, 2) === "pt") {
    addBtn.addEventListener("click", (ev) => {
      (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
      (0,_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(ev.target);
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    });
  }

  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};

function findProj(id) {
  for (const proj of _projects__WEBPACK_IMPORTED_MODULE_3__.projects) {
    const knownTask = proj.tasks.find((task) => task.id === id);
    if (knownTask) {
      return proj;
    }
  }
}


/***/ }),

/***/ "./src/renderEventsPage.js":
/*!*********************************!*\
  !*** ./src/renderEventsPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markCalendarDays: () => (/* binding */ markCalendarDays),
/* harmony export */   renderEventsPage: () => (/* binding */ renderEventsPage),
/* harmony export */   selectedDate: () => (/* binding */ selectedDate)
/* harmony export */ });
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _filterByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterByType */ "./src/filterByType.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const currentDay = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
let selectedDate = new Date(currentYear, currentMonth, currentDay);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const renderEventsPage = () => {
  const container = document.querySelector("main");
  const eventsPage = ` <div class="listContainer">
  <div class="eventsContainer">
    <div class="dateWrapper">
      <div class="arrow backward" id="backward">B</div>
      <p class="currentDate"></p>
      <div class="arrow forward" id="forward">F</div>
    </div>
    <div class="calendarWrapper">
      <ul class="headings">
        <li class="heading">Mon</li>
        <li class="heading">Tue</li>
        <li class="heading">Wed</li>
        <li class="heading">Thu</li>
        <li class="heading">Fri</li>
        <li class="heading">Sat</li>
        <li class="heading">Sun</li>
      </ul>
      <ul class="calendarDays">
      </ul>
      <div class="eventNoteWrapper">
      <div class="newObject" id="newEvent">
       <p class="newObject__p">Add Event</p>
    </div>
    </div>
    </div>
  </div>
</div>    
    `;

  container.insertAdjacentHTML("afterbegin", eventsPage);
  renderCalendar();
};

const renderCalendar = () => {
  const firstDateOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarContainer = document.querySelector(".calendarDays");
  const currentDate = document.querySelector(".currentDate");
  const dateString = firstDateOfMonth.toLocaleDateString("en-eu", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();
  const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();
  const paddingDays = weekDays.indexOf(dateString.split(",")[0]);
  // previous month
  const calendarDays = [];
  for (let i = paddingDays; i > 0; --i) {
    const previousMonthDay = lastDateOfLastMonth - i + 1;
    const isWeekend =
      weekDays[new Date(year, month - 1, previousMonthDay - 1).getDay()] ===
        "Saturday" ||
      weekDays[new Date(year, month - 1, previousMonthDay - 1).getDay()] ===
        "Sunday";
    const isInactive = true;
    const backward = true;
    calendarDays.push({
      day: lastDateOfLastMonth - i + 1,
      isWeekend,
      isInactive,
      backward,
    });
  }
  //current month
  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay =
      i === currentDay && month === currentMonth && year === currentYear;
    const isSelectedDay =
      selectedDate &&
      i === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear();
    const isWeekend =
      weekDays[new Date(year, month, i - 1).getDay()] === "Saturday" ||
      weekDays[new Date(year, month, i - 1).getDay()] === "Sunday";
    const isDay = true;
    const isPast = i < currentDay;
    calendarDays.push({
      day: i,
      isCurrentDay,
      isSelectedDay,
      isWeekend,
      isDay,
      isPast,
    });
  }
  //next month
  for (let i = lastDayOfMonth; i < 7; i++) {
    const nextMonthDay = i - lastDayOfMonth + 1;
    const isWeekend =
      weekDays[new Date(year, month + 1, nextMonthDay - 1).getDay()] ===
        "Saturday" ||
      weekDays[new Date(year, month + 1, nextMonthDay - 1).getDay()] ===
        "Sunday";
    const isInactive = true;
    const forward = true;
    calendarDays.push({ day: nextMonthDay, isWeekend, isInactive, forward });
  }

  const calendarDayHTML = calendarDays
    .map((dayInfo) => {
      let classNames = "calendarDay";
      if (dayInfo.isCurrentDay) classNames += " currentDay";
      if (dayInfo.isSelectedDay) classNames += " selected";
      if (dayInfo.isWeekend) classNames += " weekEnd";
      if (dayInfo.isInactive) classNames += " inactive";
      if (dayInfo.backward) classNames += " backward";
      if (dayInfo.forward) classNames += " forward";
      if (dayInfo.isDay) classNames += " day";
      if (dayInfo.isPast) classNames += " inactive";

      return `<li class="${classNames}">${dayInfo.day}</li>`;
    })
    .join("");

  calendarContainer.insertAdjacentHTML("beforeend", calendarDayHTML);
  currentDate.textContent = `${months[month]} ${year}`;
  markCalendarDays();
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
  listeners();
};

const markCalendarDays = () => {
  const filteredByType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_2__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_3__.projects);
  filteredByType.forEach((object) => {
    if (
      object.dueDate &&
      object.dueDate.getFullYear() === year &&
      object.dueDate.getMonth() === month
    ) {
      const renderedDays = document.querySelectorAll(".day");
      const dueString = String(object.dueDate.getDate());
      renderedDays.forEach((day) => {
        if (dueString) {
          mark(day, dueString, object);
        }
      });
    } else if (
      object.completionDate &&
      object.completionDate.getFullYear() === year &&
      object.completionDate.getMonth() === month
    ) {
      const renderedDays = document.querySelectorAll(".day");
      const completionString = String(object.completionDate.getDate());
      renderedDays.forEach((day) => {
        if (completionString) {
          mark(day, completionString, object);
        }
      });
    }
  });
};

const mark = (day, string, object) => {
  const selectedString = String(selectedDate.getDate());
  const daySting = String(day.innerText);
  if (daySting === string) {
    if (
      day.classList.contains(`event${object.priority}`) &&
      daySting === selectedString
    ) {
      day.classList.remove(`event${object.priority}`);
    } else {
      day.classList.add(`event${object.priority}`);
    }
  }
};

/* if (object.dueDate || object.completionDate) {
  if (
    (object.dueDate.getFullYear() === year &&
      object.dueDate.getMonth() === month) ||
    (object.completionDate.getFullYear() === year &&
      object.completionDate.getMonth() === month)
  ) {
    const renderedDays = document.querySelectorAll(".day");
    const dueString = object.dueDate
      ? String(object.dueDate.getDate())
      : null;
    const completionString = object.completionDate
      ? String(object.completionDate.getDate())
      : null;
    console.log(object.completionDate, "comp");
    console.log(dueString, "due 2");
    renderedDays.forEach((day) => {
      if (dueString && dueString !== null) {
        mark(day, dueString, object);
        console.log(dueString, "due");
      } else if (completionString && completionString !== null) {
        mark(day, completionString, object);
        console.log(completionString);
      }
    });
  }
} */

const listeners = () => {
  const forwardBackward = document.querySelectorAll(".arrow");
  const calendarDays = document.querySelectorAll(".calendarDay");
  const newProj = document.querySelector("#newEvent");
  newProj.removeEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_0__.renderGetPopUp);
  newProj.addEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_0__.renderGetPopUp);
  forwardBackward.forEach((arrow) => {
    arrow.removeEventListener("click", monthChangerEvent);
    arrow.addEventListener("click", monthChangerEvent);
  });
  calendarDays.forEach((day) => {
    day.removeEventListener("click", dateSelectionEvent);
    day.addEventListener("click", dateSelectionEvent);
  });
};

const monthChangerEvent = (ev) => {
  if (
    ev.target.classList.contains("forward") ||
    ev.target.classList.contains("backward")
  ) {
    clearCalendar();
    changeMonth(ev);
    renderCalendar();
  }
};

const dateSelectionEvent = (ev) => {
  selectDate(ev);
};

const clearCalendar = () => {
  const calendarDays = document.querySelectorAll(".calendarDay");
  calendarDays.forEach((day) => {
    day.remove();
  });
};

const changeMonth = (ev) => {
  if (ev.target.classList.contains("forward")) {
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  } else if (ev.target.classList.contains("backward")) {
    month -= 1;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
  }
};

const selectDate = (ev) => {
  const calendarDays = document.querySelectorAll(".calendarDay");
  const selectedDateElement = ev.target;
  let selectedDay = ev.target.innerText;
  calendarDays.forEach((day) => {
    day.classList.remove("selected");
  });
  if (ev.target.classList.contains("inactive")) {
    monthChangerEvent(ev);
    const newRenderedMonth = document.querySelectorAll(".day");
    const newSelectedDateElement = Array.from(newRenderedMonth).find(
      (day) => day.innerText === ev.target.innerText
    );
    newSelectedDateElement.classList.add("selected");
  } else {
    selectedDateElement.classList.add("selected");
  }
  selectedDate = new Date(year, month, selectedDay);
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
};


/***/ }),

/***/ "./src/renderGetPopUp.js":
/*!*******************************!*\
  !*** ./src/renderGetPopUp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGetPopUp: () => (/* binding */ renderGetPopUp)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _getObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getObject */ "./src/getObject.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getType */ "./src/getType.js");
/* harmony import */ var _switchPriority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switchPriority */ "./src/switchPriority.js");
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");







const renderGetPopUp = (objId) => {
  const container = document.querySelector("main");
  let objectId = objId;

  if (objId instanceof PointerEvent) {
    objectId = undefined;
  }
  let dateElement = "";
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "daily") {
    dateElement = "";
  } else if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "events") {
    dateElement = `<label for="time" class="label">Due Time:</label>
    <input type="time" id="time" min="00:00" max="23:59">`;
  } else if (
    objectId === undefined &&
    (0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() !== "events" &&
    (0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() !== "daily"
  ) {
    dateElement = `<label for="date" class="label">Due date:</label>
         <input type="date" id="date"></input>`;
  } else if (objectId !== undefined) {
    dateElement = "";
  }

  if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "notes") {
    notes();
  } else {
    const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="addTask">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" autofocus/>
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" checked />
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" />
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" />
    </div>
    ${dateElement}
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10"></textarea>
    <button class="popUpButton" id="addProjBtn${objectId}">Add</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

    container.insertAdjacentHTML("afterbegin", projPage);
  }
  listeners(objectId);
};

const listeners = (objId) => {
  const newProj = document.querySelectorAll(`[id^="addProjBtn"]`);
  const closeBtn = document.querySelector("#closeBtn");
  const priorityBtn = document.querySelector(".noteMark");
  if (priorityBtn) {
    priorityBtn.addEventListener("click", _switchPriority__WEBPACK_IMPORTED_MODULE_4__.switchPriority);
  }
  if (newProj) {
    newProj.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        if (objId !== undefined) {
          const evId = Number(ev.target.id.slice(10));
          (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
          (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.getObject)(evId);
          (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
        } else if (objId === undefined) {
          (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
          (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.getObject)();
          if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "events") {
            (0,_renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.markCalendarDays)();
          }
          (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
        }
      });
    });
  }
  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};

const notes = () => {
  const container = document.querySelector("main");
  const note = `<div class="popUpContainer">
  <div class="popUpfield" id="editTask">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" " autofocus />
    <p class="noteDate" id="noteDate"></p>
    <div class="noteMark low" data-priority="low" id="notePriority">M</div>
    <textarea name="note" id="projNote" cols="30" rows="10"></textarea>
    <button class="popUpButton" id="addProjBtn">Add</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;
  container.insertAdjacentHTML("afterbegin", note);
};


/***/ }),

/***/ "./src/renderNotesPage.js":
/*!********************************!*\
  !*** ./src/renderNotesPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderNotesPage: () => (/* binding */ renderNotesPage)
/* harmony export */ });
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");



const renderNotesPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer notesContainer">
  <div class="newNote" id="newNote">
    <p class="newNote__p">Add Note</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_0__.renderObjects)();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newNote");
  newProj.removeEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__.renderGetPopUp);
  newProj.addEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__.renderGetPopUp);
};


/***/ }),

/***/ "./src/renderObjects.js":
/*!******************************!*\
  !*** ./src/renderObjects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderObjects: () => (/* binding */ renderObjects)
/* harmony export */ });
/* harmony import */ var _renderProjTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjTask */ "./src/renderProjTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCompletion */ "./src/getCompletion.js");
/* harmony import */ var _sortArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortArray */ "./src/sortArray.js");
/* harmony import */ var _removeItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeItem */ "./src/removeItem.js");
/* harmony import */ var _renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderEditPopUp */ "./src/renderEditPopUp.js");
/* harmony import */ var _filterByType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterByType */ "./src/filterByType.js");
/* harmony import */ var _filterByToday__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filterByToday */ "./src/filterByToday.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getType */ "./src/getType.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _switchPriority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./switchPriority */ "./src/switchPriority.js");
/* harmony import */ var _filterByDate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filterByDate */ "./src/filterByDate.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formatDate */ "./src/formatDate.js");
/* harmony import */ var _formatTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formatTime */ "./src/formatTime.js");
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");

















const renderObjects = () => {
  (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__.clearRenderedProjects)();
  const arrayOfType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_7__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  let dailyArray = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(arrayOfType);
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily") {
    dailyArray = (0,_filterByToday__WEBPACK_IMPORTED_MODULE_8__.filterByToday)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
    dailyArray.forEach((proj) => {
      renderObject(proj);
      (0,_renderProjTask__WEBPACK_IMPORTED_MODULE_0__.renderProjTask)(proj);
    });
  } else if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "notes") {
    dailyArray.forEach((object) => {
      renderNotes(object);
    });
  } else if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "events") {
    const filteredByType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_7__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
    const filteredByDate = (0,_filterByDate__WEBPACK_IMPORTED_MODULE_12__.filterByDate)(filteredByType);
    if (filteredByDate) {
      dailyArray = filteredByDate;
      dailyArray.forEach((object) => {
        renderEvents(object);
      });
    } else {
      dailyArray = (0,_filterByToday__WEBPACK_IMPORTED_MODULE_8__.filterByToday)(filteredByType);
      dailyArray.forEach((object) => {
        renderEvents(object);
      });
    }
  } else {
    dailyArray.forEach((proj) => {
      renderObject(proj);
      (0,_renderProjTask__WEBPACK_IMPORTED_MODULE_0__.renderProjTask)(proj);
    });
  }

  listeners();
  (0,_getCompletion__WEBPACK_IMPORTED_MODULE_3__.getCompletion)();
};

function check(complete) {
  if (complete) {
    return 'checked="checked"';
  } else {
    return "";
  }
}

const renderObject = (proj) => {
  const container = document.querySelector(".listContainer");
  let checkElement = "";
  let deleteElement = `<p class="delete" id="dp${proj.id}">D</p>`;
  let addTask = `
  <div class="newTask" id="nt${proj.id}">
      <p class="newTask__p">Add task</p>
  </div>`;
  if (proj.type === "daily" && proj.tasks.length === 0) {
    checkElement = `<input type="checkbox" class="completion" name="completion" id="${"c"}${
      proj.id
    }"  ${check(proj.complete)}/>`;
  }
  if (
    (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily" &&
    (proj.type === "proj" || proj.type === "events")
  ) {
    addTask = "";
    deleteElement = "";
  }
  const formattedDueDate = proj.dueDate ? (0,_formatDate__WEBPACK_IMPORTED_MODULE_13__.formatDate)(proj.dueDate) : "";
  const dueDate = `<p class="objDate">Due:${formattedDueDate}</p>`;
  const dueTime = `<p class="objTime">On:${(0,_formatTime__WEBPACK_IMPORTED_MODULE_14__.formatTime)(proj.dueDate)}</p>`;
  const Object = `
<div class="objectWrapper wrapper" id="pw${proj.id}">
<div class="object ${proj.priority} ${proj.complete}" id="${"pp"}${proj.id}">
${checkElement}
  <p class="objTitle">${proj.title}</p>
  ${
    proj.type === "daily"
      ? ""
      : proj.type === "proj"
      ? dueDate
      : proj.type === "events"
      ? dueTime
      : ""
  }
  <p class="objNote">${proj.note === "" ? "" : "N"}</p>
  ${deleteElement}
</div>
<div class="taskWrapper" id="tw${proj.id}">
${addTask}
</div>
</div>`;
  container.insertAdjacentHTML("beforeend", Object);
};

const renderNotes = (object) => {
  const formattedDate = (0,_formatDate__WEBPACK_IMPORTED_MODULE_13__.formatDate)(object.addedDate);
  const container = document.querySelector(".listContainer");
  const Note = `<div class="noteWrapper wrapper" id="pw${object.id}">
      <div class="object" id="no${object.id}">
      <p class="noteTitle" id="nt${object.id}">${object.title}</p>
      <p class="noteDate" id="nd${object.id}">${formattedDate}</p>
      <div class="noteMark ${object.priority}" id="nm${object.id}">M
      </div>
      <p class="delete" id="dp${object.id}">D</p>
      <p class="noteBody" id="nb${object.id}">${object.note}</p>
    </div>
    </div>`;
  container.insertAdjacentHTML("beforeend", Note);
};

const renderEvents = (object) => {
  const container = document.querySelector(".eventNoteWrapper");
  const dateElement = object.type === "proj" ? "" : (0,_formatTime__WEBPACK_IMPORTED_MODULE_14__.formatTime)(object.dueDate);
  const eventElement = `<div class="EventWrapper wrapper" id="pw${object.id}">
  <div class="object ${object.priority} ${object.complete}" id="eo${object.id} ">
  <p class="eventTitle" id="et${object.id}">${object.title}</p>
  <p class="eventDate" id="ed${object.id}">${dateElement}</p>
  <p class="delete" id="dp${object.id}">D</p>
  <p class="eventBody" id="eb${object.id}">${object.note}</p>
</div>
</div>`;
  container.insertAdjacentHTML("beforeend", eventElement);
};

const listeners = () => {
  const newTasks = document.querySelectorAll(".newTask");
  const deleteBtns = document.querySelectorAll(".delete");
  const projectBtns = document.querySelectorAll(".object");
  const taskBtns = document.querySelectorAll(".Task");
  const markNote = document.querySelectorAll(".noteMark");
  newTasks.forEach((task) => {
    task.removeEventListener("click", addTaskEvent);
    task.addEventListener("click", addTaskEvent);
  });
  deleteBtns.forEach((btn) => {
    btn.removeEventListener("click", removeEvent);
    btn.addEventListener("click", removeEvent);
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", editProjectEvent);
    project.addEventListener("click", editProjectEvent);
  });
  taskBtns.forEach((task) => {
    task.removeEventListener("click", editTaskEvent);
    task.addEventListener("click", editTaskEvent);
  });
  markNote.forEach((btn) => {
    btn.removeEventListener("click", markNoteEvent);
    btn.addEventListener("click", markNoteEvent);
  });
};

const editProjectEvent = (ev) => {
  const target = ev.target.closest(".object");
  if (
    !ev.target.classList.contains("completion") &&
    !ev.target.classList.contains("noteMark")
  ) {
    (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp)(target);
  }
};

const editTaskEvent = (ev) => {
  const target = ev.target.closest(".Task");
  if (!ev.target.classList.contains("completion")) {
    (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp)(target);
  }
};

const markNoteEvent = (ev) => {
  (0,_switchPriority__WEBPACK_IMPORTED_MODULE_11__.switchPriority)(ev);
};

const removeEvent = (ev) => {
  ev.stopPropagation();
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "events") {
    (0,_renderEventsPage__WEBPACK_IMPORTED_MODULE_15__.markCalendarDays)();
  }
  (0,_removeItem__WEBPACK_IMPORTED_MODULE_5__.removeItem)(ev);
  renderObjects();
};

const addTaskEvent = (ev) => {
  const target = ev.target.closest(".newTask");
  (0,_renderGetPopUp__WEBPACK_IMPORTED_MODULE_2__.renderGetPopUp)(target.id.slice(2));
};


/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPage: () => (/* binding */ renderPage)
/* harmony export */ });
const renderPage = (id, proj, daily, events, notes) => {
  const button = document.querySelector(`#${id}`);
  button.classList.add("active");
  switch (id) {
    case "proj":
      proj();
      break;
    case "daily":
      daily();
      break;
    case "events":
      events();
      break;
    case "notes":
      notes();
      break;
  }
};


/***/ }),

/***/ "./src/renderProjPage.js":
/*!*******************************!*\
  !*** ./src/renderProjPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjPage: () => (/* binding */ renderProjPage)
/* harmony export */ });
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");



const renderProjPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer projectsContainer">
  <div class="newObject" id="newProj">
    <p class="newObject__p">Add Project</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_0__.renderObjects)();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newProj");
  newProj.addEventListener("click", _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__.renderGetPopUp);
};


/***/ }),

/***/ "./src/renderProjTask.js":
/*!*******************************!*\
  !*** ./src/renderProjTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjTask: () => (/* binding */ renderProjTask)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getType */ "./src/getType.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatDate */ "./src/formatDate.js");




const renderProjTask = (obj) => {
  const container = document.querySelector(`#tw${obj.id}`);
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((proj) => proj.id === obj.id);
  const tasks = project.tasks;

  let deleteElement = "";
  let dateElement = "";
  tasks.forEach((task) => {
    const formattedDate = (0,_formatDate__WEBPACK_IMPORTED_MODULE_2__.formatDate)(task.completionDate);
    if (project.type !== "daily") {
      dateElement = `<p class="taskDate">${
        task.completionDate === null ? "" : formattedDate
      }</p>`;
    }
    if ((0,_getType__WEBPACK_IMPORTED_MODULE_1__.getType)() === "daily" && project.type === "proj") {
      deleteElement = "";
    } else {
      deleteElement = `<p class="delete" id="dt${task.id}">D</p>`;
    }
    const newTask = `
      <div class="Task ${task.priority} ${task.complete}" id="pt${task.id}">
       <input type="checkbox" class="completion" name="completion" id="c${
         task.id
       }"  ${check(task.complete)}/>
        <p class="taskTitle">${task.title}</p>
       ${dateElement}
        <p class="taskNote">${task.note === "" ? "" : "N"}</p>
        ${deleteElement}
      </div>
`;
    container.insertAdjacentHTML("beforeend", newTask);
  });
};

function check(complete) {
  if (complete) {
    return 'checked="checked"';
  }
}


/***/ }),

/***/ "./src/sortArray.js":
/*!**************************!*\
  !*** ./src/sortArray.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortArray: () => (/* binding */ sortArray)
/* harmony export */ });
const sortArray = (array) => {
  const priorityOrder = {
    low: 3,
    med: 2,
    high: 1,
  };

  const sortedByPriority = sortTasks(array, priorityOrder).sort((a, b) => {
    const priorityComp = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityComp !== 0) {
      return priorityComp;
    }
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return sortedByPriority;
};

const sortTasks = (array, order) => {
  return array.map((item) => ({
    ...item,
    tasks: item.tasks.sort((a, b) => order[a.priority] - order[b.priority]),
  }));
};


/***/ }),

/***/ "./src/switchPriority.js":
/*!*******************************!*\
  !*** ./src/switchPriority.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchPriority: () => (/* binding */ switchPriority)
/* harmony export */ });
/* harmony import */ var _editPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editPriority */ "./src/editPriority.js");


const switchPriority = (ev) => {
  const priorElement = document.querySelector(`#${ev.target.id}`);
  if (priorElement) {
    if (priorElement.classList.contains("low")) {
      priorElement.classList.remove("low");
      priorElement.classList.add("high");
      priorElement.setAttribute("data-priority", "high");
      if (ev.target.id.startsWith("nm")) {
        (0,_editPriority__WEBPACK_IMPORTED_MODULE_0__.editPriority)(ev);
      }
    } else {
      priorElement.classList.remove("high");
      priorElement.classList.add("low");
      priorElement.setAttribute("data-priority", "low");
      if (ev.target.id.startsWith("nm")) {
        (0,_editPriority__WEBPACK_IMPORTED_MODULE_0__.editPriority)(ev);
      }
    }
  }
};


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _renderProjPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjPage */ "./src/renderProjPage.js");
/* harmony import */ var _renderEventsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderEventsPage */ "./src/renderEventsPage.js");
/* harmony import */ var _renderDailyPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderDailyPage */ "./src/renderDailyPage.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialization */ "./src/initialization.js");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clearPage */ "./src/clearPage.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _renderNotesPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./renderNotesPage */ "./src/renderNotesPage.js");
/* harmony import */ var _handleEscape__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handleEscape */ "./src/handleEscape.js");
/* harmony import */ var _handleEnter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handleEnter */ "./src/handleEnter.js");
/* harmony import */ var _removeCompleted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./removeCompleted */ "./src/removeCompleted.js");














(0,_initialization__WEBPACK_IMPORTED_MODULE_6__.initialization)(_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader, _renderDailyPage__WEBPACK_IMPORTED_MODULE_4__.renderDailyPage, _footer__WEBPACK_IMPORTED_MODULE_5__.renderFooter);

const buttons = document.querySelectorAll(".navLi");
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const target = ev.target.closest(".navLi");
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_7__.clearPage)();
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_8__.renderPage)(
      target.id,
      _renderProjPage__WEBPACK_IMPORTED_MODULE_2__.renderProjPage,
      _renderDailyPage__WEBPACK_IMPORTED_MODULE_4__.renderDailyPage,
      _renderEventsPage__WEBPACK_IMPORTED_MODULE_3__.renderEventsPage,
      _renderNotesPage__WEBPACK_IMPORTED_MODULE_9__.renderNotesPage
    );
  });
});

setInterval(_removeCompleted__WEBPACK_IMPORTED_MODULE_12__.checkDueDatesAndRemoveCompleted, 1000 * 120);
document.addEventListener("keydown", _handleEscape__WEBPACK_IMPORTED_MODULE_10__.handleEscape);
document.addEventListener("keydown", _handleEnter__WEBPACK_IMPORTED_MODULE_11__.handleEnter);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsaUJBQWlC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O0FBQzNDLHFDQUFxQyx3REFBWTtBQUNqRCxxQ0FBcUMsc0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jbGVhclBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUmVuZGVyZWRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0UHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlEYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlckJ5VG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb3JtYXREYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm1hdFRpbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0Q29tcGxldGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0VHlwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVFbnRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2lkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luaXRpYWxpemF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckRhaWx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFZGl0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJHZXRQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJOb3Rlc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zd2l0Y2hQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC8qIFZBUklBQkxFUyAqL1xyXG4gIC0tTUFJTi1CRy1DOiA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg2dmggNHZoO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLyogSEVBREVSICovXHJcblxyXG4ubmF2VWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcbi5uYXZMaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTUFJTiAqL1xyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxpc3RDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJSAvKiBjbGFtcCgzMDBweCwgODAlLCAxMDAwcHgpICovO1xyXG59XHJcblxyXG4vKiBQUk9KICovXHJcblxyXG4ubmV3T2JqZWN0IHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm9iamVjdFdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ub2JqZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDNmciAxZnIgMC41ZnIgMC41ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnRhc2tXcmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLlRhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnIgMWZyIDAuNWZyIDAuNWZyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5uZXdUYXNrIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDAuNWZyIDAuNWZyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi50YXNrRGF0ZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLyogTk9URVMgKi9cclxuXHJcbi5ub3Rlc0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyOTBweCwgMWZyKTtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuLm5ld05vdGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4vKiBFVkVOVFMgKi9cclxuXHJcbi5ldmVudHNDb250YWluZXIge1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDgwJSwgNzAwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uZGF0ZVdyYXBwZXIge1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FsZW5kYXJXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuLmhlYWRpbmdzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5jYWxlbmRhckRheXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uY2FsZW5kYXJEYXk6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjQ3KTtcclxufVxyXG4uaW5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuLmV2ZW50Tm90ZVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAycmVtKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogLnNlbGVjdGVkOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbn0gKi9cclxuXHJcbi5ldmVudE5vdGVXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDMxdmg7XHJcbn1cclxuXHJcbi53ZWVrRW5kIHtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG4uY3VycmVudERheTo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogUFJJT1JJVFkgKi9cclxuXHJcbi5sb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5tZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4uaGlnaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXZlbnRsb3c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuLmV2ZW50bWVkOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogQ09NUExFVEVEICovXHJcblxyXG4udHJ1ZSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5mYWxzZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRk9PVEVSICovXHJcblxyXG5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyQTphbnktbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBQT1BVUCAqL1xyXG5cclxuLnBvcFVwQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40NzkpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucG9wVXBmaWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4ucHJpb3JpdHlXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7O0FBRVQ7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QUFrQjtFQUNsQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogVkFSSUFCTEVTICovXFxyXFxuICAtLU1BSU4tQkctQzogO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODZ2aCA0dmg7XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5uYXZVbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG4ubmF2TGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RDb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJSAvKiBjbGFtcCgzMDBweCwgODAlLCAxMDAwcHgpICovO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KICovXFxyXFxuXFxyXFxuLm5ld09iamVjdCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5vYmplY3RXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5vYmplY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDNmciAxZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrV3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5UYXNrIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmciAxZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm5ld1Rhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDAuNWZyIDAuNWZyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi8qIE5PVEVTICovXFxyXFxuXFxyXFxuLm5vdGVzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOTBweCwgMWZyKSk7XFxyXFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI5MHB4LCAxZnIpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4ubmV3Tm90ZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFVkVOVFMgKi9cXHJcXG5cXHJcXG4uZXZlbnRzQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgODAlLCA3MDBweCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlV3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDd2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyV3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcbi5oZWFkaW5ncyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjQ3KTtcXHJcXG59XFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuLnNlbGVjdGVkOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5ldmVudE5vdGVXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDJyZW0pO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNlbGVjdGVkOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmV2ZW50Tm90ZVdyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiAzMXZoO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla0VuZCB7XFxyXFxuICBjb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuLmN1cnJlbnREYXk6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJJT1JJVFkgKi9cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4ubWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuLmhpZ2gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnRsb3c6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLmV2ZW50bWVkOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT01QTEVURUQgKi9cXHJcXG5cXHJcXG4udHJ1ZSB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcbi5mYWxzZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9vdGVyQTphbnktbGluayB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIFBPUFVQICovXFxyXFxuXFxyXFxuLnBvcFVwQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNDc5KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwZmllbGQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNzAwcHgpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgNWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHlXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY2xlYXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlcIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICBwYWdlLmZvckVhY2goKHBhZ2UpID0+IHBhZ2UucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJQb3BVcCA9ICgpID0+IHtcclxuICBjb25zdCBwb3BVcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIHBvcFVwcy5mb3JFYWNoKChwb3BVcCkgPT4gcG9wVXAucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJSZW5kZXJlZFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlcmVkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndyYXBwZXJcIik7XHJcbiAgcmVuZGVyZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICBwcm9qLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHNlbGVjdGVkRGF0ZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0SXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IElkID0gTnVtYmVyKGV2LmlkLnNsaWNlKDEwKSk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gY2hlY2soKTtcclxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qTm90ZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0SWQgPSBmaW5kUHJvaihJZCk/LmlkO1xyXG4gIGlmIChwcm9qZWN0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XHJcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBJZCk7XHJcbiAgICBpZiAodGFzaykge1xyXG4gICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGFzay5ub3RlID0gbm90ZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHByb2plY3RJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gSWQpO1xyXG4gICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChwcm9qZWN0LnR5cGUgPT09IFwiZGFpbHlcIiB8fCBcIm5vdGVzXCIpICYmXHJcbiAgICAgICAgcHJvamVjdC50eXBlICE9PSBcInByb2pcIiAmJlxyXG4gICAgICAgIHByb2plY3QudHlwZSAhPT0gXCJldmVudHNcIlxyXG4gICAgICApIHtcclxuICAgICAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgaWYgKHByb2plY3QudHlwZSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICAgICAgICBjb25zdCBwcmlvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHldXCIpO1xyXG4gICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIpO1xyXG4gICAgICAgICAgcHJvamVjdC5ub3RlID0gbm90ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgcHJvamVjdC5ub3RlID0gbm90ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHByb2plY3QudHlwZSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgICAgY29uc3QgZHVlVGltZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgY29uc3QgZHVlVGltZU9iamVjdCA9IHNlbGVjdGVkRGF0ZTtcclxuICAgICAgICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBkdWVUaW1lVmFsdWUuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgZHVlVGltZU9iamVjdC5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICAgICAgICBkdWVUaW1lT2JqZWN0LnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPSBkdWVUaW1lT2JqZWN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBkdWVEYXRlT2JqZWN0ID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlKTtcclxuICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgcHJvamVjdC5ub3RlID0gbm90ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVjayA9ICgpID0+IHtcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcbiAgZm9yIChjb25zdCBidXR0b24gb2YgcmFkaW8pIHtcclxuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLmlkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0UHJpb3JpdHkgPSAoZXYpID0+IHtcclxuICBjb25zdCBpZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IG9iamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBpZCk7XHJcbiAgb2JqZWN0LnByaW9yaXR5ID0gZXYudGFyZ2V0LmNsYXNzTGlzdC5pdGVtKDEpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBzZWxlY3RlZERhdGUgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlEYXRlID0gKGFycmF5KSA9PiB7XHJcbiAgaWYgKHNlbGVjdGVkRGF0ZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5kdWVEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZHVlU3RyaW5nID0gZm9ybWF0RGF0ZShpdGVtLmR1ZURhdGUpO1xyXG4gICAgICAgIHJldHVybiBkdWVTdHJpbmcgPT09IHNlbGVjdGVkU3RyaW5nO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgICBjb25zdCBjb21wbGV0aW9uU3RyaW5nID0gZm9ybWF0RGF0ZShpdGVtLmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICByZXR1cm4gY29tcGxldGlvblN0cmluZyA9PT0gc2VsZWN0ZWRTdHJpbmc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpbHRlcmVkO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlckJ5VG9kYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCB0eXBlT3JkZXIgPSB7XHJcbiAgICBldmVudHM6IDEsXHJcbiAgICBwcm9qOiAyLFxyXG4gICAgZGFpbHk6IDMsXHJcbiAgfTtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgc3RhcnRPZkRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBlbmRPZkRheS5zZXRIb3VycygyMywgNTkpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgIHJldHVybiBkdWVEYXRlID49IHN0YXJ0T2ZEYXkgJiYgZHVlRGF0ZSA8PSBlbmRPZkRheTtcclxuICB9KTtcclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgdHlwZUNvbXAgPSB0eXBlT3JkZXJbYS50eXBlXSAtIHR5cGVPcmRlcltiLnR5cGVdO1xyXG4gICAgaWYgKHR5cGVDb21wICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiB0eXBlQ29tcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XSAtIHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gKGFycmF5KSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcImV2ZW50c1wiIHx8IGl0ZW0udHlwZSA9PT0gXCJwcm9qXCJcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGdldFR5cGUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBmaWx0ZXJlZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXIgPSBgXHJcbiAgPGFcclxuICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rhcmtlc3RvZlRpbWVzXCJcclxuICBjbGFzcz1cImZvb3RlckFcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgPkRhcmtUaW1lczwvYVxyXG4+YDtcclxuXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGZvb3Rlcik7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKG9iamVjdERhdGUpID0+IHtcclxuICBjb25zdCBkdWVEYXRlT2JqZWN0ID0gb2JqZWN0RGF0ZTtcclxuICBsZXQgZm9ybWF0dGVkRHVlRGF0ZSA9IFwiXCI7XHJcbiAgaWYgKG9iamVjdERhdGUpIHtcclxuICAgIGNvbnN0IHllYXIgPSBkdWVEYXRlT2JqZWN0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhkdWVEYXRlT2JqZWN0LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGZvcm1hdHRlZER1ZURhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZER1ZURhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0VGltZSA9IChvYmplY3RUaW1lKSA9PiB7XHJcbiAgY29uc3QgZHVlRGF0ZU9iamVjdCA9IG9iamVjdFRpbWU7XHJcbiAgbGV0IGZvcm1hdHRlZFRpbWUgPSBcIlwiO1xyXG4gIGlmIChvYmplY3RUaW1lKSB7XHJcbiAgICBjb25zdCBob3VycyA9IFN0cmluZyhkdWVEYXRlT2JqZWN0LmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGZvcm1hdHRlZFRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkVGltZTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveEV2ZW50KTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoZWNrQm94RXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tCb3hFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNoZWNrQm94ZXMoZXYpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCb3hlcyhldikge1xyXG4gIGNvbnN0IGNoZWNrQm94SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBjaGVja0JveElkKTtcclxuICBpZiAocHJvamVjdCkge1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKCFldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoIXByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IGZpbmRQcm9qKGNoZWNrQm94SWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdFdpdGhUYXNrLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ29tcGxldGlvbihldik7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tDb21wbGV0aW9uID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY2hlY2tCb3hJZCA9IGV2ID8gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxKSkgOiBudWxsO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZE9iamVjdHMgPSBvYmoudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBpZiAob2JqLnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgaWYgKG9iai5kdWVEYXRlIDwgY3VycmVudERhdGUpIHtcclxuICAgICAgICBvYmouY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqLnRhc2tzLmxlbmd0aCAhPT0gMCAmJiBjb21wbGV0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgfHxcclxuICAgICAgKG9iai50eXBlID09PSBcImRhaWx5XCIgJiYgZXYudGFyZ2V0LmNoZWNrZWQgJiYgY2hlY2tCb3hJZCA9PT0gb2JqLmlkKVxyXG4gICAgKSB7XHJcbiAgICAgIG9iai5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmIChvYmoudGFza3MubGVuZ3RoICE9PSAwICYmIGNvbXBsZXRlZE9iamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIG9iai5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBvYmouY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIE9iamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IHNlbGVjdGVkRGF0ZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3QgPSAocHJvaklkKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xyXG4gIGxldCBkdWVEYXRlID0gXCJcIjtcclxuICBsZXQgdHlwZSA9IGdldFR5cGUoKTtcclxuICBpZiAoXHJcbiAgICBwcm9qSWQgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgdHlwZSAhPT0gXCJkYWlseVwiICYmXHJcbiAgICB0eXBlICE9PSBcIm5vdGVzXCIgJiZcclxuICAgIHR5cGUgIT09IFwiZXZlbnRzXCJcclxuICApIHtcclxuICAgIGNvbnN0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICAgIGlmIChkdWVEYXRlVmFsdWUpIHtcclxuICAgICAgY29uc3QgZHVlRGF0ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWUpO1xyXG4gICAgICBkdWVEYXRlRGF0ZS5zZXRIb3VycygyMyk7XHJcbiAgICAgIGR1ZURhdGVEYXRlLnNldE1pbnV0ZXMoNTkpO1xyXG4gICAgICBkdWVEYXRlID0gZHVlRGF0ZURhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkdWVEYXRlID0gXCJcIjtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGNvbnN0IGR1ZVRpbWVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBkdWVUaW1lVmFsdWUuc3BsaXQoXCI6XCIpO1xyXG4gICAgaWYgKGR1ZVRpbWVWYWx1ZSkge1xyXG4gICAgICBzZWxlY3RlZERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgICBzZWxlY3RlZERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgICAgZHVlRGF0ZSA9IHNlbGVjdGVkRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGR1ZURhdGUgPSBzZWxlY3RlZERhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBtaWROaWdodCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgIG1pZE5pZ2h0LnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIG1pZE5pZ2h0LnNldEhvdXJzKDIzLCA1OSwgMCk7XHJcbiAgICBkdWVEYXRlID0gbWlkTmlnaHQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgbGV0IHByaW9yaXR5ID0gY2hlY2soKTtcclxuICBpZiAodHlwZSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBjb25zdCBwcmlvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHldXCIpO1xyXG4gICAgcHJpb3JpdHkgPSBwcmlvckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcclxuICB9XHJcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5vdGVcIikudmFsdWU7XHJcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZWRJZCgpO1xyXG4gIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XHJcblxyXG4gIGFkZE9iamVjdChcclxuICAgIHByb2pJZCxcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYWRkT2JqZWN0ID0gKFxyXG4gIHByb2pJZCxcclxuICB0aXRsZSxcclxuICBpZCxcclxuICBkdWVEYXRlLFxyXG4gIGNvbXBsZXRpb25EYXRlLFxyXG4gIGNvbXBsZXRlLFxyXG4gIHByaW9yaXR5LFxyXG4gIG5vdGUsXHJcbiAgdHlwZVxyXG4pID0+IHtcclxuICBjb25zdCBuZXdPYmplY3QgPSBuZXcgT2JqZWN0KFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBjb21wbGV0aW9uRGF0ZSxcclxuICAgIGNvbXBsZXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3RlLFxyXG4gICAgdHlwZVxyXG4gICk7XHJcbiAgaWYgKHByb2pJZCAhPT0gbnVsbCAmJiBwcm9qSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qSWQpO1xyXG4gICAgY3VycmVudFByb2plY3QudGFza3MucHVzaChuZXdPYmplY3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld09iamVjdCk7XHJcbiAgfVxyXG4gIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICByZXR1cm4gYWN0aXZlVGFiLmlkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXYpID0+IHtcclxuICBjb25zdCBlbnRlcktleUNvZGUgPSAxMztcclxuICBjb25zdCBwYXJ0aWN1bGFyRWxlbWVudElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImFkZFByb2pCdG5cIl0nKTtcclxuICBpZiAocGFydGljdWxhckVsZW1lbnRJZCAmJiBldi5rZXlDb2RlID09PSBlbnRlcktleUNvZGUgJiYgIWV2LnNoaWZ0S2V5KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICB9KTtcclxuICAgIHBhcnRpY3VsYXJFbGVtZW50SWQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRXNjYXBlID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldi5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICA8dWwgY2xhc3M9XCJuYXZVbFwiPlxyXG4gICAgPGxpIGlkPVwicHJvalwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+UHJvamVjdDwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJkYWlseVwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RGFpbHk8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZXZlbnRzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5FdmVudHM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwibm90ZXNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPk5vdGVzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gMDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiArK3ZhbHVlO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGdlbmVyYXRlZElkID0gZ2VuZXJhdGVJZCgpO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvalwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwaWVjZTIoKTtcclxuICBwaWVjZTMoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0KFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmlkID0gaWQ7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5jb21wbGV0aW9uRGF0ZSA9IGNvbXBsZXRpb25EYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMuYWRkZWREYXRlID0gZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gY3VycmVudERhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgY2hlY2tDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5leHBvcnQgY29uc3QgYmluID0gW107XHJcblxyXG5jb25zdCByZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmIChvYmplY3QuZHVlRGF0ZSkge1xyXG4gICAgICBjb25zdCBtaWROaWdodCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgICAgbWlkTmlnaHQuc2V0RGF0ZShvYmplY3QuZHVlRGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgbWlkTmlnaHQuc2V0SG91cnMoMCwgMCwgMCk7XHJcbiAgICAgIGNvbnN0IG1pZE5pZ2h0QWhlYWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBtaWROaWdodEFoZWFkLnNldERhdGUob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpICsgMik7XHJcbiAgICAgIG1pZE5pZ2h0QWhlYWQuc2V0SG91cnMoMCwgMCwgMCk7XHJcblxyXG4gICAgICBjb25zdCB0d29Ib3Vyc0FoZWFkID0gbmV3IERhdGUoKTtcclxuICAgICAgdHdvSG91cnNBaGVhZC5zZXRIb3VycyhvYmplY3QuZHVlRGF0ZS5nZXRIb3VycygpICsgMik7XHJcbiAgICAgIGlmIChvYmplY3QudHlwZSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSAmJiBjdXJyZW50RGF0ZSA+PSBvYmplY3QuZHVlRGF0ZSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgb2JqZWN0LmNvbXBsZXRlID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgICAgIGN1cnJlbnREYXRlID49IG1pZE5pZ2h0QWhlYWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIChvYmplY3QudHlwZSA9PT0gXCJwcm9qXCIgJiYgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKSB8fFxyXG4gICAgICAgIChvYmplY3QudHlwZSA9PT0gXCJldmVudHNcIiAmJiBvYmplY3QuY29tcGxldGUgPT09IHRydWUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICBjb25zdCBzcGxpY2VkID0gcHJvamVjdHNbaW5kZXhdO1xyXG4gICAgICAgIGlmICghYmluLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBzcGxpY2VkLmlkKSkge1xyXG4gICAgICAgICAgYmluLnB1c2goc3BsaWNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgY2hlY2tDb21wbGV0aW9uKCk7XHJcbiAgcmVtb3ZlQ29tcGxldGVkKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgYmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBpZiAoXHJcbiAgICAocHJvamVjdCAhPT0gdW5kZWZpbmVkIHx8IHByb2plY3QgIT09IG51bGwpICYmXHJcbiAgICBldi50YXJnZXQuaWQuc2xpY2UoMCwgMikgPT0gXCJkcFwiXHJcbiAgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgfHwgcHJvamVjdC50eXBlID09PSBcInByb2pcIikgJiZcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChiaW4uZmluZCgob2JqKSA9PiBvYmouaWQgPT09IHByb2plY3QuaWQpKSB7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluLnB1c2gocHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHcke3RhcmdldElkfWApO1xyXG4gICAgICBwcm9qRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvaldpdGhUYXNrID0gcHJvamVjdHMuZmluZCgocHJvaikgPT5cclxuICAgICAgcHJvai50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZClcclxuICAgICk7XHJcbiAgICBpZiAocHJvaldpdGhUYXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2pXaXRoVGFzay50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IHRhcmdldElkXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2pXaXRoVGFzay50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHQke3RhcmdldElkfWApO1xyXG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJEYWlseVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgZGFpbHlDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdEYWlseVRhc2tcIj5cclxuICAgIDxwIGNsYXNzPVwibmV3T2JqZWN0X19wXCI+QWRkIERhaWx5PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld0RhaWx5VGFza1wiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyBlZGl0SXRlbSB9IGZyb20gXCIuL2VkaXRJdGVtXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHN3aXRjaFByaW9yaXR5IH0gZnJvbSBcIi4vc3dpdGNoUHJpb3JpdHlcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuL2Zvcm1hdFRpbWVcIjtcclxuaW1wb3J0IHsgbWFya0NhbGVuZGFyRGF5cyB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFZGl0UG9wVXAgPSAoZXYpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihldi5pZC5zbGljZSgyKSk7XHJcbiAgbGV0IG9iamVjdDtcclxuICBpZiAoZXYuaWQuc2xpY2UoMCwgMikgIT09IFwicHRcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHByb2plY3Q7XHJcbiAgfSBlbHNlIGlmIChldi5pZC5zbGljZSgwLCAyKSA9PT0gXCJwdFwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2ooaWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgb2JqZWN0ID0gdGFzaztcclxuICB9XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICBpZiAob2JqZWN0LnR5cGUgIT09IFwiZGFpbHlcIiAmJiBvYmplY3QudHlwZSAhPT0gXCJldmVudHNcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImxhYmVsXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiB2YWx1ZT1cIiR7Zm9ybWF0RGF0ZShvYmplY3QuZHVlRGF0ZSl9XCI+YDtcclxuICB9IGVsc2UgaWYgKG9iamVjdC50eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGA8bGFiZWwgZm9yPVwidGltZVwiIGNsYXNzPVwibGFiZWxcIj5EdWUgVGltZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgaWQ9XCJ0aW1lXCIgdmFsdWU9XCIke2Zvcm1hdFRpbWUoXHJcbiAgICAgIG9iamVjdC5kdWVEYXRlXHJcbiAgICApfVwiIG1pbj1cIjAwOjAwXCIgbWF4PVwiMjM6NTlcIj5gO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iamVjdC50eXBlID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGNvbnN0IG5vdGUgPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiZWRpdFRhc2tcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke1xyXG4gICAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgICB9XCIgYXV0b2ZvY3VzIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwibm90ZURhdGVcIiBpZD1cIm5vdGVEYXRlXCI+JHtmb3JtYXREYXRlKG9iamVjdC5hZGRlZERhdGUpfTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGVNYXJrICR7b2JqZWN0LnByaW9yaXR5fVwiIGRhdGEtcHJpb3JpdHk9XCIke1xyXG4gICAgICBvYmplY3QucHJpb3JpdHlcclxuICAgIH1cIiBpZD1cIm5vdGVQcmlvcml0eSR7b2JqZWN0LmlkfVwiPk08L2Rpdj5cclxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPiR7XHJcbiAgICAgICAgb2JqZWN0Lm5vdGVcclxuICAgICAgfTwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7b2JqZWN0LmlkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbm90ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgb2JqZWN0LnRpdGxlXHJcbiAgICB9XCIgYXV0b2ZvY3VzIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiIGNsYXNzPVwibGFiZWxcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJsb3dcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibWVkXCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwibWVkXCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImhpZ2hcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJoaWdoXCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgICR7ZGF0ZUVsZW1lbnR9XHJcbiAgICA8cCBjbGFzcz1cInRhc2tDb21wbGV0aW9uRGF0ZVwiPlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPT09IG51bGxcclxuICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgIDogYENvbXBsZXRlZCBvbjoke29iamVjdC5jb21wbGV0aW9uRGF0ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3A+XHJcbiAgICA8bGFiZWwgZm9yPVwibm90ZVwiIGNsYXNzPVwibGFiZWxcIj5Ob3RlOjwvbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHtcclxuICAgICAgb2JqZWN0Lm5vdGVcclxuICAgIH08L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtpZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKGV2LmlkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGRQcm9qQnRuJHtpZC5zbGljZSgyKX1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGlmIChwcmlvcml0eUJ0bikge1xyXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByaW9yaXR5KTtcclxuICB9XHJcbiAgaWYgKGlkLnNsaWNlKDAsIDIpICE9PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgIGVkaXRJdGVtKGV2LnRhcmdldCk7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUG9wVXApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwiLi9maWx0ZXJCeVR5cGVcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxubGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5sZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuY29uc3QgY3VycmVudERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5jb25zdCBjdXJyZW50TW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbmNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5leHBvcnQgbGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIGN1cnJlbnREYXkpO1xyXG5jb25zdCBtb250aHMgPSBbXHJcbiAgXCJKYW51YXJ5XCIsXHJcbiAgXCJGZWJydWFyeVwiLFxyXG4gIFwiTWFyY2hcIixcclxuICBcIkFwcmlsXCIsXHJcbiAgXCJNYXlcIixcclxuICBcIkp1bmVcIixcclxuICBcIkp1bHlcIixcclxuICBcIkF1Z3VzdFwiLFxyXG4gIFwiU2VwdGVtYmVyXCIsXHJcbiAgXCJPY3RvYmVyXCIsXHJcbiAgXCJOb3ZlbWJlclwiLFxyXG4gIFwiRGVjZW1iZXJcIixcclxuXTtcclxuY29uc3Qgd2Vla0RheXMgPSBbXHJcbiAgXCJNb25kYXlcIixcclxuICBcIlR1ZXNkYXlcIixcclxuICBcIldlZG5lc2RheVwiLFxyXG4gIFwiVGh1cnNkYXlcIixcclxuICBcIkZyaWRheVwiLFxyXG4gIFwiU2F0dXJkYXlcIixcclxuICBcIlN1bmRheVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckV2ZW50c1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgZXZlbnRzUGFnZSA9IGAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiZXZlbnRzQ29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZVdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFycm93IGJhY2t3YXJkXCIgaWQ9XCJiYWNrd2FyZFwiPkI8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJjdXJyZW50RGF0ZVwiPjwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cImFycm93IGZvcndhcmRcIiBpZD1cImZvcndhcmRcIj5GPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhcldyYXBwZXJcIj5cclxuICAgICAgPHVsIGNsYXNzPVwiaGVhZGluZ3NcIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+TW9uPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+VHVlPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+V2VkPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+VGh1PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+RnJpPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+U2F0PC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkaW5nXCI+U3VuPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPHVsIGNsYXNzPVwiY2FsZW5kYXJEYXlzXCI+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJldmVudE5vdGVXcmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdPYmplY3RcIiBpZD1cIm5ld0V2ZW50XCI+XHJcbiAgICAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBFdmVudDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+ICAgIFxyXG4gICAgYDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZXZlbnRzUGFnZSk7XHJcbiAgcmVuZGVyQ2FsZW5kYXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpcnN0RGF0ZU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcclxuICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsZW5kYXJEYXlzXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50RGF0ZVwiKTtcclxuICBjb25zdCBkYXRlU3RyaW5nID0gZmlyc3REYXRlT2ZNb250aC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1ldVwiLCB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuICBjb25zdCBsYXN0RGF0ZU9mTGFzdE1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcclxuICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXlzSW5Nb250aCkuZ2V0RGF5KCk7XHJcbiAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrRGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoXCIsXCIpWzBdKTtcclxuICAvLyBwcmV2aW91cyBtb250aFxyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSBwYWRkaW5nRGF5czsgaSA+IDA7IC0taSkge1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aERheSA9IGxhc3REYXRlT2ZMYXN0TW9udGggLSBpICsgMTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgcHJldmlvdXNNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBwcmV2aW91c01vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0luYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNvbnN0IGJhY2t3YXJkID0gdHJ1ZTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHtcclxuICAgICAgZGF5OiBsYXN0RGF0ZU9mTGFzdE1vbnRoIC0gaSArIDEsXHJcbiAgICAgIGlzV2Vla2VuZCxcclxuICAgICAgaXNJbmFjdGl2ZSxcclxuICAgICAgYmFja3dhcmQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9jdXJyZW50IG1vbnRoXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xyXG4gICAgY29uc3QgaXNDdXJyZW50RGF5ID1cclxuICAgICAgaSA9PT0gY3VycmVudERheSAmJiBtb250aCA9PT0gY3VycmVudE1vbnRoICYmIHllYXIgPT09IGN1cnJlbnRZZWFyO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZERheSA9XHJcbiAgICAgIHNlbGVjdGVkRGF0ZSAmJlxyXG4gICAgICBpID09PSBzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgIG1vbnRoID09PSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICB5ZWFyID09PSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoLCBpIC0gMSkuZ2V0RGF5KCldID09PSBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGgsIGkgLSAxKS5nZXREYXkoKV0gPT09IFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0RheSA9IHRydWU7XHJcbiAgICBjb25zdCBpc1Bhc3QgPSBpIDwgY3VycmVudERheTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHtcclxuICAgICAgZGF5OiBpLFxyXG4gICAgICBpc0N1cnJlbnREYXksXHJcbiAgICAgIGlzU2VsZWN0ZWREYXksXHJcbiAgICAgIGlzV2Vla2VuZCxcclxuICAgICAgaXNEYXksXHJcbiAgICAgIGlzUGFzdCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL25leHQgbW9udGhcclxuICBmb3IgKGxldCBpID0gbGFzdERheU9mTW9udGg7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IG5leHRNb250aERheSA9IGkgLSBsYXN0RGF5T2ZNb250aCArIDE7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIG5leHRNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBuZXh0TW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTdW5kYXlcIjtcclxuICAgIGNvbnN0IGlzSW5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29uc3QgZm9yd2FyZCA9IHRydWU7XHJcbiAgICBjYWxlbmRhckRheXMucHVzaCh7IGRheTogbmV4dE1vbnRoRGF5LCBpc1dlZWtlbmQsIGlzSW5hY3RpdmUsIGZvcndhcmQgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxlbmRhckRheUhUTUwgPSBjYWxlbmRhckRheXNcclxuICAgIC5tYXAoKGRheUluZm8pID0+IHtcclxuICAgICAgbGV0IGNsYXNzTmFtZXMgPSBcImNhbGVuZGFyRGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzQ3VycmVudERheSkgY2xhc3NOYW1lcyArPSBcIiBjdXJyZW50RGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzU2VsZWN0ZWREYXkpIGNsYXNzTmFtZXMgKz0gXCIgc2VsZWN0ZWRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNXZWVrZW5kKSBjbGFzc05hbWVzICs9IFwiIHdlZWtFbmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNJbmFjdGl2ZSkgY2xhc3NOYW1lcyArPSBcIiBpbmFjdGl2ZVwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5iYWNrd2FyZCkgY2xhc3NOYW1lcyArPSBcIiBiYWNrd2FyZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5mb3J3YXJkKSBjbGFzc05hbWVzICs9IFwiIGZvcndhcmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNEYXkpIGNsYXNzTmFtZXMgKz0gXCIgZGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzUGFzdCkgY2xhc3NOYW1lcyArPSBcIiBpbmFjdGl2ZVwiO1xyXG5cclxuICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCIke2NsYXNzTmFtZXN9XCI+JHtkYXlJbmZvLmRheX08L2xpPmA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oXCJcIik7XHJcblxyXG4gIGNhbGVuZGFyQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjYWxlbmRhckRheUhUTUwpO1xyXG4gIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XHJcbiAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQ2FsZW5kYXJEYXlzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICBmaWx0ZXJlZEJ5VHlwZS5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgb2JqZWN0LmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuZHVlRGF0ZS5nZXRNb250aCgpID09PSBtb250aFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgICBjb25zdCBkdWVTdHJpbmcgPSBTdHJpbmcob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmVuZGVyZWREYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGlmIChkdWVTdHJpbmcpIHtcclxuICAgICAgICAgIG1hcmsoZGF5LCBkdWVTdHJpbmcsIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGhcclxuICAgICkge1xyXG4gICAgICBjb25zdCByZW5kZXJlZERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheVwiKTtcclxuICAgICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IFN0cmluZyhvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmVuZGVyZWREYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGlmIChjb21wbGV0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICBtYXJrKGRheSwgY29tcGxldGlvblN0cmluZywgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbWFyayA9IChkYXksIHN0cmluZywgb2JqZWN0KSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBTdHJpbmcoc2VsZWN0ZWREYXRlLmdldERhdGUoKSk7XHJcbiAgY29uc3QgZGF5U3RpbmcgPSBTdHJpbmcoZGF5LmlubmVyVGV4dCk7XHJcbiAgaWYgKGRheVN0aW5nID09PSBzdHJpbmcpIHtcclxuICAgIGlmIChcclxuICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKSAmJlxyXG4gICAgICBkYXlTdGluZyA9PT0gc2VsZWN0ZWRTdHJpbmdcclxuICAgICkge1xyXG4gICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRheS5jbGFzc0xpc3QuYWRkKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qIGlmIChvYmplY3QuZHVlRGF0ZSB8fCBvYmplY3QuY29tcGxldGlvbkRhdGUpIHtcclxuICBpZiAoXHJcbiAgICAob2JqZWN0LmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuZHVlRGF0ZS5nZXRNb250aCgpID09PSBtb250aCkgfHxcclxuICAgIChvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgpXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZW5kZXJlZERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheVwiKTtcclxuICAgIGNvbnN0IGR1ZVN0cmluZyA9IG9iamVjdC5kdWVEYXRlXHJcbiAgICAgID8gU3RyaW5nKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSlcclxuICAgICAgOiBudWxsO1xyXG4gICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IG9iamVjdC5jb21wbGV0aW9uRGF0ZVxyXG4gICAgICA/IFN0cmluZyhvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RGF0ZSgpKVxyXG4gICAgICA6IG51bGw7XHJcbiAgICBjb25zb2xlLmxvZyhvYmplY3QuY29tcGxldGlvbkRhdGUsIFwiY29tcFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGR1ZVN0cmluZywgXCJkdWUgMlwiKTtcclxuICAgIHJlbmRlcmVkRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgICAgaWYgKGR1ZVN0cmluZyAmJiBkdWVTdHJpbmcgIT09IG51bGwpIHtcclxuICAgICAgICBtYXJrKGRheSwgZHVlU3RyaW5nLCBvYmplY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGR1ZVN0cmluZywgXCJkdWVcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tcGxldGlvblN0cmluZyAmJiBjb21wbGV0aW9uU3RyaW5nICE9PSBudWxsKSB7XHJcbiAgICAgICAgbWFyayhkYXksIGNvbXBsZXRpb25TdHJpbmcsIG9iamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tcGxldGlvblN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSAqL1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcndhcmRCYWNrd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJyb3dcIik7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdFdmVudFwiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIGZvcndhcmRCYWNrd2FyZC5mb3JFYWNoKChhcnJvdykgPT4ge1xyXG4gICAgYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vbnRoQ2hhbmdlckV2ZW50KTtcclxuICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb250aENoYW5nZXJFdmVudCk7XHJcbiAgfSk7XHJcbiAgY2FsZW5kYXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgZGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXRlU2VsZWN0aW9uRXZlbnQpO1xyXG4gICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXRlU2VsZWN0aW9uRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbW9udGhDaGFuZ2VyRXZlbnQgPSAoZXYpID0+IHtcclxuICBpZiAoXHJcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSB8fFxyXG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpXHJcbiAgKSB7XHJcbiAgICBjbGVhckNhbGVuZGFyKCk7XHJcbiAgICBjaGFuZ2VNb250aChldik7XHJcbiAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRhdGVTZWxlY3Rpb25FdmVudCA9IChldikgPT4ge1xyXG4gIHNlbGVjdERhdGUoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJDYWxlbmRhciA9ICgpID0+IHtcclxuICBjb25zdCBjYWxlbmRhckRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbGVuZGFyRGF5XCIpO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZU1vbnRoID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3J3YXJkXCIpKSB7XHJcbiAgICBtb250aCArPSAxO1xyXG4gICAgaWYgKG1vbnRoID4gMTEpIHtcclxuICAgICAgbW9udGggPSAwO1xyXG4gICAgICB5ZWFyICs9IDE7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmFja3dhcmRcIikpIHtcclxuICAgIG1vbnRoIC09IDE7XHJcbiAgICBpZiAobW9udGggPCAwKSB7XHJcbiAgICAgIG1vbnRoID0gMTE7XHJcbiAgICAgIHllYXIgLT0gMTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3REYXRlID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjb25zdCBzZWxlY3RlZERhdGVFbGVtZW50ID0gZXYudGFyZ2V0O1xyXG4gIGxldCBzZWxlY3RlZERheSA9IGV2LnRhcmdldC5pbm5lclRleHQ7XHJcbiAgY2FsZW5kYXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICB9KTtcclxuICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluYWN0aXZlXCIpKSB7XHJcbiAgICBtb250aENoYW5nZXJFdmVudChldik7XHJcbiAgICBjb25zdCBuZXdSZW5kZXJlZE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICBjb25zdCBuZXdTZWxlY3RlZERhdGVFbGVtZW50ID0gQXJyYXkuZnJvbShuZXdSZW5kZXJlZE1vbnRoKS5maW5kKFxyXG4gICAgICAoZGF5KSA9PiBkYXkuaW5uZXJUZXh0ID09PSBldi50YXJnZXQuaW5uZXJUZXh0XHJcbiAgICApO1xyXG4gICAgbmV3U2VsZWN0ZWREYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlbGVjdGVkRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH1cclxuICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgc2VsZWN0ZWREYXkpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0T2JqZWN0IH0gZnJvbSBcIi4vZ2V0T2JqZWN0XCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyR2V0UG9wVXAgPSAob2JqSWQpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBsZXQgb2JqZWN0SWQgPSBvYmpJZDtcclxuXHJcbiAgaWYgKG9iaklkIGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XHJcbiAgICBvYmplY3RJZCA9IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB9IGVsc2UgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBgPGxhYmVsIGZvcj1cInRpbWVcIiBjbGFzcz1cImxhYmVsXCI+RHVlIFRpbWU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIG1pbj1cIjAwOjAwXCIgbWF4PVwiMjM6NTlcIj5gO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBvYmplY3RJZCA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICBnZXRUeXBlKCkgIT09IFwiZXZlbnRzXCIgJiZcclxuICAgIGdldFR5cGUoKSAhPT0gXCJkYWlseVwiXHJcbiAgKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIj48L2lucHV0PmA7XHJcbiAgfSBlbHNlIGlmIChvYmplY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIG5vdGVzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJhZGRUYXNrXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgYXV0b2ZvY3VzLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiIGNoZWNrZWQgLz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibWVkXCIgLz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICR7ZGF0ZUVsZW1lbnR9XHJcbiAgICA8bGFiZWwgZm9yPVwibm90ZVwiIGNsYXNzPVwibGFiZWxcIj5Ob3RlOjwvbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7b2JqZWN0SWR9XCI+QWRkPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgfVxyXG4gIGxpc3RlbmVycyhvYmplY3RJZCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAob2JqSWQpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2lkXj1cImFkZFByb2pCdG5cIl1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGlmIChwcmlvcml0eUJ0bikge1xyXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByaW9yaXR5KTtcclxuICB9XHJcbiAgaWYgKG5ld1Byb2opIHtcclxuICAgIG5ld1Byb2ouZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgaWYgKG9iaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV2SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEwKSk7XHJcbiAgICAgICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgICAgIGdldE9iamVjdChldklkKTtcclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iaklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgZ2V0T2JqZWN0KCk7XHJcbiAgICAgICAgICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuXHJcbmNvbnN0IG5vdGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IG5vdGUgPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgXCIgYXV0b2ZvY3VzIC8+XHJcbiAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJub3RlRGF0ZVwiPjwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayBsb3dcIiBkYXRhLXByaW9yaXR5PVwibG93XCIgaWQ9XCJub3RlUHJpb3JpdHlcIj5NPC9kaXY+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0blwiPkFkZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbm90ZSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJOb3Rlc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgbm90ZXNDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3Tm90ZVwiIGlkPVwibmV3Tm90ZVwiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdOb3RlX19wXCI+QWRkIE5vdGU8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3Tm90ZVwiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJQcm9qVGFzayB9IGZyb20gXCIuL3JlbmRlclByb2pUYXNrXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBnZXRDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBzb3J0QXJyYXkgfSBmcm9tIFwiLi9zb3J0QXJyYXlcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gXCIuL3JlbW92ZUl0ZW1cIjtcclxuaW1wb3J0IHsgcmVuZGVyRWRpdFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyRWRpdFBvcFVwXCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gXCIuL2ZpbHRlckJ5VHlwZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVRvZGF5IH0gZnJvbSBcIi4vZmlsdGVyQnlUb2RheVwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeURhdGUgfSBmcm9tIFwiLi9maWx0ZXJCeURhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuL2Zvcm1hdFRpbWVcIjtcclxuaW1wb3J0IHsgbWFya0NhbGVuZGFyRGF5cyB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJPYmplY3RzID0gKCkgPT4ge1xyXG4gIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IGFycmF5T2ZUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICBsZXQgZGFpbHlBcnJheSA9IHNvcnRBcnJheShhcnJheU9mVHlwZSk7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFycmF5ID0gZmlsdGVyQnlUb2RheShwcm9qZWN0cyk7XHJcbiAgICBkYWlseUFycmF5LmZvckVhY2goKHByb2opID0+IHtcclxuICAgICAgcmVuZGVyT2JqZWN0KHByb2opO1xyXG4gICAgICByZW5kZXJQcm9qVGFzayhwcm9qKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGRhaWx5QXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIHJlbmRlck5vdGVzKG9iamVjdCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgY29uc3QgZmlsdGVyZWRCeVR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRCeURhdGUgPSBmaWx0ZXJCeURhdGUoZmlsdGVyZWRCeVR5cGUpO1xyXG4gICAgaWYgKGZpbHRlcmVkQnlEYXRlKSB7XHJcbiAgICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJlZEJ5RGF0ZTtcclxuICAgICAgZGFpbHlBcnJheS5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgICByZW5kZXJFdmVudHMob2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYWlseUFycmF5ID0gZmlsdGVyQnlUb2RheShmaWx0ZXJlZEJ5VHlwZSk7XHJcbiAgICAgIGRhaWx5QXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXZlbnRzKG9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkYWlseUFycmF5LmZvckVhY2goKHByb2opID0+IHtcclxuICAgICAgcmVuZGVyT2JqZWN0KHByb2opO1xyXG4gICAgICByZW5kZXJQcm9qVGFzayhwcm9qKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuZXJzKCk7XHJcbiAgZ2V0Q29tcGxldGlvbigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2soY29tcGxldGUpIHtcclxuICBpZiAoY29tcGxldGUpIHtcclxuICAgIHJldHVybiAnY2hlY2tlZD1cImNoZWNrZWRcIic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyT2JqZWN0ID0gKHByb2opID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgbGV0IGNoZWNrRWxlbWVudCA9IFwiXCI7XHJcbiAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtwcm9qLmlkfVwiPkQ8L3A+YDtcclxuICBsZXQgYWRkVGFzayA9IGBcclxuICA8ZGl2IGNsYXNzPVwibmV3VGFza1wiIGlkPVwibnQke3Byb2ouaWR9XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibmV3VGFza19fcFwiPkFkZCB0YXNrPC9wPlxyXG4gIDwvZGl2PmA7XHJcbiAgaWYgKHByb2oudHlwZSA9PT0gXCJkYWlseVwiICYmIHByb2oudGFza3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjaGVja0VsZW1lbnQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCIke1wiY1wifSR7XHJcbiAgICAgIHByb2ouaWRcclxuICAgIH1cIiAgJHtjaGVjayhwcm9qLmNvbXBsZXRlKX0vPmA7XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIGdldFR5cGUoKSA9PT0gXCJkYWlseVwiICYmXHJcbiAgICAocHJvai50eXBlID09PSBcInByb2pcIiB8fCBwcm9qLnR5cGUgPT09IFwiZXZlbnRzXCIpXHJcbiAgKSB7XHJcbiAgICBhZGRUYXNrID0gXCJcIjtcclxuICAgIGRlbGV0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH1cclxuICBjb25zdCBmb3JtYXR0ZWREdWVEYXRlID0gcHJvai5kdWVEYXRlID8gZm9ybWF0RGF0ZShwcm9qLmR1ZURhdGUpIDogXCJcIjtcclxuICBjb25zdCBkdWVEYXRlID0gYDxwIGNsYXNzPVwib2JqRGF0ZVwiPkR1ZToke2Zvcm1hdHRlZER1ZURhdGV9PC9wPmA7XHJcbiAgY29uc3QgZHVlVGltZSA9IGA8cCBjbGFzcz1cIm9ialRpbWVcIj5Pbjoke2Zvcm1hdFRpbWUocHJvai5kdWVEYXRlKX08L3A+YDtcclxuICBjb25zdCBPYmplY3QgPSBgXHJcbjxkaXYgY2xhc3M9XCJvYmplY3RXcmFwcGVyIHdyYXBwZXJcIiBpZD1cInB3JHtwcm9qLmlkfVwiPlxyXG48ZGl2IGNsYXNzPVwib2JqZWN0ICR7cHJvai5wcmlvcml0eX0gJHtwcm9qLmNvbXBsZXRlfVwiIGlkPVwiJHtcInBwXCJ9JHtwcm9qLmlkfVwiPlxyXG4ke2NoZWNrRWxlbWVudH1cclxuICA8cCBjbGFzcz1cIm9ialRpdGxlXCI+JHtwcm9qLnRpdGxlfTwvcD5cclxuICAke1xyXG4gICAgcHJvai50eXBlID09PSBcImRhaWx5XCJcclxuICAgICAgPyBcIlwiXHJcbiAgICAgIDogcHJvai50eXBlID09PSBcInByb2pcIlxyXG4gICAgICA/IGR1ZURhdGVcclxuICAgICAgOiBwcm9qLnR5cGUgPT09IFwiZXZlbnRzXCJcclxuICAgICAgPyBkdWVUaW1lXHJcbiAgICAgIDogXCJcIlxyXG4gIH1cclxuICA8cCBjbGFzcz1cIm9iak5vdGVcIj4ke3Byb2oubm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgJHtkZWxldGVFbGVtZW50fVxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInRhc2tXcmFwcGVyXCIgaWQ9XCJ0dyR7cHJvai5pZH1cIj5cclxuJHthZGRUYXNrfVxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE9iamVjdCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJOb3RlcyA9IChvYmplY3QpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShvYmplY3QuYWRkZWREYXRlKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgTm90ZSA9IGA8ZGl2IGNsYXNzPVwibm90ZVdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke29iamVjdC5pZH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9iamVjdFwiIGlkPVwibm8ke29iamVjdC5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlVGl0bGVcIiBpZD1cIm50JHtvYmplY3QuaWR9XCI+JHtvYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJuZCR7b2JqZWN0LmlkfVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayAke29iamVjdC5wcmlvcml0eX1cIiBpZD1cIm5tJHtvYmplY3QuaWR9XCI+TVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtvYmplY3QuaWR9XCI+RDwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlQm9keVwiIGlkPVwibmIke29iamVjdC5pZH1cIj4ke29iamVjdC5ub3RlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE5vdGUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRXZlbnRzID0gKG9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlbnROb3RlV3JhcHBlclwiKTtcclxuICBjb25zdCBkYXRlRWxlbWVudCA9IG9iamVjdC50eXBlID09PSBcInByb2pcIiA/IFwiXCIgOiBmb3JtYXRUaW1lKG9iamVjdC5kdWVEYXRlKTtcclxuICBjb25zdCBldmVudEVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkV2ZW50V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7b2JqZWN0LmlkfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJvYmplY3QgJHtvYmplY3QucHJpb3JpdHl9ICR7b2JqZWN0LmNvbXBsZXRlfVwiIGlkPVwiZW8ke29iamVjdC5pZH0gXCI+XHJcbiAgPHAgY2xhc3M9XCJldmVudFRpdGxlXCIgaWQ9XCJldCR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0LnRpdGxlfTwvcD5cclxuICA8cCBjbGFzcz1cImV2ZW50RGF0ZVwiIGlkPVwiZWQke29iamVjdC5pZH1cIj4ke2RhdGVFbGVtZW50fTwvcD5cclxuICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke29iamVjdC5pZH1cIj5EPC9wPlxyXG4gIDxwIGNsYXNzPVwiZXZlbnRCb2R5XCIgaWQ9XCJlYiR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0Lm5vdGV9PC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGV2ZW50RWxlbWVudCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Rhc2tcIik7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmplY3RcIik7XHJcbiAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlRhc2tcIik7XHJcbiAgY29uc3QgbWFya05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdGVNYXJrXCIpO1xyXG4gIG5ld1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tFdmVudCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRXZlbnQpO1xyXG4gIH0pO1xyXG4gIHByb2plY3RCdG5zLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0RXZlbnQpO1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RFdmVudCk7XHJcbiAgfSk7XHJcbiAgdGFza0J0bnMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tFdmVudCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza0V2ZW50KTtcclxuICB9KTtcclxuICBtYXJrTm90ZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFya05vdGVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtOb3RlRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFByb2plY3RFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdFwiKTtcclxuICBpZiAoXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZU1hcmtcIilcclxuICApIHtcclxuICAgIHJlbmRlckVkaXRQb3BVcCh0YXJnZXQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGVkaXRUYXNrRXZlbnQgPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5UYXNrXCIpO1xyXG4gIGlmICghZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikpIHtcclxuICAgIHJlbmRlckVkaXRQb3BVcCh0YXJnZXQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcmtOb3RlRXZlbnQgPSAoZXYpID0+IHtcclxuICBzd2l0Y2hQcmlvcml0eShldik7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICB9XHJcbiAgcmVtb3ZlSXRlbShldik7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVGFza0V2ZW50ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmV3VGFza1wiKTtcclxuICByZW5kZXJHZXRQb3BVcCh0YXJnZXQuaWQuc2xpY2UoMikpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgcHJvamVjdHNDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdQcm9qXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBQcm9qZWN0PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2pcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalRhc2sgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtvYmouaWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IG9iai5pZCk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xyXG5cclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgICBkYXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID09PSBudWxsID8gXCJcIiA6IGZvcm1hdHRlZERhdGVcclxuICAgICAgfTwvcD5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiICYmIHByb2plY3QudHlwZSA9PT0gXCJwcm9qXCIpIHtcclxuICAgICAgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gYDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkdCR7dGFzay5pZH1cIj5EPC9wPmA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFzayAke3Rhc2sucHJpb3JpdHl9ICR7dGFzay5jb21wbGV0ZX1cIiBpZD1cInB0JHt0YXNrLmlkfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCJjJHtcclxuICAgICAgICAgdGFzay5pZFxyXG4gICAgICAgfVwiICAke2NoZWNrKHRhc2suY29tcGxldGUpfS8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxyXG4gICAgICAgJHtkYXRlRWxlbWVudH1cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tOb3RlXCI+JHt0YXNrLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICAgICAgICR7ZGVsZXRlRWxlbWVudH1cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2soY29tcGxldGUpIHtcclxuICBpZiAoY29tcGxldGUpIHtcclxuICAgIHJldHVybiAnY2hlY2tlZD1cImNoZWNrZWRcIic7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGVkaXRQcmlvcml0eSB9IGZyb20gXCIuL2VkaXRQcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXYudGFyZ2V0LmlkfWApO1xyXG4gIGlmIChwcmlvckVsZW1lbnQpIHtcclxuICAgIGlmIChwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG93XCIpKSB7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIFwiaGlnaFwiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBcImxvd1wiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2pQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUHJvalBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRXZlbnRzUGFnZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRGFpbHlQYWdlIH0gZnJvbSBcIi4vcmVuZGVyRGFpbHlQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXphdGlvbiB9IGZyb20gXCIuL2luaXRpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL2NsZWFyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJOb3Rlc1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJEYWlseVBhZ2UsIHJlbmRlckZvb3Rlcik7XHJcblxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmF2TGlcIik7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclBhZ2UoXHJcbiAgICAgIHRhcmdldC5pZCxcclxuICAgICAgcmVuZGVyUHJvalBhZ2UsXHJcbiAgICAgIHJlbmRlckRhaWx5UGFnZSxcclxuICAgICAgcmVuZGVyRXZlbnRzUGFnZSxcclxuICAgICAgcmVuZGVyTm90ZXNQYWdlXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQsIDEwMDAgKiAxMjApO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFbnRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==