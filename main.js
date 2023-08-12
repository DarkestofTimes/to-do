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
      if (obj.dueDate <= currentDate) {
        obj.complete = true;
        obj.completionDate = currentDate;
      }
    } else if (
      (obj.tasks.length !== 0 && completedObjects.length === 0) ||
      (obj.type === "daily" && ev.target.checked && checkBoxId === obj.id)
    ) {
      obj.complete = true;
      obj.completionDate = currentDate;
    } else {
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
        if (
          object.complete === true &&
          currentDate >= object.dueDate &&
          currentDate >= midNight
        ) {
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
          console.log(bin);
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
  const Object = `
<div class="objectWrapper wrapper" id="pw${proj.id}">
<div class="object ${proj.priority} ${proj.complete}" id="${"pp"}${proj.id}">
${checkElement}
  <p class="objTitle">${proj.title}</p>
  ${proj.type !== "daily" ? dueDate : ""}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsaUJBQWlC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REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJSZW5kZXJlZFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeURhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUb2RheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeVR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm1hdERhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9ybWF0VGltZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRDb21wbGV0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldE9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVudGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVzY2FwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaWRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVtb3ZlQ29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRGFpbHlQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckVkaXRQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFdmVudHNQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckdldFBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlck5vdGVzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJPYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUHJvalBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUHJvalRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc29ydEFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N3aXRjaFByaW9yaXR5LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLyogVkFSSUFCTEVTICovXHJcbiAgLS1NQUlOLUJHLUM6IDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODZ2aCA0dmg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuXHJcbi5uYXZVbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuLm5hdkxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBNQUlOICovXHJcblxyXG5tYWluIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubGlzdENvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlIC8qIGNsYW1wKDMwMHB4LCA4MCUsIDEwMDBweCkgKi87XHJcbn1cclxuXHJcbi8qIFBST0ogKi9cclxuXHJcbi5uZXdPYmplY3Qge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ub2JqZWN0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5vYmplY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgM2ZyIDFmciAwLjVmciAwLjVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udGFza1dyYXBwZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uVGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmciAxZnIgMC41ZnIgMC41ZnI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLm5ld1Rhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMC41ZnIgMC41ZnI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLnRhc2tEYXRlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4vKiBOT1RFUyAqL1xyXG5cclxuLm5vdGVzQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI5MHB4LCAxZnIpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4ubmV3Tm90ZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi8qIEVWRU5UUyAqL1xyXG5cclxuLmV2ZW50c0NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgODAlLCA3MDBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5kYXRlV3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWxlbmRhcldyYXBwZXIge1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG4uaGVhZGluZ3Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4uY2FsZW5kYXJEYXkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5jYWxlbmRhckRheTo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FsZW5kYXJEYXk6aG92ZXI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNDcpO1xyXG59XHJcbi5pbmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5zZWxlY3RlZDo6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uZXZlbnROb3RlV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDJyZW0pO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiAuc2VsZWN0ZWQ6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxufSAqL1xyXG5cclxuLmV2ZW50Tm90ZVdyYXBwZXIge1xyXG4gIGhlaWdodDogMzF2aDtcclxufVxyXG5cclxuLndlZWtFbmQge1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG59XHJcbi5jdXJyZW50RGF5OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBQUklPUklUWSAqL1xyXG5cclxuLmxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuLm1lZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5oaWdoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ldmVudGxvdzo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5ldmVudGhpZ2g6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBDT01QTEVURUQgKi9cclxuXHJcbi50cnVlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhbHNlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBOmFueS1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFBPUFVQICovXHJcblxyXG4ucG9wVXBDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQ3OSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wb3BVcGZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5wcmlvcml0eVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdC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YUFBYTtFQUNiLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAvKiBWQVJJQUJMRVMgKi9cXHJcXG4gIC0tTUFJTi1CRy1DOiA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NnZoIDR2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLm5hdlVsIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxyXFxufVxcclxcbi5uYXZMaSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdENvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlIC8qIGNsYW1wKDMwMHB4LCA4MCUsIDEwMDBweCkgKi87XFxyXFxufVxcclxcblxcclxcbi8qIFBST0ogKi9cXHJcXG5cXHJcXG4ubmV3T2JqZWN0IHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm9iamVjdFdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm9iamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgM2ZyIDFmciAwLjVmciAwLjVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tXcmFwcGVyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLlRhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNGZyIDFmciAwLjVmciAwLjVmcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ubmV3VGFzayB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLnRhc2tEYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTk9URVMgKi9cXHJcXG5cXHJcXG4ubm90ZXNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjkwcHgsIDFmcik7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5uZXdOb3RlIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi8qIEVWRU5UUyAqL1xcclxcblxcclxcbi5ldmVudHNDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA4MCUsIDcwMHB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuLmhlYWRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG4uY2FsZW5kYXJEYXlzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG4uY2FsZW5kYXJEYXkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5OjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNDcpO1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLmV2ZW50Tm90ZVdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMnJlbSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZXZlbnROb3RlV3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDMxdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrRW5kIHtcXHJcXG4gIGNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG4uY3VycmVudERheTo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUklPUklUWSAqL1xcclxcblxcclxcbi5sb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5tZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4uaGlnaCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5ldmVudGxvdzo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5ldmVudGhpZ2g6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIENPTVBMRVRFRCAqL1xcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmZhbHNlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXJBOmFueS1saW5rIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUE9QVVAgKi9cXHJcXG5cXHJcXG4ucG9wVXBDb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40NzkpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBmaWVsZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1ZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eVdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHBhZ2UuZm9yRWFjaCgocGFnZSkgPT4gcGFnZS5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgcG9wVXBzLmZvckVhY2goKHBvcFVwKSA9PiBwb3BVcC5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclJlbmRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlclwiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcclxuICAgIHByb2oucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgSWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMTApKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGZpbmRQcm9qKElkKT8uaWQ7XHJcbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IElkKTtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0YXNrLm5vdGUgPSBub3RlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocHJvamVjdElkID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBJZCk7XHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHByb2plY3QudHlwZSA9PT0gXCJkYWlseVwiIHx8IFwibm90ZXNcIikgJiZcclxuICAgICAgICBwcm9qZWN0LnR5cGUgIT09IFwicHJvalwiICYmXHJcbiAgICAgICAgcHJvamVjdC50eXBlICE9PSBcImV2ZW50c1wiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBpZiAocHJvamVjdC50eXBlID09PSBcIm5vdGVzXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHByaW9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eV1cIik7XHJcbiAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XHJcbiAgICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocHJvamVjdC50eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgICBjb25zdCBkdWVUaW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBkdWVUaW1lT2JqZWN0ID0gc2VsZWN0ZWREYXRlO1xyXG4gICAgICAgICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGR1ZVRpbWVWYWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBkdWVUaW1lT2JqZWN0LnNldEhvdXJzKGhvdXJzKTtcclxuICAgICAgICAgIGR1ZVRpbWVPYmplY3Quc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZVRpbWVPYmplY3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWUpO1xyXG4gICAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZU9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRQcmlvcml0eSA9IChldikgPT4ge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdHMuZmluZCgob2JqKSA9PiBvYmouaWQgPT09IGlkKTtcclxuICBvYmplY3QucHJpb3JpdHkgPSBldi50YXJnZXQuY2xhc3NMaXN0Lml0ZW0oMSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHNlbGVjdGVkRGF0ZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeURhdGUgPSAoYXJyYXkpID0+IHtcclxuICBpZiAoc2VsZWN0ZWREYXRlKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFN0cmluZyA9IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmR1ZURhdGUpIHtcclxuICAgICAgICBjb25zdCBkdWVTdHJpbmcgPSBmb3JtYXREYXRlKGl0ZW0uZHVlRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGR1ZVN0cmluZyA9PT0gc2VsZWN0ZWRTdHJpbmc7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5jb21wbGV0aW9uRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25TdHJpbmcgPSBmb3JtYXREYXRlKGl0ZW0uY29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0aW9uU3RyaW5nID09PSBzZWxlY3RlZFN0cmluZztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlUb2RheSA9IChhcnJheSkgPT4ge1xyXG4gIGNvbnN0IHR5cGVPcmRlciA9IHtcclxuICAgIGV2ZW50czogMSxcclxuICAgIHByb2o6IDIsXHJcbiAgICBkYWlseTogMyxcclxuICB9O1xyXG4gIGNvbnN0IHByaW9yaXR5T3JkZXIgPSB7XHJcbiAgICBsb3c6IDMsXHJcbiAgICBtZWQ6IDIsXHJcbiAgICBoaWdoOiAxLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBzdGFydE9mRGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gIGNvbnN0IGVuZE9mRGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gIGVuZE9mRGF5LnNldEhvdXJzKDIzLCA1OSk7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShpdGVtLmR1ZURhdGUpO1xyXG4gICAgcmV0dXJuIGR1ZURhdGUgPj0gc3RhcnRPZkRheSAmJiBkdWVEYXRlIDw9IGVuZE9mRGF5O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHNvcnRlZEJ5UHJpb3JpdHkgPSBmaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlQ29tcCA9IHR5cGVPcmRlclthLnR5cGVdIC0gdHlwZU9yZGVyW2IudHlwZV07XHJcbiAgICBpZiAodHlwZUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHR5cGVDb21wO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICB9KTtcclxuICByZXR1cm4gc29ydGVkQnlQcmlvcml0eTtcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeVR5cGUgPSAoYXJyYXkpID0+IHtcclxuICBsZXQgZmlsdGVyZWQ7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFwiZXZlbnRzXCIgfHwgaXRlbS50eXBlID09PSBcInByb2pcIlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gZ2V0VHlwZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIGZpbHRlcmVkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGBcclxuICA8YVxyXG4gIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFya2VzdG9mVGltZXNcIlxyXG4gIGNsYXNzPVwiZm9vdGVyQVwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICA+RGFya1RpbWVzPC9hXHJcbj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZm9vdGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAob2JqZWN0RGF0ZSkgPT4ge1xyXG4gIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBvYmplY3REYXRlO1xyXG4gIGxldCBmb3JtYXR0ZWREdWVEYXRlID0gXCJcIjtcclxuICBpZiAob2JqZWN0RGF0ZSkge1xyXG4gICAgY29uc3QgeWVhciA9IGR1ZURhdGVPYmplY3QuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhkdWVEYXRlT2JqZWN0LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgZm9ybWF0dGVkRHVlRGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkRHVlRGF0ZTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKG9iamVjdFRpbWUpID0+IHtcclxuICBjb25zdCBkdWVEYXRlT2JqZWN0ID0gb2JqZWN0VGltZTtcclxuICBsZXQgZm9ybWF0dGVkVGltZSA9IFwiXCI7XHJcbiAgaWYgKG9iamVjdFRpbWUpIHtcclxuICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkdWVEYXRlT2JqZWN0LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbXBsZXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cImNvbXBsZXRpb25cIl0nKTtcclxuICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoZWNrQm94RXZlbnQpO1xyXG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hlY2tCb3hFdmVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0JveEV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY2hlY2tCb3hlcyhldik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja0JveGVzKGV2KSB7XHJcbiAgY29uc3QgY2hlY2tCb3hJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMSkpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgob2JqKSA9PiBvYmouaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gIGlmIChwcm9qZWN0KSB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoIWV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgcHJvamVjdC5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghcHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdFdpdGhUYXNrID0gZmluZFByb2ooY2hlY2tCb3hJZCk7XHJcbiAgICBjb25zdCBvYmplY3QgPSBwcm9qZWN0V2l0aFRhc2sudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gY2hlY2tCb3hJZCk7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKCFldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBvYmplY3QuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tDb21wbGV0aW9uKGV2KTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbXBsZXRpb24gPSAoZXYpID0+IHtcclxuICBjb25zdCBjaGVja0JveElkID0gZXYgPyBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKSA6IG51bGw7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByb2plY3RzLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgY29uc3QgY29tcGxldGVkT2JqZWN0cyA9IG9iai50YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlKTtcclxuICAgIGlmIChvYmoudHlwZSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICBpZiAob2JqLmR1ZURhdGUgPD0gY3VycmVudERhdGUpIHtcclxuICAgICAgICBvYmouY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqLnRhc2tzLmxlbmd0aCAhPT0gMCAmJiBjb21wbGV0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgfHxcclxuICAgICAgKG9iai50eXBlID09PSBcImRhaWx5XCIgJiYgZXYudGFyZ2V0LmNoZWNrZWQgJiYgY2hlY2tCb3hJZCA9PT0gb2JqLmlkKVxyXG4gICAgKSB7XHJcbiAgICAgIG9iai5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgT2JqZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9iamVjdCA9IChwcm9qSWQpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgbGV0IGR1ZURhdGUgPSBcIlwiO1xyXG4gIGxldCB0eXBlID0gZ2V0VHlwZSgpO1xyXG4gIGlmIChcclxuICAgIHByb2pJZCA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICB0eXBlICE9PSBcImRhaWx5XCIgJiZcclxuICAgIHR5cGUgIT09IFwibm90ZXNcIiAmJlxyXG4gICAgdHlwZSAhPT0gXCJldmVudHNcIlxyXG4gICkge1xyXG4gICAgY29uc3QgZHVlRGF0ZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xyXG4gICAgaWYgKGR1ZURhdGVWYWx1ZSkge1xyXG4gICAgICBjb25zdCBkdWVEYXRlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVWYWx1ZSk7XHJcbiAgICAgIGR1ZURhdGVEYXRlLnNldEhvdXJzKDIzKTtcclxuICAgICAgZHVlRGF0ZURhdGUuc2V0TWludXRlcyg1OSk7XHJcbiAgICAgIGR1ZURhdGUgPSBkdWVEYXRlRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGR1ZURhdGUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgY29uc3QgZHVlVGltZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGR1ZVRpbWVWYWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICBpZiAoZHVlVGltZVZhbHVlKSB7XHJcbiAgICAgIHNlbGVjdGVkRGF0ZS5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICAgIHNlbGVjdGVkRGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgICBkdWVEYXRlID0gc2VsZWN0ZWREYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHVlRGF0ZSA9IHNlbGVjdGVkRGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgbWlkTmlnaHQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgbWlkTmlnaHQuc2V0SG91cnMoMjMsIDU5LCAwKTtcclxuICAgIGR1ZURhdGUgPSBtaWROaWdodDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICBsZXQgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGlmICh0eXBlID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGNvbnN0IHByaW9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eV1cIik7XHJcbiAgICBwcmlvcml0eSA9IHByaW9yRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIpO1xyXG4gIH1cclxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qTm90ZVwiKS52YWx1ZTtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgYWRkT2JqZWN0KFxyXG4gICAgcHJvaklkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBjb21wbGV0aW9uRGF0ZSxcclxuICAgIGNvbXBsZXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3RlLFxyXG4gICAgdHlwZVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRPYmplY3QgPSAoXHJcbiAgcHJvaklkLFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikgPT4ge1xyXG4gIGNvbnN0IG5ld09iamVjdCA9IG5ldyBPYmplY3QoXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxuICBpZiAocHJvaklkICE9PSBudWxsICYmIHByb2pJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2pJZCk7XHJcbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld09iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xyXG4gIHJldHVybiBhY3RpdmVUYWIuaWQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBoYW5kbGVFbnRlciA9IChldikgPT4ge1xyXG4gIGNvbnN0IGVudGVyS2V5Q29kZSA9IDEzO1xyXG4gIGNvbnN0IHBhcnRpY3VsYXJFbGVtZW50SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiYWRkUHJvakJ0blwiXScpO1xyXG4gIGlmIChwYXJ0aWN1bGFyRWxlbWVudElkICYmIGV2LmtleUNvZGUgPT09IGVudGVyS2V5Q29kZSAmJiAhZXYuc2hpZnRLZXkpIHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjbGlja0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgIHZpZXc6IHdpbmRvdyxcclxuICAgIH0pO1xyXG4gICAgcGFydGljdWxhckVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVFc2NhcGUgPSAoZXYpID0+IHtcclxuICBpZiAoZXYua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2LmtleSA9PT0gXCJFc2NcIikge1xyXG4gICAgY2xlYXJQb3BVcCgpO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBgXHJcbiAgPG5hdiBjbGFzcz1cIm5hdmJhclwiPlxyXG4gIDx1bCBjbGFzcz1cIm5hdlVsXCI+XHJcbiAgICA8bGkgaWQ9XCJwcm9qXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5Qcm9qZWN0PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cImRhaWx5XCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5EYWlseTwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJldmVudHNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPkV2ZW50czwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJub3Rlc1wiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+Tm90ZXM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvbmF2PmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBoZWFkZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICBsZXQgdmFsdWUgPSAwO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICsrdmFsdWU7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgZ2VuZXJhdGVkSWQgPSBnZW5lcmF0ZUlkKCk7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsaXphdGlvbiA9IChwaWVjZTEsIHBpZWNlMiwgcGllY2UzKSA9PiB7XHJcbiAgcGllY2UxKCk7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHBpZWNlMigpO1xyXG4gIHBpZWNlMygpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPYmplY3QoXHJcbiAgdGl0bGUsXHJcbiAgaWQsXHJcbiAgZHVlRGF0ZSxcclxuICBjb21wbGV0aW9uRGF0ZSxcclxuICBjb21wbGV0ZSxcclxuICBwcmlvcml0eSxcclxuICBub3RlLFxyXG4gIHR5cGVcclxuKSB7XHJcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIHRoaXMuaWQgPSBpZDtcclxuICB0aGlzLnRhc2tzID0gW107XHJcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB0aGlzLmNvbXBsZXRpb25EYXRlID0gY29tcGxldGlvbkRhdGU7XHJcbiAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB0aGlzLm5vdGUgPSBub3RlO1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgdGhpcy5hZGRlZERhdGUgPSBnZXREYXRlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHJldHVybiBjdXJyZW50RGF0ZTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBjaGVja0NvbXBsZXRpb24gfSBmcm9tIFwiLi9nZXRDb21wbGV0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBiaW4gPSBbXTtcclxuXHJcbmNvbnN0IHJlbW92ZUNvbXBsZXRlZCA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIHByb2plY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKG9iamVjdC5kdWVEYXRlKSB7XHJcbiAgICAgIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgICBtaWROaWdodC5zZXREYXRlKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSArIDEpO1xyXG4gICAgICBtaWROaWdodC5zZXRIb3VycygwLCAwLCAwKTtcclxuICAgICAgY29uc3QgbWlkTmlnaHRBaGVhZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIG1pZE5pZ2h0QWhlYWQuc2V0RGF0ZShvYmplY3QuZHVlRGF0ZS5nZXREYXRlKCkgKyAyKTtcclxuICAgICAgbWlkTmlnaHRBaGVhZC5zZXRIb3VycygwLCAwLCAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHR3b0hvdXJzQWhlYWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0d29Ib3Vyc0FoZWFkLnNldEhvdXJzKG9iamVjdC5kdWVEYXRlLmdldEhvdXJzKCkgKyAyKTtcclxuICAgICAgaWYgKG9iamVjdC50eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBvYmplY3QuY29tcGxldGUgPT09IHRydWUgJiZcclxuICAgICAgICAgIGN1cnJlbnREYXRlID49IG9iamVjdC5kdWVEYXRlICYmXHJcbiAgICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgb2JqZWN0LmNvbXBsZXRlID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgICAgIGN1cnJlbnREYXRlID49IG1pZE5pZ2h0QWhlYWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIChvYmplY3QudHlwZSA9PT0gXCJwcm9qXCIgJiYgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKSB8fFxyXG4gICAgICAgIChvYmplY3QudHlwZSA9PT0gXCJldmVudHNcIiAmJiBvYmplY3QuY29tcGxldGUgPT09IHRydWUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICBjb25zdCBzcGxpY2VkID0gcHJvamVjdHNbaW5kZXhdO1xyXG4gICAgICAgIGlmICghYmluLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBzcGxpY2VkLmlkKSkge1xyXG4gICAgICAgICAgYmluLnB1c2goc3BsaWNlZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhiaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNoZWNrQ29tcGxldGlvbigpO1xyXG4gIHJlbW92ZUNvbXBsZXRlZCgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXRJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlkID09PSB0YXJnZXRJZCk7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qKSA9PiBwcm9qLmlkID09PSB0YXJnZXRJZCk7XHJcbiAgaWYgKFxyXG4gICAgKHByb2plY3QgIT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0ICE9PSBudWxsKSAmJlxyXG4gICAgZXYudGFyZ2V0LmlkLnNsaWNlKDAsIDIpID09IFwiZHBcIlxyXG4gICkge1xyXG4gICAgaWYgKFxyXG4gICAgICAocHJvamVjdC50eXBlID09PSBcImV2ZW50c1wiIHx8IHByb2plY3QudHlwZSA9PT0gXCJwcm9qXCIpICYmXHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPT09IHRydWVcclxuICAgICkge1xyXG4gICAgICBpZiAoYmluLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBwcm9qZWN0LmlkKSkge1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbi5wdXNoKHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwcm9qRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwdyR7dGFyZ2V0SWR9YCk7XHJcbiAgICAgIHByb2pFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pXaXRoVGFzayA9IHByb2plY3RzLmZpbmQoKHByb2opID0+XHJcbiAgICAgIHByb2oudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFyZ2V0SWQpXHJcbiAgICApO1xyXG4gICAgaWYgKHByb2pXaXRoVGFzaykge1xyXG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qV2l0aFRhc2sudGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZFxyXG4gICAgICApO1xyXG4gICAgICBwcm9qV2l0aFRhc2sudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B0JHt0YXJnZXRJZH1gKTtcclxuICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGFpbHlQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIGRhaWx5Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RGFpbHlUYXNrXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBEYWlseTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdEYWlseVRhc2tcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZWRpdEl0ZW0gfSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdFBvcFVwID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMikpO1xyXG4gIGxldCBvYmplY3Q7XHJcbiAgaWYgKGV2LmlkLnNsaWNlKDAsIDIpICE9PSBcInB0XCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgICBvYmplY3QgPSBwcm9qZWN0O1xyXG4gIH0gZWxzZSBpZiAoZXYuaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qKGlkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHRhc2s7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKG9iamVjdC50eXBlICE9PSBcImRhaWx5XCIgJiYgb2JqZWN0LnR5cGUgIT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgdmFsdWU9XCIke2Zvcm1hdERhdGUob2JqZWN0LmR1ZURhdGUpfVwiPmA7XHJcbiAgfSBlbHNlIGlmIChvYmplY3QudHlwZSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBgPGxhYmVsIGZvcj1cInRpbWVcIiBjbGFzcz1cImxhYmVsXCI+RHVlIFRpbWU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIHZhbHVlPVwiJHtmb3JtYXRUaW1lKFxyXG4gICAgICBvYmplY3QuZHVlRGF0ZVxyXG4gICAgKX1cIiBtaW49XCIwMDowMFwiIG1heD1cIjIzOjU5XCI+YDtcclxuICB9XHJcblxyXG4gIGlmIChvYmplY3QudHlwZSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBjb25zdCBub3RlID0gYDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgICBvYmplY3QudGl0bGVcclxuICAgICAgfVwiIGF1dG9mb2N1cyAvPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJub3RlRGF0ZVwiPiR7Zm9ybWF0RGF0ZShvYmplY3QuYWRkZWREYXRlKX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayAke29iamVjdC5wcmlvcml0eX1cIiBkYXRhLXByaW9yaXR5PVwiJHtcclxuICAgICAgb2JqZWN0LnByaW9yaXR5XHJcbiAgICB9XCIgaWQ9XCJub3RlUHJpb3JpdHkke29iamVjdC5pZH1cIj5NPC9kaXY+XHJcbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj4ke1xyXG4gICAgICAgIG9iamVjdC5ub3RlXHJcbiAgICAgIH08L3RleHRhcmVhPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke29iamVjdC5pZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5vdGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiZWRpdFRhc2tcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIiR7XHJcbiAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgfVwiIGF1dG9mb2N1cyAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImxhYmVsXCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwibG93XCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcIm1lZFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwiaGlnaFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgPHAgY2xhc3M9XCJ0YXNrQ29tcGxldGlvbkRhdGVcIj5cclxuICAgICAgICAke1xyXG4gICAgICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID09PSBudWxsXHJcbiAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICA6IGBDb21wbGV0ZWQgb246JHtvYmplY3QuY29tcGxldGlvbkRhdGV9YFxyXG4gICAgICAgIH1cclxuICAgICAgPC9wPlxyXG4gICAgPGxhYmVsIGZvcj1cIm5vdGVcIiBjbGFzcz1cImxhYmVsXCI+Tm90ZTo8L2xhYmVsPlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPiR7XHJcbiAgICAgIG9iamVjdC5ub3RlXHJcbiAgICB9PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7aWR9XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgfVxyXG4gIGxpc3RlbmVycyhldi5pZCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoaWQpID0+IHtcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkUHJvakJ0biR7aWQuc2xpY2UoMil9YCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnRuXCIpO1xyXG4gIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlTWFya1wiKTtcclxuICBpZiAocHJpb3JpdHlCdG4pIHtcclxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQcmlvcml0eSk7XHJcbiAgfVxyXG4gIGlmIChpZC5zbGljZSgwLCAyKSAhPT0gXCJwdFwiKSB7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgICAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgfVxyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSBcIi4vZmlsdGVyQnlUeXBlXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbmxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IGN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKTtcclxuY29uc3QgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuZXhwb3J0IGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCBjdXJyZW50RGF5KTtcclxuY29uc3QgbW9udGhzID0gW1xyXG4gIFwiSmFudWFyeVwiLFxyXG4gIFwiRmVicnVhcnlcIixcclxuICBcIk1hcmNoXCIsXHJcbiAgXCJBcHJpbFwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5lXCIsXHJcbiAgXCJKdWx5XCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIlNlcHRlbWJlclwiLFxyXG4gIFwiT2N0b2JlclwiLFxyXG4gIFwiTm92ZW1iZXJcIixcclxuICBcIkRlY2VtYmVyXCIsXHJcbl07XHJcbmNvbnN0IHdlZWtEYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFdmVudHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImV2ZW50c0NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhdGVXcmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBiYWNrd2FyZFwiIGlkPVwiYmFja3dhcmRcIj5CPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiY3VycmVudERhdGVcIj48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBmb3J3YXJkXCIgaWQ9XCJmb3J3YXJkXCI+RjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJXcmFwcGVyXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImhlYWRpbmdzXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPk1vbjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlR1ZTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPldlZDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlRodTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPkZyaTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlNhdDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlN1bjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNhbGVuZGFyRGF5c1wiPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXZlbnROb3RlV3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdFdmVudFwiPlxyXG4gICAgICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgRXZlbnQ8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiAgICBcclxuICAgIGA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGV2ZW50c1BhZ2UpO1xyXG4gIHJlbmRlckNhbGVuZGFyKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhciA9ICgpID0+IHtcclxuICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGVuZGFyRGF5c1wiKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudERhdGVcIik7XHJcbiAgY29uc3QgZGF0ZVN0cmluZyA9IGZpcnN0RGF0ZU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tZXVcIiwge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGFzdERhdGVPZkxhc3RNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5c0luTW9udGgpLmdldERheSgpO1xyXG4gIGNvbnN0IHBhZGRpbmdEYXlzID0gd2Vla0RheXMuaW5kZXhPZihkYXRlU3RyaW5nLnNwbGl0KFwiLFwiKVswXSk7XHJcbiAgLy8gcHJldmlvdXMgbW9udGhcclxuICBjb25zdCBjYWxlbmRhckRheXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gcGFkZGluZ0RheXM7IGkgPiAwOyAtLWkpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhEYXkgPSBsYXN0RGF0ZU9mTGFzdE1vbnRoIC0gaSArIDE7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIHByZXZpb3VzTW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTYXR1cmRheVwiIHx8XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgcHJldmlvdXNNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlN1bmRheVwiO1xyXG4gICAgY29uc3QgaXNJbmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb25zdCBiYWNrd2FyZCA9IHRydWU7XHJcbiAgICBjYWxlbmRhckRheXMucHVzaCh7XHJcbiAgICAgIGRheTogbGFzdERhdGVPZkxhc3RNb250aCAtIGkgKyAxLFxyXG4gICAgICBpc1dlZWtlbmQsXHJcbiAgICAgIGlzSW5hY3RpdmUsXHJcbiAgICAgIGJhY2t3YXJkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vY3VycmVudCBtb250aFxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIHtcclxuICAgIGNvbnN0IGlzQ3VycmVudERheSA9XHJcbiAgICAgIGkgPT09IGN1cnJlbnREYXkgJiYgbW9udGggPT09IGN1cnJlbnRNb250aCAmJiB5ZWFyID09PSBjdXJyZW50WWVhcjtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWREYXkgPVxyXG4gICAgICBzZWxlY3RlZERhdGUgJiZcclxuICAgICAgaSA9PT0gc2VsZWN0ZWREYXRlLmdldERhdGUoKSAmJlxyXG4gICAgICBtb250aCA9PT0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgeWVhciA9PT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSAtIDEpLmdldERheSgpXSA9PT0gXCJTYXR1cmRheVwiIHx8XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoLCBpIC0gMSkuZ2V0RGF5KCldID09PSBcIlN1bmRheVwiO1xyXG4gICAgY29uc3QgaXNEYXkgPSB0cnVlO1xyXG4gICAgY29uc3QgaXNQYXN0ID0gaSA8IGN1cnJlbnREYXk7XHJcbiAgICBjYWxlbmRhckRheXMucHVzaCh7XHJcbiAgICAgIGRheTogaSxcclxuICAgICAgaXNDdXJyZW50RGF5LFxyXG4gICAgICBpc1NlbGVjdGVkRGF5LFxyXG4gICAgICBpc1dlZWtlbmQsXHJcbiAgICAgIGlzRGF5LFxyXG4gICAgICBpc1Bhc3QsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9uZXh0IG1vbnRoXHJcbiAgZm9yIChsZXQgaSA9IGxhc3REYXlPZk1vbnRoOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXh0TW9udGhEYXkgPSBpIC0gbGFzdERheU9mTW9udGggKyAxO1xyXG4gICAgY29uc3QgaXNXZWVrZW5kID1cclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBuZXh0TW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTYXR1cmRheVwiIHx8XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgbmV4dE1vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0luYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNvbnN0IGZvcndhcmQgPSB0cnVlO1xyXG4gICAgY2FsZW5kYXJEYXlzLnB1c2goeyBkYXk6IG5leHRNb250aERheSwgaXNXZWVrZW5kLCBpc0luYWN0aXZlLCBmb3J3YXJkIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FsZW5kYXJEYXlIVE1MID0gY2FsZW5kYXJEYXlzXHJcbiAgICAubWFwKChkYXlJbmZvKSA9PiB7XHJcbiAgICAgIGxldCBjbGFzc05hbWVzID0gXCJjYWxlbmRhckRheVwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc0N1cnJlbnREYXkpIGNsYXNzTmFtZXMgKz0gXCIgY3VycmVudERheVwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc1NlbGVjdGVkRGF5KSBjbGFzc05hbWVzICs9IFwiIHNlbGVjdGVkXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzV2Vla2VuZCkgY2xhc3NOYW1lcyArPSBcIiB3ZWVrRW5kXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzSW5hY3RpdmUpIGNsYXNzTmFtZXMgKz0gXCIgaW5hY3RpdmVcIjtcclxuICAgICAgaWYgKGRheUluZm8uYmFja3dhcmQpIGNsYXNzTmFtZXMgKz0gXCIgYmFja3dhcmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uZm9yd2FyZCkgY2xhc3NOYW1lcyArPSBcIiBmb3J3YXJkXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzRGF5KSBjbGFzc05hbWVzICs9IFwiIGRheVwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc1Bhc3QpIGNsYXNzTmFtZXMgKz0gXCIgaW5hY3RpdmVcIjtcclxuXHJcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwiJHtjbGFzc05hbWVzfVwiPiR7ZGF5SW5mby5kYXl9PC9saT5gO1xyXG4gICAgfSlcclxuICAgIC5qb2luKFwiXCIpO1xyXG5cclxuICBjYWxlbmRhckNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY2FsZW5kYXJEYXlIVE1MKTtcclxuICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGAke21vbnRoc1ttb250aF19ICR7eWVhcn1gO1xyXG4gIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFya0NhbGVuZGFyRGF5cyA9ICgpID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZEJ5VHlwZSA9IGZpbHRlckJ5VHlwZShwcm9qZWN0cyk7XHJcbiAgZmlsdGVyZWRCeVR5cGUuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9iamVjdC5kdWVEYXRlICYmXHJcbiAgICAgIG9iamVjdC5kdWVEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiZcclxuICAgICAgb2JqZWN0LmR1ZURhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGhcclxuICAgICkge1xyXG4gICAgICBjb25zdCByZW5kZXJlZERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheVwiKTtcclxuICAgICAgY29uc3QgZHVlU3RyaW5nID0gU3RyaW5nKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSk7XHJcbiAgICAgIHJlbmRlcmVkRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgICAgICBpZiAoZHVlU3RyaW5nKSB7XHJcbiAgICAgICAgICBtYXJrKGRheSwgZHVlU3RyaW5nLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgJiZcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiZcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcmVuZGVyZWREYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25TdHJpbmcgPSBTdHJpbmcob2JqZWN0LmNvbXBsZXRpb25EYXRlLmdldERhdGUoKSk7XHJcbiAgICAgIHJlbmRlcmVkRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgICAgICBpZiAoY29tcGxldGlvblN0cmluZykge1xyXG4gICAgICAgICAgbWFyayhkYXksIGNvbXBsZXRpb25TdHJpbmcsIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcmsgPSAoZGF5LCBzdHJpbmcsIG9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkU3RyaW5nID0gU3RyaW5nKHNlbGVjdGVkRGF0ZS5nZXREYXRlKCkpO1xyXG4gIGNvbnN0IGRheVN0aW5nID0gU3RyaW5nKGRheS5pbm5lclRleHQpO1xyXG4gIGlmIChkYXlTdGluZyA9PT0gc3RyaW5nKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRheS5jbGFzc0xpc3QuY29udGFpbnMoYGV2ZW50JHtvYmplY3QucHJpb3JpdHl9YCkgJiZcclxuICAgICAgZGF5U3RpbmcgPT09IHNlbGVjdGVkU3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoYGV2ZW50JHtvYmplY3QucHJpb3JpdHl9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXkuY2xhc3NMaXN0LmFkZChgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKiBpZiAob2JqZWN0LmR1ZURhdGUgfHwgb2JqZWN0LmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgaWYgKFxyXG4gICAgKG9iamVjdC5kdWVEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiZcclxuICAgICAgb2JqZWN0LmR1ZURhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgpIHx8XHJcbiAgICAob2JqZWN0LmNvbXBsZXRpb25EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiZcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoKVxyXG4gICkge1xyXG4gICAgY29uc3QgcmVuZGVyZWREYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICBjb25zdCBkdWVTdHJpbmcgPSBvYmplY3QuZHVlRGF0ZVxyXG4gICAgICA/IFN0cmluZyhvYmplY3QuZHVlRGF0ZS5nZXREYXRlKCkpXHJcbiAgICAgIDogbnVsbDtcclxuICAgIGNvbnN0IGNvbXBsZXRpb25TdHJpbmcgPSBvYmplY3QuY29tcGxldGlvbkRhdGVcclxuICAgICAgPyBTdHJpbmcob2JqZWN0LmNvbXBsZXRpb25EYXRlLmdldERhdGUoKSlcclxuICAgICAgOiBudWxsO1xyXG4gICAgY29uc29sZS5sb2cob2JqZWN0LmNvbXBsZXRpb25EYXRlLCBcImNvbXBcIik7XHJcbiAgICBjb25zb2xlLmxvZyhkdWVTdHJpbmcsIFwiZHVlIDJcIik7XHJcbiAgICByZW5kZXJlZERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAgIGlmIChkdWVTdHJpbmcgJiYgZHVlU3RyaW5nICE9PSBudWxsKSB7XHJcbiAgICAgICAgbWFyayhkYXksIGR1ZVN0cmluZywgb2JqZWN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkdWVTdHJpbmcsIFwiZHVlXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbXBsZXRpb25TdHJpbmcgJiYgY29tcGxldGlvblN0cmluZyAhPT0gbnVsbCkge1xyXG4gICAgICAgIG1hcmsoZGF5LCBjb21wbGV0aW9uU3RyaW5nLCBvYmplY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBsZXRpb25TdHJpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0gKi9cclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBmb3J3YXJkQmFja3dhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFycm93XCIpO1xyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FsZW5kYXJEYXlcIik7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3RXZlbnRcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxuICBmb3J3YXJkQmFja3dhcmQuZm9yRWFjaCgoYXJyb3cpID0+IHtcclxuICAgIGFycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb250aENoYW5nZXJFdmVudCk7XHJcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9udGhDaGFuZ2VyRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGF0ZVNlbGVjdGlvbkV2ZW50KTtcclxuICAgIGRheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGF0ZVNlbGVjdGlvbkV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vbnRoQ2hhbmdlckV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZvcndhcmRcIikgfHxcclxuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJiYWNrd2FyZFwiKVxyXG4gICkge1xyXG4gICAgY2xlYXJDYWxlbmRhcigpO1xyXG4gICAgY2hhbmdlTW9udGgoZXYpO1xyXG4gICAgcmVuZGVyQ2FsZW5kYXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkYXRlU2VsZWN0aW9uRXZlbnQgPSAoZXYpID0+IHtcclxuICBzZWxlY3REYXRlKGV2KTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjYWxlbmRhckRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICBkYXkucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VNb250aCA9IChldikgPT4ge1xyXG4gIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSkge1xyXG4gICAgbW9udGggKz0gMTtcclxuICAgIGlmIChtb250aCA+IDExKSB7XHJcbiAgICAgIG1vbnRoID0gMDtcclxuICAgICAgeWVhciArPSAxO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpKSB7XHJcbiAgICBtb250aCAtPSAxO1xyXG4gICAgaWYgKG1vbnRoIDwgMCkge1xyXG4gICAgICBtb250aCA9IDExO1xyXG4gICAgICB5ZWFyIC09IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0RGF0ZSA9IChldikgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FsZW5kYXJEYXlcIik7XHJcbiAgY29uc3Qgc2VsZWN0ZWREYXRlRWxlbWVudCA9IGV2LnRhcmdldDtcclxuICBsZXQgc2VsZWN0ZWREYXkgPSBldi50YXJnZXQuaW5uZXJUZXh0O1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgfSk7XHJcbiAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmFjdGl2ZVwiKSkge1xyXG4gICAgbW9udGhDaGFuZ2VyRXZlbnQoZXYpO1xyXG4gICAgY29uc3QgbmV3UmVuZGVyZWRNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWREYXRlRWxlbWVudCA9IEFycmF5LmZyb20obmV3UmVuZGVyZWRNb250aCkuZmluZChcclxuICAgICAgKGRheSkgPT4gZGF5LmlubmVyVGV4dCA9PT0gZXYudGFyZ2V0LmlubmVyVGV4dFxyXG4gICAgKTtcclxuICAgIG5ld1NlbGVjdGVkRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxlY3RlZERhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICB9XHJcbiAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIHNlbGVjdGVkRGF5KTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IGdldE9iamVjdCB9IGZyb20gXCIuL2dldE9iamVjdFwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBtYXJrQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdldFBvcFVwID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbGV0IG9iamVjdElkID0gb2JqSWQ7XHJcblxyXG4gIGlmIChvYmpJZCBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgb2JqZWN0SWQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYDxsYWJlbCBmb3I9XCJ0aW1lXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZSBUaW1lOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiBtaW49XCIwMDowMFwiIG1heD1cIjIzOjU5XCI+YDtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgb2JqZWN0SWQgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgZ2V0VHlwZSgpICE9PSBcImV2ZW50c1wiICYmXHJcbiAgICBnZXRUeXBlKCkgIT09IFwiZGFpbHlcIlxyXG4gICkge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImxhYmVsXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCI+PC9pbnB1dD5gO1xyXG4gIH0gZWxzZSBpZiAob2JqZWN0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBub3RlcygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiYWRkVGFza1wiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGF1dG9mb2N1cy8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiIGNsYXNzPVwibGFiZWxcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiBjaGVja2VkIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImhpZ2hcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgPGxhYmVsIGZvcj1cIm5vdGVcIiBjbGFzcz1cImxhYmVsXCI+Tm90ZTo8L2xhYmVsPlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke29iamVjdElkfVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIH1cclxuICBsaXN0ZW5lcnMob2JqZWN0SWQpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtpZF49XCJhZGRQcm9qQnRuXCJdYCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnRuXCIpO1xyXG4gIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlTWFya1wiKTtcclxuICBpZiAocHJpb3JpdHlCdG4pIHtcclxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQcmlvcml0eSk7XHJcbiAgfVxyXG4gIGlmIChuZXdQcm9qKSB7XHJcbiAgICBuZXdQcm9qLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgIGlmIChvYmpJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBldklkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxMCkpO1xyXG4gICAgICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgICAgICBnZXRPYmplY3QoZXZJZCk7XHJcbiAgICAgICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmpJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgICAgIGdldE9iamVjdCgpO1xyXG4gICAgICAgICAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgICAgICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQb3BVcCk7XHJcbn07XHJcblxyXG5jb25zdCBub3RlcyA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBub3RlID0gYDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIFwiIGF1dG9mb2N1cyAvPlxyXG4gICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibm90ZURhdGVcIj48L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgbG93XCIgZGF0YS1wcmlvcml0eT1cImxvd1wiIGlkPVwibm90ZVByaW9yaXR5XCI+TTwvZGl2PlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG5cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5vdGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTm90ZXNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIG5vdGVzQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld05vdGVcIiBpZD1cIm5ld05vdGVcIj5cclxuICAgIDxwIGNsYXNzPVwibmV3Tm90ZV9fcFwiPkFkZCBOb3RlPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld05vdGVcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0Q29tcGxldGlvbiB9IGZyb20gXCIuL2dldENvbXBsZXRpb25cIjtcclxuaW1wb3J0IHsgc29ydEFycmF5IH0gZnJvbSBcIi4vc29ydEFycmF5XCI7XHJcbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tIFwiLi9yZW1vdmVJdGVtXCI7XHJcbmltcG9ydCB7IHJlbmRlckVkaXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckVkaXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwiLi9maWx0ZXJCeVR5cGVcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUb2RheSB9IGZyb20gXCIuL2ZpbHRlckJ5VG9kYXlcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHN3aXRjaFByaW9yaXR5IH0gZnJvbSBcIi4vc3dpdGNoUHJpb3JpdHlcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlEYXRlIH0gZnJvbSBcIi4vZmlsdGVyQnlEYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyT2JqZWN0cyA9ICgpID0+IHtcclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICBjb25zdCBhcnJheU9mVHlwZSA9IGZpbHRlckJ5VHlwZShwcm9qZWN0cyk7XHJcbiAgbGV0IGRhaWx5QXJyYXkgPSBzb3J0QXJyYXkoYXJyYXlPZlR5cGUpO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBcnJheSA9IGZpbHRlckJ5VG9kYXkocHJvamVjdHMpO1xyXG4gICAgZGFpbHlBcnJheS5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICAgIHJlbmRlck9iamVjdChwcm9qKTtcclxuICAgICAgcmVuZGVyUHJvalRhc2socHJvaik7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGdldFR5cGUoKSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBkYWlseUFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICByZW5kZXJOb3RlcyhvYmplY3QpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlEYXRlID0gZmlsdGVyQnlEYXRlKGZpbHRlcmVkQnlUeXBlKTtcclxuICAgIGlmIChmaWx0ZXJlZEJ5RGF0ZSkge1xyXG4gICAgICBkYWlseUFycmF5ID0gZmlsdGVyZWRCeURhdGU7XHJcbiAgICAgIGRhaWx5QXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXZlbnRzKG9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGFpbHlBcnJheSA9IGZpbHRlckJ5VG9kYXkoZmlsdGVyZWRCeVR5cGUpO1xyXG4gICAgICBkYWlseUFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckV2ZW50cyhvYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZGFpbHlBcnJheS5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICAgIHJlbmRlck9iamVjdChwcm9qKTtcclxuICAgICAgcmVuZGVyUHJvalRhc2socHJvaik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpc3RlbmVycygpO1xyXG4gIGdldENvbXBsZXRpb24oKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrKGNvbXBsZXRlKSB7XHJcbiAgaWYgKGNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gJ2NoZWNrZWQ9XCJjaGVja2VkXCInO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlck9iamVjdCA9IChwcm9qKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Q29udGFpbmVyXCIpO1xyXG4gIGxldCBjaGVja0VsZW1lbnQgPSBcIlwiO1xyXG4gIGxldCBkZWxldGVFbGVtZW50ID0gYDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkcCR7cHJvai5pZH1cIj5EPC9wPmA7XHJcbiAgbGV0IGFkZFRhc2sgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm5ld1Rhc2tcIiBpZD1cIm50JHtwcm9qLmlkfVwiPlxyXG4gICAgICA8cCBjbGFzcz1cIm5ld1Rhc2tfX3BcIj5BZGQgdGFzazwvcD5cclxuICA8L2Rpdj5gO1xyXG4gIGlmIChwcm9qLnR5cGUgPT09IFwiZGFpbHlcIiAmJiBwcm9qLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tFbGVtZW50ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbXBsZXRpb25cIiBuYW1lPVwiY29tcGxldGlvblwiIGlkPVwiJHtcImNcIn0ke1xyXG4gICAgICBwcm9qLmlkXHJcbiAgICB9XCIgICR7Y2hlY2socHJvai5jb21wbGV0ZSl9Lz5gO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBnZXRUeXBlKCkgPT09IFwiZGFpbHlcIiAmJlxyXG4gICAgKHByb2oudHlwZSA9PT0gXCJwcm9qXCIgfHwgcHJvai50eXBlID09PSBcImV2ZW50c1wiKVxyXG4gICkge1xyXG4gICAgYWRkVGFzayA9IFwiXCI7XHJcbiAgICBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICB9XHJcbiAgY29uc3QgZm9ybWF0dGVkRHVlRGF0ZSA9IHByb2ouZHVlRGF0ZSA/IGZvcm1hdERhdGUocHJvai5kdWVEYXRlKSA6IFwiXCI7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGA8cCBjbGFzcz1cIm9iakRhdGVcIj5EdWU6JHtmb3JtYXR0ZWREdWVEYXRlfTwvcD5gO1xyXG4gIGNvbnN0IE9iamVjdCA9IGBcclxuPGRpdiBjbGFzcz1cIm9iamVjdFdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke3Byb2ouaWR9XCI+XHJcbjxkaXYgY2xhc3M9XCJvYmplY3QgJHtwcm9qLnByaW9yaXR5fSAke3Byb2ouY29tcGxldGV9XCIgaWQ9XCIke1wicHBcIn0ke3Byb2ouaWR9XCI+XHJcbiR7Y2hlY2tFbGVtZW50fVxyXG4gIDxwIGNsYXNzPVwib2JqVGl0bGVcIj4ke3Byb2oudGl0bGV9PC9wPlxyXG4gICR7cHJvai50eXBlICE9PSBcImRhaWx5XCIgPyBkdWVEYXRlIDogXCJcIn1cclxuICA8cCBjbGFzcz1cIm9iak5vdGVcIj4ke3Byb2oubm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgJHtkZWxldGVFbGVtZW50fVxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInRhc2tXcmFwcGVyXCIgaWQ9XCJ0dyR7cHJvai5pZH1cIj5cclxuJHthZGRUYXNrfVxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE9iamVjdCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJOb3RlcyA9IChvYmplY3QpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShvYmplY3QuYWRkZWREYXRlKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgTm90ZSA9IGA8ZGl2IGNsYXNzPVwibm90ZVdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke29iamVjdC5pZH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9iamVjdFwiIGlkPVwibm8ke29iamVjdC5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlVGl0bGVcIiBpZD1cIm50JHtvYmplY3QuaWR9XCI+JHtvYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJuZCR7b2JqZWN0LmlkfVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayAke29iamVjdC5wcmlvcml0eX1cIiBpZD1cIm5tJHtvYmplY3QuaWR9XCI+TVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtvYmplY3QuaWR9XCI+RDwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlQm9keVwiIGlkPVwibmIke29iamVjdC5pZH1cIj4ke29iamVjdC5ub3RlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE5vdGUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRXZlbnRzID0gKG9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlbnROb3RlV3JhcHBlclwiKTtcclxuICBjb25zdCBkYXRlRWxlbWVudCA9IG9iamVjdC50eXBlID09PSBcInByb2pcIiA/IFwiXCIgOiBmb3JtYXRUaW1lKG9iamVjdC5kdWVEYXRlKTtcclxuICBjb25zdCBldmVudEVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkV2ZW50V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7b2JqZWN0LmlkfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJvYmplY3QgJHtvYmplY3QucHJpb3JpdHl9ICR7b2JqZWN0LmNvbXBsZXRlfVwiIGlkPVwiZW8ke29iamVjdC5pZH0gXCI+XHJcbiAgPHAgY2xhc3M9XCJldmVudFRpdGxlXCIgaWQ9XCJldCR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0LnRpdGxlfTwvcD5cclxuICA8cCBjbGFzcz1cImV2ZW50RGF0ZVwiIGlkPVwiZWQke29iamVjdC5pZH1cIj4ke2RhdGVFbGVtZW50fTwvcD5cclxuICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke29iamVjdC5pZH1cIj5EPC9wPlxyXG4gIDxwIGNsYXNzPVwiZXZlbnRCb2R5XCIgaWQ9XCJlYiR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0Lm5vdGV9PC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGV2ZW50RWxlbWVudCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Rhc2tcIik7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmplY3RcIik7XHJcbiAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlRhc2tcIik7XHJcbiAgY29uc3QgbWFya05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdGVNYXJrXCIpO1xyXG4gIG5ld1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tFdmVudCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRXZlbnQpO1xyXG4gIH0pO1xyXG4gIHByb2plY3RCdG5zLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0RXZlbnQpO1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RFdmVudCk7XHJcbiAgfSk7XHJcbiAgdGFza0J0bnMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tFdmVudCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza0V2ZW50KTtcclxuICB9KTtcclxuICBtYXJrTm90ZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFya05vdGVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtOb3RlRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFByb2plY3RFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdFwiKTtcclxuICBpZiAoXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZU1hcmtcIilcclxuICApIHtcclxuICAgIHJlbmRlckVkaXRQb3BVcCh0YXJnZXQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGVkaXRUYXNrRXZlbnQgPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5UYXNrXCIpO1xyXG4gIGlmICghZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikpIHtcclxuICAgIHJlbmRlckVkaXRQb3BVcCh0YXJnZXQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcmtOb3RlRXZlbnQgPSAoZXYpID0+IHtcclxuICBzd2l0Y2hQcmlvcml0eShldik7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICB9XHJcbiAgcmVtb3ZlSXRlbShldik7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVGFza0V2ZW50ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmV3VGFza1wiKTtcclxuICByZW5kZXJHZXRQb3BVcCh0YXJnZXQuaWQuc2xpY2UoMikpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgcHJvamVjdHNDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdQcm9qXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBQcm9qZWN0PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2pcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalRhc2sgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtvYmouaWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IG9iai5pZCk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xyXG5cclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgICBkYXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID09PSBudWxsID8gXCJcIiA6IGZvcm1hdHRlZERhdGVcclxuICAgICAgfTwvcD5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiICYmIHByb2plY3QudHlwZSA9PT0gXCJwcm9qXCIpIHtcclxuICAgICAgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gYDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkdCR7dGFzay5pZH1cIj5EPC9wPmA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFzayAke3Rhc2sucHJpb3JpdHl9ICR7dGFzay5jb21wbGV0ZX1cIiBpZD1cInB0JHt0YXNrLmlkfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCJjJHtcclxuICAgICAgICAgdGFzay5pZFxyXG4gICAgICAgfVwiICAke2NoZWNrKHRhc2suY29tcGxldGUpfS8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxyXG4gICAgICAgJHtkYXRlRWxlbWVudH1cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tOb3RlXCI+JHt0YXNrLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICAgICAgICR7ZGVsZXRlRWxlbWVudH1cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2soY29tcGxldGUpIHtcclxuICBpZiAoY29tcGxldGUpIHtcclxuICAgIHJldHVybiAnY2hlY2tlZD1cImNoZWNrZWRcIic7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGVkaXRQcmlvcml0eSB9IGZyb20gXCIuL2VkaXRQcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXYudGFyZ2V0LmlkfWApO1xyXG4gIGlmIChwcmlvckVsZW1lbnQpIHtcclxuICAgIGlmIChwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG93XCIpKSB7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIFwiaGlnaFwiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBcImxvd1wiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2pQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUHJvalBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRXZlbnRzUGFnZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRGFpbHlQYWdlIH0gZnJvbSBcIi4vcmVuZGVyRGFpbHlQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXphdGlvbiB9IGZyb20gXCIuL2luaXRpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL2NsZWFyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJOb3Rlc1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJEYWlseVBhZ2UsIHJlbmRlckZvb3Rlcik7XHJcblxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmF2TGlcIik7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclBhZ2UoXHJcbiAgICAgIHRhcmdldC5pZCxcclxuICAgICAgcmVuZGVyUHJvalBhZ2UsXHJcbiAgICAgIHJlbmRlckRhaWx5UGFnZSxcclxuICAgICAgcmVuZGVyRXZlbnRzUGFnZSxcclxuICAgICAgcmVuZGVyTm90ZXNQYWdlXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQsIDEwMDAgKiAxMjApO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFbnRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==