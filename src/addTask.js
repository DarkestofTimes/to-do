import { projects, Project } from "./projects";
import { Task } from "./projTask";
import { renderActualProj } from "./renderProject";
import { clearRenderedProjects } from "./clearRenderedProjects";

export const addTask = (projId, title, id, date, complete, priority, note) => {
  const newTask = new Task(title, id, date, complete, priority, note);
  const currentProject = projects.find((project) => project.id === projId);
  currentProject.tasks.push(newTask);
  clearRenderedProjects();
  renderActualProj();
};
