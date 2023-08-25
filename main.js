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
  --HEADER-BG-C: black;
  --HEADER-C: aliceblue;
  --OBJECT-BG-C: rgb(185, 102, 2);
  --OBJECT-C: aliceblue;
  --OBJECT-ALT-C: Rebeccapurple;
  --MAIN-BG-C: darkseagreen;
  --MAIN-C: aliceblue;
  --CALENDAR-BG-C: darkorange;
  --CALENDAR-C: black;
  --CALENDAR-ALT-BG-C: aliceblue;
  --CALENDAR-ALT-C: ;
  --CALENDAR-HOVER-BG-C: rgba(0, 0, 0, 0.429);
  /* PRIORITY */
  --PRIORITY-LOW: green;
  --PRIORITY-MED: yellow;
  --PRIORITY-HIGH: red;
  /* POPUP */
  --POPUP-BG-C: Rebeccapurple;
  --POPUP-C: aliceblue;
  --POPUP-ALT-C: black;
}

body {
  display: grid;
  grid-template-rows: 11vh 86vh 4vh;
  overflow-y: hidden;
  background-color: var(--MAIN-BG-C);
}

/* HEADER */

.navbar {
  height: 100%;
  border-bottom: 5px solid var(--HEADER-C);
}

.navUl {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem 2rem;
  background-color: var(--HEADER-BG-C);
  gap: 1rem;
}

.navLi {
  width: 100%;
  font-weight: bold;
  font-size: 1.3rem;
  background-color: transparent;
  color: var(--HEADER-ALT2);
  border: none;
  list-style-type: none;
  text-align: center;
}

.navSpan {
  user-select: none;
  display: inline-block;
  transition: transform 0.3s ease;
  color: var(--HEADER-C);
}
.navSpan::before {
  content: "";
  position: absolute;
  top: -7px;
  width: 100%;
  height: 3px;
  background-color: var(--HEADER-C);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.navLi:hover .navSpan {
  transform: translateY(15px);
}
.navLi:hover .navSpan::before {
  opacity: 1;
}

/* HEADER ACTIVE */

.navLi.active .navSpan {
  transform: translateY(15px);
}
.navLi.active .navSpan::before {
  opacity: 1;
}

/* MAIN */

main {
  height: 0;
  min-height: 100%;
  overflow-y: auto;
}

.listContainer {
  padding: 1rem clamp(0.2rem, 2%, 2rem);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  justify-items: center;
  gap: 0.5rem;
}
.wrapper {
  width: 100%;
}

.objectWrapper {
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}
.object {
  width: 100%;
  height: 2rem;
  align-items: center;
  display: grid;
  grid-template-columns: 2.5rem 3fr max-content 1rem 1rem;
  background-color: var(--OBJECT-BG-C);
  color: var(--OBJECT-C);
  gap: 0.5rem;
  padding: 0 0.5rem;
  overflow: hidden;
}
.objDate {
  font-size: 0.7rem;
}
.dailyContainer .object {
  grid-template-columns: 2.5rem 1rem 3fr 1rem 1rem;
}

.newObject,
.newNote {
  height: 2rem;
  padding: 0.5rem 1rem;
  background-color: var(--OBJECT-ALT-C);
  color: var(--OBJECT-C);
  cursor: pointer;
  margin-bottom: 1rem;
}

.taskWrapper {
  padding-left: 3rem;
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5rem;
}
.Task {
  height: 2rem;
  padding: 0.5rem;
  background-color: var(--OBJECT-BG-C);
  color: var(--OBJECT-C);
  display: grid;
  grid-template-columns: 1rem 4fr 1fr 1rem 1rem;
  gap: 0.5rem;
}
.newTask {
  height: 2rem;
  width: 2rem;
  margin: -0.5rem;
  width: 3rem;
  font-size: 1.7rem;
  background-color: var(--OBJECT-ALT-C);
  color: var(--OBJECT-C);
  display: grid;
  justify-content: center;
  cursor: pointer;
}
.taskDate {
  display: grid;
  font-size: 0.7rem;
}
.objTitle,
.taskTitle,
.eventTitle,
.noteTitle {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
}
.delete {
  text-align: center;
  cursor: pointer;
}

/* PROJ */

.object.proj {
  grid-template-columns: 2.5rem 3fr 1rem 1rem;
}

/* NOTES */

.notesContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
}
.newNote {
  height: 2rem;
  grid-column: 1 / -1;
  justify-self: center;
}

.bigGrid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column: 1/-1;
  gap: 0.5rem;
}
.colGrid {
  height: min-content;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit);
  gap: 0.5rem;
}

#one {
  display: grid;
}
#two {
  display: none;
}
#three {
  display: none;
}
#four {
  display: none;
}

@media (min-width: 630px) {
  #two {
    display: grid;
  }
}
@media (min-width: 940px) {
  #three {
    display: grid;
  }
}
@media (min-width: 1258px) {
  #four {
    display: grid;
  }
}
.noteObject {
  height: max-content;
  width: clamp(300px, 100%, 400px);
  padding: 0.5rem;
  overflow-x: auto;
  display: grid;
  grid-template-columns: 2fr 1.2fr 3rem 2rem;
  background-color: var(--OBJECT-BG-C);
  color: var(--OBJECT-C);
  row-gap: 0.5rem;
}
.noteObject > .high {
  background-color: var(--PRIORITY-HIGH);
  outline: none;
  text-align: center;
}
.noteObject > .low {
  background-color: var(--PRIORITY-LOW);
  outline: none;
  text-align: center;
}
.noteDate {
  text-align: center;
}
.noteMark {
  cursor: pointer;
}

.noteBody {
  max-width: 100%;
  grid-row: 2 / 3;
  grid-column: 1/-1;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* EVENTS */

.eventsContainer {
  height: 70vh;
  width: clamp(300px, 100%, 700px);
  background-color: var(--CALENDAR-BG-C);
  color: var(--CALENDAR-C);
  display: grid;
  grid-template-rows: 1fr 8fr;
}

.dateWrapper {
  height: 7vh;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  place-items: center;
}

.calendarWrapper {
  padding: 1rem;
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
  cursor: pointer;
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
  background: var(--CALENDAR-HOVER-BG-C);
}
.inactive {
  opacity: 0.5;
}
.selected::before {
  border: 2px solid var(--CALENDAR-ALT-BG-C);
}
.eventNoteWrapper {
  display: grid;
  grid-template-rows: repeat(auto-fill, 2rem);
  width: 100%;
  padding: 0.5rem;
  background-color: var(--CALENDAR-ALT-BG-C);
  gap: 0.5rem;
  overflow-y: auto;
}

.eventNoteWrapper {
  height: 31vh;
}

.weekEnd {
  color: darkred;
}
.currentDay::before {
  background-color: var(--CALENDAR-ALT-BG-C);
}
.arrow {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

/* PRIORITY */

.priority {
  -webkit-appearance: none;
  appearance: none;
  margin: 5px;
  position: relative;
  cursor: pointer;
}
.priority::before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 20px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.priority:checked::before {
  border: 2px solid var(--POPUP-C);
}
#low::before {
  background-color: var(--PRIORITY-LOW);
}
#med::before {
  background-color: var(--PRIORITY-MED);
}
#high::before {
  background-color: var(--PRIORITY-HIGH);
}

.low {
  outline: 3px solid var(--PRIORITY-LOW);
}
.med {
  outline: 3px solid var(--PRIORITY-MED);
}
.high {
  outline: 3px solid var(--PRIORITY-HIGH);
}

.eventlow::before {
  background-color: var(--PRIORITY-LOW);
}
.eventmed::before {
  background-color: var(--PRIORITY-MED);
}
.eventhigh::before {
  background-color: var(--PRIORITY-HIGH);
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
  color: var(--HEADER-C);
}

/* BIN */

.binBtn {
  display: grid;
  place-content: center;
  height: 50px;
  width: 50px;
  background-color: var(--OBJECT-ALT-C);
  color: var(--OBJECT-C);
  position: absolute;
  left: 1rem;
  top: 86vh;
  z-index: 1;
  cursor: pointer;
}

.binBox {
  height: 70%;
  width: clamp(300px, 90%, 700px);
  border: 2px solid var(--POPUP-C);
  background-color: var(--POPUP-BG-C);
  display: grid;
  grid-template-rows: 1fr 9fr 1fr;
  justify-items: center;
}
.closePopUp {
  width: 100%;
  background-color: var(--POPUP-ALT-C);
  color: var(--POPUP-C);
  cursor: pointer;
}
.binInsides {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit);
  gap: 0.5rem;
  align-content: start;
}
.binWrapper {
  width: 100%;
}
.binWrapper > .object {
  display: grid;
  grid-template-columns: 4fr max-content min-content 2rem;
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
  background-color: hsla(0, 0%, 0%, 0.495);
  color: var(--POPUP-C);
  overflow: hidden;
  place-items: center;
  z-index: 2;
}

.popUpfield {
  position: relative;
  height: 70%;
  width: clamp(300px, 90%, 700px);
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr) 5fr 5fr 5fr;
  background-color: var(--POPUP-BG-C);
  color: var(--POPUP-C);
  padding: 2rem;
  gap: 0.5rem;
  position: relative;
  z-index: 3;
}

.priorityWrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
}

.dueWrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  place-content: center;
}

.input {
  background-color: var(--POPUP-ALT-C);
  color: var(--POPUP-C);
  padding: 0.5rem;
}
.input::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
.input::-moz-calendar-picker-indicator {
  filter: invert(1);
}
textarea {
  background-color: var(--POPUP-ALT-C);
  color: var(--POPUP-C);
  resize: none;
  padding: 0.5rem;
}
.popUpButton {
  background-color: var(--POPUP-ALT-C);
  color: var(--POPUP-C);
  cursor: pointer;
}

