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

/* PROJ */
.listContainer {
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}

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
  grid-template-columns: 3fr 1fr 0.5fr 0.5fr;
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

/* COPMLETED */

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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,0CAA0C;EAC1C,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gDAAgD;EAChD,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,aAAa;;AAEb;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,WAAW;;AAEX;EACE,kBAAkB;AACpB;AACA;AACA;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,wCAAwC;EACxC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 10vh 86vh 4vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 1rem 2rem;\r\n  background-color: greenyellow;\r\n}\r\n.navLi {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* PROJ */\r\n.listContainer {\r\n  padding: 1rem 2rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.newObject {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 0.5fr 0.5fr;\r\n  background-color: gray;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 4fr 1fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 4fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.low {\r\n  background-color: green;\r\n}\r\n.med {\r\n  background-color: yellow;\r\n}\r\n.high {\r\n  background-color: red;\r\n}\r\n\r\n/* COPMLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.479);\r\n  overflow: hidden;\r\n  place-items: center;\r\n}\r\n\r\n.popUpfield {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 5fr;\r\n  background-color: white;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
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
  const page = document.querySelectorAll(".container");
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
  const renderedProjects = document.querySelectorAll(".objectWrapper");
  renderedProjects.forEach((proj) => {
    proj.remove();
  });
};


/***/ }),

/***/ "./src/clearRenderedTasks.js":
/*!***********************************!*\
  !*** ./src/clearRenderedTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearRenderedTasks: () => (/* binding */ clearRenderedTasks)
/* harmony export */ });
const clearRenderedTasks = () => {
  const renderedProjects = document.querySelectorAll(".Task");
  renderedProjects.forEach((task) => {
    task.remove();
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
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");
/* harmony import */ var _renderProjTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjTask */ "./src/renderProjTask.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getType */ "./src/getType.js");





const editItem = (ev) => {
  const Id = Number(ev.id.slice(10));
  const title = document.querySelector("#title").value;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const projectId = findProj(Id)?.id;
  const type = (0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)();
  if (projectId !== undefined) {
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === projectId);
    const task = project.tasks.find((task) => task.id === Id);
    if (task) {
      task.title = title;
      task.priority = priority;
      task.note = note;
    }
    (0,_renderProjTask__WEBPACK_IMPORTED_MODULE_2__.renderProjTask)(projectId);
  } else if (projectId === undefined) {
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === Id);
    if (project) {
      if (project.type === "daily") {
        project.title = title;
        project.priority = priority;
        project.note = note;
      } else {
        const dueDate = document.querySelector("#date").value;
        project.title = title;
        project.dueDate = dueDate;
        project.priority = priority;
        project.note = note;
      }
    }
  }
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__.renderActualProj)();
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
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getType */ "./src/getType.js");






const getObject = (projId) => {
  const title = document.querySelector("#title").value;
  let dueDate = "";
  let type = (0,_getType__WEBPACK_IMPORTED_MODULE_4__.getType)();
  if (projId === undefined && type !== "daily") {
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
  const priority = check();
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
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_2__.renderActualProj)();
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

/***/ "./src/getProjectCompletion.js":
/*!*************************************!*\
  !*** ./src/getProjectCompletion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectCompletion: () => (/* binding */ getProjectCompletion)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");



const getProjectCompletion = () => {
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    const completedProjects = project.tasks.filter((task) => !task.complete);
    const currentDate = new Date();
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    if (project.tasks.length !== 0 && completedProjects.length === 0) {
      project.complete = true;
      project.completionDate = currentDate;
    } else {
      project.complete = false;
      project.completionDate = null;
    }
  });
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__.renderActualProj)();
};


/***/ }),

/***/ "./src/getTaskCompletion.js":
/*!**********************************!*\
  !*** ./src/getTaskCompletion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTaskCompletion: () => (/* binding */ getTaskCompletion)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _getProjectCompletion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProjectCompletion */ "./src/getProjectCompletion.js");



const getTaskCompletion = () => {
  const boxes = document.querySelectorAll('[name="completion"]');
  boxes.forEach((box) => {
    box.removeEventListener("change", checkBoxes);
    box.addEventListener("change", (ev) => {
      ev.stopPropagation();
      checkBoxes(ev);
      (0,_getProjectCompletion__WEBPACK_IMPORTED_MODULE_1__.getProjectCompletion)();
    });
  });
};

function checkBoxes(ev) {
  const checkBoxId = Number(ev.target.id.slice(1));
  const projectId = Number(ev.target.parentElement.parentElement.id.slice(2));
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === projectId);
  const task = project.tasks.find((task) => task.id === checkBoxId);
  const currentDate = new Date();
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formattedDateTime = currentDate.toLocaleString("en-US", options);
  if (ev.target.checked) {
    task.complete = true;
    task.completionDate = formattedDateTime;
  } else {
    task.complete = false;
    task.completionDate = null;
  }
}


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
/* harmony export */   checkDueDatesAndRemoveCompleted: () => (/* binding */ checkDueDatesAndRemoveCompleted),
/* harmony export */   removeCompleted: () => (/* binding */ removeCompleted)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");


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
      console.log("object.dueDate:", object.dueDate);
      console.log("currentDate", currentDate);
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
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__.renderActualProj)();
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
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");



const renderDailyPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer container">
  <div class="newObject" id="newDailyTask">
    <p class="newObject__p">Add Daily</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_0__.renderActualProj)();
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
/* harmony import */ var _clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedTasks */ "./src/clearRenderedTasks.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");






