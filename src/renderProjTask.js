import { projects } from "./projects";
import { renderEditPopUp } from "./renderEditPopUp";
import { getProjectCompletion } from "./getProjectCompletion";

export const renderProjTask = (id) => {
  const container = document.querySelector(`#tw${id}`);
  const project = projects.find((proj) => proj.id === id);
  const tasks = project.tasks;

  tasks.forEach((task) => {
    const newTask = `
      <div class="projTask ${task.priority} ${task.complete}" id="${"pt"}${
      task.id
    }">
       <input type="checkbox" class="completion" name="completion" id="${"c"}${
      task.id
    }"  ${check(task.complete)}/>
        <p class="taskTitle">${task.title}</p>
        <p class="taskDate">${
          task.completionDate === null ? "" : task.completionDate
        }</p>
        <p class="taskNote">${task.note === "" ? "" : "N"}</p>
        <p class="delete" id="${"dt"}${task.id}">D</p>
      </div>
`;
    container.insertAdjacentHTML("beforeend", newTask);
  });
  listeners();
  getProjectCompletion();
};

const listeners = () => {
  const taskBtns = document.querySelectorAll(".projTask");
  taskBtns.forEach((task) => {
    task.removeEventListener("click", renderEditPopUp);
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".projTask");
      if (!ev.target.classList.contains("completion")) {
        renderEditPopUp(target);
      }
    });
  });
};

function check(complete) {
  if (complete) {
    return 'checked="checked"';
  }
}
