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

.projectContainer {
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}

.newProj {
  height: 2rem;
  padding: 0.5rem 1rem;
  background-color: gray;
}

.projectWrapper {
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}
.project {
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
.projTask {
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,SAAS;;AAET;EACE,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,0CAA0C;EAC1C,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gDAAgD;EAChD,WAAW;AACb;AACA;EACE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,aAAa;;AAEb;EACE,uBAAuB;AACzB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qBAAqB;AACvB;;AAEA,cAAc;;AAEd;EACE,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA,WAAW;;AAEX;EACE,kBAAkB;AACpB;AACA;AACA;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,wCAAwC;EACxC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 10vh 86vh 4vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 1rem 2rem;\r\n  background-color: greenyellow;\r\n}\r\n.navLi {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* PROJ */\r\n\r\n.projectContainer {\r\n  padding: 1rem 2rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.newProj {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n}\r\n\r\n.projectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.project {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 0.5fr 0.5fr;\r\n  background-color: gray;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 0.5rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.projTask {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 4fr 1fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: gray;\r\n  display: grid;\r\n  grid-template-columns: 4fr 0.5fr 0.5fr;\r\n  gap: 0.5rem;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.low {\r\n  background-color: green;\r\n}\r\n.med {\r\n  background-color: yellow;\r\n}\r\n.high {\r\n  background-color: red;\r\n}\r\n\r\n/* COPMLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.479);\r\n  overflow: hidden;\r\n  place-items: center;\r\n}\r\n\r\n.popUpfield {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 5fr;\r\n  background-color: white;\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");



const addProject = (title, id, date, complete, priority, note) => {
  const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(title, id, date, complete, priority, note);
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__.renderActualProj)();
};


/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _projTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projTask */ "./src/projTask.js");
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");





const addTask = (projId, title, id, date, complete, priority, note) => {
  const newTask = new _projTask__WEBPACK_IMPORTED_MODULE_1__.Task(title, id, date, complete, priority, note);
  const currentProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === projId);
  currentProject.tasks.push(newTask);
  (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_3__.clearRenderedProjects)();
  (0,_renderProject__WEBPACK_IMPORTED_MODULE_2__.renderActualProj)();
};


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
  const renderedProjects = document.querySelectorAll(".projectWrapper");
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
  const renderedProjects = document.querySelectorAll(".projTask");
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
    (0,_renderProjTask__WEBPACK_IMPORTED_MODULE_2__.renderProjTask)(projectId);
  } else if (projectId === undefined) {
    const dueDate = document.querySelector("#date").value;
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((project) => project.id === Id);
    if (project) {
      project.title = title;
      project.dueDate = dueDate;
      project.priority = priority;
      project.note = note;
    }
    (0,_renderProject__WEBPACK_IMPORTED_MODULE_1__.renderActualProj)();
  }
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

/***/ "./src/getProject.js":
/*!***************************!*\
  !*** ./src/getProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProject: () => (/* binding */ getProject)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idGenerator */ "./src/idGenerator.js");



const getProject = () => {
  const title = document.querySelector("#title").value;
  const dueDate = document.querySelector("#date").value;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_1__.generatedId)();
  const complete = false;

  (0,_addProject__WEBPACK_IMPORTED_MODULE_0__.addProject)(title, id, dueDate, complete, priority, note);
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


const getProjectCompletion = () => {
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    const projElement = document.querySelector(`#p${project.id}`);
    const completedProjects = project.tasks.filter((task) => !task.complete);
    const currentDate = new Date();
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDateTime = currentDate.toLocaleString("en-US", options);
    if (project.tasks.length !== 0 && completedProjects.length === 0) {
      project.complete = true;
      project.completionDate = formattedDateTime;
      projElement.classList.remove("false");
      projElement.classList.remove("true");
      projElement.classList.add("true");
    } else {
      project.complete = false;
      project.completionDate = null;
      projElement.classList.remove("false");
      projElement.classList.remove("true");
      projElement.classList.add("false");
    }
  });
};


/***/ }),

/***/ "./src/getTask.js":
/*!************************!*\
  !*** ./src/getTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTask: () => (/* binding */ getTask)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idGenerator */ "./src/idGenerator.js");



const getTask = (projId) => {
  const title = document.querySelector("#title").value;
  const date = null;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_1__.generatedId)();
  const complete = false;

  (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)(projId, title, id, date, complete, priority, note);
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
  };
  const formattedDateTime = currentDate.toLocaleString("en-US", options);
  if (ev.target.checked) {
    task.complete = true;
    task.date = formattedDateTime;
    ev.target.parentElement.classList.remove("true");
    ev.target.parentElement.classList.remove("false");
    ev.target.parentElement.classList.add("true");
  } else {
    task.complete = false;
    task.date = null;
    ev.target.parentElement.classList.remove("true");
    ev.target.parentElement.classList.remove("false");
    ev.target.parentElement.classList.add("false");
  }
  (0,_getProjectCompletion__WEBPACK_IMPORTED_MODULE_1__.getProjectCompletion)();
}


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

