import { projects } from "./projects";
import { renderActualProj } from "./renderProject";

export const getProjectCompletion = () => {
  projects.forEach((project) => {
    const completedProjects = project.tasks.filter((task) => !task.complete);
    const currentDate = new Date();
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    const formattedDateTime = currentDate.toLocaleString("en-US", options);
    if (project.tasks.length !== 0 && completedProjects.length === 0) {
      project.complete = true;
      project.completionDate = formattedDateTime;
    } else {
      project.complete = false;
      project.completionDate = null;
    }
  });
  renderActualProj();
};
