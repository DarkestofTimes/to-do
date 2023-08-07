export const clearRenderedTasks = () => {
  const renderedProjects = document.querySelectorAll(".projTask");
  renderedProjects.forEach((task) => {
    task.remove();
  });
};