/* CHECKBOX */

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--POPUP-ALT-C);
  background-color: CanvasText;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,+BAA+B;EAC/B,qBAAqB;EACrB,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,2CAA2C;EAC3C,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;EACpB,UAAU;EACV,2BAA2B;EAC3B,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,+BAA+B;EAC/B,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,iCAAiC;EACjC,UAAU;EACV,6BAA6B;AAC/B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,UAAU;AACZ;;AAEA,kBAAkB;;AAElB;EACE,2BAA2B;AAC7B;AACA;EACE,UAAU;AACZ;;AAEA,SAAS;;AAET;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,0BAA0B;EAC1B,+BAA+B;EAC/B,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uDAAuD;EACvD,oCAAoC;EACpC,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gDAAgD;AAClD;;AAEA;;EAEE,YAAY;EACZ,oBAAoB;EACpB,qCAAqC;EACrC,sBAAsB;EACtB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,WAAW;AACb;AACA;EACE,YAAY;EACZ,eAAe;EACf,oCAAoC;EACpC,sBAAsB;EACtB,aAAa;EACb,6CAA6C;EAC7C,WAAW;AACb;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,WAAW;EACX,iBAAiB;EACjB,qCAAqC;EACrC,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,iBAAiB;AACnB;AACA;;;;EAIE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,2CAA2C;AAC7C;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,4DAA4D;AAC9D;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,2DAA2D;EAC3D,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,0CAA0C;EAC1C,oCAAoC;EACpC,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,sCAAsC;EACtC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,qCAAqC;EACrC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n  --HEADER-BG-C: black;\r\n  --HEADER-C: aliceblue;\r\n  --OBJECT-BG-C: rgb(185, 102, 2);\r\n  --OBJECT-C: aliceblue;\r\n  --OBJECT-ALT-C: Rebeccapurple;\r\n  --MAIN-BG-C: darkseagreen;\r\n  --MAIN-C: aliceblue;\r\n  --CALENDAR-BG-C: darkorange;\r\n  --CALENDAR-C: black;\r\n  --CALENDAR-ALT-BG-C: aliceblue;\r\n  --CALENDAR-ALT-C: ;\r\n  --CALENDAR-HOVER-BG-C: rgba(0, 0, 0, 0.429);\r\n  /* PRIORITY */\r\n  --PRIORITY-LOW: green;\r\n  --PRIORITY-MED: yellow;\r\n  --PRIORITY-HIGH: red;\r\n  /* POPUP */\r\n  --POPUP-BG-C: Rebeccapurple;\r\n  --POPUP-C: aliceblue;\r\n  --POPUP-ALT-C: black;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 11vh 86vh 4vh;\r\n  overflow-y: hidden;\r\n  background-color: var(--MAIN-BG-C);\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navbar {\r\n  height: 100%;\r\n  border-bottom: 5px solid var(--HEADER-C);\r\n}\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 1rem 2rem;\r\n  background-color: var(--HEADER-BG-C);\r\n  gap: 1rem;\r\n}\r\n\r\n.navLi {\r\n  width: 100%;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n  background-color: transparent;\r\n  color: var(--HEADER-ALT2);\r\n  border: none;\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\n.navSpan {\r\n  user-select: none;\r\n  display: inline-block;\r\n  transition: transform 0.3s ease;\r\n  color: var(--HEADER-C);\r\n}\r\n.navSpan::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -7px;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--HEADER-C);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n}\r\n.navLi:hover .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi:hover .navSpan::before {\r\n  opacity: 1;\r\n}\r\n\r\n/* HEADER ACTIVE */\r\n\r\n.navLi.active .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi.active .navSpan::before {\r\n  opacity: 1;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.listContainer {\r\n  padding: 1rem clamp(0.2rem, 2%, 2rem);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: min-content;\r\n  justify-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  width: 100%;\r\n  height: 2rem;\r\n  align-items: center;\r\n  display: grid;\r\n  grid-template-columns: 2.5rem 3fr max-content 1rem 1rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  gap: 0.5rem;\r\n  padding: 0 0.5rem;\r\n  overflow: hidden;\r\n}\r\n.objDate {\r\n  font-size: 0.7rem;\r\n}\r\n.dailyContainer .object {\r\n  grid-template-columns: 2.5rem 1rem 3fr 1rem 1rem;\r\n}\r\n\r\n.newObject,\r\n.newNote {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  cursor: pointer;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 3rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  grid-template-columns: 1rem 4fr 1fr 1rem 1rem;\r\n  gap: 0.5rem;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  margin: -0.5rem;\r\n  width: 3rem;\r\n  font-size: 1.7rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n.objTitle,\r\n.taskTitle,\r\n.eventTitle,\r\n.noteTitle {\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  font-weight: 600;\r\n}\r\n.delete {\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n/* PROJ */\r\n\r\n.object.proj {\r\n  grid-template-columns: 2.5rem 3fr 1rem 1rem;\r\n}\r\n\r\n/* NOTES */\r\n\r\n.notesContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r\n}\r\n.newNote {\r\n  height: 2rem;\r\n  grid-column: 1 / -1;\r\n  justify-self: center;\r\n}\r\n\r\n.bigGrid {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  grid-column: 1/-1;\r\n  gap: 0.5rem;\r\n}\r\n.colGrid {\r\n  height: min-content;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n}\r\n\r\n#one {\r\n  display: grid;\r\n}\r\n#two {\r\n  display: none;\r\n}\r\n#three {\r\n  display: none;\r\n}\r\n#four {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 630px) {\r\n  #two {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 940px) {\r\n  #three {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 1258px) {\r\n  #four {\r\n    display: grid;\r\n  }\r\n}\r\n.noteObject {\r\n  height: max-content;\r\n  width: clamp(300px, 100%, 400px);\r\n  padding: 0.5rem;\r\n  overflow-x: auto;\r\n  display: grid;\r\n  grid-template-columns: 2fr 1.2fr 3rem 2rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  row-gap: 0.5rem;\r\n}\r\n.noteObject > .high {\r\n  background-color: var(--PRIORITY-HIGH);\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteObject > .low {\r\n  background-color: var(--PRIORITY-LOW);\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteDate {\r\n  text-align: center;\r\n}\r\n.noteMark {\r\n  cursor: pointer;\r\n}\r\n\r\n.noteBody {\r\n  max-width: 100%;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1/-1;\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n/* EVENTS */\r\n\r\n.eventsContainer {\r\n  height: 70vh;\r\n  width: clamp(300px, 100%, 700px);\r\n  background-color: var(--CALENDAR-BG-C);\r\n  color: var(--CALENDAR-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 8fr;\r\n}\r\n\r\n.dateWrapper {\r\n  height: 7vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  place-items: center;\r\n}\r\n\r\n.calendarWrapper {\r\n  padding: 1rem;\r\n}\r\n.headings {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  font-weight: bold;\r\n  place-items: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  place-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDay {\r\n  position: relative;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n}\r\n.calendarDay::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 25px;\r\n  width: 25px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  border-radius: 5px;\r\n}\r\n.calendarDay:hover::before {\r\n  background: var(--CALENDAR-HOVER-BG-C);\r\n}\r\n.inactive {\r\n  opacity: 0.5;\r\n}\r\n.selected::before {\r\n  border: 2px solid var(--CALENDAR-ALT-BG-C);\r\n}\r\n.eventNoteWrapper {\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 2rem);\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  background-color: var(--CALENDAR-ALT-BG-C);\r\n  gap: 0.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.eventNoteWrapper {\r\n  height: 31vh;\r\n}\r\n\r\n.weekEnd {\r\n  color: darkred;\r\n}\r\n.currentDay::before {\r\n  background-color: var(--CALENDAR-ALT-BG-C);\r\n}\r\n.arrow {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.priority {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  margin: 5px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.priority::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.priority:checked::before {\r\n  border: 2px solid var(--POPUP-C);\r\n}\r\n#low::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n#med::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n#high::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n.low {\r\n  outline: 3px solid var(--PRIORITY-LOW);\r\n}\r\n.med {\r\n  outline: 3px solid var(--PRIORITY-MED);\r\n}\r\n.high {\r\n  outline: 3px solid var(--PRIORITY-HIGH);\r\n}\r\n\r\n.eventlow::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n.eventmed::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n.eventhigh::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n/* COMPLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n  color: var(--HEADER-C);\r\n}\r\n\r\n/* BIN */\r\n\r\n.binBtn {\r\n  display: grid;\r\n  place-content: center;\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  position: absolute;\r\n  left: 1rem;\r\n  top: 86vh;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.binBox {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  border: 2px solid var(--POPUP-C);\r\n  background-color: var(--POPUP-BG-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 9fr 1fr;\r\n  justify-items: center;\r\n}\r\n.closePopUp {\r\n  width: 100%;\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\n.binInsides {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n  align-content: start;\r\n}\r\n.binWrapper {\r\n  width: 100%;\r\n}\r\n.binWrapper > .object {\r\n  display: grid;\r\n  grid-template-columns: 4fr max-content min-content 2rem;\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  position: absolute;\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.495);\r\n  color: var(--POPUP-C);\r\n  overflow: hidden;\r\n  place-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.popUpfield {\r\n  position: relative;\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 1fr) 5fr 5fr 5fr;\r\n  background-color: var(--POPUP-BG-C);\r\n  color: var(--POPUP-C);\r\n  padding: 2rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.dueWrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  place-content: center;\r\n}\r\n\r\n.input {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  padding: 0.5rem;\r\n}\r\n.input::-webkit-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\n.input::-moz-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\ntextarea {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  resize: none;\r\n  padding: 0.5rem;\r\n}\r\n.popUpButton {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\n\r\n/* CHECKBOX */\r\n\r\ninput[type=\"checkbox\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  margin: 0;\r\n  font: inherit;\r\n  color: currentColor;\r\n  width: 1.15em;\r\n  height: 1.15em;\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n  content: \"\";\r\n  width: 0.65em;\r\n  height: 0.65em;\r\n  transform: scale(0);\r\n  transition: 120ms transform ease-in-out;\r\n  box-shadow: inset 1em 1em var(--POPUP-ALT-C);\r\n  background-color: CanvasText;\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n  transform: scale(1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus {\r\n  outline: max(2px, 0.15em) solid currentColor;\r\n  outline-offset: max(2px, 0.15em);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");





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
          const dueTimeObject = new Date(_renderEventsPage__WEBPACK_IMPORTED_MODULE_2__.selectedDate);
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
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_3__.toLocalStorage)();
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

/***/ "./src/editNote.js":
/*!*************************!*\
  !*** ./src/editNote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editNote: () => (/* binding */ editNote)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");



const editNote = (ev) => {
  const target = ev.target;
  const targetId = ev.target.id;
  const objectId = Number(ev.target.id.slice(2));
  const object = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((obj) => obj.id === objectId);
  if (targetId.slice(0, 2) === "nt") {
    object.title = target.textContent;
  } else if (targetId.slice(0, 2) === "nb") {
    object.note = target.textContent;
  }
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)();
};


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
  startOfDay.setHours(0, 0);
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

/***/ "./src/filterNoteGrids.js":
/*!********************************!*\
  !*** ./src/filterNoteGrids.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterNoteGrids: () => (/* binding */ filterNoteGrids)
/* harmony export */ });
const filterNoteGrids = (grids) => {
  const filtered = Array.from(grids).filter((node) => {
    const display = window.getComputedStyle(node);
    return display.display !== "none";
  });
  return filtered;
};


/***/ }),

/***/ "./src/filterRemoved.js":
/*!******************************!*\
  !*** ./src/filterRemoved.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterRemoved: () => (/* binding */ filterRemoved)
/* harmony export */ });
/* harmony import */ var _removeCompleted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeCompleted */ "./src/removeCompleted.js");


const filterRemoved = (array) => {
  const filtered = array.filter(
    (item) => !_removeCompleted__WEBPACK_IMPORTED_MODULE_0__.bin.some((binItem) => binItem.id === item.id)
  );
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

/***/ "./src/fromLocalStorage.js":
/*!*********************************!*\
  !*** ./src/fromLocalStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromLocalStorage: () => (/* binding */ fromLocalStorage)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idGenerator */ "./src/idGenerator.js");
/* harmony import */ var _removeCompleted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeCompleted */ "./src/removeCompleted.js");
/* harmony import */ var _parseIsoDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseIsoDate */ "./src/parseIsoDate.js");





const fromLocalStorage = () => {
  const storedStoredId = localStorage.getItem("storedId");
  if (storedStoredId !== null) {
    (0,_idGenerator__WEBPACK_IMPORTED_MODULE_1__.setStoredId)(parseInt(storedStoredId));
  }
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects !== null) {
    const parsedArray = JSON.parse(storedProjects);
    const nonNullArray = parsedArray.filter((item) => item !== null);
    const convertedArray = (0,_parseIsoDate__WEBPACK_IMPORTED_MODULE_3__.parseIsoDate)(nonNullArray);
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.setProjects)(convertedArray);
  } else {
  }
  const storedBin = localStorage.getItem("bin");
  if (storedBin !== null) {
    const parsedArray = JSON.parse(storedBin);
    const nonNullArray = parsedArray.filter((item) => item !== null);
    const convertedArray = (0,_parseIsoDate__WEBPACK_IMPORTED_MODULE_3__.parseIsoDate)(nonNullArray);
    (0,_removeCompleted__WEBPACK_IMPORTED_MODULE_2__.setBin)(convertedArray);
  } else {
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
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");




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
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_2__.toLocalStorage)();
}

const checkCompletion = (ev) => {
  const checkBoxId = ev ? Number(ev.target.id.slice(1)) : null;
  const targetChecked = ev ? ev.target.checked : null;
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
      (obj.type === "daily" && targetChecked && checkBoxId === obj.id)
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
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");








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
      const selected = new Date(_renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.selectedDate);
      selected.setHours(hours);
      selected.setMinutes(minutes);
      dueDate = selected;
    } else {
      const newSelected = new Date(_renderEventsPage__WEBPACK_IMPORTED_MODULE_5__.selectedDate);
      dueDate = newSelected;
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
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_6__.toLocalStorage)();
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
/* harmony export */   generatedId: () => (/* binding */ generatedId),
/* harmony export */   setStoredId: () => (/* binding */ setStoredId),
/* harmony export */   storedId: () => (/* binding */ storedId)
/* harmony export */ });
let storedId = 0;

const generateId = () => {
  return function () {
    storedId++;
    return storedId;
  };
};

let generatedId = generateId();
const setStoredId = (value) => {
  storedId = value;
};


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
/* harmony import */ var _isLocalStorageAvailable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLocalStorageAvailable */ "./src/isLocalStorageAvailable.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _renderBin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBin */ "./src/renderBin.js");




const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#daily");
  button.classList.add("active");
  piece2();
  piece3();
  (0,_isLocalStorageAvailable__WEBPACK_IMPORTED_MODULE_0__.isLocalStorageAvailable)();
  (0,_renderBin__WEBPACK_IMPORTED_MODULE_2__.renderBin)();
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_1__.renderObjects)();
};


/***/ }),

/***/ "./src/isLocalStorageAvailable.js":
/*!****************************************!*\
  !*** ./src/isLocalStorageAvailable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLocalStorageAvailable: () => (/* binding */ isLocalStorageAvailable)
/* harmony export */ });
/* harmony import */ var _fromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromLocalStorage */ "./src/fromLocalStorage.js");


function isLocalStorageAvailable() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

if (isLocalStorageAvailable()) {
  (0,_fromLocalStorage__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)();
} else {
  console.log("local storage is not available");
}


/***/ }),

/***/ "./src/parseIsoDate.js":
/*!*****************************!*\
  !*** ./src/parseIsoDate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseIsoDate: () => (/* binding */ parseIsoDate)
/* harmony export */ });
const parseIsoDate = (array) => {
  array.forEach((object) => {
    if (object.dueDate) {
      object.dueDate = convertDate(object.dueDate);
    }
    if (object.completionDate) {
      object.completionDate = convertDate(object.completionDate);
    }
    if (object.addedDate) {
      object.addedDate = convertDate(object.addedDate);
    }
    if (object.tasks) {
      object.tasks.forEach((task) => {
        if (task.dueDate) {
          task.dueDate = convertDate(task.dueDate);
        }
        if (task.completionDate) {
          task.completionDate = convertDate(task.completionDate);
        }
        if (task.addedDate) {
          task.addedDate = convertDate(task.addedDate);
        }
      });
    }
  });
  return array;
};

const convertDate = (date) => {
  const parsedDate = new Date(date);
  return parsedDate;
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
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   setProjects: () => (/* binding */ setProjects)
/* harmony export */ });
let projects = [];

const setProjects = (value) => {
  projects = value;
};

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
/* harmony export */   checkDueDatesAndRemoveCompleted: () => (/* binding */ checkDueDatesAndRemoveCompleted),
/* harmony export */   setBin: () => (/* binding */ setBin)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderObjects */ "./src/renderObjects.js");
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCompletion */ "./src/getCompletion.js");
/* harmony import */ var _renderBin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderBin */ "./src/renderBin.js");




let bin = [];

const setBin = (value) => {
  bin = value;
};

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
  const binBox = document.querySelector(".binBox");
  if (binBox) {
    (0,_renderBin__WEBPACK_IMPORTED_MODULE_3__.populateBin)();
  }
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
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");




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
        _removeCompleted__WEBPACK_IMPORTED_MODULE_1__.bin.push(_projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1)[0]);
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
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_2__.toLocalStorage)();
};


/***/ }),

/***/ "./src/renderBin.js":
/*!**************************!*\
  !*** ./src/renderBin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateBin: () => (/* binding */ populateBin),
/* harmony export */   renderBin: () => (/* binding */ renderBin)
/* harmony export */ });
/* harmony import */ var _removeCompleted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeCompleted */ "./src/removeCompleted.js");
/* harmony import */ var _clearPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearPopUp */ "./src/clearPopUp.js");
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatDate */ "./src/formatDate.js");





const renderBin = () => {
  const container = document.querySelector("main");
  const bin = ` <div class="binBtnWrapper">
    <div class="binBtn">BIN</div>
  </div>`;

  container.insertAdjacentHTML("beforeend", bin);
  const binBtn = document.querySelector(".binBtn");
  binBtn.removeEventListener("click", openBinEvent);
  binBtn.addEventListener("click", openBinEvent);
};

const renderBinContainer = () => {
  const container = document.querySelector("main");
  const bin = `<div class="popUpContainer">
    <div class="binBox">
      <h2 class="bin__h2">BIN STORAGE</h2>
      <div class="binInsides"></div>
      <button class="closePopUp">Close</button>
    </div>
  </div>`;
  container.insertAdjacentHTML("beforeend", bin);
  populateBin();
  const closeBtn = document.querySelector(".closePopUp");
  const cover = document.querySelector(".popUpContainer");
  closeBtn.removeEventListener("click", closePopUpEvent);
  closeBtn.addEventListener("click", closePopUpEvent);
  cover.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("popUpContainer")) {
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_1__.clearPopUp)();
    }
  });
};

