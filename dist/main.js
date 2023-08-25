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
  text-align: center;
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
  position: relative;
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

/* DAILY */

.object.events {
  display: grid;
  grid-template-columns: 2.5rem 3fr 4rem 1rem 1rem;
}

/* NOTES */

.notesContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
}
.newNote {
  height: 2rem;
  text-align: center;
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
.buttonWrapper {
  display: grid;
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-column: 1/-1;
  justify-self: center;
  gap: 1rem;
}

.binBtn {
  display: grid;
  place-content: center;
  height: 2rem;
  background-color: var(--OBJECT-ALT-C);
  color: var(--OBJECT-C);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
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
  border: none;
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
  border: none;
}
.popUpButton {
  background-color: var(--POPUP-ALT-C);
  color: var(--POPUP-C);
  cursor: pointer;
}
button {
  border: none;
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

/* TOOLTIP */

.toolTip {
  position: absolute;
  width: min-content;
  height: min-content;
  top: 0;
  right: 4rem;
  background-color: var(--POPUP-BG-C);
  padding: 0.5rem;
  z-index: 4;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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X,aAAa;EACb,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,oCAAoC;EACpC,oCAAoC;EACpC,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,qDAAqD;EACrD,uCAAuC;AACzC;AACA;EACE,sCAAsC;EACtC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,qCAAqC;EACrC,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,qCAAqC;EACrC,eAAe;AACjB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,gCAAgC;EAChC,sCAAsC;EACtC,wBAAwB;EACxB,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,sCA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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n  --HEADER-BG-C: black;\r\n  --HEADER-C: aliceblue;\r\n  --OBJECT-BG-C: rgb(185, 102, 2);\r\n  --OBJECT-C: aliceblue;\r\n  --OBJECT-ALT-C: Rebeccapurple;\r\n  --MAIN-BG-C: darkseagreen;\r\n  --MAIN-C: aliceblue;\r\n  --CALENDAR-BG-C: darkorange;\r\n  --CALENDAR-C: black;\r\n  --CALENDAR-ALT-BG-C: aliceblue;\r\n  --CALENDAR-ALT-C: ;\r\n  --CALENDAR-HOVER-BG-C: rgba(0, 0, 0, 0.429);\r\n  --BOX-SHADOW-C: black;\r\n  /* PRIORITY */\r\n  --PRIORITY-LOW: green;\r\n  --PRIORITY-MED: yellow;\r\n  --PRIORITY-HIGH: red;\r\n  /* POPUP */\r\n  --POPUP-BG-C: Rebeccapurple;\r\n  --POPUP-C: aliceblue;\r\n  --POPUP-ALT-C: black;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 11vh 86vh 4vh;\r\n  overflow: hidden;\r\n  background-color: var(--MAIN-BG-C);\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navbar {\r\n  height: 100%;\r\n}\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 0 2rem;\r\n  background-color: var(--HEADER-BG-C);\r\n  gap: 1rem;\r\n}\r\n\r\n.navLi {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n  background-color: transparent;\r\n  color: var(--HEADER-ALT2);\r\n  border: none;\r\n  list-style-type: none;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.navSpan {\r\n  width: max-content;\r\n  user-select: none;\r\n  display: inline-block;\r\n  transition: transform 0.3s ease;\r\n  color: var(--HEADER-C);\r\n}\r\n.navSpan::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -7px;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--HEADER-C);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n}\r\n.navLi:hover .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi:hover .navSpan::before {\r\n  opacity: 1;\r\n}\r\n.navLi:hover {\r\n  background-color: var(--OBJECT-ALT-C);\r\n}\r\n\r\n/* HEADER ACTIVE */\r\n\r\n.navLi.active .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi.active .navSpan::before {\r\n  opacity: 1;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.listContainer {\r\n  padding: 1rem clamp(0.2rem, 2%, 2rem);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: min-content;\r\n  justify-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  width: 100%;\r\n  height: 2rem;\r\n  align-items: center;\r\n  display: grid;\r\n  grid-template-columns: 2.5rem 3fr max-content 1rem 1rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  gap: 0.5rem;\r\n  padding: 0 0.5rem;\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.objDate {\r\n  font-size: 0.7rem;\r\n}\r\n.dailyContainer .object {\r\n  grid-template-columns: 2.5rem 1rem 3fr 1rem 1rem;\r\n}\r\n\r\n.newObject,\r\n.newNote {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  cursor: pointer;\r\n  margin-bottom: 1rem;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n  text-align: center;\r\n}\r\n\r\n.newObject:hover,\r\n.newNote:hover,\r\n.newObject:focus,\r\n.newNote:focus {\r\n  transform: scale(1.05);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.object:hover,\r\n.object:focus,\r\n.object:active,\r\n.noteObject:hover,\r\n.nodeObject:focus,\r\n.noteObject:active {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 3rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  grid-template-columns: 1rem 4fr 1fr 1rem 1rem;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n  position: relative;\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  margin: -0.5rem;\r\n  width: 3rem;\r\n  font-size: 1.7rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n.taskDate {\r\n  display: grid;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.Task:hover,\r\n.Task:focus,\r\n.Task:active {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.objTitle,\r\n.taskTitle,\r\n.eventTitle,\r\n.noteTitle {\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  font-weight: 500;\r\n  padding: 0.2rem;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n.noteTitle {\r\n  cursor: auto;\r\n}\r\n.objNote,\r\n.taskNote,\r\n.eventNote {\r\n  cursor: pointer;\r\n}\r\n.delete {\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n/* PROJ */\r\n\r\n.object.proj {\r\n  grid-template-columns: 2.5rem 3fr 1rem 1rem;\r\n}\r\n\r\n/* DAILY */\r\n\r\n.object.events {\r\n  display: grid;\r\n  grid-template-columns: 2.5rem 3fr 4rem 1rem 1rem;\r\n}\r\n\r\n/* NOTES */\r\n\r\n.notesContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r\n}\r\n.newNote {\r\n  height: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.bigGrid {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  grid-column: 1/-1;\r\n  gap: 0.5rem;\r\n}\r\n.colGrid {\r\n  height: min-content;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n}\r\n\r\n#one {\r\n  display: grid;\r\n}\r\n#two {\r\n  display: none;\r\n}\r\n#three {\r\n  display: none;\r\n}\r\n#four {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 630px) {\r\n  #two {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 940px) {\r\n  #three {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 1258px) {\r\n  #four {\r\n    display: grid;\r\n  }\r\n}\r\n.noteObject {\r\n  height: max-content;\r\n  width: clamp(300px, 100%, 400px);\r\n  padding: 0.5rem;\r\n  overflow-x: auto;\r\n  display: grid;\r\n  grid-template-columns: 2fr 3rem 2rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  row-gap: 0.5rem;\r\n  align-items: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.noteObject > .high {\r\n  background-color: var(--PRIORITY-HIGH);\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteObject > .low {\r\n  background-color: var(--PRIORITY-LOW);\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteDate {\r\n  text-align: center;\r\n  grid-row: 3/4;\r\n  grid-column: 1/-1;\r\n}\r\n.noteMark {\r\n  cursor: pointer;\r\n  height: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n\r\n.noteTitle {\r\n  background-color: var(--OBJECT-ALT-C);\r\n  padding: 0.2rem;\r\n  font-size: 1.2rem;\r\n}\r\n.noteBody {\r\n  max-width: 100%;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1/-1;\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  padding: 0.3rem;\r\n}\r\n\r\n/* EVENTS */\r\n\r\n.eventsContainer {\r\n  height: 80vh;\r\n  width: clamp(300px, 100%, 700px);\r\n  background-color: var(--CALENDAR-BG-C);\r\n  color: var(--CALENDAR-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 8fr;\r\n}\r\n\r\n.dateWrapper {\r\n  height: 7vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  place-items: center;\r\n}\r\n\r\n.calendarWrapper {\r\n  padding: 1rem;\r\n}\r\n.headings {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  font-weight: bold;\r\n  place-items: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  place-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDay {\r\n  position: relative;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n}\r\n.calendarDay::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 25px;\r\n  width: 25px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  border-radius: 5px;\r\n}\r\n.calendarDay:hover::before {\r\n  background: var(--CALENDAR-HOVER-BG-C);\r\n}\r\n.inactive {\r\n  opacity: 0.5;\r\n}\r\n.selected::before {\r\n  border: 2px solid var(--CALENDAR-ALT-BG-C);\r\n}\r\n.eventNoteWrapper {\r\n  height: 42vh;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 2rem);\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  background-color: var(--CALENDAR-ALT-BG-C);\r\n  gap: 0.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.weekEnd {\r\n  color: darkred;\r\n}\r\n.currentDay::before {\r\n  background-color: var(--CALENDAR-ALT-BG-C);\r\n}\r\n.arrow {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.priority {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  margin: 5px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.priority::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.priority:checked::before {\r\n  border: 2px solid var(--POPUP-C);\r\n}\r\n#low::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n#med::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n#high::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n.low {\r\n  outline: 3px solid var(--PRIORITY-LOW);\r\n}\r\n.med {\r\n  outline: 3px solid var(--PRIORITY-MED);\r\n}\r\n.high {\r\n  outline: 3px solid var(--PRIORITY-HIGH);\r\n}\r\n\r\n.eventlow::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n.eventmed::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n.eventhigh::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n/* COMPLETED */\r\n\r\n.true {\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n  color: var(--HEADER-C);\r\n}\r\n\r\n/* BIN */\r\n.buttonWrapper {\r\n  display: grid;\r\n  width: 80%;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  justify-content: center;\r\n  grid-column: 1/-1;\r\n  justify-self: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.binBtn {\r\n  display: grid;\r\n  place-content: center;\r\n  height: 2rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.binBtn:focus,\r\n.binBtn:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.binBox {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  border: 2px solid var(--POPUP-C);\r\n  background-color: var(--POPUP-BG-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 9fr 1fr;\r\n  justify-items: center;\r\n}\r\n.closePopUp {\r\n  width: 100%;\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\n.binInsides {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n  align-content: start;\r\n}\r\n.binWrapper {\r\n  width: 100%;\r\n}\r\n.binWrapper > .object {\r\n  display: grid;\r\n  grid-template-columns: 4fr max-content min-content 2rem;\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  position: absolute;\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.495);\r\n  color: var(--POPUP-C);\r\n  overflow: hidden;\r\n  place-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.popUpfield {\r\n  position: relative;\r\n  height: 80%;\r\n  width: clamp(300px, 90%, 800px);\r\n  display: grid;\r\n  background-color: var(--POPUP-BG-C);\r\n  color: var(--POPUP-C);\r\n  padding: 1rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.dueWrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  place-content: center;\r\n}\r\n\r\n.input {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  padding: 0.5rem;\r\n  border: none;\r\n}\r\n.input::-webkit-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\n.input::-moz-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\ntextarea {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  resize: none;\r\n  padding: 0.5rem;\r\n  border: none;\r\n}\r\n.popUpButton {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\nbutton {\r\n  border: none;\r\n}\r\n\r\n/* CHECKBOX */\r\n\r\ninput[type=\"checkbox\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  margin: 0;\r\n  font: inherit;\r\n  color: currentColor;\r\n  width: 1.15em;\r\n  height: 1.15em;\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n  content: \"\";\r\n  width: 0.65em;\r\n  height: 0.65em;\r\n  transform: scale(0);\r\n  transition: 120ms transform ease-in-out;\r\n  box-shadow: inset 1em 1em var(--POPUP-ALT-C);\r\n  background-color: CanvasText;\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n  transform: scale(1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus {\r\n  outline: max(2px, 0.15em) solid currentColor;\r\n  outline-offset: max(2px, 0.15em);\r\n}\r\n\r\n/* TOOLTIP */\r\n\r\n.toolTip {\r\n  position: absolute;\r\n  width: min-content;\r\n  height: min-content;\r\n  top: 0;\r\n  right: 4rem;\r\n  background-color: var(--POPUP-BG-C);\r\n  padding: 0.5rem;\r\n  z-index: 4;\r\n}\r\n"],"sourceRoot":""}]);
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



const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#daily");
  button.classList.add("active");
  piece2();
  piece3();
  (0,_isLocalStorageAvailable__WEBPACK_IMPORTED_MODULE_0__.isLocalStorageAvailable)();
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

/***/ "./src/noteTooltip.js":
/*!****************************!*\
  !*** ./src/noteTooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noteTooltip: () => (/* binding */ noteTooltip),
/* harmony export */   removeTooltip: () => (/* binding */ removeTooltip)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const noteTooltip = (ev) => {
  const id = Number(ev.target.id.slice(2));
  const object = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.find((obj) => obj.id === id);
  let noteData = "";
  if (!object) {
    const objWithTask = findProj(id);
    const task = objWithTask.tasks.find((task) => task.id === id);
    noteData = task.note;
  } else {
    noteData = object.note;
  }
  const toolTipBody = `
  <div class="toolTip">
    <p class="toolTip__p">${noteData}</p>
  </div>
  `;
  const container = ev.target.parentElement;
  container.insertAdjacentHTML("beforeend", toolTipBody);
};

const removeTooltip = () => {
  const toolTip = document.querySelectorAll(".toolTip");
  toolTip.forEach((elem) => elem.remove());
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
  const container = document.querySelector(".buttonWrapper");
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
/* harmony import */ var _renderBin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBin */ "./src/renderBin.js");




const renderDailyPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer dailyContainer">
  <div class="buttonWrapper">
  <div class="newObject" id="newDailyTask">
    <p class="newObject__p">Add Daily</p>
  </div>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderBin__WEBPACK_IMPORTED_MODULE_2__.renderBin)();
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
/* harmony import */ var _renderBin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderBin */ "./src/renderBin.js");






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
    <div class="buttonWrapper">
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
  (0,_renderBin__WEBPACK_IMPORTED_MODULE_4__.renderBin)();
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
/* harmony import */ var _renderBin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBin */ "./src/renderBin.js");




const renderNotesPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer notesContainer">
  <div class="buttonWrapper">
  <div class="newNote" id="newNote">
    <p class="newNote__p">Add Note</p>
  </div>
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
  (0,_renderBin__WEBPACK_IMPORTED_MODULE_2__.renderBin)();
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
/* harmony import */ var _noteTooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./noteTooltip */ "./src/noteTooltip.js");





















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
  }" id="pp${proj.id}">
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
  <p class="objNote" id="on${proj.id}">${proj.note === "" ? "" : "N"}</p>
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
  <p class="eventNote" id="en${object.id}">${object.note ? "N" : ""}</p>
  <p class="delete" id="dp${object.id}">D</p>
</div>
</div>`;
  container.insertAdjacentHTML("beforeend", eventElement);
};

const listeners = () => {
  const noteIndicator = document.querySelectorAll(
    ".taskNote, .objNote, .eventNote"
  );
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
  noteIndicator.forEach((indicator) => {
    indicator.removeEventListener("mouseenter", _noteTooltip__WEBPACK_IMPORTED_MODULE_19__.noteTooltip);
    indicator.removeEventListener("mouseleave", _noteTooltip__WEBPACK_IMPORTED_MODULE_19__.removeTooltip);
    indicator.addEventListener("mouseenter", _noteTooltip__WEBPACK_IMPORTED_MODULE_19__.noteTooltip);
    indicator.addEventListener("mouseleave", _noteTooltip__WEBPACK_IMPORTED_MODULE_19__.removeTooltip);
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
/* harmony import */ var _renderBin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBin */ "./src/renderBin.js");




const renderProjPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer projectsContainer">
  <div class="buttonWrapper">
  <div class="newObject" id="newProj">
    <p class="newObject__p">Add Project</p>
  </div>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  (0,_renderObjects__WEBPACK_IMPORTED_MODULE_0__.renderObjects)();
  (0,_renderBin__WEBPACK_IMPORTED_MODULE_2__.renderBin)();
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
        <p class="taskNote" id="tn${task.id}">${task.note === "" ? "" : "N"}</p>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFB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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDa0I7QUFDVTtBQUNJO0FBQ0Y7QUFDWjtBQUNVO0FBQ1Y7QUFDRTtBQUNVO0FBQ047QUFDRjtBQUN3QjtBQUNwRTtBQUNBLCtEQUFjLENBQUMsaURBQVksRUFBRSw2REFBZSxFQUFFLGlEQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVTtBQUNkO0FBQ0EsTUFBTSwyREFBYztBQUNwQixNQUFNLDZEQUFlO0FBQ3JCLE1BQU0sK0RBQWdCO0FBQ3RCLE1BQU0sNkRBQWU7QUFDckI7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsWUFBWSw4RUFBK0I7QUFDM0MscUNBQXFDLHdEQUFZO0FBQ2pELHFDQUFxQyxzREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJSZW5kZXJlZFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXROb3RlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeURhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUb2RheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeVR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyTm90ZUdyaWRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlclJlbW92ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm1hdERhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9ybWF0VGltZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mcm9tTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldENvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0T2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldFR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGFuZGxlRW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGFuZGxlRXNjYXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pc0xvY2FsU3RvcmFnZUF2YWlsYWJsZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ub3RlVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYXJzZUlzb0RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVtb3ZlQ29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyQmluLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckRhaWx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFZGl0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJHZXRQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJOb3Rlc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zd2l0Y2hQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC8qIFZBUklBQkxFUyAqL1xyXG4gIC0tSEVBREVSLUJHLUM6IGJsYWNrO1xyXG4gIC0tSEVBREVSLUM6IGFsaWNlYmx1ZTtcclxuICAtLU9CSkVDVC1CRy1DOiByZ2IoMTg1LCAxMDIsIDIpO1xyXG4gIC0tT0JKRUNULUM6IGFsaWNlYmx1ZTtcclxuICAtLU9CSkVDVC1BTFQtQzogUmViZWNjYXB1cnBsZTtcclxuICAtLU1BSU4tQkctQzogZGFya3NlYWdyZWVuO1xyXG4gIC0tTUFJTi1DOiBhbGljZWJsdWU7XHJcbiAgLS1DQUxFTkRBUi1CRy1DOiBkYXJrb3JhbmdlO1xyXG4gIC0tQ0FMRU5EQVItQzogYmxhY2s7XHJcbiAgLS1DQUxFTkRBUi1BTFQtQkctQzogYWxpY2VibHVlO1xyXG4gIC0tQ0FMRU5EQVItQUxULUM6IDtcclxuICAtLUNBTEVOREFSLUhPVkVSLUJHLUM6IHJnYmEoMCwgMCwgMCwgMC40MjkpO1xyXG4gIC0tQk9YLVNIQURPVy1DOiBibGFjaztcclxuICAvKiBQUklPUklUWSAqL1xyXG4gIC0tUFJJT1JJVFktTE9XOiBncmVlbjtcclxuICAtLVBSSU9SSVRZLU1FRDogeWVsbG93O1xyXG4gIC0tUFJJT1JJVFktSElHSDogcmVkO1xyXG4gIC8qIFBPUFVQICovXHJcbiAgLS1QT1BVUC1CRy1DOiBSZWJlY2NhcHVycGxlO1xyXG4gIC0tUE9QVVAtQzogYWxpY2VibHVlO1xyXG4gIC0tUE9QVVAtQUxULUM6IGJsYWNrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTF2aCA4NnZoIDR2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1BSU4tQkctQyk7XHJcbn1cclxuXHJcbi8qIEhFQURFUiAqL1xyXG5cclxuLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmF2VWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1CRy1DKTtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5uYXZMaSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQUxUMik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2U3BhbiB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQyk7XHJcbn1cclxuLm5hdlNwYW46OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1DKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG59XHJcbi5uYXZMaTpob3ZlciAubmF2U3BhbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcbi5uYXZMaTpob3ZlciAubmF2U3Bhbjo6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5uYXZMaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxufVxyXG5cclxuLyogSEVBREVSIEFDVElWRSAqL1xyXG5cclxuLm5hdkxpLmFjdGl2ZSAubmF2U3BhbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW46OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogTUFJTiAqL1xyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxpc3RDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gY2xhbXAoMC4ycmVtLCAyJSwgMnJlbSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vYmplY3RXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLm9iamVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgbWF4LWNvbnRlbnQgMXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xyXG59XHJcbi5vYmpEYXRlIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4uZGFpbHlDb250YWluZXIgLm9iamVjdCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVyZW0gMXJlbSAzZnIgMXJlbSAxcmVtO1xyXG59XHJcblxyXG4ubmV3T2JqZWN0LFxyXG4ubmV3Tm90ZSB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3T2JqZWN0OmhvdmVyLFxyXG4ubmV3Tm90ZTpob3ZlcixcclxuLm5ld09iamVjdDpmb2N1cyxcclxuLm5ld05vdGU6Zm9jdXMge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG5cclxuLm9iamVjdDpob3ZlcixcclxuLm9iamVjdDpmb2N1cyxcclxuLm9iamVjdDphY3RpdmUsXHJcbi5ub3RlT2JqZWN0OmhvdmVyLFxyXG4ubm9kZU9iamVjdDpmb2N1cyxcclxuLm5vdGVPYmplY3Q6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLUJPWC1TSEFET1ctQyk7XHJcbn1cclxuXHJcbi50YXNrV3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uVGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSA0ZnIgMWZyIDFyZW0gMXJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5ld1Rhc2sge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBtYXJnaW46IC0wLjVyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YXNrRGF0ZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLlRhc2s6aG92ZXIsXHJcbi5UYXNrOmZvY3VzLFxyXG4uVGFzazphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG5cclxuLm9ialRpdGxlLFxyXG4udGFza1RpdGxlLFxyXG4uZXZlbnRUaXRsZSxcclxuLm5vdGVUaXRsZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5vdGVUaXRsZSB7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbi5vYmpOb3RlLFxyXG4udGFza05vdGUsXHJcbi5ldmVudE5vdGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBQUk9KICovXHJcblxyXG4ub2JqZWN0LnByb2oge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDNmciAxcmVtIDFyZW07XHJcbn1cclxuXHJcbi8qIERBSUxZICovXHJcblxyXG4ub2JqZWN0LmV2ZW50cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAzZnIgNHJlbSAxcmVtIDFyZW07XHJcbn1cclxuXHJcbi8qIE5PVEVTICovXHJcblxyXG4ubm90ZXNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjkwcHgsIDFmcikpO1xyXG59XHJcbi5uZXdOb3RlIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnR3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uY29sR3JpZCB7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuI29uZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4jdHdvIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0aHJlZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jZm91ciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYzMHB4KSB7XHJcbiAgI3R3byB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTQwcHgpIHtcclxuICAjdGhyZWUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyNThweCkge1xyXG4gICNmb3VyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59XHJcbi5ub3RlT2JqZWN0IHtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNDAwcHgpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM3JlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIHJvdy1nYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG4ubm90ZU9iamVjdCA+IC5oaWdoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm90ZU9iamVjdCA+IC5sb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vdGVEYXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ3JpZC1yb3c6IDMvNDtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxufVxyXG4ubm90ZU1hcmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubm90ZVRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4ubm90ZUJvZHkge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBncmlkLXJvdzogMiAvIDM7XHJcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbn1cclxuXHJcbi8qIEVWRU5UUyAqL1xyXG5cclxuLmV2ZW50c0NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNzAwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1DQUxFTkRBUi1DKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcclxufVxyXG5cclxuLmRhdGVXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyV3JhcHBlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uaGVhZGluZ3Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4uY2FsZW5kYXJEYXkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FsZW5kYXJEYXk6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhbGVuZGFyRGF5OmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLUNBTEVOREFSLUhPVkVSLUJHLUMpO1xyXG59XHJcbi5pbmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5zZWxlY3RlZDo6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XHJcbn1cclxuLmV2ZW50Tm90ZVdyYXBwZXIge1xyXG4gIGhlaWdodDogNDJ2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMnJlbSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1CRy1DKTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ud2Vla0VuZCB7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuLmN1cnJlbnREYXk6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xyXG59XHJcbi5hcnJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFBSSU9SSVRZICovXHJcblxyXG4ucHJpb3JpdHkge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByaW9yaXR5OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4ucHJpb3JpdHk6Y2hlY2tlZDo6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcclxufVxyXG4jbG93OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XHJcbn1cclxuI21lZDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xyXG59XHJcbiNoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4ubG93IHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4ubWVkIHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTUVEKTtcclxufVxyXG4uaGlnaCB7XHJcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4uZXZlbnRsb3c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTUVEKTtcclxufVxyXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xyXG59XHJcblxyXG4vKiBDT01QTEVURUQgKi9cclxuXHJcbi50cnVlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhbHNlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgKi9cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBOmFueS1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcblxyXG4vKiBCSU4gKi9cclxuLmJ1dHRvbldyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmJpbkJ0biB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xyXG59XHJcbi5iaW5CdG46Zm9jdXMsXHJcbi5iaW5CdG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG5cclxuLmJpbkJveCB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1CRy1DKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbG9zZVBvcFVwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmluSW5zaWRlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbn1cclxuLmJpbldyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iaW5XcmFwcGVyID4gLm9iamVjdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciBtYXgtY29udGVudCBtaW4tY29udGVudCAycmVtO1xyXG59XHJcblxyXG4vKiBQT1BVUCAqL1xyXG5cclxuLnBvcFVwQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40OTUpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBvcFVwZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgODAwcHgpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5wcmlvcml0eVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZHVlV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxuLmlucHV0OjotbW96LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5wb3BVcEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIENIRUNLQk9YICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB3aWR0aDogMS4xNWVtO1xyXG4gIGhlaWdodDogMS4xNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDAuNjVlbTtcclxuICBoZWlnaHQ6IDAuNjVlbTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcclxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xyXG59XHJcblxyXG4vKiBUT09MVElQICovXHJcblxyXG4udG9vbFRpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBtaW4tY29udGVudDtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogNHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1CRy1DKTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgei1pbmRleDogNDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFD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clxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogVkFSSUFCTEVTICovXFxyXFxuICAtLUhFQURFUi1CRy1DOiBibGFjaztcXHJcXG4gIC0tSEVBREVSLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tT0JKRUNULUJHLUM6IHJnYigxODUsIDEwMiwgMik7XFxyXFxuICAtLU9CSkVDVC1DOiBhbGljZWJsdWU7XFxyXFxuICAtLU9CSkVDVC1BTFQtQzogUmViZWNjYXB1cnBsZTtcXHJcXG4gIC0tTUFJTi1CRy1DOiBkYXJrc2VhZ3JlZW47XFxyXFxuICAtLU1BSU4tQzogYWxpY2VibHVlO1xcclxcbiAgLS1DQUxFTkRBUi1CRy1DOiBkYXJrb3JhbmdlO1xcclxcbiAgLS1DQUxFTkRBUi1DOiBibGFjaztcXHJcXG4gIC0tQ0FMRU5EQVItQUxULUJHLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tQ0FMRU5EQVItQUxULUM6IDtcXHJcXG4gIC0tQ0FMRU5EQVItSE9WRVItQkctQzogcmdiYSgwLCAwLCAwLCAwLjQyOSk7XFxyXFxuICAtLUJPWC1TSEFET1ctQzogYmxhY2s7XFxyXFxuICAvKiBQUklPUklUWSAqL1xcclxcbiAgLS1QUklPUklUWS1MT1c6IGdyZWVuO1xcclxcbiAgLS1QUklPUklUWS1NRUQ6IHllbGxvdztcXHJcXG4gIC0tUFJJT1JJVFktSElHSDogcmVkO1xcclxcbiAgLyogUE9QVVAgKi9cXHJcXG4gIC0tUE9QVVAtQkctQzogUmViZWNjYXB1cnBsZTtcXHJcXG4gIC0tUE9QVVAtQzogYWxpY2VibHVlO1xcclxcbiAgLS1QT1BVUC1BTFQtQzogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTF2aCA4NnZoIDR2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NQUlOLUJHLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdlVsIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgcGFkZGluZzogMCAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUJHLUMpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdlNwYW4ge1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1DKTtcXHJcXG59XFxyXFxuLm5hdlNwYW46OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTdweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQyk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5uYXZMaTpob3ZlciAubmF2U3BhbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxyXFxufVxcclxcbi5uYXZMaTpob3ZlciAubmF2U3Bhbjo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5uYXZMaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgQUNUSVZFICovXFxyXFxuXFxyXFxuLm5hdkxpLmFjdGl2ZSAubmF2U3BhbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxyXFxufVxcclxcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW46OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RDb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbSBjbGFtcCgwLjJyZW0sIDIlLCAycmVtKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vYmplY3RXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5vYmplY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDNmciBtYXgtY29udGVudCAxcmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuLm9iakRhdGUge1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcbi5kYWlseUNvbnRhaW5lciAub2JqZWN0IHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDFyZW0gM2ZyIDFyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld09iamVjdCxcXHJcXG4ubmV3Tm90ZSB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQtQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3T2JqZWN0OmhvdmVyLFxcclxcbi5uZXdOb3RlOmhvdmVyLFxcclxcbi5uZXdPYmplY3Q6Zm9jdXMsXFxyXFxuLm5ld05vdGU6Zm9jdXMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxufVxcclxcblxcclxcbi5vYmplY3Q6aG92ZXIsXFxyXFxuLm9iamVjdDpmb2N1cyxcXHJcXG4ub2JqZWN0OmFjdGl2ZSxcXHJcXG4ubm90ZU9iamVjdDpob3ZlcixcXHJcXG4ubm9kZU9iamVjdDpmb2N1cyxcXHJcXG4ubm90ZU9iamVjdDphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxufVxcclxcblxcclxcbi50YXNrV3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4uVGFzayB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSA0ZnIgMWZyIDFyZW0gMXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubmV3VGFzayB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIG1hcmdpbjogLTAuNXJlbTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRhc2tEYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhc2s6aG92ZXIsXFxyXFxuLlRhc2s6Zm9jdXMsXFxyXFxuLlRhc2s6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4ub2JqVGl0bGUsXFxyXFxuLnRhc2tUaXRsZSxcXHJcXG4uZXZlbnRUaXRsZSxcXHJcXG4ubm90ZVRpdGxlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5ub3RlVGl0bGUge1xcclxcbiAgY3Vyc29yOiBhdXRvO1xcclxcbn1cXHJcXG4ub2JqTm90ZSxcXHJcXG4udGFza05vdGUsXFxyXFxuLmV2ZW50Tm90ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kZWxldGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KICovXFxyXFxuXFxyXFxuLm9iamVjdC5wcm9qIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDNmciAxcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIERBSUxZICovXFxyXFxuXFxyXFxuLm9iamVjdC5ldmVudHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDNmciA0cmVtIDFyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTk9URVMgKi9cXHJcXG5cXHJcXG4ubm90ZXNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuLm5ld05vdGUge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnR3JpZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5jb2xHcmlkIHtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI29uZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG4jdHdvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiN0aHJlZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jZm91ciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjMwcHgpIHtcXHJcXG4gICN0d28ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTQwcHgpIHtcXHJcXG4gICN0aHJlZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjU4cHgpIHtcXHJcXG4gICNmb3VyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5vdGVPYmplY3Qge1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNDAwcHgpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzcmVtIDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgcm93LWdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbn1cXHJcXG4ubm90ZU9iamVjdCA+IC5oaWdoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5vdGVPYmplY3QgPiAubG93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubm90ZURhdGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ3JpZC1yb3c6IDMvNDtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbn1cXHJcXG4ubm90ZU1hcmsge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3RlVGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG4ubm90ZUJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRVZFTlRTICovXFxyXFxuXFxyXFxuLmV2ZW50c0NvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDcwMHB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLUNBTEVOREFSLUMpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJXcmFwcGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi5oZWFkaW5ncyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLUNBTEVOREFSLUhPVkVSLUJHLUMpO1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XFxyXFxufVxcclxcbi5ldmVudE5vdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogNDJ2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDJyZW0pO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53ZWVrRW5kIHtcXHJcXG4gIGNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG4uY3VycmVudERheTo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1CRy1DKTtcXHJcXG59XFxyXFxuLmFycm93IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVxcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFBSSU9SSVRZICovXFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcbi5wcmlvcml0eTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tUE9QVVAtQyk7XFxyXFxufVxcclxcbiNsb3c6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbn1cXHJcXG4jbWVkOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTUVEKTtcXHJcXG59XFxyXFxuI2hpZ2g6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTE9XKTtcXHJcXG59XFxyXFxuLm1lZCB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTUVEKTtcXHJcXG59XFxyXFxuLmhpZ2gge1xcclxcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLVBSSU9SSVRZLUhJR0gpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnRsb3c6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbn1cXHJcXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xcclxcbn1cXHJcXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktSElHSCk7XFxyXFxufVxcclxcblxcclxcbi8qIENPTVBMRVRFRCAqL1xcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmZhbHNlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXJBOmFueS1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQyk7XFxyXFxufVxcclxcblxcclxcbi8qIEJJTiAqL1xcclxcbi5idXR0b25XcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpbkJ0biB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuLmJpbkJ0bjpmb2N1cyxcXHJcXG4uYmluQnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmluQm94IHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDcwMHB4KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVBPUFVQLUMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQkctQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlUG9wVXAge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5iaW5JbnNpZGVzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcbi5iaW5XcmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYmluV3JhcHBlciA+IC5vYmplY3Qge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIG1heC1jb250ZW50IG1pbi1jb250ZW50IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBPUFVQICovXFxyXFxuXFxyXFxuLnBvcFVwQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNDk1KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwZmllbGQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgODAwcHgpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5V3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kdWVXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbn1cXHJcXG4uaW5wdXQ6Oi1tb3otY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxudGV4dGFyZWEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucG9wVXBCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDSEVDS0JPWCAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG4gIHdpZHRoOiAxLjE1ZW07XFxyXFxuICBoZWlnaHQ6IDEuMTVlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHdpZHRoOiAwLjY1ZW07XFxyXFxuICBoZWlnaHQ6IDAuNjVlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLVBPUFVQLUFMVC1DKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxyXFxufVxcclxcblxcclxcbi8qIFRPT0xUSVAgKi9cXHJcXG5cXHJcXG4udG9vbFRpcCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1CRy1DKTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHBhZ2UuZm9yRWFjaCgocGFnZSkgPT4gcGFnZS5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgcG9wVXBzLmZvckVhY2goKHBvcFVwKSA9PiBwb3BVcC5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclJlbmRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlclwiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcclxuICAgIHByb2oucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdEl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCBJZCA9IE51bWJlcihldi5pZC5zbGljZSgxMCkpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5vdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdElkID0gZmluZFByb2ooSWQpPy5pZDtcclxuICBpZiAocHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gSWQpO1xyXG4gICAgaWYgKHRhc2spIHtcclxuICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRhc2subm90ZSA9IG5vdGU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChwcm9qZWN0SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IElkKTtcclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAocHJvamVjdC50eXBlID09PSBcImRhaWx5XCIgfHwgXCJub3Rlc1wiKSAmJlxyXG4gICAgICAgIHByb2plY3QudHlwZSAhPT0gXCJwcm9qXCIgJiZcclxuICAgICAgICBwcm9qZWN0LnR5cGUgIT09IFwiZXZlbnRzXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgICAgICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZVRpbWVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZVRpbWVPYmplY3QgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGR1ZVRpbWVWYWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBkdWVUaW1lT2JqZWN0LnNldEhvdXJzKGhvdXJzKTtcclxuICAgICAgICAgIGR1ZVRpbWVPYmplY3Quc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZVRpbWVPYmplY3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWUpO1xyXG4gICAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZU9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Tm90ZSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldDtcclxuICBjb25zdCB0YXJnZXRJZCA9IGV2LnRhcmdldC5pZDtcclxuICBjb25zdCBvYmplY3RJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IG9iamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3RJZCk7XHJcbiAgaWYgKHRhcmdldElkLnNsaWNlKDAsIDIpID09PSBcIm50XCIpIHtcclxuICAgIG9iamVjdC50aXRsZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9IGVsc2UgaWYgKHRhcmdldElkLnNsaWNlKDAsIDIpID09PSBcIm5iXCIpIHtcclxuICAgIG9iamVjdC5ub3RlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH1cclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBvYmplY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gaWQpO1xyXG4gIG9iamVjdC5wcmlvcml0eSA9IGV2LnRhcmdldC5jbGFzc0xpc3QuaXRlbSgxKTtcclxufTtcclxuIiwiaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5RGF0ZSA9IChhcnJheSkgPT4ge1xyXG4gIGlmIChzZWxlY3RlZERhdGUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkU3RyaW5nID0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZHVlRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGR1ZVN0cmluZyA9IGZvcm1hdERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgICAgICByZXR1cm4gZHVlU3RyaW5nID09PSBzZWxlY3RlZFN0cmluZztcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IGZvcm1hdERhdGUoaXRlbS5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRpb25TdHJpbmcgPT09IHNlbGVjdGVkU3RyaW5nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmaWx0ZXJCeVRvZGF5ID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgdHlwZU9yZGVyID0ge1xyXG4gICAgZXZlbnRzOiAxLFxyXG4gICAgcHJvajogMixcclxuICAgIGRhaWx5OiAzLFxyXG4gIH07XHJcbiAgY29uc3QgcHJpb3JpdHlPcmRlciA9IHtcclxuICAgIGxvdzogMyxcclxuICAgIG1lZDogMixcclxuICAgIGhpZ2g6IDEsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHN0YXJ0T2ZEYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgc3RhcnRPZkRheS5zZXRIb3VycygwLCAwKTtcclxuICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBlbmRPZkRheS5zZXRIb3VycygyMywgNTkpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgIHJldHVybiBkdWVEYXRlID49IHN0YXJ0T2ZEYXkgJiYgZHVlRGF0ZSA8PSBlbmRPZkRheTtcclxuICB9KTtcclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgdHlwZUNvbXAgPSB0eXBlT3JkZXJbYS50eXBlXSAtIHR5cGVPcmRlcltiLnR5cGVdO1xyXG4gICAgaWYgKHR5cGVDb21wICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiB0eXBlQ29tcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XSAtIHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gKGFycmF5KSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcImV2ZW50c1wiIHx8IGl0ZW0udHlwZSA9PT0gXCJwcm9qXCJcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGdldFR5cGUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBmaWx0ZXJlZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlck5vdGVHcmlkcyA9IChncmlkcykgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbShncmlkcykuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICByZXR1cm4gZGlzcGxheS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcclxuICB9KTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclJlbW92ZWQgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcihcclxuICAgIChpdGVtKSA9PiAhYmluLnNvbWUoKGJpbkl0ZW0pID0+IGJpbkl0ZW0uaWQgPT09IGl0ZW0uaWQpXHJcbiAgKTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gYFxyXG4gIDxhXHJcbiAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJrZXN0b2ZUaW1lc1wiXHJcbiAgY2xhc3M9XCJmb290ZXJBXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gID5EYXJrVGltZXM8L2FcclxuPmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBmb290ZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChvYmplY3REYXRlKSA9PiB7XHJcbiAgY29uc3QgZHVlRGF0ZU9iamVjdCA9IG9iamVjdERhdGU7XHJcbiAgbGV0IGZvcm1hdHRlZER1ZURhdGUgPSBcIlwiO1xyXG4gIGlmIChvYmplY3REYXRlKSB7XHJcbiAgICBjb25zdCB5ZWFyID0gZHVlRGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBmb3JtYXR0ZWREdWVEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgIHJldHVybiBmb3JtYXR0ZWREdWVEYXRlO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAob2JqZWN0VGltZSkgPT4ge1xyXG4gIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBvYmplY3RUaW1lO1xyXG4gIGxldCBmb3JtYXR0ZWRUaW1lID0gXCJcIjtcclxuICBpZiAob2JqZWN0VGltZSkge1xyXG4gICAgY29uc3QgaG91cnMgPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBmb3JtYXR0ZWRUaW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBzZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHNldFN0b3JlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgc2V0QmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcbmltcG9ydCB7IHBhcnNlSXNvRGF0ZSB9IGZyb20gXCIuL3BhcnNlSXNvRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVkU3RvcmVkSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZElkXCIpO1xyXG4gIGlmIChzdG9yZWRTdG9yZWRJZCAhPT0gbnVsbCkge1xyXG4gICAgc2V0U3RvcmVkSWQocGFyc2VJbnQoc3RvcmVkU3RvcmVkSWQpKTtcclxuICB9XHJcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG4gIGlmIChzdG9yZWRQcm9qZWN0cyAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcclxuICAgIGNvbnN0IG5vbk51bGxBcnJheSA9IHBhcnNlZEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBjb25zdCBjb252ZXJ0ZWRBcnJheSA9IHBhcnNlSXNvRGF0ZShub25OdWxsQXJyYXkpO1xyXG4gICAgc2V0UHJvamVjdHMoY29udmVydGVkQXJyYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG4gIGNvbnN0IHN0b3JlZEJpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmluXCIpO1xyXG4gIGlmIChzdG9yZWRCaW4gIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHBhcnNlZEFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWRCaW4pO1xyXG4gICAgY29uc3Qgbm9uTnVsbEFycmF5ID0gcGFyc2VkQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBudWxsKTtcclxuICAgIGNvbnN0IGNvbnZlcnRlZEFycmF5ID0gcGFyc2VJc29EYXRlKG5vbk51bGxBcnJheSk7XHJcbiAgICBzZXRCaW4oY29udmVydGVkQXJyYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveEV2ZW50KTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoZWNrQm94RXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tCb3hFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNoZWNrQm94ZXMoZXYpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCb3hlcyhldikge1xyXG4gIGNvbnN0IGNoZWNrQm94SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBjaGVja0JveElkKTtcclxuICBpZiAocHJvamVjdCkge1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKCFldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoIXByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IGZpbmRQcm9qKGNoZWNrQm94SWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdFdpdGhUYXNrLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ29tcGxldGlvbihldik7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbXBsZXRpb24gPSAoZXYpID0+IHtcclxuICBjb25zdCBjaGVja0JveElkID0gZXYgPyBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKSA6IG51bGw7XHJcbiAgY29uc3QgdGFyZ2V0Q2hlY2tlZCA9IGV2ID8gZXYudGFyZ2V0LmNoZWNrZWQgOiBudWxsO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZE9iamVjdHMgPSBvYmoudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBpZiAob2JqLnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgaWYgKG9iai5kdWVEYXRlIDwgY3VycmVudERhdGUpIHtcclxuICAgICAgICBvYmouY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqLnRhc2tzLmxlbmd0aCAhPT0gMCAmJiBjb21wbGV0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgfHxcclxuICAgICAgKG9iai50eXBlID09PSBcImRhaWx5XCIgJiYgdGFyZ2V0Q2hlY2tlZCAmJiBjaGVja0JveElkID09PSBvYmouaWQpXHJcbiAgICApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgb2JqLmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKG9iai50YXNrcy5sZW5ndGggIT09IDAgJiYgY29tcGxldGVkT2JqZWN0cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgT2JqZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0ID0gKHByb2pJZCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBsZXQgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgbGV0IHR5cGUgPSBnZXRUeXBlKCk7XHJcbiAgaWYgKFxyXG4gICAgcHJvaklkID09PSB1bmRlZmluZWQgJiZcclxuICAgIHR5cGUgIT09IFwiZGFpbHlcIiAmJlxyXG4gICAgdHlwZSAhPT0gXCJub3Rlc1wiICYmXHJcbiAgICB0eXBlICE9PSBcImV2ZW50c1wiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICBpZiAoZHVlRGF0ZVZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlKTtcclxuICAgICAgZHVlRGF0ZURhdGUuc2V0SG91cnMoMjMpO1xyXG4gICAgICBkdWVEYXRlRGF0ZS5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgZHVlRGF0ZSA9IGR1ZURhdGVEYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBjb25zdCBkdWVUaW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZHVlVGltZVZhbHVlLnNwbGl0KFwiOlwiKTtcclxuICAgIGlmIChkdWVUaW1lVmFsdWUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICBzZWxlY3RlZC5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICAgIHNlbGVjdGVkLnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICAgIGR1ZURhdGUgPSBzZWxlY3RlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgICAgZHVlRGF0ZSA9IG5ld1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbWlkTmlnaHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICBtaWROaWdodC5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICBtaWROaWdodC5zZXRIb3VycygyMywgNTksIDApO1xyXG4gICAgZHVlRGF0ZSA9IG1pZE5pZ2h0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIGxldCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgaWYgKHR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVkSWQoKTtcclxuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICBhZGRPYmplY3QoXHJcbiAgICBwcm9qSWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZE9iamVjdCA9IChcclxuICBwcm9qSWQsXHJcbiAgdGl0bGUsXHJcbiAgaWQsXHJcbiAgZHVlRGF0ZSxcclxuICBjb21wbGV0aW9uRGF0ZSxcclxuICBjb21wbGV0ZSxcclxuICBwcmlvcml0eSxcclxuICBub3RlLFxyXG4gIHR5cGVcclxuKSA9PiB7XHJcbiAgY29uc3QgbmV3T2JqZWN0ID0gbmV3IE9iamVjdChcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG4gIGlmIChwcm9qSWQgIT09IG51bGwgJiYgcHJvaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvaklkKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdPYmplY3QpO1xyXG4gIH1cclxuICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcclxuICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiByYWRpbykge1xyXG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICByZXR1cm4gYWN0aXZlVGFiLmlkO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlRW50ZXIgPSAoZXYpID0+IHtcclxuICBjb25zdCBlbnRlcktleUNvZGUgPSAxMztcclxuICBjb25zdCBwYXJ0aWN1bGFyRWxlbWVudElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkXj1cImFkZFByb2pCdG5cIl0nKTtcclxuICBpZiAocGFydGljdWxhckVsZW1lbnRJZCAmJiBldi5rZXlDb2RlID09PSBlbnRlcktleUNvZGUgJiYgIWV2LnNoaWZ0S2V5KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICB9KTtcclxuICAgIHBhcnRpY3VsYXJFbGVtZW50SWQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRXNjYXBlID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldi5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgIGNsZWFyUG9wVXAoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuICA8dWwgY2xhc3M9XCJuYXZVbFwiPlxyXG4gICAgPGxpIGlkPVwicHJvalwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+UHJvamVjdDwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJkYWlseVwiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RGFpbHk8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZXZlbnRzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5FdmVudHM8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwibm90ZXNcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPk5vdGVzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25hdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGxldCBzdG9yZWRJZCA9IDA7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdG9yZWRJZCsrO1xyXG4gICAgcmV0dXJuIHN0b3JlZElkO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGdlbmVyYXRlZElkID0gZ2VuZXJhdGVJZCgpO1xyXG5leHBvcnQgY29uc3Qgc2V0U3RvcmVkSWQgPSAodmFsdWUpID0+IHtcclxuICBzdG9yZWRJZCA9IHZhbHVlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL2lzTG9jYWxTdG9yYWdlQXZhaWxhYmxlXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGFpbHlcIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgcGllY2UyKCk7XHJcbiAgcGllY2UzKCk7XHJcbiAgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9mcm9tTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XHJcbiAgdmFyIHRlc3QgPSBcInRlc3RcIjtcclxuICB0cnkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmlmIChpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpKSB7XHJcbiAgZnJvbUxvY2FsU3RvcmFnZSgpO1xyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG59XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RlVG9vbHRpcCA9IChldikgPT4ge1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdHMuZmluZCgob2JqKSA9PiBvYmouaWQgPT09IGlkKTtcclxuICBsZXQgbm90ZURhdGEgPSBcIlwiO1xyXG4gIGlmICghb2JqZWN0KSB7XHJcbiAgICBjb25zdCBvYmpXaXRoVGFzayA9IGZpbmRQcm9qKGlkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBvYmpXaXRoVGFzay50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBub3RlRGF0YSA9IHRhc2subm90ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgbm90ZURhdGEgPSBvYmplY3Qubm90ZTtcclxuICB9XHJcbiAgY29uc3QgdG9vbFRpcEJvZHkgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInRvb2xUaXBcIj5cclxuICAgIDxwIGNsYXNzPVwidG9vbFRpcF9fcFwiPiR7bm90ZURhdGF9PC9wPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB0b29sVGlwQm9keSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9vbHRpcCA9ICgpID0+IHtcclxuICBjb25zdCB0b29sVGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b29sVGlwXCIpO1xyXG4gIHRvb2xUaXAuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5yZW1vdmUoKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgcGFyc2VJc29EYXRlID0gKGFycmF5KSA9PiB7XHJcbiAgYXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgb2JqZWN0LmR1ZURhdGUgPSBjb252ZXJ0RGF0ZShvYmplY3QuZHVlRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IGNvbnZlcnREYXRlKG9iamVjdC5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmFkZGVkRGF0ZSkge1xyXG4gICAgICBvYmplY3QuYWRkZWREYXRlID0gY29udmVydERhdGUob2JqZWN0LmFkZGVkRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnRhc2tzKSB7XHJcbiAgICAgIG9iamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSkge1xyXG4gICAgICAgICAgdGFzay5kdWVEYXRlID0gY29udmVydERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgICAgIHRhc2suY29tcGxldGlvbkRhdGUgPSBjb252ZXJ0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhc2suYWRkZWREYXRlKSB7XHJcbiAgICAgICAgICB0YXNrLmFkZGVkRGF0ZSA9IGNvbnZlcnREYXRlKHRhc2suYWRkZWREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhcnJheTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnZlcnREYXRlID0gKGRhdGUpID0+IHtcclxuICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmV0dXJuIHBhcnNlZERhdGU7XHJcbn07XHJcbiIsImV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0cyA9ICh2YWx1ZSkgPT4ge1xyXG4gIHByb2plY3RzID0gdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0KFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmlkID0gaWQ7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5jb21wbGV0aW9uRGF0ZSA9IGNvbXBsZXRpb25EYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMuYWRkZWREYXRlID0gZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gY3VycmVudERhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgY2hlY2tDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZUJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5leHBvcnQgbGV0IGJpbiA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEJpbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGJpbiA9IHZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgY29uc3QgbWlkTmlnaHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgIG1pZE5pZ2h0LnNldERhdGUob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgICBjb25zdCBtaWROaWdodEFoZWFkID0gbmV3IERhdGUoKTtcclxuICAgICAgbWlkTmlnaHRBaGVhZC5zZXREYXRlKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSArIDIpO1xyXG4gICAgICBtaWROaWdodEFoZWFkLnNldEhvdXJzKDAsIDAsIDApO1xyXG5cclxuICAgICAgY29uc3QgdHdvSG91cnNBaGVhZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHR3b0hvdXJzQWhlYWQuc2V0SG91cnMob2JqZWN0LmR1ZURhdGUuZ2V0SG91cnMoKSArIDIpO1xyXG4gICAgICBpZiAob2JqZWN0LnR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuY29tcGxldGUgPT09IHRydWUgJiYgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0ZSA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIGN1cnJlbnREYXRlID49IG9iamVjdC5kdWVEYXRlICYmXHJcbiAgICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodEFoZWFkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAob2JqZWN0LnR5cGUgPT09IFwicHJvalwiICYmIG9iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgJiYgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgY29uc3Qgc3BsaWNlZCA9IHByb2plY3RzW2luZGV4XTtcclxuICAgICAgICBpZiAoIWJpbi5maW5kKChvYmopID0+IG9iai5pZCA9PT0gc3BsaWNlZC5pZCkpIHtcclxuICAgICAgICAgIGJpbi5wdXNoKHNwbGljZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBjb25zdCBiaW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpbkJveFwiKTtcclxuICBpZiAoYmluQm94KSB7XHJcbiAgICBwb3B1bGF0ZUJpbigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNoZWNrQ29tcGxldGlvbigpO1xyXG4gIHJlbW92ZUNvbXBsZXRlZCgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBpZiAoXHJcbiAgICAocHJvamVjdCAhPT0gdW5kZWZpbmVkIHx8IHByb2plY3QgIT09IG51bGwpICYmXHJcbiAgICBldi50YXJnZXQuaWQuc2xpY2UoMCwgMikgPT0gXCJkcFwiXHJcbiAgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgfHwgcHJvamVjdC50eXBlID09PSBcInByb2pcIikgJiZcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChiaW4uZmluZCgob2JqKSA9PiBvYmouaWQgPT09IHByb2plY3QuaWQpKSB7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluLnB1c2gocHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHcke3RhcmdldElkfWApO1xyXG4gICAgICBwcm9qRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvaldpdGhUYXNrID0gcHJvamVjdHMuZmluZCgocHJvaikgPT5cclxuICAgICAgcHJvai50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZClcclxuICAgICk7XHJcbiAgICBpZiAocHJvaldpdGhUYXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2pXaXRoVGFzay50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IHRhcmdldElkXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2pXaXRoVGFzay50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHQke3RhcmdldElkfWApO1xyXG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgYmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcbmltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJCaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25XcmFwcGVyXCIpO1xyXG4gIGNvbnN0IGJpbiA9IGAgPGRpdiBjbGFzcz1cImJpbkJ0bldyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJiaW5CdG5cIj5CSU48L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGJpbik7XHJcbiAgY29uc3QgYmluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5CdG5cIik7XHJcbiAgYmluQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQmluRXZlbnQpO1xyXG4gIGJpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkJpbkV2ZW50KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckJpbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBiaW4gPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmluQm94XCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cImJpbl9faDJcIj5CSU4gU1RPUkFHRTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiaW5JbnNpZGVzXCI+PC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVBvcFVwXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBiaW4pO1xyXG4gIHBvcHVsYXRlQmluKCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUG9wVXBcIik7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwRXZlbnQpO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwRXZlbnQpO1xyXG4gIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wVXBDb250YWluZXJcIikpIHtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlQmluID0gKCkgPT4ge1xyXG4gIGNsZWFyUmVuZGVyZWRCaW5JdGVtcygpO1xyXG4gIGJpbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICByZW5kZXJCaW5JdGVtKGl0ZW0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQmluSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5JbnNpZGVzXCIpO1xyXG4gIGNvbnN0IGJpbkl0ZW0gPSBgPGRpdiBjbGFzcz1cImJpbldyYXBwZXIgd3JhcHBlclwiIGlkPVwiYmkke2l0ZW0uaWR9XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm9iamVjdCAke2l0ZW0ucHJpb3JpdHl9ICR7aXRlbS5jb21wbGV0ZX1cIiBpZD1cImJvJHtpdGVtLmlkfSBcIj5cclxuICA8cCBjbGFzcz1cIm9iamVjdFRpdGxlXCIgaWQ9XCJidCR7aXRlbS5pZH1cIj4ke2l0ZW0udGl0bGV9PC9wPlxyXG4gIDxwIGNsYXNzPVwib2JqZWN0RGF0ZVwiIGlkPVwiYmQke2l0ZW0uaWR9XCI+JHtmb3JtYXREYXRlKGl0ZW0uY29tcGxldGlvbkRhdGUpfTwvcD5cclxuICA8cCBjbGFzcz1cIm9iamVjdFR5cGVcIiBpZD1cImJkJHtpdGVtLmlkfVwiPiR7aXRlbS50eXBlfTwvcD5cclxuICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke2l0ZW0uaWR9XCI+RDwvcD5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYmluSXRlbSk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhclJlbmRlcmVkQmluSXRlbXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRCaW5JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmluV3JhcHBlclwiKTtcclxuICByZW5kZXJlZEJpbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVCaW5JdGVtID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaXRlbUlkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgaXRlbUluZGV4ID0gYmluLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IGl0ZW1JZCk7XHJcbiAgYmluLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlUG9wVXBFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY2xlYXJQb3BVcCgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlRXZlbnQgPSAoZXYpID0+IHtcclxuICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICByZW1vdmVCaW5JdGVtKGV2KTtcclxuICBwb3B1bGF0ZUJpbigpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBvcGVuQmluRXZlbnQgPSAoZXYpID0+IHtcclxuICByZW5kZXJCaW5Db250YWluZXIoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5pbXBvcnQgeyByZW5kZXJCaW4gfSBmcm9tIFwiLi9yZW5kZXJCaW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJEYWlseVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxpc3RDb250YWluZXIgZGFpbHlDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uV3JhcHBlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZXdPYmplY3RcIiBpZD1cIm5ld0RhaWx5VGFza1wiPlxyXG4gICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgRGFpbHk8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICByZW5kZXJCaW4oKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3RGFpbHlUYXNrXCIpO1xyXG4gIG5ld1Byb2oucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxuICBuZXdQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IGVkaXRJdGVtIH0gZnJvbSBcIi4vZWRpdEl0ZW1cIjtcclxuaW1wb3J0IHsgY2xlYXJSZW5kZXJlZFByb2plY3RzIH0gZnJvbSBcIi4vY2xlYXJSZW5kZXJlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4vZm9ybWF0VGltZVwiO1xyXG5pbXBvcnQgeyBtYXJrQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckVkaXRQb3BVcCA9IChldikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGV2LmlkLnNsaWNlKDIpKTtcclxuICBsZXQgb2JqZWN0O1xyXG4gIGlmIChldi5pZC5zbGljZSgwLCAyKSAhPT0gXCJwdFwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xyXG4gICAgb2JqZWN0ID0gcHJvamVjdDtcclxuICB9IGVsc2UgaWYgKGV2LmlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvaihpZCk7XHJcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBvYmplY3QgPSB0YXNrO1xyXG4gIH1cclxuICBsZXQgZGF0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIGlmIChvYmplY3QudHlwZSAhPT0gXCJkYWlseVwiICYmIG9iamVjdC50eXBlICE9PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgdmFsdWU9XCIke2Zvcm1hdERhdGUoXHJcbiAgICBvYmplY3QuZHVlRGF0ZVxyXG4gICl9XCI+XHJcbiAgPC9kaXY+YDtcclxuICB9IGVsc2UgaWYgKG9iamVjdC50eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkdWVXcmFwcGVyXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGltZVwiIGNsYXNzPVwibGFiZWxcIj5EdWU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIHZhbHVlPVwiJHtmb3JtYXRUaW1lKG9iamVjdC5kdWVEYXRlKX1cIj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqZWN0LnR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgY29uc3Qgbm90ZSA9IGA8ZGl2IGNsYXNzPVwicG9wVXBDb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgICBvYmplY3QudGl0bGVcclxuICAgICAgfVwiIGF1dG9mb2N1cyAgcGxhY2Vob2xkZXI9XCJUaXRsZSBnb2VzIGhlcmVcIi8+XHJcbiAgICAgIDxwIGNsYXNzPVwibm90ZURhdGVcIiBpZD1cIm5vdGVEYXRlXCI+JHtmb3JtYXREYXRlKG9iamVjdC5hZGRlZERhdGUpfTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGVNYXJrICR7b2JqZWN0LnByaW9yaXR5fVwiIGRhdGEtcHJpb3JpdHk9XCIke1xyXG4gICAgICBvYmplY3QucHJpb3JpdHlcclxuICAgIH1cIiBpZD1cIm5vdGVQcmlvcml0eSR7b2JqZWN0LmlkfVwiPk08L2Rpdj5cclxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPiR7XHJcbiAgICAgICAgb2JqZWN0Lm5vdGVcclxuICAgICAgfTwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiYWRkUHJvakJ0biR7b2JqZWN0LmlkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJjbG9zZUJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbm90ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwb3BVcGZpZWxkXCIgaWQ9XCJlZGl0VGFza1wiPlxyXG4gICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIiR7XHJcbiAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgfVwiIGF1dG9mb2N1cyAgcGxhY2Vob2xkZXI9XCJUaXRsZSBnb2VzIGhlcmVcIi8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlXcmFwcGVyXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImxvd1wiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImxvd1wiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJtZWRcIiAke1xyXG4gICAgICAgIG9iamVjdC5wcmlvcml0eSA9PT0gXCJtZWRcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwiaGlnaFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcImhpZ2hcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICB9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtkYXRlRWxlbWVudH1cclxuICAgIDxwIGNsYXNzPVwidGFza0NvbXBsZXRpb25EYXRlXCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9PT0gbnVsbFxyXG4gICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgOiBgQ29tcGxldGVkIG9uOiR7b2JqZWN0LmNvbXBsZXRpb25EYXRlfWBcclxuICAgICAgICB9XHJcbiAgICAgIDwvcD5cclxuICAgIDx0ZXh0YXJlYSBuYW1lPVwibm90ZVwiIGlkPVwicHJvak5vdGVcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIk5vdGUgZ29lcyBoZXJlXCI+JHtcclxuICAgICAgb2JqZWN0Lm5vdGVcclxuICAgIH08L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtpZH1cIj5FZGl0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKGV2LmlkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGRQcm9qQnRuJHtpZC5zbGljZSgyKX1gKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XHJcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVNYXJrXCIpO1xyXG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcENvbnRhaW5lclwiKTtcclxuICBpZiAocHJpb3JpdHlCdG4pIHtcclxuICAgIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQcmlvcml0eSk7XHJcbiAgfVxyXG4gIGlmIChpZC5zbGljZSgwLCAyKSAhPT0gXCJwdFwiKSB7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgZWRpdEl0ZW0oZXYudGFyZ2V0KTtcclxuICAgICAgaWYgKGdldFR5cGUoKSA9PT0gXCJldmVudHNcIikge1xyXG4gICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgfVxyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGlkLnNsaWNlKDAsIDIpID09PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBjbGVhclBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxuICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcFVwQ29udGFpbmVyXCIpKSB7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlckdldFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyR2V0UG9wVXBcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSBcIi4vZmlsdGVyQnlUeXBlXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyQmluIH0gZnJvbSBcIi4vcmVuZGVyQmluXCI7XHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxubGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5sZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbmxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5jb25zdCBjdXJyZW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbmNvbnN0IGN1cnJlbnRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuY29uc3QgY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmV4cG9ydCBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgY3VycmVudERheSk7XHJcbmNvbnN0IG1vbnRocyA9IFtcclxuICBcIkphbnVhcnlcIixcclxuICBcIkZlYnJ1YXJ5XCIsXHJcbiAgXCJNYXJjaFwiLFxyXG4gIFwiQXByaWxcIixcclxuICBcIk1heVwiLFxyXG4gIFwiSnVuZVwiLFxyXG4gIFwiSnVseVwiLFxyXG4gIFwiQXVndXN0XCIsXHJcbiAgXCJTZXB0ZW1iZXJcIixcclxuICBcIk9jdG9iZXJcIixcclxuICBcIk5vdmVtYmVyXCIsXHJcbiAgXCJEZWNlbWJlclwiLFxyXG5dO1xyXG5jb25zdCB3ZWVrRGF5cyA9IFtcclxuICBcIk1vbmRheVwiLFxyXG4gIFwiVHVlc2RheVwiLFxyXG4gIFwiV2VkbmVzZGF5XCIsXHJcbiAgXCJUaHVyc2RheVwiLFxyXG4gIFwiRnJpZGF5XCIsXHJcbiAgXCJTYXR1cmRheVwiLFxyXG4gIFwiU3VuZGF5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRXZlbnRzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBldmVudHNQYWdlID0gYCA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJldmVudHNDb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkYXRlV3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXJyb3cgYmFja3dhcmRcIiBpZD1cImJhY2t3YXJkXCI+PDwvZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cImN1cnJlbnREYXRlXCI+PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXJyb3cgZm9yd2FyZFwiIGlkPVwiZm9yd2FyZFwiPj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyV3JhcHBlclwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJoZWFkaW5nc1wiPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5Nb248L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5UdWU8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5XZWQ8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5UaHU8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5Gcmk8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5TYXQ8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRpbmdcIj5TdW48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8dWwgY2xhc3M9XCJjYWxlbmRhckRheXNcIj5cclxuICAgICAgPC91bD5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImV2ZW50Tm90ZVdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b25XcmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdFdmVudFwiPlxyXG4gICAgIDxwIGNsYXNzPVwibmV3T2JqZWN0X19wXCI+QWRkIEV2ZW50PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4gICAgXHJcbiAgICBgO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBldmVudHNQYWdlKTtcclxuICByZW5kZXJDYWxlbmRhcigpO1xyXG4gIHJlbmRlckJpbigpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZmlyc3REYXRlT2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxlbmRhckRheXNcIik7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnREYXRlXCIpO1xyXG4gIGNvbnN0IGRhdGVTdHJpbmcgPSBmaXJzdERhdGVPZk1vbnRoLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLWV1XCIsIHtcclxuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICBtb250aDogXCJudW1lcmljXCIsXHJcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGxhc3REYXRlT2ZMYXN0TW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheXNJbk1vbnRoKS5nZXREYXkoKTtcclxuICBjb25zdCBwYWRkaW5nRGF5cyA9IHdlZWtEYXlzLmluZGV4T2YoZGF0ZVN0cmluZy5zcGxpdChcIixcIilbMF0pO1xyXG4gIC8vIHByZXZpb3VzIG1vbnRoXHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IHBhZGRpbmdEYXlzOyBpID4gMDsgLS1pKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c01vbnRoRGF5ID0gbGFzdERhdGVPZkxhc3RNb250aCAtIGkgKyAxO1xyXG4gICAgY29uc3QgaXNXZWVrZW5kID1cclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBwcmV2aW91c01vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU2F0dXJkYXlcIiB8fFxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIHByZXZpb3VzTW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTdW5kYXlcIjtcclxuICAgIGNvbnN0IGlzSW5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29uc3QgYmFja3dhcmQgPSB0cnVlO1xyXG4gICAgY2FsZW5kYXJEYXlzLnB1c2goe1xyXG4gICAgICBkYXk6IGxhc3REYXRlT2ZMYXN0TW9udGggLSBpICsgMSxcclxuICAgICAgaXNXZWVrZW5kLFxyXG4gICAgICBpc0luYWN0aXZlLFxyXG4gICAgICBiYWNrd2FyZCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL2N1cnJlbnQgbW9udGhcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpc0N1cnJlbnREYXkgPVxyXG4gICAgICBpID09PSBjdXJyZW50RGF5ICYmIG1vbnRoID09PSBjdXJyZW50TW9udGggJiYgeWVhciA9PT0gY3VycmVudFllYXI7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkRGF5ID1cclxuICAgICAgc2VsZWN0ZWREYXRlICYmXHJcbiAgICAgIGkgPT09IHNlbGVjdGVkRGF0ZS5nZXREYXRlKCkgJiZcclxuICAgICAgbW9udGggPT09IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgIHllYXIgPT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgaXNXZWVrZW5kID1cclxuICAgICAgd2Vla0RheXNbbmV3IERhdGUoeWVhciwgbW9udGgsIGkgLSAxKS5nZXREYXkoKV0gPT09IFwiU2F0dXJkYXlcIiB8fFxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSAtIDEpLmdldERheSgpXSA9PT0gXCJTdW5kYXlcIjtcclxuICAgIGNvbnN0IGlzRGF5ID0gdHJ1ZTtcclxuICAgIGNvbnN0IGlzUGFzdCA9IGkgPCBjdXJyZW50RGF5O1xyXG4gICAgY2FsZW5kYXJEYXlzLnB1c2goe1xyXG4gICAgICBkYXk6IGksXHJcbiAgICAgIGlzQ3VycmVudERheSxcclxuICAgICAgaXNTZWxlY3RlZERheSxcclxuICAgICAgaXNXZWVrZW5kLFxyXG4gICAgICBpc0RheSxcclxuICAgICAgaXNQYXN0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vbmV4dCBtb250aFxyXG4gIGZvciAobGV0IGkgPSBsYXN0RGF5T2ZNb250aDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3QgbmV4dE1vbnRoRGF5ID0gaSAtIGxhc3REYXlPZk1vbnRoICsgMTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgbmV4dE1vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU2F0dXJkYXlcIiB8fFxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIG5leHRNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlN1bmRheVwiO1xyXG4gICAgY29uc3QgaXNJbmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb25zdCBmb3J3YXJkID0gdHJ1ZTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHsgZGF5OiBuZXh0TW9udGhEYXksIGlzV2Vla2VuZCwgaXNJbmFjdGl2ZSwgZm9yd2FyZCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFyRGF5SFRNTCA9IGNhbGVuZGFyRGF5c1xyXG4gICAgLm1hcCgoZGF5SW5mbykgPT4ge1xyXG4gICAgICBsZXQgY2xhc3NOYW1lcyA9IFwiY2FsZW5kYXJEYXlcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNDdXJyZW50RGF5KSBjbGFzc05hbWVzICs9IFwiIGN1cnJlbnREYXlcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNTZWxlY3RlZERheSkgY2xhc3NOYW1lcyArPSBcIiBzZWxlY3RlZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc1dlZWtlbmQpIGNsYXNzTmFtZXMgKz0gXCIgd2Vla0VuZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc0luYWN0aXZlKSBjbGFzc05hbWVzICs9IFwiIGluYWN0aXZlXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmJhY2t3YXJkKSBjbGFzc05hbWVzICs9IFwiIGJhY2t3YXJkXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmZvcndhcmQpIGNsYXNzTmFtZXMgKz0gXCIgZm9yd2FyZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc0RheSkgY2xhc3NOYW1lcyArPSBcIiBkYXlcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNQYXN0KSBjbGFzc05hbWVzICs9IFwiIGluYWN0aXZlXCI7XHJcblxyXG4gICAgICByZXR1cm4gYDxsaSBjbGFzcz1cIiR7Y2xhc3NOYW1lc31cIj4ke2RheUluZm8uZGF5fTwvbGk+YDtcclxuICAgIH0pXHJcbiAgICAuam9pbihcIlwiKTtcclxuXHJcbiAgY2FsZW5kYXJDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNhbGVuZGFyRGF5SFRNTCk7XHJcbiAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBgJHttb250aHNbbW9udGhdfSAke3llYXJ9YDtcclxuICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtDYWxlbmRhckRheXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWRCeVR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gIGZpbHRlcmVkQnlUeXBlLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBvYmplY3QuZHVlRGF0ZSAmJlxyXG4gICAgICBvYmplY3QuZHVlRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmXHJcbiAgICAgIG9iamVjdC5kdWVEYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcmVuZGVyZWREYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICAgIGNvbnN0IGR1ZVN0cmluZyA9IFN0cmluZyhvYmplY3QuZHVlRGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgICByZW5kZXJlZERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAgICAgaWYgKGR1ZVN0cmluZykge1xyXG4gICAgICAgICAgbWFyayhkYXksIGR1ZVN0cmluZywgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlICYmXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZS5nZXRNb250aCgpID09PSBtb250aFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgICBjb25zdCBjb21wbGV0aW9uU3RyaW5nID0gU3RyaW5nKG9iamVjdC5jb21wbGV0aW9uRGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgICByZW5kZXJlZERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbXBsZXRpb25TdHJpbmcpIHtcclxuICAgICAgICAgIG1hcmsoZGF5LCBjb21wbGV0aW9uU3RyaW5nLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXJrID0gKGRheSwgc3RyaW5nLCBvYmplY3QpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFN0cmluZyA9IFN0cmluZyhzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpKTtcclxuICBjb25zdCBkYXlTdGluZyA9IFN0cmluZyhkYXkuaW5uZXJUZXh0KTtcclxuICBpZiAoZGF5U3RpbmcgPT09IHN0cmluZykge1xyXG4gICAgaWYgKFxyXG4gICAgICBkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApICYmXHJcbiAgICAgIGRheVN0aW5nID09PSBzZWxlY3RlZFN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoYGV2ZW50JHtvYmplY3QucHJpb3JpdHl9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcndhcmRCYWNrd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJyb3dcIik7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdFdmVudFwiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIGZvcndhcmRCYWNrd2FyZC5mb3JFYWNoKChhcnJvdykgPT4ge1xyXG4gICAgYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vbnRoQ2hhbmdlckV2ZW50KTtcclxuICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb250aENoYW5nZXJFdmVudCk7XHJcbiAgfSk7XHJcbiAgY2FsZW5kYXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgZGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXRlU2VsZWN0aW9uRXZlbnQpO1xyXG4gICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXRlU2VsZWN0aW9uRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbW9udGhDaGFuZ2VyRXZlbnQgPSAoZXYpID0+IHtcclxuICBpZiAoXHJcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSB8fFxyXG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpXHJcbiAgKSB7XHJcbiAgICBjbGVhckNhbGVuZGFyKCk7XHJcbiAgICBjaGFuZ2VNb250aChldik7XHJcbiAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRhdGVTZWxlY3Rpb25FdmVudCA9IChldikgPT4ge1xyXG4gIHNlbGVjdERhdGUoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJDYWxlbmRhciA9ICgpID0+IHtcclxuICBjb25zdCBjYWxlbmRhckRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbGVuZGFyRGF5XCIpO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZU1vbnRoID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3J3YXJkXCIpKSB7XHJcbiAgICBtb250aCArPSAxO1xyXG4gICAgaWYgKG1vbnRoID4gMTEpIHtcclxuICAgICAgbW9udGggPSAwO1xyXG4gICAgICB5ZWFyICs9IDE7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmFja3dhcmRcIikpIHtcclxuICAgIG1vbnRoIC09IDE7XHJcbiAgICBpZiAobW9udGggPCAwKSB7XHJcbiAgICAgIG1vbnRoID0gMTE7XHJcbiAgICAgIHllYXIgLT0gMTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3REYXRlID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjb25zdCBzZWxlY3RlZERhdGVFbGVtZW50ID0gZXYudGFyZ2V0O1xyXG4gIGxldCBzZWxlY3RlZERheSA9IGV2LnRhcmdldC5pbm5lclRleHQ7XHJcbiAgY2FsZW5kYXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICB9KTtcclxuICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluYWN0aXZlXCIpKSB7XHJcbiAgICBtb250aENoYW5nZXJFdmVudChldik7XHJcbiAgICBjb25zdCBuZXdSZW5kZXJlZE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICBjb25zdCBuZXdTZWxlY3RlZERhdGVFbGVtZW50ID0gQXJyYXkuZnJvbShuZXdSZW5kZXJlZE1vbnRoKS5maW5kKFxyXG4gICAgICAoZGF5KSA9PiBkYXkuaW5uZXJUZXh0ID09PSBldi50YXJnZXQuaW5uZXJUZXh0XHJcbiAgICApO1xyXG4gICAgbmV3U2VsZWN0ZWREYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlbGVjdGVkRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH1cclxuICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgc2VsZWN0ZWREYXkpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0T2JqZWN0IH0gZnJvbSBcIi4vZ2V0T2JqZWN0XCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyR2V0UG9wVXAgPSAob2JqSWQpID0+IHtcclxuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbGV0IG9iamVjdElkID0gb2JqSWQ7XHJcblxyXG4gIGlmIChvYmpJZCBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgb2JqZWN0SWQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aW1lXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIHZhbHVlPVwiJHtmb3JtYXRUaW1lKFxyXG4gICAgICBjdXJyZW50VGltZVxyXG4gICAgKX1cIj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIG9iamVjdElkID09PSB1bmRlZmluZWQgJiZcclxuICAgIGdldFR5cGUoKSAhPT0gXCJldmVudHNcIiAmJlxyXG4gICAgZ2V0VHlwZSgpICE9PSBcImRhaWx5XCJcclxuICApIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCI+PC9pbnB1dD5cclxuICAgICAgICAgPC9kaXY+YDtcclxuICB9IGVsc2UgaWYgKG9iamVjdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwibm90ZXNcIikge1xyXG4gICAgbm90ZXMoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImFkZFRhc2tcIj5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgYXV0b2ZvY3VzIHBsYWNlaG9sZGVyPVwiVGl0bGUgZ29lcyBoZXJlXCIvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiBjaGVja2VkIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImhpZ2hcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiTm90ZSBnb2VzIGhlcmVcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3RJZH1cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKG9iamVjdElkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChvYmpJZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbaWRePVwiYWRkUHJvakJ0blwiXWApO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcclxuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZU1hcmtcIik7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIGlmIChwcmlvcml0eUJ0bikge1xyXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByaW9yaXR5KTtcclxuICB9XHJcbiAgaWYgKG5ld1Byb2opIHtcclxuICAgIG5ld1Byb2ouZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgaWYgKG9iaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV2SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEwKSk7XHJcbiAgICAgICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgICAgIGdldE9iamVjdChldklkKTtcclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iaklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgZ2V0T2JqZWN0KCk7XHJcbiAgICAgICAgICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxuICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcFVwQ29udGFpbmVyXCIpKSB7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG5vdGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IG5vdGUgPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIFwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiIC8+XHJcbiAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJub3RlRGF0ZVwiPjwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayBsb3dcIiBkYXRhLXByaW9yaXR5PVwibG93XCIgaWQ9XCJub3RlUHJpb3JpdHlcIj5NPC9kaXY+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJOb3RlIGdvZXMgaGVyZVwiPjwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG5cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5vdGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcbmltcG9ydCB7IHJlbmRlckJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck5vdGVzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lciBub3Rlc0NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b25XcmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld05vdGVcIiBpZD1cIm5ld05vdGVcIj5cclxuICAgIDxwIGNsYXNzPVwibmV3Tm90ZV9fcFwiPkFkZCBOb3RlPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJiaWdHcmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwib25lXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwidHdvXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwidGhyZWVcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xHcmlkXCIgaWQ9XCJmb3VyXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgcmVuZGVyQmluKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3Tm90ZVwiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJQcm9qVGFzayB9IGZyb20gXCIuL3JlbmRlclByb2pUYXNrXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBnZXRDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBzb3J0QXJyYXkgfSBmcm9tIFwiLi9zb3J0QXJyYXlcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gXCIuL3JlbW92ZUl0ZW1cIjtcclxuaW1wb3J0IHsgcmVuZGVyRWRpdFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyRWRpdFBvcFVwXCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gXCIuL2ZpbHRlckJ5VHlwZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVRvZGF5IH0gZnJvbSBcIi4vZmlsdGVyQnlUb2RheVwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeURhdGUgfSBmcm9tIFwiLi9maWx0ZXJCeURhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuL2Zvcm1hdFRpbWVcIjtcclxuaW1wb3J0IHsgbWFya0NhbGVuZGFyRGF5cyB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgZmlsdGVyUmVtb3ZlZCB9IGZyb20gXCIuL2ZpbHRlclJlbW92ZWRcIjtcclxuaW1wb3J0IHsgZmlsdGVyTm90ZUdyaWRzIH0gZnJvbSBcIi4vZmlsdGVyTm90ZUdyaWRzXCI7XHJcbmltcG9ydCB7IGVkaXROb3RlIH0gZnJvbSBcIi4vZWRpdE5vdGVcIjtcclxuaW1wb3J0IHsgbm90ZVRvb2x0aXAsIHJlbW92ZVRvb2x0aXAgfSBmcm9tIFwiLi9ub3RlVG9vbHRpcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck9iamVjdHMgPSAoKSA9PiB7XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbEdyaWRcIik7XHJcbiAgY29uc3QgZmlsdGVyZWRHcmlkcyA9IGZpbHRlck5vdGVHcmlkcyhncmlkcyk7XHJcbiAgY29uc3QgYXJyYXlPZlR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gIGxldCBkYWlseUFycmF5ID0gc29ydEFycmF5KGFycmF5T2ZUeXBlKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIpIHtcclxuICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeVRvZGF5KHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlck91dFJlbW92ZWQgPSBmaWx0ZXJSZW1vdmVkKGRhaWx5QXJyYXkpO1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGZpbHRlck91dFJlbW92ZWQpO1xyXG4gICAgc29ydGVkLmZvckVhY2goKHByb2opID0+IHtcclxuICAgICAgcmVuZGVyT2JqZWN0KHByb2opO1xyXG4gICAgICByZW5kZXJQcm9qVGFzayhwcm9qKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGxldCBqID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFpbHlBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaiA+PSBmaWx0ZXJlZEdyaWRzLmxlbmd0aCkge1xyXG4gICAgICAgIGogPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlck5vdGVzKGRhaWx5QXJyYXlbaV0sIGZpbHRlcmVkR3JpZHNbal0pO1xyXG4gICAgICBqKys7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlEYXRlID0gZmlsdGVyQnlEYXRlKGZpbHRlcmVkQnlUeXBlKTtcclxuICAgIGlmIChmaWx0ZXJlZEJ5RGF0ZSkge1xyXG4gICAgICBkYWlseUFycmF5ID0gZmlsdGVyZWRCeURhdGU7XHJcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRBcnJheShkYWlseUFycmF5KTtcclxuICAgICAgc29ydGVkLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckV2ZW50cyhvYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeVRvZGF5KGZpbHRlcmVkQnlUeXBlKTtcclxuICAgICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGRhaWx5QXJyYXkpO1xyXG4gICAgICBzb3J0ZWQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXZlbnRzKG9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJPdXRSZW1vdmVkID0gZmlsdGVyUmVtb3ZlZChkYWlseUFycmF5KTtcclxuICAgIGZpbHRlck91dFJlbW92ZWQuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgICByZW5kZXJPYmplY3QocHJvaik7XHJcbiAgICAgIHJlbmRlclByb2pUYXNrKHByb2opO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5lcnMoKTtcclxuICBnZXRDb21wbGV0aW9uKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJPYmplY3QgPSAocHJvaikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdENvbnRhaW5lclwiKTtcclxuXHJcbiAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtwcm9qLmlkfVwiPkQ8L3A+YDtcclxuICBsZXQgYWRkVGFzayA9IGBcclxuICA8ZGl2IGNsYXNzPVwibmV3VGFza1wiIGlkPVwibnQke3Byb2ouaWR9XCI+XHJcbiAgICAgIDxwIGNsYXNzPVwibmV3VGFza19fcFwiPis8L3A+XHJcbiAgPC9kaXY+YDtcclxuXHJcbiAgaWYgKFxyXG4gICAgZ2V0VHlwZSgpID09PSBcImRhaWx5XCIgJiZcclxuICAgIChwcm9qLnR5cGUgPT09IFwicHJvalwiIHx8IHByb2oudHlwZSA9PT0gXCJldmVudHNcIilcclxuICApIHtcclxuICAgIGFkZFRhc2sgPSBgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgICBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICB9XHJcbiAgbGV0IGNoZWNrRWxlbWVudCA9IGAke2FkZFRhc2t9YDtcclxuICBpZiAocHJvai50eXBlID09PSBcImRhaWx5XCIgJiYgcHJvai50YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNoZWNrRWxlbWVudCA9IGAke2FkZFRhc2t9XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjb21wbGV0aW9uXCIgbmFtZT1cImNvbXBsZXRpb25cIiBpZD1cIiR7XCJjXCJ9JHtcclxuICAgICAgcHJvai5pZFxyXG4gICAgfVwiICAke2NoZWNrKHByb2ouY29tcGxldGUpfS8+YDtcclxuICB9IGVsc2UgaWYgKHByb2oudHlwZSA9PT0gXCJkYWlseVwiICYmIHByb2oudGFza3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBjaGVja0VsZW1lbnQgPSBgJHthZGRUYXNrfVxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZWREdWVEYXRlID1cclxuICAgIHByb2ouZHVlRGF0ZSAmJiAhaXNOYU4ocHJvai5kdWVEYXRlKSA/IGZvcm1hdERhdGUocHJvai5kdWVEYXRlKSA6IFwiXCI7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGA8cCBjbGFzcz1cIm9iakRhdGVcIj5EdWU6JHtmb3JtYXR0ZWREdWVEYXRlfTwvcD5gO1xyXG4gIGNvbnN0IGR1ZVRpbWUgPSBgPHAgY2xhc3M9XCJvYmpUaW1lXCI+T246JHtmb3JtYXRUaW1lKHByb2ouZHVlRGF0ZSl9PC9wPmA7XHJcbiAgY29uc3QgT2JqZWN0ID0gYFxyXG48ZGl2IGNsYXNzPVwib2JqZWN0V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7cHJvai5pZH1cIj5cclxuPGRpdiBjbGFzcz1cIm9iamVjdCAke3Byb2oucHJpb3JpdHl9ICR7cHJvai5jb21wbGV0ZX0gJHtcclxuICAgIGdldFR5cGUoKSA9PT0gXCJkYWlseVwiID8gcHJvai50eXBlIDogXCJcIlxyXG4gIH1cIiBpZD1cInBwJHtwcm9qLmlkfVwiPlxyXG4ke2NoZWNrRWxlbWVudH1cclxuICA8cCBjbGFzcz1cIm9ialRpdGxlXCI+JHtwcm9qLnRpdGxlfTwvcD5cclxuICAke1xyXG4gICAgcHJvai50eXBlID09PSBcImRhaWx5XCJcclxuICAgICAgPyBcIlwiXHJcbiAgICAgIDogcHJvai50eXBlID09PSBcInByb2pcIiAmJiBnZXRUeXBlKCkgIT09IFwiZGFpbHlcIlxyXG4gICAgICA/IGR1ZURhdGVcclxuICAgICAgOiBwcm9qLnR5cGUgPT09IFwiZXZlbnRzXCJcclxuICAgICAgPyBkdWVUaW1lXHJcbiAgICAgIDogXCJcIlxyXG4gIH1cclxuICA8cCBjbGFzcz1cIm9iak5vdGVcIiBpZD1cIm9uJHtwcm9qLmlkfVwiPiR7cHJvai5ub3RlID09PSBcIlwiID8gXCJcIiA6IFwiTlwifTwvcD5cclxuICAke2RlbGV0ZUVsZW1lbnR9XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwidGFza1dyYXBwZXJcIiBpZD1cInR3JHtwcm9qLmlkfVwiPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE9iamVjdCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJOb3RlcyA9IChvYmplY3QsIHRhcmdldEdyaWQpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShvYmplY3QuYWRkZWREYXRlKTtcclxuICBjb25zdCBjb250YWluZXIgPSB0YXJnZXRHcmlkO1xyXG4gIGNvbnN0IE5vdGUgPSBgPGRpdiBjbGFzcz1cIm5vdGVXcmFwcGVyIHdyYXBwZXJcIiBpZD1cInB3JHtvYmplY3QuaWR9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlT2JqZWN0XCIgaWQ9XCJubyR7b2JqZWN0LmlkfVwiPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVUaXRsZSBlZGl0YWJsZVwiIGlkPVwibnQke29iamVjdC5pZH1cIiBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+JHtvYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVEYXRlXCIgaWQ9XCJuZCR7b2JqZWN0LmlkfVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlTWFyayAke29iamVjdC5wcmlvcml0eX1cIiBpZD1cIm5tJHtvYmplY3QuaWR9XCI+TVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtvYmplY3QuaWR9XCI+RDwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlQm9keSBlZGl0YWJsZVwiIGlkPVwibmIke29iamVjdC5pZH1cIiBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCI+JHtvYmplY3Qubm90ZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBOb3RlKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckV2ZW50cyA9IChvYmplY3QpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50Tm90ZVdyYXBwZXJcIik7XHJcbiAgY29uc3QgZGF0ZUVsZW1lbnQgPSBvYmplY3QudHlwZSA9PT0gXCJwcm9qXCIgPyBcIlwiIDogZm9ybWF0VGltZShvYmplY3QuZHVlRGF0ZSk7XHJcbiAgY29uc3QgZXZlbnRFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJFdmVudFdyYXBwZXIgd3JhcHBlclwiIGlkPVwicHcke29iamVjdC5pZH1cIj5cclxuICA8ZGl2IGNsYXNzPVwib2JqZWN0ICR7b2JqZWN0LnByaW9yaXR5fSAke29iamVjdC5jb21wbGV0ZX1cIiBpZD1cImVvJHtcclxuICAgIG9iamVjdC5pZFxyXG4gIH0gXCI+XHJcbiAgPHAgY2xhc3M9XCJldmVudERhdGVcIiBpZD1cImVkJHtvYmplY3QuaWR9XCI+JHtkYXRlRWxlbWVudH08L3A+XHJcbiAgPHAgY2xhc3M9XCJldmVudFRpdGxlXCIgaWQ9XCJldCR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0LnRpdGxlfTwvcD5cclxuICA8ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+XHJcbiAgPHAgY2xhc3M9XCJldmVudE5vdGVcIiBpZD1cImVuJHtvYmplY3QuaWR9XCI+JHtvYmplY3Qubm90ZSA/IFwiTlwiIDogXCJcIn08L3A+XHJcbiAgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtvYmplY3QuaWR9XCI+RDwvcD5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBldmVudEVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5vdGVJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIudGFza05vdGUsIC5vYmpOb3RlLCAuZXZlbnROb3RlXCJcclxuICApO1xyXG4gIGNvbnN0IG5ld1Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXdUYXNrXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2JqZWN0XCIpO1xyXG4gIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5UYXNrXCIpO1xyXG4gIGNvbnN0IG1hcmtOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlTWFya1wiKTtcclxuICBjb25zdCBlZGl0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdGFibGVcIik7XHJcbiAgZWRpdGFibGUuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dEV2ZW50KTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dEV2ZW50KTtcclxuICB9KTtcclxuICBuZXdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRXZlbnQpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0V2ZW50KTtcclxuICB9KTtcclxuICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICB9KTtcclxuICBwcm9qZWN0QnRucy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdEV2ZW50KTtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0RXZlbnQpO1xyXG4gIH0pO1xyXG4gIHRhc2tCdG5zLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrRXZlbnQpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tFdmVudCk7XHJcbiAgfSk7XHJcbiAgbWFya05vdGUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtOb3RlRXZlbnQpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXJrTm90ZUV2ZW50KTtcclxuICB9KTtcclxuICBub3RlSW5kaWNhdG9yLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xyXG4gICAgaW5kaWNhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG5vdGVUb29sdGlwKTtcclxuICAgIGluZGljYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCByZW1vdmVUb29sdGlwKTtcclxuICAgIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBub3RlVG9vbHRpcCk7XHJcbiAgICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlVG9vbHRpcCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbnB1dEV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZWRpdE5vdGUoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFByb2plY3RFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdFwiKTtcclxuICBpZiAoXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZU1hcmtcIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3VGFza1wiKSAmJlxyXG4gICAgIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXdUYXNrX19wXCIpXHJcbiAgKSB7XHJcbiAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFza0V2ZW50ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIuVGFza1wiKTtcclxuICBpZiAoIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0aW9uXCIpKSB7XHJcbiAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXJrTm90ZUV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgc3dpdGNoUHJpb3JpdHkoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlRXZlbnQgPSAoZXYpID0+IHtcclxuICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgfVxyXG4gIHJlbW92ZUl0ZW0oZXYpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRhc2tFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm5ld1Rhc2tcIik7XHJcbiAgcmVuZGVyR2V0UG9wVXAodGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcbmltcG9ydCB7IHJlbmRlckJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2pQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIHByb2plY3RzQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJ1dHRvbldyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdQcm9qXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBQcm9qZWN0PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHJlbmRlckJpbigpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2pcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalRhc2sgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtvYmouaWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IG9iai5pZCk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xyXG5cclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgICBkYXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID09PSBudWxsID8gXCJcIiA6IGZvcm1hdHRlZERhdGVcclxuICAgICAgfTwvcD5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0ZUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIgJiYgcHJvamVjdC50eXBlID09PSBcInByb2pcIikge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImR0JHt0YXNrLmlkfVwiPkQ8L3A+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJUYXNrICR7dGFzay5wcmlvcml0eX0gJHt0YXNrLmNvbXBsZXRlfVwiIGlkPVwicHQke3Rhc2suaWR9XCI+XHJcbiAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjb21wbGV0aW9uXCIgbmFtZT1cImNvbXBsZXRpb25cIiBpZD1cImMke1xyXG4gICAgICAgICB0YXNrLmlkXHJcbiAgICAgICB9XCIgICR7Y2hlY2sodGFzay5jb21wbGV0ZSl9Lz5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3A+XHJcbiAgICAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFza05vdGVcIiBpZD1cInRuJHt0YXNrLmlkfVwiPiR7dGFzay5ub3RlID09PSBcIlwiID8gXCJcIiA6IFwiTlwifTwvcD5cclxuICAgICAgICAke2RlbGV0ZUVsZW1lbnR9XHJcbiAgICAgIDwvZGl2PlxyXG5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBuZXdUYXNrKTtcclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrKGNvbXBsZXRlKSB7XHJcbiAgaWYgKGNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gJ2NoZWNrZWQ9XCJjaGVja2VkXCInO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc29ydEFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgcHJpb3JpdHlPcmRlciA9IHtcclxuICAgIGxvdzogMyxcclxuICAgIG1lZDogMixcclxuICAgIGhpZ2g6IDEsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQnlQcmlvcml0eSA9IHNvcnRUYXNrcyhhcnJheSwgcHJpb3JpdHlPcmRlcikuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgcHJpb3JpdHlDb21wID0gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XSAtIHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgICBpZiAocHJpb3JpdHlDb21wICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBwcmlvcml0eUNvbXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzb3J0ZWRCeVByaW9yaXR5O1xyXG59O1xyXG5cclxuY29uc3Qgc29ydFRhc2tzID0gKGFycmF5LCBvcmRlcikgPT4ge1xyXG4gIHJldHVybiBhcnJheS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAuLi5pdGVtLFxyXG4gICAgdGFza3M6IGl0ZW0udGFza3Muc29ydCgoYSwgYikgPT4gb3JkZXJbYS5wcmlvcml0eV0gLSBvcmRlcltiLnByaW9yaXR5XSksXHJcbiAgfSkpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBlZGl0UHJpb3JpdHkgfSBmcm9tIFwiLi9lZGl0UHJpb3JpdHlcIjtcclxuaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b0xvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXYudGFyZ2V0LmlkfWApO1xyXG4gIGlmIChwcmlvckVsZW1lbnQpIHtcclxuICAgIGlmIChwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG93XCIpKSB7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIFwiaGlnaFwiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmlvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gICAgICBwcmlvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBcImxvd1wiKTtcclxuICAgICAgaWYgKGV2LnRhcmdldC5pZC5zdGFydHNXaXRoKFwibm1cIikpIHtcclxuICAgICAgICBlZGl0UHJpb3JpdHkoZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgc3RvcmVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBiaW4gfSBmcm9tIFwiLi9yZW1vdmVDb21wbGV0ZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRJZFwiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRJZCkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmluXCIsIEpTT04uc3RyaW5naWZ5KGJpbikpO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2pQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUHJvalBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRXZlbnRzUGFnZSB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyRGFpbHlQYWdlIH0gZnJvbSBcIi4vcmVuZGVyRGFpbHlQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXphdGlvbiB9IGZyb20gXCIuL2luaXRpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL2NsZWFyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJOb3Rlc1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJOb3Rlc1BhZ2VcIjtcclxuaW1wb3J0IHsgaGFuZGxlRXNjYXBlIH0gZnJvbSBcIi4vaGFuZGxlRXNjYXBlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVudGVyIH0gZnJvbSBcIi4vaGFuZGxlRW50ZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tEdWVEYXRlc0FuZFJlbW92ZUNvbXBsZXRlZCB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJEYWlseVBhZ2UsIHJlbmRlckZvb3Rlcik7XHJcblxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIubmF2TGlcIik7XHJcbiAgICBjbGVhclBhZ2UoKTtcclxuICAgIHJlbmRlclBhZ2UoXHJcbiAgICAgIHRhcmdldC5pZCxcclxuICAgICAgcmVuZGVyUHJvalBhZ2UsXHJcbiAgICAgIHJlbmRlckRhaWx5UGFnZSxcclxuICAgICAgcmVuZGVyRXZlbnRzUGFnZSxcclxuICAgICAgcmVuZGVyTm90ZXNQYWdlXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQsIDEwMDAgKiA2MCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVudGVyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9