const renderEditPopUp = (ev) => {
  const container = document.querySelector("main");
  const id = Number(ev.id.slice(2));
  let object;
  if (ev.id.slice(0, 2) === "pp") {
    const project = _projects__WEBPACK_IMPORTED_MODULE_4__.projects.find((project) => project.id === id);
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
  listeners(ev.id);
};

const listeners = (id) => {
  const addBtn = document.querySelector(`#addProjBtn${id.slice(2)}`);
  const closeBtn = document.querySelector("#closeBtn");
  if (id.slice(0, 2) === "pp") {
    addBtn.addEventListener("click", (ev) => {
      (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__.clearRenderedProjects)();
      (0,_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(ev.target);
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    });
  } else if (id.slice(0, 2) === "pt") {
    addBtn.addEventListener("click", (ev) => {
      (0,_clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__.clearRenderedTasks)();
      (0,_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(ev.target);
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    });
  }

  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};

function findProj(id) {
  for (const proj of _projects__WEBPACK_IMPORTED_MODULE_4__.projects) {
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
/* harmony export */   renderEvents: () => (/* binding */ renderEvents)
/* harmony export */ });
const renderEvents = () => {
  const container = document.querySelector("main");

  const eventsPage = `     
    `;

  container.insertAdjacentHTML("afterbegin", eventsPage);
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
/* harmony import */ var _clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedTasks */ "./src/clearRenderedTasks.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getType */ "./src/getType.js");






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
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_4__.getType)() === "daily") {
    dateElement = "";
  }

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
  listeners(objectId);
};

const listeners = (objId) => {
  const newProj = document.querySelector(`#addProjBtn${objId}`);
  const closeBtn = document.querySelector("#closeBtn");
  newProj.addEventListener("click", (ev) => {
    if (objId !== undefined) {
      const evId = Number(ev.target.id.slice(10));
      (0,_clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__.clearRenderedTasks)();
      (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.getObject)(evId);
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    } else if (objId === undefined) {
      (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__.clearRenderedProjects)();
      (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.getObject)();
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    }
  });
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
/* harmony export */   renderNotes: () => (/* binding */ renderNotes)
/* harmony export */ });
const renderNotes = () => {
  const container = document.querySelector("main");
  const projPage = `
    `;

  container.insertAdjacentHTML("afterbegin", projPage);
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
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");



const renderProjPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer container">
  <div class="newObject" id="newProj">
    <p class="newObject__p">Add Project</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_0__.renderActualProj)();
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
/* harmony import */ var _renderEditPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderEditPopUp */ "./src/renderEditPopUp.js");



const renderProjTask = (id) => {
  const container = document.querySelector(`#tw${id}`);
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((proj) => proj.id === id);
  const tasks = project.tasks;
  let dateElement = "";
  tasks.forEach((task) => {
    if (project.type !== "daily") {
      dateElement = `<p class="taskDate">${
        task.completionDate === null ? "" : task.completionDate
      }</p>`;
    }
    const newTask = `
      <div class="Task ${task.priority} ${task.complete}" id="${"pt"}${
      task.id
    }">
       <input type="checkbox" class="completion" name="completion" id="${"c"}${
      task.id
    }"  ${check(task.complete)}/>
        <p class="taskTitle">${task.title}</p>
       ${dateElement}
        <p class="taskNote">${task.note === "" ? "" : "N"}</p>
        <p class="delete" id="${"dt"}${task.id}">D</p>
      </div>
`;
    container.insertAdjacentHTML("beforeend", newTask);
  });
  listeners();
};

const listeners = () => {
  const taskBtns = document.querySelectorAll(".Task");
  taskBtns.forEach((task) => {
    task.removeEventListener("click", _renderEditPopUp__WEBPACK_IMPORTED_MODULE_1__.renderEditPopUp);
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".Task");
      if (!ev.target.classList.contains("completion")) {
        (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_1__.renderEditPopUp)(target);
      }
    });
  });
};

function check(complete) {
  if (complete) {
    return 'checked="checked"';
  }
}


/***/ }),

/***/ "./src/renderProject.js":
/*!******************************!*\
  !*** ./src/renderProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderActualProj: () => (/* binding */ renderActualProj)
/* harmony export */ });
/* harmony import */ var _renderProjTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjTask */ "./src/renderProjTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderGetPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGetPopUp */ "./src/renderGetPopUp.js");
/* harmony import */ var _getTaskCompletion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTaskCompletion */ "./src/getTaskCompletion.js");
/* harmony import */ var _sortArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortArray */ "./src/sortArray.js");
/* harmony import */ var _removeItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeItem */ "./src/removeItem.js");
/* harmony import */ var _renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderEditPopUp */ "./src/renderEditPopUp.js");
/* harmony import */ var _filterByType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterByType */ "./src/filterByType.js");
/* harmony import */ var _filterByDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filterByDate */ "./src/filterByDate.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getType */ "./src/getType.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");












