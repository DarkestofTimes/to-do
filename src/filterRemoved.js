import { bin } from "./removeCompleted";

export const filterRemoved = (array) => {
  const filtered = array.filter(
    (item) => !bin.some((binItem) => binItem.id === item.id)
  );
  return filtered;
};
