import { projects } from "./projects";

export const editPriority = (ev) => {
  const id = Number(ev.target.id.slice(2));
  const object = projects.find((obj) => obj.id === id);
  object.priority = ev.target.classList.item(1);
};
