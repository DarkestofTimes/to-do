import { projects } from "./projects";
import { bin } from "./removeCompleted";
import { toLocalStorage } from "./toLocalStorage";

export const removeItem = (ev) => {
  const targetId = Number(ev.target.id.slice(2));
  const project = projects.find((proj) => proj.id === targetId);
  const projectIndex = projects.findIndex((proj) => proj.id === targetId);
  if (
    (project !== undefined || project !== null) &&
    ev.target.id.slice(0, 2) == "dp"
  ) {
    if (
      (project.type === "events" || project.type === "proj") &&
      project.complete === true
    ) {
      if (bin.find((obj) => obj.id === project.id)) {
        projects.splice(projectIndex, 1);
      } else {
        bin.push(projects.splice(projectIndex, 1)[0]);
      }
      const projElement = document.querySelector(`#pw${targetId}`);
      projElement.remove();
    } else {
      projects.splice(projectIndex, 1);
      const projElement = document.querySelector(`#pw${targetId}`);
      projElement.remove();
    }
  } else {
    const projWithTask = projects.find((proj) =>
      proj.tasks.some((task) => task.id === targetId)
    );
    if (projWithTask) {
      const taskIndex = projWithTask.tasks.findIndex(
        (task) => task.id === targetId
      );
      projWithTask.tasks.splice(taskIndex, 1);
      const taskElement = document.querySelector(`#pt${targetId}`);
      taskElement.remove();
    }
  }
  toLocalStorage();
};
