import { renderProjTask } from "./renderProjTask";
import { projects } from "./projects";
import { renderGetPopUp } from "./renderGetPopUp";
import { getCompletion } from "./getCompletion";
import { sortArray } from "./sortArray";
import { removeItem } from "./removeItem";
import { renderEditPopUp } from "./renderEditPopUp";
import { filterByType } from "./filterByType";
import { filterByToday } from "./filterByToday";
import { getType } from "./getType";
import { clearRenderedProjects } from "./clearRenderedProjects";
import { switchPriority } from "./switchPriority";
import { filterByDate } from "./filterByDate";
import { formatDate } from "./formatDate";
import { formatTime } from "./formatTime";
import { markCalendarDays } from "./renderEventsPage";
import { filterRemoved } from "./filterRemoved";
import { filterNoteGrids } from "./filterNoteGrids";
import { editNote } from "./editNote";
import { noteTooltip, removeTooltip } from "./noteTooltip";

export const renderObjects = () => {
  clearRenderedProjects();
  const grids = document.querySelectorAll(".colGrid");
  const filteredGrids = filterNoteGrids(grids);
  const arrayOfType = filterByType(projects);
  let dailyArray = sortArray(arrayOfType);
  if (getType() === "daily") {
    dailyArray = filterByToday(projects);
    const filterOutRemoved = filterRemoved(dailyArray);
    const sorted = sortArray(filterOutRemoved);
    sorted.forEach((proj) => {
      renderObject(proj);
      renderProjTask(proj);
    });
  } else if (getType() === "notes") {
    let j = 0;
    for (let i = 0; i < dailyArray.length; i++) {
      if (j >= filteredGrids.length) {
        j = 0;
      }
      renderNotes(dailyArray[i], filteredGrids[j]);
      j++;
    }
  } else if (getType() === "events") {
    const filteredByType = filterByType(projects);
    const filteredByDate = filterByDate(filteredByType);
    if (filteredByDate) {
      dailyArray = filteredByDate;
      const sorted = sortArray(dailyArray);
      sorted.forEach((object) => {
        renderEvents(object);
      });
    } else {
      dailyArray = filterByToday(filteredByType);
      const sorted = sortArray(dailyArray);
      sorted.forEach((object) => {
        renderEvents(object);
      });
    }
  } else {
    const filterOutRemoved = filterRemoved(dailyArray);
    filterOutRemoved.forEach((proj) => {
      renderObject(proj);
      renderProjTask(proj);
    });
  }

  listeners();
  getCompletion();
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
    getType() === "daily" &&
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
    proj.dueDate && !isNaN(proj.dueDate) ? formatDate(proj.dueDate) : "";
  const dueDate = `<p class="objDate">${formattedDueDate}</p>`;
  const dueTime = `<p class="objTime">${formatTime(proj.dueDate)}</p>`;
  const Object = `
<div class="objectWrapper wrapper" id="pw${proj.id}">
<div class="object ${proj.priority} ${proj.complete} ${
    getType() === "daily" ? proj.type : ""
  }" id="pp${proj.id}">
${checkElement}
  <p class="objTitle">${proj.title}</p>
  <p class="objNote" id="on${proj.id}"></p>
  ${
    proj.type === "daily"
      ? `<div class="filler"></div>`
      : proj.type === "proj" && getType() !== "daily"
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
  const formattedDate = formatDate(object.addedDate);
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
  const dateElement = object.type === "proj" ? "" : formatTime(object.dueDate);
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
    indicator.removeEventListener("mouseenter", noteTooltip);
    indicator.removeEventListener("mouseleave", removeTooltip);
    indicator.addEventListener("mouseenter", noteTooltip);
    indicator.addEventListener("mouseleave", removeTooltip);
  });
};

const inputEvent = (ev) => {
  editNote(ev);
};

const editProjectEvent = (ev) => {
  const target = ev.target.closest(".object");
  if (
    !ev.target.classList.contains("completion") &&
    !ev.target.classList.contains("noteMark") &&
    !ev.target.classList.contains("newTask") &&
    !ev.target.classList.contains("newTask__p")
  ) {
    renderEditPopUp(target);
  }
};

const editTaskEvent = (ev) => {
  const target = ev.target.closest(".Task");
  if (!ev.target.classList.contains("completion")) {
    renderEditPopUp(target);
  }
};

const markNoteEvent = (ev) => {
  switchPriority(ev);
};

const removeEvent = (ev) => {
  ev.stopPropagation();
  if (getType() === "events") {
    markCalendarDays();
  }
  removeItem(ev);
  renderObjects();
};

const addTaskEvent = (ev) => {
  const target = ev.target.closest(".newTask");
  renderGetPopUp(target.id.slice(2));
};

window.addEventListener("resize", () => {
  renderObjects();
});
