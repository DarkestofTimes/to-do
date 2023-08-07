import { renderPopUp } from "./popUpProj";
import { renderActualProj } from "./renderProject";

export const renderDailyPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="dailyContainer container">
  <div class="newDailyTask" id="newDailyTask">
    <p class="newDailyTask__p">Add Task</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderActualProj();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newDailyTask");
  newProj.addEventListener("click", renderPopUp);
};
