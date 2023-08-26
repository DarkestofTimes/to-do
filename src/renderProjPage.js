import { renderObjects } from "./renderObjects";
import { renderGetPopUp } from "./renderGetPopUp";
import { renderBin } from "./renderBin";

export const renderProjPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer projectsContainer">
  <div class="buttonWrapper">
  <div class="newObject" id="newProj">
    <p class="newObject__p">New</p>
  </div>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderObjects();
  renderBin();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newProj");
  newProj.addEventListener("click", renderGetPopUp);
};
