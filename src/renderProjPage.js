import { renderPopUp } from "./popUpProj";
import { renderActualProj } from "./renderProject";

export const renderProjPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="projectContainer container">
  <div class="newProj" id="newProj">
    <p class="newProj__p">Add Project</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderActualProj();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newProj");
  newProj.addEventListener("click", renderPopUp);
};