const populateBin = () => {
  clearRenderedBinItems();
  _removeCompleted__WEBPACK_IMPORTED_MODULE_0__.bin.forEach((item) => {
    renderBinItem(item);
  });
};

const renderBinItem = (item) => {
  const container = document.querySelector(".binInsides");
  const binItem = `<div class="binWrapper wrapper" id="bi${item.id}">
  <div class="object ${item.priority} ${item.complete}" id="bo${item.id} ">
  <p class="objectTitle" id="bt${item.id}">${item.title}</p>
  <p class="objectDate" id="bd${item.id}">${(0,_formatDate__WEBPACK_IMPORTED_MODULE_3__.formatDate)(item.completionDate)}</p>
  <p class="objectType" id="bd${item.id}">${item.type}</p>
  <p class="delete" id="dp${item.id}">D</p>
</div>
</div>`;

  container.insertAdjacentHTML("beforeend", binItem);
  listeners();
};

const clearRenderedBinItems = () => {
  const renderedBinItems = document.querySelectorAll(".binWrapper");
  renderedBinItems.forEach((item) => {
    item.remove();
  });
};

const removeBinItem = (ev) => {
  const itemId = Number(ev.target.id.slice(2));
  const itemIndex = _removeCompleted__WEBPACK_IMPORTED_MODULE_0__.bin.findIndex((obj) => obj.id === itemId);
  _removeCompleted__WEBPACK_IMPORTED_MODULE_0__.bin.splice(itemIndex, 1);
};

const listeners = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.removeEventListener("click", removeEvent);
    btn.addEventListener("click", removeEvent);
  });
};

const closePopUpEvent = (ev) => {
  ev.preventDefault();
  (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_1__.clearPopUp)();
};

const removeEvent = (ev) => {
  ev.stopPropagation();
  removeBinItem(ev);
  populateBin();
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_2__.toLocalStorage)();
};

const openBinEvent = (ev) => {
  renderBinContainer();
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
    dateElement = `
    <div class="dueWrapper">
    <label for="date" class="label">Due:</label>
  <input class="input" type="date" id="date" value="${(0,_formatDate__WEBPACK_IMPORTED_MODULE_5__.formatDate)(
    object.dueDate
  )}">
  </div>`;
  } else if (object.type === "events") {
    dateElement = `
    <div class="dueWrapper">
    <label for="time" class="label">Due:</label>
    <input type="time" id="time" value="${(0,_formatTime__WEBPACK_IMPORTED_MODULE_6__.formatTime)(object.dueDate)}">
    </div>`;
  }

  if (object.type === "notes") {
    const note = `<div class="popUpContainer">
    <div class="popUpfield" id="editTask">
      <input name="title" class="input" type="text" id="title" value="${
        object.title
      }" autofocus  placeholder="Title goes here"/>
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
    <input name="title" class="input" type="text" id="title" value="${
      object.title
    }" autofocus  placeholder="Title goes here"/>
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
    <textarea name="note" id="projNote" cols="30" rows="10" placeholder="Note goes here">${
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
  const cover = document.querySelector(".popUpContainer");
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
  cover.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("popUpContainer")) {
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    }
  });
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
      <div class="arrow backward" id="backward"><</div>
      <p class="currentDate"></p>
      <div class="arrow forward" id="forward">></div>
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
     
    </div>
    <div class="eventNoteWrapper">
    <div class="newObject" id="newEvent">
     <p class="newObject__p">Add Event</p>
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
/* harmony import */ var _formatTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatTime */ "./src/formatTime.js");








const renderGetPopUp = (objId) => {
  const currentTime = new Date();
  const container = document.querySelector("main");
  let objectId = objId;

  if (objId instanceof PointerEvent) {
    objectId = undefined;
  }
  let dateElement = "";
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "daily") {
    dateElement = "";
  } else if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "events") {
    dateElement = `
    <div class="dueWrapper">
    <label for="time" class="label">Due:</label>
    <input class="input" type="time" id="time" value="${(0,_formatTime__WEBPACK_IMPORTED_MODULE_6__.formatTime)(
      currentTime
    )}">
    </div>`;
  } else if (
    objectId === undefined &&
    (0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() !== "events" &&
    (0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() !== "daily"
  ) {
    dateElement = `
    <div class="dueWrapper">
    <label for="date" class="label">Due:</label>
         <input class="input" type="date" id="date"></input>
         </div>`;
  } else if (objectId !== undefined) {
    dateElement = "";
  }

  if ((0,_getType__WEBPACK_IMPORTED_MODULE_3__.getType)() === "notes") {
    notes();
  } else {
    const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="addTask">
    <input name="title" class="input" type="text" id="title" autofocus placeholder="Title goes here"/>
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" checked />
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" />
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" />
    </div>
    ${dateElement}
    <textarea name="note" id="projNote" cols="30" rows="10" placeholder="Note goes here"></textarea>
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
  const cover = document.querySelector(".popUpContainer");
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
  cover.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("popUpContainer")) {
      (0,_clearPopUp__WEBPACK_IMPORTED_MODULE_0__.clearPopUp)();
    }
  });
};

const notes = () => {
  const container = document.querySelector("main");
  const note = `<div class="popUpContainer">
  <div class="popUpfield" id="editTask">
    <input name="title" class="input" type="text" id="title" " autofocus placeholder="Title goes here" />
    <p class="noteDate" id="noteDate"></p>
    <div class="noteMark low" data-priority="low" id="notePriority">M</div>
    <textarea name="note" id="projNote" cols="30" rows="10" placeholder="Note goes here"></textarea>
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
  <div class="bigGrid">
    <div class="colGrid" id="one"></div>
    <div class="colGrid" id="two"></div>
    <div class="colGrid" id="three"></div>
    <div class="colGrid" id="four"></div>
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
/* harmony import */ var _filterRemoved__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filterRemoved */ "./src/filterRemoved.js");
/* harmony import */ var _filterNoteGrids__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filterNoteGrids */ "./src/filterNoteGrids.js");
/* harmony import */ var _editNote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editNote */ "./src/editNote.js");




















