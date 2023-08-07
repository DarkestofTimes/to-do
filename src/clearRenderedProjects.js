export const clearRenderedProjects = () => {
  const renderedProjects = document.querySelectorAll(".projectWrapper");
  renderedProjects.forEach((proj) => {
    proj.remove();
  });
};
