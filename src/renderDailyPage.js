import { renderActualProj } from "./renderProject";
import { renderGetPopUp } from "./renderGetPopUp";

export const renderDailyPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer container">
  <div class="newObject" id="newDailyTask">
    <p class="newObject__p">Add Daily</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderActualProj();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newDailyTask");
  newProj.addEventListener("click", renderGetPopUp);
};
