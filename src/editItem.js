import { projects, Project } from "./projects";
import { renderActualProj } from "./renderProject";
import { renderProjTask } from "./renderProjTask";
import { getType } from "./getType";

export const editItem = (ev) => {
  const Id = Number(ev.id.slice(10));
  const title = document.querySelector("#title").value;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const projectId = findProj(Id)?.id;
  const type = getType();
  if (projectId !== undefined) {
    const project = projects.find((project) => project.id === projectId);
    const task = project.tasks.find((task) => task.id === Id);
    if (task) {
      task.title = title;
      task.priority = priority;
      task.note = note;
    }
    renderProjTask(projectId);
  } else if (projectId === undefined) {
    const project = projects.find((project) => project.id === Id);
    if (project) {
      if (project.type === "daily") {
        project.title = title;
        project.priority = priority;
        project.note = note;
      } else {
        const dueDate = document.querySelector("#date").value;
        project.title = title;
        project.dueDate = dueDate;
        project.priority = priority;
        project.note = note;
      }
    }
  }
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

function findProj(id) {
  for (const proj of projects) {
    const knownTask = proj.tasks.find((task) => task.id === id);
    if (knownTask) {
      return proj;
    }
  }
}
