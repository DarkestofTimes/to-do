import { projects } from "./projects";

export const getProjectCompletion = () => {
  projects.forEach((project) => {
    const projElement = document.querySelector(`#pp${project.id}`);
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
      projElement.classList.remove("false");
      projElement.classList.remove("true");
      projElement.classList.add("true");
    } else {
      project.complete = false;
      project.completionDate = null;
      projElement.classList.remove("false");
      projElement.classList.remove("true");
      projElement.classList.add("false");
    }
  });
};
