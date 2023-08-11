import { renderObjects } from "./renderObjects";
import { renderGetPopUp } from "./renderGetPopUp";

export const renderNotesPage = () => {
  const container = document.querySelector("main");
  const projPage = `
  <div class="listContainer notesContainer">
  <div class="newNote" id="newNote">
    <p class="newNote__p">Add Note</p>
  </div>
  </div>
    `;
  container.insertAdjacentHTML("afterbegin", projPage);
  renderObjects();
  listeners();
};

const listeners = () => {
  const newProj = document.querySelector("#newNote");
  newProj.removeEventListener("click", renderGetPopUp);
  newProj.addEventListener("click", renderGetPopUp);
};
