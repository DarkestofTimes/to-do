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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/trash-can-outline.svg */ "./src/img/trash-can-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/notebook.svg */ "./src/img/notebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/star.svg */ "./src/img/star.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  /* VARIABLES */
  --BODY-GRAD: linear-gradient(to bottom, #393939 0%, #151515 100%);
  --HEADER-BG-C: black;
  --HEADER-C: aliceblue;
  --HEADER-ALT-C: hsl(270, 50%, 30%);
  --OBJECT-BG-C: hsl(300, 31%, 25%);
  --OBJECT-OPC-C: hsla(300, 28%, 19%, 0.648);
  --OBJECT-C: aliceblue;
  --OBJECT-ALT-C: hsl(270, 50%, 30%);
  --OBJECT-ALT2-C: hsl(0, 0%, 14%);
  --OBJECT-ICONS: hsl(211, 100%, 44%);
  --MAIN-BG-C: darkseagreen;
  --MAIN-C: aliceblue;
  --CALENDAR-BG-C: linear-gradient(to bottom, #4949498e 0%, #24242488 100%);
  --CALENDAR-C: black;
  --CALENDAR-ALT-BG-C: hsla(208, 100%, 97%, 0.274);
  --CALENDAR-ALT-C: aliceblue;
  --CALENDAR-HOVER-BG-C: rgba(0, 0, 0, 0.429);
  --WEEKEND: rgb(0, 0, 0);
  --BOX-SHADOW-C: black;
  /* PRIORITY */
  --PRIORITY-LOW: green;
  --PRIORITY-MED: yellow;
  --PRIORITY-HIGH: red;
  /* POPUP */
  --POPUP-BG-C: hsl(270, 51%, 29%);
  --POPUP-C: aliceblue;
  --POPUP-ALT-C: black;
}

body {
  display: grid;
  grid-template-rows: 11vh 86vh 4vh;
  overflow: hidden;
  background: var(--BODY-GRAD);
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
  background-color: var(--HEADER-ALT-C);
}

/* HEADER ACTIVE */

.navLi.active .navSpan {
  transform: translateY(15px);
}
.navLi.active .navSpan::before {
  opacity: 1;
}
.navLi.active {
  background-color: var(--HEADER-ALT-C);
}

/* SIDEPANEL */

@media (min-width: 768px) {
  body {
    grid-template-columns: 15% 1fr;
    height: 100vh;
  }
  header {
    grid-column: 1 / 2;
    grid-row: 1/ -1;
  }
  .navbar {
    position: relative;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    position: relative;
  }

  .navUl {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row: 2 / 4;
    padding: 0;
  }
  .navLi {
    width: 100%;
  }
  main {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
  }
  footer {
    grid-column: 2/ -1;
    grid-row: 3 / -1;
  }
}

/* MAIN */

main {
  height: 0;
  min-height: 100%;
  overflow-y: auto;
}

.listContainer {
  padding: 1rem clamp(0.2rem, 10%, 6rem);
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
  grid-template-columns: 2.5rem 4fr 1rem 1fr 1.3rem;
  background-color: var(--OBJECT-BG-C);
  color: var(--OBJECT-C);
  gap: 0.5rem;
  padding: 0 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
  /*  position: relative; */
}
.objDate,
.taskDate {
  font-size: 0.7rem;
  text-align: center;
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
  grid-template-columns: 1rem 4fr 1.3rem 1fr 1.3rem;
  gap: 0.5rem;
  align-items: center;
  padding: 0 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
  /* position: relative */
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
.objTime {
  text-align: center;
}
.delete {
  text-align: center;
  cursor: pointer;
}

.dailyContainer .object {
  grid-template-columns: 2.5rem 1rem 4fr 1rem 1fr 1.3rem;
}
.dailyContainer .Task {
  grid-template-columns: 1rem 4fr 1rem 1fr 1.3rem;
}
/* PROJ */

.object.proj {
  grid-template-columns: 2.5rem 1rem 4fr 1rem 1fr 1.3rem;
}

/* DAILY */

.object.events {
  display: grid;
  grid-template-columns: 2.5rem 1rem 4fr 1rem 1fr 1.3rem;
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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

@media (min-width: 700px) {
  #two {
    display: grid;
  }
}
@media (min-width: 1160) {
  #three {
    display: grid;
  }
}
@media (min-width: 1358px) {
  #four {
    display: grid;
  }
}
.noteObject {
  height: max-content;
  width: clamp(260px, 100%, 400px);
  padding: 0.5rem;
  overflow-x: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: var(--OBJECT-BG-C);
  color: var(--OBJECT-C);
  row-gap: 0.5rem;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 3px var(--BOX-SHADOW-C);
}
.noteObject > .high {
  /* background-color: var(--PRIORITY-HIGH); */
  outline: none;
  text-align: center;
}
.noteObject > .low {
  /*  background-color: var(--PRIORITY-LOW); */
  outline: none;
  text-align: center;
}
.noteDate {
  text-align: center;
  grid-row: 3/4;
  grid-column: 2/3;
}
.noteMark {
  cursor: pointer;
  height: 100%;
  display: grid;
  place-items: center;
  grid-row: 3/4;
}

.noteTitle {
  background-color: var(--OBJECT-ALT2-C);
  padding: 0.2rem;
  font-size: 1.2rem;
  grid-column: 1/-1;
}
.noteBody {
  max-width: 100%;
  grid-row: 2 / 3;
  grid-column: 1/-1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  background-color: var(--OBJECT-ALT2-C);
  padding: 0.3rem;
}

/* EVENTS */

.eventsContainer {
  height: 80vh;
  width: clamp(300px, 100%, 700px);
  background: var(--CALENDAR-BG-C);
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
  color: var(--CALENDAR-ALT-C);
}
.headings {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  font-weight: bold;
  place-items: center;
  margin-bottom: 0.5rem;
}
.dateWrapper {
  color: var(--CALENDAR-ALT-C);
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
  font-size: clamp(1rem, 1.7rem, 2.2rem);
}
.calendarDay::before {
  position: absolute;
  content: "";
  height: 35px;
  width: 35px;
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
  gap: 0.5rem;
  overflow-y: auto;
}

.weekEnd {
  color: var(--WEEKEND);
}
.currentDay::before {
  background-color: var(--CALENDAR-ALT-C);
}
.arrow {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.arrow:hover,
.arrow:focus {
  transform: scale(1.2);
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

/* .noteMark.low {
  outline: none;
  background-color: var(--PRIORITY-LOW);
}
.noteMark.high {
  outline: none;
  background-color: var(--PRIORITY-HIGH);
} */

/* COMPLETED */

.true {
  background-color: var(--OBJECT-OPC-C);
}
.true > :not(.delete, .objNote, .taskNote, .eventNote, .completion, .toolTip) {
  text-decoration: line-through;
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
  width: 15rem;
  height: min-content;
  top: 0;
  right: clamp(7rem, 30%, 22rem);
  background-color: var(--POPUP-BG-C);
  padding: 0.5rem;
  z-index: 4;
  white-space: normal;
  overflow-wrap: break-word;
}
.toolTip__p {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 4;
}

/* ICONS */

.delete::after {
  display: block;
  margin: auto;
  height: 25px;
  width: 25px;
  content: "";
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat 50% 50%;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: var(--OBJECT-C);
}
.delete:hover::after {
  background-color: var(--OBJECT-ICONS);
}

.objNote::after,
.taskNote::after,
.eventNote::after {
  display: block;
  margin: auto;
  height: 25px;
  width: 25px;
  content: "";
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat 50% 50%;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: var(--OBJECT-C);
}
.objNote:hover::after,
.taskNote:hover::after,
.eventNote:hover::after {
  background-color: var(--OBJECT-ICONS);
}

.noteMark::after {
  display: block;
  margin: auto;
  height: 25px;
  width: 25px;
  content: "";
  -webkit-mask: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat 50% 50%;
  mask: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}
.noteMark:hover::after {
  background-color: var(--OBJECT-ICONS);
}
.low.noteMark::after {
  outline: none;
  background-color: var(--PRIORITY-LOW);
}
.high.noteMark::after {
  outline: none;
  background-color: var(--PRIORITY-HIGH);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;;;EAGE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,sDAAsD;AACxD;AACA;EACE,+CAA+C;AACjD;AACA,SAAS;;AAET;EACE,sDAAsD;AACxD;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,sDAAsD;AACxD;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,4DAA4D;AAC9D;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,2DAA2D;EAC3D,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE;IACE,aAAa;EACf;AACF;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,oCAAoC;EACpC,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,qDAAqD;EACrD,uCAAuC;AACzC;AACA;EACE,4CAA4C;EAC5C,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,4CAA4C;EAC5C,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,sCAAsC;EACtC,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,sCAAsC;EACtC,eAAe;AACjB;;AAEA,WAAW;;AAEX;EACE,YAAY;EACZ,gCAAgC;EAChC,gCAAgC;EAChC,wBAAwB;EACxB,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,sCAAsC;AACxC;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,YAAY;AACd;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,YAAY;EACZ,aAAa;EACb,2CAA2C;EAC3C,WAAW;EACX,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,uCAAuC;AACzC;AACA;EACE,wEAAwE;EACxE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,+BAA+B;AACjC;AACA;;EAEE,qBAAqB;AACvB;;AAEA,aAAa;;AAEb;EACE,wBAAwB;EACxB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,uCAAuC;AACzC;;AAEA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sCAAsC;AACxC;;AAEA;;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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  /* VARIABLES */\r\n  --BODY-GRAD: linear-gradient(to bottom, #393939 0%, #151515 100%);\r\n  --HEADER-BG-C: black;\r\n  --HEADER-C: aliceblue;\r\n  --HEADER-ALT-C: hsl(270, 50%, 30%);\r\n  --OBJECT-BG-C: hsl(300, 31%, 25%);\r\n  --OBJECT-OPC-C: hsla(300, 28%, 19%, 0.648);\r\n  --OBJECT-C: aliceblue;\r\n  --OBJECT-ALT-C: hsl(270, 50%, 30%);\r\n  --OBJECT-ALT2-C: hsl(0, 0%, 14%);\r\n  --OBJECT-ICONS: hsl(211, 100%, 44%);\r\n  --MAIN-BG-C: darkseagreen;\r\n  --MAIN-C: aliceblue;\r\n  --CALENDAR-BG-C: linear-gradient(to bottom, #4949498e 0%, #24242488 100%);\r\n  --CALENDAR-C: black;\r\n  --CALENDAR-ALT-BG-C: hsla(208, 100%, 97%, 0.274);\r\n  --CALENDAR-ALT-C: aliceblue;\r\n  --CALENDAR-HOVER-BG-C: rgba(0, 0, 0, 0.429);\r\n  --WEEKEND: rgb(0, 0, 0);\r\n  --BOX-SHADOW-C: black;\r\n  /* PRIORITY */\r\n  --PRIORITY-LOW: green;\r\n  --PRIORITY-MED: yellow;\r\n  --PRIORITY-HIGH: red;\r\n  /* POPUP */\r\n  --POPUP-BG-C: hsl(270, 51%, 29%);\r\n  --POPUP-C: aliceblue;\r\n  --POPUP-ALT-C: black;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 11vh 86vh 4vh;\r\n  overflow: hidden;\r\n  background: var(--BODY-GRAD);\r\n}\r\n\r\n/* HEADER */\r\n\r\n.navbar {\r\n  height: 100%;\r\n}\r\n\r\n.navUl {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  padding: 0 2rem;\r\n}\r\n\r\n.navLi {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n  background-color: transparent;\r\n  color: var(--HEADER-ALT2);\r\n  border: none;\r\n  list-style-type: none;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.navSpan {\r\n  width: max-content;\r\n  user-select: none;\r\n  display: inline-block;\r\n  transition: transform 0.3s ease;\r\n  color: var(--HEADER-C);\r\n}\r\n.navSpan::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -7px;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--HEADER-C);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n}\r\n.navLi:hover .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi:hover .navSpan::before {\r\n  opacity: 1;\r\n}\r\n.navLi:hover {\r\n  background-color: var(--HEADER-ALT-C);\r\n}\r\n\r\n/* HEADER ACTIVE */\r\n\r\n.navLi.active .navSpan {\r\n  transform: translateY(15px);\r\n}\r\n.navLi.active .navSpan::before {\r\n  opacity: 1;\r\n}\r\n.navLi.active {\r\n  background-color: var(--HEADER-ALT-C);\r\n}\r\n\r\n/* SIDEPANEL */\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    grid-template-columns: 15% 1fr;\r\n    height: 100vh;\r\n  }\r\n  header {\r\n    grid-column: 1 / 2;\r\n    grid-row: 1/ -1;\r\n  }\r\n  .navbar {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-rows: repeat(5, 1fr);\r\n    position: relative;\r\n  }\r\n\r\n  .navUl {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: repeat(4, 1fr);\r\n    grid-row: 2 / 4;\r\n    padding: 0;\r\n  }\r\n  .navLi {\r\n    width: 100%;\r\n  }\r\n  main {\r\n    grid-column: 2 / -1;\r\n    grid-row: 2 / 3;\r\n  }\r\n  footer {\r\n    grid-column: 2/ -1;\r\n    grid-row: 3 / -1;\r\n  }\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  height: 0;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.listContainer {\r\n  padding: 1rem clamp(0.2rem, 10%, 6rem);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: min-content;\r\n  justify-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.objectWrapper {\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.object {\r\n  width: 100%;\r\n  height: 2rem;\r\n  align-items: center;\r\n  display: grid;\r\n  grid-template-columns: 2.5rem 4fr 1rem 1fr 1.3rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  gap: 0.5rem;\r\n  padding: 0 0.5rem;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n  /*  position: relative; */\r\n}\r\n.objDate,\r\n.taskDate {\r\n  font-size: 0.7rem;\r\n  text-align: center;\r\n}\r\n\r\n.newObject,\r\n.newNote {\r\n  height: 2rem;\r\n  padding: 0.5rem 1rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  cursor: pointer;\r\n  margin-bottom: 1rem;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n  text-align: center;\r\n}\r\n\r\n.newObject:hover,\r\n.newNote:hover,\r\n.newObject:focus,\r\n.newNote:focus {\r\n  transform: scale(1.05);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.object:hover,\r\n.object:focus,\r\n.object:active,\r\n.noteObject:hover,\r\n.nodeObject:focus,\r\n.noteObject:active {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.taskWrapper {\r\n  padding-left: 3rem;\r\n  display: grid;\r\n  grid-template-rows: min-content;\r\n  gap: 0.5rem;\r\n}\r\n.Task {\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  grid-template-columns: 1rem 4fr 1.3rem 1fr 1.3rem;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  padding: 0 0.5rem;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n  /* position: relative */\r\n}\r\n.newTask {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  margin: -0.5rem;\r\n  width: 3rem;\r\n  font-size: 1.7rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  display: grid;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.Task:hover,\r\n.Task:focus,\r\n.Task:active {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.objTitle,\r\n.taskTitle,\r\n.eventTitle,\r\n.noteTitle {\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  font-weight: 500;\r\n  padding: 0.2rem;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n.noteTitle {\r\n  cursor: auto;\r\n}\r\n.objNote,\r\n.taskNote,\r\n.eventNote {\r\n  cursor: pointer;\r\n}\r\n.objTime {\r\n  text-align: center;\r\n}\r\n.delete {\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.dailyContainer .object {\r\n  grid-template-columns: 2.5rem 1rem 4fr 1rem 1fr 1.3rem;\r\n}\r\n.dailyContainer .Task {\r\n  grid-template-columns: 1rem 4fr 1rem 1fr 1.3rem;\r\n}\r\n/* PROJ */\r\n\r\n.object.proj {\r\n  grid-template-columns: 2.5rem 1rem 4fr 1rem 1fr 1.3rem;\r\n}\r\n\r\n/* DAILY */\r\n\r\n.object.events {\r\n  display: grid;\r\n  grid-template-columns: 2.5rem 1rem 4fr 1rem 1fr 1.3rem;\r\n}\r\n\r\n/* NOTES */\r\n\r\n.notesContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r\n}\r\n.newNote {\r\n  height: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.bigGrid {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r\n  grid-column: 1/-1;\r\n  gap: 0.5rem;\r\n}\r\n.colGrid {\r\n  height: min-content;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n}\r\n\r\n#one {\r\n  display: grid;\r\n}\r\n#two {\r\n  display: none;\r\n}\r\n#three {\r\n  display: none;\r\n}\r\n#four {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 700px) {\r\n  #two {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 1160) {\r\n  #three {\r\n    display: grid;\r\n  }\r\n}\r\n@media (min-width: 1358px) {\r\n  #four {\r\n    display: grid;\r\n  }\r\n}\r\n.noteObject {\r\n  height: max-content;\r\n  width: clamp(260px, 100%, 400px);\r\n  padding: 0.5rem;\r\n  overflow-x: auto;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n  background-color: var(--OBJECT-BG-C);\r\n  color: var(--OBJECT-C);\r\n  row-gap: 0.5rem;\r\n  align-items: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.noteObject > .high {\r\n  /* background-color: var(--PRIORITY-HIGH); */\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteObject > .low {\r\n  /*  background-color: var(--PRIORITY-LOW); */\r\n  outline: none;\r\n  text-align: center;\r\n}\r\n.noteDate {\r\n  text-align: center;\r\n  grid-row: 3/4;\r\n  grid-column: 2/3;\r\n}\r\n.noteMark {\r\n  cursor: pointer;\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n  grid-row: 3/4;\r\n}\r\n\r\n.noteTitle {\r\n  background-color: var(--OBJECT-ALT2-C);\r\n  padding: 0.2rem;\r\n  font-size: 1.2rem;\r\n  grid-column: 1/-1;\r\n}\r\n.noteBody {\r\n  max-width: 100%;\r\n  grid-row: 2 / 3;\r\n  grid-column: 1/-1;\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  background-color: var(--OBJECT-ALT2-C);\r\n  padding: 0.3rem;\r\n}\r\n\r\n/* EVENTS */\r\n\r\n.eventsContainer {\r\n  height: 80vh;\r\n  width: clamp(300px, 100%, 700px);\r\n  background: var(--CALENDAR-BG-C);\r\n  color: var(--CALENDAR-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 8fr;\r\n}\r\n\r\n.dateWrapper {\r\n  height: 7vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  place-items: center;\r\n}\r\n\r\n.calendarWrapper {\r\n  padding: 1rem;\r\n  color: var(--CALENDAR-ALT-C);\r\n}\r\n.headings {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  font-weight: bold;\r\n  place-items: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.dateWrapper {\r\n  color: var(--CALENDAR-ALT-C);\r\n}\r\n.calendarDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  list-style-type: none;\r\n  place-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n.calendarDay {\r\n  position: relative;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  font-size: clamp(1rem, 1.7rem, 2.2rem);\r\n}\r\n.calendarDay::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 35px;\r\n  width: 35px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  border-radius: 5px;\r\n}\r\n.calendarDay:hover::before {\r\n  background: var(--CALENDAR-HOVER-BG-C);\r\n}\r\n.inactive {\r\n  opacity: 0.5;\r\n}\r\n.selected::before {\r\n  border: 2px solid var(--CALENDAR-ALT-BG-C);\r\n}\r\n.eventNoteWrapper {\r\n  height: 42vh;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fill, 2rem);\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  gap: 0.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.weekEnd {\r\n  color: var(--WEEKEND);\r\n}\r\n.currentDay::before {\r\n  background-color: var(--CALENDAR-ALT-C);\r\n}\r\n.arrow {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: transform 0.2s ease;\r\n}\r\n.arrow:hover,\r\n.arrow:focus {\r\n  transform: scale(1.2);\r\n}\r\n\r\n/* PRIORITY */\r\n\r\n.priority {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  margin: 5px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.priority::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.priority:checked::before {\r\n  border: 2px solid var(--POPUP-C);\r\n}\r\n#low::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n#med::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n#high::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n.low {\r\n  outline: 3px solid var(--PRIORITY-LOW);\r\n}\r\n.med {\r\n  outline: 3px solid var(--PRIORITY-MED);\r\n}\r\n.high {\r\n  outline: 3px solid var(--PRIORITY-HIGH);\r\n}\r\n\r\n.eventlow::before {\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n.eventmed::before {\r\n  background-color: var(--PRIORITY-MED);\r\n}\r\n.eventhigh::before {\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n\r\n/* .noteMark.low {\r\n  outline: none;\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n.noteMark.high {\r\n  outline: none;\r\n  background-color: var(--PRIORITY-HIGH);\r\n} */\r\n\r\n/* COMPLETED */\r\n\r\n.true {\r\n  background-color: var(--OBJECT-OPC-C);\r\n}\r\n.true > :not(.delete, .objNote, .taskNote, .eventNote, .completion, .toolTip) {\r\n  text-decoration: line-through;\r\n  opacity: 0.7;\r\n}\r\n.false {\r\n  opacity: 1;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n  text-align: center;\r\n}\r\n.footerA:any-link {\r\n  color: var(--HEADER-C);\r\n}\r\n\r\n/* BIN */\r\n.buttonWrapper {\r\n  display: grid;\r\n  width: 80%;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  justify-content: center;\r\n  grid-column: 1/-1;\r\n  justify-self: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.binBtn {\r\n  display: grid;\r\n  place-content: center;\r\n  height: 2rem;\r\n  background-color: var(--OBJECT-ALT-C);\r\n  color: var(--OBJECT-C);\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 0 3px var(--BOX-SHADOW-C);\r\n}\r\n.binBtn:focus,\r\n.binBtn:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 1px 1px 5px var(--BOX-SHADOW-C);\r\n}\r\n\r\n.binBox {\r\n  height: 70%;\r\n  width: clamp(300px, 90%, 700px);\r\n  border: 2px solid var(--POPUP-C);\r\n  background-color: var(--POPUP-BG-C);\r\n  display: grid;\r\n  grid-template-rows: 1fr 9fr 1fr;\r\n  justify-items: center;\r\n}\r\n.closePopUp {\r\n  width: 100%;\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\n.binInsides {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit);\r\n  gap: 0.5rem;\r\n  align-content: start;\r\n}\r\n.binWrapper {\r\n  width: 100%;\r\n}\r\n.binWrapper > .object {\r\n  display: grid;\r\n  grid-template-columns: 4fr max-content min-content 2rem;\r\n}\r\n\r\n/* POPUP */\r\n\r\n.popUpContainer {\r\n  position: absolute;\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: hsla(0, 0%, 0%, 0.495);\r\n  color: var(--POPUP-C);\r\n  overflow: hidden;\r\n  place-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.popUpfield {\r\n  position: relative;\r\n  height: 80%;\r\n  width: clamp(300px, 90%, 800px);\r\n  display: grid;\r\n  background-color: var(--POPUP-BG-C);\r\n  color: var(--POPUP-C);\r\n  padding: 1rem;\r\n  gap: 0.5rem;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.priorityWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.dueWrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  place-content: center;\r\n}\r\n\r\n.input {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  padding: 0.5rem;\r\n  border: none;\r\n}\r\n.input::-webkit-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\n.input::-moz-calendar-picker-indicator {\r\n  filter: invert(1);\r\n}\r\ntextarea {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  resize: none;\r\n  padding: 0.5rem;\r\n  border: none;\r\n}\r\n.popUpButton {\r\n  background-color: var(--POPUP-ALT-C);\r\n  color: var(--POPUP-C);\r\n  cursor: pointer;\r\n}\r\nbutton {\r\n  border: none;\r\n}\r\n\r\n/* CHECKBOX */\r\n\r\ninput[type=\"checkbox\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  margin: 0;\r\n  font: inherit;\r\n  color: currentColor;\r\n  width: 1.15em;\r\n  height: 1.15em;\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n  content: \"\";\r\n  width: 0.65em;\r\n  height: 0.65em;\r\n  transform: scale(0);\r\n  transition: 120ms transform ease-in-out;\r\n  box-shadow: inset 1em 1em var(--POPUP-ALT-C);\r\n  background-color: CanvasText;\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n  transform: scale(1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus {\r\n  outline: max(2px, 0.15em) solid currentColor;\r\n  outline-offset: max(2px, 0.15em);\r\n}\r\n\r\n/* TOOLTIP */\r\n\r\n.toolTip {\r\n  position: absolute;\r\n  width: 15rem;\r\n  height: min-content;\r\n  top: 0;\r\n  right: clamp(7rem, 30%, 22rem);\r\n  background-color: var(--POPUP-BG-C);\r\n  padding: 0.5rem;\r\n  z-index: 4;\r\n  white-space: normal;\r\n  overflow-wrap: break-word;\r\n}\r\n.toolTip__p {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 4;\r\n}\r\n\r\n/* ICONS */\r\n\r\n.delete::after {\r\n  display: block;\r\n  margin: auto;\r\n  height: 25px;\r\n  width: 25px;\r\n  content: \"\";\r\n  -webkit-mask: url(./img/trash-can-outline.svg) no-repeat 50% 50%;\r\n  mask: url(./img/trash-can-outline.svg) no-repeat 50% 50%;\r\n  -webkit-mask-size: cover;\r\n  mask-size: cover;\r\n  background-color: var(--OBJECT-C);\r\n}\r\n.delete:hover::after {\r\n  background-color: var(--OBJECT-ICONS);\r\n}\r\n\r\n.objNote::after,\r\n.taskNote::after,\r\n.eventNote::after {\r\n  display: block;\r\n  margin: auto;\r\n  height: 25px;\r\n  width: 25px;\r\n  content: \"\";\r\n  -webkit-mask: url(./img/notebook.svg) no-repeat 50% 50%;\r\n  mask: url(./img/notebook.svg) no-repeat 50% 50%;\r\n  -webkit-mask-size: cover;\r\n  mask-size: cover;\r\n  background-color: var(--OBJECT-C);\r\n}\r\n.objNote:hover::after,\r\n.taskNote:hover::after,\r\n.eventNote:hover::after {\r\n  background-color: var(--OBJECT-ICONS);\r\n}\r\n\r\n.noteMark::after {\r\n  display: block;\r\n  margin: auto;\r\n  height: 25px;\r\n  width: 25px;\r\n  content: \"\";\r\n  -webkit-mask: url(./img/star.svg) no-repeat 50% 50%;\r\n  mask: url(./img/star.svg) no-repeat 50% 50%;\r\n  -webkit-mask-size: cover;\r\n  mask-size: cover;\r\n}\r\n.noteMark:hover::after {\r\n  background-color: var(--OBJECT-ICONS);\r\n}\r\n.low.noteMark::after {\r\n  outline: none;\r\n  background-color: var(--PRIORITY-LOW);\r\n}\r\n.high.noteMark::after {\r\n  outline: none;\r\n  background-color: var(--PRIORITY-HIGH);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony export */   addObject: () => (/* binding */ addObject),
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
/* harmony import */ var _prepopulate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prepopulate */ "./src/prepopulate.js");




const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#daily");
  button.classList.add("active");
  piece2();
  piece3();
  (0,_isLocalStorageAvailable__WEBPACK_IMPORTED_MODULE_0__.isLocalStorageAvailable)();
  (0,_prepopulate__WEBPACK_IMPORTED_MODULE_2__.prepopulate)();
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

/***/ "./src/prepopulate.js":
/*!****************************!*\
  !*** ./src/prepopulate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepopulate: () => (/* binding */ prepopulate)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _getObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getObject */ "./src/getObject.js");
/* harmony import */ var _idGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idGenerator */ "./src/idGenerator.js");




