export const clearRenderedTasks = () => {
  const renderedProjects = document.querySelectorAll(".Task");
  renderedProjects.forEach((task) => {
    task.remove();
  });
};
