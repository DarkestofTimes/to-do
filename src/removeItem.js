import { projects } from "./projects";

export const removeItem = (ev) => {
  const targetId = Number(ev.target.id.slice(2));
  const project = projects.findIndex((proj) => proj.id === targetId);
  if (
    (project !== undefined || project !== null) &&
    ev.target.id.slice(0, 2) == "dp"
  ) {
    projects.splice(project, 1);
    const projElement = document.querySelector(`#pw${targetId}`);
    projElement.remove();
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
};
