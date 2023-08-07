import { renderProjTask } from "./renderProjTask";
import { projects } from "./projects";
import { renderGetPopUp } from "./renderGetPopUp";
import { getTaskCompletion } from "./getTaskCompletion";
import { sortArray } from "./sortArray";
import { removeItem } from "./removeItem";
import { renderEditPopUp } from "./renderEditPopUp";
import { filterByType } from "./filterByType";
import { filterByDate } from "./filterByDate";
import { getType } from "./getType";

export const renderActualProj = () => {
  const container = document.querySelector(".listContainer");
  const arrayOfType = filterByType(projects);
  let dailyArray = sortArray(arrayOfType);
  if (getType() === "daily") {
    dailyArray = filterByDate(projects);
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
    renderProjTask(proj.id);
    getTaskCompletion();
  });
  listeners();
};

const listeners = () => {
  const newTasks = document.querySelectorAll(".newTask");
  const deleteBtns = document.querySelectorAll(".delete");
  const projectBtns = document.querySelectorAll(".object");
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
    });
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", renderEditPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".object");
      renderEditPopUp(target);
    });
  });
};
