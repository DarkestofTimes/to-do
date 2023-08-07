import { addTask } from "./addTask";
import { generatedId } from "./idGenerator";

export const getTask = (projId) => {
  const title = document.querySelector("#title").value;
  const date = null;
  const priority = check();
  const note = document.querySelector("#projNote").value;
  const id = generatedId();
  const complete = false;

  addTask(projId, title, id, date, complete, priority, note);
};

const check = () => {
  const radio = document.querySelectorAll(".priority");
  for (const button of radio) {
    if (button.checked) {
      return button.id;
    }
  }
};
