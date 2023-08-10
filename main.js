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
  width: clamp(300px, 80%, 1000px);
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
  background-color: aquamarine;
}

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
  display: grid;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.479);
  overflow: hidden;
  place-items: center;
}

.popUpfield {
  height: 70%;
  width: clamp(300px, 90%, 700px);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 5fr;
  background-color: white;
  padding: 2rem;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.priorityWrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,0BAA0B;EAC1B,+BAA+B;EAC/B,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,gCAAgC;AAClC;;AAEA,SAAS;;AAET;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,gDAAgD;EAChD,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gDAAgD;EAChD,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,4DAA4D;EAC5D,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;EACtB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;;AAEA,aAAa;;AAEb;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,WAAW;;AAEX;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,wCAAwC;EACxC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n  --MAIN-BG-C: ;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 10vh 86vh 4vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 1rem 2rem;\r\n  background-color: greenyellow;\r\n}\r\n.navLi {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.listContainer {\r\n  padding: 1rem 2rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: min-content;\r\n  justify-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.wrapper {\r\n  width: clamp(300px, 80%, 1000px);\r\n}\r\n\r\n/* PROJ */\r\n\r\n.newObject {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 3fr 1fr 0.5fr 0.5fr;\r\n  background-color: gray;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 4fr 1fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 4fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n/* NOTES */\r\n\r\n.notesContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r\n  grid-auto-rows: minmax(290px, 1fr);\r\n  gap: 1rem;\r\n}\r\n.newNote {\r\n  height: 100%;\r\n  background-color: gray;\r\n}\r\n\r\n/* EVENTS */\r\n\r\n.eventsContainer {\r\n  height: 70vh;\r\n  width: clamp(300px, 80%, 700px);\r\n  background-color: gray;\r\n  display: grid;\r\n  padding: 1rem;\r\n}\r\n\r\n.dateWrapper {\r\n  height: 7vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  place-items: center;\r\n}\r\n\r\n.calendarWrapper {\r\n  height: 50vh;\r\n}\r\n.headings {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  font-weight: bold;\r\n  place-items: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  place-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.calendarDay {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.calendarDay::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 25px;\r\n  width: 25px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  border-radius: 5px;\r\n}\r\n.calendarDay:hover::before {\r\n  background: hsla(0, 0%, 100%, 0.247);\r\n}\r\n.inactive {\r\n  opacity: 0.5;\r\n}\r\n\r\n.selected::before {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.eventNoteWrapper {\r\n  height: 31vh;\r\n}\r\n\r\n.weekEnd {\r\n  color: darkred;\r\n}\r\n.currentDay::before {\r\n  background-color: white;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.low {\r\n  background-color: green;\r\n}\r\n.med {\r\n  background-color: yellow;\r\n}\r\n.high {\r\n  background-color: red;\r\n}\r\n\r\n/* COMPLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n  color: white;\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.479);\r\n  overflow: hidden;\r\n  place-items: center;\r\n}\r\n\r\n.popUpfield {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 5fr;\r\n  background-color: white;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
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
      if (project.type === "daily" || "notes") {
        project.title = title;
        if (project.type === "notes") {
          const priorElement = document.querySelector("[data-priority]");
          project.priority = priorElement.getAttribute("data-priority");
          project.note = note;
        } else {
          project.priority = priority;
          project.note = note;
        }
      } else {}
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
const filterByDate = (array) => {
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
  const withinTwentyFourHours = new Date(currentDate);
  withinTwentyFourHours.setDate(currentDate.getDate() + 1);
  const filtered = array.filter((item) => {
    const dueDate = new Date(item.dueDate);
    return dueDate >= currentDate && dueDate <= withinTwentyFourHours;
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
const filterByType = (array) => {
  const filtered = array.filter((item) => item.type === getType());
  return filtered;
};
const getType = () => {
  const activeTab = document.querySelector(".active");
  return activeTab.id;
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

/***/ "./src/getCompletion.js":
/*!******************************!*\
  !*** ./src/getCompletion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCompletion: () => (/* binding */ getCompletion)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");



const getCompletion = () => {
  const boxes = document.querySelectorAll('[name="completion"]');
  boxes.forEach((box) => {
    box.removeEventListener("change", checkBoxes);
    box.addEventListener("change", (ev) => {
      ev.stopPropagation();
      checkBoxes(ev);
      (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
    });
  });
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
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((obj) => {
    const completedObjects = obj.tasks.filter((task) => !task.complete);
    if (
      (obj.tasks.length !== 0 && completedObjects.length === 0) ||
      (obj.type === "daily" && ev.target.checked)
    ) {
      obj.complete = true;
      obj.completionDate = currentDate;
    } else {
      obj.complete = false;
      obj.completionDate = null;
    }
  });
}
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






const getObject = (projId) => {
  const title = document.querySelector("#title").value;
  let dueDate = "";
  let type = (0,_getType__WEBPACK_IMPORTED_MODULE_4__.getType)();
  if (projId === undefined && type !== "daily" && type !== "notes") {
    dueDate = document.querySelector("#date").value;
  }

  if (type === "daily") {
    const currentDate = new Date();
    const midNight = new Date(currentDate);
    midNight.setDate(currentDate.getDate() + 1);
    midNight.setHours(0, 0, 0);
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
/* harmony export */   checkDueDatesAndRemoveCompleted: () => (/* binding */ checkDueDatesAndRemoveCompleted)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");


const bin = [];

const removeCompleted = () => {
  const currentDate = new Date();
  const midNightAhead = new Date();
  midNightAhead.setDate(currentDate.getDate() + 2);
  midNightAhead.setHours(0, 0, 0);
  const midNight = new Date(currentDate);
  midNight.setDate(currentDate.getDate() + 1);
  midNight.setHours(0, 0, 0);
  const tenAgo = new Date();
  tenAgo.setSeconds(currentDate.getSeconds() - 10);
  const twoHoursAgo = new Date();
  twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((object) => {
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
      (object.type === "proj" &&
        object.complete === true &&
        object.completionDate <= twoHoursAgo) ||
      (object.type === "events" && object.dueDate <= twoHoursAgo)
    ) {
      const index = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => obj.id === object.id);
      const spliced = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
      bin.push(spliced);
    }
  });
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
};

const checkDueDatesAndRemoveCompleted = () => {
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


const removeItem = (ev) => {
  const targetId = Number(ev.target.id.slice(2));
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((proj) => proj.id === targetId);
  if (
    (project !== undefined || project !== null) &&
    ev.target.id.slice(0, 2) == "dp"
  ) {
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(project, 1);
    const projElement = document.querySelector(`#pw${targetId}`);
    projElement.remove();
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
  const dueDateElement =
    object.type !== "daily"
      ? `<label for="date" class="label">Due date:</label>
  <input type="date" id="date" value="${object.dueDate}">`
      : "";

  if (object.type === "notes") {
    const note = `<div class="popUpContainer">
    <div class="popUpfield" id="editTask">
      <label class="label" for="title">Title:</label>
      <input name="title" class="input" type="text" id="title" value="${object.title}" autofocus />
      <p class="noteDate" id="noteDate">${object.addedDate}</p>
      <div class="noteMark ${object.priority}" data-priority="${object.priority}" id="notePriority${object.id}">M</div>
      <textarea name="note" id="projNote" cols="30" rows="10">${object.note}</textarea>
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
    ${dueDateElement}
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
/* harmony export */   renderEventsPage: () => (/* binding */ renderEventsPage)
/* harmony export */ });
const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
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
      <div class="eventNoteWrapper"></div>
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
  let calendarDay = "";
  for (let i = paddingDays; i > 0; --i) {
    const previousMonthDay = lastDateOfLastMonth - i + 1;
    if (
      weekDays[new Date(year, month - 1, previousMonthDay - 1).getDay()] ===
        "Saturday" ||
      weekDays[new Date(year, month - 1, previousMonthDay - 1).getDay()] ===
        "Sunday"
    ) {
      calendarDay += `<li class="calendarDay  weekEnd inactive backward">${
        lastDateOfLastMonth - i + 1
      }</li> `;
    } else {
      calendarDay += `<li class="calendarDay inactive backward">${
        lastDateOfLastMonth - i + 1
      }</li> `;
    }
  }
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    if (i > paddingDays) {
      if (
        i - paddingDays === day &&
        month === currentMonth &&
        year === currentYear
      ) {
        calendarDay += `<li class="calendarDay currentDay" id="currentDay">${
          i - paddingDays
        }</li> `;
      } else if (
        weekDays[new Date(year, month, i - paddingDays - 1).getDay()] ===
          "Saturday" ||
        weekDays[new Date(year, month, i - paddingDays - 1).getDay()] ===
          "Sunday"
      ) {
        calendarDay += `<li class="calendarDay weekEnd day">${
          i - paddingDays
        }</li> `;
      } else {
        calendarDay += `<li class="calendarDay day">${i - paddingDays}</li> `;
      }
    }
  }
  for (let i = lastDayOfMonth; i < 7; i++) {
    const nextMonthDay = i - lastDayOfMonth + 1;
    if (
      weekDays[new Date(year, month + 1, nextMonthDay - 1).getDay()] ===
        "Saturday" ||
      weekDays[new Date(year, month + 1, nextMonthDay - 1).getDay()] ===
        "Sunday"
    ) {
      calendarDay += `<li class="calendarDay weekEnd inactive forward">${nextMonthDay}</li> `;
    } else {
      calendarDay += `<li class="calendarDay inactive forward">${nextMonthDay}</li> `;
    }
  }
  calendarContainer.insertAdjacentHTML("beforeend", calendarDay);
  currentDate.textContent = `${months[month]} ${year}`;
  listeners();
};

const listeners = () => {
  const forwardBackward = document.querySelectorAll(".arrow");
  const calendarDays = document.querySelectorAll(".calendarDay");
  forwardBackward.forEach((arrow) => {
    arrow.removeEventListener("click", clickListener);
    arrow.addEventListener("click", clickListener);
  });
  calendarDays.forEach((day) => {
    day.removeEventListener("click", clickListener);
    day.addEventListener("click", clickListener);
  });
};

const clickListener = (ev) => {
  clearCalendar();
  changeMonth(ev);
  renderCalendar();
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






const renderGetPopUp = (objId) => {
  const container = document.querySelector("main");
  let objectId = objId;

  if (objId instanceof PointerEvent) {
    objectId = undefined;
  }
  let dateElement =
    objectId === undefined
      ? `<label for="date" class="label">Due date:</label>
         <input type="date" id="date">`
      : "";
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "daily") {
    dateElement = "";
  }
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "notes") {
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
          (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
        }
      });
    });
  }
  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
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
/* harmony import */ var _filterByDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filterByDate */ "./src/filterByDate.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getType */ "./src/getType.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _switchPriority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./switchPriority */ "./src/switchPriority.js");













const renderObjects = () => {
  (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__.clearRenderedProjects)();
  const arrayOfType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_7__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  let dailyArray = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(arrayOfType);
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily") {
    dailyArray = (0,_filterByDate__WEBPACK_IMPORTED_MODULE_8__.filterByDate)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  }
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "notes") {
    dailyArray.forEach((object) => {
      renderNotes(object);
    });
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
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily" && proj.type === "proj") {
    addTask = "";
    deleteElement = "";
  }
  const dueDate = `<p class="objDate">Due:${proj.dueDate}</p>`;
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
  const container = document.querySelector(".listContainer");
  const Note = `<div class="noteWrapper wrapper" id="pw${object.id}">
      <div class="object" id="no${object.id}">
      <p class="noteTitle" id="nt${object.id}">${object.title}</p>
      <p class="noteDate" id="nd${object.id}">${object.addedDate}</p>
      <div class="noteMark ${object.priority}" id="nm${object.id}">M
      </div>
      <p class="delete" id="dp${object.id}">D</p>
      <p class="noteBody" id="nb${object.id}">${object.note}</p>
    </div>
    </div>`;
  container.insertAdjacentHTML("beforeend", Note);
};

const listeners = () => {
  const newTasks = document.querySelectorAll(".newTask");
  const deleteBtns = document.querySelectorAll(".delete");
  const projectBtns = document.querySelectorAll(".object");
  const taskBtns = document.querySelectorAll(".Task");
  const markNote = document.querySelectorAll(".noteMark");
  newTasks.forEach((task) => {
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".newTask");
      (0,_renderGetPopUp__WEBPACK_IMPORTED_MODULE_2__.renderGetPopUp)(target.id.slice(2));
    });
  });
  deleteBtns.forEach((btn) => {
    btn.removeEventListener("click", _removeItem__WEBPACK_IMPORTED_MODULE_5__.removeItem);
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      (0,_removeItem__WEBPACK_IMPORTED_MODULE_5__.removeItem)(ev);
      renderObjects();
    });
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", _renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".object");
      if (
        !ev.target.classList.contains("completion") &&
        !ev.target.classList.contains("noteMark")
      ) {
        (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp)(target);
      }
    });
  });
  taskBtns.forEach((task) => {
    task.removeEventListener("click", _renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp);
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".Task");
      if (!ev.target.classList.contains("completion")) {
        (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp)(target);
      }
    });
  });
  markNote.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      (0,_switchPriority__WEBPACK_IMPORTED_MODULE_11__.switchPriority)(ev);
    });
  });
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



const renderProjTask = (obj) => {
  const container = document.querySelector(`#tw${obj.id}`);
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((proj) => proj.id === obj.id);
  const tasks = project.tasks;
  let deleteElement = "";
  let dateElement = "";
  tasks.forEach((task) => {
    if (project.type !== "daily") {
      dateElement = `<p class="taskDate">${
        task.completionDate === null ? "" : task.completionDate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FB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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ1U7QUFDSTtBQUNGO0FBQ1o7QUFDVTtBQUNWO0FBQ0U7QUFDVTtBQUNOO0FBQ0Y7QUFDd0I7QUFDcEU7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsNkRBQWUsRUFBRSxpREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksdURBQVU7QUFDZDtBQUNBLE1BQU0sMkRBQWM7QUFDcEIsTUFBTSw2REFBZTtBQUNyQixNQUFNLCtEQUFnQjtBQUN0QixNQUFNLDZEQUFlO0FBQ3JCO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFlBQVksOEVBQStCO0FBQzNDLHFDQUFxQyx3REFBWTtBQUNqRCxxQ0FBcUMsc0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jbGVhclBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUmVuZGVyZWRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0UHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlEYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlckJ5VHlwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0Q29tcGxldGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0VHlwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVFbnRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2lkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luaXRpYWxpemF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckRhaWx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFZGl0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJHZXRQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJOb3Rlc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zd2l0Y2hQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC8qIFZBUklBQkxFUyAqL1xyXG4gIC0tTUFJTi1CRy1DOiA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg2dmggNHZoO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLyogSEVBREVSICovXHJcblxyXG4ubmF2VWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcbi5uYXZMaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTUFJTiAqL1xyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxpc3RDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDgwJSwgMTAwMHB4KTtcclxufVxyXG5cclxuLyogUFJPSiAqL1xyXG5cclxuLm5ld09iamVjdCB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5vYmplY3RXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLm9iamVjdCB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAzZnIgMWZyIDAuNWZyIDAuNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi50YXNrV3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5UYXNrIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNGZyIDFmciAwLjVmciAwLjVmcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ubmV3VGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAwLjVmciAwLjVmcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4udGFza0RhdGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi8qIE5PVEVTICovXHJcblxyXG4ubm90ZXNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjkwcHgsIDFmcikpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjkwcHgsIDFmcik7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcbi5uZXdOb3RlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLyogRVZFTlRTICovXHJcblxyXG4uZXZlbnRzQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA4MCUsIDcwMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmRhdGVXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyV3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbi5oZWFkaW5ncyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4uY2FsZW5kYXJEYXlzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uY2FsZW5kYXJEYXk6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjQ3KTtcclxufVxyXG4uaW5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnNlbGVjdGVkOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcbi5ldmVudE5vdGVXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDMxdmg7XHJcbn1cclxuXHJcbi53ZWVrRW5kIHtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG4uY3VycmVudERheTo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogUFJJT1JJVFkgKi9cclxuXHJcbi5sb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5tZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4uaGlnaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBDT01QTEVURUQgKi9cclxuXHJcbi50cnVlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhbHNlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBOmFueS1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFBPUFVQICovXHJcblxyXG4ucG9wVXBDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNDc5KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3BVcGZpZWxkIHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNzAwcHgpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByaW9yaXR5V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGtDQUFrQztFQUNsQyxTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1Asd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogVkFSSUFCTEVTICovXFxyXFxuICAtLU1BSU4tQkctQzogO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODZ2aCA0dmg7XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5uYXZVbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG4ubmF2TGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RDb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDgwJSwgMTAwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJPSiAqL1xcclxcblxcclxcbi5uZXdPYmplY3Qge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ub2JqZWN0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ub2JqZWN0IHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgM2ZyIDFmciAwLjVmciAwLjVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tXcmFwcGVyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLlRhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNGZyIDFmciAwLjVmciAwLjVmcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ubmV3VGFzayB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLnRhc2tEYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTk9URVMgKi9cXHJcXG5cXHJcXG4ubm90ZXNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjkwcHgsIDFmcik7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5uZXdOb3RlIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi8qIEVWRU5UUyAqL1xcclxcblxcclxcbi5ldmVudHNDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA4MCUsIDcwMHB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuLmhlYWRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG4uY2FsZW5kYXJEYXlzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4uY2FsZW5kYXJEYXkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5OjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNDcpO1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnROb3RlV3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDMxdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrRW5kIHtcXHJcXG4gIGNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG4uY3VycmVudERheTo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUklPUklUWSAqL1xcclxcblxcclxcbi5sb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5tZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4uaGlnaCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIENPTVBMRVRFRCAqL1xcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmZhbHNlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXJBOmFueS1saW5rIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUE9QVVAgKi9cXHJcXG5cXHJcXG4ucG9wVXBDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40NzkpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcGZpZWxkIHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkxpXCIpO1xyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgcGFnZS5mb3JFYWNoKChwYWdlKSA9PiBwYWdlLnJlbW92ZSgpKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyUG9wVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgcG9wVXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3BVcENvbnRhaW5lclwiKTtcclxuICBwb3BVcHMuZm9yRWFjaCgocG9wVXApID0+IHBvcFVwLnJlbW92ZSgpKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCByZW5kZXJlZFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53cmFwcGVyXCIpO1xyXG4gIHJlbmRlcmVkUHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgcHJvai5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgSWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMTApKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGZpbmRQcm9qKElkKT8uaWQ7XHJcbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IElkKTtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0YXNrLm5vdGUgPSBub3RlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocHJvamVjdElkID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBJZCk7XHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICBpZiAocHJvamVjdC50eXBlID09PSBcImRhaWx5XCIgfHwgXCJub3Rlc1wiKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgICAgICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBvYmplY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gaWQpO1xyXG4gIG9iamVjdC5wcmlvcml0eSA9IGV2LnRhcmdldC5jbGFzc0xpc3QuaXRlbSgxKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlckJ5RGF0ZSA9IChhcnJheSkgPT4ge1xyXG4gIGNvbnN0IHR5cGVPcmRlciA9IHtcclxuICAgIGV2ZW50czogMSxcclxuICAgIHByb2o6IDIsXHJcbiAgICBkYWlseTogMyxcclxuICB9O1xyXG4gIGNvbnN0IHByaW9yaXR5T3JkZXIgPSB7XHJcbiAgICBsb3c6IDMsXHJcbiAgICBtZWQ6IDIsXHJcbiAgICBoaWdoOiAxLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB3aXRoaW5Ud2VudHlGb3VySG91cnMgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgd2l0aGluVHdlbnR5Rm91ckhvdXJzLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShpdGVtLmR1ZURhdGUpO1xyXG4gICAgcmV0dXJuIGR1ZURhdGUgPj0gY3VycmVudERhdGUgJiYgZHVlRGF0ZSA8PSB3aXRoaW5Ud2VudHlGb3VySG91cnM7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc29ydGVkQnlQcmlvcml0eSA9IGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IHR5cGVDb21wID0gdHlwZU9yZGVyW2EudHlwZV0gLSB0eXBlT3JkZXJbYi50eXBlXTtcclxuICAgIGlmICh0eXBlQ29tcCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gdHlwZUNvbXA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5T3JkZXJbYS5wcmlvcml0eV0gLSBwcmlvcml0eU9yZGVyW2IucHJpb3JpdHldO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc29ydGVkQnlQcmlvcml0eTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlckJ5VHlwZSA9IChhcnJheSkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGdldFR5cGUoKSk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkO1xyXG59O1xyXG5jb25zdCBnZXRUeXBlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xyXG4gIHJldHVybiBhY3RpdmVUYWIuaWQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gYFxyXG4gIDxhXHJcbiAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJrZXN0b2ZUaW1lc1wiXHJcbiAgY2xhc3M9XCJmb290ZXJBXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gID5EYXJrVGltZXM8L2FcclxuPmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBmb290ZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGxldGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiY29tcGxldGlvblwiXScpO1xyXG4gIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hlY2tCb3hlcyk7XHJcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXYpID0+IHtcclxuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNoZWNrQm94ZXMoZXYpO1xyXG4gICAgICByZW5kZXJPYmplY3RzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm94ZXMoZXYpIHtcclxuICBjb25zdCBjaGVja0JveElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxKSk7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gY2hlY2tCb3hJZCk7XHJcblxyXG4gIGlmIChwcm9qZWN0KSB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoIWV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgcHJvamVjdC5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghcHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdFdpdGhUYXNrID0gZmluZFByb2ooY2hlY2tCb3hJZCk7XHJcbiAgICBjb25zdCBvYmplY3QgPSBwcm9qZWN0V2l0aFRhc2sudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gY2hlY2tCb3hJZCk7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKCFldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBvYmplY3QuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRPYmplY3RzID0gb2JqLnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICAob2JqLnRhc2tzLmxlbmd0aCAhPT0gMCAmJiBjb21wbGV0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgfHxcclxuICAgICAgKG9iai50eXBlID09PSBcImRhaWx5XCIgJiYgZXYudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgb2JqLmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmouY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgb2JqLmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgT2JqZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3QgPSAocHJvaklkKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xyXG4gIGxldCBkdWVEYXRlID0gXCJcIjtcclxuICBsZXQgdHlwZSA9IGdldFR5cGUoKTtcclxuICBpZiAocHJvaklkID09PSB1bmRlZmluZWQgJiYgdHlwZSAhPT0gXCJkYWlseVwiICYmIHR5cGUgIT09IFwibm90ZXNcIikge1xyXG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgbWlkTmlnaHQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgZHVlRGF0ZSA9IG1pZE5pZ2h0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIGxldCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgaWYgKHR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVkSWQoKTtcclxuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICBhZGRPYmplY3QoXHJcbiAgICBwcm9qSWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE9iamVjdCA9IChcclxuICBwcm9qSWQsXHJcbiAgdGl0bGUsXHJcbiAgaWQsXHJcbiAgZHVlRGF0ZSxcclxuICBjb21wbGV0aW9uRGF0ZSxcclxuICBjb21wbGV0ZSxcclxuICBwcmlvcml0eSxcclxuICBub3RlLFxyXG4gIHR5cGVcclxuKSA9PiB7XHJcbiAgY29uc3QgbmV3T2JqZWN0ID0gbmV3IE9iamVjdChcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG4gIGlmIChwcm9qSWQgIT09IG51bGwgJiYgcHJvaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvaklkKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdPYmplY3QpO1xyXG4gIH1cclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVjayA9ICgpID0+IHtcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcbiAgZm9yIChjb25zdCBidXR0b24gb2YgcmFkaW8pIHtcclxuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLmlkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgcmV0dXJuIGFjdGl2ZVRhYi5pZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGhhbmRsZUVudGVyID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgZW50ZXJLZXlDb2RlID0gMTM7XHJcbiAgY29uc3QgcGFydGljdWxhckVsZW1lbnRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJhZGRQcm9qQnRuXCJdJyk7XHJcbiAgaWYgKHBhcnRpY3VsYXJFbGVtZW50SWQgJiYgZXYua2V5Q29kZSA9PT0gZW50ZXJLZXlDb2RlICYmICFldi5zaGlmdEtleSkge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgdmlldzogd2luZG93LFxyXG4gICAgfSk7XHJcbiAgICBwYXJ0aWN1bGFyRWxlbWVudElkLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUVzY2FwZSA9IChldikgPT4ge1xyXG4gIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXYua2V5ID09PSBcIkVzY1wiKSB7XHJcbiAgICBjbGVhclBvcFVwKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGBcclxuICA8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcbiAgPHVsIGNsYXNzPVwibmF2VWxcIj5cclxuICAgIDxsaSBpZD1cInByb2pcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPlByb2plY3Q8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZGFpbHlcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPkRhaWx5PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cImV2ZW50c1wiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RXZlbnRzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cIm5vdGVzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5Ob3Rlczwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9uYXY+YDtcclxuXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGhlYWRlcik7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4ge1xyXG4gIGxldCB2YWx1ZSA9IDA7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKyt2YWx1ZTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBnZW5lcmF0ZWRJZCA9IGdlbmVyYXRlSWQoKTtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxpemF0aW9uID0gKHBpZWNlMSwgcGllY2UyLCBwaWVjZTMpID0+IHtcclxuICBwaWVjZTEoKTtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pcIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgcGllY2UyKCk7XHJcbiAgcGllY2UzKCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9iamVjdChcclxuICB0aXRsZSxcclxuICBpZCxcclxuICBkdWVEYXRlLFxyXG4gIGNvbXBsZXRpb25EYXRlLFxyXG4gIGNvbXBsZXRlLFxyXG4gIHByaW9yaXR5LFxyXG4gIG5vdGUsXHJcbiAgdHlwZVxyXG4pIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5pZCA9IGlkO1xyXG4gIHRoaXMudGFza3MgPSBbXTtcclxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIHRoaXMuY29tcGxldGlvbkRhdGUgPSBjb21wbGV0aW9uRGF0ZTtcclxuICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIHRoaXMubm90ZSA9IG5vdGU7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxuICB0aGlzLmFkZGVkRGF0ZSA9IGdldERhdGUoKTtcclxufVxyXG5cclxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmNvbnN0IGJpbiA9IFtdO1xyXG5cclxuY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBtaWROaWdodEFoZWFkID0gbmV3IERhdGUoKTtcclxuICBtaWROaWdodEFoZWFkLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMik7XHJcbiAgbWlkTmlnaHRBaGVhZC5zZXRIb3VycygwLCAwLCAwKTtcclxuICBjb25zdCBtaWROaWdodCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBtaWROaWdodC5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEpO1xyXG4gIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gIGNvbnN0IHRlbkFnbyA9IG5ldyBEYXRlKCk7XHJcbiAgdGVuQWdvLnNldFNlY29uZHMoY3VycmVudERhdGUuZ2V0U2Vjb25kcygpIC0gMTApO1xyXG4gIGNvbnN0IHR3b0hvdXJzQWdvID0gbmV3IERhdGUoKTtcclxuICB0d29Ib3Vyc0Fnby5zZXRIb3Vycyh0d29Ib3Vyc0Fnby5nZXRIb3VycygpIC0gMik7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LnR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlICYmXHJcbiAgICAgICAgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBvYmplY3QuY29tcGxldGUgPT09IGZhbHNlICYmXHJcbiAgICAgICAgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodEFoZWFkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqZWN0LnR5cGUgPT09IFwicHJvalwiICYmXHJcbiAgICAgICAgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlICYmXHJcbiAgICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlIDw9IHR3b0hvdXJzQWdvKSB8fFxyXG4gICAgICAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgJiYgb2JqZWN0LmR1ZURhdGUgPD0gdHdvSG91cnNBZ28pXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICBjb25zdCBzcGxpY2VkID0gcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgYmluLnB1c2goc3BsaWNlZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlQ29tcGxldGVkKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qKSA9PiBwcm9qLmlkID09PSB0YXJnZXRJZCk7XHJcbiAgaWYgKFxyXG4gICAgKHByb2plY3QgIT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0ICE9PSBudWxsKSAmJlxyXG4gICAgZXYudGFyZ2V0LmlkLnNsaWNlKDAsIDIpID09IFwiZHBcIlxyXG4gICkge1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3QsIDEpO1xyXG4gICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHcke3RhcmdldElkfWApO1xyXG4gICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pXaXRoVGFzayA9IHByb2plY3RzLmZpbmQoKHByb2opID0+XHJcbiAgICAgIHByb2oudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFyZ2V0SWQpXHJcbiAgICApO1xyXG4gICAgaWYgKHByb2pXaXRoVGFzaykge1xyXG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qV2l0aFRhc2sudGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZFxyXG4gICAgICApO1xyXG4gICAgICBwcm9qV2l0aFRhc2sudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B0JHt0YXJnZXRJZH1gKTtcclxuICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGFpbHlQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIGRhaWx5Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RGFpbHlUYXNrXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBEYWlseTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdEYWlseVRhc2tcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyBlZGl0SXRlbSB9IGZyb20gXCIuL2VkaXRJdGVtXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHN3aXRjaFByaW9yaXR5IH0gZnJvbSBcIi4vc3dpdGNoUHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFZGl0UG9wVXAgPSAoZXYpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihldi5pZC5zbGljZSgyKSk7XHJcbiAgbGV0IG9iamVjdDtcclxuICBpZiAoZXYuaWQuc2xpY2UoMCwgMikgIT09IFwicHRcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHByb2plY3Q7XHJcbiAgfSBlbHNlIGlmIChldi5pZC5zbGljZSgwLCAyKSA9PT0gXCJwdFwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2ooaWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgb2JqZWN0ID0gdGFzaztcclxuICB9XHJcbiAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPVxyXG4gICAgb2JqZWN0LnR5cGUgIT09IFwiZGFpbHlcIlxyXG4gICAgICA/IGA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiJHtvYmplY3QuZHVlRGF0ZX1cIj5gXHJcbiAgICAgIDogXCJcIjtcclxuXHJcbiAgaWYgKG9iamVjdC50eXBlID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGNvbnN0IG5vdGUgPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiZWRpdFRhc2tcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke29iamVjdC50aXRsZX1cIiBhdXRvZm9jdXMgLz5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibm90ZURhdGVcIj4ke29iamVjdC5hZGRlZERhdGV9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgJHtvYmplY3QucHJpb3JpdHl9XCIgZGF0YS1wcmlvcml0eT1cIiR7b2JqZWN0LnByaW9yaXR5fVwiIGlkPVwibm90ZVByaW9yaXR5JHtvYmplY3QuaWR9XCI+TTwvZGl2PlxyXG4gICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHtvYmplY3Qubm90ZX08L3RleHRhcmVhPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke29iamVjdC5pZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5vdGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiZWRpdFRhc2tcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIiR7XHJcbiAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgfVwiIGF1dG9mb2N1cyAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImxhYmVsXCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwibG93XCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcIm1lZFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwiaGlnaFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgICAke2R1ZURhdGVFbGVtZW50fVxyXG4gICAgPHAgY2xhc3M9XCJ0YXNrQ29tcGxldGlvbkRhdGVcIj5cclxuICAgICAgICAke1xyXG4gICAgICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID09PSBudWxsXHJcbiAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICA6IGBDb21wbGV0ZWQgb246JHtvYmplY3QuY29tcGxldGlvbkRhdGV9YFxyXG4gICAgICAgIH1cclxuICAgICAgPC9wPlxyXG4gICAgPGxhYmVsIGZvcj1cIm5vdGVcIiBjbGFzcz1cImxhYmVsXCI+Tm90ZTo8L2xhYmVsPlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPiR7XHJcbiAgICAgIG9iamVjdC5ub3RlXHJcbiAgICB9PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7aWR9XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIH1cclxuICBsaXN0ZW5lcnMoZXYuaWQpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZFByb2pCdG4ke2lkLnNsaWNlKDIpfWApO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcclxuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZU1hcmtcIik7XHJcbiAgaWYgKHByaW9yaXR5QnRuKSB7XHJcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoUHJpb3JpdHkpO1xyXG4gIH1cclxuICBpZiAoaWQuc2xpY2UoMCwgMikgIT09IFwicHRcIikge1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgIGVkaXRJdGVtKGV2LnRhcmdldCk7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgIGVkaXRJdGVtKGV2LnRhcmdldCk7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUG9wVXApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxubGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5sZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuY29uc3QgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuY29uc3QgbW9udGhzID0gW1xyXG4gIFwiSmFudWFyeVwiLFxyXG4gIFwiRmVicnVhcnlcIixcclxuICBcIk1hcmNoXCIsXHJcbiAgXCJBcHJpbFwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5lXCIsXHJcbiAgXCJKdWx5XCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIlNlcHRlbWJlclwiLFxyXG4gIFwiT2N0b2JlclwiLFxyXG4gIFwiTm92ZW1iZXJcIixcclxuICBcIkRlY2VtYmVyXCIsXHJcbl07XHJcbmNvbnN0IHdlZWtEYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFdmVudHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImV2ZW50c0NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhdGVXcmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBiYWNrd2FyZFwiIGlkPVwiYmFja3dhcmRcIj5CPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiY3VycmVudERhdGVcIj48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBmb3J3YXJkXCIgaWQ9XCJmb3J3YXJkXCI+RjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJXcmFwcGVyXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImhlYWRpbmdzXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPk1vbjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlR1ZTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPldlZDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlRodTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPkZyaTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlNhdDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlN1bjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNhbGVuZGFyRGF5c1wiPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXZlbnROb3RlV3JhcHBlclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiAgICBcclxuICAgIGA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGV2ZW50c1BhZ2UpO1xyXG4gIHJlbmRlckNhbGVuZGFyKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhciA9ICgpID0+IHtcclxuICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGVuZGFyRGF5c1wiKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudERhdGVcIik7XHJcbiAgY29uc3QgZGF0ZVN0cmluZyA9IGZpcnN0RGF0ZU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tZXVcIiwge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGFzdERhdGVPZkxhc3RNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5c0luTW9udGgpLmdldERheSgpO1xyXG4gIGNvbnN0IHBhZGRpbmdEYXlzID0gd2Vla0RheXMuaW5kZXhPZihkYXRlU3RyaW5nLnNwbGl0KFwiLFwiKVswXSk7XHJcbiAgbGV0IGNhbGVuZGFyRGF5ID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gcGFkZGluZ0RheXM7IGkgPiAwOyAtLWkpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhEYXkgPSBsYXN0RGF0ZU9mTGFzdE1vbnRoIC0gaSArIDE7XHJcbiAgICBpZiAoXHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgcHJldmlvdXNNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBwcmV2aW91c01vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU3VuZGF5XCJcclxuICAgICkge1xyXG4gICAgICBjYWxlbmRhckRheSArPSBgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXkgIHdlZWtFbmQgaW5hY3RpdmUgYmFja3dhcmRcIj4ke1xyXG4gICAgICAgIGxhc3REYXRlT2ZMYXN0TW9udGggLSBpICsgMVxyXG4gICAgICB9PC9saT4gYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGVuZGFyRGF5ICs9IGA8bGkgY2xhc3M9XCJjYWxlbmRhckRheSBpbmFjdGl2ZSBiYWNrd2FyZFwiPiR7XHJcbiAgICAgICAgbGFzdERhdGVPZkxhc3RNb250aCAtIGkgKyAxXHJcbiAgICAgIH08L2xpPiBgO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYWRkaW5nRGF5cyArIGRheXNJbk1vbnRoOyBpKyspIHtcclxuICAgIGlmIChpID4gcGFkZGluZ0RheXMpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGkgLSBwYWRkaW5nRGF5cyA9PT0gZGF5ICYmXHJcbiAgICAgICAgbW9udGggPT09IGN1cnJlbnRNb250aCAmJlxyXG4gICAgICAgIHllYXIgPT09IGN1cnJlbnRZZWFyXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNhbGVuZGFyRGF5ICs9IGA8bGkgY2xhc3M9XCJjYWxlbmRhckRheSBjdXJyZW50RGF5XCIgaWQ9XCJjdXJyZW50RGF5XCI+JHtcclxuICAgICAgICAgIGkgLSBwYWRkaW5nRGF5c1xyXG4gICAgICAgIH08L2xpPiBgO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoLCBpIC0gcGFkZGluZ0RheXMgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSAtIHBhZGRpbmdEYXlzIC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgICAgXCJTdW5kYXlcIlxyXG4gICAgICApIHtcclxuICAgICAgICBjYWxlbmRhckRheSArPSBgPGxpIGNsYXNzPVwiY2FsZW5kYXJEYXkgd2Vla0VuZCBkYXlcIj4ke1xyXG4gICAgICAgICAgaSAtIHBhZGRpbmdEYXlzXHJcbiAgICAgICAgfTwvbGk+IGA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsZW5kYXJEYXkgKz0gYDxsaSBjbGFzcz1cImNhbGVuZGFyRGF5IGRheVwiPiR7aSAtIHBhZGRpbmdEYXlzfTwvbGk+IGA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IGxhc3REYXlPZk1vbnRoOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXh0TW9udGhEYXkgPSBpIC0gbGFzdERheU9mTW9udGggKyAxO1xyXG4gICAgaWYgKFxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIG5leHRNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBuZXh0TW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTdW5kYXlcIlxyXG4gICAgKSB7XHJcbiAgICAgIGNhbGVuZGFyRGF5ICs9IGA8bGkgY2xhc3M9XCJjYWxlbmRhckRheSB3ZWVrRW5kIGluYWN0aXZlIGZvcndhcmRcIj4ke25leHRNb250aERheX08L2xpPiBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsZW5kYXJEYXkgKz0gYDxsaSBjbGFzcz1cImNhbGVuZGFyRGF5IGluYWN0aXZlIGZvcndhcmRcIj4ke25leHRNb250aERheX08L2xpPiBgO1xyXG4gICAgfVxyXG4gIH1cclxuICBjYWxlbmRhckNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY2FsZW5kYXJEYXkpO1xyXG4gIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9yd2FyZEJhY2t3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcnJvd1wiKTtcclxuICBjb25zdCBjYWxlbmRhckRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbGVuZGFyRGF5XCIpO1xyXG4gIGZvcndhcmRCYWNrd2FyZC5mb3JFYWNoKChhcnJvdykgPT4ge1xyXG4gICAgYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrTGlzdGVuZXIpO1xyXG4gICAgYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrTGlzdGVuZXIpO1xyXG4gIH0pO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tMaXN0ZW5lcik7XHJcbiAgICBkYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrTGlzdGVuZXIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2xpY2tMaXN0ZW5lciA9IChldikgPT4ge1xyXG4gIGNsZWFyQ2FsZW5kYXIoKTtcclxuICBjaGFuZ2VNb250aChldik7XHJcbiAgcmVuZGVyQ2FsZW5kYXIoKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjYWxlbmRhckRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICBkYXkucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VNb250aCA9IChldikgPT4ge1xyXG4gIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSkge1xyXG4gICAgbW9udGggKz0gMTtcclxuICAgIGlmIChtb250aCA+IDExKSB7XHJcbiAgICAgIG1vbnRoID0gMDtcclxuICAgICAgeWVhciArPSAxO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpKSB7XHJcbiAgICBtb250aCAtPSAxO1xyXG4gICAgaWYgKG1vbnRoIDwgMCkge1xyXG4gICAgICBtb250aCA9IDExO1xyXG4gICAgICB5ZWFyIC09IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyBnZXRPYmplY3QgfSBmcm9tIFwiLi9nZXRPYmplY3RcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IHN3aXRjaFByaW9yaXR5IH0gZnJvbSBcIi4vc3dpdGNoUHJpb3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHZXRQb3BVcCA9IChvYmpJZCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGxldCBvYmplY3RJZCA9IG9iaklkO1xyXG5cclxuICBpZiAob2JqSWQgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcclxuICAgIG9iamVjdElkID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBsZXQgZGF0ZUVsZW1lbnQgPVxyXG4gICAgb2JqZWN0SWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIj5gXHJcbiAgICAgIDogXCJcIjtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB9XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBjb25zdCBub3RlID0gYDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIFwiIGF1dG9mb2N1cyAvPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJub3RlRGF0ZVwiPjwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGVNYXJrIGxvd1wiIGRhdGEtcHJpb3JpdHk9XCJsb3dcIiBpZD1cIm5vdGVQcmlvcml0eVwiPk08L2Rpdj5cclxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0blwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBub3RlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImFkZFRhc2tcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBhdXRvZm9jdXMvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImxhYmVsXCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgY2hlY2tlZCAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDxsYWJlbCBmb3I9XCJub3RlXCIgY2xhc3M9XCJsYWJlbFwiPk5vdGU6PC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3RJZH1cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKG9iamVjdElkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChvYmpJZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbaWRePVwiYWRkUHJvakJ0blwiXWApO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcclxuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZU1hcmtcIik7XHJcbiAgaWYgKHByaW9yaXR5QnRuKSB7XHJcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoUHJpb3JpdHkpO1xyXG4gIH1cclxuICBpZiAobmV3UHJvaikge1xyXG4gICAgbmV3UHJvai5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgICBpZiAob2JqSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgZXZJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMTApKTtcclxuICAgICAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgZ2V0T2JqZWN0KGV2SWQpO1xyXG4gICAgICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgICAgICBnZXRPYmplY3QoKTtcclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck5vdGVzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lciBub3Rlc0NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZXdOb3RlXCIgaWQ9XCJuZXdOb3RlXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld05vdGVfX3BcIj5BZGQgTm90ZTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdOb3RlXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0Q29tcGxldGlvbiB9IGZyb20gXCIuL2dldENvbXBsZXRpb25cIjtcclxuaW1wb3J0IHsgc29ydEFycmF5IH0gZnJvbSBcIi4vc29ydEFycmF5XCI7XHJcbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tIFwiLi9yZW1vdmVJdGVtXCI7XHJcbmltcG9ydCB7IHJlbmRlckVkaXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckVkaXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwiLi9maWx0ZXJCeVR5cGVcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlEYXRlIH0gZnJvbSBcIi4vZmlsdGVyQnlEYXRlXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyT2JqZWN0cyA9ICgpID0+IHtcclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICBjb25zdCBhcnJheU9mVHlwZSA9IGZpbHRlckJ5VHlwZShwcm9qZWN0cyk7XHJcbiAgbGV0IGRhaWx5QXJyYXkgPSBzb3J0QXJyYXkoYXJyYXlPZlR5cGUpO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBcnJheSA9IGZpbHRlckJ5RGF0ZShwcm9qZWN0cyk7XHJcbiAgfVxyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwibm90ZXNcIikge1xyXG4gICAgZGFpbHlBcnJheS5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgcmVuZGVyTm90ZXMob2JqZWN0KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYWlseUFycmF5LmZvckVhY2goKHByb2opID0+IHtcclxuICAgICAgcmVuZGVyT2JqZWN0KHByb2opO1xyXG4gICAgICByZW5kZXJQcm9qVGFzayhwcm9qKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBsaXN0ZW5lcnMoKTtcclxuICBnZXRDb21wbGV0aW9uKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJPYmplY3QgPSAocHJvaikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdENvbnRhaW5lclwiKTtcclxuICBsZXQgY2hlY2tFbGVtZW50ID0gXCJcIjtcclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke3Byb2ouaWR9XCI+RDwvcD5gO1xyXG4gIGxldCBhZGRUYXNrID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJuZXdUYXNrXCIgaWQ9XCJudCR7cHJvai5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJuZXdUYXNrX19wXCI+QWRkIHRhc2s8L3A+XHJcbiAgPC9kaXY+YDtcclxuICBpZiAocHJvai50eXBlID09PSBcImRhaWx5XCIgJiYgcHJvai50YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNoZWNrRWxlbWVudCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjb21wbGV0aW9uXCIgbmFtZT1cImNvbXBsZXRpb25cIiBpZD1cIiR7XCJjXCJ9JHtcclxuICAgICAgcHJvai5pZFxyXG4gICAgfVwiICAke2NoZWNrKHByb2ouY29tcGxldGUpfS8+YDtcclxuICB9XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiICYmIHByb2oudHlwZSA9PT0gXCJwcm9qXCIpIHtcclxuICAgIGFkZFRhc2sgPSBcIlwiO1xyXG4gICAgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfVxyXG4gIGNvbnN0IGR1ZURhdGUgPSBgPHAgY2xhc3M9XCJvYmpEYXRlXCI+RHVlOiR7cHJvai5kdWVEYXRlfTwvcD5gO1xyXG4gIGNvbnN0IE9iamVjdCA9IGBcclxuPGRpdiBjbGFzcz1cIm9iamVjdFdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke3Byb2ouaWR9XCI+XHJcbjxkaXYgY2xhc3M9XCJvYmplY3QgJHtwcm9qLnByaW9yaXR5fSAke3Byb2ouY29tcGxldGV9XCIgaWQ9XCIke1wicHBcIn0ke3Byb2ouaWR9XCI+XHJcbiR7Y2hlY2tFbGVtZW50fVxyXG4gIDxwIGNsYXNzPVwib2JqVGl0bGVcIj4ke3Byb2oudGl0bGV9PC9wPlxyXG4gICR7cHJvai50eXBlICE9PSBcImRhaWx5XCIgPyBkdWVEYXRlIDogXCJcIn1cclxuICA8cCBjbGFzcz1cIm9iak5vdGVcIj4ke3Byb2oubm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgJHtkZWxldGVFbGVtZW50fVxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInRhc2tXcmFwcGVyXCIgaWQ9XCJ0dyR7cHJvai5pZH1cIj5cclxuJHthZGRUYXNrfVxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE9iamVjdCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJOb3RlcyA9IChvYmplY3QpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgTm90ZSA9IGA8ZGl2IGNsYXNzPVwibm90ZVdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke29iamVjdC5pZH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9iamVjdFwiIGlkPVwibm8ke29iamVjdC5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlVGl0bGVcIiBpZD1cIm50JHtvYmplY3QuaWR9XCI+JHtvYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJuZCR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0LmFkZGVkRGF0ZX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayAke29iamVjdC5wcmlvcml0eX1cIiBpZD1cIm5tJHtvYmplY3QuaWR9XCI+TVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtvYmplY3QuaWR9XCI+RDwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlQm9keVwiIGlkPVwibmIke29iamVjdC5pZH1cIj4ke29iamVjdC5ub3RlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE5vdGUpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXdUYXNrXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2JqZWN0XCIpO1xyXG4gIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5UYXNrXCIpO1xyXG4gIGNvbnN0IG1hcmtOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlTWFya1wiKTtcclxuICBuZXdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmV3VGFza1wiKTtcclxuICAgICAgcmVuZGVyR2V0UG9wVXAodGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUl0ZW0pO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJlbW92ZUl0ZW0oZXYpO1xyXG4gICAgICByZW5kZXJPYmplY3RzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBwcm9qZWN0QnRucy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJFZGl0UG9wVXApO1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdFwiKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGlvblwiKSAmJlxyXG4gICAgICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZU1hcmtcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVuZGVyRWRpdFBvcFVwKHRhcmdldCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHRhc2tCdG5zLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckVkaXRQb3BVcCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIuVGFza1wiKTtcclxuICAgICAgaWYgKCFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGlvblwiKSkge1xyXG4gICAgICAgIHJlbmRlckVkaXRQb3BVcCh0YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBtYXJrTm90ZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIHN3aXRjaFByaW9yaXR5KGV2KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgcHJvamVjdHNDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdQcm9qXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBQcm9qZWN0PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2pcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalRhc2sgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtvYmouaWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IG9iai5pZCk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xyXG4gIGxldCBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICBsZXQgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgICBkYXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID09PSBudWxsID8gXCJcIiA6IHRhc2suY29tcGxldGlvbkRhdGVcclxuICAgICAgfTwvcD5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiICYmIHByb2plY3QudHlwZSA9PT0gXCJwcm9qXCIpIHtcclxuICAgICAgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gYDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkdCR7dGFzay5pZH1cIj5EPC9wPmA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFzayAke3Rhc2sucHJpb3JpdHl9ICR7dGFzay5jb21wbGV0ZX1cIiBpZD1cInB0JHt0YXNrLmlkfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCJjJHtcclxuICAgICAgICAgdGFzay5pZFxyXG4gICAgICAgfVwiICAke2NoZWNrKHRhc2suY29tcGxldGUpfS8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxyXG4gICAgICAgJHtkYXRlRWxlbWVudH1cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tOb3RlXCI+JHt0YXNrLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICAgICAgICR7ZGVsZXRlRWxlbWVudH1cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2soY29tcGxldGUpIHtcclxuICBpZiAoY29tcGxldGUpIHtcclxuICAgIHJldHVybiAnY2hlY2tlZD1cImNoZWNrZWRcIic7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGVkaXRQcmlvcml0eSB9IGZyb20gXCIuL2VkaXRQcmlvcml0eVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXYudGFyZ2V0LmlkfWApO1xyXG4gIGlmIChwcmlvckVsZW1lbnQpIHtcclxuICAgIGlmIChwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG93XCIpKSB7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIFwiaGlnaFwiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBcImxvd1wiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2pQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUHJvalBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRXZlbnRzUGFnZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRGFpbHlQYWdlIH0gZnJvbSBcIi4vcmVuZGVyRGFpbHlQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXphdGlvbiB9IGZyb20gXCIuL2luaXRpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL2NsZWFyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJOb3Rlc1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJEYWlseVBhZ2UsIHJlbmRlckZvb3Rlcik7XHJcblxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmF2TGlcIik7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclBhZ2UoXHJcbiAgICAgIHRhcmdldC5pZCxcclxuICAgICAgcmVuZGVyUHJvalBhZ2UsXHJcbiAgICAgIHJlbmRlckRhaWx5UGFnZSxcclxuICAgICAgcmVuZGVyRXZlbnRzUGFnZSxcclxuICAgICAgcmVuZGVyTm90ZXNQYWdlXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQsIDEwMDAgKiAxMjApO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFbnRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==