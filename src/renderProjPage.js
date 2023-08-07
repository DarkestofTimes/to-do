import { renderActualProj } from "./renderProject";
import { renderGetPopUp } from "./renderGetPopUp";

export const renderProjPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer container">
  <div class="newObject" id="newProj">
    <p class="newObject__p">Add Project</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderActualProj();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newProj");
  newProj.addEventListener("click", renderGetPopUp);
};
