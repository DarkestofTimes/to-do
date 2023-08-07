import { addProject } from "./addProject";
import { generatedId } from "./idGenerator";

export const getProject = () => {
  const title = document.querySelector("#title").value;
  const dueDate = document.querySelector("#date").value;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const id = generatedId();
  const complete = false;

  addProject(title, id, dueDate, complete, priority, note);
};

const check = () => {
  const radio = document.querySelectorAll(".priority");
  for (const button of radio) {
    if (button.checked) {
      return button.id;
    }
  }
};
