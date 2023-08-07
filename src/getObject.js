import { projects, Object } from "./projects";
import { generatedId } from "./idGenerator";
import { renderActualProj } from "./renderProject";
import { clearRenderedProjects } from "./clearRenderedProjects";

export const getObject = (projId) => {
  const title = document.querySelector("#title").value;
  let dueDate = "";
  if (projId === null) {
    dueDate = document.querySelector("#date").value;
  }
  console.log(projId);
  const completionDate = null;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const id = generatedId();
  const complete = false;

  addObject(
    projId,
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note
  );
};

const addObject = (
  projId,
  title,
  id,
  dueDate,
  completionDate,
  complete,
  priority,
  note
) => {
  const newObject = new Object(
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note
  );
  if (projId !== null && projId !== undefined) {
    const currentProject = projects.find((project) => project.id === projId);
    currentProject.tasks.push(newObject);
  } else {
    projects.push(newObject);
  }
  clearRenderedProjects();
  renderActualProj();
};

const check = () => {
  const radio = document.querySelectorAll(".priority");
  for (const button of radio) {
    if (button.checked) {
      return button.id;
    }
  }
};
