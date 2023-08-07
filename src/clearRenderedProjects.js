export const clearRenderedProjects = () => {
  const renderedProjects = document.querySelectorAll(".objectWrapper");
  renderedProjects.forEach((proj) => {
    proj.remove();
  });
};
