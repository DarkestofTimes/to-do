export const clearPage = () => {
  const page = document.querySelectorAll(".container");
  const buttons = document.querySelectorAll(".navLi");
  buttons.forEach((button) => button.classList.remove("active"));
  page.forEach((page) => page.remove());
};
