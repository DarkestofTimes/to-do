import { projects } from "./projects";
import { storedId } from "./idGenerator";
import { bin } from "./removeCompleted";

export const toLocalStorage = () => {
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("storedId", JSON.stringify(storedId));
  localStorage.setItem("bin", JSON.stringify(bin));
};
