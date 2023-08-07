import { projects, Project } from "./projects";
import { renderActualProj } from "./renderProject";

export const addProject = (title, id, date, complete, priority, note) => {
  const newProject = new Project(title, id, date, complete, priority, note);
  projects.push(newProject);
  renderActualProj();
};
