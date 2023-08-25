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
  --BOX-SHADOW-C: black;
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
  overflow: hidden;
  background-color: var(--MAIN-BG-C);
}

/* HEADER */

.navbar {
  height: 100%;
}

.navUl {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
  background-color: var(--HEADER-BG-C);
  gap: 1rem;
}

.navLi {
  height: 100%;
  width: 100%;
  font-weight: bold;
  font-size: 1.3rem;
  background-color: transparent;
  color: var(--HEADER-ALT2);
  border: none;
  list-style-type: none;
  text-align: center;
  transition: background-color 0.3s ease;
  display: grid;
  place-items: center;
}

.navSpan {
  width: max-content;
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
.navLi:hover {
  background-color: var(--OBJECT-ALT-C);
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
}

.newObject:hover,
.newNote:hover,
.newObject:focus,
.newNote:focus {
  transform: scale(1.05);
  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);
}

.object:hover,
.object:focus,
.object:active,
.noteObject:hover,
.nodeObject:focus,
.noteObject:active {
  transform: scale(1.02);
  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);
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
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
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

.Task:hover,
.Task:focus,
.Task:active {
  transform: scale(1.02);
  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);
}

.objTitle,
.taskTitle,
.eventTitle,
.noteTitle {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  padding: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
}
.noteTitle {
  cursor: auto;
}
.objNote,
.taskNote,
.eventNote {
  cursor: pointer;
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
  grid-template-columns: 2fr 3rem 2rem;
  background-color: var(--OBJECT-BG-C);
  color: var(--OBJECT-C);
  row-gap: 0.5rem;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
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
  grid-row: 3/4;
  grid-column: 1/-1;
}
.noteMark {
  cursor: pointer;
  height: 100%;
  display: grid;
  align-items: center;
}

.noteTitle {
  background-color: var(--OBJECT-ALT-C);
  padding: 0.2rem;
  font-size: 1.2rem;
}
.noteBody {
  max-width: 100%;
  grid-row: 2 / 3;
  grid-column: 1/-1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  background-color: var(--OBJECT-ALT-C);
  padding: 0.3rem;
}

/* EVENTS */