/***/ "./src/popUpProj.js":
/*!**************************!*\
  !*** ./src/popUpProj.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPopUp: () => (/* binding */ renderPopUp)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _getProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProject */ "./src/getProject.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");




const renderPopUp = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="addProj">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" checked />
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" />
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" />
    </div>
    <label for="date" class="label">Due date:</label>
    <input type="date" id="date">
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10"></textarea>
    <button class="popUpButton" id="addProjBtn">Add</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

  container.insertAdjacentHTML("afterbegin", projPage);
  listeners();
};

const listeners = () => {
  const addBtn = document.querySelector("#addProjBtn");
  const closeBtn = document.querySelector("#closeBtn");
  addBtn.addEventListener("click", () => {
    (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
    (0,_getProject__WEBPACK_IMPORTED_MODULE_1__.getProject)();
    (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
  });
  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};


/***/ }),

/***/ "./src/popUpTask.js":
/*!**************************!*\
  !*** ./src/popUpTask.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTaskPopUp: () => (/* binding */ renderTaskPopUp)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _getTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTask */ "./src/getTask.js");
/* harmony import */ var _clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedTasks */ "./src/clearRenderedTasks.js");




const renderTaskPopUp = (projId) => {
  const container = document.querySelector("main");
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
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10"></textarea>
    <button class="popUpButton" id="addProjBtn${projId}">Add</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

  container.insertAdjacentHTML("afterbegin", projPage);
  listeners(projId);
};

const listeners = (projId) => {
  const newProj = document.querySelector(`#addProjBtn${projId}`);
  const closeBtn = document.querySelector("#closeBtn");
  newProj.addEventListener("click", (ev) => {
    const evId = Number(ev.target.id.slice(10));
    (0,_clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__.clearRenderedTasks)();
    (0,_getTask__WEBPACK_IMPORTED_MODULE_1__.getTask)(evId);
    (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
  });
  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};


/***/ }),

/***/ "./src/projTask.js":
/*!*************************!*\
  !*** ./src/projTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
function Task(title, id, date, complete, priority, note) {
  this.title = title;
  this.id = id;
  this.date = date;
  this.complete = complete;
  this.priority = priority;
  this.note = note;
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
const projects = [];

function Project(title, id, date, complete, priority, note) {
  this.title = title;
  this.id = id;
  this.tasks = [];
  this.dueDate = date;
  this.completionDate = date;
  this.complete = complete;
  this.priority = priority;
  this.note = note;
}


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
/* harmony export */   renderDaily: () => (/* binding */ renderDaily)
/* harmony export */ });
const renderDaily = () => {
  const container = document.querySelector("main");
  const dailyPage = ``;

  container.insertAdjacentHTML("afterbegin", dailyPage);
};


/***/ }),

/***/ "./src/renderEditProjPopUp.js":
/*!************************************!*\
  !*** ./src/renderEditProjPopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEditProjPopUp: () => (/* binding */ renderEditProjPopUp)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItem */ "./src/editItem.js");
/* harmony import */ var _clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedProjects */ "./src/clearRenderedProjects.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





const renderEditProjPopUp = (ev) => {
  const id = Number(ev.slice(1));
  const project = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.find((project) => project.id === id);
  const container = document.querySelector("main");
  if (project) {
    const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="editProj">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" value="${
      project.title
    }" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" ${
        project.priority === "low" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" ${
        project.priority === "med" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" ${
        project.priority === "high" ? "checked" : ""
      }/>
    </div>
    <label for="date" class="label">Due date:</label>
    <input type="date" id="date" value="${project.dueDate}">
      <p class="projCompletionDate">
        ${
          project.completionDate === null
            ? ""
            : `Completed on:${project.completionDate}`
        }
      </p>
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10">${
      project.note
    }</textarea>
    <button class="popUpButton" id="addProjBtn${id}">Edit</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

    container.insertAdjacentHTML("afterbegin", projPage);
    listeners(id);
  }
};

const listeners = (id) => {
  const addBtn = document.querySelector(`#addProjBtn${id}`);
  const closeBtn = document.querySelector("#closeBtn");
  addBtn.addEventListener("click", (ev) => {
    (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_2__.clearRenderedProjects)();
    (0,_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(ev.target);
    (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
  });
  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};


/***/ }),

/***/ "./src/renderEditTaskPopUp.js":
/*!************************************!*\
  !*** ./src/renderEditTaskPopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEditTaskPopUp: () => (/* binding */ renderEditTaskPopUp)
