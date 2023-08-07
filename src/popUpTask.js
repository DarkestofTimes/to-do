import { clearPopUp } from "./clearPopUp";
import { getTask } from "./getTask";
import { clearRenderedTasks } from "./clearRenderedTasks";

export const renderTaskPopUp = (projId) => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="addTask">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" autofocus/>
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" checked />
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" />
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" />
    </div>
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10"></textarea>
    <button class="popUpButton" id="addProjBtn${projId}">Add</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

  container.insertAdjacentHTML("afterbegin", projPage);
  listeners(projId);
};

const listeners = (projId) => {
  const newProj = document.querySelector(`#addProjBtn${projId}`);
  const closeBtn = document.querySelector("#closeBtn");
  newProj.addEventListener("click", (ev) => {
    const evId = Number(ev.target.id.slice(10));
    clearRenderedTasks();
    getTask(evId);
    clearPopUp();
  });
  closeBtn.addEventListener("click", clearPopUp);
};
