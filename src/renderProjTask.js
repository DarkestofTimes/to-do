import { projects } from "./projects";
import { renderEditPopUp } from "./renderEditPopUp";

export const renderProjTask = (id) => {
  const container = document.querySelector(`#tw${id}`);
  const project = projects.find((proj) => proj.id === id);
  const tasks = project.tasks;
  let dateElement = "";
  tasks.forEach((task) => {
    if (project.type !== "daily") {
      dateElement = `<p class="taskDate">${
        task.completionDate === null ? "" : task.completionDate
      }</p>`;
    }
    const newTask = `
      <div class="Task ${task.priority} ${task.complete}" id="${"pt"}${
      task.id
    }">
       <input type="checkbox" class="completion" name="completion" id="${"c"}${
      task.id
    }"  ${check(task.complete)}/>
        <p class="taskTitle">${task.title}</p>
       ${dateElement}
        <p class="taskNote">${task.note === "" ? "" : "N"}</p>
        <p class="delete" id="${"dt"}${task.id}">D</p>
      </div>
`;
    container.insertAdjacentHTML("beforeend", newTask);
  });
  listeners();
};

const listeners = () => {
  const taskBtns = document.querySelectorAll(".Task");
  taskBtns.forEach((task) => {
    task.removeEventListener("click", renderEditPopUp);
    task.addEventListener("click", (ev) => {
      const target = ev.target.closest(".Task");
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