/* harmony export */ });
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItem */ "./src/editItem.js");
/* harmony import */ var _clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearRenderedTasks */ "./src/clearRenderedTasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





const renderEditTaskPopUp = (ev) => {
  const taskId = Number(ev.id.slice(2));
  const projectId = Number(ev.parentElement.parentElement.id.slice(2));
  const project = _projects__WEBPACK_IMPORTED_MODULE_3__.projects.find((project) => project.id === projectId);
  const task = project.tasks.find((task) => task.id === taskId);
  const container = document.querySelector("main");
  const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="editTask">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" value="${
      task.title
    }" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" ${
        task.priority === "low" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" ${
        task.priority === "med" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" ${
        task.priority === "high" ? "checked" : ""
      }/>
    </div>
    <p class="taskCompletionDate">
        ${task.date === null ? "" : `Completed on:${task.date}`}
      </p>
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10">${
      task.note
    }</textarea>
    <button class="popUpButton" id="addProjBtn${taskId}">Edit</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

  container.insertAdjacentHTML("afterbegin", projPage);
  listeners(taskId);
};

const listeners = (taskId) => {
  const addBtn = document.querySelector(`#addProjBtn${taskId}`);
  const closeBtn = document.querySelector("#closeBtn");
  addBtn.addEventListener("click", (ev) => {
    (0,_clearRenderedTasks__WEBPACK_IMPORTED_MODULE_2__.clearRenderedTasks)();
    (0,_editItem__WEBPACK_IMPORTED_MODULE_1__.editItem)(ev.target);
    (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
  });
  closeBtn.addEventListener("click", _clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp);
};


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
/* harmony import */ var _renderProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProject */ "./src/renderProject.js");


const renderPage = (id, proj, daily, events, notes) => {
  const button = document.querySelector(`#${id}`);
  button.classList.add("active");
  switch (id) {
    case "proj":
      proj();
      (0,_renderProject__WEBPACK_IMPORTED_MODULE_0__.renderActualProj)();
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
/* harmony export */   renderProj: () => (/* binding */ renderProj)
/* harmony export */ });
/* harmony import */ var _popUpProj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUpProj */ "./src/popUpProj.js");


const renderProj = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="projectContainer container">
  <div class="newProj" id="newProj">
    <p class="newProj__p">Add Project</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newProj");
  newProj.addEventListener("click", _popUpProj__WEBPACK_IMPORTED_MODULE_0__.renderPopUp);
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
/* harmony import */ var _renderEditTaskPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderEditTaskPopUp */ "./src/renderEditTaskPopUp.js");



const renderProjTask = (id) => {
  const container = document.querySelector(`#tw${id}`);
  const project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((proj) => proj.id === id);
  const tasks = project.tasks;

  tasks.forEach((task) => {
    const newTask = `
      <div class="projTask ${task.priority} ${task.complete}" id="${"pt"}${
      task.id
    }">
       <input type="checkbox" class="completion" name="completion" id="${"c"}${
      task.id
    }"  ${check(task.complete)}/>
        <p class="taskTitle">${task.title}</p>
        <p class="taskDate">${task.date === null ? "" : task.date}</p>
        <p class="taskNote">${task.note === "" ? "" : "N"}</p>
        <p class="delete" id="${"dt"}${task.id}">D</p>
      </div>
`;
    container.insertAdjacentHTML("beforeend", newTask);
  });
  listeners();
};

const listeners = () => {
  const taskBtns = document.querySelectorAll(".projTask");
  taskBtns.forEach((task) => {
    task.removeEventListener("click", _renderEditTaskPopUp__WEBPACK_IMPORTED_MODULE_1__.renderEditTaskPopUp);
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".projTask");
      if (!ev.target.classList.contains("completion")) {
        (0,_renderEditTaskPopUp__WEBPACK_IMPORTED_MODULE_1__.renderEditTaskPopUp)(target);
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
/* harmony import */ var _popUpTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUpTask */ "./src/popUpTask.js");
/* harmony import */ var _getTaskCompletion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTaskCompletion */ "./src/getTaskCompletion.js");
/* harmony import */ var _sortArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortArray */ "./src/sortArray.js");
/* harmony import */ var _removeItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeItem */ "./src/removeItem.js");
/* harmony import */ var _renderEditProjPopUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderEditProjPopUp */ "./src/renderEditProjPopUp.js");








