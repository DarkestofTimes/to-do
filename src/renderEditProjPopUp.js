import { clearPopUp } from "./clearPopUp";
import { editItem } from "./editItem";
import { clearRenderedProjects } from "./clearRenderedProjects";
import { projects, Project } from "./projects";

export const renderEditProjPopUp = (ev) => {
  const id = Number(ev.slice(1));
  const project = projects.find((project) => project.id === id);
  const container = document.querySelector("main");
  if (project) {
    const projPage = `
  <div class="popUpContainer">
  <div class="popUpfield" id="editProj">
    <label class="label" for="title">Title:</label>
    <input name="title" class="input" type="text" id="title" value="${
      project.title
    }" autofocus />
    <div class="priorityWrapper">
      <label for="priority" class="label">Priority:</label>
      <input class="priority" name="priority" type="radio" class="projRadio" id="low" ${
        project.priority === "low" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="med" ${
        project.priority === "med" ? "checked" : ""
      }/>
      <input class="priority" name="priority" type="radio" class="projRadio" id="high" ${
        project.priority === "high" ? "checked" : ""
      }/>
    </div>
    <label for="date" class="label">Due date:</label>
    <input type="date" id="date" value="${project.dueDate}">
      <p class="projCompletionDate">
        ${
          project.completionDate === null
            ? ""
            : `Completed on:${project.completionDate}`
        }
      </p>
    <label for="note" class="label">Note:</label>
    <textarea name="note" id="projNote" cols="30" rows="10">${
      project.note
    }</textarea>
    <button class="popUpButton" id="addProjBtn${id}">Edit</button>
    <button class="popUpButton" id="closeBtn">Close</button>
  </div>
</div>`;

    container.insertAdjacentHTML("afterbegin", projPage);
    listeners(id);
  }
};

const listeners = (id) => {
  const addBtn = document.querySelector(`#addProjBtn${id}`);
  const closeBtn = document.querySelector("#closeBtn");
  addBtn.addEventListener("click", (ev) => {
    clearRenderedProjects();
    editItem(ev.target);
    clearPopUp();
  });
  closeBtn.addEventListener("click", clearPopUp);
};
