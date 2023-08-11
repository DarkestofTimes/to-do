import { projects, Object } from "./projects";
import { generatedId } from "./idGenerator";
import { renderObjects } from "./renderObjects";
import { clearRenderedProjects } from "./clearRenderedProjects";
import { getType } from "./getType";

export const getObject = (projId) => {
  const title = document.querySelector("#title").value;
  let dueDate = "";
  let type = getType();
  if (projId === undefined && type !== "daily" && type !== "notes") {
    dueDate = document.querySelector("#date").value;
  }

  if (type === "daily") {
    const currentDate = new Date();
    const midNight = new Date(currentDate);
    midNight.setDate(currentDate.getDate() + 1);
    midNight.setHours(0, 0, 0);
    dueDate = midNight;
  }

  const completionDate = null;
  let priority = check();
  if (type === "notes") {
    const priorElement = document.querySelector("[data-priority]");
    priority = priorElement.getAttribute("data-priority");
  }
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
    note,
    type
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
  note,
  type
) => {
  const newObject = new Object(
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note,
    type
  );
  if (projId !== null && projId !== undefined) {
    const currentProject = projects.find((project) => project.id === projId);
    currentProject.tasks.push(newObject);
  } else {
    projects.push(newObject);
  }
  clearRenderedProjects();
  renderObjects();
};

const check = () => {
  const radio = document.querySelectorAll(".priority");
  for (const button of radio) {
    if (button.checked) {
      return button.id;
    }
  }
};