const prepopulate = () => {
  const projectsJSON = localStorage.getItem("projects");
  const parsedProjects = JSON.parse(projectsJSON);
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_2__.generatedId)();
  const title = "Create To-Do list";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = "";
  const complete = false;
  const priority = "high";
  const note = "Create some basic to-do";
  const type = "proj";
  if (_projects__WEBPACK_IMPORTED_MODULE_0__.projects.length === 0 && parsedProjects === null) {
    (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.addObject)(
      null,
      title,
      id,
      dueDate,
      completionDate,
      complete,
      priority,
      note,
      type
    );
    addTask1(id);
    addTask2(id);
    addTask3(id);
  }
};

const addTask1 = (ObjId) => {
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_2__.generatedId)();
  const title = "Add different pages";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = new Date();
  const complete = true;
  const priority = "high";
  const note = "For projects, daily stuff, events and notes";
  const type = "proj";
  (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.addObject)(
    ObjId,
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

const addTask2 = (ObjId) => {
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_2__.generatedId)();
  const title = "Make it work with localStorage";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = new Date();
  const complete = true;
  const priority = "med";
  const note = "And add preexisting project";
  const type = "proj";
  (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.addObject)(
    ObjId,
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

const addTask3 = (ObjId) => {
  const id = (0,_idGenerator__WEBPACK_IMPORTED_MODULE_2__.generatedId)();
  const title = "Make it pretty";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = null;
  const complete = false;
  const priority = "low";
  const note = "Add some reactivity and some fancy gradients and whatnot";
  const type = "proj";
  (0,_getObject__WEBPACK_IMPORTED_MODULE_1__.addObject)(
    ObjId,
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
  <p class="delete" id="dp${item.id}"></p>
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
    const isPast =
      /* i < currentDay &&
      month <= currentMonth && */
      new Date(year, month, i) <
      new Date(currentYear, currentMonth, currentDay);
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
    <div class="noteMark low" data-priority="low" id="notePriority"></div>
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

  let deleteElement = `<p class="delete" id="dp${proj.id}"></p>`;
  let addTask = `
  <div class="newTask" id="nt${proj.id}">
      <p class="newTask__p">+</p>
  </div>`;

  if (
    (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily" &&
    (proj.type === "proj" || proj.type === "events")
  ) {
    addTask = `<div class="filler"></div>
    <div class="filler"></div>`;
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
    <div class="filler"></div>
    `;
  }

  const formattedDueDate =
    proj.dueDate && !isNaN(proj.dueDate) ? (0,_formatDate__WEBPACK_IMPORTED_MODULE_13__.formatDate)(proj.dueDate) : "";
  const dueDate = `<p class="objDate">${formattedDueDate}</p>`;
  const dueTime = `<p class="objTime">${(0,_formatTime__WEBPACK_IMPORTED_MODULE_14__.formatTime)(proj.dueDate)}</p>`;
  const Object = `
<div class="objectWrapper wrapper" id="pw${proj.id}">
<div class="object ${proj.priority} ${proj.complete} ${
    (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() === "daily" ? proj.type : ""
  }" id="pp${proj.id}">
${checkElement}
  <p class="objTitle">${proj.title}</p>
  <p class="objNote" id="on${proj.id}"></p>
  ${
    proj.type === "daily"
      ? `<div class="filler"></div>`
      : proj.type === "proj" && (0,_getType__WEBPACK_IMPORTED_MODULE_9__.getType)() !== "daily"
      ? dueDate
      : proj.type === "events"
      ? dueTime
      : ""
  }

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
      <div class="noteMark ${object.priority}" id="nm${object.id}">
      </div>
      <p class="noteTitle editable" id="nt${object.id}" contentEditable="true">${object.title}</p>
      <p class="noteDate" id="nd${object.id}">${formattedDate}</p>
      
      <p class="delete" id="dp${object.id}"></p>
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
  <p class="eventNote" id="en${object.id}">${object.note ? "" : ""}</p>
  <div class="filler"></div>
  <p class="delete" id="dp${object.id}"></p>
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
      deleteElement = `<p class="delete" id="dt${task.id}"></p>`;
    }
    const newTask = `
      <div class="Task ${task.priority} ${task.complete}" id="pt${task.id}">
       <input type="checkbox" class="completion" name="completion" id="c${
         task.id
       }"  ${check(task.complete)}/>
        <p class="taskTitle">${task.title}</p>
        <p class="taskNote" id="tn${task.id}"></p>
       ${dateElement}
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


/***/ }),

/***/ "./src/img/notebook.svg":
/*!******************************!*\
  !*** ./src/img/notebook.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9abe9c8f7de33b9b17e.svg";

/***/ }),

/***/ "./src/img/star.svg":
/*!**************************!*\
  !*** ./src/img/star.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7ced177d66bb006694.svg";

/***/ }),

/***/ "./src/img/trash-can-outline.svg":
/*!***************************************!*\
  !*** ./src/img/trash-can-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0Qyx5R0FBaUM7QUFDN0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RCxjQUFjLG1DQUFtQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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LGFBQWEseURBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0NBQVE7QUFDZCxJQUFJLHFEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseURBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseURBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseURBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnNDO0FBQ1U7QUFDRTtBQUNSO0FBQ25DO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q3dCO0FBQ3BFO0FBQ0EsK0RBQWMsQ0FBQyxpREFBWSxFQUFFLDZEQUFlLEVBQUUsaURBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVM7QUFDYixJQUFJLHVEQUFVO0FBQ2Q7QUFDQSxNQUFNLDJEQUFjO0FBQ3BCLE1BQU0sNkRBQWU7QUFDckIsTUFBTSwrREFBZ0I7QUFDdEIsTUFBTSw2REFBZTtBQUNyQjtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxZQUFZLDhFQUErQjtBQUMzQyxxQ0FBcUMsd0RBQVk7QUFDakQscUNBQXFDLHNEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NsZWFyUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xlYXJSZW5kZXJlZFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXROb3RlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2VkaXRQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeURhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyQnlUb2RheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9maWx0ZXJCeVR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZmlsdGVyTm90ZUdyaWRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2ZpbHRlclJlbW92ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm1hdERhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9ybWF0VGltZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mcm9tTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldENvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZ2V0T2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dldFR5cGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGFuZGxlRW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGFuZGxlRXNjYXBlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pc0xvY2FsU3RvcmFnZUF2YWlsYWJsZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ub3RlVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYXJzZUlzb0RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJlcG9wdWxhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVtb3ZlQ29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbW92ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyQmluLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlckRhaWx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJFZGl0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyRXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJHZXRQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJOb3Rlc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcmVuZGVyT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlbmRlclByb2pUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zd2l0Y2hQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90cmFzaC1jYW4tb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9ub3RlYm9vay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9zdGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLyogVkFSSUFCTEVTICovXHJcbiAgLS1CT0RZLUdSQUQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzOTM5MzkgMCUsICMxNTE1MTUgMTAwJSk7XHJcbiAgLS1IRUFERVItQkctQzogYmxhY2s7XHJcbiAgLS1IRUFERVItQzogYWxpY2VibHVlO1xyXG4gIC0tSEVBREVSLUFMVC1DOiBoc2woMjcwLCA1MCUsIDMwJSk7XHJcbiAgLS1PQkpFQ1QtQkctQzogaHNsKDMwMCwgMzElLCAyNSUpO1xyXG4gIC0tT0JKRUNULU9QQy1DOiBoc2xhKDMwMCwgMjglLCAxOSUsIDAuNjQ4KTtcclxuICAtLU9CSkVDVC1DOiBhbGljZWJsdWU7XHJcbiAgLS1PQkpFQ1QtQUxULUM6IGhzbCgyNzAsIDUwJSwgMzAlKTtcclxuICAtLU9CSkVDVC1BTFQyLUM6IGhzbCgwLCAwJSwgMTQlKTtcclxuICAtLU9CSkVDVC1JQ09OUzogaHNsKDIxMSwgMTAwJSwgNDQlKTtcclxuICAtLU1BSU4tQkctQzogZGFya3NlYWdyZWVuO1xyXG4gIC0tTUFJTi1DOiBhbGljZWJsdWU7XHJcbiAgLS1DQUxFTkRBUi1CRy1DOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDk0OTQ5OGUgMCUsICMyNDI0MjQ4OCAxMDAlKTtcclxuICAtLUNBTEVOREFSLUM6IGJsYWNrO1xyXG4gIC0tQ0FMRU5EQVItQUxULUJHLUM6IGhzbGEoMjA4LCAxMDAlLCA5NyUsIDAuMjc0KTtcclxuICAtLUNBTEVOREFSLUFMVC1DOiBhbGljZWJsdWU7XHJcbiAgLS1DQUxFTkRBUi1IT1ZFUi1CRy1DOiByZ2JhKDAsIDAsIDAsIDAuNDI5KTtcclxuICAtLVdFRUtFTkQ6IHJnYigwLCAwLCAwKTtcclxuICAtLUJPWC1TSEFET1ctQzogYmxhY2s7XHJcbiAgLyogUFJJT1JJVFkgKi9cclxuICAtLVBSSU9SSVRZLUxPVzogZ3JlZW47XHJcbiAgLS1QUklPUklUWS1NRUQ6IHllbGxvdztcclxuICAtLVBSSU9SSVRZLUhJR0g6IHJlZDtcclxuICAvKiBQT1BVUCAqL1xyXG4gIC0tUE9QVVAtQkctQzogaHNsKDI3MCwgNTElLCAyOSUpO1xyXG4gIC0tUE9QVVAtQzogYWxpY2VibHVlO1xyXG4gIC0tUE9QVVAtQUxULUM6IGJsYWNrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTF2aCA4NnZoIDR2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLUJPRFktR1JBRCk7XHJcbn1cclxuXHJcbi8qIEhFQURFUiAqL1xyXG5cclxuLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmF2VWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG59XHJcblxyXG4ubmF2TGkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdlNwYW4ge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcbi5uYXZTcGFuOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQyk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW46OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ubmF2TGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1BTFQtQyk7XHJcbn1cclxuXHJcbi8qIEhFQURFUiBBQ1RJVkUgKi9cclxuXHJcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4ubmF2TGkuYWN0aXZlIC5uYXZTcGFuOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLm5hdkxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUFMVC1DKTtcclxufVxyXG5cclxuLyogU0lERVBBTkVMICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDFmcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIGhlYWRlciB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICBncmlkLXJvdzogMS8gLTE7XHJcbiAgfVxyXG4gIC5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubmF2VWwge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm5hdkxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBtYWluIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgfVxyXG4gIGZvb3RlciB7XHJcbiAgICBncmlkLWNvbHVtbjogMi8gLTE7XHJcbiAgICBncmlkLXJvdzogMyAvIC0xO1xyXG4gIH1cclxufVxyXG5cclxuLyogTUFJTiAqL1xyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxpc3RDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gY2xhbXAoMC4ycmVtLCAxMCUsIDZyZW0pO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub2JqZWN0V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5vYmplY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVyZW0gNGZyIDFyZW0gMWZyIDEuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XHJcbiAgLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxufVxyXG4ub2JqRGF0ZSxcclxuLnRhc2tEYXRlIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdPYmplY3QsXHJcbi5uZXdOb3RlIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdPYmplY3Q6aG92ZXIsXHJcbi5uZXdOb3RlOmhvdmVyLFxyXG4ubmV3T2JqZWN0OmZvY3VzLFxyXG4ubmV3Tm90ZTpmb2N1cyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xyXG59XHJcblxyXG4ub2JqZWN0OmhvdmVyLFxyXG4ub2JqZWN0OmZvY3VzLFxyXG4ub2JqZWN0OmFjdGl2ZSxcclxuLm5vdGVPYmplY3Q6aG92ZXIsXHJcbi5ub2RlT2JqZWN0OmZvY3VzLFxyXG4ubm90ZU9iamVjdDphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG5cclxuLnRhc2tXcmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5UYXNrIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIDRmciAxLjNyZW0gMWZyIDEuM3JlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmUgKi9cclxufVxyXG4ubmV3VGFzayB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIG1hcmdpbjogLTAuNXJlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5UYXNrOmhvdmVyLFxyXG4uVGFzazpmb2N1cyxcclxuLlRhc2s6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLUJPWC1TSEFET1ctQyk7XHJcbn1cclxuXHJcbi5vYmpUaXRsZSxcclxuLnRhc2tUaXRsZSxcclxuLmV2ZW50VGl0bGUsXHJcbi5ub3RlVGl0bGUge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ub3RlVGl0bGUge1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG4ub2JqTm90ZSxcclxuLnRhc2tOb3RlLFxyXG4uZXZlbnROb3RlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm9ialRpbWUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGVsZXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGFpbHlDb250YWluZXIgLm9iamVjdCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVyZW0gMXJlbSA0ZnIgMXJlbSAxZnIgMS4zcmVtO1xyXG59XHJcbi5kYWlseUNvbnRhaW5lciAuVGFzayB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIDRmciAxcmVtIDFmciAxLjNyZW07XHJcbn1cclxuLyogUFJPSiAqL1xyXG5cclxuLm9iamVjdC5wcm9qIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAxcmVtIDRmciAxcmVtIDFmciAxLjNyZW07XHJcbn1cclxuXHJcbi8qIERBSUxZICovXHJcblxyXG4ub2JqZWN0LmV2ZW50cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAxcmVtIDRmciAxcmVtIDFmciAxLjNyZW07XHJcbn1cclxuXHJcbi8qIE5PVEVTICovXHJcblxyXG4ubm90ZXNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjkwcHgsIDFmcikpO1xyXG59XHJcbi5uZXdOb3RlIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnR3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4uY29sR3JpZCB7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0KTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuI29uZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4jdHdvIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0aHJlZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jZm91ciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgI3R3byB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE2MCkge1xyXG4gICN0aHJlZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTM1OHB4KSB7XHJcbiAgI2ZvdXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuLm5vdGVPYmplY3Qge1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IGNsYW1wKDI2MHB4LCAxMDAlLCA0MDBweCk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG4gIHJvdy1nYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG4ubm90ZU9iamVjdCA+IC5oaWdoIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTsgKi9cclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm90ZU9iamVjdCA+IC5sb3cge1xyXG4gIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpOyAqL1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ub3RlRGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGdyaWQtcm93OiAzLzQ7XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxufVxyXG4ubm90ZU1hcmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtcm93OiAzLzQ7XHJcbn1cclxuXHJcbi5ub3RlVGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQyLUMpO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxufVxyXG4ubm90ZUJvZHkge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBncmlkLXJvdzogMiAvIDM7XHJcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVDItQyk7XHJcbiAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcblxyXG4vKiBFVkVOVFMgKi9cclxuXHJcbi5ldmVudHNDb250YWluZXIge1xyXG4gIGhlaWdodDogODB2aDtcclxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDcwMHB4KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1DQUxFTkRBUi1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tQ0FMRU5EQVItQyk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XHJcbn1cclxuXHJcbi5kYXRlV3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWxlbmRhcldyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1DKTtcclxufVxyXG4uaGVhZGluZ3Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmRhdGVXcmFwcGVyIHtcclxuICBjb2xvcjogdmFyKC0tQ0FMRU5EQVItQUxULUMpO1xyXG59XHJcbi5jYWxlbmRhckRheXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNhbGVuZGFyRGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjdyZW0sIDIuMnJlbSk7XHJcbn1cclxuLmNhbGVuZGFyRGF5OjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jYWxlbmRhckRheTpob3Zlcjo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1DQUxFTkRBUi1IT1ZFUi1CRy1DKTtcclxufVxyXG4uaW5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tQ0FMRU5EQVItQUxULUJHLUMpO1xyXG59XHJcbi5ldmVudE5vdGVXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDQydmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDJyZW0pO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ud2Vla0VuZCB7XHJcbiAgY29sb3I6IHZhcigtLVdFRUtFTkQpO1xyXG59XHJcbi5jdXJyZW50RGF5OjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNBTEVOREFSLUFMVC1DKTtcclxufVxyXG4uYXJyb3cge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbn1cclxuLmFycm93OmhvdmVyLFxyXG4uYXJyb3c6Zm9jdXMge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLyogUFJJT1JJVFkgKi9cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJpb3JpdHk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5wcmlvcml0eTpjaGVja2VkOjpiZWZvcmUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVBPUFVQLUMpO1xyXG59XHJcbiNsb3c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4jbWVkOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLU1FRCk7XHJcbn1cclxuI2hpZ2g6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktSElHSCk7XHJcbn1cclxuXHJcbi5sb3cge1xyXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1QUklPUklUWS1MT1cpO1xyXG59XHJcbi5tZWQge1xyXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1QUklPUklUWS1NRUQpO1xyXG59XHJcbi5oaWdoIHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktSElHSCk7XHJcbn1cclxuXHJcbi5ldmVudGxvdzo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpO1xyXG59XHJcbi5ldmVudG1lZDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xyXG59XHJcbi5ldmVudGhpZ2g6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktSElHSCk7XHJcbn1cclxuXHJcbi8qIC5ub3RlTWFyay5sb3cge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4ubm90ZU1hcmsuaGlnaCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcclxufSAqL1xyXG5cclxuLyogQ09NUExFVEVEICovXHJcblxyXG4udHJ1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULU9QQy1DKTtcclxufVxyXG4udHJ1ZSA+IDpub3QoLmRlbGV0ZSwgLm9iak5vdGUsIC50YXNrTm90ZSwgLmV2ZW50Tm90ZSwgLmNvbXBsZXRpb24sIC50b29sVGlwKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5mYWxzZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRk9PVEVSICovXHJcblxyXG5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyQTphbnktbGluayB7XHJcbiAgY29sb3I6IHZhcigtLUhFQURFUi1DKTtcclxufVxyXG5cclxuLyogQklOICovXHJcbi5idXR0b25XcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5iaW5CdG4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tQk9YLVNIQURPVy1DKTtcclxufVxyXG4uYmluQnRuOmZvY3VzLFxyXG4uYmluQnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHZhcigtLUJPWC1TSEFET1ctQyk7XHJcbn1cclxuXHJcbi5iaW5Cb3gge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tUE9QVVAtQyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQkctQyk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgMWZyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2xvc2VQb3BVcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJpbkluc2lkZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQpO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcbi5iaW5XcmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmluV3JhcHBlciA+IC5vYmplY3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgbWF4LWNvbnRlbnQgbWluLWNvbnRlbnQgMnJlbTtcclxufVxyXG5cclxuLyogUE9QVVAgKi9cclxuXHJcbi5wb3BVcENvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNDk1KTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wb3BVcGZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDgwMHB4KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4ucHJpb3JpdHlXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmR1ZVdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcbi5pbnB1dDo6LW1vei1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucG9wVXBCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcclxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBDSEVDS0JPWCAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgd2lkdGg6IDEuMTVlbTtcclxuICBoZWlnaHQ6IDEuMTVlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwLjY1ZW07XHJcbiAgaGVpZ2h0OiAwLjY1ZW07XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1QT1BVUC1BTFQtQyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBvdXRsaW5lLW9mZnNldDogbWF4KDJweCwgMC4xNWVtKTtcclxufVxyXG5cclxuLyogVE9PTFRJUCAqL1xyXG5cclxuLnRvb2xUaXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IGNsYW1wKDdyZW0sIDMwJSwgMjJyZW0pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB6LWluZGV4OiA0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4udG9vbFRpcF9fcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4vKiBJQ09OUyAqL1xyXG5cclxuLmRlbGV0ZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICAtd2Via2l0LW1hc2s6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgNTAlIDUwJTtcclxuICBtYXNrOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IDUwJSA1MCU7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xyXG4gIG1hc2stc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUMpO1xyXG59XHJcbi5kZWxldGU6aG92ZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtSUNPTlMpO1xyXG59XHJcblxyXG4ub2JqTm90ZTo6YWZ0ZXIsXHJcbi50YXNrTm90ZTo6YWZ0ZXIsXHJcbi5ldmVudE5vdGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IDUwJSA1MCU7XHJcbiAgbWFzazogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdCA1MCUgNTAlO1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcclxuICBtYXNrLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcclxufVxyXG4ub2JqTm90ZTpob3Zlcjo6YWZ0ZXIsXHJcbi50YXNrTm90ZTpob3Zlcjo6YWZ0ZXIsXHJcbi5ldmVudE5vdGU6aG92ZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtSUNPTlMpO1xyXG59XHJcblxyXG4ubm90ZU1hcms6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0IDUwJSA1MCU7XHJcbiAgbWFzazogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIG5vLXJlcGVhdCA1MCUgNTAlO1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcclxuICBtYXNrLXNpemU6IGNvdmVyO1xyXG59XHJcbi5ub3RlTWFyazpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1JQ09OUyk7XHJcbn1cclxuLmxvdy5ub3RlTWFyazo6YWZ0ZXIge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcclxufVxyXG4uaGlnaC5ub3RlTWFyazo6YWZ0ZXIge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktSElHSCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlFQUFpRTtFQUNqRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlFQUF5RTtFQUN6RSxtQkFBbUI7RUFDbkIsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxr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Z0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLyogVkFSSUFCTEVTICovXFxyXFxuICAtLUJPRFktR1JBRDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM5MzkzOSAwJSwgIzE1MTUxNSAxMDAlKTtcXHJcXG4gIC0tSEVBREVSLUJHLUM6IGJsYWNrO1xcclxcbiAgLS1IRUFERVItQzogYWxpY2VibHVlO1xcclxcbiAgLS1IRUFERVItQUxULUM6IGhzbCgyNzAsIDUwJSwgMzAlKTtcXHJcXG4gIC0tT0JKRUNULUJHLUM6IGhzbCgzMDAsIDMxJSwgMjUlKTtcXHJcXG4gIC0tT0JKRUNULU9QQy1DOiBoc2xhKDMwMCwgMjglLCAxOSUsIDAuNjQ4KTtcXHJcXG4gIC0tT0JKRUNULUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tT0JKRUNULUFMVC1DOiBoc2woMjcwLCA1MCUsIDMwJSk7XFxyXFxuICAtLU9CSkVDVC1BTFQyLUM6IGhzbCgwLCAwJSwgMTQlKTtcXHJcXG4gIC0tT0JKRUNULUlDT05TOiBoc2woMjExLCAxMDAlLCA0NCUpO1xcclxcbiAgLS1NQUlOLUJHLUM6IGRhcmtzZWFncmVlbjtcXHJcXG4gIC0tTUFJTi1DOiBhbGljZWJsdWU7XFxyXFxuICAtLUNBTEVOREFSLUJHLUM6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0OTQ5NDk4ZSAwJSwgIzI0MjQyNDg4IDEwMCUpO1xcclxcbiAgLS1DQUxFTkRBUi1DOiBibGFjaztcXHJcXG4gIC0tQ0FMRU5EQVItQUxULUJHLUM6IGhzbGEoMjA4LCAxMDAlLCA5NyUsIDAuMjc0KTtcXHJcXG4gIC0tQ0FMRU5EQVItQUxULUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tQ0FMRU5EQVItSE9WRVItQkctQzogcmdiYSgwLCAwLCAwLCAwLjQyOSk7XFxyXFxuICAtLVdFRUtFTkQ6IHJnYigwLCAwLCAwKTtcXHJcXG4gIC0tQk9YLVNIQURPVy1DOiBibGFjaztcXHJcXG4gIC8qIFBSSU9SSVRZICovXFxyXFxuICAtLVBSSU9SSVRZLUxPVzogZ3JlZW47XFxyXFxuICAtLVBSSU9SSVRZLU1FRDogeWVsbG93O1xcclxcbiAgLS1QUklPUklUWS1ISUdIOiByZWQ7XFxyXFxuICAvKiBQT1BVUCAqL1xcclxcbiAgLS1QT1BVUC1CRy1DOiBoc2woMjcwLCA1MSUsIDI5JSk7XFxyXFxuICAtLVBPUFVQLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tUE9QVVAtQUxULUM6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExdmggODZ2aCA0dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tQk9EWS1HUkFEKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZVbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1BTFQyKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZTcGFuIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQyk7XFxyXFxufVxcclxcbi5uYXZTcGFuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC03cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUMpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbn1cXHJcXG4ubmF2TGk6aG92ZXIgLm5hdlNwYW46OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4ubmF2TGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUFMVC1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSIEFDVElWRSAqL1xcclxcblxcclxcbi5uYXZMaS5hY3RpdmUgLm5hdlNwYW4ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbn1cXHJcXG4ubmF2TGkuYWN0aXZlIC5uYXZTcGFuOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLm5hdkxpLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQUxULUMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTSURFUEFORUwgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICAgIGdyaWQtcm93OiAxLyAtMTtcXHJcXG4gIH1cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZVbCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICAubmF2TGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIG1haW4ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICB9XFxyXFxuICBmb290ZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8gLTE7XFxyXFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdENvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIGNsYW1wKDAuMnJlbSwgMTAlLCA2cmVtKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vYmplY3RXcmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5vYmplY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDRmciAxcmVtIDFmciAxLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbiAgLyogIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG59XFxyXFxuLm9iakRhdGUsXFxyXFxuLnRhc2tEYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3T2JqZWN0LFxcclxcbi5uZXdOb3RlIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXdPYmplY3Q6aG92ZXIsXFxyXFxuLm5ld05vdGU6aG92ZXIsXFxyXFxuLm5ld09iamVjdDpmb2N1cyxcXHJcXG4ubmV3Tm90ZTpmb2N1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9iamVjdDpob3ZlcixcXHJcXG4ub2JqZWN0OmZvY3VzLFxcclxcbi5vYmplY3Q6YWN0aXZlLFxcclxcbi5ub3RlT2JqZWN0OmhvdmVyLFxcclxcbi5ub2RlT2JqZWN0OmZvY3VzLFxcclxcbi5ub3RlT2JqZWN0OmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tXcmFwcGVyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5UYXNrIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1CRy1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIDRmciAxLjNyZW0gMWZyIDEuM3JlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmUgKi9cXHJcXG59XFxyXFxuLm5ld1Rhc2sge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBtYXJnaW46IC0wLjVyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1PQkpFQ1QtQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5UYXNrOmhvdmVyLFxcclxcbi5UYXNrOmZvY3VzLFxcclxcbi5UYXNrOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9ialRpdGxlLFxcclxcbi50YXNrVGl0bGUsXFxyXFxuLmV2ZW50VGl0bGUsXFxyXFxuLm5vdGVUaXRsZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubm90ZVRpdGxlIHtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuLm9iak5vdGUsXFxyXFxuLnRhc2tOb3RlLFxcclxcbi5ldmVudE5vdGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ub2JqVGltZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kZWxldGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHlDb250YWluZXIgLm9iamVjdCB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAxcmVtIDRmciAxcmVtIDFmciAxLjNyZW07XFxyXFxufVxcclxcbi5kYWlseUNvbnRhaW5lciAuVGFzayB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gNGZyIDFyZW0gMWZyIDEuM3JlbTtcXHJcXG59XFxyXFxuLyogUFJPSiAqL1xcclxcblxcclxcbi5vYmplY3QucHJvaiB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNXJlbSAxcmVtIDRmciAxcmVtIDFmciAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIERBSUxZICovXFxyXFxuXFxyXFxuLm9iamVjdC5ldmVudHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41cmVtIDFyZW0gNGZyIDFyZW0gMWZyIDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTk9URVMgKi9cXHJcXG5cXHJcXG4ubm90ZXNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuLm5ld05vdGUge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnR3JpZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5jb2xHcmlkIHtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI29uZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG4jdHdvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiN0aHJlZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jZm91ciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXHJcXG4gICN0d28ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTE2MCkge1xcclxcbiAgI3RocmVlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEzNThweCkge1xcclxcbiAgI2ZvdXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubm90ZU9iamVjdCB7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGNsYW1wKDI2MHB4LCAxMDAlLCA0MDBweCk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgcm93LWdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1CT1gtU0hBRE9XLUMpO1xcclxcbn1cXHJcXG4ubm90ZU9iamVjdCA+IC5oaWdoIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUhJR0gpOyAqL1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5vdGVPYmplY3QgPiAubG93IHtcXHJcXG4gIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpOyAqL1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5vdGVEYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdyaWQtcm93OiAzLzQ7XFxyXFxuICBncmlkLWNvbHVtbjogMi8zO1xcclxcbn1cXHJcXG4ubm90ZU1hcmsge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLXJvdzogMy80O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZVRpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQyLUMpO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG59XFxyXFxuLm5vdGVCb2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQyLUMpO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFVkVOVFMgKi9cXHJcXG5cXHJcXG4uZXZlbnRzQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNzAwcHgpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tQ0FMRU5EQVItQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tQ0FMRU5EQVItQyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZVdyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiA3dmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhcldyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1DQUxFTkRBUi1BTFQtQyk7XFxyXFxufVxcclxcbi5oZWFkaW5ncyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuLmRhdGVXcmFwcGVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1DQUxFTkRBUi1BTFQtQyk7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheXMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcbi5jYWxlbmRhckRheSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjdyZW0sIDIuMnJlbSk7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLUNBTEVOREFSLUhPVkVSLUJHLUMpO1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1DQUxFTkRBUi1BTFQtQkctQyk7XFxyXFxufVxcclxcbi5ldmVudE5vdGVXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogNDJ2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDJyZW0pO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53ZWVrRW5kIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XRUVLRU5EKTtcXHJcXG59XFxyXFxuLmN1cnJlbnREYXk6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DQUxFTkRBUi1BTFQtQyk7XFxyXFxufVxcclxcbi5hcnJvdyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuLmFycm93OmhvdmVyLFxcclxcbi5hcnJvdzpmb2N1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi8qIFBSSU9SSVRZICovXFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByaW9yaXR5OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcbi5wcmlvcml0eTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tUE9QVVAtQyk7XFxyXFxufVxcclxcbiNsb3c6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbn1cXHJcXG4jbWVkOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTUVEKTtcXHJcXG59XFxyXFxuI2hpZ2g6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTE9XKTtcXHJcXG59XFxyXFxuLm1lZCB7XFxyXFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tUFJJT1JJVFktTUVEKTtcXHJcXG59XFxyXFxuLmhpZ2gge1xcclxcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLVBSSU9SSVRZLUhJR0gpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnRsb3c6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1MT1cpO1xcclxcbn1cXHJcXG4uZXZlbnRtZWQ6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1NRUQpO1xcclxcbn1cXHJcXG4uZXZlbnRoaWdoOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktSElHSCk7XFxyXFxufVxcclxcblxcclxcbi8qIC5ub3RlTWFyay5sb3cge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9SSVRZLUxPVyk7XFxyXFxufVxcclxcbi5ub3RlTWFyay5oaWdoIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogQ09NUExFVEVEICovXFxyXFxuXFxyXFxuLnRydWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULU9QQy1DKTtcXHJcXG59XFxyXFxuLnRydWUgPiA6bm90KC5kZWxldGUsIC5vYmpOb3RlLCAudGFza05vdGUsIC5ldmVudE5vdGUsIC5jb21wbGV0aW9uLCAudG9vbFRpcCkge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcbi5mYWxzZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9vdGVyQTphbnktbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCSU4gKi9cXHJcXG4uYnV0dG9uV3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5iaW5CdG4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1BTFQtQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tT0JKRUNULUMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLUJPWC1TSEFET1ctQyk7XFxyXFxufVxcclxcbi5iaW5CdG46Zm9jdXMsXFxyXFxuLmJpbkJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggdmFyKC0tQk9YLVNIQURPVy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpbkJveCB7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTAlLCA3MDBweCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jbG9zZVBvcFVwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYmluSW5zaWRlcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG4uYmluV3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmJpbldyYXBwZXIgPiAub2JqZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciBtYXgtY29udGVudCBtaW4tY29udGVudCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQT1BVUCAqL1xcclxcblxcclxcbi5wb3BVcENvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQ5NSk7XFxyXFxuICBjb2xvcjogdmFyKC0tUE9QVVAtQyk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcGZpZWxkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDgwMHB4KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QT1BVUC1CRy1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eVdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlV3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUE9QVVAtQUxULUMpO1xcclxcbiAgY29sb3I6IHZhcigtLVBPUFVQLUMpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuLmlucHV0OjotbW96LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxyXFxufVxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnBvcFVwQnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUFMVC1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QT1BVUC1DKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ0hFQ0tCT1ggKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxyXFxuICB3aWR0aDogMS4xNWVtO1xcclxcbiAgaGVpZ2h0OiAxLjE1ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMC42NWVtO1xcclxcbiAgaGVpZ2h0OiAwLjY1ZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1QT1BVUC1BTFQtQyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT09MVElQICovXFxyXFxuXFxyXFxuLnRvb2xUaXAge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDE1cmVtO1xcclxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiBjbGFtcCg3cmVtLCAzMCUsIDIycmVtKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBPUFVQLUJHLUMpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgei1pbmRleDogNDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4udG9vbFRpcF9fcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxufVxcclxcblxcclxcbi8qIElDT05TICovXFxyXFxuXFxyXFxuLmRlbGV0ZTo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgLXdlYmtpdC1tYXNrOiB1cmwoLi9pbWcvdHJhc2gtY2FuLW91dGxpbmUuc3ZnKSBuby1yZXBlYXQgNTAlIDUwJTtcXHJcXG4gIG1hc2s6IHVybCguL2ltZy90cmFzaC1jYW4tb3V0bGluZS5zdmcpIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcclxcbiAgbWFzay1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG59XFxyXFxuLmRlbGV0ZTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUlDT05TKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9iak5vdGU6OmFmdGVyLFxcclxcbi50YXNrTm90ZTo6YWZ0ZXIsXFxyXFxuLmV2ZW50Tm90ZTo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgLXdlYmtpdC1tYXNrOiB1cmwoLi9pbWcvbm90ZWJvb2suc3ZnKSBuby1yZXBlYXQgNTAlIDUwJTtcXHJcXG4gIG1hc2s6IHVybCguL2ltZy9ub3RlYm9vay5zdmcpIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcclxcbiAgbWFzay1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU9CSkVDVC1DKTtcXHJcXG59XFxyXFxuLm9iak5vdGU6aG92ZXI6OmFmdGVyLFxcclxcbi50YXNrTm90ZTpob3Zlcjo6YWZ0ZXIsXFxyXFxuLmV2ZW50Tm90ZTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tT0JKRUNULUlDT05TKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVNYXJrOjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAtd2Via2l0LW1hc2s6IHVybCguL2ltZy9zdGFyLnN2Zykgbm8tcmVwZWF0IDUwJSA1MCU7XFxyXFxuICBtYXNrOiB1cmwoLi9pbWcvc3Rhci5zdmcpIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcclxcbiAgbWFzay1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLm5vdGVNYXJrOmhvdmVyOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1PQkpFQ1QtSUNPTlMpO1xcclxcbn1cXHJcXG4ubG93Lm5vdGVNYXJrOjphZnRlciB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT1JJVFktTE9XKTtcXHJcXG59XFxyXFxuLmhpZ2gubm90ZU1hcms6OmFmdGVyIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPUklUWS1ISUdIKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZMaVwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHBhZ2UuZm9yRWFjaCgocGFnZSkgPT4gcGFnZS5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcFVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wVXBDb250YWluZXJcIik7XHJcbiAgcG9wVXBzLmZvckVhY2goKHBvcFVwKSA9PiBwb3BVcC5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjbGVhclJlbmRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlclwiKTtcclxuICByZW5kZXJlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcclxuICAgIHByb2oucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdEl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCBJZCA9IE51bWJlcihldi5pZC5zbGljZSgxMCkpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5vdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdElkID0gZmluZFByb2ooSWQpPy5pZDtcclxuICBpZiAocHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gSWQpO1xyXG4gICAgaWYgKHRhc2spIHtcclxuICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRhc2subm90ZSA9IG5vdGU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChwcm9qZWN0SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IElkKTtcclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAocHJvamVjdC50eXBlID09PSBcImRhaWx5XCIgfHwgXCJub3Rlc1wiKSAmJlxyXG4gICAgICAgIHByb2plY3QudHlwZSAhPT0gXCJwcm9qXCIgJiZcclxuICAgICAgICBwcm9qZWN0LnR5cGUgIT09IFwiZXZlbnRzXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgICAgICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgIHByb2plY3Qubm90ZSA9IG5vdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZVRpbWVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZVRpbWVPYmplY3QgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGR1ZVRpbWVWYWx1ZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICBkdWVUaW1lT2JqZWN0LnNldEhvdXJzKGhvdXJzKTtcclxuICAgICAgICAgIGR1ZVRpbWVPYmplY3Quc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGR1ZVRpbWVPYmplY3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWUpO1xyXG4gICAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZHVlRGF0ZU9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHByb2plY3QucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICBwcm9qZWN0Lm5vdGUgPSBub3RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG4gIGZvciAoY29uc3QgYnV0dG9uIG9mIHJhZGlvKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0Tm90ZSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldDtcclxuICBjb25zdCB0YXJnZXRJZCA9IGV2LnRhcmdldC5pZDtcclxuICBjb25zdCBvYmplY3RJZCA9IE51bWJlcihldi50YXJnZXQuaWQuc2xpY2UoMikpO1xyXG4gIGNvbnN0IG9iamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3RJZCk7XHJcbiAgaWYgKHRhcmdldElkLnNsaWNlKDAsIDIpID09PSBcIm50XCIpIHtcclxuICAgIG9iamVjdC50aXRsZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9IGVsc2UgaWYgKHRhcmdldElkLnNsaWNlKDAsIDIpID09PSBcIm5iXCIpIHtcclxuICAgIG9iamVjdC5ub3RlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH1cclxuICB0b0xvY2FsU3RvcmFnZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFByaW9yaXR5ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBvYmplY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gaWQpO1xyXG4gIG9iamVjdC5wcmlvcml0eSA9IGV2LnRhcmdldC5jbGFzc0xpc3QuaXRlbSgxKTtcclxufTtcclxuIiwiaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5RGF0ZSA9IChhcnJheSkgPT4ge1xyXG4gIGlmIChzZWxlY3RlZERhdGUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkU3RyaW5nID0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZHVlRGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGR1ZVN0cmluZyA9IGZvcm1hdERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgICAgICByZXR1cm4gZHVlU3RyaW5nID09PSBzZWxlY3RlZFN0cmluZztcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGlvblN0cmluZyA9IGZvcm1hdERhdGUoaXRlbS5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRpb25TdHJpbmcgPT09IHNlbGVjdGVkU3RyaW5nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBmaWx0ZXJCeVRvZGF5ID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgdHlwZU9yZGVyID0ge1xyXG4gICAgZXZlbnRzOiAxLFxyXG4gICAgcHJvajogMixcclxuICAgIGRhaWx5OiAzLFxyXG4gIH07XHJcbiAgY29uc3QgcHJpb3JpdHlPcmRlciA9IHtcclxuICAgIGxvdzogMyxcclxuICAgIG1lZDogMixcclxuICAgIGhpZ2g6IDEsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHN0YXJ0T2ZEYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgc3RhcnRPZkRheS5zZXRIb3VycygwLCAwKTtcclxuICBjb25zdCBlbmRPZkRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICBlbmRPZkRheS5zZXRIb3VycygyMywgNTkpO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoaXRlbS5kdWVEYXRlKTtcclxuICAgIHJldHVybiBkdWVEYXRlID49IHN0YXJ0T2ZEYXkgJiYgZHVlRGF0ZSA8PSBlbmRPZkRheTtcclxuICB9KTtcclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgdHlwZUNvbXAgPSB0eXBlT3JkZXJbYS50eXBlXSAtIHR5cGVPcmRlcltiLnR5cGVdO1xyXG4gICAgaWYgKHR5cGVDb21wICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiB0eXBlQ29tcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XSAtIHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gKGFycmF5KSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkO1xyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcImV2ZW50c1wiIHx8IGl0ZW0udHlwZSA9PT0gXCJwcm9qXCJcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbHRlcmVkID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGdldFR5cGUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBmaWx0ZXJlZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZpbHRlck5vdGVHcmlkcyA9IChncmlkcykgPT4ge1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkuZnJvbShncmlkcykuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICByZXR1cm4gZGlzcGxheS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcclxuICB9KTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclJlbW92ZWQgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGFycmF5LmZpbHRlcihcclxuICAgIChpdGVtKSA9PiAhYmluLnNvbWUoKGJpbkl0ZW0pID0+IGJpbkl0ZW0uaWQgPT09IGl0ZW0uaWQpXHJcbiAgKTtcclxuICByZXR1cm4gZmlsdGVyZWQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gYFxyXG4gIDxhXHJcbiAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYXJrZXN0b2ZUaW1lc1wiXHJcbiAgY2xhc3M9XCJmb290ZXJBXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gID5EYXJrVGltZXM8L2FcclxuPmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBmb290ZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChvYmplY3REYXRlKSA9PiB7XHJcbiAgY29uc3QgZHVlRGF0ZU9iamVjdCA9IG9iamVjdERhdGU7XHJcbiAgbGV0IGZvcm1hdHRlZER1ZURhdGUgPSBcIlwiO1xyXG4gIGlmIChvYmplY3REYXRlKSB7XHJcbiAgICBjb25zdCB5ZWFyID0gZHVlRGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBmb3JtYXR0ZWREdWVEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgIHJldHVybiBmb3JtYXR0ZWREdWVEYXRlO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAob2JqZWN0VGltZSkgPT4ge1xyXG4gIGNvbnN0IGR1ZURhdGVPYmplY3QgPSBvYmplY3RUaW1lO1xyXG4gIGxldCBmb3JtYXR0ZWRUaW1lID0gXCJcIjtcclxuICBpZiAob2JqZWN0VGltZSkge1xyXG4gICAgY29uc3QgaG91cnMgPSBTdHJpbmcoZHVlRGF0ZU9iamVjdC5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGR1ZURhdGVPYmplY3QuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBmb3JtYXR0ZWRUaW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBzZXRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHNldFN0b3JlZElkIH0gZnJvbSBcIi4vaWRHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgc2V0QmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcbmltcG9ydCB7IHBhcnNlSXNvRGF0ZSB9IGZyb20gXCIuL3BhcnNlSXNvRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVkU3RvcmVkSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZElkXCIpO1xyXG4gIGlmIChzdG9yZWRTdG9yZWRJZCAhPT0gbnVsbCkge1xyXG4gICAgc2V0U3RvcmVkSWQocGFyc2VJbnQoc3RvcmVkU3RvcmVkSWQpKTtcclxuICB9XHJcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG4gIGlmIChzdG9yZWRQcm9qZWN0cyAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcclxuICAgIGNvbnN0IG5vbk51bGxBcnJheSA9IHBhcnNlZEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbnVsbCk7XHJcbiAgICBjb25zdCBjb252ZXJ0ZWRBcnJheSA9IHBhcnNlSXNvRGF0ZShub25OdWxsQXJyYXkpO1xyXG4gICAgc2V0UHJvamVjdHMoY29udmVydGVkQXJyYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG4gIGNvbnN0IHN0b3JlZEJpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmluXCIpO1xyXG4gIGlmIChzdG9yZWRCaW4gIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHBhcnNlZEFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWRCaW4pO1xyXG4gICAgY29uc3Qgbm9uTnVsbEFycmF5ID0gcGFyc2VkQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBudWxsKTtcclxuICAgIGNvbnN0IGNvbnZlcnRlZEFycmF5ID0gcGFyc2VJc29EYXRlKG5vbk51bGxBcnJheSk7XHJcbiAgICBzZXRCaW4oY29udmVydGVkQXJyYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlck9iamVjdHMgfSBmcm9tIFwiLi9yZW5kZXJPYmplY3RzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wbGV0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJjb21wbGV0aW9uXCJdJyk7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGVja0JveEV2ZW50KTtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoZWNrQm94RXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tCb3hFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNoZWNrQm94ZXMoZXYpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCb3hlcyhldikge1xyXG4gIGNvbnN0IGNoZWNrQm94SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKG9iaikgPT4gb2JqLmlkID09PSBjaGVja0JveElkKTtcclxuICBpZiAocHJvamVjdCkge1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKCFldi50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBwcm9qZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIHByb2plY3QuY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoIXByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RXaXRoVGFzayA9IGZpbmRQcm9qKGNoZWNrQm94SWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gcHJvamVjdFdpdGhUYXNrLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGNoZWNrQm94SWQpO1xyXG4gICAgaWYgKGV2LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgfSBlbHNlIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrQ29tcGxldGlvbihldik7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbXBsZXRpb24gPSAoZXYpID0+IHtcclxuICBjb25zdCBjaGVja0JveElkID0gZXYgPyBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEpKSA6IG51bGw7XHJcbiAgY29uc3QgdGFyZ2V0Q2hlY2tlZCA9IGV2ID8gZXYudGFyZ2V0LmNoZWNrZWQgOiBudWxsO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZE9iamVjdHMgPSBvYmoudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XHJcbiAgICBpZiAob2JqLnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgaWYgKG9iai5kdWVEYXRlIDwgY3VycmVudERhdGUpIHtcclxuICAgICAgICBvYmouY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAob2JqLnRhc2tzLmxlbmd0aCAhPT0gMCAmJiBjb21wbGV0ZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkgfHxcclxuICAgICAgKG9iai50eXBlID09PSBcImRhaWx5XCIgJiYgdGFyZ2V0Q2hlY2tlZCAmJiBjaGVja0JveElkID09PSBvYmouaWQpXHJcbiAgICApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgb2JqLmNvbXBsZXRpb25EYXRlID0gY3VycmVudERhdGU7XHJcbiAgICB9IGVsc2UgaWYgKG9iai50YXNrcy5sZW5ndGggIT09IDAgJiYgY29tcGxldGVkT2JqZWN0cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgb2JqLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgIG9iai5jb21wbGV0aW9uRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvaihpZCkge1xyXG4gIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qZWN0cykge1xyXG4gICAgY29uc3Qga25vd25UYXNrID0gcHJvai50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoa25vd25UYXNrKSB7XHJcbiAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgT2JqZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gXCIuL2dldFR5cGVcIjtcclxuaW1wb3J0IHsgc2VsZWN0ZWREYXRlIH0gZnJvbSBcIi4vcmVuZGVyRXZlbnRzUGFnZVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0ID0gKHByb2pJZCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICBsZXQgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgbGV0IHR5cGUgPSBnZXRUeXBlKCk7XHJcbiAgaWYgKFxyXG4gICAgcHJvaklkID09PSB1bmRlZmluZWQgJiZcclxuICAgIHR5cGUgIT09IFwiZGFpbHlcIiAmJlxyXG4gICAgdHlwZSAhPT0gXCJub3Rlc1wiICYmXHJcbiAgICB0eXBlICE9PSBcImV2ZW50c1wiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XHJcbiAgICBpZiAoZHVlRGF0ZVZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlKTtcclxuICAgICAgZHVlRGF0ZURhdGUuc2V0SG91cnMoMjMpO1xyXG4gICAgICBkdWVEYXRlRGF0ZS5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgZHVlRGF0ZSA9IGR1ZURhdGVEYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHVlRGF0ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBjb25zdCBkdWVUaW1lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZHVlVGltZVZhbHVlLnNwbGl0KFwiOlwiKTtcclxuICAgIGlmIChkdWVUaW1lVmFsdWUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICBzZWxlY3RlZC5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICAgIHNlbGVjdGVkLnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICAgIGR1ZURhdGUgPSBzZWxlY3RlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuICAgICAgZHVlRGF0ZSA9IG5ld1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbWlkTmlnaHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICBtaWROaWdodC5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICBtaWROaWdodC5zZXRIb3VycygyMywgNTksIDApO1xyXG4gICAgZHVlRGF0ZSA9IG1pZE5pZ2h0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIGxldCBwcmlvcml0eSA9IGNoZWNrKCk7XHJcbiAgaWYgKHR5cGUgPT09IFwibm90ZXNcIikge1xyXG4gICAgY29uc3QgcHJpb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5XVwiKTtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOb3RlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVkSWQoKTtcclxuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICBhZGRPYmplY3QoXHJcbiAgICBwcm9qSWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRPYmplY3QgPSAoXHJcbiAgcHJvaklkLFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikgPT4ge1xyXG4gIGNvbnN0IG5ld09iamVjdCA9IG5ldyBPYmplY3QoXHJcbiAgICB0aXRsZSxcclxuICAgIGlkLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgY29tcGxldGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGUsXHJcbiAgICB0eXBlXHJcbiAgKTtcclxuICBpZiAocHJvaklkICE9PSBudWxsICYmIHByb2pJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2pJZCk7XHJcbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld09iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3T2JqZWN0KTtcclxuICB9XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHRvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVjayA9ICgpID0+IHtcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcbiAgZm9yIChjb25zdCBidXR0b24gb2YgcmFkaW8pIHtcclxuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLmlkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgcmV0dXJuIGFjdGl2ZVRhYi5pZDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGhhbmRsZUVudGVyID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgZW50ZXJLZXlDb2RlID0gMTM7XHJcbiAgY29uc3QgcGFydGljdWxhckVsZW1lbnRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJhZGRQcm9qQnRuXCJdJyk7XHJcbiAgaWYgKHBhcnRpY3VsYXJFbGVtZW50SWQgJiYgZXYua2V5Q29kZSA9PT0gZW50ZXJLZXlDb2RlICYmICFldi5zaGlmdEtleSkge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgdmlldzogd2luZG93LFxyXG4gICAgfSk7XHJcbiAgICBwYXJ0aWN1bGFyRWxlbWVudElkLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhclBvcFVwIH0gZnJvbSBcIi4vY2xlYXJQb3BVcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUVzY2FwZSA9IChldikgPT4ge1xyXG4gIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXYua2V5ID09PSBcIkVzY1wiKSB7XHJcbiAgICBjbGVhclBvcFVwKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGBcclxuICA8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcbiAgPHVsIGNsYXNzPVwibmF2VWxcIj5cclxuICAgIDxsaSBpZD1cInByb2pcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPlByb2plY3Q8L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGlkPVwiZGFpbHlcIiBjbGFzcz1cIm5hdkxpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2U3BhblwiPkRhaWx5PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cImV2ZW50c1wiIGNsYXNzPVwibmF2TGlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXZTcGFuXCI+RXZlbnRzPC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBpZD1cIm5vdGVzXCIgY2xhc3M9XCJuYXZMaVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm5hdlNwYW5cIj5Ob3Rlczwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9uYXY+YDtcclxuXHJcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGhlYWRlcik7XHJcbn07XHJcbiIsImV4cG9ydCBsZXQgc3RvcmVkSWQgPSAwO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgc3RvcmVkSWQrKztcclxuICAgIHJldHVybiBzdG9yZWRJZDtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBnZW5lcmF0ZWRJZCA9IGdlbmVyYXRlSWQoKTtcclxuZXhwb3J0IGNvbnN0IHNldFN0b3JlZElkID0gKHZhbHVlKSA9PiB7XHJcbiAgc3RvcmVkSWQgPSB2YWx1ZTtcclxufTtcclxuIiwiaW1wb3J0IHsgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9pc0xvY2FsU3RvcmFnZUF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBwcmVwb3B1bGF0ZSB9IGZyb20gXCIuL3ByZXBvcHVsYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGFpbHlcIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgcGllY2UyKCk7XHJcbiAgcGllY2UzKCk7XHJcbiAgaXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKTtcclxuICBwcmVwb3B1bGF0ZSgpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgZnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2Zyb21Mb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcclxuICB2YXIgdGVzdCA9IFwidGVzdFwiO1xyXG4gIHRyeSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXN0LCB0ZXN0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKGlzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcclxuICBmcm9tTG9jYWxTdG9yYWdlKCk7XHJcbn0gZWxzZSB7XHJcbiAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGVUb29sdGlwID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBvYmplY3QgPSBwcm9qZWN0cy5maW5kKChvYmopID0+IG9iai5pZCA9PT0gaWQpO1xyXG4gIGxldCBub3RlRGF0YSA9IFwiXCI7XHJcbiAgaWYgKCFvYmplY3QpIHtcclxuICAgIGNvbnN0IG9ialdpdGhUYXNrID0gZmluZFByb2ooaWQpO1xyXG4gICAgY29uc3QgdGFzayA9IG9ialdpdGhUYXNrLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIG5vdGVEYXRhID0gdGFzay5ub3RlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBub3RlRGF0YSA9IG9iamVjdC5ub3RlO1xyXG4gIH1cclxuICBjb25zdCB0b29sVGlwQm9keSA9IGBcclxuICA8ZGl2IGNsYXNzPVwidG9vbFRpcFwiPlxyXG4gICAgPHAgY2xhc3M9XCJ0b29sVGlwX19wXCI+JHtub3RlRGF0YX08L3A+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICBjb25zdCBjb250YWluZXIgPSBldi50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRvb2xUaXBCb2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVUb29sdGlwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvb2xUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb2xUaXBcIik7XHJcbiAgdG9vbFRpcC5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qKGlkKSB7XHJcbiAgZm9yIChjb25zdCBwcm9qIG9mIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBrbm93blRhc2sgPSBwcm9qLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChrbm93blRhc2spIHtcclxuICAgICAgcmV0dXJuIHByb2o7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBwYXJzZUlzb0RhdGUgPSAoYXJyYXkpID0+IHtcclxuICBhcnJheS5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmIChvYmplY3QuZHVlRGF0ZSkge1xyXG4gICAgICBvYmplY3QuZHVlRGF0ZSA9IGNvbnZlcnREYXRlKG9iamVjdC5kdWVEYXRlKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QuY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID0gY29udmVydERhdGUob2JqZWN0LmNvbXBsZXRpb25EYXRlKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QuYWRkZWREYXRlKSB7XHJcbiAgICAgIG9iamVjdC5hZGRlZERhdGUgPSBjb252ZXJ0RGF0ZShvYmplY3QuYWRkZWREYXRlKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QudGFza3MpIHtcclxuICAgICAgb2JqZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBpZiAodGFzay5kdWVEYXRlKSB7XHJcbiAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBjb252ZXJ0RGF0ZSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFzay5jb21wbGV0aW9uRGF0ZSkge1xyXG4gICAgICAgICAgdGFzay5jb21wbGV0aW9uRGF0ZSA9IGNvbnZlcnREYXRlKHRhc2suY29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFzay5hZGRlZERhdGUpIHtcclxuICAgICAgICAgIHRhc2suYWRkZWREYXRlID0gY29udmVydERhdGUodGFzay5hZGRlZERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59O1xyXG5cclxuY29uc3QgY29udmVydERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICByZXR1cm4gcGFyc2VkRGF0ZTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBhZGRPYmplY3QgfSBmcm9tIFwiLi9nZXRPYmplY3RcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVkSWQgfSBmcm9tIFwiLi9pZEdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBvcHVsYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XHJcbiAgY29uc3QgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzSlNPTik7XHJcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZWRJZCgpO1xyXG4gIGNvbnN0IHRpdGxlID0gXCJDcmVhdGUgVG8tRG8gbGlzdFwiO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGR1ZURhdGUuc2V0RGF0ZShkdWVEYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gIGNvbnN0IGNvbXBsZXRpb25EYXRlID0gXCJcIjtcclxuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gXCJoaWdoXCI7XHJcbiAgY29uc3Qgbm90ZSA9IFwiQ3JlYXRlIHNvbWUgYmFzaWMgdG8tZG9cIjtcclxuICBjb25zdCB0eXBlID0gXCJwcm9qXCI7XHJcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCAmJiBwYXJzZWRQcm9qZWN0cyA9PT0gbnVsbCkge1xyXG4gICAgYWRkT2JqZWN0KFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIGNvbXBsZXRpb25EYXRlLFxyXG4gICAgICBjb21wbGV0ZSxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICAgIG5vdGUsXHJcbiAgICAgIHR5cGVcclxuICAgICk7XHJcbiAgICBhZGRUYXNrMShpZCk7XHJcbiAgICBhZGRUYXNrMihpZCk7XHJcbiAgICBhZGRUYXNrMyhpZCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYWRkVGFzazEgPSAoT2JqSWQpID0+IHtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgdGl0bGUgPSBcIkFkZCBkaWZmZXJlbnQgcGFnZXNcIjtcclxuICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoKTtcclxuICBkdWVEYXRlLnNldERhdGUoZHVlRGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICBjb25zdCBjb21wbGV0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgY29tcGxldGUgPSB0cnVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gXCJoaWdoXCI7XHJcbiAgY29uc3Qgbm90ZSA9IFwiRm9yIHByb2plY3RzLCBkYWlseSBzdHVmZiwgZXZlbnRzIGFuZCBub3Rlc1wiO1xyXG4gIGNvbnN0IHR5cGUgPSBcInByb2pcIjtcclxuICBhZGRPYmplY3QoXHJcbiAgICBPYmpJZCxcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVGFzazIgPSAoT2JqSWQpID0+IHtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgdGl0bGUgPSBcIk1ha2UgaXQgd29yayB3aXRoIGxvY2FsU3RvcmFnZVwiO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGR1ZURhdGUuc2V0RGF0ZShkdWVEYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gIGNvbnN0IGNvbXBsZXRpb25EYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBjb21wbGV0ZSA9IHRydWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBcIm1lZFwiO1xyXG4gIGNvbnN0IG5vdGUgPSBcIkFuZCBhZGQgcHJlZXhpc3RpbmcgcHJvamVjdFwiO1xyXG4gIGNvbnN0IHR5cGUgPSBcInByb2pcIjtcclxuICBhZGRPYmplY3QoXHJcbiAgICBPYmpJZCxcclxuICAgIHRpdGxlLFxyXG4gICAgaWQsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgY29tcGxldGlvbkRhdGUsXHJcbiAgICBjb21wbGV0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZSxcclxuICAgIHR5cGVcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVGFzazMgPSAoT2JqSWQpID0+IHtcclxuICBjb25zdCBpZCA9IGdlbmVyYXRlZElkKCk7XHJcbiAgY29uc3QgdGl0bGUgPSBcIk1ha2UgaXQgcHJldHR5XCI7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZHVlRGF0ZS5zZXREYXRlKGR1ZURhdGUuZ2V0RGF0ZSgpIC0gMSk7XHJcbiAgY29uc3QgY29tcGxldGlvbkRhdGUgPSBudWxsO1xyXG4gIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBcImxvd1wiO1xyXG4gIGNvbnN0IG5vdGUgPSBcIkFkZCBzb21lIHJlYWN0aXZpdHkgYW5kIHNvbWUgZmFuY3kgZ3JhZGllbnRzIGFuZCB3aGF0bm90XCI7XHJcbiAgY29uc3QgdHlwZSA9IFwicHJvalwiO1xyXG4gIGFkZE9iamVjdChcclxuICAgIE9iaklkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBpZCxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBjb21wbGV0aW9uRGF0ZSxcclxuICAgIGNvbXBsZXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBub3RlLFxyXG4gICAgdHlwZVxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0cyA9ICh2YWx1ZSkgPT4ge1xyXG4gIHByb2plY3RzID0gdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JqZWN0KFxyXG4gIHRpdGxlLFxyXG4gIGlkLFxyXG4gIGR1ZURhdGUsXHJcbiAgY29tcGxldGlvbkRhdGUsXHJcbiAgY29tcGxldGUsXHJcbiAgcHJpb3JpdHksXHJcbiAgbm90ZSxcclxuICB0eXBlXHJcbikge1xyXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB0aGlzLmlkID0gaWQ7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdGhpcy5jb21wbGV0aW9uRGF0ZSA9IGNvbXBsZXRpb25EYXRlO1xyXG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5ub3RlID0gbm90ZTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMuYWRkZWREYXRlID0gZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gY3VycmVudERhdGU7XHJcbn07XHJcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyT2JqZWN0cyB9IGZyb20gXCIuL3JlbmRlck9iamVjdHNcIjtcclxuaW1wb3J0IHsgY2hlY2tDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZUJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5leHBvcnQgbGV0IGJpbiA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEJpbiA9ICh2YWx1ZSkgPT4ge1xyXG4gIGJpbiA9IHZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAob2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgY29uc3QgbWlkTmlnaHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgIG1pZE5pZ2h0LnNldERhdGUob2JqZWN0LmR1ZURhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgIG1pZE5pZ2h0LnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgICBjb25zdCBtaWROaWdodEFoZWFkID0gbmV3IERhdGUoKTtcclxuICAgICAgbWlkTmlnaHRBaGVhZC5zZXREYXRlKG9iamVjdC5kdWVEYXRlLmdldERhdGUoKSArIDIpO1xyXG4gICAgICBtaWROaWdodEFoZWFkLnNldEhvdXJzKDAsIDAsIDApO1xyXG5cclxuICAgICAgY29uc3QgdHdvSG91cnNBaGVhZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHR3b0hvdXJzQWhlYWQuc2V0SG91cnMob2JqZWN0LmR1ZURhdGUuZ2V0SG91cnMoKSArIDIpO1xyXG4gICAgICBpZiAob2JqZWN0LnR5cGUgPT09IFwiZGFpbHlcIikge1xyXG4gICAgICAgIGlmIChvYmplY3QuY29tcGxldGUgPT09IHRydWUgJiYgY3VycmVudERhdGUgPj0gb2JqZWN0LmR1ZURhdGUpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0LmlkKTtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIG9iamVjdC5jb21wbGV0ZSA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIGN1cnJlbnREYXRlID49IG9iamVjdC5kdWVEYXRlICYmXHJcbiAgICAgICAgICBjdXJyZW50RGF0ZSA+PSBtaWROaWdodEFoZWFkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAob2JqZWN0LnR5cGUgPT09IFwicHJvalwiICYmIG9iamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgJiYgb2JqZWN0LmNvbXBsZXRlID09PSB0cnVlKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdC5pZCk7XHJcbiAgICAgICAgY29uc3Qgc3BsaWNlZCA9IHByb2plY3RzW2luZGV4XTtcclxuICAgICAgICBpZiAoIWJpbi5maW5kKChvYmopID0+IG9iai5pZCA9PT0gc3BsaWNlZC5pZCkpIHtcclxuICAgICAgICAgIGJpbi5wdXNoKHNwbGljZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBjb25zdCBiaW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpbkJveFwiKTtcclxuICBpZiAoYmluQm94KSB7XHJcbiAgICBwb3B1bGF0ZUJpbigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gIGNoZWNrQ29tcGxldGlvbigpO1xyXG4gIHJlbW92ZUNvbXBsZXRlZCgpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldElkID0gTnVtYmVyKGV2LnRhcmdldC5pZC5zbGljZSgyKSk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2opID0+IHByb2ouaWQgPT09IHRhcmdldElkKTtcclxuICBpZiAoXHJcbiAgICAocHJvamVjdCAhPT0gdW5kZWZpbmVkIHx8IHByb2plY3QgIT09IG51bGwpICYmXHJcbiAgICBldi50YXJnZXQuaWQuc2xpY2UoMCwgMikgPT0gXCJkcFwiXHJcbiAgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChwcm9qZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIgfHwgcHJvamVjdC50eXBlID09PSBcInByb2pcIikgJiZcclxuICAgICAgcHJvamVjdC5jb21wbGV0ZSA9PT0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChiaW4uZmluZCgob2JqKSA9PiBvYmouaWQgPT09IHByb2plY3QuaWQpKSB7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluLnB1c2gocHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3B3JHt0YXJnZXRJZH1gKTtcclxuICAgICAgcHJvakVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHcke3RhcmdldElkfWApO1xyXG4gICAgICBwcm9qRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvaldpdGhUYXNrID0gcHJvamVjdHMuZmluZCgocHJvaikgPT5cclxuICAgICAgcHJvai50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXJnZXRJZClcclxuICAgICk7XHJcbiAgICBpZiAocHJvaldpdGhUYXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2pXaXRoVGFzay50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IHRhcmdldElkXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2pXaXRoVGFzay50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHQke3RhcmdldElkfWApO1xyXG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgYmluIH0gZnJvbSBcIi4vcmVtb3ZlQ29tcGxldGVkXCI7XHJcbmltcG9ydCB7IGNsZWFyUG9wVXAgfSBmcm9tIFwiLi9jbGVhclBvcFVwXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9Mb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJCaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25XcmFwcGVyXCIpO1xyXG4gIGNvbnN0IGJpbiA9IGAgPGRpdiBjbGFzcz1cImJpbkJ0bldyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJiaW5CdG5cIj5CSU48L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGJpbik7XHJcbiAgY29uc3QgYmluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5CdG5cIik7XHJcbiAgYmluQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQmluRXZlbnQpO1xyXG4gIGJpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkJpbkV2ZW50KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckJpbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBiaW4gPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmluQm94XCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cImJpbl9faDJcIj5CSU4gU1RPUkFHRTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiaW5JbnNpZGVzXCI+PC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVBvcFVwXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBiaW4pO1xyXG4gIHBvcHVsYXRlQmluKCk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUG9wVXBcIik7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwRXZlbnQpO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwRXZlbnQpO1xyXG4gIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wVXBDb250YWluZXJcIikpIHtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlQmluID0gKCkgPT4ge1xyXG4gIGNsZWFyUmVuZGVyZWRCaW5JdGVtcygpO1xyXG4gIGJpbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICByZW5kZXJCaW5JdGVtKGl0ZW0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQmluSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaW5JbnNpZGVzXCIpO1xyXG4gIGNvbnN0IGJpbkl0ZW0gPSBgPGRpdiBjbGFzcz1cImJpbldyYXBwZXIgd3JhcHBlclwiIGlkPVwiYmkke2l0ZW0uaWR9XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm9iamVjdCAke2l0ZW0ucHJpb3JpdHl9ICR7aXRlbS5jb21wbGV0ZX1cIiBpZD1cImJvJHtpdGVtLmlkfSBcIj5cclxuICA8cCBjbGFzcz1cIm9iamVjdFRpdGxlXCIgaWQ9XCJidCR7aXRlbS5pZH1cIj4ke2l0ZW0udGl0bGV9PC9wPlxyXG4gIDxwIGNsYXNzPVwib2JqZWN0RGF0ZVwiIGlkPVwiYmQke2l0ZW0uaWR9XCI+JHtmb3JtYXREYXRlKGl0ZW0uY29tcGxldGlvbkRhdGUpfTwvcD5cclxuICA8cCBjbGFzcz1cIm9iamVjdFR5cGVcIiBpZD1cImJkJHtpdGVtLmlkfVwiPiR7aXRlbS50eXBlfTwvcD5cclxuICA8cCBjbGFzcz1cImRlbGV0ZVwiIGlkPVwiZHAke2l0ZW0uaWR9XCI+PC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBiaW5JdGVtKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyUmVuZGVyZWRCaW5JdGVtcyA9ICgpID0+IHtcclxuICBjb25zdCByZW5kZXJlZEJpbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaW5XcmFwcGVyXCIpO1xyXG4gIHJlbmRlcmVkQmluSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUJpbkl0ZW0gPSAoZXYpID0+IHtcclxuICBjb25zdCBpdGVtSWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxuICBjb25zdCBpdGVtSW5kZXggPSBiaW4uZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gaXRlbUlkKTtcclxuICBiaW4uc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VQb3BVcEV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICBjbGVhclBvcFVwKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVFdmVudCA9IChldikgPT4ge1xyXG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIHJlbW92ZUJpbkl0ZW0oZXYpO1xyXG4gIHBvcHVsYXRlQmluKCk7XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IG9wZW5CaW5FdmVudCA9IChldikgPT4ge1xyXG4gIHJlbmRlckJpbkNvbnRhaW5lcigpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcbmltcG9ydCB7IHJlbmRlckJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckRhaWx5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lciBkYWlseUNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b25XcmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld09iamVjdFwiIGlkPVwibmV3RGFpbHlUYXNrXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBEYWlseTwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIHJlbmRlckJpbigpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxuICBsaXN0ZW5lcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9ICgpID0+IHtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdEYWlseVRhc2tcIik7XHJcbiAgbmV3UHJvai5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckdldFBvcFVwKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZWRpdEl0ZW0gfSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdFBvcFVwID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZXYuaWQuc2xpY2UoMikpO1xyXG4gIGxldCBvYmplY3Q7XHJcbiAgaWYgKGV2LmlkLnNsaWNlKDAsIDIpICE9PSBcInB0XCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgICBvYmplY3QgPSBwcm9qZWN0O1xyXG4gIH0gZWxzZSBpZiAoZXYuaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qKGlkKTtcclxuICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIG9iamVjdCA9IHRhc2s7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKG9iamVjdC50eXBlICE9PSBcImRhaWx5XCIgJiYgb2JqZWN0LnR5cGUgIT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiB2YWx1ZT1cIiR7Zm9ybWF0RGF0ZShcclxuICAgIG9iamVjdC5kdWVEYXRlXHJcbiAgKX1cIj5cclxuICA8L2Rpdj5gO1xyXG4gIH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aW1lXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgaWQ9XCJ0aW1lXCIgdmFsdWU9XCIke2Zvcm1hdFRpbWUob2JqZWN0LmR1ZURhdGUpfVwiPlxyXG4gICAgPC9kaXY+YDtcclxuICB9XHJcblxyXG4gIGlmIChvYmplY3QudHlwZSA9PT0gXCJub3Rlc1wiKSB7XHJcbiAgICBjb25zdCBub3RlID0gYDxkaXYgY2xhc3M9XCJwb3BVcENvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke1xyXG4gICAgICAgIG9iamVjdC50aXRsZVxyXG4gICAgICB9XCIgYXV0b2ZvY3VzICBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiLz5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibm90ZURhdGVcIj4ke2Zvcm1hdERhdGUob2JqZWN0LmFkZGVkRGF0ZSl9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgJHtvYmplY3QucHJpb3JpdHl9XCIgZGF0YS1wcmlvcml0eT1cIiR7XHJcbiAgICAgIG9iamVjdC5wcmlvcml0eVxyXG4gICAgfVwiIGlkPVwibm90ZVByaW9yaXR5JHtvYmplY3QuaWR9XCI+TTwvZGl2PlxyXG4gICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+JHtcclxuICAgICAgICBvYmplY3Qubm90ZVxyXG4gICAgICB9PC90ZXh0YXJlYT5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3QuaWR9XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImNsb3NlQnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBub3RlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtcclxuICAgICAgb2JqZWN0LnRpdGxlXHJcbiAgICB9XCIgYXV0b2ZvY3VzICBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVdyYXBwZXJcIj5cclxuICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInByb2pSYWRpb1wiIGlkPVwibG93XCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwibG93XCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgfS8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiICR7XHJcbiAgICAgICAgb2JqZWN0LnByaW9yaXR5ID09PSBcIm1lZFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJoaWdoXCIgJHtcclxuICAgICAgICBvYmplY3QucHJpb3JpdHkgPT09IFwiaGlnaFwiID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgIH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgPHAgY2xhc3M9XCJ0YXNrQ29tcGxldGlvbkRhdGVcIj5cclxuICAgICAgICAke1xyXG4gICAgICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlID09PSBudWxsXHJcbiAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICA6IGBDb21wbGV0ZWQgb246JHtvYmplY3QuY29tcGxldGlvbkRhdGV9YFxyXG4gICAgICAgIH1cclxuICAgICAgPC9wPlxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiTm90ZSBnb2VzIGhlcmVcIj4ke1xyXG4gICAgICBvYmplY3Qubm90ZVxyXG4gICAgfTwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG4ke2lkfVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgcHJvalBhZ2UpO1xyXG4gIH1cclxuICBsaXN0ZW5lcnMoZXYuaWQpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkZFByb2pCdG4ke2lkLnNsaWNlKDIpfWApO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcclxuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZU1hcmtcIik7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIGlmIChwcmlvcml0eUJ0bikge1xyXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByaW9yaXR5KTtcclxuICB9XHJcbiAgaWYgKGlkLnNsaWNlKDAsIDIpICE9PSBcInB0XCIpIHtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICBlZGl0SXRlbShldi50YXJnZXQpO1xyXG4gICAgICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgbWFya0NhbGVuZGFyRGF5cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoaWQuc2xpY2UoMCwgMikgPT09IFwicHRcIikge1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgICAgIGVkaXRJdGVtKGV2LnRhcmdldCk7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyUG9wVXApO1xyXG4gIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wVXBDb250YWluZXJcIikpIHtcclxuICAgICAgY2xlYXJQb3BVcCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZFByb2ooaWQpIHtcclxuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGtub3duVGFzayA9IHByb2oudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGtub3duVGFzaykge1xyXG4gICAgICByZXR1cm4gcHJvajtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5pbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwiLi9maWx0ZXJCeVR5cGVcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJCaW4gfSBmcm9tIFwiLi9yZW5kZXJCaW5cIjtcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbmxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IGN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKTtcclxuY29uc3QgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuZXhwb3J0IGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCBjdXJyZW50RGF5KTtcclxuY29uc3QgbW9udGhzID0gW1xyXG4gIFwiSmFudWFyeVwiLFxyXG4gIFwiRmVicnVhcnlcIixcclxuICBcIk1hcmNoXCIsXHJcbiAgXCJBcHJpbFwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5lXCIsXHJcbiAgXCJKdWx5XCIsXHJcbiAgXCJBdWd1c3RcIixcclxuICBcIlNlcHRlbWJlclwiLFxyXG4gIFwiT2N0b2JlclwiLFxyXG4gIFwiTm92ZW1iZXJcIixcclxuICBcIkRlY2VtYmVyXCIsXHJcbl07XHJcbmNvbnN0IHdlZWtEYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJFdmVudHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGV2ZW50c1BhZ2UgPSBgIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImV2ZW50c0NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhdGVXcmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBiYWNrd2FyZFwiIGlkPVwiYmFja3dhcmRcIj48PC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiY3VycmVudERhdGVcIj48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdyBmb3J3YXJkXCIgaWQ9XCJmb3J3YXJkXCI+PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJXcmFwcGVyXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImhlYWRpbmdzXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPk1vbjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlR1ZTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPldlZDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlRodTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPkZyaTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlNhdDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGluZ1wiPlN1bjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzcz1cImNhbGVuZGFyRGF5c1wiPlxyXG4gICAgICA8L3VsPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnROb3RlV3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbldyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJuZXdPYmplY3RcIiBpZD1cIm5ld0V2ZW50XCI+XHJcbiAgICAgPHAgY2xhc3M9XCJuZXdPYmplY3RfX3BcIj5BZGQgRXZlbnQ8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiAgICBcclxuICAgIGA7XHJcblxyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGV2ZW50c1BhZ2UpO1xyXG4gIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgcmVuZGVyQmluKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhciA9ICgpID0+IHtcclxuICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgY2FsZW5kYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGVuZGFyRGF5c1wiKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudERhdGVcIik7XHJcbiAgY29uc3QgZGF0ZVN0cmluZyA9IGZpcnN0RGF0ZU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tZXVcIiwge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGFzdERhdGVPZkxhc3RNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5c0luTW9udGgpLmdldERheSgpO1xyXG4gIGNvbnN0IHBhZGRpbmdEYXlzID0gd2Vla0RheXMuaW5kZXhPZihkYXRlU3RyaW5nLnNwbGl0KFwiLFwiKVswXSk7XHJcbiAgLy8gcHJldmlvdXMgbW9udGhcclxuICBjb25zdCBjYWxlbmRhckRheXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gcGFkZGluZ0RheXM7IGkgPiAwOyAtLWkpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzTW9udGhEYXkgPSBsYXN0RGF0ZU9mTGFzdE1vbnRoIC0gaSArIDE7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIHByZXZpb3VzTW9udGhEYXkgLSAxKS5nZXREYXkoKV0gPT09XHJcbiAgICAgICAgXCJTYXR1cmRheVwiIHx8XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgcHJldmlvdXNNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlN1bmRheVwiO1xyXG4gICAgY29uc3QgaXNJbmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb25zdCBiYWNrd2FyZCA9IHRydWU7XHJcbiAgICBjYWxlbmRhckRheXMucHVzaCh7XHJcbiAgICAgIGRheTogbGFzdERhdGVPZkxhc3RNb250aCAtIGkgKyAxLFxyXG4gICAgICBpc1dlZWtlbmQsXHJcbiAgICAgIGlzSW5hY3RpdmUsXHJcbiAgICAgIGJhY2t3YXJkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vY3VycmVudCBtb250aFxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIHtcclxuICAgIGNvbnN0IGlzQ3VycmVudERheSA9XHJcbiAgICAgIGkgPT09IGN1cnJlbnREYXkgJiYgbW9udGggPT09IGN1cnJlbnRNb250aCAmJiB5ZWFyID09PSBjdXJyZW50WWVhcjtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWREYXkgPVxyXG4gICAgICBzZWxlY3RlZERhdGUgJiZcclxuICAgICAgaSA9PT0gc2VsZWN0ZWREYXRlLmdldERhdGUoKSAmJlxyXG4gICAgICBtb250aCA9PT0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgeWVhciA9PT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBpc1dlZWtlbmQgPVxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSAtIDEpLmdldERheSgpXSA9PT0gXCJTYXR1cmRheVwiIHx8XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoLCBpIC0gMSkuZ2V0RGF5KCldID09PSBcIlN1bmRheVwiO1xyXG4gICAgY29uc3QgaXNEYXkgPSB0cnVlO1xyXG4gICAgY29uc3QgaXNQYXN0ID1cclxuICAgICAgLyogaSA8IGN1cnJlbnREYXkgJiZcclxuICAgICAgbW9udGggPD0gY3VycmVudE1vbnRoICYmICovXHJcbiAgICAgIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBpKSA8XHJcbiAgICAgIG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIGN1cnJlbnREYXkpO1xyXG4gICAgY2FsZW5kYXJEYXlzLnB1c2goe1xyXG4gICAgICBkYXk6IGksXHJcbiAgICAgIGlzQ3VycmVudERheSxcclxuICAgICAgaXNTZWxlY3RlZERheSxcclxuICAgICAgaXNXZWVrZW5kLFxyXG4gICAgICBpc0RheSxcclxuICAgICAgaXNQYXN0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vbmV4dCBtb250aFxyXG4gIGZvciAobGV0IGkgPSBsYXN0RGF5T2ZNb250aDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3QgbmV4dE1vbnRoRGF5ID0gaSAtIGxhc3REYXlPZk1vbnRoICsgMTtcclxuICAgIGNvbnN0IGlzV2Vla2VuZCA9XHJcbiAgICAgIHdlZWtEYXlzW25ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgbmV4dE1vbnRoRGF5IC0gMSkuZ2V0RGF5KCldID09PVxyXG4gICAgICAgIFwiU2F0dXJkYXlcIiB8fFxyXG4gICAgICB3ZWVrRGF5c1tuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIG5leHRNb250aERheSAtIDEpLmdldERheSgpXSA9PT1cclxuICAgICAgICBcIlN1bmRheVwiO1xyXG4gICAgY29uc3QgaXNJbmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb25zdCBmb3J3YXJkID0gdHJ1ZTtcclxuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHsgZGF5OiBuZXh0TW9udGhEYXksIGlzV2Vla2VuZCwgaXNJbmFjdGl2ZSwgZm9yd2FyZCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFyRGF5SFRNTCA9IGNhbGVuZGFyRGF5c1xyXG4gICAgLm1hcCgoZGF5SW5mbykgPT4ge1xyXG4gICAgICBsZXQgY2xhc3NOYW1lcyA9IFwiY2FsZW5kYXJEYXlcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNDdXJyZW50RGF5KSBjbGFzc05hbWVzICs9IFwiIGN1cnJlbnREYXlcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNTZWxlY3RlZERheSkgY2xhc3NOYW1lcyArPSBcIiBzZWxlY3RlZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc1dlZWtlbmQpIGNsYXNzTmFtZXMgKz0gXCIgd2Vla0VuZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc0luYWN0aXZlKSBjbGFzc05hbWVzICs9IFwiIGluYWN0aXZlXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmJhY2t3YXJkKSBjbGFzc05hbWVzICs9IFwiIGJhY2t3YXJkXCI7XHJcbiAgICAgIGlmIChkYXlJbmZvLmZvcndhcmQpIGNsYXNzTmFtZXMgKz0gXCIgZm9yd2FyZFwiO1xyXG4gICAgICBpZiAoZGF5SW5mby5pc0RheSkgY2xhc3NOYW1lcyArPSBcIiBkYXlcIjtcclxuICAgICAgaWYgKGRheUluZm8uaXNQYXN0KSBjbGFzc05hbWVzICs9IFwiIGluYWN0aXZlXCI7XHJcblxyXG4gICAgICByZXR1cm4gYDxsaSBjbGFzcz1cIiR7Y2xhc3NOYW1lc31cIj4ke2RheUluZm8uZGF5fTwvbGk+YDtcclxuICAgIH0pXHJcbiAgICAuam9pbihcIlwiKTtcclxuXHJcbiAgY2FsZW5kYXJDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNhbGVuZGFyRGF5SFRNTCk7XHJcbiAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBgJHttb250aHNbbW9udGhdfSAke3llYXJ9YDtcclxuICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtDYWxlbmRhckRheXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyZWRCeVR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gIGZpbHRlcmVkQnlUeXBlLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBvYmplY3QuZHVlRGF0ZSAmJlxyXG4gICAgICBvYmplY3QuZHVlRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmXHJcbiAgICAgIG9iamVjdC5kdWVEYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcmVuZGVyZWREYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICAgIGNvbnN0IGR1ZVN0cmluZyA9IFN0cmluZyhvYmplY3QuZHVlRGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgICByZW5kZXJlZERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAgICAgaWYgKGR1ZVN0cmluZykge1xyXG4gICAgICAgICAgbWFyayhkYXksIGR1ZVN0cmluZywgb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgb2JqZWN0LmNvbXBsZXRpb25EYXRlICYmXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmXHJcbiAgICAgIG9iamVjdC5jb21wbGV0aW9uRGF0ZS5nZXRNb250aCgpID09PSBtb250aFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xyXG4gICAgICBjb25zdCBjb21wbGV0aW9uU3RyaW5nID0gU3RyaW5nKG9iamVjdC5jb21wbGV0aW9uRGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgICByZW5kZXJlZERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbXBsZXRpb25TdHJpbmcpIHtcclxuICAgICAgICAgIG1hcmsoZGF5LCBjb21wbGV0aW9uU3RyaW5nLCBvYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXJrID0gKGRheSwgc3RyaW5nLCBvYmplY3QpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFN0cmluZyA9IFN0cmluZyhzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpKTtcclxuICBjb25zdCBkYXlTdGluZyA9IFN0cmluZyhkYXkuaW5uZXJUZXh0KTtcclxuICBpZiAoZGF5U3RpbmcgPT09IHN0cmluZykge1xyXG4gICAgaWYgKFxyXG4gICAgICBkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApICYmXHJcbiAgICAgIGRheVN0aW5nID09PSBzZWxlY3RlZFN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKGBldmVudCR7b2JqZWN0LnByaW9yaXR5fWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoYGV2ZW50JHtvYmplY3QucHJpb3JpdHl9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcndhcmRCYWNrd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJyb3dcIik7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdFdmVudFwiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG4gIGZvcndhcmRCYWNrd2FyZC5mb3JFYWNoKChhcnJvdykgPT4ge1xyXG4gICAgYXJyb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vbnRoQ2hhbmdlckV2ZW50KTtcclxuICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb250aENoYW5nZXJFdmVudCk7XHJcbiAgfSk7XHJcbiAgY2FsZW5kYXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgZGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXRlU2VsZWN0aW9uRXZlbnQpO1xyXG4gICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYXRlU2VsZWN0aW9uRXZlbnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbW9udGhDaGFuZ2VyRXZlbnQgPSAoZXYpID0+IHtcclxuICBpZiAoXHJcbiAgICBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9yd2FyZFwiKSB8fFxyXG4gICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJhY2t3YXJkXCIpXHJcbiAgKSB7XHJcbiAgICBjbGVhckNhbGVuZGFyKCk7XHJcbiAgICBjaGFuZ2VNb250aChldik7XHJcbiAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRhdGVTZWxlY3Rpb25FdmVudCA9IChldikgPT4ge1xyXG4gIHNlbGVjdERhdGUoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgY2xlYXJDYWxlbmRhciA9ICgpID0+IHtcclxuICBjb25zdCBjYWxlbmRhckRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbGVuZGFyRGF5XCIpO1xyXG4gIGNhbGVuZGFyRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgIGRheS5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZU1vbnRoID0gKGV2KSA9PiB7XHJcbiAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3J3YXJkXCIpKSB7XHJcbiAgICBtb250aCArPSAxO1xyXG4gICAgaWYgKG1vbnRoID4gMTEpIHtcclxuICAgICAgbW9udGggPSAwO1xyXG4gICAgICB5ZWFyICs9IDE7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmFja3dhcmRcIikpIHtcclxuICAgIG1vbnRoIC09IDE7XHJcbiAgICBpZiAobW9udGggPCAwKSB7XHJcbiAgICAgIG1vbnRoID0gMTE7XHJcbiAgICAgIHllYXIgLT0gMTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3REYXRlID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYWxlbmRhckRheVwiKTtcclxuICBjb25zdCBzZWxlY3RlZERhdGVFbGVtZW50ID0gZXYudGFyZ2V0O1xyXG4gIGxldCBzZWxlY3RlZERheSA9IGV2LnRhcmdldC5pbm5lclRleHQ7XHJcbiAgY2FsZW5kYXJEYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICB9KTtcclxuICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImluYWN0aXZlXCIpKSB7XHJcbiAgICBtb250aENoYW5nZXJFdmVudChldik7XHJcbiAgICBjb25zdCBuZXdSZW5kZXJlZE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlcIik7XHJcbiAgICBjb25zdCBuZXdTZWxlY3RlZERhdGVFbGVtZW50ID0gQXJyYXkuZnJvbShuZXdSZW5kZXJlZE1vbnRoKS5maW5kKFxyXG4gICAgICAoZGF5KSA9PiBkYXkuaW5uZXJUZXh0ID09PSBldi50YXJnZXQuaW5uZXJUZXh0XHJcbiAgICApO1xyXG4gICAgbmV3U2VsZWN0ZWREYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlbGVjdGVkRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gIH1cclxuICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgc2VsZWN0ZWREYXkpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2xlYXJQb3BVcCB9IGZyb20gXCIuL2NsZWFyUG9wVXBcIjtcclxuaW1wb3J0IHsgZ2V0T2JqZWN0IH0gZnJvbSBcIi4vZ2V0T2JqZWN0XCI7XHJcbmltcG9ydCB7IGNsZWFyUmVuZGVyZWRQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUmVuZGVyZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hQcmlvcml0eSB9IGZyb20gXCIuL3N3aXRjaFByaW9yaXR5XCI7XHJcbmltcG9ydCB7IG1hcmtDYWxlbmRhckRheXMgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi9mb3JtYXRUaW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyR2V0UG9wVXAgPSAob2JqSWQpID0+IHtcclxuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbGV0IG9iamVjdElkID0gb2JqSWQ7XHJcblxyXG4gIGlmIChvYmpJZCBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgb2JqZWN0SWQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGxldCBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgaWYgKGdldFR5cGUoKSA9PT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aW1lXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIHZhbHVlPVwiJHtmb3JtYXRUaW1lKFxyXG4gICAgICBjdXJyZW50VGltZVxyXG4gICAgKX1cIj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIG9iamVjdElkID09PSB1bmRlZmluZWQgJiZcclxuICAgIGdldFR5cGUoKSAhPT0gXCJldmVudHNcIiAmJlxyXG4gICAgZ2V0VHlwZSgpICE9PSBcImRhaWx5XCJcclxuICApIHtcclxuICAgIGRhdGVFbGVtZW50ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImR1ZVdyYXBwZXJcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCJsYWJlbFwiPkR1ZTo8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCI+PC9pbnB1dD5cclxuICAgICAgICAgPC9kaXY+YDtcclxuICB9IGVsc2UgaWYgKG9iamVjdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGlmIChnZXRUeXBlKCkgPT09IFwibm90ZXNcIikge1xyXG4gICAgbm90ZXMoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvalBhZ2UgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImFkZFRhc2tcIj5cclxuICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgYXV0b2ZvY3VzIHBsYWNlaG9sZGVyPVwiVGl0bGUgZ29lcyBoZXJlXCIvPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5V3JhcHBlclwiPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicHJvalJhZGlvXCIgaWQ9XCJsb3dcIiBjaGVja2VkIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cIm1lZFwiIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJwcm9qUmFkaW9cIiBpZD1cImhpZ2hcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJwcm9qTm90ZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiTm90ZSBnb2VzIGhlcmVcIj48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcFVwQnV0dG9uXCIgaWQ9XCJhZGRQcm9qQnRuJHtvYmplY3RJZH1cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICB9XHJcbiAgbGlzdGVuZXJzKG9iamVjdElkKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IChvYmpJZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbaWRePVwiYWRkUHJvakJ0blwiXWApO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcclxuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZU1hcmtcIik7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwQ29udGFpbmVyXCIpO1xyXG4gIGlmIChwcmlvcml0eUJ0bikge1xyXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFByaW9yaXR5KTtcclxuICB9XHJcbiAgaWYgKG5ld1Byb2opIHtcclxuICAgIG5ld1Byb2ouZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgaWYgKG9iaklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV2SWQgPSBOdW1iZXIoZXYudGFyZ2V0LmlkLnNsaWNlKDEwKSk7XHJcbiAgICAgICAgICBjbGVhclJlbmRlcmVkUHJvamVjdHMoKTtcclxuICAgICAgICAgIGdldE9iamVjdChldklkKTtcclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iaklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNsZWFyUmVuZGVyZWRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgZ2V0T2JqZWN0KCk7XHJcbiAgICAgICAgICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICAgICAgICAgIG1hcmtDYWxlbmRhckRheXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclBvcFVwKTtcclxuICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcFVwQ29udGFpbmVyXCIpKSB7XHJcbiAgICAgIGNsZWFyUG9wVXAoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG5vdGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IG5vdGUgPSBgPGRpdiBjbGFzcz1cInBvcFVwQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBvcFVwZmllbGRcIiBpZD1cImVkaXRUYXNrXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIFwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlRpdGxlIGdvZXMgaGVyZVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgbG93XCIgZGF0YS1wcmlvcml0eT1cImxvd1wiIGlkPVwibm90ZVByaW9yaXR5XCI+PC9kaXY+XHJcbiAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cInByb2pOb3RlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJOb3RlIGdvZXMgaGVyZVwiPjwvdGV4dGFyZWE+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicG9wVXBCdXR0b25cIiBpZD1cImFkZFByb2pCdG5cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJwb3BVcEJ1dHRvblwiIGlkPVwiY2xvc2VCdG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5vdGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcbmltcG9ydCB7IHJlbmRlckJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck5vdGVzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBjb25zdCBwcm9qUGFnZSA9IGBcclxuICA8ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lciBub3Rlc0NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b25XcmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ld05vdGVcIiBpZD1cIm5ld05vdGVcIj5cclxuICAgIDxwIGNsYXNzPVwibmV3Tm90ZV9fcFwiPkFkZCBOb3RlPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJiaWdHcmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwib25lXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwidHdvXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sR3JpZFwiIGlkPVwidGhyZWVcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xHcmlkXCIgaWQ9XCJmb3VyXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHByb2pQYWdlKTtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbiAgcmVuZGVyQmluKCk7XHJcbiAgbGlzdGVuZXJzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3Tm90ZVwiKTtcclxuICBuZXdQcm9qLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJHZXRQb3BVcCk7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJQcm9qVGFzayB9IGZyb20gXCIuL3JlbmRlclByb2pUYXNrXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2V0UG9wVXAgfSBmcm9tIFwiLi9yZW5kZXJHZXRQb3BVcFwiO1xyXG5pbXBvcnQgeyBnZXRDb21wbGV0aW9uIH0gZnJvbSBcIi4vZ2V0Q29tcGxldGlvblwiO1xyXG5pbXBvcnQgeyBzb3J0QXJyYXkgfSBmcm9tIFwiLi9zb3J0QXJyYXlcIjtcclxuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gXCIuL3JlbW92ZUl0ZW1cIjtcclxuaW1wb3J0IHsgcmVuZGVyRWRpdFBvcFVwIH0gZnJvbSBcIi4vcmVuZGVyRWRpdFBvcFVwXCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gXCIuL2ZpbHRlckJ5VHlwZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVRvZGF5IH0gZnJvbSBcIi4vZmlsdGVyQnlUb2RheVwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlIH0gZnJvbSBcIi4vZ2V0VHlwZVwiO1xyXG5pbXBvcnQgeyBjbGVhclJlbmRlcmVkUHJvamVjdHMgfSBmcm9tIFwiLi9jbGVhclJlbmRlcmVkUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgc3dpdGNoUHJpb3JpdHkgfSBmcm9tIFwiLi9zd2l0Y2hQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeURhdGUgfSBmcm9tIFwiLi9maWx0ZXJCeURhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuL2Zvcm1hdFRpbWVcIjtcclxuaW1wb3J0IHsgbWFya0NhbGVuZGFyRGF5cyB9IGZyb20gXCIuL3JlbmRlckV2ZW50c1BhZ2VcIjtcclxuaW1wb3J0IHsgZmlsdGVyUmVtb3ZlZCB9IGZyb20gXCIuL2ZpbHRlclJlbW92ZWRcIjtcclxuaW1wb3J0IHsgZmlsdGVyTm90ZUdyaWRzIH0gZnJvbSBcIi4vZmlsdGVyTm90ZUdyaWRzXCI7XHJcbmltcG9ydCB7IGVkaXROb3RlIH0gZnJvbSBcIi4vZWRpdE5vdGVcIjtcclxuaW1wb3J0IHsgbm90ZVRvb2x0aXAsIHJlbW92ZVRvb2x0aXAgfSBmcm9tIFwiLi9ub3RlVG9vbHRpcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlck9iamVjdHMgPSAoKSA9PiB7XHJcbiAgY2xlYXJSZW5kZXJlZFByb2plY3RzKCk7XHJcbiAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbEdyaWRcIik7XHJcbiAgY29uc3QgZmlsdGVyZWRHcmlkcyA9IGZpbHRlck5vdGVHcmlkcyhncmlkcyk7XHJcbiAgY29uc3QgYXJyYXlPZlR5cGUgPSBmaWx0ZXJCeVR5cGUocHJvamVjdHMpO1xyXG4gIGxldCBkYWlseUFycmF5ID0gc29ydEFycmF5KGFycmF5T2ZUeXBlKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIpIHtcclxuICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeVRvZGF5KHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlck91dFJlbW92ZWQgPSBmaWx0ZXJSZW1vdmVkKGRhaWx5QXJyYXkpO1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGZpbHRlck91dFJlbW92ZWQpO1xyXG4gICAgc29ydGVkLmZvckVhY2goKHByb2opID0+IHtcclxuICAgICAgcmVuZGVyT2JqZWN0KHByb2opO1xyXG4gICAgICByZW5kZXJQcm9qVGFzayhwcm9qKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VHlwZSgpID09PSBcIm5vdGVzXCIpIHtcclxuICAgIGxldCBqID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFpbHlBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaiA+PSBmaWx0ZXJlZEdyaWRzLmxlbmd0aCkge1xyXG4gICAgICAgIGogPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlck5vdGVzKGRhaWx5QXJyYXlbaV0sIGZpbHRlcmVkR3JpZHNbal0pO1xyXG4gICAgICBqKys7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChnZXRUeXBlKCkgPT09IFwiZXZlbnRzXCIpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlUeXBlID0gZmlsdGVyQnlUeXBlKHByb2plY3RzKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnlEYXRlID0gZmlsdGVyQnlEYXRlKGZpbHRlcmVkQnlUeXBlKTtcclxuICAgIGlmIChmaWx0ZXJlZEJ5RGF0ZSkge1xyXG4gICAgICBkYWlseUFycmF5ID0gZmlsdGVyZWRCeURhdGU7XHJcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRBcnJheShkYWlseUFycmF5KTtcclxuICAgICAgc29ydGVkLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckV2ZW50cyhvYmplY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhaWx5QXJyYXkgPSBmaWx0ZXJCeVRvZGF5KGZpbHRlcmVkQnlUeXBlKTtcclxuICAgICAgY29uc3Qgc29ydGVkID0gc29ydEFycmF5KGRhaWx5QXJyYXkpO1xyXG4gICAgICBzb3J0ZWQuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXZlbnRzKG9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJPdXRSZW1vdmVkID0gZmlsdGVyUmVtb3ZlZChkYWlseUFycmF5KTtcclxuICAgIGZpbHRlck91dFJlbW92ZWQuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgICByZW5kZXJPYmplY3QocHJvaik7XHJcbiAgICAgIHJlbmRlclByb2pUYXNrKHByb2opO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5lcnMoKTtcclxuICBnZXRDb21wbGV0aW9uKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVjayhjb21wbGV0ZSkge1xyXG4gIGlmIChjb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuICdjaGVja2VkPVwiY2hlY2tlZFwiJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJPYmplY3QgPSAocHJvaikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdENvbnRhaW5lclwiKTtcclxuXHJcbiAgbGV0IGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtwcm9qLmlkfVwiPjwvcD5gO1xyXG4gIGxldCBhZGRUYXNrID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJuZXdUYXNrXCIgaWQ9XCJudCR7cHJvai5pZH1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJuZXdUYXNrX19wXCI+KzwvcD5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBpZiAoXHJcbiAgICBnZXRUeXBlKCkgPT09IFwiZGFpbHlcIiAmJlxyXG4gICAgKHByb2oudHlwZSA9PT0gXCJwcm9qXCIgfHwgcHJvai50eXBlID09PSBcImV2ZW50c1wiKVxyXG4gICkge1xyXG4gICAgYWRkVGFzayA9IGA8ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+YDtcclxuICAgIGRlbGV0ZUVsZW1lbnQgPSBcIlwiO1xyXG4gIH1cclxuICBsZXQgY2hlY2tFbGVtZW50ID0gYCR7YWRkVGFza31gO1xyXG4gIGlmIChwcm9qLnR5cGUgPT09IFwiZGFpbHlcIiAmJiBwcm9qLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tFbGVtZW50ID0gYCR7YWRkVGFza31cclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbXBsZXRpb25cIiBuYW1lPVwiY29tcGxldGlvblwiIGlkPVwiJHtcImNcIn0ke1xyXG4gICAgICBwcm9qLmlkXHJcbiAgICB9XCIgICR7Y2hlY2socHJvai5jb21wbGV0ZSl9Lz5gO1xyXG4gIH0gZWxzZSBpZiAocHJvai50eXBlID09PSBcImRhaWx5XCIgJiYgcHJvai50YXNrcy5sZW5ndGggIT09IDApIHtcclxuICAgIGNoZWNrRWxlbWVudCA9IGAke2FkZFRhc2t9XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0dGVkRHVlRGF0ZSA9XHJcbiAgICBwcm9qLmR1ZURhdGUgJiYgIWlzTmFOKHByb2ouZHVlRGF0ZSkgPyBmb3JtYXREYXRlKHByb2ouZHVlRGF0ZSkgOiBcIlwiO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBgPHAgY2xhc3M9XCJvYmpEYXRlXCI+JHtmb3JtYXR0ZWREdWVEYXRlfTwvcD5gO1xyXG4gIGNvbnN0IGR1ZVRpbWUgPSBgPHAgY2xhc3M9XCJvYmpUaW1lXCI+JHtmb3JtYXRUaW1lKHByb2ouZHVlRGF0ZSl9PC9wPmA7XHJcbiAgY29uc3QgT2JqZWN0ID0gYFxyXG48ZGl2IGNsYXNzPVwib2JqZWN0V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7cHJvai5pZH1cIj5cclxuPGRpdiBjbGFzcz1cIm9iamVjdCAke3Byb2oucHJpb3JpdHl9ICR7cHJvai5jb21wbGV0ZX0gJHtcclxuICAgIGdldFR5cGUoKSA9PT0gXCJkYWlseVwiID8gcHJvai50eXBlIDogXCJcIlxyXG4gIH1cIiBpZD1cInBwJHtwcm9qLmlkfVwiPlxyXG4ke2NoZWNrRWxlbWVudH1cclxuICA8cCBjbGFzcz1cIm9ialRpdGxlXCI+JHtwcm9qLnRpdGxlfTwvcD5cclxuICA8cCBjbGFzcz1cIm9iak5vdGVcIiBpZD1cIm9uJHtwcm9qLmlkfVwiPjwvcD5cclxuICAke1xyXG4gICAgcHJvai50eXBlID09PSBcImRhaWx5XCJcclxuICAgICAgPyBgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmBcclxuICAgICAgOiBwcm9qLnR5cGUgPT09IFwicHJvalwiICYmIGdldFR5cGUoKSAhPT0gXCJkYWlseVwiXHJcbiAgICAgID8gZHVlRGF0ZVxyXG4gICAgICA6IHByb2oudHlwZSA9PT0gXCJldmVudHNcIlxyXG4gICAgICA/IGR1ZVRpbWVcclxuICAgICAgOiBcIlwiXHJcbiAgfVxyXG5cclxuICAke2RlbGV0ZUVsZW1lbnR9XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwidGFza1dyYXBwZXJcIiBpZD1cInR3JHtwcm9qLmlkfVwiPlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE9iamVjdCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJOb3RlcyA9IChvYmplY3QsIHRhcmdldEdyaWQpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZShvYmplY3QuYWRkZWREYXRlKTtcclxuICBjb25zdCBjb250YWluZXIgPSB0YXJnZXRHcmlkO1xyXG4gIGNvbnN0IE5vdGUgPSBgPGRpdiBjbGFzcz1cIm5vdGVXcmFwcGVyIHdyYXBwZXJcIiBpZD1cInB3JHtvYmplY3QuaWR9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RlT2JqZWN0XCIgaWQ9XCJubyR7b2JqZWN0LmlkfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90ZU1hcmsgJHtvYmplY3QucHJpb3JpdHl9XCIgaWQ9XCJubSR7b2JqZWN0LmlkfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlVGl0bGUgZWRpdGFibGVcIiBpZD1cIm50JHtvYmplY3QuaWR9XCIgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPiR7b2JqZWN0LnRpdGxlfTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJub3RlRGF0ZVwiIGlkPVwibmQke29iamVjdC5pZH1cIj4ke2Zvcm1hdHRlZERhdGV9PC9wPlxyXG4gICAgICBcclxuICAgICAgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImRwJHtvYmplY3QuaWR9XCI+PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm5vdGVCb2R5IGVkaXRhYmxlXCIgaWQ9XCJuYiR7b2JqZWN0LmlkfVwiIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIj4ke29iamVjdC5ub3RlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIE5vdGUpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRXZlbnRzID0gKG9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlbnROb3RlV3JhcHBlclwiKTtcclxuICBjb25zdCBkYXRlRWxlbWVudCA9IG9iamVjdC50eXBlID09PSBcInByb2pcIiA/IFwiXCIgOiBmb3JtYXRUaW1lKG9iamVjdC5kdWVEYXRlKTtcclxuICBjb25zdCBldmVudEVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkV2ZW50V3JhcHBlciB3cmFwcGVyXCIgaWQ9XCJwdyR7b2JqZWN0LmlkfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJvYmplY3QgJHtvYmplY3QucHJpb3JpdHl9ICR7b2JqZWN0LmNvbXBsZXRlfVwiIGlkPVwiZW8ke1xyXG4gICAgb2JqZWN0LmlkXHJcbiAgfSBcIj5cclxuICA8cCBjbGFzcz1cImV2ZW50RGF0ZVwiIGlkPVwiZWQke29iamVjdC5pZH1cIj4ke2RhdGVFbGVtZW50fTwvcD5cclxuICA8cCBjbGFzcz1cImV2ZW50VGl0bGVcIiBpZD1cImV0JHtvYmplY3QuaWR9XCI+JHtvYmplY3QudGl0bGV9PC9wPlxyXG4gIDxwIGNsYXNzPVwiZXZlbnROb3RlXCIgaWQ9XCJlbiR7b2JqZWN0LmlkfVwiPiR7b2JqZWN0Lm5vdGUgPyBcIlwiIDogXCJcIn08L3A+XHJcbiAgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PlxyXG4gIDxwIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkcCR7b2JqZWN0LmlkfVwiPjwvcD5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBldmVudEVsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5vdGVJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIudGFza05vdGUsIC5vYmpOb3RlLCAuZXZlbnROb3RlXCJcclxuICApO1xyXG4gIGNvbnN0IG5ld1Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXdUYXNrXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2JqZWN0XCIpO1xyXG4gIGNvbnN0IHRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5UYXNrXCIpO1xyXG4gIGNvbnN0IG1hcmtOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlTWFya1wiKTtcclxuICBjb25zdCBlZGl0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdGFibGVcIik7XHJcbiAgZWRpdGFibGUuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dEV2ZW50KTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dEV2ZW50KTtcclxuICB9KTtcclxuICBuZXdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICB0YXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrRXZlbnQpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0V2ZW50KTtcclxuICB9KTtcclxuICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVFdmVudCk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUV2ZW50KTtcclxuICB9KTtcclxuICBwcm9qZWN0QnRucy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdEV2ZW50KTtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0RXZlbnQpO1xyXG4gIH0pO1xyXG4gIHRhc2tCdG5zLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIHRhc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrRXZlbnQpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tFdmVudCk7XHJcbiAgfSk7XHJcbiAgbWFya05vdGUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hcmtOb3RlRXZlbnQpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXJrTm90ZUV2ZW50KTtcclxuICB9KTtcclxuICBub3RlSW5kaWNhdG9yLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xyXG4gICAgaW5kaWNhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG5vdGVUb29sdGlwKTtcclxuICAgIGluZGljYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCByZW1vdmVUb29sdGlwKTtcclxuICAgIGluZGljYXRvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBub3RlVG9vbHRpcCk7XHJcbiAgICBpbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlVG9vbHRpcCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbnB1dEV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgZWRpdE5vdGUoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFByb2plY3RFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm9iamVjdFwiKTtcclxuICBpZiAoXHJcbiAgICAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRpb25cIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90ZU1hcmtcIikgJiZcclxuICAgICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV3VGFza1wiKSAmJlxyXG4gICAgIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXdUYXNrX19wXCIpXHJcbiAgKSB7XHJcbiAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFza0V2ZW50ID0gKGV2KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCIuVGFza1wiKTtcclxuICBpZiAoIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0aW9uXCIpKSB7XHJcbiAgICByZW5kZXJFZGl0UG9wVXAodGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXJrTm90ZUV2ZW50ID0gKGV2KSA9PiB7XHJcbiAgc3dpdGNoUHJpb3JpdHkoZXYpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlRXZlbnQgPSAoZXYpID0+IHtcclxuICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBpZiAoZ2V0VHlwZSgpID09PSBcImV2ZW50c1wiKSB7XHJcbiAgICBtYXJrQ2FsZW5kYXJEYXlzKCk7XHJcbiAgfVxyXG4gIHJlbW92ZUl0ZW0oZXYpO1xyXG4gIHJlbmRlck9iamVjdHMoKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRhc2tFdmVudCA9IChldikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm5ld1Rhc2tcIik7XHJcbiAgcmVuZGVyR2V0UG9wVXAodGFyZ2V0LmlkLnNsaWNlKDIpKTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICByZW5kZXJPYmplY3RzKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgcHJvaiwgZGFpbHksIGV2ZW50cywgbm90ZXMpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIFwicHJvalwiOlxyXG4gICAgICBwcm9qKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImRhaWx5XCI6XHJcbiAgICAgIGRhaWx5KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImV2ZW50c1wiOlxyXG4gICAgICBldmVudHMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXJPYmplY3RzIH0gZnJvbSBcIi4vcmVuZGVyT2JqZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHZXRQb3BVcCB9IGZyb20gXCIuL3JlbmRlckdldFBvcFVwXCI7XHJcbmltcG9ydCB7IHJlbmRlckJpbiB9IGZyb20gXCIuL3JlbmRlckJpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2pQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIGNvbnN0IHByb2pQYWdlID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIHByb2plY3RzQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJ1dHRvbldyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmV3T2JqZWN0XCIgaWQ9XCJuZXdQcm9qXCI+XHJcbiAgICA8cCBjbGFzcz1cIm5ld09iamVjdF9fcFwiPkFkZCBQcm9qZWN0PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgYDtcclxuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwcm9qUGFnZSk7XHJcbiAgcmVuZGVyT2JqZWN0cygpO1xyXG4gIHJlbmRlckJpbigpO1xyXG4gIGxpc3RlbmVycygpO1xyXG59O1xyXG5cclxuY29uc3QgbGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2pcIik7XHJcbiAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2V0UG9wVXApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9nZXRUeXBlXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvalRhc2sgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3R3JHtvYmouaWR9YCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IG9iai5pZCk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xyXG5cclxuICBsZXQgZGVsZXRlRWxlbWVudCA9IFwiXCI7XHJcbiAgbGV0IGRhdGVFbGVtZW50ID0gXCJcIjtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmNvbXBsZXRpb25EYXRlKTtcclxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiZGFpbHlcIikge1xyXG4gICAgICBkYXRlRWxlbWVudCA9IGA8cCBjbGFzcz1cInRhc2tEYXRlXCI+JHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRpb25EYXRlID09PSBudWxsID8gXCJcIiA6IGZvcm1hdHRlZERhdGVcclxuICAgICAgfTwvcD5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0ZUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0VHlwZSgpID09PSBcImRhaWx5XCIgJiYgcHJvamVjdC50eXBlID09PSBcInByb2pcIikge1xyXG4gICAgICBkZWxldGVFbGVtZW50ID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZUVsZW1lbnQgPSBgPHAgY2xhc3M9XCJkZWxldGVcIiBpZD1cImR0JHt0YXNrLmlkfVwiPjwvcD5gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIlRhc2sgJHt0YXNrLnByaW9yaXR5fSAke3Rhc2suY29tcGxldGV9XCIgaWQ9XCJwdCR7dGFzay5pZH1cIj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbXBsZXRpb25cIiBuYW1lPVwiY29tcGxldGlvblwiIGlkPVwiYyR7XHJcbiAgICAgICAgIHRhc2suaWRcclxuICAgICAgIH1cIiAgJHtjaGVjayh0YXNrLmNvbXBsZXRlKX0vPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFza1RpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2tOb3RlXCIgaWQ9XCJ0biR7dGFzay5pZH1cIj48L3A+XHJcbiAgICAgICAke2RhdGVFbGVtZW50fVxyXG4gICAgICAgICR7ZGVsZXRlRWxlbWVudH1cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2soY29tcGxldGUpIHtcclxuICBpZiAoY29tcGxldGUpIHtcclxuICAgIHJldHVybiAnY2hlY2tlZD1cImNoZWNrZWRcIic7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eU9yZGVyID0ge1xyXG4gICAgbG93OiAzLFxyXG4gICAgbWVkOiAyLFxyXG4gICAgaGlnaDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBzb3J0ZWRCeVByaW9yaXR5ID0gc29ydFRhc2tzKGFycmF5LCBwcmlvcml0eU9yZGVyKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbXAgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldIC0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgIGlmIChwcmlvcml0eUNvbXAgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHByaW9yaXR5Q29tcDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNvcnRlZEJ5UHJpb3JpdHk7XHJcbn07XHJcblxyXG5jb25zdCBzb3J0VGFza3MgPSAoYXJyYXksIG9yZGVyKSA9PiB7XHJcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICB0YXNrczogaXRlbS50YXNrcy5zb3J0KChhLCBiKSA9PiBvcmRlclthLnByaW9yaXR5XSAtIG9yZGVyW2IucHJpb3JpdHldKSxcclxuICB9KSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGVkaXRQcmlvcml0eSB9IGZyb20gXCIuL2VkaXRQcmlvcml0eVwiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvTG9jYWxTdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJpb3JpdHkgPSAoZXYpID0+IHtcclxuICBjb25zdCBwcmlvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldi50YXJnZXQuaWR9YCk7XHJcbiAgaWYgKHByaW9yRWxlbWVudCkge1xyXG4gICAgaWYgKHByaW9yRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsb3dcIikpIHtcclxuICAgICAgcHJpb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb3dcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICAgICAgcHJpb3JFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgXCJoaWdoXCIpO1xyXG4gICAgICBpZiAoZXYudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJubVwiKSkge1xyXG4gICAgICAgIGVkaXRQcmlvcml0eShldik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByaW9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaFwiKTtcclxuICAgICAgcHJpb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XHJcbiAgICAgIHByaW9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIFwibG93XCIpO1xyXG4gICAgICBpZiAoZXYudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJubVwiKSkge1xyXG4gICAgICAgIGVkaXRQcmlvcml0eShldik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBzdG9yZWRJZCB9IGZyb20gXCIuL2lkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IGJpbiB9IGZyb20gXCIuL3JlbW92ZUNvbXBsZXRlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0b3JlZElkXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZElkKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiaW5cIiwgSlNPTi5zdHJpbmdpZnkoYmluKSk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9qUGFnZSB9IGZyb20gXCIuL3JlbmRlclByb2pQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckV2ZW50c1BhZ2UgfSBmcm9tIFwiLi9yZW5kZXJFdmVudHNQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckRhaWx5UGFnZSB9IGZyb20gXCIuL3JlbmRlckRhaWx5UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tIFwiLi9pbml0aWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyTm90ZXNQYWdlIH0gZnJvbSBcIi4vcmVuZGVyTm90ZXNQYWdlXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVzY2FwZSB9IGZyb20gXCIuL2hhbmRsZUVzY2FwZVwiO1xyXG5pbXBvcnQgeyBoYW5kbGVFbnRlciB9IGZyb20gXCIuL2hhbmRsZUVudGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrRHVlRGF0ZXNBbmRSZW1vdmVDb21wbGV0ZWQgfSBmcm9tIFwiLi9yZW1vdmVDb21wbGV0ZWRcIjtcclxuXHJcbmluaXRpYWxpemF0aW9uKHJlbmRlckhlYWRlciwgcmVuZGVyRGFpbHlQYWdlLCByZW5kZXJGb290ZXIpO1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2TGlcIik7XHJcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLm5hdkxpXCIpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQYWdlKFxyXG4gICAgICB0YXJnZXQuaWQsXHJcbiAgICAgIHJlbmRlclByb2pQYWdlLFxyXG4gICAgICByZW5kZXJEYWlseVBhZ2UsXHJcbiAgICAgIHJlbmRlckV2ZW50c1BhZ2UsXHJcbiAgICAgIHJlbmRlck5vdGVzUGFnZVxyXG4gICAgKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5zZXRJbnRlcnZhbChjaGVja0R1ZURhdGVzQW5kUmVtb3ZlQ29tcGxldGVkLCAxMDAwICogNjApO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFbnRlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==