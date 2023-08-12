import { selectedDate } from "./renderEventsPage";
import { formatDate } from "./formatDate";

export const filterByDate = (array) => {
  if (selectedDate) {
    const selectedString = formatDate(selectedDate);
    const filtered = array.filter((item) => {
      if (item.dueDate) {
        const dueString = formatDate(item.dueDate);
        return dueString === selectedString;
      } else if (item.completionDate) {
        const completionString = formatDate(item.completionDate);
        return completionString === selectedString;
      }
    });
    return filtered;
  }
};
