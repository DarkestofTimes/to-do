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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,gDAAgD;EAChD,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gDAAgD;EAChD,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,aAAa;;AAEb;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,WAAW;;AAEX;EACE,kBAAkB;AACpB;AACA;AACA;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,wCAAwC;EACxC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 10vh 86vh 4vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 1rem 2rem;\r\n  background-color: greenyellow;\r\n}\r\n.navLi {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* PROJ */\r\n.listContainer {\r\n  padding: 1rem 2rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.newObject {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 3fr 1fr 0.5fr 0.5fr;\r\n  background-color: gray;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 4fr 1fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 4fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.low {\r\n  background-color: green;\r\n}\r\n.med {\r\n  background-color: yellow;\r\n}\r\n.high {\r\n  background-color: red;\r\n}\r\n\r\n/* COPMLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.479);\r\n  overflow: hidden;\r\n  place-items: center;\r\n}\r\n\r\n.popUpfield {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 5fr;\r\n  background-color: white;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");



const getCompletion = () => {
  const boxes = document.querySelectorAll('[name="completion"]');
  boxes.forEach((box) => {
    box.removeEventListener("change", checkBoxes);
    box.addEventListener("change", (ev) => {
      ev.stopPropagation();
      checkBoxes(ev);
      (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__.renderActualProj)();
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
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





const renderEditPopUp = (ev) => {
  const container = document.querySelector("main");
  const id = Number(ev.id.slice(2));
  let object;
  if (ev.id.slice(0, 2) === "pp") {
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
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getType */ "./src/getType.js");





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
      (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
      (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.getObject)(evId);
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    } else if (objId === undefined) {
      (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
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
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCompletion */ "./src/getCompletion.js");
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
  let checkElement = "";
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily") {
    dailyArray = (0,_filterByDate__WEBPACK_IMPORTED_MODULE_8__.filterByDate)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  }
  dailyArray.forEach((proj) => {
    if (proj.type === "daily" && proj.tasks.length === 0) {
      checkElement = `<input type="checkbox" class="completion" name="completion" id="${"c"}${
        proj.id
      }"  ${check(proj.complete)}/>`;
    }
    const dueDate = `<p class="objDate">Due:${proj.dueDate}</p>`;
    const projPage = `
    <div class="objectWrapper" id="${"pw"}${proj.id}">
    <div class="object ${proj.priority} ${proj.complete}" id="${"pp"}${
      proj.id
    }">
    ${checkElement}
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
  (0,_getCompletion__WEBPACK_IMPORTED_MODULE_3__.getCompletion)();
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
      renderActualProj();
    });
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", _renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".object");
      if (!ev.target.classList.contains("completion")) {
        (0,_renderEditPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditPopUp)(target);
      }
    });
  });
};

function check(complete) {
  if (complete) {
    return 'checked="checked"';
  } else {
    return "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ1U7QUFDQTtBQUNFO0FBQ1o7QUFDVTtBQUNWO0FBQ0U7QUFDTTtBQUNGO0FBQ0Y7QUFDd0I7QUFDcEU7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsMkRBQWMsRUFBRSxpREFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksdURBQVU7QUFDZDtBQUNBLE1BQU0sMkRBQWM7QUFDcEIsTUFBTSw2REFBZTtBQUNyQixNQUFNLDJEQUFZO0FBQ2xCLE1BQU0seURBQVc7QUFDakI7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsWUFBWSw4RUFBK0I7QUFDM0MscUNBQXFDLHdEQUFZO0FBQ2pELHFDQUFxQyxzREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJSZW5kZXJlZFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlckJ5RGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeVR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldENvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0T2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldFR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGFuZGxlRW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGFuZGxlRXNjYXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVtb3ZlSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJEYWlseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRWRpdFBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckV2ZW50c1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyR2V0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyTm90ZXNQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUHJvalBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUHJvalRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAvKiBWQVJJQUJMRVMgKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODZ2aCA0dmg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuXHJcbi5uYXZVbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuLm5hdkxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBNQUlOICovXHJcblxyXG5tYWluIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiBQUk9KICovXHJcbi5saXN0Q29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubmV3T2JqZWN0IHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm9iamVjdFdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ub2JqZWN0IHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDNmciAxZnIgMC41ZnIgMC41ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnRhc2tXcmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLlRhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnIgMWZyIDAuNWZyIDAuNWZyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5uZXdUYXNrIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDAuNWZyIDAuNWZyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi50YXNrRGF0ZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLyogUFJJT1JJVFkgKi9cclxuXHJcbi5sb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5tZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4uaGlnaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiBDT1BNTEVURUQgKi9cclxuXHJcbi50cnVlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhbHNlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBOmFueS1saW5rIHtcclxufVxyXG5cclxuLyogUE9QVVAgKi9cclxuXHJcbi5wb3BVcENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40NzkpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcFVwZmllbGQge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJpb3JpdHlXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLGFBQWE7O0FBRWI7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1Asd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogVkFSSUFCTEVTICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NnZoIDR2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLm5hdlVsIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxyXFxufVxcclxcbi5uYXZMaSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KICovXFxyXFxuLmxpc3RDb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld09iamVjdCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5vYmplY3RXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5vYmplY3Qge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAzZnIgMWZyIDAuNWZyIDAuNWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1dyYXBwZXIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4uVGFzayB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnIgMWZyIDAuNWZyIDAuNWZyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5uZXdUYXNrIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAwLjVmciAwLjVmcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4udGFza0RhdGUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUklPUklUWSAqL1xcclxcblxcclxcbi5sb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5tZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4uaGlnaCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIENPUE1MRVRFRCAqL1xcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmZhbHNlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXJBOmFueS1saW5rIHtcXHJcXG59XFxyXFxuXFxyXFxuLyogUE9QVVAgKi9cXHJcXG5cXHJcXG4ucG9wVXBDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40NzkpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcGZpZWxkIHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIik7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlcIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICBwYWdlLmZvckVhY2goKHBhZ2UpID0+IHBhZ2UucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJQb3BVcCA9ICgpID0+IHtcclxuICBjb25zdCBwb3BVcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIHBvcFVwcy5mb3JFYWNoKChwb3BVcCkgPT4gcG9wVXAucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJSZW5kZXJlZFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlcmVkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9iamVjdFdyYXBwZXJcIik7XHJcbiAgcmVuZGVyZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICBwcm9qLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckFjdHVhbFByb2ogfSBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2pUYXNrIH0gZnJvbSBcIi4vcmVuZGVyUHJvalRhc2tcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0SXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IElkID0gTnVtYmVyKGV2LmlkLnNsaWNlKDEwKSk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gY2hlY2soKTtcclxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qTm90ZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0SWQgPSBmaW5kUHJvaihJZCk/LmlkO1xyXG4gIGNvbnN0IHR5cGUgPSBnZXRUeXBlKCk7XHJcbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IElkKTtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0YXNrLm5vdGUgPSBub3RlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUHJvalRhc2socHJvamVjdElkKTtcclxuICB9IGVsc2UgaWYgKHByb2plY3RJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gSWQpO1xyXG4gICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgaWYgKHByb2plY3QudHlwZSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyQWN0dWFsUHJvaigpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlEYXRlID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgdHlwZU9yZGVyID0ge1xyXG4gICAgZXZlbnRzOiAxLFxyXG4gICAgcHJvajogMixcclxuICAgIGRhaWx5OiAzLFxyXG4gIH07XHJcbiAgY29uc3QgcHJpb3JpdHlPcmRlciA9IHtcclxuICAgIGxvdzogMyxcclxuICAgIG1lZDogMixcclxuICAgIGhpZ2g6IDEsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHdpdGhpblR3ZW50eUZvdXJIb3VycyA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICB3aXRoaW5Ud2VudHlGb3VySG91cnMuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZHVlRGF0ZSk7XHJcbiAgICByZXR1cm4gZHVlRGF0ZSA+PSBjdXJyZW50RGF0ZSAmJiBkdWVEYXRlIDw9IHdpdGhpblR3ZW50eUZvdXJIb3VycztcclxuICB9KTtcclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgdHlwZUNvbXAgPSB0eXBlT3JkZXJbYS50eXBlXSAtIHR5cGVPcmRlcltiLnR5cGVdO1xyXG4gICAgaWYgKHR5cGVDb21wICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiB0eXBlQ29tcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XSAtIHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzb3J0ZWRCeVByaW9yaXR5O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gZ2V0VHlwZSgpKTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbmNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgcmV0dXJuIGFjdGl2ZVRhYi5pZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXIgPSBgXHJcbiAgPGFcclxuICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rhcmtlc3RvZlRpbWVzXCJcclxuICBjbGFzcz1cImZvb3RlckFcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgPkRhcmtUaW1lczwvYVxyXG4+YDtcclxuXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGZvb3Rlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveGVzKTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldikgPT4ge1xyXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY2hlY2tCb3hlcyhldik7XHJcbiAgICAgIHJlbmRlckFjdHVhbFByb2ooKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCb3hlcyhldikge1xyXG4gIGNvbnN0IGNoZWNrQm94SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBjaGVja0JveElkKTtcclxuXHJcbiAgaWYgKHByb2plY3QpIHtcclxuICAgIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgcHJvamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKCFwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0V2l0aFRhc2sgPSBmaW5kUHJvaihjaGVja0JveElkKTtcclxuICAgIGNvbnN0IG9iamVjdCA9IHByb2plY3RXaXRoVGFzay50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBjaGVja0JveElkKTtcclxuICAgIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBvYmplY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoIWV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZE9iamVjdHMgPSBvYmoudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIChvYmoudGFza3MubGVuZ3RoICE9PSAwICYmIGNvbXBsZXRlZE9iamVjdHMubGVuZ3RoID09PSAwKSB8fFxyXG4gICAgICAob2JqLnR5cGUgPT09IFwiZGFpbHlcIiAmJiBldi50YXJnZXQuY2hlY2tlZClcclxuICAgICkge1xyXG4gICAgICBvYmouY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBvYmouY29tcGxldGlvbkRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iai5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBvYmouY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBPYmplY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZWRJZCB9IGZyb20gXCIuL2lkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHJlbmRlckFjdHVhbFByb2ogfSBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9iamVjdCA9IChwcm9qSWQpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgbGV0IGR1ZURhdGUgPSBcIlwiO1xyXG4gIGxldCB0eXBlID0gZ2V0VHlwZSgpO1xyXG4gIGlmIChwcm9qSWQgPT09IHVuZGVmaW5lZCAmJiB0eXBlICE9PSBcImRhaWx5XCIpIHtcclxuICAgIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBtaWROaWdodCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgIG1pZE5pZ2h0LnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICBtaWROaWdodC5zZXRIb3VycygwLCAwLCAwKTtcclxuICAgIGR1ZURhdGUgPSBtaWROaWdodDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICBjb25zdCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5vdGVcIikudmFsdWU7XHJcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZWRJZCgpO1xyXG4gIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XHJcblxyXG4gIGFkZE9iamVjdChcclxuICAgIHByb2pJZCxcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYWRkT2JqZWN0ID0gKFxyXG4gIHByb2pJZCxcclxuICB0aXRsZSxcclxuICBpZCxcclxuICBkdWVEYXRlLFxyXG4gIGNvbXBsZXRpb25EYXRlLFxyXG4gIGNvbXBsZXRlLFxyXG4gIHByaW9yaXR5LFxyXG4gIG5vdGUsXHJcbiAgdHlwZVxyXG4pID0+IHtcclxuICBjb25zdCBuZXdPYmplY3QgPSBuZXcgT2JqZWN0KFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBjb21wbGV0aW9uRGF0ZSxcclxuICAgIGNvbXBsZXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3RlLFxyXG4gICAgdHlwZVxyXG4gICk7XHJcbiAgaWYgKHByb2pJZCAhPT0gbnVsbCAmJiBwcm9qSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qSWQpO1xyXG4gICAgY3VycmVudFByb2plY3QudGFza3MucHVzaChuZXdPYmplY3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld09iamVjdCk7XHJcbiAgfVxyXG4gIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gIHJlbmRlckFjdHVhbFByb2ooKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICByZXR1cm4gYWN0aXZlVGFiLmlkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXYpID0+IHtcclxuICBjb25zdCBlbnRlcktleUNvZGUgPSAxMztcclxuICBjb25zdCBwYXJ0aWN1bGFyRWxlbWVudElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImFkZFByb2pCdG5cIl0nKTtcclxuICBpZiAocGFydGljdWxhckVsZW1lbnRJZCAmJiBldi5rZXlDb2RlID09PSBlbnRlcktleUNvZGUgJiYgIWV2LnNoaWZ0S2V5KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICB9KTtcclxuICAgIHBhcnRpY3VsYXJFbGVtZW50SWQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRXNjYXBlID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldi5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICA8dWwgY2xhc3M9XCJuYXZVbFwiPlxyXG4gICAgPGxpIGlkPVwicHJvalwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+UHJvamVjdDwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJkYWlseVwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RGFpbHk8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZXZlbnRzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5FdmVudHM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwibm90ZXNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPk5vdGVzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gMDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiArK3ZhbHVlO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGdlbmVyYXRlZElkID0gZ2VuZXJhdGVJZCgpO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvalwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwaWVjZTIoKTtcclxuICBwaWVjZTMoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0KFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmlkID0gaWQ7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5jb21wbGV0aW9uRGF0ZSA9IGNvbXBsZXRpb25EYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMuYWRkZWREYXRlID0gZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gY3VycmVudERhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuY29uc3QgYmluID0gW107XHJcblxyXG5jb25zdCByZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IG1pZE5pZ2h0QWhlYWQgPSBuZXcgRGF0ZSgpO1xyXG4gIG1pZE5pZ2h0QWhlYWQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAyKTtcclxuICBtaWROaWdodEFoZWFkLnNldEhvdXJzKDAsIDAsIDApO1xyXG4gIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gIG1pZE5pZ2h0LnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgbWlkTmlnaHQuc2V0SG91cnMoMCwgMCwgMCk7XHJcbiAgY29uc3QgdGVuQWdvID0gbmV3IERhdGUoKTtcclxuICB0ZW5BZ28uc2V0U2Vjb25kcyhjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCkgLSAxMCk7XHJcbiAgY29uc3QgdHdvSG91cnNBZ28gPSBuZXcgRGF0ZSgpO1xyXG4gIHR3b0hvdXJzQWdvLnNldEhvdXJzKHR3b0hvdXJzQWdvLmdldEhvdXJzKCkgLSAyKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmIChvYmplY3QudHlwZSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBvYmplY3QuY29tcGxldGUgPT09IHRydWUgJiZcclxuICAgICAgICBjdXJyZW50RGF0ZSA+PSBvYmplY3QuZHVlRGF0ZSAmJlxyXG4gICAgICAgIGN1cnJlbnREYXRlID49IG1pZE5pZ2h0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIG9iamVjdC5jb21wbGV0ZSA9PT0gZmFsc2UgJiZcclxuICAgICAgICBjdXJyZW50RGF0ZSA+PSBvYmplY3QuZHVlRGF0ZSAmJlxyXG4gICAgICAgIGN1cnJlbnREYXRlID49IG1pZE5pZ2h0QWhlYWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIChvYmplY3QudHlwZSA9PT0gXCJwcm9qXCIgJiZcclxuICAgICAgICBvYmplY3QuY29tcGxldGUgPT09IHRydWUgJiZcclxuICAgICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPD0gdHdvSG91cnNBZ28pIHx8XHJcbiAgICAgIChvYmplY3QudHlwZSA9PT0gXCJldmVudHNcIiAmJiBvYmplY3QuZHVlRGF0ZSA8PSB0d29Ib3Vyc0FnbylcclxuICAgICkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgIGNvbnN0IHNwbGljZWQgPSBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBiaW4ucHVzaChzcGxpY2VkKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZW5kZXJBY3R1YWxQcm9qKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCA9ICgpID0+IHtcclxuICByZW1vdmVDb21wbGV0ZWQoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXRJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBpZiAoXHJcbiAgICAocHJvamVjdCAhPT0gdW5kZWZpbmVkIHx8IHByb2plY3QgIT09IG51bGwpICYmXHJcbiAgICBldi50YXJnZXQuaWQuc2xpY2UoMCwgMikgPT0gXCJkcFwiXHJcbiAgKSB7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdCwgMSk7XHJcbiAgICBjb25zdCBwcm9qRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwdyR7dGFyZ2V0SWR9YCk7XHJcbiAgICBwcm9qRWxlbWVudC5yZW1vdmUoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvaldpdGhUYXNrID0gcHJvamVjdHMuZmluZCgocHJvaikgPT5cclxuICAgICAgcHJvai50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZClcclxuICAgICk7XHJcbiAgICBpZiAocHJvaldpdGhUYXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2pXaXRoVGFzay50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IHRhcmdldElkXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2pXaXRoVGFzay50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHQke3RhcmdldElkfWApO1xyXG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlckFjdHVhbFByb2ogfSBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJEYWlseVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RGFpbHlUYXNrXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBEYWlseTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlckFjdHVhbFByb2ooKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdEYWlseVRhc2tcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyBlZGl0SXRlbSB9IGZyb20gXCIuL2VkaXRJdGVtXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdFBvcFVwID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMikpO1xyXG4gIGxldCBvYmplY3Q7XHJcbiAgaWYgKGV2LmlkLnNsaWNlKDAsIDIpID09PSBcInBwXCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgICBvYmplY3QgPSBwcm9qZWN0O1xyXG4gIH0gZWxzZSBpZiAoZXYuaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qKGlkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHRhc2s7XHJcbiAgfVxyXG4gIGNvbnN0IGR1ZURhdGVFbGVtZW50ID1cclxuICAgIG9iamVjdC50eXBlICE9PSBcImRhaWx5XCJcclxuICAgICAgPyBgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImxhYmVsXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiB2YWx1ZT1cIiR7b2JqZWN0LmR1ZURhdGV9XCI+YFxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgb2JqZWN0LnRpdGxlXHJcbiAgICB9XCIgYXV0b2ZvY3VzIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiIGNsYXNzPVwibGFiZWxcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJsb3dcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibWVkXCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwibWVkXCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImhpZ2hcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJoaWdoXCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgICR7ZHVlRGF0ZUVsZW1lbnR9XHJcbiAgICA8cCBjbGFzcz1cInRhc2tDb21wbGV0aW9uRGF0ZVwiPlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPT09IG51bGxcclxuICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgIDogYENvbXBsZXRlZCBvbjoke29iamVjdC5jb21wbGV0aW9uRGF0ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3A+XHJcbiAgICA8bGFiZWwgZm9yPVwibm90ZVwiIGNsYXNzPVwibGFiZWxcIj5Ob3RlOjwvbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHtcclxuICAgICAgb2JqZWN0Lm5vdGVcclxuICAgIH08L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtpZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIGxpc3RlbmVycyhldi5pZCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoaWQpID0+IHtcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkUHJvakJ0biR7aWQuc2xpY2UoMil9YCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnRuXCIpO1xyXG4gIGlmIChpZC5zbGljZSgwLCAyKSA9PT0gXCJwcFwiKSB7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChpZC5zbGljZSgwLCAyKSA9PT0gXCJwdFwiKSB7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQb3BVcCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyRXZlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBldmVudHNQYWdlID0gYCAgICAgXHJcbiAgICBgO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBldmVudHNQYWdlKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0T2JqZWN0IH0gZnJvbSBcIi4vZ2V0T2JqZWN0XCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdldFBvcFVwID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbGV0IG9iamVjdElkID0gb2JqSWQ7XHJcblxyXG4gIGlmIChvYmpJZCBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgb2JqZWN0SWQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9XHJcbiAgICBvYmplY3RJZCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gYDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiPmBcclxuICAgICAgOiBcIlwiO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImFkZFRhc2tcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBhdXRvZm9jdXMvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImxhYmVsXCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgY2hlY2tlZCAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDxsYWJlbCBmb3I9XCJub3RlXCIgY2xhc3M9XCJsYWJlbFwiPk5vdGU6PC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3RJZH1cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgbGlzdGVuZXJzKG9iamVjdElkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChvYmpJZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkUHJvakJ0biR7b2JqSWR9YCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnRuXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgaWYgKG9iaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgZXZJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMTApKTtcclxuICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgIGdldE9iamVjdChldklkKTtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfSBlbHNlIGlmIChvYmpJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBnZXRPYmplY3QoKTtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlck5vdGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gICAgYDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJBY3R1YWxQcm9qIH0gZnJvbSBcIi4vcmVuZGVyUHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3UHJvalwiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgUHJvamVjdDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlckFjdHVhbFByb2ooKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJFZGl0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJFZGl0UG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qVGFzayA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0dyR7aWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IGlkKTtcclxuICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC50eXBlICE9PSBcImRhaWx5XCIpIHtcclxuICAgICAgZGF0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJ0YXNrRGF0ZVwiPiR7XHJcbiAgICAgICAgdGFzay5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbCA/IFwiXCIgOiB0YXNrLmNvbXBsZXRpb25EYXRlXHJcbiAgICAgIH08L3A+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJUYXNrICR7dGFzay5wcmlvcml0eX0gJHt0YXNrLmNvbXBsZXRlfVwiIGlkPVwiJHtcInB0XCJ9JHtcclxuICAgICAgdGFzay5pZFxyXG4gICAgfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCIke1wiY1wifSR7XHJcbiAgICAgIHRhc2suaWRcclxuICAgIH1cIiAgJHtjaGVjayh0YXNrLmNvbXBsZXRlKX0vPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFza1RpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgICR7ZGF0ZUVsZW1lbnR9XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrTm90ZVwiPiR7dGFzay5ub3RlID09PSBcIlwiID8gXCJcIiA6IFwiTlwifTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiJHtcImR0XCJ9JHt0YXNrLmlkfVwiPkQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBuZXdUYXNrKTtcclxuICB9KTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVGFza1wiKTtcclxuICB0YXNrQnRucy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJFZGl0UG9wVXApO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLlRhc2tcIik7XHJcbiAgICAgIGlmICghZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikpIHtcclxuICAgICAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0Q29tcGxldGlvbiB9IGZyb20gXCIuL2dldENvbXBsZXRpb25cIjtcclxuaW1wb3J0IHsgc29ydEFycmF5IH0gZnJvbSBcIi4vc29ydEFycmF5XCI7XHJcbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tIFwiLi9yZW1vdmVJdGVtXCI7XHJcbmltcG9ydCB7IHJlbmRlckVkaXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckVkaXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwiLi9maWx0ZXJCeVR5cGVcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlEYXRlIH0gZnJvbSBcIi4vZmlsdGVyQnlEYXRlXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckFjdHVhbFByb2ogPSAoKSA9PiB7XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGFycmF5T2ZUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICBsZXQgZGFpbHlBcnJheSA9IHNvcnRBcnJheShhcnJheU9mVHlwZSk7XHJcbiAgbGV0IGNoZWNrRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFycmF5ID0gZmlsdGVyQnlEYXRlKHByb2plY3RzKTtcclxuICB9XHJcbiAgZGFpbHlBcnJheS5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICBpZiAocHJvai50eXBlID09PSBcImRhaWx5XCIgJiYgcHJvai50YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY2hlY2tFbGVtZW50ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbXBsZXRpb25cIiBuYW1lPVwiY29tcGxldGlvblwiIGlkPVwiJHtcImNcIn0ke1xyXG4gICAgICAgIHByb2ouaWRcclxuICAgICAgfVwiICAke2NoZWNrKHByb2ouY29tcGxldGUpfS8+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGR1ZURhdGUgPSBgPHAgY2xhc3M9XCJvYmpEYXRlXCI+RHVlOiR7cHJvai5kdWVEYXRlfTwvcD5gO1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwib2JqZWN0V3JhcHBlclwiIGlkPVwiJHtcInB3XCJ9JHtwcm9qLmlkfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm9iamVjdCAke3Byb2oucHJpb3JpdHl9ICR7cHJvai5jb21wbGV0ZX1cIiBpZD1cIiR7XCJwcFwifSR7XHJcbiAgICAgIHByb2ouaWRcclxuICAgIH1cIj5cclxuICAgICR7Y2hlY2tFbGVtZW50fVxyXG4gICAgICA8cCBjbGFzcz1cIm9ialRpdGxlXCI+JHtwcm9qLnRpdGxlfTwvcD5cclxuICAgICAgJHtwcm9qLnR5cGUgIT09IFwiZGFpbHlcIiA/IGR1ZURhdGUgOiBcIlwifVxyXG4gICAgICA8cCBjbGFzcz1cIm9iak5vdGVcIj4ke3Byb2oubm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCIke1wiZHBcIn0ke3Byb2ouaWR9XCI+RDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tXcmFwcGVyXCIgaWQ9XCIke1widHdcIn0ke3Byb2ouaWR9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmV3VGFza1wiIGlkPVwibnQke3Byb2ouaWR9XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm5ld1Rhc2tfX3BcIj5BZGQgdGFzazwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBwcm9qUGFnZSk7XHJcbiAgICByZW5kZXJQcm9qVGFzayhwcm9qLmlkKTtcclxuICB9KTtcclxuICBsaXN0ZW5lcnMoKTtcclxuICBnZXRDb21wbGV0aW9uKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Rhc2tcIik7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmplY3RcIik7XHJcbiAgbmV3VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm5ld1Rhc2tcIik7XHJcbiAgICAgIHJlbmRlckdldFBvcFVwKHRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVJdGVtKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZW1vdmVJdGVtKGV2KTtcclxuICAgICAgcmVuZGVyQWN0dWFsUHJvaigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcHJvamVjdEJ0bnMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyRWRpdFBvcFVwKTtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5vYmplY3RcIik7XHJcbiAgICAgIGlmICghZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikpIHtcclxuICAgICAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvalBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJQcm9qUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJFdmVudHMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckRhaWx5UGFnZSB9IGZyb20gXCIuL3JlbmRlckRhaWx5UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tIFwiLi9pbml0aWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyTm90ZXMgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJQcm9qUGFnZSwgcmVuZGVyRm9vdGVyKTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkxpXCIpO1xyXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5uYXZMaVwiKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUGFnZShcclxuICAgICAgdGFyZ2V0LmlkLFxyXG4gICAgICByZW5kZXJQcm9qUGFnZSxcclxuICAgICAgcmVuZGVyRGFpbHlQYWdlLFxyXG4gICAgICByZW5kZXJFdmVudHMsXHJcbiAgICAgIHJlbmRlck5vdGVzXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQsIDEwMDAgKiAxMCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVudGVyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9