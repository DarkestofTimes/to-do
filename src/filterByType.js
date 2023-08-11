import { getType } from "./getType";

export const filterByType = (array) => {
  let filtered;
  if (getType() === "events") {
    filtered = array.filter(
      (item) => item.type === "events" || item.type === "proj"
    );
  } else {
    filtered = array.filter((item) => item.type === getType());
  }
  return filtered;
};
