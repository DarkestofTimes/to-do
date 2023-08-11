import { selectedDate } from "./renderEventsPage";
import { formatDate } from "./formatDate";

export const filterByDate = (array) => {
  if (selectedDate) {
    const selectedString = formatDate(selectedDate);
    const filtered = array.filter((item) => {
      const string = formatDate(item.dueDate);
      return string === selectedString;
    });
    return filtered;
  }
};