const renderActualProj = () => {
  (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__.clearRenderedProjects)();
  const container = document.querySelector(".listContainer");
  const arrayOfType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_7__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  let dailyArray = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(arrayOfType);
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily") {
    dailyArray = (0,_filterByDate__WEBPACK_IMPORTED_MODULE_8__.filterByDate)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  }
  dailyArray.forEach((proj) => {
    const dueDate = `<p class="objDate">Due:${proj.dueDate}</p>`;
    const projPage = `
    <div class="objectWrapper" id="${"pw"}${proj.id}">
    <div class="object ${proj.priority} ${proj.complete}" id="${"pp"}${
      proj.id
    }">
      <p class="objTitle">${proj.title}</p>
      ${proj.type !== "daily" ? dueDate : ""}
      <p class="objNote">${proj.note === "" ? "" : "N"}</p>
      <p class="delete" id="${"dp"}${proj.id}">D</p>
    </div>
    <div class="taskWrapper" id="${"tw"}${proj.id}">
    <div class="newTask" id="nt${proj.id}">
          <p class="newTask__p">Add task</p>
        </div>
      </div>
    </div>
  </div>`;
    container.insertAdjacentHTML("beforeend", projPage);
    (0,_renderProjTask__WEBPACK_IMPORTED_MODULE_0__.renderProjTask)(proj.id);
  });
  listeners();
  (0,_getTaskCompletion__WEBPACK_IMPORTED_MODULE_3__.getTaskCompletion)();
};

const listeners = () => {
  const newTasks = document.querySelectorAll(".newTask");
  const deleteBtns = document.querySelectorAll(".delete");
  const projectBtns = document.querySelectorAll(".object");
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
    });
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", _renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".object");
      (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp)(target);
    });
  });
};


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














(0,_initialization__WEBPACK_IMPORTED_MODULE_6__.initialization)(_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader, _renderProjPage__WEBPACK_IMPORTED_MODULE_2__.renderProjPage, _footer__WEBPACK_IMPORTED_MODULE_5__.renderFooter);

const buttons = document.querySelectorAll(".navLi");
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const target = ev.target.closest(".navLi");
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_7__.clearPage)();
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_8__.renderPage)(
      target.id,
      _renderProjPage__WEBPACK_IMPORTED_MODULE_2__.renderProjPage,
      _renderDailyPage__WEBPACK_IMPORTED_MODULE_4__.renderDailyPage,
      _renderEventsPage__WEBPACK_IMPORTED_MODULE_3__.renderEvents,
      _renderNotesPage__WEBPACK_IMPORTED_MODULE_9__.renderNotes
    );
  });
});

