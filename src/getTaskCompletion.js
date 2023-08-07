import { projects, Project } from "./projects";
import { getProjectCompletion } from "./getProjectCompletion";

export const getTaskCompletion = () => {
  const boxes = document.querySelectorAll('[name="completion"]');
  boxes.forEach((box) => {
    box.removeEventListener("change", checkBoxes);
    box.addEventListener("change", (ev) => {
      ev.stopPropagation();
      checkBoxes(ev);
    });
  });
};

function checkBoxes(ev) {
  const checkBoxId = Number(ev.target.id.slice(1));
  const projectId = Number(ev.target.parentElement.parentElement.id.slice(2));
  const project = projects.find((project) => project.id === projectId);
  const task = project.tasks.find((task) => task.id === checkBoxId);
  const currentDate = new Date();
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDateTime = currentDate.toLocaleString("en-US", options);
  if (ev.target.checked) {
    task.complete = true;
    task.completionDate = formattedDateTime;
    ev.target.parentElement.classList.remove("true");
    ev.target.parentElement.classList.remove("false");
    ev.target.parentElement.classList.add("true");
  } else {
    task.complete = false;
    task.completionDate = null;
    ev.target.parentElement.classList.remove("true");
    ev.target.parentElement.classList.remove("false");
    ev.target.parentElement.classList.add("false");
  }
  getProjectCompletion();
}
