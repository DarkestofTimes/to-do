import { renderProjTask } from "./renderProjTask";
import { projects } from "./projects";
import { renderGetPopUp } from "./renderGetPopUp";
import { getTaskCompletion } from "./getTaskCompletion";
import { sortArray } from "./sortArray";
import { removeItem } from "./removeItem";
import { renderEditPopUp } from "./renderEditPopUp";

export const renderActualProj = () => {
  const container = document.querySelector(".projectContainer");
  sortArray(projects).forEach((proj) => {
    const projPage = `
    <div class="projectWrapper" id="${"pw"}${proj.id}">
    <div class="project ${proj.priority} ${proj.complete}" id="${"pp"}${
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
    renderProjTask(proj.id);
    getTaskCompletion();
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
      const target = ev.target.closest(".project");
      renderEditPopUp(target);
    });
  });
};
