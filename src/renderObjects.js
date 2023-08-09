import { renderProjTask } from "./renderProjTask";
import { projects } from "./projects";
import { renderGetPopUp } from "./renderGetPopUp";
import { getCompletion } from "./getCompletion";
import { sortArray } from "./sortArray";
import { removeItem } from "./removeItem";
import { renderEditPopUp } from "./renderEditPopUp";
import { filterByType } from "./filterByType";
import { filterByDate } from "./filterByDate";
import { getType } from "./getType";
import { clearRenderedProjects } from "./clearRenderedProjects";
import { switchPriority } from "./switchPriority";

export const renderObjects = () => {
  clearRenderedProjects();
  const arrayOfType = filterByType(projects);
  let dailyArray = sortArray(arrayOfType);
  if (getType() === "daily") {
    dailyArray = filterByDate(projects);
  }
  if (getType() === "notes") {
    dailyArray.forEach((object) => {
      renderNotes(object);
    });
  } else {
    dailyArray.forEach((proj) => {
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
  if (getType() === "daily" && proj.type === "proj") {
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
      renderGetPopUp(target.id.slice(2));
    });
  });
  deleteBtns.forEach((btn) => {
    btn.removeEventListener("click", removeItem);
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      removeItem(ev);
      renderObjects();
    });
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", renderEditPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".object");
      if (
        !ev.target.classList.contains("completion") &&
        !ev.target.classList.contains("noteMark")
      ) {
        renderEditPopUp(target);
      }
    });
  });
  taskBtns.forEach((task) => {
    task.removeEventListener("click", renderEditPopUp);
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".Task");
      if (!ev.target.classList.contains("completion")) {
        renderEditPopUp(target);
      }
    });
  });
  markNote.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      switchPriority(ev);
    });
  });
};
