import { projects } from "./projects";
import { renderObjects } from "./renderObjects";

export const getCompletion = () => {
  const boxes = document.querySelectorAll('[name="completion"]');
  boxes.forEach((box) => {
    box.removeEventListener("change", checkBoxEvent);
    box.addEventListener("change", checkBoxEvent);
  });
};

const checkBoxEvent = (ev) => {
  ev.stopPropagation();
  checkBoxes(ev);
};

function checkBoxes(ev) {
  const checkBoxId = Number(ev.target.id.slice(1));
  const currentDate = new Date();
  const project = projects.find((obj) => obj.id === checkBoxId);
  if (project) {
    if (ev.target.checked) {
      project.complete = true;
      project.completionDate = currentDate;
    } else if (!ev.target.checked) {
      project.complete = false;
      project.completionDate = null;
    }
  } else if (!project) {
    const projectWithTask = findProj(checkBoxId);
    const object = projectWithTask.tasks.find((task) => task.id === checkBoxId);
    if (ev.target.checked) {
      object.complete = true;
      object.completionDate = currentDate;
    } else if (!ev.target.checked) {
      object.complete = false;
      object.completionDate = null;
    }
  }
  checkCompletion(ev);
  renderObjects();
}

export const checkCompletion = (ev) => {
  const checkBoxId = ev ? Number(ev.target.id.slice(1)) : null;
  const targetChecked = ev ? ev.target.checked : null;
  const currentDate = new Date();
  projects.forEach((obj) => {
    const completedObjects = obj.tasks.filter((task) => !task.complete);
    if (obj.type === "events") {
      if (obj.dueDate < currentDate) {
        obj.complete = true;
        obj.completionDate = currentDate;
      }
    } else if (
      (obj.tasks.length !== 0 && completedObjects.length === 0) ||
      (obj.type === "daily" && targetChecked && checkBoxId === obj.id)
    ) {
      obj.complete = true;
      obj.completionDate = currentDate;
    } else if (obj.tasks.length !== 0 && completedObjects.length !== 0) {
      obj.complete = false;
      obj.completionDate = null;
    }
  });
};

function findProj(id) {
  for (const proj of projects) {
    const knownTask = proj.tasks.find((task) => task.id === id);
    if (knownTask) {
      return proj;
    }
  }
}
