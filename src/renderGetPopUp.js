import { clearPopUp } from "./clearPopUp";
import { getObject } from "./getObject";
import { clearRenderedProjects } from "./clearRenderedProjects";
import { getType } from "./getType";
import { switchPriority } from "./switchPriority";
import { markCalendarDays } from "./renderEventsPage";

export const renderGetPopUp = (objId) => {
  const container = document.querySelector("main");
  let objectId = objId;

  if (objId instanceof PointerEvent) {
    objectId = undefined;
  }
  let dateElement = "";
  if (getType() === "daily") {
    dateElement = "";
  } else if (getType() === "events") {
    dateElement = `<label for="time" class="label">Due Time:</label>
    <input type="time" id="time" min="00:00" max="23:59">`;
  } else if (
    objectId === undefined &&
    getType() !== "events" &&
    getType() !== "daily"
  ) {
    dateElement = `<label for="date" class="label">Due date:</label>
         <input type="date" id="date"></input>`;
  } else if (objectId !== undefined) {
    dateElement = "";
  }

  if (getType() === "notes") {
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
    priorityBtn.addEventListener("click", switchPriority);
  }
  if (newProj) {
    newProj.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        if (objId !== undefined) {
          const evId = Number(ev.target.id.slice(10));
          clearRenderedProjects();
          getObject(evId);
          clearPopUp();
        } else if (objId === undefined) {
          clearRenderedProjects();
          getObject();
          if (getType() === "events") {
            markCalendarDays();
          }
          clearPopUp();
        }
      });
    });
  }
  closeBtn.addEventListener("click", clearPopUp);
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
