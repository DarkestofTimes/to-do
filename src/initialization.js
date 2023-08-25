import { isLocalStorageAvailable } from "./isLocalStorageAvailable";
import { renderObjects } from "./renderObjects";
import { prepopulate } from "./prepopulate";

export const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#daily");
  button.classList.add("active");
  piece2();
  piece3();
  isLocalStorageAvailable();
  prepopulate();
  renderObjects();
};
