import { projects } from "./projects";
import { toLocalStorage } from "./toLocalStorage";

export const editNote = (ev) => {
  const target = ev.target;
  const targetId = ev.target.id;
  const objectId = Number(ev.target.id.slice(2));
  const object = projects.find((obj) => obj.id === objectId);
  if (targetId.slice(0, 2) === "nt") {
    object.title = target.textContent;
  } else if (targetId.slice(0, 2) === "nb") {
    object.note = target.textContent;
  }
  toLocalStorage();
};
