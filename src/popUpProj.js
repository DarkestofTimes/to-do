import { clearPopUp } from "./clearPopUp";
import { getProject } from "./getProject";
import { clearRenderedProjects } from "./clearRenderedProjects";

export const renderPopUp = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="addProj">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" checked />
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" />
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" />
    </div>
    <label for="date" class="label">Due date:</label>
    <input type="date" id="date">
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10"></textarea>
    <button class="popUpButton" id="addProjBtn">Add</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

  container.insertAdjacentHTML("afterbegin", projPage);
  listeners();
};

const listeners = () => {
  const addBtn = document.querySelector("#addProjBtn");
  const closeBtn = document.querySelector("#closeBtn");
  addBtn.addEventListener("click", () => {
    clearRenderedProjects();
    getProject();
    clearPopUp();
  });
  closeBtn.addEventListener("click", clearPopUp);
};
