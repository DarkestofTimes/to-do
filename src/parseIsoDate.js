export const parseIsoDate = (array) => {
  array.forEach((object) => {
    if (object.dueDate) {
      object.dueDate = convertDate(object.dueDate);
    }
    if (object.completionDate) {
      object.completionDate = convertDate(object.completionDate);
    }
    if (object.addedDate) {
      object.addedDate = convertDate(object.addedDate);
    }
    if (object.tasks) {
      object.tasks.forEach((task) => {
        if (task.dueDate) {
          task.dueDate = convertDate(task.dueDate);
        }
        if (task.completionDate) {
          task.completionDate = convertDate(task.completionDate);
        }
        if (task.addedDate) {
          task.addedDate = convertDate(task.addedDate);
        }
      });
    }
  });
  return array;
};

const convertDate = (date) => {
  const parsedDate = new Date(date);
  return parsedDate;
};
