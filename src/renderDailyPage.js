import { renderObjects } from "./renderObjects";
import { renderGetPopUp } from "./renderGetPopUp";
import { renderBin } from "./renderBin";

export const renderDailyPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer dailyContainer">
  <div class="buttonWrapper">
  <div class="newObject" id="newDailyTask">
    <p class="newObject__p">Add Daily</p>
  </div>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderBin();
  renderObjects();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newDailyTask");
  newProj.removeEventListener("click", renderGetPopUp);
  newProj.addEventListener("click", renderGetPopUp);
};