const renderActualProj = () => {
  const container = document.querySelector(".projectContainer");
  (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects).forEach((proj) => {
    const projPage = `
    <div class="projectWrapper" id="${"pw"}${proj.id}">
    <div class="project ${proj.priority} ${proj.complete}" id="${"p"}${
      proj.id
    }">
      <p class="projTitle">${proj.title}</p>
      <p class="projDate">Due:${proj.dueDate}</p>
      <p class="projNote">${proj.note === "" ? "" : "N"}</p>
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
    (0,_getTaskCompletion__WEBPACK_IMPORTED_MODULE_3__.getTaskCompletion)();
  });
  listeners();
};

const listeners = () => {
  const newTasks = document.querySelectorAll(".newTask");
  const deleteBtns = document.querySelectorAll(".delete");
  const projectBtns = document.querySelectorAll(".project");
  newTasks.forEach((task) => {
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".newTask");
      (0,_popUpTask__WEBPACK_IMPORTED_MODULE_2__.renderTaskPopUp)(target.id.slice(2));
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
    project.removeEventListener("click", _renderEditProjPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditProjPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".project");
      (0,_renderEditProjPopUp__WEBPACK_IMPORTED_MODULE_6__.renderEditProjPopUp)(target.id);
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
    return new Date(a.date) - new Date(b.date);
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













(0,_initialization__WEBPACK_IMPORTED_MODULE_6__.initialization)(_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader, _renderProjPage__WEBPACK_IMPORTED_MODULE_2__.renderProj, _footer__WEBPACK_IMPORTED_MODULE_5__.renderFooter);

const buttons = document.querySelectorAll(".navLi");
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const target = ev.target.closest(".navLi");
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_7__.clearPage)();
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_8__.renderPage)(target.id, _renderProjPage__WEBPACK_IMPORTED_MODULE_2__.renderProj, _renderDailyPage__WEBPACK_IMPORTED_MODULE_4__.renderDaily, _renderEventsPage__WEBPACK_IMPORTED_MODULE_3__.renderEvents, _renderNotesPage__WEBPACK_IMPORTED_MODULE_9__.renderNotes);
  });
});

document.addEventListener("keydown", _handleEscape__WEBPACK_IMPORTED_MODULE_10__.handleEscape);
document.addEventListener("keydown", _handleEnter__WEBPACK_IMPORTED_MODULE_11__.handleEnter);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBbUI7QUFDNUQ7QUFDQTtBQUNBLE1BQU0seUVBQW1CO0FBQ3pCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQzNETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDa0I7QUFDTTtBQUNJO0FBQ0Y7QUFDUjtBQUNVO0FBQ1Y7QUFDRTtBQUNNO0FBQ0Y7QUFDRjtBQUM1QztBQUNBLCtEQUFjLENBQUMsaURBQVksRUFBRSx1REFBVSxFQUFFLGlEQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVSxZQUFZLHVEQUFVLEVBQUUseURBQVcsRUFBRSwyREFBWSxFQUFFLHlEQUFXO0FBQzVFLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxxQ0FBcUMsd0RBQVk7QUFDakQscUNBQXFDLHNEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJSZW5kZXJlZFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUmVuZGVyZWRUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRQcm9qZWN0Q29tcGxldGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldFRhc2tDb21wbGV0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVudGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVzY2FwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaWRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcG9wVXBQcm9qLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BvcFVwVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckRhaWx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFZGl0UHJvalBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckVkaXRUYXNrUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJOb3Rlc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC8qIFZBUklBQkxFUyAqL1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NnZoIDR2aDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIEhFQURFUiAqL1xyXG5cclxuLm5hdlVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcclxufVxyXG4ubmF2TGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIE1BSU4gKi9cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qIFBST0ogKi9cclxuXHJcbi5wcm9qZWN0Q29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubmV3UHJvaiB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5wcm9qZWN0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5wcm9qZWN0IHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMC41ZnIgMC41ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnRhc2tXcmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLnByb2pUYXNrIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNGZyIDFmciAwLjVmciAwLjVmcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ubmV3VGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAwLjVmciAwLjVmcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4udGFza0RhdGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi8qIFBSSU9SSVRZICovXHJcblxyXG4ubG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4ubWVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLmhpZ2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogQ09QTUxFVEVEICovXHJcblxyXG4udHJ1ZSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5mYWxzZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRk9PVEVSICovXHJcblxyXG5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyQTphbnktbGluayB7XHJcbn1cclxuXHJcbi8qIFBPUFVQICovXHJcblxyXG4ucG9wVXBDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNDc5KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3BVcGZpZWxkIHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNzAwcHgpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA1ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByaW9yaXR5V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAvKiBWQVJJQUJMRVMgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg2dmggNHZoO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5cXHJcXG4ubmF2VWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXHJcXG59XFxyXFxuLm5hdkxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFBST0ogKi9cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvaiB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMC41ZnIgMC41ZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrV3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5wcm9qVGFzayB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnIgMWZyIDAuNWZyIDAuNWZyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5uZXdUYXNrIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAwLjVmciAwLjVmcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4udGFza0RhdGUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUklPUklUWSAqL1xcclxcblxcclxcbi5sb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcbi5tZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG4uaGlnaCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIENPUE1MRVRFRCAqL1xcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmZhbHNlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXJBOmFueS1saW5rIHtcXHJcXG59XFxyXFxuXFxyXFxuLyogUE9QVVAgKi9cXHJcXG5cXHJcXG4ucG9wVXBDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40NzkpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcGZpZWxkIHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJBY3R1YWxQcm9qIH0gZnJvbSBcIi4vcmVuZGVyUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpID0+IHtcclxuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpO1xyXG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgcmVuZGVyQWN0dWFsUHJvaigpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9wcm9qVGFza1wiO1xyXG5pbXBvcnQgeyByZW5kZXJBY3R1YWxQcm9qIH0gZnJvbSBcIi4vcmVuZGVyUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKHByb2pJZCwgdGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpID0+IHtcclxuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpO1xyXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvaklkKTtcclxuICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gIHJlbmRlckFjdHVhbFByb2ooKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIik7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlcIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICBwYWdlLmZvckVhY2goKHBhZ2UpID0+IHBhZ2UucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJQb3BVcCA9ICgpID0+IHtcclxuICBjb25zdCBwb3BVcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIHBvcFVwcy5mb3JFYWNoKChwb3BVcCkgPT4gcG9wVXAucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJSZW5kZXJlZFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlcmVkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RXcmFwcGVyXCIpO1xyXG4gIHJlbmRlcmVkUHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgcHJvai5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyUmVuZGVyZWRUYXNrcyA9ICgpID0+IHtcclxuICBjb25zdCByZW5kZXJlZFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qVGFza1wiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQWN0dWFsUHJvaiB9IGZyb20gXCIuL3JlbmRlclByb2plY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgSWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMTApKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGZpbmRQcm9qKElkKT8uaWQ7XHJcbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IElkKTtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0YXNrLm5vdGUgPSBub3RlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUHJvalRhc2socHJvamVjdElkKTtcclxuICB9IGVsc2UgaWYgKHByb2plY3RJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IElkKTtcclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxuICAgICAgcHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQWN0dWFsUHJvaigpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXIgPSBgXHJcbiAgPGFcclxuICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rhcmtlc3RvZlRpbWVzXCJcclxuICBjbGFzcz1cImZvb3RlckFcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgPkRhcmtUaW1lczwvYVxyXG4+YDtcclxuXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGZvb3Rlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gY2hlY2soKTtcclxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qTm90ZVwiKS52YWx1ZTtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgYWRkUHJvamVjdCh0aXRsZSwgaWQsIGR1ZURhdGUsIGNvbXBsZXRlLCBwcmlvcml0eSwgbm90ZSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVjayA9ICgpID0+IHtcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcbiAgZm9yIChjb25zdCBidXR0b24gb2YgcmFkaW8pIHtcclxuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLmlkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2plY3RDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Ake3Byb2plY3QuaWR9YCk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRQcm9qZWN0cyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgIH07XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlVGltZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XHJcbiAgICBpZiAocHJvamVjdC50YXNrcy5sZW5ndGggIT09IDAgJiYgY29tcGxldGVkUHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gZm9ybWF0dGVkRGF0ZVRpbWU7XHJcbiAgICAgIHByb2pFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWxzZVwiKTtcclxuICAgICAgcHJvakVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRydWVcIik7XHJcbiAgICAgIHByb2pFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgICAgcHJvakVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZhbHNlXCIpO1xyXG4gICAgICBwcm9qRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJ1ZVwiKTtcclxuICAgICAgcHJvakVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vYWRkVGFza1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZWRJZCB9IGZyb20gXCIuL2lkR2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFzayA9IChwcm9qSWQpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgZGF0ZSA9IG51bGw7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVkSWQoKTtcclxuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICBhZGRUYXNrKHByb2pJZCwgdGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdENvbXBsZXRpb24gfSBmcm9tIFwiLi9nZXRQcm9qZWN0Q29tcGxldGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhc2tDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveGVzKTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldikgPT4ge1xyXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY2hlY2tCb3hlcyhldik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm94ZXMoZXYpIHtcclxuICBjb25zdCBjaGVja0JveElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxKSk7XHJcbiAgY29uc3QgcHJvamVjdElkID0gTnVtYmVyKGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gIH07XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZVRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xyXG4gIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgdGFzay5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICB0YXNrLmRhdGUgPSBmb3JtYXR0ZWREYXRlVGltZTtcclxuICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cnVlXCIpO1xyXG4gICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZhbHNlXCIpO1xyXG4gICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRydWVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2suY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHRhc2suZGF0ZSA9IG51bGw7XHJcbiAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJ1ZVwiKTtcclxuICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWxzZVwiKTtcclxuICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmYWxzZVwiKTtcclxuICB9XHJcbiAgZ2V0UHJvamVjdENvbXBsZXRpb24oKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXYpID0+IHtcclxuICBjb25zdCBlbnRlcktleUNvZGUgPSAxMztcclxuICBjb25zdCBwYXJ0aWN1bGFyRWxlbWVudElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImFkZFByb2pCdG5cIl0nKTtcclxuICBpZiAocGFydGljdWxhckVsZW1lbnRJZCAmJiBldi5rZXlDb2RlID09PSBlbnRlcktleUNvZGUgJiYgIWV2LnNoaWZ0S2V5KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICB9KTtcclxuICAgIHBhcnRpY3VsYXJFbGVtZW50SWQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRXNjYXBlID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldi5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICA8dWwgY2xhc3M9XCJuYXZVbFwiPlxyXG4gICAgPGxpIGlkPVwicHJvalwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+UHJvamVjdDwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJkYWlseVwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RGFpbHk8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZXZlbnRzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5FdmVudHM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwibm90ZXNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPk5vdGVzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gMDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiArK3ZhbHVlO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGdlbmVyYXRlZElkID0gZ2VuZXJhdGVJZCgpO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvalwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwaWVjZTIoKTtcclxuICBwaWVjZTMoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdCB9IGZyb20gXCIuL2dldFByb2plY3RcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUG9wVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImFkZFByb2pcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBhdXRvZm9jdXMgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiIGNoZWNrZWQgLz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibWVkXCIgLz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJub3RlXCIgY2xhc3M9XCJsYWJlbFwiPk5vdGU6PC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuXCI+QWRkPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvakJ0blwiKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgIGdldFByb2plY3QoKTtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9KTtcclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQb3BVcCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IGdldFRhc2sgfSBmcm9tIFwiLi9nZXRUYXNrXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRUYXNrcyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRUYXNrc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tQb3BVcCA9IChwcm9qSWQpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiYWRkVGFza1wiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGF1dG9mb2N1cy8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiIGNsYXNzPVwibGFiZWxcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiBjaGVja2VkIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImhpZ2hcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bGFiZWwgZm9yPVwibm90ZVwiIGNsYXNzPVwibGFiZWxcIj5Ob3RlOjwvbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7cHJvaklkfVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICBsaXN0ZW5lcnMocHJvaklkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChwcm9qSWQpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZFByb2pCdG4ke3Byb2pJZH1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBjb25zdCBldklkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxMCkpO1xyXG4gICAgY2xlYXJSZW5kZXJlZFRhc2tzKCk7XHJcbiAgICBnZXRUYXNrKGV2SWQpO1xyXG4gICAgY2xlYXJQb3BVcCgpO1xyXG4gIH0pO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5pZCA9IGlkO1xyXG4gIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB0aGlzLm5vdGUgPSBub3RlO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUsIGlkLCBkYXRlLCBjb21wbGV0ZSwgcHJpb3JpdHksIG5vdGUpIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5pZCA9IGlkO1xyXG4gIHRoaXMudGFza3MgPSBbXTtcclxuICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xyXG4gIHRoaXMuY29tcGxldGlvbkRhdGUgPSBkYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmRJbmRleCgocHJvaikgPT4gcHJvai5pZCA9PT0gdGFyZ2V0SWQpO1xyXG4gIGlmIChcclxuICAgIChwcm9qZWN0ICE9PSB1bmRlZmluZWQgfHwgcHJvamVjdCAhPT0gbnVsbCkgJiZcclxuICAgIGV2LnRhcmdldC5pZC5zbGljZSgwLCAyKSA9PSBcImRwXCJcclxuICApIHtcclxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0LCAxKTtcclxuICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgIHByb2pFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9qV2l0aFRhc2sgPSBwcm9qZWN0cy5maW5kKChwcm9qKSA9PlxyXG4gICAgICBwcm9qLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suaWQgPT09IHRhcmdldElkKVxyXG4gICAgKTtcclxuICAgIGlmIChwcm9qV2l0aFRhc2spIHtcclxuICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvaldpdGhUYXNrLnRhc2tzLmZpbmRJbmRleChcclxuICAgICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gdGFyZ2V0SWRcclxuICAgICAgKTtcclxuICAgICAgcHJvaldpdGhUYXNrLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xyXG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwdCR7dGFyZ2V0SWR9YCk7XHJcbiAgICAgIHRhc2tFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckRhaWx5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGRhaWx5UGFnZSA9IGBgO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBkYWlseVBhZ2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyBlZGl0SXRlbSB9IGZyb20gXCIuL2VkaXRJdGVtXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdFByb2pQb3BVcCA9IChldikgPT4ge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGV2LnNsaWNlKDEpKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGlmIChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiZWRpdFByb2pcIj5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIiR7XHJcbiAgICAgIHByb2plY3QudGl0bGVcclxuICAgIH1cIiBhdXRvZm9jdXMgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiICR7XHJcbiAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9PT0gXCJsb3dcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibWVkXCIgJHtcclxuICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID09PSBcIm1lZFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgJHtcclxuICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID09PSBcImhpZ2hcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImxhYmVsXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiJHtwcm9qZWN0LmR1ZURhdGV9XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJvakNvbXBsZXRpb25EYXRlXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPT09IG51bGxcclxuICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgIDogYENvbXBsZXRlZCBvbjoke3Byb2plY3QuY29tcGxldGlvbkRhdGV9YFxyXG4gICAgICAgIH1cclxuICAgICAgPC9wPlxyXG4gICAgPGxhYmVsIGZvcj1cIm5vdGVcIiBjbGFzcz1cImxhYmVsXCI+Tm90ZTo8L2xhYmVsPlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPiR7XHJcbiAgICAgIHByb2plY3Qubm90ZVxyXG4gICAgfTwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke2lkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICAgIGxpc3RlbmVycyhpZCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZFByb2pCdG4ke2lkfWApO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcclxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgY2xlYXJQb3BVcCgpO1xyXG4gIH0pO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZWRpdEl0ZW0gfSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkVGFza3MgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkVGFza3NcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckVkaXRUYXNrUG9wVXAgPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXNrSWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IE51bWJlcihldi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke1xyXG4gICAgICB0YXNrLnRpdGxlXHJcbiAgICB9XCIgYXV0b2ZvY3VzIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiIGNsYXNzPVwibGFiZWxcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiAke1xyXG4gICAgICAgIHRhc2sucHJpb3JpdHkgPT09IFwibG93XCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiICR7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9PT0gXCJtZWRcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiICR7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwidGFza0NvbXBsZXRpb25EYXRlXCI+XHJcbiAgICAgICAgJHt0YXNrLmRhdGUgPT09IG51bGwgPyBcIlwiIDogYENvbXBsZXRlZCBvbjoke3Rhc2suZGF0ZX1gfVxyXG4gICAgICA8L3A+XHJcbiAgICA8bGFiZWwgZm9yPVwibm90ZVwiIGNsYXNzPVwibGFiZWxcIj5Ob3RlOjwvbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHtcclxuICAgICAgdGFzay5ub3RlXHJcbiAgICB9PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7dGFza0lkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgbGlzdGVuZXJzKHRhc2tJZCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAodGFza0lkKSA9PiB7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZFByb2pCdG4ke3Rhc2tJZH1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGNsZWFyUmVuZGVyZWRUYXNrcygpO1xyXG4gICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9KTtcclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQb3BVcCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJFdmVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcblxyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgICAgICBcclxuICAgIGA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGV2ZW50c1BhZ2UpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyTm90ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgICBgO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlckFjdHVhbFByb2ogfSBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIHJlbmRlckFjdHVhbFByb2ooKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiZGFpbHlcIjpcclxuICAgICAgZGFpbHkoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiZXZlbnRzXCI6XHJcbiAgICAgIGV2ZW50cygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJub3Rlc1wiOlxyXG4gICAgICBub3RlcygpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlclBvcFVwIH0gZnJvbSBcIi4vcG9wVXBQcm9qXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvaiA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdENvbnRhaW5lciBjb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3UHJvalwiIGlkPVwibmV3UHJvalwiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdQcm9qX19wXCI+QWRkIFByb2plY3Q8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJFZGl0VGFza1BvcFVwIH0gZnJvbSBcIi4vcmVuZGVyRWRpdFRhc2tQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2pUYXNrID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtpZH1gKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IHRhc2tzID0gcHJvamVjdC50YXNrcztcclxuXHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInByb2pUYXNrICR7dGFzay5wcmlvcml0eX0gJHt0YXNrLmNvbXBsZXRlfVwiIGlkPVwiJHtcInB0XCJ9JHtcclxuICAgICAgdGFzay5pZFxyXG4gICAgfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCIke1wiY1wifSR7XHJcbiAgICAgIHRhc2suaWRcclxuICAgIH1cIiAgJHtjaGVjayh0YXNrLmNvbXBsZXRlKX0vPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFza1RpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHt0YXNrLmRhdGUgPT09IG51bGwgPyBcIlwiIDogdGFzay5kYXRlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tOb3RlXCI+JHt0YXNrLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCIke1wiZHRcIn0ke3Rhc2suaWR9XCI+RDwvcD5cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qVGFza1wiKTtcclxuICB0YXNrQnRucy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJFZGl0VGFza1BvcFVwKTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5wcm9qVGFza1wiKTtcclxuICAgICAgaWYgKCFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGlvblwiKSkge1xyXG4gICAgICAgIHJlbmRlckVkaXRUYXNrUG9wVXAodGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRhc2tQb3BVcCB9IGZyb20gXCIuL3BvcFVwVGFza1wiO1xyXG5pbXBvcnQgeyBnZXRUYXNrQ29tcGxldGlvbiB9IGZyb20gXCIuL2dldFRhc2tDb21wbGV0aW9uXCI7XHJcbmltcG9ydCB7IHNvcnRBcnJheSB9IGZyb20gXCIuL3NvcnRBcnJheVwiO1xyXG5pbXBvcnQgeyByZW1vdmVJdGVtIH0gZnJvbSBcIi4vcmVtb3ZlSXRlbVwiO1xyXG5pbXBvcnQgeyByZW5kZXJFZGl0UHJvalBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyRWRpdFByb2pQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckFjdHVhbFByb2ogPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xyXG4gIHNvcnRBcnJheShwcm9qZWN0cykuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFdyYXBwZXJcIiBpZD1cIiR7XCJwd1wifSR7cHJvai5pZH1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0ICR7cHJvai5wcmlvcml0eX0gJHtwcm9qLmNvbXBsZXRlfVwiIGlkPVwiJHtcInBcIn0ke1xyXG4gICAgICBwcm9qLmlkXHJcbiAgICB9XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJvalRpdGxlXCI+JHtwcm9qLnRpdGxlfTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJwcm9qRGF0ZVwiPkR1ZToke3Byb2ouZHVlRGF0ZX08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJvak5vdGVcIj4ke3Byb2oubm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCIke1wiZHBcIn0ke3Byb2ouaWR9XCI+RDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tXcmFwcGVyXCIgaWQ9XCIke1widHdcIn0ke3Byb2ouaWR9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmV3VGFza1wiIGlkPVwibnQke3Byb2ouaWR9XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm5ld1Rhc2tfX3BcIj5BZGQgdGFzazwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBwcm9qUGFnZSk7XHJcbiAgICByZW5kZXJQcm9qVGFzayhwcm9qLmlkKTtcclxuICAgIGdldFRhc2tDb21wbGV0aW9uKCk7XHJcbiAgfSk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Rhc2tcIik7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIG5ld1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5uZXdUYXNrXCIpO1xyXG4gICAgICByZW5kZXJUYXNrUG9wVXAodGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUl0ZW0pO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJlbW92ZUl0ZW0oZXYpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcHJvamVjdEJ0bnMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyRWRpdFByb2pQb3BVcCk7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdFwiKTtcclxuICAgICAgcmVuZGVyRWRpdFByb2pQb3BVcCh0YXJnZXQuaWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG4gIGNvbnN0IHNvcnRlZEJ5UHJpb3JpdHkgPSBzb3J0VGFza3MoYXJyYXksIHByaW9yaXR5T3JkZXIpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IHByaW9yaXR5Q29tcCA9IHByaW9yaXR5T3JkZXJbYS5wcmlvcml0eV0gLSBwcmlvcml0eU9yZGVyW2IucHJpb3JpdHldO1xyXG4gICAgaWYgKHByaW9yaXR5Q29tcCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gcHJpb3JpdHlDb21wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc29ydGVkQnlQcmlvcml0eTtcclxufTtcclxuXHJcbmNvbnN0IHNvcnRUYXNrcyA9IChhcnJheSwgb3JkZXIpID0+IHtcclxuICByZXR1cm4gYXJyYXkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgLi4uaXRlbSxcclxuICAgIHRhc2tzOiBpdGVtLnRhc2tzLnNvcnQoKGEsIGIpID0+IG9yZGVyW2EucHJpb3JpdHldIC0gb3JkZXJbYi5wcmlvcml0eV0pLFxyXG4gIH0pKTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qIH0gZnJvbSBcIi4vcmVuZGVyUHJvalBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRXZlbnRzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJEYWlseSB9IGZyb20gXCIuL3JlbmRlckRhaWx5UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tIFwiLi9pbml0aWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyTm90ZXMgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuXHJcbmluaXRpYWxpemF0aW9uKHJlbmRlckhlYWRlciwgcmVuZGVyUHJvaiwgcmVuZGVyRm9vdGVyKTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkxpXCIpO1xyXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5uYXZMaVwiKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUGFnZSh0YXJnZXQuaWQsIHJlbmRlclByb2osIHJlbmRlckRhaWx5LCByZW5kZXJFdmVudHMsIHJlbmRlck5vdGVzKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFbnRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==