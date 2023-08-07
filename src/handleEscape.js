import { clearPopUp } from "./clearPopUp";

export const handleEscape = (ev) => {
  if (ev.key === "Escape" || ev.key === "Esc") {
    clearPopUp();
  }
};