setInterval(_removeCompleted__WEBPACK_IMPORTED_MODULE_12__.checkDueDatesAndRemoveCompleted, 1000 * 10);
document.addEventListener("keydown", _handleEscape__WEBPACK_IMPORTED_MODULE_10__.handleEscape);
document.addEventListener("keydown", _handleEnter__WEBPACK_IMPORTED_MODULE_11__.handleEnter);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEtBQUssZUFBZSwwQkFBMEIsY0FBYyxvQkFBb0Isd0NBQXdDLHlCQUF5QixLQUFLLG9DQUFvQyxtQkFBbUIsb0JBQW9CLDRDQUE0Qyx5QkFBeUIsb0NBQW9DLEtBQUssWUFBWSw0QkFBNEIseUJBQXlCLEtBQUssZ0NBQWdDLGdCQUFnQix1QkFBdUIsdUJBQXVCLEtBQUssc0NBQXNDLHlCQUF5QixvQkFBb0Isc0NBQXNDLGtCQUFrQixLQUFLLG9CQUFvQixtQkFBbUIsMkJBQTJCLDZCQUE2QixLQUFLLHdCQUF3QixvQkFBb0Isc0NBQXNDLGtCQUFrQixLQUFLLGFBQWEsbUJBQW1CLDJCQUEyQixvQkFBb0IsaURBQWlELDZCQUE2QixrQkFBa0IsS0FBSyxzQkFBc0IsMkJBQTJCLG9CQUFvQixzQ0FBc0Msa0JBQWtCLEtBQUssV0FBVyxtQkFBbUIsMkJBQTJCLDZCQUE2QixvQkFBb0IsdURBQXVELGtCQUFrQixLQUFLLGNBQWMsbUJBQW1CLDJCQUEyQiw2QkFBNkIsb0JBQW9CLDZDQUE2QyxrQkFBa0IsS0FBSyxlQUFlLG9CQUFvQix3QkFBd0IsS0FBSyxvQ0FBb0MsOEJBQThCLEtBQUssVUFBVSwrQkFBK0IsS0FBSyxXQUFXLDRCQUE0QixLQUFLLHNDQUFzQyxtQkFBbUIsS0FBSyxZQUFZLGlCQUFpQixLQUFLLG9DQUFvQyx5QkFBeUIsS0FBSyx1QkFBdUIsS0FBSyw0Q0FBNEMsb0JBQW9CLGtCQUFrQixvQkFBb0Isc0JBQXNCLGFBQWEsY0FBYywrQ0FBK0MsdUJBQXVCLDBCQUEwQixLQUFLLHFCQUFxQixrQkFBa0Isc0NBQXNDLG9CQUFvQiwwQ0FBMEMsOEJBQThCLG9CQUFvQixrQkFBa0IseUJBQXlCLGlCQUFpQixLQUFLLDBCQUEwQixvQkFBb0IsNENBQTRDLEtBQUssdUJBQXVCO0FBQzcySDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9KMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSE87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTCtDO0FBQ0k7QUFDRDtBQUNkO0FBQ3BDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBTztBQUN0QjtBQUNBLG9CQUFvQiwrQ0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFjO0FBQ2xCLElBQUk7QUFDSixvQkFBb0IsK0NBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeERPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDhDO0FBQ0Y7QUFDTztBQUNhO0FBQzVCO0FBQ3BDO0FBQ087QUFDUDtBQUNBO0FBQ0EsYUFBYSxpREFBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQVE7QUFDbkM7QUFDQSxJQUFJO0FBQ0osSUFBSSwrQ0FBUTtBQUNaO0FBQ0EsRUFBRSw2RUFBcUI7QUFDdkIsRUFBRSxnRUFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VzQztBQUNhO0FBQ25EO0FBQ087QUFDUCxFQUFFLCtDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnRUFBZ0I7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJzQztBQUN3QjtBQUM5RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyRUFBb0I7QUFDMUIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWjBDO0FBQzFDO0FBQ087QUFDUDtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCc0M7QUFDYTtBQUNuRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVE7QUFDOUIsUUFBUSwrQ0FBUTtBQUNoQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQVE7QUFDOUIsUUFBUSwrQ0FBUTtBQUNoQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFRO0FBQzVCLHNCQUFzQiwrQ0FBUTtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0VBQWdCO0FBQ2xCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHNDO0FBQ3RDO0FBQ087QUFDUDtBQUNBLGtCQUFrQiwrQ0FBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWixxREFBcUQsU0FBUztBQUM5RDtBQUNBLElBQUk7QUFDSix5QkFBeUIsK0NBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm1EO0FBQ0Q7QUFDbEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0VBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMkRBQWM7QUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEIwQztBQUNKO0FBQ29CO0FBQ007QUFDMUI7QUFDdEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFRO0FBQzVCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGVBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0RBQWdELEdBQUc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFlBQVk7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBcUI7QUFDM0IsTUFBTSxtREFBUTtBQUNkLE1BQU0sdURBQVU7QUFDaEIsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLE1BQU0sdUVBQWtCO0FBQ3hCLE1BQU0sbURBQVE7QUFDZCxNQUFNLHVEQUFVO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUNBQXFDLG1EQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQztBQUNGO0FBQ2tCO0FBQ007QUFDNUI7QUFDcEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE1BQU07QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVFQUFrQjtBQUN4QixNQUFNLHFEQUFTO0FBQ2YsTUFBTSx1REFBVTtBQUNoQixNQUFNO0FBQ04sTUFBTSw2RUFBcUI7QUFDM0IsTUFBTSxxREFBUztBQUNmLE1BQU0sdURBQVU7QUFDaEI7QUFDQSxHQUFHO0FBQ0gscUNBQXFDLG1EQUFVO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7QUM3RE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1AsNENBQTRDLEdBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJtRDtBQUNEO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDJEQUFjO0FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCc0M7QUFDYztBQUNwRDtBQUNPO0FBQ1AsaURBQWlELEdBQUc7QUFDcEQsa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EseUJBQXlCLGVBQWUsRUFBRSxjQUFjLFFBQVEsS0FBSztBQUNyRTtBQUNBLEtBQUs7QUFDTCx5RUFBeUUsSUFBSTtBQUM3RTtBQUNBLEtBQUssS0FBSyxxQkFBcUI7QUFDL0IsK0JBQStCLFdBQVc7QUFDMUMsU0FBUztBQUNULDhCQUE4Qiw0QkFBNEI7QUFDMUQsZ0NBQWdDLEtBQUssRUFBRSxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkRBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBZTtBQUN2QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRrRDtBQUNaO0FBQ1k7QUFDTTtBQUNoQjtBQUNFO0FBQ1U7QUFDTjtBQUNBO0FBQ1Y7QUFDNEI7QUFDaEU7QUFDTztBQUNQLEVBQUUsOEVBQXFCO0FBQ3ZCO0FBQ0Esc0JBQXNCLDJEQUFZLENBQUMsK0NBQVE7QUFDM0MsbUJBQW1CLHFEQUFTO0FBQzVCLE1BQU0saURBQU87QUFDYixpQkFBaUIsMkRBQVksQ0FBQywrQ0FBUTtBQUN0QztBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQSxxQ0FBcUMsS0FBSyxFQUFFLFFBQVE7QUFDcEQseUJBQXlCLGVBQWUsRUFBRSxjQUFjLFFBQVEsS0FBSztBQUNyRTtBQUNBLEtBQUs7QUFDTCw0QkFBNEIsV0FBVztBQUN2QyxRQUFRO0FBQ1IsMkJBQTJCLDRCQUE0QjtBQUN2RCw4QkFBOEIsS0FBSyxFQUFFLFFBQVE7QUFDN0M7QUFDQSxtQ0FBbUMsS0FBSyxFQUFFLFFBQVE7QUFDbEQsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBYztBQUNsQixHQUFHO0FBQ0g7QUFDQSxFQUFFLHFFQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFjO0FBQ3BCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxxQ0FBcUMsbURBQVU7QUFDL0M7QUFDQTtBQUNBLE1BQU0sdURBQVU7QUFDaEIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLHlDQUF5Qyw2REFBZTtBQUN4RDtBQUNBO0FBQ0EsTUFBTSxpRUFBZTtBQUNyQixLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUN0RU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ1U7QUFDQTtBQUNFO0FBQ1o7QUFDVTtBQUNWO0FBQ0U7QUFDTTtBQUNGO0FBQ0Y7QUFDd0I7QUFDcEU7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsMkRBQWMsRUFBRSxpREFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksdURBQVU7QUFDZDtBQUNBLE1BQU0sMkRBQWM7QUFDcEIsTUFBTSw2REFBZTtBQUNyQixNQUFNLDJEQUFZO0FBQ2xCLE1BQU0seURBQVc7QUFDakI7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsWUFBWSw4RUFBK0I7QUFDM0MscUNBQXFDLHdEQUFZO0FBQ2pELHFDQUFxQyxzREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJSZW5kZXJlZFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUmVuZGVyZWRUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeURhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0UHJvamVjdENvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0VGFza0NvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0VHlwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVFbnRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVFc2NhcGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2lkR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luaXRpYWxpemF0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckRhaWx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFZGl0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJHZXRQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJOb3Rlc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC8qIFZBUklBQkxFUyAqL1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NnZoIDR2aDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIEhFQURFUiAqL1xyXG5cclxuLm5hdlVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcclxufVxyXG4ubmF2TGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIE1BSU4gKi9cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qIFBST0ogKi9cclxuLmxpc3RDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5uZXdPYmplY3Qge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ub2JqZWN0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5vYmplY3Qge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAwLjVmciAwLjVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udGFza1dyYXBwZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uVGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmciAxZnIgMC41ZnIgMC41ZnI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLm5ld1Rhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMC41ZnIgMC41ZnI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLnRhc2tEYXRlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4vKiBQUklPUklUWSAqL1xyXG5cclxuLmxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuLm1lZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5oaWdoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qIENPUE1MRVRFRCAqL1xyXG5cclxuLnRydWUge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZmFsc2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEZPT1RFUiAqL1xyXG5cclxuZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3RlckE6YW55LWxpbmsge1xyXG59XHJcblxyXG4vKiBQT1BVUCAqL1xyXG5cclxuLnBvcFVwQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQ3OSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9wVXBmaWVsZCB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcmlvcml0eVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAvKiBWQVJJQUJMRVMgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg2dmggNHZoO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5cXHJcXG4ubmF2VWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXHJcXG59XFxyXFxuLm5hdkxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFBST0ogKi9cXHJcXG4ubGlzdENvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3T2JqZWN0IHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm9iamVjdFdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm9iamVjdCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrV3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5UYXNrIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmciAxZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm5ld1Rhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDAuNWZyIDAuNWZyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBSSU9SSVRZICovXFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuLm1lZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcbi5oaWdoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09QTUxFVEVEICovXFxyXFxuXFxyXFxuLnRydWUge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uZmFsc2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb3RlckE6YW55LWxpbmsge1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQT1BVUCAqL1xcclxcblxcclxcbi5wb3BVcENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQ3OSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwZmllbGQge1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNzAwcHgpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgNWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHlXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY2xlYXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHBhZ2UuZm9yRWFjaCgocGFnZSkgPT4gcGFnZS5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgcG9wVXBzLmZvckVhY2goKHBvcFVwKSA9PiBwb3BVcC5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclJlbmRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2JqZWN0V3JhcHBlclwiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcclxuICAgIHByb2oucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclJlbmRlcmVkVGFza3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVGFza1wiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgSWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMTApKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGZpbmRQcm9qKElkKT8uaWQ7XHJcbiAgY29uc3QgdHlwZSA9IGdldFR5cGUoKTtcclxuICBpZiAocHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gSWQpO1xyXG4gICAgaWYgKHRhc2spIHtcclxuICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRhc2subm90ZSA9IG5vdGU7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQcm9qVGFzayhwcm9qZWN0SWQpO1xyXG4gIH0gZWxzZSBpZiAocHJvamVjdElkID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBJZCk7XHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICBpZiAocHJvamVjdC50eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgICAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgcHJvamVjdC5ub3RlID0gbm90ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJBY3R1YWxQcm9qKCk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVjayA9ICgpID0+IHtcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcbiAgZm9yIChjb25zdCBidXR0b24gb2YgcmFkaW8pIHtcclxuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLmlkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBmaWx0ZXJCeURhdGUgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCB0eXBlT3JkZXIgPSB7XHJcbiAgICBldmVudHM6IDEsXHJcbiAgICBwcm9qOiAyLFxyXG4gICAgZGFpbHk6IDMsXHJcbiAgfTtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgd2l0aGluVHdlbnR5Rm91ckhvdXJzID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gIHdpdGhpblR3ZW50eUZvdXJIb3Vycy5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgIHJldHVybiBkdWVEYXRlID49IGN1cnJlbnREYXRlICYmIGR1ZURhdGUgPD0gd2l0aGluVHdlbnR5Rm91ckhvdXJzO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHNvcnRlZEJ5UHJpb3JpdHkgPSBmaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlQ29tcCA9IHR5cGVPcmRlclthLnR5cGVdIC0gdHlwZU9yZGVyW2IudHlwZV07XHJcbiAgICBpZiAodHlwZUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHR5cGVDb21wO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmaWx0ZXJCeVR5cGUgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBnZXRUeXBlKCkpO1xyXG4gIHJldHVybiBmaWx0ZXJlZDtcclxufTtcclxuY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICByZXR1cm4gYWN0aXZlVGFiLmlkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGBcclxuICA8YVxyXG4gIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFya2VzdG9mVGltZXNcIlxyXG4gIGNsYXNzPVwiZm9vdGVyQVwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICA+RGFya1RpbWVzPC9hXHJcbj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZm9vdGVyKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIE9iamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0ID0gKHByb2pJZCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBsZXQgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgbGV0IHR5cGUgPSBnZXRUeXBlKCk7XHJcbiAgaWYgKHByb2pJZCA9PT0gdW5kZWZpbmVkICYmIHR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgbWlkTmlnaHQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgZHVlRGF0ZSA9IG1pZE5pZ2h0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gY2hlY2soKTtcclxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qTm90ZVwiKS52YWx1ZTtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgYWRkT2JqZWN0KFxyXG4gICAgcHJvaklkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBjb21wbGV0aW9uRGF0ZSxcclxuICAgIGNvbXBsZXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3RlLFxyXG4gICAgdHlwZVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRPYmplY3QgPSAoXHJcbiAgcHJvaklkLFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikgPT4ge1xyXG4gIGNvbnN0IG5ld09iamVjdCA9IG5ldyBPYmplY3QoXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxuICBpZiAocHJvaklkICE9PSBudWxsICYmIHByb2pJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2pJZCk7XHJcbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld09iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgcmVuZGVyQWN0dWFsUHJvaigpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0Q29tcGxldGlvbiA9ICgpID0+IHtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRQcm9qZWN0cyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcclxuICAgICAgdGltZVpvbmVOYW1lOiBcInNob3J0XCIsXHJcbiAgICB9O1xyXG4gICAgaWYgKHByb2plY3QudGFza3MubGVuZ3RoICE9PSAwICYmIGNvbXBsZXRlZFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgcHJvamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICByZW5kZXJBY3R1YWxQcm9qKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdENvbXBsZXRpb24gfSBmcm9tIFwiLi9nZXRQcm9qZWN0Q29tcGxldGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhc2tDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveGVzKTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldikgPT4ge1xyXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY2hlY2tCb3hlcyhldik7XHJcbiAgICAgIGdldFByb2plY3RDb21wbGV0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm94ZXMoZXYpIHtcclxuICBjb25zdCBjaGVja0JveElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxKSk7XHJcbiAgY29uc3QgcHJvamVjdElkID0gTnVtYmVyKGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgc2Vjb25kOiBcIjItZGlnaXRcIixcclxuICAgIHRpbWVab25lTmFtZTogXCJzaG9ydFwiLFxyXG4gIH07XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZVRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xyXG4gIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgdGFzay5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICB0YXNrLmNvbXBsZXRpb25EYXRlID0gZm9ybWF0dGVkRGF0ZVRpbWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2suY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHRhc2suY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICByZXR1cm4gYWN0aXZlVGFiLmlkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXYpID0+IHtcclxuICBjb25zdCBlbnRlcktleUNvZGUgPSAxMztcclxuICBjb25zdCBwYXJ0aWN1bGFyRWxlbWVudElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImFkZFByb2pCdG5cIl0nKTtcclxuICBpZiAocGFydGljdWxhckVsZW1lbnRJZCAmJiBldi5rZXlDb2RlID09PSBlbnRlcktleUNvZGUgJiYgIWV2LnNoaWZ0S2V5KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICB9KTtcclxuICAgIHBhcnRpY3VsYXJFbGVtZW50SWQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRXNjYXBlID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldi5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICA8dWwgY2xhc3M9XCJuYXZVbFwiPlxyXG4gICAgPGxpIGlkPVwicHJvalwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+UHJvamVjdDwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJkYWlseVwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RGFpbHk8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZXZlbnRzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5FdmVudHM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwibm90ZXNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPk5vdGVzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gMDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiArK3ZhbHVlO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGdlbmVyYXRlZElkID0gZ2VuZXJhdGVJZCgpO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvalwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwaWVjZTIoKTtcclxuICBwaWVjZTMoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0KFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmlkID0gaWQ7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5jb21wbGV0aW9uRGF0ZSA9IGNvbXBsZXRpb25EYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMuYWRkZWREYXRlID0gZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gY3VycmVudERhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuY29uc3QgYmluID0gW107XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBtaWROaWdodEFoZWFkID0gbmV3IERhdGUoKTtcclxuICBtaWROaWdodEFoZWFkLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMik7XHJcbiAgbWlkTmlnaHRBaGVhZC5zZXRIb3VycygwLCAwLCAwKTtcclxuICBjb25zdCBtaWROaWdodCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBtaWROaWdodC5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEpO1xyXG4gIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gIGNvbnN0IHRlbkFnbyA9IG5ldyBEYXRlKCk7XHJcbiAgdGVuQWdvLnNldFNlY29uZHMoY3VycmVudERhdGUuZ2V0U2Vjb25kcygpIC0gMTApO1xyXG4gIGNvbnN0IHR3b0hvdXJzQWdvID0gbmV3IERhdGUoKTtcclxuICB0d29Ib3Vyc0Fnby5zZXRIb3Vycyh0d29Ib3Vyc0Fnby5nZXRIb3VycygpIC0gMik7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LnR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9iamVjdC5kdWVEYXRlOlwiLCBvYmplY3QuZHVlRGF0ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudERhdGVcIiwgY3VycmVudERhdGUpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlICYmXHJcbiAgICAgICAgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBvYmplY3QuY29tcGxldGUgPT09IGZhbHNlICYmXHJcbiAgICAgICAgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodEFoZWFkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqZWN0LnR5cGUgPT09IFwicHJvalwiICYmXHJcbiAgICAgICAgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlICYmXHJcbiAgICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlIDw9IHR3b0hvdXJzQWdvKSB8fFxyXG4gICAgICAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgJiYgb2JqZWN0LmR1ZURhdGUgPD0gdHdvSG91cnNBZ28pXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICBjb25zdCBzcGxpY2VkID0gcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgYmluLnB1c2goc3BsaWNlZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVuZGVyQWN0dWFsUHJvaigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlQ29tcGxldGVkKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qKSA9PiBwcm9qLmlkID09PSB0YXJnZXRJZCk7XHJcbiAgaWYgKFxyXG4gICAgKHByb2plY3QgIT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0ICE9PSBudWxsKSAmJlxyXG4gICAgZXYudGFyZ2V0LmlkLnNsaWNlKDAsIDIpID09IFwiZHBcIlxyXG4gICkge1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3QsIDEpO1xyXG4gICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHcke3RhcmdldElkfWApO1xyXG4gICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pXaXRoVGFzayA9IHByb2plY3RzLmZpbmQoKHByb2opID0+XHJcbiAgICAgIHByb2oudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFyZ2V0SWQpXHJcbiAgICApO1xyXG4gICAgaWYgKHByb2pXaXRoVGFzaykge1xyXG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qV2l0aFRhc2sudGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZFxyXG4gICAgICApO1xyXG4gICAgICBwcm9qV2l0aFRhc2sudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B0JHt0YXJnZXRJZH1gKTtcclxuICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJBY3R1YWxQcm9qIH0gZnJvbSBcIi4vcmVuZGVyUHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGFpbHlQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZXdPYmplY3RcIiBpZD1cIm5ld0RhaWx5VGFza1wiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgRGFpbHk8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICByZW5kZXJBY3R1YWxQcm9qKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3RGFpbHlUYXNrXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZWRpdEl0ZW0gfSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkVGFza3MgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkVGFza3NcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFZGl0UG9wVXAgPSAoZXYpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihldi5pZC5zbGljZSgyKSk7XHJcbiAgbGV0IG9iamVjdDtcclxuICBpZiAoZXYuaWQuc2xpY2UoMCwgMikgPT09IFwicHBcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHByb2plY3Q7XHJcbiAgfSBlbHNlIGlmIChldi5pZC5zbGljZSgwLCAyKSA9PT0gXCJwdFwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2ooaWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgb2JqZWN0ID0gdGFzaztcclxuICB9XHJcbiAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPVxyXG4gICAgb2JqZWN0LnR5cGUgIT09IFwiZGFpbHlcIlxyXG4gICAgICA/IGA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiJHtvYmplY3QuZHVlRGF0ZX1cIj5gXHJcbiAgICAgIDogXCJcIjtcclxuXHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke1xyXG4gICAgICBvYmplY3QudGl0bGVcclxuICAgIH1cIiBhdXRvZm9jdXMgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImxvd1wiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJtZWRcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImhpZ2hcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkdWVEYXRlRWxlbWVudH1cclxuICAgIDxwIGNsYXNzPVwidGFza0NvbXBsZXRpb25EYXRlXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbFxyXG4gICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgOiBgQ29tcGxldGVkIG9uOiR7b2JqZWN0LmNvbXBsZXRpb25EYXRlfWBcclxuICAgICAgICB9XHJcbiAgICAgIDwvcD5cclxuICAgIDxsYWJlbCBmb3I9XCJub3RlXCIgY2xhc3M9XCJsYWJlbFwiPk5vdGU6PC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj4ke1xyXG4gICAgICBvYmplY3Qubm90ZVxyXG4gICAgfTwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke2lkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgbGlzdGVuZXJzKGV2LmlkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGRQcm9qQnRuJHtpZC5zbGljZSgyKX1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgaWYgKGlkLnNsaWNlKDAsIDIpID09PSBcInBwXCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRUYXNrcygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJFdmVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgICAgICBcclxuICAgIGA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGV2ZW50c1BhZ2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyBnZXRPYmplY3QgfSBmcm9tIFwiLi9nZXRPYmplY3RcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFRhc2tzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFRhc2tzXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdldFBvcFVwID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbGV0IG9iamVjdElkID0gb2JqSWQ7XHJcblxyXG4gIGlmIChvYmpJZCBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgb2JqZWN0SWQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9XHJcbiAgICBvYmplY3RJZCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gYDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiPmBcclxuICAgICAgOiBcIlwiO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImFkZFRhc2tcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBhdXRvZm9jdXMvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImxhYmVsXCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgY2hlY2tlZCAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDxsYWJlbCBmb3I9XCJub3RlXCIgY2xhc3M9XCJsYWJlbFwiPk5vdGU6PC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3RJZH1cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgbGlzdGVuZXJzKG9iamVjdElkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChvYmpJZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkUHJvakJ0biR7b2JqSWR9YCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnRuXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgaWYgKG9iaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgZXZJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMTApKTtcclxuICAgICAgY2xlYXJSZW5kZXJlZFRhc2tzKCk7XHJcbiAgICAgIGdldE9iamVjdChldklkKTtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfSBlbHNlIGlmIChvYmpJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBnZXRPYmplY3QoKTtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlck5vdGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gICAgYDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJBY3R1YWxQcm9qIH0gZnJvbSBcIi4vcmVuZGVyUHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3UHJvalwiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgUHJvamVjdDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlckFjdHVhbFByb2ooKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJFZGl0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJFZGl0UG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qVGFzayA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0dyR7aWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IGlkKTtcclxuICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC50eXBlICE9PSBcImRhaWx5XCIpIHtcclxuICAgICAgZGF0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJ0YXNrRGF0ZVwiPiR7XHJcbiAgICAgICAgdGFzay5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbCA/IFwiXCIgOiB0YXNrLmNvbXBsZXRpb25EYXRlXHJcbiAgICAgIH08L3A+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJUYXNrICR7dGFzay5wcmlvcml0eX0gJHt0YXNrLmNvbXBsZXRlfVwiIGlkPVwiJHtcInB0XCJ9JHtcclxuICAgICAgdGFzay5pZFxyXG4gICAgfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCIke1wiY1wifSR7XHJcbiAgICAgIHRhc2suaWRcclxuICAgIH1cIiAgJHtjaGVjayh0YXNrLmNvbXBsZXRlKX0vPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFza1RpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgICR7ZGF0ZUVsZW1lbnR9XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrTm90ZVwiPiR7dGFzay5ub3RlID09PSBcIlwiID8gXCJcIiA6IFwiTlwifTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiJHtcImR0XCJ9JHt0YXNrLmlkfVwiPkQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBuZXdUYXNrKTtcclxuICB9KTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVGFza1wiKTtcclxuICB0YXNrQnRucy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJFZGl0UG9wVXApO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLlRhc2tcIik7XHJcbiAgICAgIGlmICghZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikpIHtcclxuICAgICAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0VGFza0NvbXBsZXRpb24gfSBmcm9tIFwiLi9nZXRUYXNrQ29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBzb3J0QXJyYXkgfSBmcm9tIFwiLi9zb3J0QXJyYXlcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gXCIuL3JlbW92ZUl0ZW1cIjtcclxuaW1wb3J0IHsgcmVuZGVyRWRpdFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyRWRpdFBvcFVwXCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gXCIuL2ZpbHRlckJ5VHlwZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeURhdGUgfSBmcm9tIFwiLi9maWx0ZXJCeURhdGVcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyQWN0dWFsUHJvaiA9ICgpID0+IHtcclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgYXJyYXlPZlR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gIGxldCBkYWlseUFycmF5ID0gc29ydEFycmF5KGFycmF5T2ZUeXBlKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIpIHtcclxuICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeURhdGUocHJvamVjdHMpO1xyXG4gIH1cclxuICBkYWlseUFycmF5LmZvckVhY2goKHByb2opID0+IHtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBgPHAgY2xhc3M9XCJvYmpEYXRlXCI+RHVlOiR7cHJvai5kdWVEYXRlfTwvcD5gO1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwib2JqZWN0V3JhcHBlclwiIGlkPVwiJHtcInB3XCJ9JHtwcm9qLmlkfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm9iamVjdCAke3Byb2oucHJpb3JpdHl9ICR7cHJvai5jb21wbGV0ZX1cIiBpZD1cIiR7XCJwcFwifSR7XHJcbiAgICAgIHByb2ouaWRcclxuICAgIH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJvYmpUaXRsZVwiPiR7cHJvai50aXRsZX08L3A+XHJcbiAgICAgICR7cHJvai50eXBlICE9PSBcImRhaWx5XCIgPyBkdWVEYXRlIDogXCJcIn1cclxuICAgICAgPHAgY2xhc3M9XCJvYmpOb3RlXCI+JHtwcm9qLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiJHtcImRwXCJ9JHtwcm9qLmlkfVwiPkQ8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrV3JhcHBlclwiIGlkPVwiJHtcInR3XCJ9JHtwcm9qLmlkfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5ld1Rhc2tcIiBpZD1cIm50JHtwcm9qLmlkfVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJuZXdUYXNrX19wXCI+QWRkIHRhc2s8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgcHJvalBhZ2UpO1xyXG4gICAgcmVuZGVyUHJvalRhc2socHJvai5pZCk7XHJcbiAgfSk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbiAgZ2V0VGFza0NvbXBsZXRpb24oKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmV3VGFza1wiKTtcclxuICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XHJcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9iamVjdFwiKTtcclxuICBuZXdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmV3VGFza1wiKTtcclxuICAgICAgcmVuZGVyR2V0UG9wVXAodGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUl0ZW0pO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJlbW92ZUl0ZW0oZXYpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcHJvamVjdEJ0bnMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyRWRpdFBvcFVwKTtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5vYmplY3RcIik7XHJcbiAgICAgIHJlbmRlckVkaXRQb3BVcCh0YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvalBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJQcm9qUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJFdmVudHMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckRhaWx5UGFnZSB9IGZyb20gXCIuL3JlbmRlckRhaWx5UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tIFwiLi9pbml0aWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyTm90ZXMgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJQcm9qUGFnZSwgcmVuZGVyRm9vdGVyKTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkxpXCIpO1xyXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5uYXZMaVwiKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUGFnZShcclxuICAgICAgdGFyZ2V0LmlkLFxyXG4gICAgICByZW5kZXJQcm9qUGFnZSxcclxuICAgICAgcmVuZGVyRGFpbHlQYWdlLFxyXG4gICAgICByZW5kZXJFdmVudHMsXHJcbiAgICAgIHJlbmRlck5vdGVzXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQsIDEwMDAgKiAxMCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVudGVyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9