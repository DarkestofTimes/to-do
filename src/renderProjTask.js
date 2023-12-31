import { projects } from "./projects";
import { getType } from "./getType";
import { formatDate } from "./formatDate";

export const renderProjTask = (obj) => {
  const container = document.querySelector(`#tw${obj.id}`);
  const project = projects.find((proj) => proj.id === obj.id);
  const tasks = project.tasks;

  let deleteElement = "";
  let dateElement = "";
  tasks.forEach((task) => {
    const formattedDate = formatDate(task.completionDate);
    if (project.type !== "daily") {
      dateElement = `<p class="taskDate">${
        task.completionDate === null ? "" : formattedDate
      }</p>`;
    } else {
      dateElement = `<div class="filler"></div>`;
    }
    if (getType() === "daily" && project.type === "proj") {
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
