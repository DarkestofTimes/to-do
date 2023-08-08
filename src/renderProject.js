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

export const renderActualProj = () => {
  clearRenderedProjects();
  const container = document.querySelector(".listContainer");
  const arrayOfType = filterByType(projects);
  let dailyArray = sortArray(arrayOfType);
  let checkElement = "";
  if (getType() === "daily") {
    dailyArray = filterByDate(projects);
  }
  dailyArray.forEach((proj) => {
    if (proj.type === "daily" && proj.tasks.length === 0) {
      checkElement = `<input type="checkbox" class="completion" name="completion" id="${"c"}${
        proj.id
      }"  ${check(proj.complete)}/>`;
    }
    const dueDate = `<p class="objDate">Due:${proj.dueDate}</p>`;
    const projPage = `
    <div class="objectWrapper" id="${"pw"}${proj.id}">
    <div class="object ${proj.priority} ${proj.complete}" id="${"pp"}${
      proj.id
    }">
    ${checkElement}
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
  });
  listeners();
  getCompletion();
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
      renderActualProj();
    });
  });
  projectBtns.forEach((project) => {
    project.removeEventListener("click", renderEditPopUp);
    project.addEventListener("click", (ev) => {
      const target = ev.target.closest(".object");
      if (!ev.target.classList.contains("completion")) {
        renderEditPopUp(target);
      }
    });
  });
};

function check(complete) {
  if (complete) {
    return 'checked="checked"';
  } else {
    return "";
  }
}
