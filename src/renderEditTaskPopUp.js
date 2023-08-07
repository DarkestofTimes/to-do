import { clearPopUp } from "./clearPopUp";
import { editItem } from "./editItem";
import { clearRenderedTasks } from "./clearRenderedTasks";
import { projects, Project } from "./projects";

export const renderEditTaskPopUp = (ev) => {
  const taskId = Number(ev.id.slice(2));
  const projectId = Number(ev.parentElement.parentElement.id.slice(2));
  const project = projects.find((project) => project.id === projectId);
  const task = project.tasks.find((task) => task.id === taskId);
  const container = document.querySelector("main");
  const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="editTask">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" value="${
      task.title
    }" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" ${
        task.priority === "low" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" ${
        task.priority === "med" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" ${
        task.priority === "high" ? "checked" : ""
      }/>
    </div>
    <p class="taskCompletionDate">
        ${task.date === null ? "" : `Completed on:${task.date}`}
      </p>
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10">${
      task.note
    }</textarea>
    <button class="popUpButton" id="addProjBtn${taskId}">Edit</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

  container.insertAdjacentHTML("afterbegin", projPage);
  listeners(taskId);
};

const listeners = (taskId) => {
  const addBtn = document.querySelector(`#addProjBtn${taskId}`);
  const closeBtn = document.querySelector("#closeBtn");
  addBtn.addEventListener("click", (ev) => {
    clearRenderedTasks();
    editItem(ev.target);
    clearPopUp();
  });
  closeBtn.addEventListener("click", clearPopUp);
};