.eventsContainer {
  height: 80vh;
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
  height: 42vh;
  display: grid;
  grid-template-rows: repeat(auto-fill, 2rem);
  width: 100%;
  padding: 0.5rem;
  background-color: var(--CALENDAR-ALT-BG-C);
  gap: 0.5rem;
  overflow-y: auto;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.binBtn:focus,
.binBtn:hover {
  transform: scale(1.02);
  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);
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
  height: 80%;
  width: clamp(300px, 90%, 800px);
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr) 5fr 5fr 5fr;
  background-color: var(--POPUP-BG-C);
  color: var(--POPUP-C);
  padding: 1rem;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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CA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,oCAAoC;EACpC,oCAAoC;EACpC,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,qDAAqD;EACrD,uCAAuC;AACzC;AACA;EACE,sCAAsC;EACtC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,qCAAqC;EACrC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,qCAAqC;EACrC,eAAe;AACjB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,gCAAgC;EAChC,sCAAsC;EACtC,wBAAwB;EACxB,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,YAAY;AACd;AACA;EACE,0CAA0C;AAC5C;AACA;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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n  --HEADER-BG-C: black;\r\n  --HEADER-C: aliceblue;\r\n  --OBJECT-BG-C: rgb(185, 102, 2);\r\n  --OBJECT-C: aliceblue;\r\n  --OBJECT-ALT-C: Rebeccapurple;\r\n  --MAIN-BG-C: darkseagreen;\r\n  --MAIN-C: aliceblue;\r\n  --CALENDAR-BG-C: darkorange;\r\n  --CALENDAR-C: black;\r\n  --CALENDAR-ALT-BG-C: aliceblue;\r\n  --CALENDAR-ALT-C: ;\r\n  --CALENDAR-HOVER-BG-C: rgba(0, 0, 0, 0.429);\r\n  --BOX-SHADOW-C: black;\r\n  /* PRIORITY */\r\n  --PRIORITY-LOW: green;\r\n  --PRIORITY-MED: yellow;\r\n  --PRIORITY-HIGH: red;\r\n  /* POPUP */\r\n  --POPUP-BG-C: Rebeccapurple;\r\n  --POPUP-C: aliceblue;\r\n  --POPUP-ALT-C: black;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 11vh 86vh 4vh;\r\n  overflow: hidden;\r\n  background-color: var(--MAIN-BG-C);\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navbar {\r\n  height: 100%;\r\n}\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 0 2rem;\r\n  background-color: var(--HEADER-BG-C);\r\n  gap: 1rem;\r\n}\r\n\r\n.navLi {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n  background-color: transparent;\r\n  color: var(--HEADER-ALT2);\r\n  border: none;\r\n  list-style-type: none;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.navSpan {\r\n  width: max-content;\r\n  user-select: none;\r\n  display: inline-block;\r\n  transition: transform 0.3s ease;\r\n  color: var(--HEADER-C);\r\n}\r\n.navSpan::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -7px;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--HEADER-C);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n}\r\n.navLi:hover .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi:hover .navSpan::before {\r\n  opacity: 1;\r\n}\r\n.navLi:hover {\r\n  background-color: var(--OBJECT-ALT-C);\r\n}\r\n\r\n/* HEADER ACTIVE */\r\n\r\n.navLi.active .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi.active .navSpan::before {\r\n  opacity: 1;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.listContainer {\r\n  padding: 1rem clamp(0.2rem, 2%, 2rem);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: min-content;\r\n  justify-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  width: 100%;\r\n  height: 2rem;\r\n  align-items: center;\r\n  display: grid;\r\n  grid-template-columns: 2.5rem 3fr max-content 1rem 1rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  gap: 0.5rem;\r\n  padding: 0 0.5rem;\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.objDate {\r\n  font-size: 0.7rem;\r\n}\r\n.dailyContainer .object {\r\n  grid-template-columns: 2.5rem 1rem 3fr 1rem 1rem;\r\n}\r\n\r\n.newObject,\r\n.newNote {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  cursor: pointer;\r\n  margin-bottom: 1rem;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.newObject:hover,\r\n.newNote:hover,\r\n.newObject:focus,\r\n.newNote:focus {\r\n  transform: scale(1.05);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.object:hover,\r\n.object:focus,\r\n.object:active,\r\n.noteObject:hover,\r\n.nodeObject:focus,\r\n.noteObject:active {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 3rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  grid-template-columns: 1rem 4fr 1fr 1rem 1rem;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  margin: -0.5rem;\r\n  width: 3rem;\r\n  font-size: 1.7rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.Task:hover,\r\n.Task:focus,\r\n.Task:active {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.objTitle,\r\n.taskTitle,\r\n.eventTitle,\r\n.noteTitle {\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  font-weight: 500;\r\n  padding: 0.2rem;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n.noteTitle {\r\n  cursor: auto;\r\n}\r\n.objNote,\r\n.taskNote,\r\n.eventNote {\r\n  cursor: pointer;\r\n}\r\n.delete {\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n/* PROJ */\r\n\r\n.object.proj {\r\n  grid-template-columns: 2.5rem 3fr 1rem 1rem;\r\n}\r\n\r\n/* NOTES */\r\n\r\n.notesContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r\n}\r\n.newNote {\r\n  height: 2rem;\r\n  grid-column: 1 / -1;\r\n  justify-self: center;\r\n}\r\n\r\n.bigGrid {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  grid-column: 1/-1;\r\n  gap: 0.5rem;\r\n}\r\n.colGrid {\r\n  height: min-content;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n}\r\n\r\n#one {\r\n  display: grid;\r\n}\r\n#two {\r\n  display: none;\r\n}\r\n#three {\r\n  display: none;\r\n}\r\n#four {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 630px) {\r\n  #two {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 940px) {\r\n  #three {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 1258px) {\r\n  #four {\r\n    display: grid;\r\n  }\r\n}\r\n.noteObject {\r\n  height: max-content;\r\n  width: clamp(300px, 100%, 400px);\r\n  padding: 0.5rem;\r\n  overflow-x: auto;\r\n  display: grid;\r\n  grid-template-columns: 2fr 3rem 2rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  row-gap: 0.5rem;\r\n  align-items: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.noteObject > .high {\r\n  background-color: var(--PRIORITY-HIGH);\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteObject > .low {\r\n  background-color: var(--PRIORITY-LOW);\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteDate {\r\n  text-align: center;\r\n  grid-row: 3/4;\r\n  grid-column: 1/-1;\r\n}\r\n.noteMark {\r\n  cursor: pointer;\r\n  height: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n\r\n.noteTitle {\r\n  background-color: var(--OBJECT-ALT-C);\r\n  padding: 0.2rem;\r\n  font-size: 1.2rem;\r\n}\r\n.noteBody {\r\n  max-width: 100%;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1/-1;\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  padding: 0.3rem;\r\n}\r\n\r\n/* EVENTS */\r\n\r\n.eventsContainer {\r\n  height: 80vh;\r\n  width: clamp(300px, 100%, 700px);\r\n  background-color: var(--CALENDAR-BG-C);\r\n  color: var(--CALENDAR-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 8fr;\r\n}\r\n\r\n.dateWrapper {\r\n  height: 7vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  place-items: center;\r\n}\r\n\r\n.calendarWrapper {\r\n  padding: 1rem;\r\n}\r\n.headings {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  font-weight: bold;\r\n  place-items: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  place-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDay {\r\n  position: relative;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n}\r\n.calendarDay::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 25px;\r\n  width: 25px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  border-radius: 5px;\r\n}\r\n.calendarDay:hover::before {\r\n  background: var(--CALENDAR-HOVER-BG-C);\r\n}\r\n.inactive {\r\n  opacity: 0.5;\r\n}\r\n.selected::before {\r\n  border: 2px solid var(--CALENDAR-ALT-BG-C);\r\n}\r\n.eventNoteWrapper {\r\n  height: 42vh;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 2rem);\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  background-color: var(--CALENDAR-ALT-BG-C);\r\n  gap: 0.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.weekEnd {\r\n  color: darkred;\r\n}\r\n.currentDay::before {\r\n  background-color: var(--CALENDAR-ALT-BG-C);\r\n}\r\n.arrow {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.priority {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  margin: 5px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.priority::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.priority:checked::before {\r\n  border: 2px solid var(--POPUP-C);\r\n}\r\n#low::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n#med::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n#high::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n.low {\r\n  outline: 3px solid var(--PRIORITY-LOW);\r\n}\r\n.med {\r\n  outline: 3px solid var(--PRIORITY-MED);\r\n}\r\n.high {\r\n  outline: 3px solid var(--PRIORITY-HIGH);\r\n}\r\n\r\n.eventlow::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n.eventmed::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n.eventhigh::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n/* COMPLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n  color: var(--HEADER-C);\r\n}\r\n\r\n/* BIN */\r\n\r\n.binBtn {\r\n  display: grid;\r\n  place-content: center;\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  position: absolute;\r\n  left: 1rem;\r\n  top: 86vh;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.binBtn:focus,\r\n.binBtn:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.binBox {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  border: 2px solid var(--POPUP-C);\r\n  background-color: var(--POPUP-BG-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 9fr 1fr;\r\n  justify-items: center;\r\n}\r\n.closePopUp {\r\n  width: 100%;\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\n.binInsides {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n  align-content: start;\r\n}\r\n.binWrapper {\r\n  width: 100%;\r\n}\r\n.binWrapper > .object {\r\n  display: grid;\r\n  grid-template-columns: 4fr max-content min-content 2rem;\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  position: absolute;\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.495);\r\n  color: var(--POPUP-C);\r\n  overflow: hidden;\r\n  place-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.popUpfield {\r\n  position: relative;\r\n  height: 80%;\r\n  width: clamp(300px, 90%, 800px);\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 1fr) 5fr 5fr 5fr;\r\n  background-color: var(--POPUP-BG-C);\r\n  color: var(--POPUP-C);\r\n  padding: 1rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.dueWrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  place-content: center;\r\n}\r\n\r\n.input {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  padding: 0.5rem;\r\n}\r\n.input::-webkit-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\n.input::-moz-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\ntextarea {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  resize: none;\r\n  padding: 0.5rem;\r\n}\r\n.popUpButton {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\n\r\n/* CHECKBOX */\r\n\r\ninput[type=\"checkbox\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  margin: 0;\r\n  font: inherit;\r\n  color: currentColor;\r\n  width: 1.15em;\r\n  height: 1.15em;\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n  content: \"\";\r\n  width: 0.65em;\r\n  height: 0.65em;\r\n  transform: scale(0);\r\n  transition: 120ms transform ease-in-out;\r\n  box-shadow: inset 1em 1em var(--POPUP-ALT-C);\r\n  background-color: CanvasText;\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n  transform: scale(1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus {\r\n  outline: max(2px, 0.15em) solid currentColor;\r\n  outline-offset: max(2px, 0.15em);\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FB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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ1U7QUFDSTtBQUNGO0FBQ1o7QUFDVTtBQUNWO0FBQ0U7QUFDVTtBQUNOO0FBQ0Y7QUFDd0I7QUFDcEU7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsNkRBQWUsRUFBRSxpREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksdURBQVU7QUFDZDtBQUNBLE1BQU0sMkRBQWM7QUFDcEIsTUFBTSw2REFBZTtBQUNyQixNQUFNLCtEQUFnQjtBQUN0QixNQUFNLDZEQUFlO0FBQ3JCO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLFlBQVksOEVBQStCO0FBQzNDLHFDQUFxQyx3REFBWTtBQUNqRCxxQ0FBcUMsc0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jbGVhclBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUmVuZGVyZWRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0Tm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9lZGl0UHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlEYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlckJ5VG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlck5vdGVHcmlkcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJSZW1vdmVkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb3JtYXREYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm1hdFRpbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZnJvbUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRDb21wbGV0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldE9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9nZXRUeXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVudGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hhbmRsZUVzY2FwZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaWRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFyc2VJc29EYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckJpbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJEYWlseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRWRpdFBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckV2ZW50c1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyR2V0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyTm90ZXNQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlck9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQcm9qVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3dpdGNoUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAvKiBWQVJJQUJMRVMgKi9cclxuICAtLUhFQURFUi1CRy1DOiBibGFjaztcclxuICAtLUhFQURFUi1DOiBhbGljZWJsdWU7XHJcbiAgLS1PQkpFQ1QtQkctQzogcmdiKDE4NSwgMTAyLCAyKTtcclxuICAtLU9CSkVDVC1DOiBhbGljZWJsdWU7XHJcbiAgLS1PQkpFQ1QtQUxULUM6IFJlYmVjY2FwdXJwbGU7XHJcbiAgLS1NQUlOLUJHLUM6IGRhcmtzZWFncmVlbjtcclxuICAtLU1BSU4tQzogYWxpY2VibHVlO1xyXG4gIC0tQ0FMRU5EQVItQkctQzogZGFya29yYW5nZTtcclxuICAtLUNBTEVOREFSLUM6IGJsYWNrO1xyXG4gIC0tQ0FMRU5EQVItQUxULUJHLUM6IGFsaWNlYmx1ZTtcclxuICAtLUNBTEVOREFSLUFMVC1DOiA7XHJcbiAgLS1DQUxFTkRBUi1IT1ZFUi1CRy1DOiByZ2JhKDAsIDAsIDAsIDAuNDI5KTtcclxuICAtLUJPWC1TSEFET1ctQzogYmxhY2s7XHJcbiAgLyogUFJJT1JJVFkgKi9cclxuICAtLVBSSU9SSVRZLUxPVzogZ3JlZW47XHJcbiAgLS1QUklPUklUWS1NRUQ6IHllbGxvdztcclxuICAtLVBSSU9SSVRZLUhJR0g6IHJlZDtcclxuICAvKiBQT1BVUCAqL1xyXG4gIC0tUE9QVVAtQkctQzogUmViZWNjYXB1cnBsZTtcclxuICAtLVBPUFVQLUM6IGFsaWNlYmx1ZTtcclxuICAtLVBPUFVQLUFMVC1DOiBibGFjaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExdmggODZ2aCA0dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NQUlOLUJHLUMpO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuXHJcbi5uYXZiYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdlVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQkctQyk7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubmF2TGkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdlNwYW4ge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcbi5uYXZTcGFuOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQyk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW46OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ubmF2TGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQtQyk7XHJcbn1cclxuXHJcbi8qIEhFQURFUiBBQ1RJVkUgKi9cclxuXHJcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4ubmF2TGkuYWN0aXZlIC5uYXZTcGFuOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIE1BSU4gKi9cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5saXN0Q29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxcmVtIGNsYW1wKDAuMnJlbSwgMiUsIDJyZW0pO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub2JqZWN0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5vYmplY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVyZW0gM2ZyIG1heC1jb250ZW50IDFyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG4ub2JqRGF0ZSB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuLmRhaWx5Q29udGFpbmVyIC5vYmplY3Qge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDFyZW0gM2ZyIDFyZW0gMXJlbTtcclxufVxyXG5cclxuLm5ld09iamVjdCxcclxuLm5ld05vdGUge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xyXG59XHJcblxyXG4ubmV3T2JqZWN0OmhvdmVyLFxyXG4ubmV3Tm90ZTpob3ZlcixcclxuLm5ld09iamVjdDpmb2N1cyxcclxuLm5ld05vdGU6Zm9jdXMge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG5cclxuLm9iamVjdDpob3ZlcixcclxuLm9iamVjdDpmb2N1cyxcclxuLm9iamVjdDphY3RpdmUsXHJcbi5ub3RlT2JqZWN0OmhvdmVyLFxyXG4ubm9kZU9iamVjdDpmb2N1cyxcclxuLm5vdGVPYmplY3Q6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLUJPWC1TSEFET1ctQyk7XHJcbn1cclxuXHJcbi50YXNrV3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uVGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSA0ZnIgMWZyIDFyZW0gMXJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG4ubmV3VGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIG1hcmdpbjogLTAuNXJlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhc2tEYXRlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uVGFzazpob3ZlcixcclxuLlRhc2s6Zm9jdXMsXHJcbi5UYXNrOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xyXG59XHJcblxyXG4ub2JqVGl0bGUsXHJcbi50YXNrVGl0bGUsXHJcbi5ldmVudFRpdGxlLFxyXG4ubm90ZVRpdGxlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubm90ZVRpdGxlIHtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuLm9iak5vdGUsXHJcbi50YXNrTm90ZSxcclxuLmV2ZW50Tm90ZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kZWxldGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFBST0ogKi9cclxuXHJcbi5vYmplY3QucHJvaiB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVyZW0gM2ZyIDFyZW0gMXJlbTtcclxufVxyXG5cclxuLyogTk9URVMgKi9cclxuXHJcbi5ub3Rlc0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyOTBweCwgMWZyKSk7XHJcbn1cclxuLm5ld05vdGUge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnR3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uY29sR3JpZCB7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuI29uZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4jdHdvIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0aHJlZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jZm91ciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYzMHB4KSB7XHJcbiAgI3R3byB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTQwcHgpIHtcclxuICAjdGhyZWUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyNThweCkge1xyXG4gICNmb3VyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59XHJcbi5ub3RlT2JqZWN0IHtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNDAwcHgpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM3JlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIHJvdy1nYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG4ubm90ZU9iamVjdCA+IC5oaWdoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm90ZU9iamVjdCA+IC5sb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vdGVEYXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ3JpZC1yb3c6IDMvNDtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxufVxyXG4ubm90ZU1hcmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubm90ZVRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4ubm90ZUJvZHkge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBncmlkLXJvdzogMiAvIDM7XHJcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbn1cclxuXHJcbi8qIEVWRU5UUyAqL1xyXG5cclxuLmV2ZW50c0NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNzAwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1DQUxFTkRBUi1DKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcclxufVxyXG5cclxuLmRhdGVXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyV3JhcHBlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uaGVhZGluZ3Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4uY2FsZW5kYXJEYXkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FsZW5kYXJEYXk6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLUNBTEVOREFSLUhPVkVSLUJHLUMpO1xyXG59XHJcbi5pbmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5zZWxlY3RlZDo6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XHJcbn1cclxuLmV2ZW50Tm90ZVdyYXBwZXIge1xyXG4gIGhlaWdodDogNDJ2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMnJlbSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1CRy1DKTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ud2Vla0VuZCB7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuLmN1cnJlbnREYXk6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xyXG59XHJcbi5hcnJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFBSSU9SSVRZICovXHJcblxyXG4ucHJpb3JpdHkge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByaW9yaXR5OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4ucHJpb3JpdHk6Y2hlY2tlZDo6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcclxufVxyXG4jbG93OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XHJcbn1cclxuI21lZDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xyXG59XHJcbiNoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4ubG93IHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4ubWVkIHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTUVEKTtcclxufVxyXG4uaGlnaCB7XHJcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4uZXZlbnRsb3c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTUVEKTtcclxufVxyXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4vKiBDT01QTEVURUQgKi9cclxuXHJcbi50cnVlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhbHNlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBOmFueS1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcblxyXG4vKiBCSU4gKi9cclxuXHJcbi5iaW5CdG4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDFyZW07XHJcbiAgdG9wOiA4NnZoO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcbi5iaW5CdG46Zm9jdXMsXHJcbi5iaW5CdG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG5cclxuLmJpbkJveCB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1CRy1DKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbG9zZVBvcFVwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmluSW5zaWRlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbn1cclxuLmJpbldyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iaW5XcmFwcGVyID4gLm9iamVjdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciBtYXgtY29udGVudCBtaW4tY29udGVudCAycmVtO1xyXG59XHJcblxyXG4vKiBQT1BVUCAqL1xyXG5cclxuLnBvcFVwQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40OTUpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBvcFVwZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgODAwcHgpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAxZnIpIDVmciA1ZnIgNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4ucHJpb3JpdHlXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmR1ZVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4uaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxuLmlucHV0OjotbW96LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLnBvcFVwQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ0hFQ0tCT1ggKi9cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gIHdpZHRoOiAxLjE1ZW07XHJcbiAgaGVpZ2h0OiAxLjE1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMC42NWVtO1xyXG4gIGhlaWdodDogMC42NWVtO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tUE9QVVAtQUxULUMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixv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Z0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC8qIFZBUklBQkxFUyAqL1xcclxcbiAgLS1IRUFERVItQkctQzogYmxhY2s7XFxyXFxuICAtLUhFQURFUi1DOiBhbGljZWJsdWU7XFxyXFxuICAtLU9CSkVDVC1CRy1DOiByZ2IoMTg1LCAxMDIsIDIpO1xcclxcbiAgLS1PQkpFQ1QtQzogYWxpY2VibHVlO1xcclxcbiAgLS1PQkpFQ1QtQUxULUM6IFJlYmVjY2FwdXJwbGU7XFxyXFxuICAtLU1BSU4tQkctQzogZGFya3NlYWdyZWVuO1xcclxcbiAgLS1NQUlOLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tQ0FMRU5EQVItQkctQzogZGFya29yYW5nZTtcXHJcXG4gIC0tQ0FMRU5EQVItQzogYmxhY2s7XFxyXFxuICAtLUNBTEVOREFSLUFMVC1CRy1DOiBhbGljZWJsdWU7XFxyXFxuICAtLUNBTEVOREFSLUFMVC1DOiA7XFxyXFxuICAtLUNBTEVOREFSLUhPVkVSLUJHLUM6IHJnYmEoMCwgMCwgMCwgMC40MjkpO1xcclxcbiAgLS1CT1gtU0hBRE9XLUM6IGJsYWNrO1xcclxcbiAgLyogUFJJT1JJVFkgKi9cXHJcXG4gIC0tUFJJT1JJVFktTE9XOiBncmVlbjtcXHJcXG4gIC0tUFJJT1JJVFktTUVEOiB5ZWxsb3c7XFxyXFxuICAtLVBSSU9SSVRZLUhJR0g6IHJlZDtcXHJcXG4gIC8qIFBPUFVQICovXFxyXFxuICAtLVBPUFVQLUJHLUM6IFJlYmVjY2FwdXJwbGU7XFxyXFxuICAtLVBPUFVQLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tUE9QVVAtQUxULUM6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExdmggODZ2aCA0dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUFJTi1CRy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZVbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1CRy1DKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1BTFQyKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZTcGFuIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQyk7XFxyXFxufVxcclxcbi5uYXZTcGFuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC03cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUMpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbn1cXHJcXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW46OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4ubmF2TGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSIEFDVElWRSAqL1xcclxcblxcclxcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbn1cXHJcXG4ubmF2TGkuYWN0aXZlIC5uYXZTcGFuOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5saXN0Q29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gY2xhbXAoMC4ycmVtLCAyJSwgMnJlbSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2JqZWN0V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ub2JqZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgbWF4LWNvbnRlbnQgMXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxufVxcclxcbi5vYmpEYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG4uZGFpbHlDb250YWluZXIgLm9iamVjdCB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAxcmVtIDNmciAxcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdPYmplY3QsXFxyXFxuLm5ld05vdGUge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld09iamVjdDpob3ZlcixcXHJcXG4ubmV3Tm90ZTpob3ZlcixcXHJcXG4ubmV3T2JqZWN0OmZvY3VzLFxcclxcbi5uZXdOb3RlOmZvY3VzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2JqZWN0OmhvdmVyLFxcclxcbi5vYmplY3Q6Zm9jdXMsXFxyXFxuLm9iamVjdDphY3RpdmUsXFxyXFxuLm5vdGVPYmplY3Q6aG92ZXIsXFxyXFxuLm5vZGVPYmplY3Q6Zm9jdXMsXFxyXFxuLm5vdGVPYmplY3Q6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1dyYXBwZXIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLlRhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gNGZyIDFmciAxcmVtIDFyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuLm5ld1Rhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBtYXJnaW46IC0wLjVyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5UYXNrOmhvdmVyLFxcclxcbi5UYXNrOmZvY3VzLFxcclxcbi5UYXNrOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9ialRpdGxlLFxcclxcbi50YXNrVGl0bGUsXFxyXFxuLmV2ZW50VGl0bGUsXFxyXFxuLm5vdGVUaXRsZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubm90ZVRpdGxlIHtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuLm9iak5vdGUsXFxyXFxuLnRhc2tOb3RlLFxcclxcbi5ldmVudE5vdGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGVsZXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJPSiAqL1xcclxcblxcclxcbi5vYmplY3QucHJvaiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgMXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOT1RFUyAqL1xcclxcblxcclxcbi5ub3Rlc0NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjkwcHgsIDFmcikpO1xcclxcbn1cXHJcXG4ubmV3Tm90ZSB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaWdHcmlkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNvbEdyaWQge1xcclxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jb25lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcbiN0d28ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuI3RocmVlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNmb3VyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2MzBweCkge1xcclxcbiAgI3R3byB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5NDBweCkge1xcclxcbiAgI3RocmVlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyNThweCkge1xcclxcbiAgI2ZvdXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubm90ZU9iamVjdCB7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCAxMDAlLCA0MDBweCk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNyZW0gMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICByb3ctZ2FwOiAwLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxufVxcclxcbi5ub3RlT2JqZWN0ID4gLmhpZ2gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktSElHSCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubm90ZU9iamVjdCA+IC5sb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ub3RlRGF0ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBncmlkLXJvdzogMy80O1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxufVxcclxcbi5ub3RlTWFyayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVUaXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcbi5ub3RlQm9keSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFVkVOVFMgKi9cXHJcXG5cXHJcXG4uZXZlbnRzQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNzAwcHgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ0FMRU5EQVItQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tQ0FMRU5EQVItQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZVdyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiA3dmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhcldyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuLmhlYWRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG4uY2FsZW5kYXJEYXlzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG4uY2FsZW5kYXJEYXkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5OjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tQ0FMRU5EQVItSE9WRVItQkctQyk7XFxyXFxufVxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcbi5zZWxlY3RlZDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUNBTEVOREFSLUFMVC1CRy1DKTtcXHJcXG59XFxyXFxuLmV2ZW50Tm90ZVdyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiA0MnZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMnJlbSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1CRy1DKTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtFbmQge1xcclxcbiAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcbi5jdXJyZW50RGF5OjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xcclxcbn1cXHJcXG4uYXJyb3cge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJJT1JJVFkgKi9cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJpb3JpdHk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuLnByaW9yaXR5OmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcXHJcXG59XFxyXFxuI2xvdzo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XFxyXFxufVxcclxcbiNtZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xcclxcbn1cXHJcXG4jaGlnaDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbn1cXHJcXG4ubWVkIHtcXHJcXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1QUklPUklUWS1NRUQpO1xcclxcbn1cXHJcXG4uaGlnaCB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktSElHSCk7XFxyXFxufVxcclxcblxcclxcbi5ldmVudGxvdzo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XFxyXFxufVxcclxcbi5ldmVudG1lZDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLU1FRCk7XFxyXFxufVxcclxcbi5ldmVudGhpZ2g6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09NUExFVEVEICovXFxyXFxuXFxyXFxuLnRydWUge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uZmFsc2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb3RlckE6YW55LWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQklOICovXFxyXFxuXFxyXFxuLmJpbkJ0biB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDFyZW07XFxyXFxuICB0b3A6IDg2dmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5iaW5CdG46Zm9jdXMsXFxyXFxuLmJpbkJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpbkJveCB7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jbG9zZVBvcFVwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYmluSW5zaWRlcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG4uYmluV3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmJpbldyYXBwZXIgPiAub2JqZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciBtYXgtY29udGVudCBtaW4tY29udGVudCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQT1BVUCAqL1xcclxcblxcclxcbi5wb3BVcENvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQ5NSk7XFxyXFxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcGZpZWxkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDgwMHB4KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDFmcikgNWZyIDVmciA1ZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1CRy1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eVdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlV3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG4uaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuLmlucHV0OjotbW96LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxyXFxufVxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuLnBvcFVwQnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ0hFQ0tCT1ggKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxyXFxuICB3aWR0aDogMS4xNWVtO1xcclxcbiAgaGVpZ2h0OiAxLjE1ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMC42NWVtO1xcclxcbiAgaGVpZ2h0OiAwLjY1ZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1QT1BVUC1BTFQtQyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY2xlYXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlcIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICBwYWdlLmZvckVhY2goKHBhZ2UpID0+IHBhZ2UucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJQb3BVcCA9ICgpID0+IHtcclxuICBjb25zdCBwb3BVcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIHBvcFVwcy5mb3JFYWNoKChwb3BVcCkgPT4gcG9wVXAucmVtb3ZlKCkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2xlYXJSZW5kZXJlZFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlcmVkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndyYXBwZXJcIik7XHJcbiAgcmVuZGVyZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICBwcm9qLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHNlbGVjdGVkRGF0ZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b0xvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRJdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgSWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMTApKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGZpbmRQcm9qKElkKT8uaWQ7XHJcbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IElkKTtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0YXNrLm5vdGUgPSBub3RlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocHJvamVjdElkID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBJZCk7XHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHByb2plY3QudHlwZSA9PT0gXCJkYWlseVwiIHx8IFwibm90ZXNcIikgJiZcclxuICAgICAgICBwcm9qZWN0LnR5cGUgIT09IFwicHJvalwiICYmXHJcbiAgICAgICAgcHJvamVjdC50eXBlICE9PSBcImV2ZW50c1wiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBpZiAocHJvamVjdC50eXBlID09PSBcIm5vdGVzXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHByaW9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eV1cIik7XHJcbiAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XHJcbiAgICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocHJvamVjdC50eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgICBjb25zdCBkdWVUaW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBkdWVUaW1lT2JqZWN0ID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgICAgICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBkdWVUaW1lVmFsdWUuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgZHVlVGltZU9iamVjdC5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICAgICAgICBkdWVUaW1lT2JqZWN0LnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICAgICAgICBwcm9qZWN0LmR1ZURhdGUgPSBkdWVUaW1lT2JqZWN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBkdWVEYXRlT2JqZWN0ID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlKTtcclxuICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZURhdGVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgcHJvamVjdC5ub3RlID0gbm90ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdE5vdGUgPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XHJcbiAgY29uc3QgdGFyZ2V0SWQgPSBldi50YXJnZXQuaWQ7XHJcbiAgY29uc3Qgb2JqZWN0SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBvYmplY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0SWQpO1xyXG4gIGlmICh0YXJnZXRJZC5zbGljZSgwLCAyKSA9PT0gXCJudFwiKSB7XHJcbiAgICBvYmplY3QudGl0bGUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIGlmICh0YXJnZXRJZC5zbGljZSgwLCAyKSA9PT0gXCJuYlwiKSB7XHJcbiAgICBvYmplY3Qubm90ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRQcmlvcml0eSA9IChldikgPT4ge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdHMuZmluZCgob2JqKSA9PiBvYmouaWQgPT09IGlkKTtcclxuICBvYmplY3QucHJpb3JpdHkgPSBldi50YXJnZXQuY2xhc3NMaXN0Lml0ZW0oMSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHNlbGVjdGVkRGF0ZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeURhdGUgPSAoYXJyYXkpID0+IHtcclxuICBpZiAoc2VsZWN0ZWREYXRlKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFN0cmluZyA9IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmR1ZURhdGUpIHtcclxuICAgICAgICBjb25zdCBkdWVTdHJpbmcgPSBmb3JtYXREYXRlKGl0ZW0uZHVlRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGR1ZVN0cmluZyA9PT0gc2VsZWN0ZWRTdHJpbmc7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5jb21wbGV0aW9uRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25TdHJpbmcgPSBmb3JtYXREYXRlKGl0ZW0uY29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgIHJldHVybiBjb21wbGV0aW9uU3RyaW5nID09PSBzZWxlY3RlZFN0cmluZztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlUb2RheSA9IChhcnJheSkgPT4ge1xyXG4gIGNvbnN0IHR5cGVPcmRlciA9IHtcclxuICAgIGV2ZW50czogMSxcclxuICAgIHByb2o6IDIsXHJcbiAgICBkYWlseTogMyxcclxuICB9O1xyXG4gIGNvbnN0IHByaW9yaXR5T3JkZXIgPSB7XHJcbiAgICBsb3c6IDMsXHJcbiAgICBtZWQ6IDIsXHJcbiAgICBoaWdoOiAxLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBzdGFydE9mRGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gIHN0YXJ0T2ZEYXkuc2V0SG91cnMoMCwgMCk7XHJcbiAgY29uc3QgZW5kT2ZEYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgZW5kT2ZEYXkuc2V0SG91cnMoMjMsIDU5KTtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZHVlRGF0ZSk7XHJcbiAgICByZXR1cm4gZHVlRGF0ZSA+PSBzdGFydE9mRGF5ICYmIGR1ZURhdGUgPD0gZW5kT2ZEYXk7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc29ydGVkQnlQcmlvcml0eSA9IGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IHR5cGVDb21wID0gdHlwZU9yZGVyW2EudHlwZV0gLSB0eXBlT3JkZXJbYi50eXBlXTtcclxuICAgIGlmICh0eXBlQ29tcCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gdHlwZUNvbXA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByaW9yaXR5T3JkZXJbYS5wcmlvcml0eV0gLSBwcmlvcml0eU9yZGVyW2IucHJpb3JpdHldO1xyXG4gIH0pO1xyXG4gIHJldHVybiBzb3J0ZWRCeVByaW9yaXR5O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5VHlwZSA9IChhcnJheSkgPT4ge1xyXG4gIGxldCBmaWx0ZXJlZDtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcihcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gXCJldmVudHNcIiB8fCBpdGVtLnR5cGUgPT09IFwicHJvalwiXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBnZXRUeXBlKCkpO1xyXG4gIH1cclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmaWx0ZXJOb3RlR3JpZHMgPSAoZ3JpZHMpID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20oZ3JpZHMpLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgcmV0dXJuIGRpc3BsYXkuZGlzcGxheSAhPT0gXCJub25lXCI7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBiaW4gfSBmcm9tIFwiLi9yZW1vdmVDb21wbGV0ZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJSZW1vdmVkID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoXHJcbiAgICAoaXRlbSkgPT4gIWJpbi5zb21lKChiaW5JdGVtKSA9PiBiaW5JdGVtLmlkID09PSBpdGVtLmlkKVxyXG4gICk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGBcclxuICA8YVxyXG4gIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFya2VzdG9mVGltZXNcIlxyXG4gIGNsYXNzPVwiZm9vdGVyQVwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICA+RGFya1RpbWVzPC9hXHJcbj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZm9vdGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAob2JqZWN0RGF0ZSkgPT4ge1xyXG4gIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBvYmplY3REYXRlO1xyXG4gIGxldCBmb3JtYXR0ZWREdWVEYXRlID0gXCJcIjtcclxuICBpZiAob2JqZWN0RGF0ZSkge1xyXG4gICAgY29uc3QgeWVhciA9IGR1ZURhdGVPYmplY3QuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhkdWVEYXRlT2JqZWN0LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgZm9ybWF0dGVkRHVlRGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkRHVlRGF0ZTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKG9iamVjdFRpbWUpID0+IHtcclxuICBjb25zdCBkdWVEYXRlT2JqZWN0ID0gb2JqZWN0VGltZTtcclxuICBsZXQgZm9ybWF0dGVkVGltZSA9IFwiXCI7XHJcbiAgaWYgKG9iamVjdFRpbWUpIHtcclxuICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkdWVEYXRlT2JqZWN0LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgc2V0UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzZXRTdG9yZWRJZCB9IGZyb20gXCIuL2lkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHNldEJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5pbXBvcnQgeyBwYXJzZUlzb0RhdGUgfSBmcm9tIFwiLi9wYXJzZUlzb0RhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlZFN0b3JlZElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdG9yZWRJZFwiKTtcclxuICBpZiAoc3RvcmVkU3RvcmVkSWQgIT09IG51bGwpIHtcclxuICAgIHNldFN0b3JlZElkKHBhcnNlSW50KHN0b3JlZFN0b3JlZElkKSk7XHJcbiAgfVxyXG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcclxuICBpZiAoc3RvcmVkUHJvamVjdHMgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHBhcnNlZEFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XHJcbiAgICBjb25zdCBub25OdWxsQXJyYXkgPSBwYXJzZWRBcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG51bGwpO1xyXG4gICAgY29uc3QgY29udmVydGVkQXJyYXkgPSBwYXJzZUlzb0RhdGUobm9uTnVsbEFycmF5KTtcclxuICAgIHNldFByb2plY3RzKGNvbnZlcnRlZEFycmF5KTtcclxuICB9IGVsc2Uge1xyXG4gIH1cclxuICBjb25zdCBzdG9yZWRCaW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJpblwiKTtcclxuICBpZiAoc3RvcmVkQmluICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBwYXJzZWRBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkQmluKTtcclxuICAgIGNvbnN0IG5vbk51bGxBcnJheSA9IHBhcnNlZEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBjb25zdCBjb252ZXJ0ZWRBcnJheSA9IHBhcnNlSXNvRGF0ZShub25OdWxsQXJyYXkpO1xyXG4gICAgc2V0QmluKGNvbnZlcnRlZEFycmF5KTtcclxuICB9IGVsc2Uge1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGxldGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiY29tcGxldGlvblwiXScpO1xyXG4gIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hlY2tCb3hFdmVudCk7XHJcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveEV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrQm94RXZlbnQgPSAoZXYpID0+IHtcclxuICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBjaGVja0JveGVzKGV2KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm94ZXMoZXYpIHtcclxuICBjb25zdCBjaGVja0JveElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxKSk7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gY2hlY2tCb3hJZCk7XHJcbiAgaWYgKHByb2plY3QpIHtcclxuICAgIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgcHJvamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKCFwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0V2l0aFRhc2sgPSBmaW5kUHJvaihjaGVja0JveElkKTtcclxuICAgIGNvbnN0IG9iamVjdCA9IHByb2plY3RXaXRoVGFzay50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBjaGVja0JveElkKTtcclxuICAgIGlmIChldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBvYmplY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgIH0gZWxzZSBpZiAoIWV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGVja0NvbXBsZXRpb24oZXYpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tDb21wbGV0aW9uID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY2hlY2tCb3hJZCA9IGV2ID8gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxKSkgOiBudWxsO1xyXG4gIGNvbnN0IHRhcmdldENoZWNrZWQgPSBldiA/IGV2LnRhcmdldC5jaGVja2VkIDogbnVsbDtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRPYmplY3RzID0gb2JqLnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpO1xyXG4gICAgaWYgKG9iai50eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgIGlmIChvYmouZHVlRGF0ZSA8IGN1cnJlbnREYXRlKSB7XHJcbiAgICAgICAgb2JqLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICBvYmouY29tcGxldGlvbkRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKG9iai50YXNrcy5sZW5ndGggIT09IDAgJiYgY29tcGxldGVkT2JqZWN0cy5sZW5ndGggPT09IDApIHx8XHJcbiAgICAgIChvYmoudHlwZSA9PT0gXCJkYWlseVwiICYmIHRhcmdldENoZWNrZWQgJiYgY2hlY2tCb3hJZCA9PT0gb2JqLmlkKVxyXG4gICAgKSB7XHJcbiAgICAgIG9iai5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmIChvYmoudGFza3MubGVuZ3RoICE9PSAwICYmIGNvbXBsZXRlZE9iamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIG9iai5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICBvYmouY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIE9iamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IHNlbGVjdGVkRGF0ZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b0xvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9iamVjdCA9IChwcm9qSWQpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgbGV0IGR1ZURhdGUgPSBcIlwiO1xyXG4gIGxldCB0eXBlID0gZ2V0VHlwZSgpO1xyXG4gIGlmIChcclxuICAgIHByb2pJZCA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICB0eXBlICE9PSBcImRhaWx5XCIgJiZcclxuICAgIHR5cGUgIT09IFwibm90ZXNcIiAmJlxyXG4gICAgdHlwZSAhPT0gXCJldmVudHNcIlxyXG4gICkge1xyXG4gICAgY29uc3QgZHVlRGF0ZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xyXG4gICAgaWYgKGR1ZURhdGVWYWx1ZSkge1xyXG4gICAgICBjb25zdCBkdWVEYXRlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVWYWx1ZSk7XHJcbiAgICAgIGR1ZURhdGVEYXRlLnNldEhvdXJzKDIzKTtcclxuICAgICAgZHVlRGF0ZURhdGUuc2V0TWludXRlcyg1OSk7XHJcbiAgICAgIGR1ZURhdGUgPSBkdWVEYXRlRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGR1ZURhdGUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgY29uc3QgZHVlVGltZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGR1ZVRpbWVWYWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICBpZiAoZHVlVGltZVZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgICAgc2VsZWN0ZWQuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgICBzZWxlY3RlZC5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgICBkdWVEYXRlID0gc2VsZWN0ZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdTZWxlY3RlZCA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgIGR1ZURhdGUgPSBuZXdTZWxlY3RlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgbWlkTmlnaHQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgbWlkTmlnaHQuc2V0SG91cnMoMjMsIDU5LCAwKTtcclxuICAgIGR1ZURhdGUgPSBtaWROaWdodDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRpb25EYXRlID0gbnVsbDtcclxuICBsZXQgcHJpb3JpdHkgPSBjaGVjaygpO1xyXG4gIGlmICh0eXBlID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGNvbnN0IHByaW9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eV1cIik7XHJcbiAgICBwcmlvcml0eSA9IHByaW9yRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIpO1xyXG4gIH1cclxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qTm90ZVwiKS52YWx1ZTtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgYWRkT2JqZWN0KFxyXG4gICAgcHJvaklkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBjb21wbGV0aW9uRGF0ZSxcclxuICAgIGNvbXBsZXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3RlLFxyXG4gICAgdHlwZVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRPYmplY3QgPSAoXHJcbiAgcHJvaklkLFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikgPT4ge1xyXG4gIGNvbnN0IG5ld09iamVjdCA9IG5ldyBPYmplY3QoXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxuICBpZiAocHJvaklkICE9PSBudWxsICYmIHByb2pJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2pJZCk7XHJcbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld09iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVjayA9ICgpID0+IHtcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcbiAgZm9yIChjb25zdCBidXR0b24gb2YgcmFkaW8pIHtcclxuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLmlkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgcmV0dXJuIGFjdGl2ZVRhYi5pZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGhhbmRsZUVudGVyID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgZW50ZXJLZXlDb2RlID0gMTM7XHJcbiAgY29uc3QgcGFydGljdWxhckVsZW1lbnRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJhZGRQcm9qQnRuXCJdJyk7XHJcbiAgaWYgKHBhcnRpY3VsYXJFbGVtZW50SWQgJiYgZXYua2V5Q29kZSA9PT0gZW50ZXJLZXlDb2RlICYmICFldi5zaGlmdEtleSkge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgdmlldzogd2luZG93LFxyXG4gICAgfSk7XHJcbiAgICBwYXJ0aWN1bGFyRWxlbWVudElkLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUVzY2FwZSA9IChldikgPT4ge1xyXG4gIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXYua2V5ID09PSBcIkVzY1wiKSB7XHJcbiAgICBjbGVhclBvcFVwKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGBcclxuICA8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcbiAgPHVsIGNsYXNzPVwibmF2VWxcIj5cclxuICAgIDxsaSBpZD1cInByb2pcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPlByb2plY3Q8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZGFpbHlcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPkRhaWx5PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cImV2ZW50c1wiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RXZlbnRzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cIm5vdGVzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5Ob3Rlczwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9uYXY+YDtcclxuXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGhlYWRlcik7XHJcbn07XHJcbiIsImV4cG9ydCBsZXQgc3RvcmVkSWQgPSAwO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgc3RvcmVkSWQrKztcclxuICAgIHJldHVybiBzdG9yZWRJZDtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBnZW5lcmF0ZWRJZCA9IGdlbmVyYXRlSWQoKTtcclxuZXhwb3J0IGNvbnN0IHNldFN0b3JlZElkID0gKHZhbHVlKSA9PiB7XHJcbiAgc3RvcmVkSWQgPSB2YWx1ZTtcclxufTtcclxuIiwiaW1wb3J0IHsgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9pc0xvY2FsU3RvcmFnZUF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJCaW4gfSBmcm9tIFwiLi9yZW5kZXJCaW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXphdGlvbiA9IChwaWVjZTEsIHBpZWNlMiwgcGllY2UzKSA9PiB7XHJcbiAgcGllY2UxKCk7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYWlseVwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwaWVjZTIoKTtcclxuICBwaWVjZTMoKTtcclxuICBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpO1xyXG4gIHJlbmRlckJpbigpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgZnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2Zyb21Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcclxuICB2YXIgdGVzdCA9IFwidGVzdFwiO1xyXG4gIHRyeSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXN0LCB0ZXN0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcclxuICBmcm9tTG9jYWxTdG9yYWdlKCk7XHJcbn0gZWxzZSB7XHJcbiAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHBhcnNlSXNvRGF0ZSA9IChhcnJheSkgPT4ge1xyXG4gIGFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKG9iamVjdC5kdWVEYXRlKSB7XHJcbiAgICAgIG9iamVjdC5kdWVEYXRlID0gY29udmVydERhdGUob2JqZWN0LmR1ZURhdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5jb21wbGV0aW9uRGF0ZSkge1xyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUgPSBjb252ZXJ0RGF0ZShvYmplY3QuY29tcGxldGlvbkRhdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5hZGRlZERhdGUpIHtcclxuICAgICAgb2JqZWN0LmFkZGVkRGF0ZSA9IGNvbnZlcnREYXRlKG9iamVjdC5hZGRlZERhdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC50YXNrcykge1xyXG4gICAgICBvYmplY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUpIHtcclxuICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IGNvbnZlcnREYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID0gY29udmVydERhdGUodGFzay5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXNrLmFkZGVkRGF0ZSkge1xyXG4gICAgICAgICAgdGFzay5hZGRlZERhdGUgPSBjb252ZXJ0RGF0ZSh0YXNrLmFkZGVkRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gYXJyYXk7XHJcbn07XHJcblxyXG5jb25zdCBjb252ZXJ0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJldHVybiBwYXJzZWREYXRlO1xyXG59O1xyXG4iLCJleHBvcnQgbGV0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UHJvamVjdHMgPSAodmFsdWUpID0+IHtcclxuICBwcm9qZWN0cyA9IHZhbHVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9iamVjdChcclxuICB0aXRsZSxcclxuICBpZCxcclxuICBkdWVEYXRlLFxyXG4gIGNvbXBsZXRpb25EYXRlLFxyXG4gIGNvbXBsZXRlLFxyXG4gIHByaW9yaXR5LFxyXG4gIG5vdGUsXHJcbiAgdHlwZVxyXG4pIHtcclxuICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgdGhpcy5pZCA9IGlkO1xyXG4gIHRoaXMudGFza3MgPSBbXTtcclxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIHRoaXMuY29tcGxldGlvbkRhdGUgPSBjb21wbGV0aW9uRGF0ZTtcclxuICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIHRoaXMubm90ZSA9IG5vdGU7XHJcbiAgdGhpcy50eXBlID0gdHlwZTtcclxuICB0aGlzLmFkZGVkRGF0ZSA9IGdldERhdGUoKTtcclxufVxyXG5cclxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IGNoZWNrQ29tcGxldGlvbiB9IGZyb20gXCIuL2dldENvbXBsZXRpb25cIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVCaW4gfSBmcm9tIFwiLi9yZW5kZXJCaW5cIjtcclxuZXhwb3J0IGxldCBiaW4gPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRCaW4gPSAodmFsdWUpID0+IHtcclxuICBiaW4gPSB2YWx1ZTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUNvbXBsZXRlZCA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIHByb2plY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKG9iamVjdC5kdWVEYXRlKSB7XHJcbiAgICAgIGNvbnN0IG1pZE5pZ2h0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgICBtaWROaWdodC5zZXREYXRlKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSArIDEpO1xyXG4gICAgICBtaWROaWdodC5zZXRIb3VycygwLCAwLCAwKTtcclxuICAgICAgY29uc3QgbWlkTmlnaHRBaGVhZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIG1pZE5pZ2h0QWhlYWQuc2V0RGF0ZShvYmplY3QuZHVlRGF0ZS5nZXREYXRlKCkgKyAyKTtcclxuICAgICAgbWlkTmlnaHRBaGVhZC5zZXRIb3VycygwLCAwLCAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHR3b0hvdXJzQWhlYWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB0d29Ib3Vyc0FoZWFkLnNldEhvdXJzKG9iamVjdC5kdWVEYXRlLmdldEhvdXJzKCkgKyAyKTtcclxuICAgICAgaWYgKG9iamVjdC50eXBlID09PSBcImRhaWx5XCIpIHtcclxuICAgICAgICBpZiAob2JqZWN0LmNvbXBsZXRlID09PSB0cnVlICYmIGN1cnJlbnREYXRlID49IG9iamVjdC5kdWVEYXRlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBvYmplY3QuY29tcGxldGUgPT09IGZhbHNlICYmXHJcbiAgICAgICAgICBjdXJyZW50RGF0ZSA+PSBvYmplY3QuZHVlRGF0ZSAmJlxyXG4gICAgICAgICAgY3VycmVudERhdGUgPj0gbWlkTmlnaHRBaGVhZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgKG9iamVjdC50eXBlID09PSBcInByb2pcIiAmJiBvYmplY3QuY29tcGxldGUgPT09IHRydWUpIHx8XHJcbiAgICAgICAgKG9iamVjdC50eXBlID09PSBcImV2ZW50c1wiICYmIG9iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3QuaWQpO1xyXG4gICAgICAgIGNvbnN0IHNwbGljZWQgPSBwcm9qZWN0c1tpbmRleF07XHJcbiAgICAgICAgaWYgKCFiaW4uZmluZCgob2JqKSA9PiBvYmouaWQgPT09IHNwbGljZWQuaWQpKSB7XHJcbiAgICAgICAgICBiaW4ucHVzaChzcGxpY2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgY29uc3QgYmluQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5Cb3hcIik7XHJcbiAgaWYgKGJpbkJveCkge1xyXG4gICAgcG9wdWxhdGVCaW4oKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCA9ICgpID0+IHtcclxuICBjaGVja0NvbXBsZXRpb24oKTtcclxuICByZW1vdmVDb21wbGV0ZWQoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBiaW4gfSBmcm9tIFwiLi9yZW1vdmVDb21wbGV0ZWRcIjtcclxuaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b0xvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCB0YXJnZXRJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlkID09PSB0YXJnZXRJZCk7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qKSA9PiBwcm9qLmlkID09PSB0YXJnZXRJZCk7XHJcbiAgaWYgKFxyXG4gICAgKHByb2plY3QgIT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0ICE9PSBudWxsKSAmJlxyXG4gICAgZXYudGFyZ2V0LmlkLnNsaWNlKDAsIDIpID09IFwiZHBcIlxyXG4gICkge1xyXG4gICAgaWYgKFxyXG4gICAgICAocHJvamVjdC50eXBlID09PSBcImV2ZW50c1wiIHx8IHByb2plY3QudHlwZSA9PT0gXCJwcm9qXCIpICYmXHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPT09IHRydWVcclxuICAgICkge1xyXG4gICAgICBpZiAoYmluLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBwcm9qZWN0LmlkKSkge1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbi5wdXNoKHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwcm9qRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwdyR7dGFyZ2V0SWR9YCk7XHJcbiAgICAgIHByb2pFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pXaXRoVGFzayA9IHByb2plY3RzLmZpbmQoKHByb2opID0+XHJcbiAgICAgIHByb2oudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFyZ2V0SWQpXHJcbiAgICApO1xyXG4gICAgaWYgKHByb2pXaXRoVGFzaykge1xyXG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qV2l0aFRhc2sudGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZFxyXG4gICAgICApO1xyXG4gICAgICBwcm9qV2l0aFRhc2sudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B0JHt0YXJnZXRJZH1gKTtcclxuICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5pbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyQmluID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGJpbiA9IGAgPGRpdiBjbGFzcz1cImJpbkJ0bldyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJiaW5CdG5cIj5CSU48L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGJpbik7XHJcbiAgY29uc3QgYmluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5CdG5cIik7XHJcbiAgYmluQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQmluRXZlbnQpO1xyXG4gIGJpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkJpbkV2ZW50KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckJpbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBiaW4gPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmluQm94XCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cImJpbl9faDJcIj5CSU4gU1RPUkFHRTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiaW5JbnNpZGVzXCI+PC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVBvcFVwXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBiaW4pO1xyXG4gIHBvcHVsYXRlQmluKCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUG9wVXBcIik7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwRXZlbnQpO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwRXZlbnQpO1xyXG4gIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wVXBDb250YWluZXJcIikpIHtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlQmluID0gKCkgPT4ge1xyXG4gIGNsZWFyUmVuZGVyZWRCaW5JdGVtcygpO1xyXG4gIGJpbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICByZW5kZXJCaW5JdGVtKGl0ZW0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQmluSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5JbnNpZGVzXCIpO1xyXG4gIGNvbnN0IGJpbkl0ZW0gPSBgPGRpdiBjbGFzcz1cImJpbldyYXBwZXIgd3JhcHBlclwiIGlkPVwiYmkke2l0ZW0uaWR9XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm9iamVjdCAke2l0ZW0ucHJpb3JpdHl9ICR7aXRlbS5jb21wbGV0ZX1cIiBpZD1cImJvJHtpdGVtLmlkfSBcIj5cclxuICA8cCBjbGFzcz1cIm9iamVjdFRpdGxlXCIgaWQ9XCJidCR7aXRlbS5pZH1cIj4ke2l0ZW0udGl0bGV9PC9wPlxyXG4gIDxwIGNsYXNzPVwib2JqZWN0RGF0ZVwiIGlkPVwiYmQke2l0ZW0uaWR9XCI+JHtmb3JtYXREYXRlKGl0ZW0uY29tcGxldGlvbkRhdGUpfTwvcD5cclxuICA8cCBjbGFzcz1cIm9iamVjdFR5cGVcIiBpZD1cImJkJHtpdGVtLmlkfVwiPiR7aXRlbS50eXBlfTwvcD5cclxuICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke2l0ZW0uaWR9XCI+RDwvcD5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYmluSXRlbSk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhclJlbmRlcmVkQmluSXRlbXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRCaW5JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmluV3JhcHBlclwiKTtcclxuICByZW5kZXJlZEJpbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVCaW5JdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaXRlbUlkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgaXRlbUluZGV4ID0gYmluLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IGl0ZW1JZCk7XHJcbiAgYmluLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlUG9wVXBFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY2xlYXJQb3BVcCgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlRXZlbnQgPSAoZXYpID0+IHtcclxuICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICByZW1vdmVCaW5JdGVtKGV2KTtcclxuICBwb3B1bGF0ZUJpbigpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBvcGVuQmluRXZlbnQgPSAoZXYpID0+IHtcclxuICByZW5kZXJCaW5Db250YWluZXIoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckRhaWx5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lciBkYWlseUNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZXdPYmplY3RcIiBpZD1cIm5ld0RhaWx5VGFza1wiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgRGFpbHk8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3RGFpbHlUYXNrXCIpO1xyXG4gIG5ld1Byb2oucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxuICBuZXdQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IGVkaXRJdGVtIH0gZnJvbSBcIi4vZWRpdEl0ZW1cIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vZm9ybWF0VGltZVwiO1xyXG5pbXBvcnQgeyBtYXJrQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckVkaXRQb3BVcCA9IChldikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGV2LmlkLnNsaWNlKDIpKTtcclxuICBsZXQgb2JqZWN0O1xyXG4gIGlmIChldi5pZC5zbGljZSgwLCAyKSAhPT0gXCJwdFwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xyXG4gICAgb2JqZWN0ID0gcHJvamVjdDtcclxuICB9IGVsc2UgaWYgKGV2LmlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvaihpZCk7XHJcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBvYmplY3QgPSB0YXNrO1xyXG4gIH1cclxuICBsZXQgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIGlmIChvYmplY3QudHlwZSAhPT0gXCJkYWlseVwiICYmIG9iamVjdC50eXBlICE9PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgdmFsdWU9XCIke2Zvcm1hdERhdGUoXHJcbiAgICBvYmplY3QuZHVlRGF0ZVxyXG4gICl9XCI+XHJcbiAgPC9kaXY+YDtcclxuICB9IGVsc2UgaWYgKG9iamVjdC50eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGltZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIHZhbHVlPVwiJHtmb3JtYXRUaW1lKG9iamVjdC5kdWVEYXRlKX1cIj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqZWN0LnR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgY29uc3Qgbm90ZSA9IGA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgICBvYmplY3QudGl0bGVcclxuICAgICAgfVwiIGF1dG9mb2N1cyAgcGxhY2Vob2xkZXI9XCJUaXRsZSBnb2VzIGhlcmVcIi8+XHJcbiAgICAgIDxwIGNsYXNzPVwibm90ZURhdGVcIiBpZD1cIm5vdGVEYXRlXCI+JHtmb3JtYXREYXRlKG9iamVjdC5hZGRlZERhdGUpfTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGVNYXJrICR7b2JqZWN0LnByaW9yaXR5fVwiIGRhdGEtcHJpb3JpdHk9XCIke1xyXG4gICAgICBvYmplY3QucHJpb3JpdHlcclxuICAgIH1cIiBpZD1cIm5vdGVQcmlvcml0eSR7b2JqZWN0LmlkfVwiPk08L2Rpdj5cclxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPiR7XHJcbiAgICAgICAgb2JqZWN0Lm5vdGVcclxuICAgICAgfTwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7b2JqZWN0LmlkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbm90ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIiR7XHJcbiAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgfVwiIGF1dG9mb2N1cyAgcGxhY2Vob2xkZXI9XCJUaXRsZSBnb2VzIGhlcmVcIi8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImxvd1wiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJtZWRcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImhpZ2hcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDxwIGNsYXNzPVwidGFza0NvbXBsZXRpb25EYXRlXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbFxyXG4gICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgOiBgQ29tcGxldGVkIG9uOiR7b2JqZWN0LmNvbXBsZXRpb25EYXRlfWBcclxuICAgICAgICB9XHJcbiAgICAgIDwvcD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIk5vdGUgZ29lcyBoZXJlXCI+JHtcclxuICAgICAgb2JqZWN0Lm5vdGVcclxuICAgIH08L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtpZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKGV2LmlkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGRQcm9qQnRuJHtpZC5zbGljZSgyKX1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcENvbnRhaW5lclwiKTtcclxuICBpZiAocHJpb3JpdHlCdG4pIHtcclxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQcmlvcml0eSk7XHJcbiAgfVxyXG4gIGlmIChpZC5zbGljZSgwLCAyKSAhPT0gXCJwdFwiKSB7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgICAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgfVxyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxuICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcFVwQ29udGFpbmVyXCIpKSB7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSBcIi4vZmlsdGVyQnlUeXBlXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbmxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IGN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKTtcclxuY29uc3QgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuZXhwb3J0IGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCBjdXJyZW50RGF5KTtcclxuY29uc3QgbW9udGhzID0gW1xyXG4gIFwiSmFudWFyeVwiLFxyXG4gIFwiRmVicnVhcnlcIixcclxuICBcIk1hcmNoXCIsXHJcbiAgXCJBcHJpbFwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5lXCIsXHJcbiAgXCJKdWx5XCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIlNlcHRlbWJlclwiLFxyXG4gIFwiT2N0b2JlclwiLFxyXG4gIFwiTm92ZW1iZXJcIixcclxuICBcIkRlY2VtYmVyXCIsXHJcbl07XHJcbmNvbnN0IHdlZWtEYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFdmVudHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImV2ZW50c0NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhdGVXcmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBiYWNrd2FyZFwiIGlkPVwiYmFja3dhcmRcIj48PC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiY3VycmVudERhdGVcIj48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBmb3J3YXJkXCIgaWQ9XCJmb3J3YXJkXCI+PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJXcmFwcGVyXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImhlYWRpbmdzXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPk1vbjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlR1ZTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPldlZDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlRodTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPkZyaTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlNhdDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlN1bjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNhbGVuZGFyRGF5c1wiPlxyXG4gICAgICA8L3VsPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnROb3RlV3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RXZlbnRcIj5cclxuICAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBFdmVudDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+ICAgIFxyXG4gICAgYDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZXZlbnRzUGFnZSk7XHJcbiAgcmVuZGVyQ2FsZW5kYXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpcnN0RGF0ZU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcclxuICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsZW5kYXJEYXlzXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50RGF0ZVwiKTtcclxuICBjb25zdCBkYXRlU3RyaW5nID0gZmlyc3REYXRlT2ZNb250aC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1ldVwiLCB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuICBjb25zdCBsYXN0RGF0ZU9mTGFzdE1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcclxuICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXlzSW5Nb250aCkuZ2V0RGF5KCk7XHJcbiAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrRGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoXCIsXCIpWzBdKTtcclxuICAvLyBwcmV2aW91cyBtb250aFxyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSBwYWRkaW5nRGF5czsgaSA+IDA7IC0taSkge1xyXG4gICAgY29uc3QgcHJldmlvdXNNb250aERheSA9IGxhc3REYXRlT2ZMYXN0TW9udGggLSBpICsgMTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgcHJldmlvdXNNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBwcmV2aW91c01vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0luYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNvbnN0IGJhY2t3YXJkID0gdHJ1ZTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHtcclxuICAgICAgZGF5OiBsYXN0RGF0ZU9mTGFzdE1vbnRoIC0gaSArIDEsXHJcbiAgICAgIGlzV2Vla2VuZCxcclxuICAgICAgaXNJbmFjdGl2ZSxcclxuICAgICAgYmFja3dhcmQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9jdXJyZW50IG1vbnRoXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xyXG4gICAgY29uc3QgaXNDdXJyZW50RGF5ID1cclxuICAgICAgaSA9PT0gY3VycmVudERheSAmJiBtb250aCA9PT0gY3VycmVudE1vbnRoICYmIHllYXIgPT09IGN1cnJlbnRZZWFyO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZERheSA9XHJcbiAgICAgIHNlbGVjdGVkRGF0ZSAmJlxyXG4gICAgICBpID09PSBzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgIG1vbnRoID09PSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICB5ZWFyID09PSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoLCBpIC0gMSkuZ2V0RGF5KCldID09PSBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGgsIGkgLSAxKS5nZXREYXkoKV0gPT09IFwiU3VuZGF5XCI7XHJcbiAgICBjb25zdCBpc0RheSA9IHRydWU7XHJcbiAgICBjb25zdCBpc1Bhc3QgPSBpIDwgY3VycmVudERheTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHtcclxuICAgICAgZGF5OiBpLFxyXG4gICAgICBpc0N1cnJlbnREYXksXHJcbiAgICAgIGlzU2VsZWN0ZWREYXksXHJcbiAgICAgIGlzV2Vla2VuZCxcclxuICAgICAgaXNEYXksXHJcbiAgICAgIGlzUGFzdCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL25leHQgbW9udGhcclxuICBmb3IgKGxldCBpID0gbGFzdERheU9mTW9udGg7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IG5leHRNb250aERheSA9IGkgLSBsYXN0RGF5T2ZNb250aCArIDE7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIG5leHRNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlNhdHVyZGF5XCIgfHxcclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBuZXh0TW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTdW5kYXlcIjtcclxuICAgIGNvbnN0IGlzSW5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29uc3QgZm9yd2FyZCA9IHRydWU7XHJcbiAgICBjYWxlbmRhckRheXMucHVzaCh7IGRheTogbmV4dE1vbnRoRGF5LCBpc1dlZWtlbmQsIGlzSW5hY3RpdmUsIGZvcndhcmQgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYWxlbmRhckRheUhUTUwgPSBjYWxlbmRhckRheXNcclxuICAgIC5tYXAoKGRheUluZm8pID0+IHtcclxuICAgICAgbGV0IGNsYXNzTmFtZXMgPSBcImNhbGVuZGFyRGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzQ3VycmVudERheSkgY2xhc3NOYW1lcyArPSBcIiBjdXJyZW50RGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzU2VsZWN0ZWREYXkpIGNsYXNzTmFtZXMgKz0gXCIgc2VsZWN0ZWRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNXZWVrZW5kKSBjbGFzc05hbWVzICs9IFwiIHdlZWtFbmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNJbmFjdGl2ZSkgY2xhc3NOYW1lcyArPSBcIiBpbmFjdGl2ZVwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5iYWNrd2FyZCkgY2xhc3NOYW1lcyArPSBcIiBiYWNrd2FyZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5mb3J3YXJkKSBjbGFzc05hbWVzICs9IFwiIGZvcndhcmRcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNEYXkpIGNsYXNzTmFtZXMgKz0gXCIgZGF5XCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmlzUGFzdCkgY2xhc3NOYW1lcyArPSBcIiBpbmFjdGl2ZVwiO1xyXG5cclxuICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCIke2NsYXNzTmFtZXN9XCI+JHtkYXlJbmZvLmRheX08L2xpPmA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oXCJcIik7XHJcblxyXG4gIGNhbGVuZGFyQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjYWxlbmRhckRheUhUTUwpO1xyXG4gIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XHJcbiAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQ2FsZW5kYXJEYXlzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICBmaWx0ZXJlZEJ5VHlwZS5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgb2JqZWN0LmR1ZURhdGUgJiZcclxuICAgICAgb2JqZWN0LmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuZHVlRGF0ZS5nZXRNb250aCgpID09PSBtb250aFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgICBjb25zdCBkdWVTdHJpbmcgPSBTdHJpbmcob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmVuZGVyZWREYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGlmIChkdWVTdHJpbmcpIHtcclxuICAgICAgICAgIG1hcmsoZGF5LCBkdWVTdHJpbmcsIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJlxyXG4gICAgICBvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGhcclxuICAgICkge1xyXG4gICAgICBjb25zdCByZW5kZXJlZERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRheVwiKTtcclxuICAgICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IFN0cmluZyhvYmplY3QuY29tcGxldGlvbkRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgcmVuZGVyZWREYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICAgIGlmIChjb21wbGV0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICBtYXJrKGRheSwgY29tcGxldGlvblN0cmluZywgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbWFyayA9IChkYXksIHN0cmluZywgb2JqZWN0KSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBTdHJpbmcoc2VsZWN0ZWREYXRlLmdldERhdGUoKSk7XHJcbiAgY29uc3QgZGF5U3RpbmcgPSBTdHJpbmcoZGF5LmlubmVyVGV4dCk7XHJcbiAgaWYgKGRheVN0aW5nID09PSBzdHJpbmcpIHtcclxuICAgIGlmIChcclxuICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKSAmJlxyXG4gICAgICBkYXlTdGluZyA9PT0gc2VsZWN0ZWRTdHJpbmdcclxuICAgICkge1xyXG4gICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShgZXZlbnQke29iamVjdC5wcmlvcml0eX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRheS5jbGFzc0xpc3QuYWRkKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBmb3J3YXJkQmFja3dhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFycm93XCIpO1xyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FsZW5kYXJEYXlcIik7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3RXZlbnRcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxuICBmb3J3YXJkQmFja3dhcmQuZm9yRWFjaCgoYXJyb3cpID0+IHtcclxuICAgIGFycm93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb250aENoYW5nZXJFdmVudCk7XHJcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9udGhDaGFuZ2VyRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGF0ZVNlbGVjdGlvbkV2ZW50KTtcclxuICAgIGRheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGF0ZVNlbGVjdGlvbkV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG1vbnRoQ2hhbmdlckV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZvcndhcmRcIikgfHxcclxuICAgIGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJiYWNrd2FyZFwiKVxyXG4gICkge1xyXG4gICAgY2xlYXJDYWxlbmRhcigpO1xyXG4gICAgY2hhbmdlTW9udGgoZXYpO1xyXG4gICAgcmVuZGVyQ2FsZW5kYXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkYXRlU2VsZWN0aW9uRXZlbnQgPSAoZXYpID0+IHtcclxuICBzZWxlY3REYXRlKGV2KTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjYWxlbmRhckRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICBkYXkucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VNb250aCA9IChldikgPT4ge1xyXG4gIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSkge1xyXG4gICAgbW9udGggKz0gMTtcclxuICAgIGlmIChtb250aCA+IDExKSB7XHJcbiAgICAgIG1vbnRoID0gMDtcclxuICAgICAgeWVhciArPSAxO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpKSB7XHJcbiAgICBtb250aCAtPSAxO1xyXG4gICAgaWYgKG1vbnRoIDwgMCkge1xyXG4gICAgICBtb250aCA9IDExO1xyXG4gICAgICB5ZWFyIC09IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0RGF0ZSA9IChldikgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FsZW5kYXJEYXlcIik7XHJcbiAgY29uc3Qgc2VsZWN0ZWREYXRlRWxlbWVudCA9IGV2LnRhcmdldDtcclxuICBsZXQgc2VsZWN0ZWREYXkgPSBldi50YXJnZXQuaW5uZXJUZXh0O1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgfSk7XHJcbiAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmFjdGl2ZVwiKSkge1xyXG4gICAgbW9udGhDaGFuZ2VyRXZlbnQoZXYpO1xyXG4gICAgY29uc3QgbmV3UmVuZGVyZWRNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWREYXRlRWxlbWVudCA9IEFycmF5LmZyb20obmV3UmVuZGVyZWRNb250aCkuZmluZChcclxuICAgICAgKGRheSkgPT4gZGF5LmlubmVyVGV4dCA9PT0gZXYudGFyZ2V0LmlubmVyVGV4dFxyXG4gICAgKTtcclxuICAgIG5ld1NlbGVjdGVkRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxlY3RlZERhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICB9XHJcbiAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIHNlbGVjdGVkRGF5KTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IGdldE9iamVjdCB9IGZyb20gXCIuL2dldE9iamVjdFwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBtYXJrQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vZm9ybWF0VGltZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdldFBvcFVwID0gKG9iaklkKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGxldCBvYmplY3RJZCA9IG9iaklkO1xyXG5cclxuICBpZiAob2JqSWQgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcclxuICAgIG9iamVjdElkID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBsZXQgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGltZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiB2YWx1ZT1cIiR7Zm9ybWF0VGltZShcclxuICAgICAgY3VycmVudFRpbWVcclxuICAgICl9XCI+XHJcbiAgICA8L2Rpdj5gO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBvYmplY3RJZCA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICBnZXRUeXBlKCkgIT09IFwiZXZlbnRzXCIgJiZcclxuICAgIGdldFR5cGUoKSAhPT0gXCJkYWlseVwiXHJcbiAgKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgIDwvZGl2PmA7XHJcbiAgfSBlbHNlIGlmIChvYmplY3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIG5vdGVzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJhZGRUYXNrXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgY2hlY2tlZCAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAvPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIk5vdGUgZ29lcyBoZXJlXCI+PC90ZXh0YXJlYT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7b2JqZWN0SWR9XCI+QWRkPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgfVxyXG4gIGxpc3RlbmVycyhvYmplY3RJZCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAob2JqSWQpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2lkXj1cImFkZFByb2pCdG5cIl1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcENvbnRhaW5lclwiKTtcclxuICBpZiAocHJpb3JpdHlCdG4pIHtcclxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQcmlvcml0eSk7XHJcbiAgfVxyXG4gIGlmIChuZXdQcm9qKSB7XHJcbiAgICBuZXdQcm9qLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgIGlmIChvYmpJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBldklkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgxMCkpO1xyXG4gICAgICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgICAgICBnZXRPYmplY3QoZXZJZCk7XHJcbiAgICAgICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmpJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgICAgIGdldE9iamVjdCgpO1xyXG4gICAgICAgICAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgICAgICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJQb3BVcCk7XHJcbiAgY292ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3BVcENvbnRhaW5lclwiKSkge1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBub3RlcyA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBub3RlID0gYDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9XCJUaXRsZSBnb2VzIGhlcmVcIiAvPlxyXG4gICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibm90ZURhdGVcIj48L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgbG93XCIgZGF0YS1wcmlvcml0eT1cImxvd1wiIGlkPVwibm90ZVByaW9yaXR5XCI+TTwvZGl2PlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiTm90ZSBnb2VzIGhlcmVcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuXCI+QWRkPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBub3RlKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck5vdGVzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lciBub3Rlc0NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZXdOb3RlXCIgaWQ9XCJuZXdOb3RlXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld05vdGVfX3BcIj5BZGQgTm90ZTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYmlnR3JpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbEdyaWRcIiBpZD1cIm9uZVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbEdyaWRcIiBpZD1cInR3b1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbEdyaWRcIiBpZD1cInRocmVlXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwiZm91clwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld05vdGVcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvalRhc2sgfSBmcm9tIFwiLi9yZW5kZXJQcm9qVGFza1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0Q29tcGxldGlvbiB9IGZyb20gXCIuL2dldENvbXBsZXRpb25cIjtcclxuaW1wb3J0IHsgc29ydEFycmF5IH0gZnJvbSBcIi4vc29ydEFycmF5XCI7XHJcbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tIFwiLi9yZW1vdmVJdGVtXCI7XHJcbmltcG9ydCB7IHJlbmRlckVkaXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckVkaXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwiLi9maWx0ZXJCeVR5cGVcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUb2RheSB9IGZyb20gXCIuL2ZpbHRlckJ5VG9kYXlcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHN3aXRjaFByaW9yaXR5IH0gZnJvbSBcIi4vc3dpdGNoUHJpb3JpdHlcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlEYXRlIH0gZnJvbSBcIi4vZmlsdGVyQnlEYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGZpbHRlclJlbW92ZWQgfSBmcm9tIFwiLi9maWx0ZXJSZW1vdmVkXCI7XHJcbmltcG9ydCB7IGZpbHRlck5vdGVHcmlkcyB9IGZyb20gXCIuL2ZpbHRlck5vdGVHcmlkc1wiO1xyXG5pbXBvcnQgeyBlZGl0Tm90ZSB9IGZyb20gXCIuL2VkaXROb3RlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyT2JqZWN0cyA9ICgpID0+IHtcclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sR3JpZFwiKTtcclxuICBjb25zdCBmaWx0ZXJlZEdyaWRzID0gZmlsdGVyTm90ZUdyaWRzKGdyaWRzKTtcclxuICBjb25zdCBhcnJheU9mVHlwZSA9IGZpbHRlckJ5VHlwZShwcm9qZWN0cyk7XHJcbiAgbGV0IGRhaWx5QXJyYXkgPSBzb3J0QXJyYXkoYXJyYXlPZlR5cGUpO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBcnJheSA9IGZpbHRlckJ5VG9kYXkocHJvamVjdHMpO1xyXG4gICAgY29uc3QgZmlsdGVyT3V0UmVtb3ZlZCA9IGZpbHRlclJlbW92ZWQoZGFpbHlBcnJheSk7XHJcbiAgICBjb25zdCBzb3J0ZWQgPSBzb3J0QXJyYXkoZmlsdGVyT3V0UmVtb3ZlZCk7XHJcbiAgICBzb3J0ZWQuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgICByZW5kZXJPYmplY3QocHJvaik7XHJcbiAgICAgIHJlbmRlclByb2pUYXNrKHByb2opO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwibm90ZXNcIikge1xyXG4gICAgbGV0IGogPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYWlseUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChqID49IGZpbHRlcmVkR3JpZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgaiA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyTm90ZXMoZGFpbHlBcnJheVtpXSwgZmlsdGVyZWRHcmlkc1tqXSk7XHJcbiAgICAgIGorKztcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgY29uc3QgZmlsdGVyZWRCeVR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRCeURhdGUgPSBmaWx0ZXJCeURhdGUoZmlsdGVyZWRCeVR5cGUpO1xyXG4gICAgaWYgKGZpbHRlcmVkQnlEYXRlKSB7XHJcbiAgICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJlZEJ5RGF0ZTtcclxuICAgICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGRhaWx5QXJyYXkpO1xyXG4gICAgICBzb3J0ZWQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXZlbnRzKG9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGFpbHlBcnJheSA9IGZpbHRlckJ5VG9kYXkoZmlsdGVyZWRCeVR5cGUpO1xyXG4gICAgICBjb25zdCBzb3J0ZWQgPSBzb3J0QXJyYXkoZGFpbHlBcnJheSk7XHJcbiAgICAgIHNvcnRlZC5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgICByZW5kZXJFdmVudHMob2JqZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGZpbHRlck91dFJlbW92ZWQgPSBmaWx0ZXJSZW1vdmVkKGRhaWx5QXJyYXkpO1xyXG4gICAgZmlsdGVyT3V0UmVtb3ZlZC5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICAgIHJlbmRlck9iamVjdChwcm9qKTtcclxuICAgICAgcmVuZGVyUHJvalRhc2socHJvaik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpc3RlbmVycygpO1xyXG4gIGdldENvbXBsZXRpb24oKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrKGNvbXBsZXRlKSB7XHJcbiAgaWYgKGNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gJ2NoZWNrZWQ9XCJjaGVja2VkXCInO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlck9iamVjdCA9IChwcm9qKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Q29udGFpbmVyXCIpO1xyXG5cclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke3Byb2ouaWR9XCI+RDwvcD5gO1xyXG4gIGxldCBhZGRUYXNrID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJuZXdUYXNrXCIgaWQ9XCJudCR7cHJvai5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJuZXdUYXNrX19wXCI+KzwvcD5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBpZiAoXHJcbiAgICBnZXRUeXBlKCkgPT09IFwiZGFpbHlcIiAmJlxyXG4gICAgKHByb2oudHlwZSA9PT0gXCJwcm9qXCIgfHwgcHJvai50eXBlID09PSBcImV2ZW50c1wiKVxyXG4gICkge1xyXG4gICAgYWRkVGFzayA9IGA8ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+YDtcclxuICAgIGRlbGV0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH1cclxuICBsZXQgY2hlY2tFbGVtZW50ID0gYCR7YWRkVGFza31gO1xyXG4gIGlmIChwcm9qLnR5cGUgPT09IFwiZGFpbHlcIiAmJiBwcm9qLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tFbGVtZW50ID0gYCR7YWRkVGFza31cclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbXBsZXRpb25cIiBuYW1lPVwiY29tcGxldGlvblwiIGlkPVwiJHtcImNcIn0ke1xyXG4gICAgICBwcm9qLmlkXHJcbiAgICB9XCIgICR7Y2hlY2socHJvai5jb21wbGV0ZSl9Lz5gO1xyXG4gIH0gZWxzZSBpZiAocHJvai50eXBlID09PSBcImRhaWx5XCIgJiYgcHJvai50YXNrcy5sZW5ndGggIT09IDApIHtcclxuICAgIGNoZWNrRWxlbWVudCA9IGAke2FkZFRhc2t9XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlZER1ZURhdGUgPVxyXG4gICAgcHJvai5kdWVEYXRlICYmICFpc05hTihwcm9qLmR1ZURhdGUpID8gZm9ybWF0RGF0ZShwcm9qLmR1ZURhdGUpIDogXCJcIjtcclxuICBjb25zdCBkdWVEYXRlID0gYDxwIGNsYXNzPVwib2JqRGF0ZVwiPkR1ZToke2Zvcm1hdHRlZER1ZURhdGV9PC9wPmA7XHJcbiAgY29uc3QgZHVlVGltZSA9IGA8cCBjbGFzcz1cIm9ialRpbWVcIj5Pbjoke2Zvcm1hdFRpbWUocHJvai5kdWVEYXRlKX08L3A+YDtcclxuICBjb25zdCBPYmplY3QgPSBgXHJcbjxkaXYgY2xhc3M9XCJvYmplY3RXcmFwcGVyIHdyYXBwZXJcIiBpZD1cInB3JHtwcm9qLmlkfVwiPlxyXG48ZGl2IGNsYXNzPVwib2JqZWN0ICR7cHJvai5wcmlvcml0eX0gJHtwcm9qLmNvbXBsZXRlfSAke1xyXG4gICAgZ2V0VHlwZSgpID09PSBcImRhaWx5XCIgPyBwcm9qLnR5cGUgOiBcIlwiXHJcbiAgfVwiIGlkPVwiJHtcInBwXCJ9JHtwcm9qLmlkfVwiPlxyXG4ke2NoZWNrRWxlbWVudH1cclxuICA8cCBjbGFzcz1cIm9ialRpdGxlXCI+JHtwcm9qLnRpdGxlfTwvcD5cclxuICAke1xyXG4gICAgcHJvai50eXBlID09PSBcImRhaWx5XCJcclxuICAgICAgPyBcIlwiXHJcbiAgICAgIDogcHJvai50eXBlID09PSBcInByb2pcIiAmJiBnZXRUeXBlKCkgIT09IFwiZGFpbHlcIlxyXG4gICAgICA/IGR1ZURhdGVcclxuICAgICAgOiBwcm9qLnR5cGUgPT09IFwiZXZlbnRzXCJcclxuICAgICAgPyBkdWVUaW1lXHJcbiAgICAgIDogXCJcIlxyXG4gIH1cclxuICA8cCBjbGFzcz1cIm9iak5vdGVcIj4ke3Byb2oubm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgJHtkZWxldGVFbGVtZW50fVxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInRhc2tXcmFwcGVyXCIgaWQ9XCJ0dyR7cHJvai5pZH1cIj5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBPYmplY3QpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyTm90ZXMgPSAob2JqZWN0LCB0YXJnZXRHcmlkKSA9PiB7XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUob2JqZWN0LmFkZGVkRGF0ZSk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gdGFyZ2V0R3JpZDtcclxuICBjb25zdCBOb3RlID0gYDxkaXYgY2xhc3M9XCJub3RlV3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7b2JqZWN0LmlkfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90ZU9iamVjdFwiIGlkPVwibm8ke29iamVjdC5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlVGl0bGUgZWRpdGFibGVcIiBpZD1cIm50JHtvYmplY3QuaWR9XCIgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPiR7b2JqZWN0LnRpdGxlfTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibmQke29iamVjdC5pZH1cIj4ke2Zvcm1hdHRlZERhdGV9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgJHtvYmplY3QucHJpb3JpdHl9XCIgaWQ9XCJubSR7b2JqZWN0LmlkfVwiPk1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkcCR7b2JqZWN0LmlkfVwiPkQ8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwibm90ZUJvZHkgZWRpdGFibGVcIiBpZD1cIm5iJHtvYmplY3QuaWR9XCIgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPiR7b2JqZWN0Lm5vdGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgTm90ZSk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJFdmVudHMgPSAob2JqZWN0KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudE5vdGVXcmFwcGVyXCIpO1xyXG4gIGNvbnN0IGRhdGVFbGVtZW50ID0gb2JqZWN0LnR5cGUgPT09IFwicHJvalwiID8gXCJcIiA6IGZvcm1hdFRpbWUob2JqZWN0LmR1ZURhdGUpO1xyXG4gIGNvbnN0IGV2ZW50RWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwiRXZlbnRXcmFwcGVyIHdyYXBwZXJcIiBpZD1cInB3JHtvYmplY3QuaWR9XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm9iamVjdCAke29iamVjdC5wcmlvcml0eX0gJHtvYmplY3QuY29tcGxldGV9XCIgaWQ9XCJlbyR7XHJcbiAgICBvYmplY3QuaWRcclxuICB9IFwiPlxyXG4gIDxwIGNsYXNzPVwiZXZlbnREYXRlXCIgaWQ9XCJlZCR7b2JqZWN0LmlkfVwiPiR7ZGF0ZUVsZW1lbnR9PC9wPlxyXG4gIDxwIGNsYXNzPVwiZXZlbnRUaXRsZVwiIGlkPVwiZXQke29iamVjdC5pZH1cIj4ke29iamVjdC50aXRsZX08L3A+XHJcbiAgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PlxyXG4gIDxwIGNsYXNzPVwiZXZlbnROb3RlXCIgaWQ9XCJlYiR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0Lm5vdGUgPyBcIk5cIiA6IFwiXCJ9PC9wPlxyXG4gIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkcCR7b2JqZWN0LmlkfVwiPkQ8L3A+XHJcbjwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZXZlbnRFbGVtZW50KTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmV3VGFza1wiKTtcclxuICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XHJcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9iamVjdFwiKTtcclxuICBjb25zdCB0YXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVGFza1wiKTtcclxuICBjb25zdCBtYXJrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZU1hcmtcIik7XHJcbiAgY29uc3QgZWRpdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRhYmxlXCIpO1xyXG4gIGVkaXRhYmxlLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaW5wdXRFdmVudCk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaW5wdXRFdmVudCk7XHJcbiAgfSk7XHJcbiAgbmV3VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0V2ZW50KTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tFdmVudCk7XHJcbiAgfSk7XHJcbiAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRXZlbnQpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVFdmVudCk7XHJcbiAgfSk7XHJcbiAgcHJvamVjdEJ0bnMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RFdmVudCk7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdEV2ZW50KTtcclxuICB9KTtcclxuICB0YXNrQnRucy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza0V2ZW50KTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrRXZlbnQpO1xyXG4gIH0pO1xyXG4gIG1hcmtOb3RlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXJrTm90ZUV2ZW50KTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFya05vdGVFdmVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbnB1dEV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZWRpdE5vdGUoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFByb2plY3RFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdFwiKTtcclxuICBpZiAoXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZU1hcmtcIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3VGFza1wiKSAmJlxyXG4gICAgIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXdUYXNrX19wXCIpXHJcbiAgKSB7XHJcbiAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFza0V2ZW50ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIuVGFza1wiKTtcclxuICBpZiAoIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0aW9uXCIpKSB7XHJcbiAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXJrTm90ZUV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgc3dpdGNoUHJpb3JpdHkoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlRXZlbnQgPSAoZXYpID0+IHtcclxuICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgfVxyXG4gIHJlbW92ZUl0ZW0oZXYpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRhc2tFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm5ld1Rhc2tcIik7XHJcbiAgcmVuZGVyR2V0UG9wVXAodGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgcHJvamVjdHNDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdQcm9qXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBQcm9qZWN0PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2pcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalRhc2sgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtvYmouaWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IG9iai5pZCk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xyXG5cclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgICBkYXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID09PSBudWxsID8gXCJcIiA6IGZvcm1hdHRlZERhdGVcclxuICAgICAgfTwvcD5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0ZUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIgJiYgcHJvamVjdC50eXBlID09PSBcInByb2pcIikge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImR0JHt0YXNrLmlkfVwiPkQ8L3A+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJUYXNrICR7dGFzay5wcmlvcml0eX0gJHt0YXNrLmNvbXBsZXRlfVwiIGlkPVwicHQke3Rhc2suaWR9XCI+XHJcbiAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjb21wbGV0aW9uXCIgbmFtZT1cImNvbXBsZXRpb25cIiBpZD1cImMke1xyXG4gICAgICAgICB0YXNrLmlkXHJcbiAgICAgICB9XCIgICR7Y2hlY2sodGFzay5jb21wbGV0ZSl9Lz5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3A+XHJcbiAgICAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFza05vdGVcIj4ke3Rhc2subm90ZSA9PT0gXCJcIiA/IFwiXCIgOiBcIk5cIn08L3A+XHJcbiAgICAgICAgJHtkZWxldGVFbGVtZW50fVxyXG4gICAgICA8L2Rpdj5cclxuYDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbmV3VGFzayk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNvcnRBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIGNvbnN0IHByaW9yaXR5T3JkZXIgPSB7XHJcbiAgICBsb3c6IDMsXHJcbiAgICBtZWQ6IDIsXHJcbiAgICBoaWdoOiAxLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNvcnRlZEJ5UHJpb3JpdHkgPSBzb3J0VGFza3MoYXJyYXksIHByaW9yaXR5T3JkZXIpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IHByaW9yaXR5Q29tcCA9IHByaW9yaXR5T3JkZXJbYS5wcmlvcml0eV0gLSBwcmlvcml0eU9yZGVyW2IucHJpb3JpdHldO1xyXG4gICAgaWYgKHByaW9yaXR5Q29tcCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gcHJpb3JpdHlDb21wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc29ydGVkQnlQcmlvcml0eTtcclxufTtcclxuXHJcbmNvbnN0IHNvcnRUYXNrcyA9IChhcnJheSwgb3JkZXIpID0+IHtcclxuICByZXR1cm4gYXJyYXkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgLi4uaXRlbSxcclxuICAgIHRhc2tzOiBpdGVtLnRhc2tzLnNvcnQoKGEsIGIpID0+IG9yZGVyW2EucHJpb3JpdHldIC0gb3JkZXJbYi5wcmlvcml0eV0pLFxyXG4gIH0pKTtcclxufTtcclxuIiwiaW1wb3J0IHsgZWRpdFByaW9yaXR5IH0gZnJvbSBcIi4vZWRpdFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzd2l0Y2hQcmlvcml0eSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHByaW9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2LnRhcmdldC5pZH1gKTtcclxuICBpZiAocHJpb3JFbGVtZW50KSB7XHJcbiAgICBpZiAocHJpb3JFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImxvd1wiKSkge1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvd1wiKTtcclxuICAgICAgcHJpb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoXCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBcImhpZ2hcIik7XHJcbiAgICAgIGlmIChldi50YXJnZXQuaWQuc3RhcnRzV2l0aChcIm5tXCIpKSB7XHJcbiAgICAgICAgZWRpdFByaW9yaXR5KGV2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJpb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoXCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcclxuICAgICAgcHJpb3JFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgXCJsb3dcIik7XHJcbiAgICAgIGlmIChldi50YXJnZXQuaWQuc3RhcnRzV2l0aChcIm5tXCIpKSB7XHJcbiAgICAgICAgZWRpdFByaW9yaXR5KGV2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHN0b3JlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgYmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkSWRcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkSWQpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJpblwiLCBKU09OLnN0cmluZ2lmeShiaW4pKTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qUGFnZSB9IGZyb20gXCIuL3JlbmRlclByb2pQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckV2ZW50c1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckRhaWx5UGFnZSB9IGZyb20gXCIuL3JlbmRlckRhaWx5UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tIFwiLi9pbml0aWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyTm90ZXNQYWdlIH0gZnJvbSBcIi4vcmVuZGVyTm90ZXNQYWdlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVzY2FwZSB9IGZyb20gXCIuL2hhbmRsZUVzY2FwZVwiO1xyXG5pbXBvcnQgeyBoYW5kbGVFbnRlciB9IGZyb20gXCIuL2hhbmRsZUVudGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQgfSBmcm9tIFwiLi9yZW1vdmVDb21wbGV0ZWRcIjtcclxuXHJcbmluaXRpYWxpemF0aW9uKHJlbmRlckhlYWRlciwgcmVuZGVyRGFpbHlQYWdlLCByZW5kZXJGb290ZXIpO1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlcIik7XHJcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm5hdkxpXCIpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQYWdlKFxyXG4gICAgICB0YXJnZXQuaWQsXHJcbiAgICAgIHJlbmRlclByb2pQYWdlLFxyXG4gICAgICByZW5kZXJEYWlseVBhZ2UsXHJcbiAgICAgIHJlbmRlckV2ZW50c1BhZ2UsXHJcbiAgICAgIHJlbmRlck5vdGVzUGFnZVxyXG4gICAgKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5zZXRJbnRlcnZhbChjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkLCAxMDAwICogNjApO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFbnRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==