const renderObjects = () => {
  (0,_clearRenderedProjects__WEBPACK_IMPORTED_MODULE_10__.clearRenderedProjects)();
  const grids = document.querySelectorAll(".colGrid");
  const filteredGrids = (0,_filterNoteGrids__WEBPACK_IMPORTED_MODULE_17__.filterNoteGrids)(grids);
  const arrayOfType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_7__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
  let dailyArray = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(arrayOfType);
  if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily") {
    dailyArray = (0,_filterByToday__WEBPACK_IMPORTED_MODULE_8__.filterByToday)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
    const filterOutRemoved = (0,_filterRemoved__WEBPACK_IMPORTED_MODULE_16__.filterRemoved)(dailyArray);
    const sorted = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(filterOutRemoved);
    sorted.forEach((proj) => {
      renderObject(proj);
      (0,_renderProjTask__WEBPACK_IMPORTED_MODULE_0__.renderProjTask)(proj);
    });
  } else if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "notes") {
    let j = 0;
    for (let i = 0; i < dailyArray.length; i++) {
      if (j >= filteredGrids.length) {
        j = 0;
      }
      renderNotes(dailyArray[i], filteredGrids[j]);
      j++;
    }
  } else if ((0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "events") {
    const filteredByType = (0,_filterByType__WEBPACK_IMPORTED_MODULE_7__.filterByType)(_projects__WEBPACK_IMPORTED_MODULE_1__.projects);
    const filteredByDate = (0,_filterByDate__WEBPACK_IMPORTED_MODULE_12__.filterByDate)(filteredByType);
    if (filteredByDate) {
      dailyArray = filteredByDate;
      const sorted = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(dailyArray);
      sorted.forEach((object) => {
        renderEvents(object);
      });
    } else {
      dailyArray = (0,_filterByToday__WEBPACK_IMPORTED_MODULE_8__.filterByToday)(filteredByType);
      const sorted = (0,_sortArray__WEBPACK_IMPORTED_MODULE_4__.sortArray)(dailyArray);
      sorted.forEach((object) => {
        renderEvents(object);
      });
    }
  } else {
    const filterOutRemoved = (0,_filterRemoved__WEBPACK_IMPORTED_MODULE_16__.filterRemoved)(dailyArray);
    filterOutRemoved.forEach((proj) => {
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

  let deleteElement = `<p class="delete" id="dp${proj.id}">D</p>`;
  let addTask = `
  <div class="newTask" id="nt${proj.id}">
      <p class="newTask__p">+</p>
  </div>`;

  if (
    (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily" &&
    (proj.type === "proj" || proj.type === "events")
  ) {
    addTask = `<div class="filler"></div>`;
    deleteElement = "";
  }
  let checkElement = `${addTask}`;
  if (proj.type === "daily" && proj.tasks.length === 0) {
    checkElement = `${addTask}
    <input type="checkbox" class="completion" name="completion" id="${"c"}${
      proj.id
    }"  ${check(proj.complete)}/>`;
  } else if (proj.type === "daily" && proj.tasks.length !== 0) {
    checkElement = `${addTask}
    <div class="filler"></div>`;
  }

  const formattedDueDate =
    proj.dueDate && !isNaN(proj.dueDate) ? (0,_formatDate__WEBPACK_IMPORTED_MODULE_13__.formatDate)(proj.dueDate) : "";
  const dueDate = `<p class="objDate">Due:${formattedDueDate}</p>`;
  const dueTime = `<p class="objTime">On:${(0,_formatTime__WEBPACK_IMPORTED_MODULE_14__.formatTime)(proj.dueDate)}</p>`;
  const Object = `
<div class="objectWrapper wrapper" id="pw${proj.id}">
<div class="object ${proj.priority} ${proj.complete} ${
    (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily" ? proj.type : ""
  }" id="${"pp"}${proj.id}">
${checkElement}
  <p class="objTitle">${proj.title}</p>
  ${
    proj.type === "daily"
      ? ""
      : proj.type === "proj" && (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() !== "daily"
      ? dueDate
      : proj.type === "events"
      ? dueTime
      : ""
  }
  <p class="objNote">${proj.note === "" ? "" : "N"}</p>
  ${deleteElement}
</div>
<div class="taskWrapper" id="tw${proj.id}">
</div>
</div>`;
  container.insertAdjacentHTML("beforeend", Object);
};

const renderNotes = (object, targetGrid) => {
  const formattedDate = (0,_formatDate__WEBPACK_IMPORTED_MODULE_13__.formatDate)(object.addedDate);
  const container = targetGrid;
  const Note = `<div class="noteWrapper wrapper" id="pw${object.id}">
      <div class="noteObject" id="no${object.id}">
      <p class="noteTitle editable" id="nt${object.id}" contentEditable="true">${object.title}</p>
      <p class="noteDate" id="nd${object.id}">${formattedDate}</p>
      <div class="noteMark ${object.priority}" id="nm${object.id}">M
      </div>
      <p class="delete" id="dp${object.id}">D</p>
      <p class="noteBody editable" id="nb${object.id}" contentEditable="true">${object.note}</p>
    </div>
    </div>`;
  container.insertAdjacentHTML("beforeend", Note);
};

const renderEvents = (object) => {
  const container = document.querySelector(".eventNoteWrapper");
  const dateElement = object.type === "proj" ? "" : (0,_formatTime__WEBPACK_IMPORTED_MODULE_14__.formatTime)(object.dueDate);
  const eventElement = `<div class="EventWrapper wrapper" id="pw${object.id}">
  <div class="object ${object.priority} ${object.complete}" id="eo${
    object.id
  } ">
  <p class="eventDate" id="ed${object.id}">${dateElement}</p>
  <p class="eventTitle" id="et${object.id}">${object.title}</p>
  <div class="filler"></div>
  <p class="eventNote" id="eb${object.id}">${object.note ? "N" : ""}</p>
  <p class="delete" id="dp${object.id}">D</p>
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
  const editable = document.querySelectorAll(".editable");
  editable.forEach((input) => {
    input.removeEventListener("input", inputEvent);
    input.addEventListener("input", inputEvent);
  });
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

const inputEvent = (ev) => {
  (0,_editNote__WEBPACK_IMPORTED_MODULE_18__.editNote)(ev);
};

const editProjectEvent = (ev) => {
  const target = ev.target.closest(".object");
  if (
    !ev.target.classList.contains("completion") &&
    !ev.target.classList.contains("noteMark") &&
    !ev.target.classList.contains("newTask") &&
    !ev.target.classList.contains("newTask__p")
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

window.addEventListener("resize", () => {
  renderObjects();
});


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
    } else {
      dateElement = `<div class="filler"></div>`;
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
/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toLocalStorage */ "./src/toLocalStorage.js");



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
  (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)();
};


/***/ }),

/***/ "./src/toLocalStorage.js":
/*!*******************************!*\
  !*** ./src/toLocalStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toLocalStorage: () => (/* binding */ toLocalStorage)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _idGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idGenerator */ "./src/idGenerator.js");
/* harmony import */ var _removeCompleted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeCompleted */ "./src/removeCompleted.js");




const toLocalStorage = () => {
  localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));
  localStorage.setItem("storedId", JSON.stringify(_idGenerator__WEBPACK_IMPORTED_MODULE_1__.storedId));
  localStorage.setItem("bin", JSON.stringify(_removeCompleted__WEBPACK_IMPORTED_MODULE_2__.bin));
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

setInterval(_removeCompleted__WEBPACK_IMPORTED_MODULE_12__.checkDueDatesAndRemoveCompleted, 1000 * 60);
document.addEventListener("keydown", _handleEscape__WEBPACK_IMPORTED_MODULE_10__.handleEscape);
document.addEventListener("keydown", _handleEnter__WEBPACK_IMPORTED_MODULE_11__.handleEnter);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FB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Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ1U7QUFDSTtBQUNGO0FBQ1o7QUFDVTtBQUNWO0FBQ0U7QUFDVTtBQUNOO0FBQ0Y7QUFDd0I7QUFDcEU7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsNkRBQWUsRUFBRSxpREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksdURBQVU7QUFDZDtBQUNBLE1BQU0sMkRBQWM7QUFDcEIsTUFBTSw2REFBZTtBQUNyQixNQUFNLCtEQUFnQjtBQUN0QixNQUFNLDZEQUFlO0FBQ3JCO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFlBQVksOEVBQStCO0FBQzNDLHFDQUFxQyx3REFBWTtBQUNqRCxxQ0FBcUMsc0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jbGVhclBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUmVuZGVyZWRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0Tm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0UHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlEYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlckJ5VG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlck5vdGVHcmlkcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJSZW1vdmVkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb3JtYXREYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm1hdFRpbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZnJvbUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRDb21wbGV0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldE9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVudGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVzY2FwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaWRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFyc2VJc29EYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckJpbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJEYWlseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRWRpdFBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckV2ZW50c1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyR2V0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyTm90ZXNQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlck9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3dpdGNoUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAvKiBWQVJJQUJMRVMgKi9cclxuICAtLUhFQURFUi1CRy1DOiBibGFjaztcclxuICAtLUhFQURFUi1DOiBhbGljZWJsdWU7XHJcbiAgLS1PQkpFQ1QtQkctQzogcmdiKDE4NSwgMTAyLCAyKTtcclxuICAtLU9CSkVDVC1DOiBhbGljZWJsdWU7XHJcbiAgLS1PQkpFQ1QtQUxULUM6IFJlYmVjY2FwdXJwbGU7XHJcbiAgLS1NQUlOLUJHLUM6IGRhcmtzZWFncmVlbjtcclxuICAtLU1BSU4tQzogYWxpY2VibHVlO1xyXG4gIC0tQ0FMRU5EQVItQkctQzogZGFya29yYW5nZTtcclxuICAtLUNBTEVOREFSLUM6IGJsYWNrO1xyXG4gIC0tQ0FMRU5EQVItQUxULUJHLUM6IGFsaWNlYmx1ZTtcclxuICAtLUNBTEVOREFSLUFMVC1DOiA7XHJcbiAgLS1DQUxFTkRBUi1IT1ZFUi1CRy1DOiByZ2JhKDAsIDAsIDAsIDAuNDI5KTtcclxuICAvKiBQUklPUklUWSAqL1xyXG4gIC0tUFJJT1JJVFktTE9XOiBncmVlbjtcclxuICAtLVBSSU9SSVRZLU1FRDogeWVsbG93O1xyXG4gIC0tUFJJT1JJVFktSElHSDogcmVkO1xyXG4gIC8qIFBPUFVQICovXHJcbiAgLS1QT1BVUC1CRy1DOiBSZWJlY2NhcHVycGxlO1xyXG4gIC0tUE9QVVAtQzogYWxpY2VibHVlO1xyXG4gIC0tUE9QVVAtQUxULUM6IGJsYWNrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTF2aCA4NnZoIDR2aDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUFJTi1CRy1DKTtcclxufVxyXG5cclxuLyogSEVBREVSICovXHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLUhFQURFUi1DKTtcclxufVxyXG5cclxuLm5hdlVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQkctQyk7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubmF2TGkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQUxUMik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZTcGFuIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcbi5uYXZTcGFuOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQyk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW46OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogSEVBREVSIEFDVElWRSAqL1xyXG5cclxuLm5hdkxpLmFjdGl2ZSAubmF2U3BhbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW46OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogTUFJTiAqL1xyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxpc3RDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gY2xhbXAoMC4ycmVtLCAyJSwgMnJlbSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vYmplY3RXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLm9iamVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgbWF4LWNvbnRlbnQgMXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm9iakRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcbi5kYWlseUNvbnRhaW5lciAub2JqZWN0IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAxcmVtIDNmciAxcmVtIDFyZW07XHJcbn1cclxuXHJcbi5uZXdPYmplY3QsXHJcbi5uZXdOb3RlIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGFza1dyYXBwZXIge1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLlRhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gNGZyIDFmciAxcmVtIDFyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLm5ld1Rhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBtYXJnaW46IC0wLjVyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YXNrRGF0ZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4ub2JqVGl0bGUsXHJcbi50YXNrVGl0bGUsXHJcbi5ldmVudFRpdGxlLFxyXG4ubm90ZVRpdGxlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmRlbGV0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogUFJPSiAqL1xyXG5cclxuLm9iamVjdC5wcm9qIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgMXJlbSAxcmVtO1xyXG59XHJcblxyXG4vKiBOT1RFUyAqL1xyXG5cclxuLm5vdGVzQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcclxufVxyXG4ubmV3Tm90ZSB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWdHcmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5jb2xHcmlkIHtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQpO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4jb25lIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbiN0d28ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3RocmVlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNmb3VyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjMwcHgpIHtcclxuICAjdHdvIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5NDBweCkge1xyXG4gICN0aHJlZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1OHB4KSB7XHJcbiAgI2ZvdXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuLm5vdGVPYmplY3Qge1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCAxMDAlLCA0MDBweCk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxLjJmciAzcmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgcm93LWdhcDogMC41cmVtO1xyXG59XHJcbi5ub3RlT2JqZWN0ID4gLmhpZ2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ub3RlT2JqZWN0ID4gLmxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm90ZURhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm90ZU1hcmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vdGVCb2R5IHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4vKiBFVkVOVFMgKi9cclxuXHJcbi5ldmVudHNDb250YWluZXIge1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDcwMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DQUxFTkRBUi1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tQ0FMRU5EQVItQyk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XHJcbn1cclxuXHJcbi5kYXRlV3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWxlbmRhcldyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmhlYWRpbmdzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5jYWxlbmRhckRheXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhbGVuZGFyRGF5OjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jYWxlbmRhckRheTpob3Zlcjo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1DQUxFTkRBUi1IT1ZFUi1CRy1DKTtcclxufVxyXG4uaW5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xyXG59XHJcbi5ldmVudE5vdGVXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMnJlbSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1CRy1DKTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZXZlbnROb3RlV3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAzMXZoO1xyXG59XHJcblxyXG4ud2Vla0VuZCB7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuLmN1cnJlbnREYXk6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xyXG59XHJcbi5hcnJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFBSSU9SSVRZICovXHJcblxyXG4ucHJpb3JpdHkge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByaW9yaXR5OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4ucHJpb3JpdHk6Y2hlY2tlZDo6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcclxufVxyXG4jbG93OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XHJcbn1cclxuI21lZDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xyXG59XHJcbiNoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4ubG93IHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4ubWVkIHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTUVEKTtcclxufVxyXG4uaGlnaCB7XHJcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4uZXZlbnRsb3c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTUVEKTtcclxufVxyXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4vKiBDT01QTEVURUQgKi9cclxuXHJcbi50cnVlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhbHNlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBOmFueS1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcblxyXG4vKiBCSU4gKi9cclxuXHJcbi5iaW5CdG4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDFyZW07XHJcbiAgdG9wOiA4NnZoO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmluQm94IHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNzAwcHgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVBPUFVQLUMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlUG9wVXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iaW5JbnNpZGVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxufVxyXG4uYmluV3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJpbldyYXBwZXIgPiAub2JqZWN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIG1heC1jb250ZW50IG1pbi1jb250ZW50IDJyZW07XHJcbn1cclxuXHJcbi8qIFBPUFVQICovXHJcblxyXG4ucG9wVXBDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQ5NSk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucG9wVXBmaWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDFmcikgNWZyIDVmciA1ZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5wcmlvcml0eVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZHVlV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi5pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG4uaW5wdXQ6Oi1tb3otY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4ucG9wVXBCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDSEVDS0JPWCAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgd2lkdGg6IDEuMTVlbTtcclxuICBoZWlnaHQ6IDEuMTVlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwLjY1ZW07XHJcbiAgaGVpZ2h0OiAwLjY1ZW07XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDViwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0VB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RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLDRDQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVFQUF1RTtBQUN6RTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogVkFSSUFCTEVTICovXFxyXFxuICAtLUhFQURFUi1CRy1DOiBibGFjaztcXHJcXG4gIC0tSEVBREVSLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tT0JKRUNULUJHLUM6IHJnYigxODUsIDEwMiwgMik7XFxyXFxuICAtLU9CSkVDVC1DOiBhbGljZWJsdWU7XFxyXFxuICAtLU9CSkVDVC1BTFQtQzogUmViZWNjYXB1cnBsZTtcXHJcXG4gIC0tTUFJTi1CRy1DOiBkYXJrc2VhZ3JlZW47XFxyXFxuICAtLU1BSU4tQzogYWxpY2VibHVlO1xcclxcbiAgLS1DQUxFTkRBUi1CRy1DOiBkYXJrb3JhbmdlO1xcclxcbiAgLS1DQUxFTkRBUi1DOiBibGFjaztcXHJcXG4gIC0tQ0FMRU5EQVItQUxULUJHLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tQ0FMRU5EQVItQUxULUM6IDtcXHJcXG4gIC0tQ0FMRU5EQVItSE9WRVItQkctQzogcmdiYSgwLCAwLCAwLCAwLjQyOSk7XFxyXFxuICAvKiBQUklPUklUWSAqL1xcclxcbiAgLS1QUklPUklUWS1MT1c6IGdyZWVuO1xcclxcbiAgLS1QUklPUklUWS1NRUQ6IHllbGxvdztcXHJcXG4gIC0tUFJJT1JJVFktSElHSDogcmVkO1xcclxcbiAgLyogUE9QVVAgKi9cXHJcXG4gIC0tUE9QVVAtQkctQzogUmViZWNjYXB1cnBsZTtcXHJcXG4gIC0tUE9QVVAtQzogYWxpY2VibHVlO1xcclxcbiAgLS1QT1BVUC1BTFQtQzogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTF2aCA4NnZoIDR2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1BSU4tQkctQyk7XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLUhFQURFUi1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdlVsIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUJHLUMpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2U3BhbiB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xcclxcbn1cXHJcXG4ubmF2U3Bhbjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtN3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1DKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLm5hdkxpOmhvdmVyIC5uYXZTcGFuIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcXHJcXG59XFxyXFxuLm5hdkxpOmhvdmVyIC5uYXZTcGFuOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSIEFDVElWRSAqL1xcclxcblxcclxcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbn1cXHJcXG4ubmF2TGkuYWN0aXZlIC5uYXZTcGFuOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5saXN0Q29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gY2xhbXAoMC4ycmVtLCAyJSwgMnJlbSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2JqZWN0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ub2JqZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgbWF4LWNvbnRlbnQgMXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4ub2JqRGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuLmRhaWx5Q29udGFpbmVyIC5vYmplY3Qge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVyZW0gMXJlbSAzZnIgMXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3T2JqZWN0LFxcclxcbi5uZXdOb3RlIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1dyYXBwZXIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLlRhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gNGZyIDFmciAxcmVtIDFyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm5ld1Rhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBtYXJnaW46IC0wLjVyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcbi5vYmpUaXRsZSxcXHJcXG4udGFza1RpdGxlLFxcclxcbi5ldmVudFRpdGxlLFxcclxcbi5ub3RlVGl0bGUge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbi5kZWxldGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KICovXFxyXFxuXFxyXFxuLm9iamVjdC5wcm9qIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDNmciAxcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIE5PVEVTICovXFxyXFxuXFxyXFxuLm5vdGVzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOTBweCwgMWZyKSk7XFxyXFxufVxcclxcbi5uZXdOb3RlIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ0dyaWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4uY29sR3JpZCB7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQpO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNvbmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuI3R3byB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jdGhyZWUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuI2ZvdXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDYzMHB4KSB7XFxyXFxuICAjdHdvIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDk0MHB4KSB7XFxyXFxuICAjdGhyZWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1OHB4KSB7XFxyXFxuICAjZm91ciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ub3RlT2JqZWN0IHtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDQwMHB4KTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMS4yZnIgM3JlbSAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm5vdGVPYmplY3QgPiAuaGlnaCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ub3RlT2JqZWN0ID4gLmxvdyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5vdGVEYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5vdGVNYXJrIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVCb2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRVZFTlRTICovXFxyXFxuXFxyXFxuLmV2ZW50c0NvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDcwMHB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLUNBTEVOREFSLUMpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJXcmFwcGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi5oZWFkaW5ncyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLUNBTEVOREFSLUhPVkVSLUJHLUMpO1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XFxyXFxufVxcclxcbi5ldmVudE5vdGVXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDJyZW0pO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ldmVudE5vdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogMzF2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtFbmQge1xcclxcbiAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcbi5jdXJyZW50RGF5OjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xcclxcbn1cXHJcXG4uYXJyb3cge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJJT1JJVFkgKi9cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJpb3JpdHk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuLnByaW9yaXR5OmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcXHJcXG59XFxyXFxuI2xvdzo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XFxyXFxufVxcclxcbiNtZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xcclxcbn1cXHJcXG4jaGlnaDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbn1cXHJcXG4ubWVkIHtcXHJcXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1QUklPUklUWS1NRUQpO1xcclxcbn1cXHJcXG4uaGlnaCB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktSElHSCk7XFxyXFxufVxcclxcblxcclxcbi5ldmVudGxvdzo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XFxyXFxufVxcclxcbi5ldmVudG1lZDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLU1FRCk7XFxyXFxufVxcclxcbi5ldmVudGhpZ2g6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09NUExFVEVEICovXFxyXFxuXFxyXFxuLnRydWUge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uZmFsc2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb3RlckE6YW55LWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQklOICovXFxyXFxuXFxyXFxuLmJpbkJ0biB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDFyZW07XFxyXFxuICB0b3A6IDg2dmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmluQm94IHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVBPUFVQLUMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQkctQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlUG9wVXAge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5iaW5JbnNpZGVzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcbi5iaW5XcmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYmluV3JhcHBlciA+IC5vYmplY3Qge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIG1heC1jb250ZW50IG1pbi1jb250ZW50IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBPUFVQICovXFxyXFxuXFxyXFxuLnBvcFVwQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNDk1KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwZmllbGQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNzAwcHgpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMWZyKSA1ZnIgNWZyIDVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kdWVXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcbi5pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbn1cXHJcXG4uaW5wdXQ6Oi1tb3otY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxudGV4dGFyZWEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4ucG9wVXBCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDSEVDS0JPWCAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG4gIHdpZHRoOiAxLjE1ZW07XFxyXFxuICBoZWlnaHQ6IDEuMTVlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHdpZHRoOiAwLjY1ZW07XFxyXFxuICBoZWlnaHQ6IDAuNjVlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLVBPUFVQLUFMVC1DKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHBhZ2UuZm9yRWFjaCgocGFnZSkgPT4gcGFnZS5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgcG9wVXBzLmZvckVhY2goKHBvcFVwKSA9PiBwb3BVcC5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclJlbmRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlclwiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcclxuICAgIHByb2oucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdEl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCBJZCA9IE51bWJlcihldi5pZC5zbGljZSgxMCkpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5vdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdElkID0gZmluZFByb2ooSWQpPy5pZDtcclxuICBpZiAocHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gSWQpO1xyXG4gICAgaWYgKHRhc2spIHtcclxuICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRhc2subm90ZSA9IG5vdGU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChwcm9qZWN0SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IElkKTtcclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAocHJvamVjdC50eXBlID09PSBcImRhaWx5XCIgfHwgXCJub3Rlc1wiKSAmJlxyXG4gICAgICAgIHByb2plY3QudHlwZSAhPT0gXCJwcm9qXCIgJiZcclxuICAgICAgICBwcm9qZWN0LnR5cGUgIT09IFwiZXZlbnRzXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgICAgICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZVRpbWVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZVRpbWVPYmplY3QgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGR1ZVRpbWVWYWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBkdWVUaW1lT2JqZWN0LnNldEhvdXJzKGhvdXJzKTtcclxuICAgICAgICAgIGR1ZVRpbWVPYmplY3Quc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZVRpbWVPYmplY3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWUpO1xyXG4gICAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZU9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Tm90ZSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldDtcclxuICBjb25zdCB0YXJnZXRJZCA9IGV2LnRhcmdldC5pZDtcclxuICBjb25zdCBvYmplY3RJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IG9iamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3RJZCk7XHJcbiAgaWYgKHRhcmdldElkLnNsaWNlKDAsIDIpID09PSBcIm50XCIpIHtcclxuICAgIG9iamVjdC50aXRsZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9IGVsc2UgaWYgKHRhcmdldElkLnNsaWNlKDAsIDIpID09PSBcIm5iXCIpIHtcclxuICAgIG9iamVjdC5ub3RlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH1cclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBvYmplY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gaWQpO1xyXG4gIG9iamVjdC5wcmlvcml0eSA9IGV2LnRhcmdldC5jbGFzc0xpc3QuaXRlbSgxKTtcclxufTtcclxuIiwiaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5RGF0ZSA9IChhcnJheSkgPT4ge1xyXG4gIGlmIChzZWxlY3RlZERhdGUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkU3RyaW5nID0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZHVlRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGR1ZVN0cmluZyA9IGZvcm1hdERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgICAgICByZXR1cm4gZHVlU3RyaW5nID09PSBzZWxlY3RlZFN0cmluZztcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IGZvcm1hdERhdGUoaXRlbS5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRpb25TdHJpbmcgPT09IHNlbGVjdGVkU3RyaW5nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmaWx0ZXJCeVRvZGF5ID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgdHlwZU9yZGVyID0ge1xyXG4gICAgZXZlbnRzOiAxLFxyXG4gICAgcHJvajogMixcclxuICAgIGRhaWx5OiAzLFxyXG4gIH07XHJcbiAgY29uc3QgcHJpb3JpdHlPcmRlciA9IHtcclxuICAgIGxvdzogMyxcclxuICAgIG1lZDogMixcclxuICAgIGhpZ2g6IDEsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHN0YXJ0T2ZEYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgc3RhcnRPZkRheS5zZXRIb3VycygwLCAwKTtcclxuICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBlbmRPZkRheS5zZXRIb3VycygyMywgNTkpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgIHJldHVybiBkdWVEYXRlID49IHN0YXJ0T2ZEYXkgJiYgZHVlRGF0ZSA8PSBlbmRPZkRheTtcclxuICB9KTtcclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgdHlwZUNvbXAgPSB0eXBlT3JkZXJbYS50eXBlXSAtIHR5cGVPcmRlcltiLnR5cGVdO1xyXG4gICAgaWYgKHR5cGVDb21wICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiB0eXBlQ29tcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XSAtIHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gKGFycmF5KSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcImV2ZW50c1wiIHx8IGl0ZW0udHlwZSA9PT0gXCJwcm9qXCJcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGdldFR5cGUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBmaWx0ZXJlZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlck5vdGVHcmlkcyA9IChncmlkcykgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbShncmlkcykuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICByZXR1cm4gZGlzcGxheS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcclxuICB9KTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclJlbW92ZWQgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcihcclxuICAgIChpdGVtKSA9PiAhYmluLnNvbWUoKGJpbkl0ZW0pID0+IGJpbkl0ZW0uaWQgPT09IGl0ZW0uaWQpXHJcbiAgKTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gYFxyXG4gIDxhXHJcbiAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJrZXN0b2ZUaW1lc1wiXHJcbiAgY2xhc3M9XCJmb290ZXJBXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gID5EYXJrVGltZXM8L2FcclxuPmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBmb290ZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChvYmplY3REYXRlKSA9PiB7XHJcbiAgY29uc3QgZHVlRGF0ZU9iamVjdCA9IG9iamVjdERhdGU7XHJcbiAgbGV0IGZvcm1hdHRlZER1ZURhdGUgPSBcIlwiO1xyXG4gIGlmIChvYmplY3REYXRlKSB7XHJcbiAgICBjb25zdCB5ZWFyID0gZHVlRGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBmb3JtYXR0ZWREdWVEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgIHJldHVybiBmb3JtYXR0ZWREdWVEYXRlO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAob2JqZWN0VGltZSkgPT4ge1xyXG4gIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBvYmplY3RUaW1lO1xyXG4gIGxldCBmb3JtYXR0ZWRUaW1lID0gXCJcIjtcclxuICBpZiAob2JqZWN0VGltZSkge1xyXG4gICAgY29uc3QgaG91cnMgPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBmb3JtYXR0ZWRUaW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBzZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHNldFN0b3JlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgc2V0QmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcbmltcG9ydCB7IHBhcnNlSXNvRGF0ZSB9IGZyb20gXCIuL3BhcnNlSXNvRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVkU3RvcmVkSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZElkXCIpO1xyXG4gIGlmIChzdG9yZWRTdG9yZWRJZCAhPT0gbnVsbCkge1xyXG4gICAgc2V0U3RvcmVkSWQocGFyc2VJbnQoc3RvcmVkU3RvcmVkSWQpKTtcclxuICB9XHJcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG4gIGlmIChzdG9yZWRQcm9qZWN0cyAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcclxuICAgIGNvbnN0IG5vbk51bGxBcnJheSA9IHBhcnNlZEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBjb25zdCBjb252ZXJ0ZWRBcnJheSA9IHBhcnNlSXNvRGF0ZShub25OdWxsQXJyYXkpO1xyXG4gICAgc2V0UHJvamVjdHMoY29udmVydGVkQXJyYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG4gIGNvbnN0IHN0b3JlZEJpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmluXCIpO1xyXG4gIGlmIChzdG9yZWRCaW4gIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHBhcnNlZEFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWRCaW4pO1xyXG4gICAgY29uc3Qgbm9uTnVsbEFycmF5ID0gcGFyc2VkQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBudWxsKTtcclxuICAgIGNvbnN0IGNvbnZlcnRlZEFycmF5ID0gcGFyc2VJc29EYXRlKG5vbk51bGxBcnJheSk7XHJcbiAgICBzZXRCaW4oY29udmVydGVkQXJyYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveEV2ZW50KTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoZWNrQm94RXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tCb3hFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNoZWNrQm94ZXMoZXYpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCb3hlcyhldikge1xyXG4gIGNvbnN0IGNoZWNrQm94SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBjaGVja0JveElkKTtcclxuICBpZiAocHJvamVjdCkge1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKCFldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoIXByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IGZpbmRQcm9qKGNoZWNrQm94SWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdFdpdGhUYXNrLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ29tcGxldGlvbihldik7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbXBsZXRpb24gPSAoZXYpID0+IHtcclxuICBjb25zdCBjaGVja0JveElkID0gZXYgPyBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKSA6IG51bGw7XHJcbiAgY29uc3QgdGFyZ2V0Q2hlY2tlZCA9IGV2ID8gZXYudGFyZ2V0LmNoZWNrZWQgOiBudWxsO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZE9iamVjdHMgPSBvYmoudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBpZiAob2JqLnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgaWYgKG9iai5kdWVEYXRlIDwgY3VycmVudERhdGUpIHtcclxuICAgICAgICBvYmouY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqLnRhc2tzLmxlbmd0aCAhPT0gMCAmJiBjb21wbGV0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgfHxcclxuICAgICAgKG9iai50eXBlID09PSBcImRhaWx5XCIgJiYgdGFyZ2V0Q2hlY2tlZCAmJiBjaGVja0JveElkID09PSBvYmouaWQpXHJcbiAgICApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgb2JqLmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKG9iai50YXNrcy5sZW5ndGggIT09IDAgJiYgY29tcGxldGVkT2JqZWN0cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgT2JqZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0ID0gKHByb2pJZCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBsZXQgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgbGV0IHR5cGUgPSBnZXRUeXBlKCk7XHJcbiAgaWYgKFxyXG4gICAgcHJvaklkID09PSB1bmRlZmluZWQgJiZcclxuICAgIHR5cGUgIT09IFwiZGFpbHlcIiAmJlxyXG4gICAgdHlwZSAhPT0gXCJub3Rlc1wiICYmXHJcbiAgICB0eXBlICE9PSBcImV2ZW50c1wiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICBpZiAoZHVlRGF0ZVZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlKTtcclxuICAgICAgZHVlRGF0ZURhdGUuc2V0SG91cnMoMjMpO1xyXG4gICAgICBkdWVEYXRlRGF0ZS5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgZHVlRGF0ZSA9IGR1ZURhdGVEYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBjb25zdCBkdWVUaW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZHVlVGltZVZhbHVlLnNwbGl0KFwiOlwiKTtcclxuICAgIGlmIChkdWVUaW1lVmFsdWUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICBzZWxlY3RlZC5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICAgIHNlbGVjdGVkLnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICAgIGR1ZURhdGUgPSBzZWxlY3RlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgICAgZHVlRGF0ZSA9IG5ld1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbWlkTmlnaHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICBtaWROaWdodC5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICBtaWROaWdodC5zZXRIb3VycygyMywgNTksIDApO1xyXG4gICAgZHVlRGF0ZSA9IG1pZE5pZ2h0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIGxldCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgaWYgKHR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVkSWQoKTtcclxuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICBhZGRPYmplY3QoXHJcbiAgICBwcm9qSWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE9iamVjdCA9IChcclxuICBwcm9qSWQsXHJcbiAgdGl0bGUsXHJcbiAgaWQsXHJcbiAgZHVlRGF0ZSxcclxuICBjb21wbGV0aW9uRGF0ZSxcclxuICBjb21wbGV0ZSxcclxuICBwcmlvcml0eSxcclxuICBub3RlLFxyXG4gIHR5cGVcclxuKSA9PiB7XHJcbiAgY29uc3QgbmV3T2JqZWN0ID0gbmV3IE9iamVjdChcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG4gIGlmIChwcm9qSWQgIT09IG51bGwgJiYgcHJvaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvaklkKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdPYmplY3QpO1xyXG4gIH1cclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICByZXR1cm4gYWN0aXZlVGFiLmlkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXYpID0+IHtcclxuICBjb25zdCBlbnRlcktleUNvZGUgPSAxMztcclxuICBjb25zdCBwYXJ0aWN1bGFyRWxlbWVudElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImFkZFByb2pCdG5cIl0nKTtcclxuICBpZiAocGFydGljdWxhckVsZW1lbnRJZCAmJiBldi5rZXlDb2RlID09PSBlbnRlcktleUNvZGUgJiYgIWV2LnNoaWZ0S2V5KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICB9KTtcclxuICAgIHBhcnRpY3VsYXJFbGVtZW50SWQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRXNjYXBlID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldi5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICA8dWwgY2xhc3M9XCJuYXZVbFwiPlxyXG4gICAgPGxpIGlkPVwicHJvalwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+UHJvamVjdDwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJkYWlseVwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RGFpbHk8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZXZlbnRzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5FdmVudHM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwibm90ZXNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPk5vdGVzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGxldCBzdG9yZWRJZCA9IDA7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdG9yZWRJZCsrO1xyXG4gICAgcmV0dXJuIHN0b3JlZElkO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGdlbmVyYXRlZElkID0gZ2VuZXJhdGVJZCgpO1xyXG5leHBvcnQgY29uc3Qgc2V0U3RvcmVkSWQgPSAodmFsdWUpID0+IHtcclxuICBzdG9yZWRJZCA9IHZhbHVlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL2lzTG9jYWxTdG9yYWdlQXZhaWxhYmxlXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemF0aW9uID0gKHBpZWNlMSwgcGllY2UyLCBwaWVjZTMpID0+IHtcclxuICBwaWVjZTEoKTtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhaWx5XCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHBpZWNlMigpO1xyXG4gIHBpZWNlMygpO1xyXG4gIGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCk7XHJcbiAgcmVuZGVyQmluKCk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBmcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vZnJvbUxvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkge1xyXG4gIHZhciB0ZXN0ID0gXCJ0ZXN0XCI7XHJcbiAgdHJ5IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGVzdCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5pZiAoaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xyXG4gIGZyb21Mb2NhbFN0b3JhZ2UoKTtcclxufSBlbHNlIHtcclxuICBjb25zb2xlLmxvZyhcImxvY2FsIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGFyc2VJc29EYXRlID0gKGFycmF5KSA9PiB7XHJcbiAgYXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgb2JqZWN0LmR1ZURhdGUgPSBjb252ZXJ0RGF0ZShvYmplY3QuZHVlRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IGNvbnZlcnREYXRlKG9iamVjdC5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmFkZGVkRGF0ZSkge1xyXG4gICAgICBvYmplY3QuYWRkZWREYXRlID0gY29udmVydERhdGUob2JqZWN0LmFkZGVkRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnRhc2tzKSB7XHJcbiAgICAgIG9iamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSkge1xyXG4gICAgICAgICAgdGFzay5kdWVEYXRlID0gY29udmVydERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgICAgIHRhc2suY29tcGxldGlvbkRhdGUgPSBjb252ZXJ0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhc2suYWRkZWREYXRlKSB7XHJcbiAgICAgICAgICB0YXNrLmFkZGVkRGF0ZSA9IGNvbnZlcnREYXRlKHRhc2suYWRkZWREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhcnJheTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnZlcnREYXRlID0gKGRhdGUpID0+IHtcclxuICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmV0dXJuIHBhcnNlZERhdGU7XHJcbn07XHJcbiIsImV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0cyA9ICh2YWx1ZSkgPT4ge1xyXG4gIHByb2plY3RzID0gdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0KFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmlkID0gaWQ7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5jb21wbGV0aW9uRGF0ZSA9IGNvbXBsZXRpb25EYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMuYWRkZWREYXRlID0gZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gY3VycmVudERhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgY2hlY2tDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZUJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5leHBvcnQgbGV0IGJpbiA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEJpbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGJpbiA9IHZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgY29uc3QgbWlkTmlnaHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgIG1pZE5pZ2h0LnNldERhdGUob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgICBjb25zdCBtaWROaWdodEFoZWFkID0gbmV3IERhdGUoKTtcclxuICAgICAgbWlkTmlnaHRBaGVhZC5zZXREYXRlKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSArIDIpO1xyXG4gICAgICBtaWROaWdodEFoZWFkLnNldEhvdXJzKDAsIDAsIDApO1xyXG5cclxuICAgICAgY29uc3QgdHdvSG91cnNBaGVhZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHR3b0hvdXJzQWhlYWQuc2V0SG91cnMob2JqZWN0LmR1ZURhdGUuZ2V0SG91cnMoKSArIDIpO1xyXG4gICAgICBpZiAob2JqZWN0LnR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuY29tcGxldGUgPT09IHRydWUgJiYgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0ZSA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIGN1cnJlbnREYXRlID49IG9iamVjdC5kdWVEYXRlICYmXHJcbiAgICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodEFoZWFkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAob2JqZWN0LnR5cGUgPT09IFwicHJvalwiICYmIG9iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgJiYgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgY29uc3Qgc3BsaWNlZCA9IHByb2plY3RzW2luZGV4XTtcclxuICAgICAgICBpZiAoIWJpbi5maW5kKChvYmopID0+IG9iai5pZCA9PT0gc3BsaWNlZC5pZCkpIHtcclxuICAgICAgICAgIGJpbi5wdXNoKHNwbGljZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBjb25zdCBiaW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpbkJveFwiKTtcclxuICBpZiAoYmluQm94KSB7XHJcbiAgICBwb3B1bGF0ZUJpbigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNoZWNrQ29tcGxldGlvbigpO1xyXG4gIHJlbW92ZUNvbXBsZXRlZCgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBpZiAoXHJcbiAgICAocHJvamVjdCAhPT0gdW5kZWZpbmVkIHx8IHByb2plY3QgIT09IG51bGwpICYmXHJcbiAgICBldi50YXJnZXQuaWQuc2xpY2UoMCwgMikgPT0gXCJkcFwiXHJcbiAgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgfHwgcHJvamVjdC50eXBlID09PSBcInByb2pcIikgJiZcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChiaW4uZmluZCgob2JqKSA9PiBvYmouaWQgPT09IHByb2plY3QuaWQpKSB7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluLnB1c2gocHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHcke3RhcmdldElkfWApO1xyXG4gICAgICBwcm9qRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvaldpdGhUYXNrID0gcHJvamVjdHMuZmluZCgocHJvaikgPT5cclxuICAgICAgcHJvai50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZClcclxuICAgICk7XHJcbiAgICBpZiAocHJvaldpdGhUYXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2pXaXRoVGFzay50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IHRhcmdldElkXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2pXaXRoVGFzay50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHQke3RhcmdldElkfWApO1xyXG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgYmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcbmltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJCaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgYmluID0gYCA8ZGl2IGNsYXNzPVwiYmluQnRuV3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJpbkJ0blwiPkJJTjwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYmluKTtcclxuICBjb25zdCBiaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpbkJ0blwiKTtcclxuICBiaW5CdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5CaW5FdmVudCk7XHJcbiAgYmluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQmluRXZlbnQpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQmluQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGJpbiA9IGA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJiaW5Cb3hcIj5cclxuICAgICAgPGgyIGNsYXNzPVwiYmluX19oMlwiPkJJTiBTVE9SQUdFPC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJpbkluc2lkZXNcIj48L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlUG9wVXBcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGJpbik7XHJcbiAgcG9wdWxhdGVCaW4oKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VQb3BVcFwiKTtcclxuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXBFdmVudCk7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wVXBFdmVudCk7XHJcbiAgY292ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3BVcENvbnRhaW5lclwiKSkge1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdWxhdGVCaW4gPSAoKSA9PiB7XHJcbiAgY2xlYXJSZW5kZXJlZEJpbkl0ZW1zKCk7XHJcbiAgYmluLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHJlbmRlckJpbkl0ZW0oaXRlbSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJCaW5JdGVtID0gKGl0ZW0pID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpbkluc2lkZXNcIik7XHJcbiAgY29uc3QgYmluSXRlbSA9IGA8ZGl2IGNsYXNzPVwiYmluV3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJiaSR7aXRlbS5pZH1cIj5cclxuICA8ZGl2IGNsYXNzPVwib2JqZWN0ICR7aXRlbS5wcmlvcml0eX0gJHtpdGVtLmNvbXBsZXRlfVwiIGlkPVwiYm8ke2l0ZW0uaWR9IFwiPlxyXG4gIDxwIGNsYXNzPVwib2JqZWN0VGl0bGVcIiBpZD1cImJ0JHtpdGVtLmlkfVwiPiR7aXRlbS50aXRsZX08L3A+XHJcbiAgPHAgY2xhc3M9XCJvYmplY3REYXRlXCIgaWQ9XCJiZCR7aXRlbS5pZH1cIj4ke2Zvcm1hdERhdGUoaXRlbS5jb21wbGV0aW9uRGF0ZSl9PC9wPlxyXG4gIDxwIGNsYXNzPVwib2JqZWN0VHlwZVwiIGlkPVwiYmQke2l0ZW0uaWR9XCI+JHtpdGVtLnR5cGV9PC9wPlxyXG4gIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkcCR7aXRlbS5pZH1cIj5EPC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBiaW5JdGVtKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyUmVuZGVyZWRCaW5JdGVtcyA9ICgpID0+IHtcclxuICBjb25zdCByZW5kZXJlZEJpbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaW5XcmFwcGVyXCIpO1xyXG4gIHJlbmRlcmVkQmluSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUJpbkl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCBpdGVtSWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBpdGVtSW5kZXggPSBiaW4uZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gaXRlbUlkKTtcclxuICBiaW4uc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VQb3BVcEV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICBjbGVhclBvcFVwKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIHJlbW92ZUJpbkl0ZW0oZXYpO1xyXG4gIHBvcHVsYXRlQmluKCk7XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IG9wZW5CaW5FdmVudCA9IChldikgPT4ge1xyXG4gIHJlbmRlckJpbkNvbnRhaW5lcigpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRGFpbHlQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIGRhaWx5Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RGFpbHlUYXNrXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBEYWlseTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdEYWlseVRhc2tcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZWRpdEl0ZW0gfSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdFBvcFVwID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMikpO1xyXG4gIGxldCBvYmplY3Q7XHJcbiAgaWYgKGV2LmlkLnNsaWNlKDAsIDIpICE9PSBcInB0XCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgICBvYmplY3QgPSBwcm9qZWN0O1xyXG4gIH0gZWxzZSBpZiAoZXYuaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qKGlkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHRhc2s7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKG9iamVjdC50eXBlICE9PSBcImRhaWx5XCIgJiYgb2JqZWN0LnR5cGUgIT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiB2YWx1ZT1cIiR7Zm9ybWF0RGF0ZShcclxuICAgIG9iamVjdC5kdWVEYXRlXHJcbiAgKX1cIj5cclxuICA8L2Rpdj5gO1xyXG4gIH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aW1lXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgaWQ9XCJ0aW1lXCIgdmFsdWU9XCIke2Zvcm1hdFRpbWUob2JqZWN0LmR1ZURhdGUpfVwiPlxyXG4gICAgPC9kaXY+YDtcclxuICB9XHJcblxyXG4gIGlmIChvYmplY3QudHlwZSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBjb25zdCBub3RlID0gYDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke1xyXG4gICAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgICB9XCIgYXV0b2ZvY3VzICBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiLz5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibm90ZURhdGVcIj4ke2Zvcm1hdERhdGUob2JqZWN0LmFkZGVkRGF0ZSl9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgJHtvYmplY3QucHJpb3JpdHl9XCIgZGF0YS1wcmlvcml0eT1cIiR7XHJcbiAgICAgIG9iamVjdC5wcmlvcml0eVxyXG4gICAgfVwiIGlkPVwibm90ZVByaW9yaXR5JHtvYmplY3QuaWR9XCI+TTwvZGl2PlxyXG4gICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHtcclxuICAgICAgICBvYmplY3Qubm90ZVxyXG4gICAgICB9PC90ZXh0YXJlYT5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3QuaWR9XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBub3RlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgb2JqZWN0LnRpdGxlXHJcbiAgICB9XCIgYXV0b2ZvY3VzICBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImxvd1wiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJtZWRcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImhpZ2hcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDxwIGNsYXNzPVwidGFza0NvbXBsZXRpb25EYXRlXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbFxyXG4gICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgOiBgQ29tcGxldGVkIG9uOiR7b2JqZWN0LmNvbXBsZXRpb25EYXRlfWBcclxuICAgICAgICB9XHJcbiAgICAgIDwvcD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIk5vdGUgZ29lcyBoZXJlXCI+JHtcclxuICAgICAgb2JqZWN0Lm5vdGVcclxuICAgIH08L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtpZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKGV2LmlkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGRQcm9qQnRuJHtpZC5zbGljZSgyKX1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcENvbnRhaW5lclwiKTtcclxuICBpZiAocHJpb3JpdHlCdG4pIHtcclxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQcmlvcml0eSk7XHJcbiAgfVxyXG4gIGlmIChpZC5zbGljZSgwLCAyKSAhPT0gXCJwdFwiKSB7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgICAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgfVxyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxuICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcFVwQ29udGFpbmVyXCIpKSB7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSBcIi4vZmlsdGVyQnlUeXBlXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbmxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IGN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKTtcclxuY29uc3QgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuZXhwb3J0IGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCBjdXJyZW50RGF5KTtcclxuY29uc3QgbW9udGhzID0gW1xyXG4gIFwiSmFudWFyeVwiLFxyXG4gIFwiRmVicnVhcnlcIixcclxuICBcIk1hcmNoXCIsXHJcbiAgXCJBcHJpbFwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5lXCIsXHJcbiAgXCJKdWx5XCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIlNlcHRlbWJlclwiLFxyXG4gIFwiT2N0b2JlclwiLFxyXG4gIFwiTm92ZW1iZXJcIixcclxuICBcIkRlY2VtYmVyXCIsXHJcbl07XHJcbmNvbnN0IHdlZWtEYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFdmVudHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImV2ZW50c0NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhdGVXcmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBiYWNrd2FyZFwiIGlkPVwiYmFja3dhcmRcIj48PC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiY3VycmVudERhdGVcIj48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBmb3J3YXJkXCIgaWQ9XCJmb3J3YXJkXCI+PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJXcmFwcGVyXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImhlYWRpbmdzXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPk1vbjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlR1ZTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPldlZDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlRodTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPkZyaTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlNhdDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlN1bjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNhbGVuZGFyRGF5c1wiPlxyXG4gICAgICA8L3VsPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnROb3RlV3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RXZlbnRcIj5cclxuICAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBFdmVudDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+ICAgIFxyXG4gICAgYDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZXZlbnRzUGFnZSk7XHJcbiAgcmVuZGVyQ2FsZW5kYXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpcnN0RGF0ZU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcclxuICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsZW5kYXJEYXlzXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50RGF0ZVwiKTtcclxuICBjb25zdCBkYXRlU3RyaW5nID0gZmlyc3REYXRlT2ZNb250aC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1ldVwiLCB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuICBjb25zdCBsYXN0RGF0ZU9mTGFzdE1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcclxuICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXlzSW5Nb250aCkuZ2V0RGF5KCk7XHJcbiAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrRGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoXCIsXCIpWzBdKTtcclxuICAvLyBwcmV2aW91cyBtb250aFxyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSBwYWRkaW5nRGF5czsgaSA+IDA7IC0taSkge1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aERheSA9IGxhc3REYXRlT2ZMYXN0TW9udGggLSBpICsgMTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgcHJldmlvdXNNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBwcmV2aW91c01vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0luYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNvbnN0IGJhY2t3YXJkID0gdHJ1ZTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHtcclxuICAgICAgZGF5OiBsYXN0RGF0ZU9mTGFzdE1vbnRoIC0gaSArIDEsXHJcbiAgICAgIGlzV2Vla2VuZCxcclxuICAgICAgaXNJbmFjdGl2ZSxcclxuICAgICAgYmFja3dhcmQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9jdXJyZW50IG1vbnRoXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xyXG4gICAgY29uc3QgaXNDdXJyZW50RGF5ID1cclxuICAgICAgaSA9PT0gY3VycmVudERheSAmJiBtb250aCA9PT0gY3VycmVudE1vbnRoICYmIHllYXIgPT09IGN1cnJlbnRZZWFyO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZERheSA9XHJcbiAgICAgIHNlbGVjdGVkRGF0ZSAmJlxyXG4gICAgICBpID09PSBzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgIG1vbnRoID09PSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICB5ZWFyID09PSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoLCBpIC0gMSkuZ2V0RGF5KCldID09PSBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGgsIGkgLSAxKS5nZXREYXkoKV0gPT09IFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0RheSA9IHRydWU7XHJcbiAgICBjb25zdCBpc1Bhc3QgPSBpIDwgY3VycmVudERheTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHtcclxuICAgICAgZGF5OiBpLFxyXG4gICAgICBpc0N1cnJlbnREYXksXHJcbiAgICAgIGlzU2VsZWN0ZWREYXksXHJcbiAgICAgIGlzV2Vla2VuZCxcclxuICAgICAgaXNEYXksXHJcbiAgICAgIGlzUGFzdCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL25leHQgbW9udGhcclxuICBmb3IgKGxldCBpID0gbGFzdERheU9mTW9udGg7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IG5leHRNb250aERheSA9IGkgLSBsYXN0RGF5T2ZNb250aCArIDE7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIG5leHRNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBuZXh0TW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTdW5kYXlcIjtcclxuICAgIGNvbnN0IGlzSW5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29uc3QgZm9yd2FyZCA9IHRydWU7XHJcbiAgICBjYWxlbmRhckRheXMucHVzaCh7IGRheTogbmV4dE1vbnRoRGF5LCBpc1dlZWtlbmQsIGlzSW5hY3RpdmUsIGZvcndhcmQgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxlbmRhckRheUhUTUwgPSBjYWxlbmRhckRheXNcclxuICAgIC5tYXAoKGRheUluZm8pID0+IHtcclxuICAgICAgbGV0IGNsYXNzTmFtZXMgPSBcImNhbGVuZGFyRGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzQ3VycmVudERheSkgY2xhc3NOYW1lcyArPSBcIiBjdXJyZW50RGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzU2VsZWN0ZWREYXkpIGNsYXNzTmFtZXMgKz0gXCIgc2VsZWN0ZWRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNXZWVrZW5kKSBjbGFzc05hbWVzICs9IFwiIHdlZWtFbmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNJbmFjdGl2ZSkgY2xhc3NOYW1lcyArPSBcIiBpbmFjdGl2ZVwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5iYWNrd2FyZCkgY2xhc3NOYW1lcyArPSBcIiBiYWNrd2FyZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5mb3J3YXJkKSBjbGFzc05hbWVzICs9IFwiIGZvcndhcmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNEYXkpIGNsYXNzTmFtZXMgKz0gXCIgZGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzUGFzdCkgY2xhc3NOYW1lcyArPSBcIiBpbmFjdGl2ZVwiO1xyXG5cclxuICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCIke2NsYXNzTmFtZXN9XCI+JHtkYXlJbmZvLmRheX08L2xpPmA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oXCJcIik7XHJcblxyXG4gIGNhbGVuZGFyQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjYWxlbmRhckRheUhUTUwpO1xyXG4gIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XHJcbiAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQ2FsZW5kYXJEYXlzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICBmaWx0ZXJlZEJ5VHlwZS5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgb2JqZWN0LmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuZHVlRGF0ZS5nZXRNb250aCgpID09PSBtb250aFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgICBjb25zdCBkdWVTdHJpbmcgPSBTdHJpbmcob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmVuZGVyZWREYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGlmIChkdWVTdHJpbmcpIHtcclxuICAgICAgICAgIG1hcmsoZGF5LCBkdWVTdHJpbmcsIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGhcclxuICAgICkge1xyXG4gICAgICBjb25zdCByZW5kZXJlZERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheVwiKTtcclxuICAgICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IFN0cmluZyhvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmVuZGVyZWREYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGlmIChjb21wbGV0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICBtYXJrKGRheSwgY29tcGxldGlvblN0cmluZywgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbWFyayA9IChkYXksIHN0cmluZywgb2JqZWN0KSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBTdHJpbmcoc2VsZWN0ZWREYXRlLmdldERhdGUoKSk7XHJcbiAgY29uc3QgZGF5U3RpbmcgPSBTdHJpbmcoZGF5LmlubmVyVGV4dCk7XHJcbiAgaWYgKGRheVN0aW5nID09PSBzdHJpbmcpIHtcclxuICAgIGlmIChcclxuICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKSAmJlxyXG4gICAgICBkYXlTdGluZyA9PT0gc2VsZWN0ZWRTdHJpbmdcclxuICAgICkge1xyXG4gICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRheS5jbGFzc0xpc3QuYWRkKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBmb3J3YXJkQmFja3dhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFycm93XCIpO1xyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FsZW5kYXJEYXlcIik7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3RXZlbnRcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxuICBmb3J3YXJkQmFja3dhcmQuZm9yRWFjaCgoYXJyb3cpID0+IHtcclxuICAgIGFycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb250aENoYW5nZXJFdmVudCk7XHJcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9udGhDaGFuZ2VyRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGF0ZVNlbGVjdGlvbkV2ZW50KTtcclxuICAgIGRheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGF0ZVNlbGVjdGlvbkV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vbnRoQ2hhbmdlckV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZvcndhcmRcIikgfHxcclxuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJiYWNrd2FyZFwiKVxyXG4gICkge1xyXG4gICAgY2xlYXJDYWxlbmRhcigpO1xyXG4gICAgY2hhbmdlTW9udGgoZXYpO1xyXG4gICAgcmVuZGVyQ2FsZW5kYXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkYXRlU2VsZWN0aW9uRXZlbnQgPSAoZXYpID0+IHtcclxuICBzZWxlY3REYXRlKGV2KTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjYWxlbmRhckRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICBkYXkucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VNb250aCA9IChldikgPT4ge1xyXG4gIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSkge1xyXG4gICAgbW9udGggKz0gMTtcclxuICAgIGlmIChtb250aCA+IDExKSB7XHJcbiAgICAgIG1vbnRoID0gMDtcclxuICAgICAgeWVhciArPSAxO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpKSB7XHJcbiAgICBtb250aCAtPSAxO1xyXG4gICAgaWYgKG1vbnRoIDwgMCkge1xyXG4gICAgICBtb250aCA9IDExO1xyXG4gICAgICB5ZWFyIC09IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0RGF0ZSA9IChldikgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FsZW5kYXJEYXlcIik7XHJcbiAgY29uc3Qgc2VsZWN0ZWREYXRlRWxlbWVudCA9IGV2LnRhcmdldDtcclxuICBsZXQgc2VsZWN0ZWREYXkgPSBldi50YXJnZXQuaW5uZXJUZXh0O1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgfSk7XHJcbiAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmFjdGl2ZVwiKSkge1xyXG4gICAgbW9udGhDaGFuZ2VyRXZlbnQoZXYpO1xyXG4gICAgY29uc3QgbmV3UmVuZGVyZWRNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWREYXRlRWxlbWVudCA9IEFycmF5LmZyb20obmV3UmVuZGVyZWRNb250aCkuZmluZChcclxuICAgICAgKGRheSkgPT4gZGF5LmlubmVyVGV4dCA9PT0gZXYudGFyZ2V0LmlubmVyVGV4dFxyXG4gICAgKTtcclxuICAgIG5ld1NlbGVjdGVkRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxlY3RlZERhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICB9XHJcbiAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIHNlbGVjdGVkRGF5KTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IGdldE9iamVjdCB9IGZyb20gXCIuL2dldE9iamVjdFwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBtYXJrQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vZm9ybWF0VGltZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdldFBvcFVwID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGxldCBvYmplY3RJZCA9IG9iaklkO1xyXG5cclxuICBpZiAob2JqSWQgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcclxuICAgIG9iamVjdElkID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBsZXQgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGltZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiB2YWx1ZT1cIiR7Zm9ybWF0VGltZShcclxuICAgICAgY3VycmVudFRpbWVcclxuICAgICl9XCI+XHJcbiAgICA8L2Rpdj5gO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBvYmplY3RJZCA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICBnZXRUeXBlKCkgIT09IFwiZXZlbnRzXCIgJiZcclxuICAgIGdldFR5cGUoKSAhPT0gXCJkYWlseVwiXHJcbiAgKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgIDwvZGl2PmA7XHJcbiAgfSBlbHNlIGlmIChvYmplY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIG5vdGVzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJhZGRUYXNrXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJsYWJlbFwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiIGNoZWNrZWQgLz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibWVkXCIgLz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICR7ZGF0ZUVsZW1lbnR9XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJOb3RlIGdvZXMgaGVyZVwiPjwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke29iamVjdElkfVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIH1cclxuICBsaXN0ZW5lcnMob2JqZWN0SWQpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtpZF49XCJhZGRQcm9qQnRuXCJdYCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlQnRuXCIpO1xyXG4gIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlTWFya1wiKTtcclxuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgaWYgKHByaW9yaXR5QnRuKSB7XHJcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoUHJpb3JpdHkpO1xyXG4gIH1cclxuICBpZiAobmV3UHJvaikge1xyXG4gICAgbmV3UHJvai5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgICBpZiAob2JqSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgZXZJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMTApKTtcclxuICAgICAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgZ2V0T2JqZWN0KGV2SWQpO1xyXG4gICAgICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgICAgICBnZXRPYmplY3QoKTtcclxuICAgICAgICAgIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgICAgICAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUG9wVXApO1xyXG4gIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wVXBDb250YWluZXJcIikpIHtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgbm90ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3Qgbm90ZSA9IGA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwicG9wVXBmaWVsZFwiIGlkPVwiZWRpdFRhc2tcIj5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgXCIgYXV0b2ZvY3VzIHBsYWNlaG9sZGVyPVwiVGl0bGUgZ29lcyBoZXJlXCIgLz5cclxuICAgIDxwIGNsYXNzPVwibm90ZURhdGVcIiBpZD1cIm5vdGVEYXRlXCI+PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGVNYXJrIGxvd1wiIGRhdGEtcHJpb3JpdHk9XCJsb3dcIiBpZD1cIm5vdGVQcmlvcml0eVwiPk08L2Rpdj5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIk5vdGUgZ29lcyBoZXJlXCI+PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0blwiPkFkZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbm90ZSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJOb3Rlc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgbm90ZXNDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3Tm90ZVwiIGlkPVwibmV3Tm90ZVwiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdOb3RlX19wXCI+QWRkIE5vdGU8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImJpZ0dyaWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xHcmlkXCIgaWQ9XCJvbmVcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xHcmlkXCIgaWQ9XCJ0d29cIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xHcmlkXCIgaWQ9XCJ0aHJlZVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbEdyaWRcIiBpZD1cImZvdXJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdOb3RlXCIpO1xyXG4gIG5ld1Byb2oucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxuICBuZXdQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlclByb2pUYXNrIH0gZnJvbSBcIi4vcmVuZGVyUHJvalRhc2tcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcbmltcG9ydCB7IGdldENvbXBsZXRpb24gfSBmcm9tIFwiLi9nZXRDb21wbGV0aW9uXCI7XHJcbmltcG9ydCB7IHNvcnRBcnJheSB9IGZyb20gXCIuL3NvcnRBcnJheVwiO1xyXG5pbXBvcnQgeyByZW1vdmVJdGVtIH0gZnJvbSBcIi4vcmVtb3ZlSXRlbVwiO1xyXG5pbXBvcnQgeyByZW5kZXJFZGl0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJFZGl0UG9wVXBcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSBcIi4vZmlsdGVyQnlUeXBlXCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5VG9kYXkgfSBmcm9tIFwiLi9maWx0ZXJCeVRvZGF5XCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5RGF0ZSB9IGZyb20gXCIuL2ZpbHRlckJ5RGF0ZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vZm9ybWF0VGltZVwiO1xyXG5pbXBvcnQgeyBtYXJrQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJSZW1vdmVkIH0gZnJvbSBcIi4vZmlsdGVyUmVtb3ZlZFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJOb3RlR3JpZHMgfSBmcm9tIFwiLi9maWx0ZXJOb3RlR3JpZHNcIjtcclxuaW1wb3J0IHsgZWRpdE5vdGUgfSBmcm9tIFwiLi9lZGl0Tm90ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck9iamVjdHMgPSAoKSA9PiB7XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbEdyaWRcIik7XHJcbiAgY29uc3QgZmlsdGVyZWRHcmlkcyA9IGZpbHRlck5vdGVHcmlkcyhncmlkcyk7XHJcbiAgY29uc3QgYXJyYXlPZlR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gIGxldCBkYWlseUFycmF5ID0gc29ydEFycmF5KGFycmF5T2ZUeXBlKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIpIHtcclxuICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeVRvZGF5KHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlck91dFJlbW92ZWQgPSBmaWx0ZXJSZW1vdmVkKGRhaWx5QXJyYXkpO1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGZpbHRlck91dFJlbW92ZWQpO1xyXG4gICAgc29ydGVkLmZvckVhY2goKHByb2opID0+IHtcclxuICAgICAgcmVuZGVyT2JqZWN0KHByb2opO1xyXG4gICAgICByZW5kZXJQcm9qVGFzayhwcm9qKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGxldCBqID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFpbHlBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaiA+PSBmaWx0ZXJlZEdyaWRzLmxlbmd0aCkge1xyXG4gICAgICAgIGogPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlck5vdGVzKGRhaWx5QXJyYXlbaV0sIGZpbHRlcmVkR3JpZHNbal0pO1xyXG4gICAgICBqKys7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlEYXRlID0gZmlsdGVyQnlEYXRlKGZpbHRlcmVkQnlUeXBlKTtcclxuICAgIGlmIChmaWx0ZXJlZEJ5RGF0ZSkge1xyXG4gICAgICBkYWlseUFycmF5ID0gZmlsdGVyZWRCeURhdGU7XHJcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRBcnJheShkYWlseUFycmF5KTtcclxuICAgICAgc29ydGVkLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckV2ZW50cyhvYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeVRvZGF5KGZpbHRlcmVkQnlUeXBlKTtcclxuICAgICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGRhaWx5QXJyYXkpO1xyXG4gICAgICBzb3J0ZWQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXZlbnRzKG9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJPdXRSZW1vdmVkID0gZmlsdGVyUmVtb3ZlZChkYWlseUFycmF5KTtcclxuICAgIGZpbHRlck91dFJlbW92ZWQuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgICByZW5kZXJPYmplY3QocHJvaik7XHJcbiAgICAgIHJlbmRlclByb2pUYXNrKHByb2opO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5lcnMoKTtcclxuICBnZXRDb21wbGV0aW9uKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJPYmplY3QgPSAocHJvaikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdENvbnRhaW5lclwiKTtcclxuXHJcbiAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtwcm9qLmlkfVwiPkQ8L3A+YDtcclxuICBsZXQgYWRkVGFzayA9IGBcclxuICA8ZGl2IGNsYXNzPVwibmV3VGFza1wiIGlkPVwibnQke3Byb2ouaWR9XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibmV3VGFza19fcFwiPis8L3A+XHJcbiAgPC9kaXY+YDtcclxuXHJcbiAgaWYgKFxyXG4gICAgZ2V0VHlwZSgpID09PSBcImRhaWx5XCIgJiZcclxuICAgIChwcm9qLnR5cGUgPT09IFwicHJvalwiIHx8IHByb2oudHlwZSA9PT0gXCJldmVudHNcIilcclxuICApIHtcclxuICAgIGFkZFRhc2sgPSBgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgICBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICB9XHJcbiAgbGV0IGNoZWNrRWxlbWVudCA9IGAke2FkZFRhc2t9YDtcclxuICBpZiAocHJvai50eXBlID09PSBcImRhaWx5XCIgJiYgcHJvai50YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNoZWNrRWxlbWVudCA9IGAke2FkZFRhc2t9XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjb21wbGV0aW9uXCIgbmFtZT1cImNvbXBsZXRpb25cIiBpZD1cIiR7XCJjXCJ9JHtcclxuICAgICAgcHJvai5pZFxyXG4gICAgfVwiICAke2NoZWNrKHByb2ouY29tcGxldGUpfS8+YDtcclxuICB9IGVsc2UgaWYgKHByb2oudHlwZSA9PT0gXCJkYWlseVwiICYmIHByb2oudGFza3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBjaGVja0VsZW1lbnQgPSBgJHthZGRUYXNrfVxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZWREdWVEYXRlID1cclxuICAgIHByb2ouZHVlRGF0ZSAmJiAhaXNOYU4ocHJvai5kdWVEYXRlKSA/IGZvcm1hdERhdGUocHJvai5kdWVEYXRlKSA6IFwiXCI7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGA8cCBjbGFzcz1cIm9iakRhdGVcIj5EdWU6JHtmb3JtYXR0ZWREdWVEYXRlfTwvcD5gO1xyXG4gIGNvbnN0IGR1ZVRpbWUgPSBgPHAgY2xhc3M9XCJvYmpUaW1lXCI+T246JHtmb3JtYXRUaW1lKHByb2ouZHVlRGF0ZSl9PC9wPmA7XHJcbiAgY29uc3QgT2JqZWN0ID0gYFxyXG48ZGl2IGNsYXNzPVwib2JqZWN0V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7cHJvai5pZH1cIj5cclxuPGRpdiBjbGFzcz1cIm9iamVjdCAke3Byb2oucHJpb3JpdHl9ICR7cHJvai5jb21wbGV0ZX0gJHtcclxuICAgIGdldFR5cGUoKSA9PT0gXCJkYWlseVwiID8gcHJvai50eXBlIDogXCJcIlxyXG4gIH1cIiBpZD1cIiR7XCJwcFwifSR7cHJvai5pZH1cIj5cclxuJHtjaGVja0VsZW1lbnR9XHJcbiAgPHAgY2xhc3M9XCJvYmpUaXRsZVwiPiR7cHJvai50aXRsZX08L3A+XHJcbiAgJHtcclxuICAgIHByb2oudHlwZSA9PT0gXCJkYWlseVwiXHJcbiAgICAgID8gXCJcIlxyXG4gICAgICA6IHByb2oudHlwZSA9PT0gXCJwcm9qXCIgJiYgZ2V0VHlwZSgpICE9PSBcImRhaWx5XCJcclxuICAgICAgPyBkdWVEYXRlXHJcbiAgICAgIDogcHJvai50eXBlID09PSBcImV2ZW50c1wiXHJcbiAgICAgID8gZHVlVGltZVxyXG4gICAgICA6IFwiXCJcclxuICB9XHJcbiAgPHAgY2xhc3M9XCJvYmpOb3RlXCI+JHtwcm9qLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICR7ZGVsZXRlRWxlbWVudH1cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ0YXNrV3JhcHBlclwiIGlkPVwidHcke3Byb2ouaWR9XCI+XHJcbjwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgT2JqZWN0KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlck5vdGVzID0gKG9iamVjdCwgdGFyZ2V0R3JpZCkgPT4ge1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKG9iamVjdC5hZGRlZERhdGUpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IHRhcmdldEdyaWQ7XHJcbiAgY29uc3QgTm90ZSA9IGA8ZGl2IGNsYXNzPVwibm90ZVdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke29iamVjdC5pZH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGVPYmplY3RcIiBpZD1cIm5vJHtvYmplY3QuaWR9XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibm90ZVRpdGxlIGVkaXRhYmxlXCIgaWQ9XCJudCR7b2JqZWN0LmlkfVwiIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj4ke29iamVjdC50aXRsZX08L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwibm90ZURhdGVcIiBpZD1cIm5kJHtvYmplY3QuaWR9XCI+JHtmb3JtYXR0ZWREYXRlfTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGVNYXJrICR7b2JqZWN0LnByaW9yaXR5fVwiIGlkPVwibm0ke29iamVjdC5pZH1cIj5NXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke29iamVjdC5pZH1cIj5EPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVCb2R5IGVkaXRhYmxlXCIgaWQ9XCJuYiR7b2JqZWN0LmlkfVwiIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj4ke29iamVjdC5ub3RlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE5vdGUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRXZlbnRzID0gKG9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlbnROb3RlV3JhcHBlclwiKTtcclxuICBjb25zdCBkYXRlRWxlbWVudCA9IG9iamVjdC50eXBlID09PSBcInByb2pcIiA/IFwiXCIgOiBmb3JtYXRUaW1lKG9iamVjdC5kdWVEYXRlKTtcclxuICBjb25zdCBldmVudEVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkV2ZW50V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7b2JqZWN0LmlkfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJvYmplY3QgJHtvYmplY3QucHJpb3JpdHl9ICR7b2JqZWN0LmNvbXBsZXRlfVwiIGlkPVwiZW8ke1xyXG4gICAgb2JqZWN0LmlkXHJcbiAgfSBcIj5cclxuICA8cCBjbGFzcz1cImV2ZW50RGF0ZVwiIGlkPVwiZWQke29iamVjdC5pZH1cIj4ke2RhdGVFbGVtZW50fTwvcD5cclxuICA8cCBjbGFzcz1cImV2ZW50VGl0bGVcIiBpZD1cImV0JHtvYmplY3QuaWR9XCI+JHtvYmplY3QudGl0bGV9PC9wPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWxsZXJcIj48L2Rpdj5cclxuICA8cCBjbGFzcz1cImV2ZW50Tm90ZVwiIGlkPVwiZWIke29iamVjdC5pZH1cIj4ke29iamVjdC5ub3RlID8gXCJOXCIgOiBcIlwifTwvcD5cclxuICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke29iamVjdC5pZH1cIj5EPC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGV2ZW50RWxlbWVudCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ld1Rhc2tcIik7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vYmplY3RcIik7XHJcbiAgY29uc3QgdGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlRhc2tcIik7XHJcbiAgY29uc3QgbWFya05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGNvbnN0IGVkaXRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0YWJsZVwiKTtcclxuICBlZGl0YWJsZS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGlucHV0RXZlbnQpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGlucHV0RXZlbnQpO1xyXG4gIH0pO1xyXG4gIG5ld1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tFdmVudCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRXZlbnQpO1xyXG4gIH0pO1xyXG4gIHByb2plY3RCdG5zLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0RXZlbnQpO1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RFdmVudCk7XHJcbiAgfSk7XHJcbiAgdGFza0J0bnMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tFdmVudCk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza0V2ZW50KTtcclxuICB9KTtcclxuICBtYXJrTm90ZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFya05vdGVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtOb3RlRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5wdXRFdmVudCA9IChldikgPT4ge1xyXG4gIGVkaXROb3RlKGV2KTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRQcm9qZWN0RXZlbnQgPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5vYmplY3RcIik7XHJcbiAgaWYgKFxyXG4gICAgIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0aW9uXCIpICYmXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGVNYXJrXCIpICYmXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5ld1Rhc2tcIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3VGFza19fcFwiKVxyXG4gICkge1xyXG4gICAgcmVuZGVyRWRpdFBvcFVwKHRhcmdldCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZWRpdFRhc2tFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLlRhc2tcIik7XHJcbiAgaWYgKCFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGlvblwiKSkge1xyXG4gICAgcmVuZGVyRWRpdFBvcFVwKHRhcmdldCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFya05vdGVFdmVudCA9IChldikgPT4ge1xyXG4gIHN3aXRjaFByaW9yaXR5KGV2KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gIH1cclxuICByZW1vdmVJdGVtKGV2KTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUYXNrRXZlbnQgPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5uZXdUYXNrXCIpO1xyXG4gIHJlbmRlckdldFBvcFVwKHRhcmdldC5pZC5zbGljZSgyKSk7XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlclBhZ2UgPSAoaWQsIHByb2osIGRhaWx5LCBldmVudHMsIG5vdGVzKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgc3dpdGNoIChpZCkge1xyXG4gICAgY2FzZSBcInByb2pcIjpcclxuICAgICAgcHJvaigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJkYWlseVwiOlxyXG4gICAgICBkYWlseSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJldmVudHNcIjpcclxuICAgICAgZXZlbnRzKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIm5vdGVzXCI6XHJcbiAgICAgIG5vdGVzKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2pQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIHByb2plY3RzQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3UHJvalwiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgUHJvamVjdDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qXCIpO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2pUYXNrID0gKG9iaikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0dyR7b2JqLmlkfWApO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlkID09PSBvYmouaWQpO1xyXG4gIGNvbnN0IHRhc2tzID0gcHJvamVjdC50YXNrcztcclxuXHJcbiAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUodGFzay5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICBpZiAocHJvamVjdC50eXBlICE9PSBcImRhaWx5XCIpIHtcclxuICAgICAgZGF0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJ0YXNrRGF0ZVwiPiR7XHJcbiAgICAgICAgdGFzay5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbCA/IFwiXCIgOiBmb3JtYXR0ZWREYXRlXHJcbiAgICAgIH08L3A+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGVFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJmaWxsZXJcIj48L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiICYmIHByb2plY3QudHlwZSA9PT0gXCJwcm9qXCIpIHtcclxuICAgICAgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gYDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkdCR7dGFzay5pZH1cIj5EPC9wPmA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiVGFzayAke3Rhc2sucHJpb3JpdHl9ICR7dGFzay5jb21wbGV0ZX1cIiBpZD1cInB0JHt0YXNrLmlkfVwiPlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGlvblwiIG5hbWU9XCJjb21wbGV0aW9uXCIgaWQ9XCJjJHtcclxuICAgICAgICAgdGFzay5pZFxyXG4gICAgICAgfVwiICAke2NoZWNrKHRhc2suY29tcGxldGUpfS8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxyXG4gICAgICAgJHtkYXRlRWxlbWVudH1cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tOb3RlXCI+JHt0YXNrLm5vdGUgPT09IFwiXCIgPyBcIlwiIDogXCJOXCJ9PC9wPlxyXG4gICAgICAgICR7ZGVsZXRlRWxlbWVudH1cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2soY29tcGxldGUpIHtcclxuICBpZiAoY29tcGxldGUpIHtcclxuICAgIHJldHVybiAnY2hlY2tlZD1cImNoZWNrZWRcIic7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGVkaXRQcmlvcml0eSB9IGZyb20gXCIuL2VkaXRQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJpb3JpdHkgPSAoZXYpID0+IHtcclxuICBjb25zdCBwcmlvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldi50YXJnZXQuaWR9YCk7XHJcbiAgaWYgKHByaW9yRWxlbWVudCkge1xyXG4gICAgaWYgKHByaW9yRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsb3dcIikpIHtcclxuICAgICAgcHJpb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3dcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICAgICAgcHJpb3JFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgXCJoaWdoXCIpO1xyXG4gICAgICBpZiAoZXYudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJubVwiKSkge1xyXG4gICAgICAgIGVkaXRQcmlvcml0eShldik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaFwiKTtcclxuICAgICAgcHJpb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIFwibG93XCIpO1xyXG4gICAgICBpZiAoZXYudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJubVwiKSkge1xyXG4gICAgICAgIGVkaXRQcmlvcml0eShldik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzdG9yZWRJZCB9IGZyb20gXCIuL2lkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JlZElkXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZElkKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiaW5cIiwgSlNPTi5zdHJpbmdpZnkoYmluKSk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvalBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJQcm9qUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJFdmVudHNQYWdlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJEYWlseVBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJEYWlseVBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemF0aW9uIH0gZnJvbSBcIi4vaW5pdGlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgY2xlYXJQYWdlIH0gZnJvbSBcIi4vY2xlYXJQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlck5vdGVzUGFnZSB9IGZyb20gXCIuL3JlbmRlck5vdGVzUGFnZVwiO1xyXG5pbXBvcnQgeyBoYW5kbGVFc2NhcGUgfSBmcm9tIFwiLi9oYW5kbGVFc2NhcGVcIjtcclxuaW1wb3J0IHsgaGFuZGxlRW50ZXIgfSBmcm9tIFwiLi9oYW5kbGVFbnRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcblxyXG5pbml0aWFsaXphdGlvbihyZW5kZXJIZWFkZXIsIHJlbmRlckRhaWx5UGFnZSwgcmVuZGVyRm9vdGVyKTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkxpXCIpO1xyXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5uYXZMaVwiKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUGFnZShcclxuICAgICAgdGFyZ2V0LmlkLFxyXG4gICAgICByZW5kZXJQcm9qUGFnZSxcclxuICAgICAgcmVuZGVyRGFpbHlQYWdlLFxyXG4gICAgICByZW5kZXJFdmVudHNQYWdlLFxyXG4gICAgICByZW5kZXJOb3Rlc1BhZ2VcclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuc2V0SW50ZXJ2YWwoY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCwgMTAwMCAqIDYwKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjYXBlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRW50ZXIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=