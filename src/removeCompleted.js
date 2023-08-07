import { projects } from "./projects";
import { renderActualProj } from "./renderProject";
const bin = [];

export const removeCompleted = () => {
  const currentDate = new Date();
  const dayAgo = new Date();
  dayAgo.setDate(currentDate.getDate() - 1);
  const twoHoursAgo = new Date();
  twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
  projects.forEach((object) => {
    if (object.type === "daily") {
      if (object.complete === true && object.dueDate <= currentDate) {
        const index = projects.findIndex((obj) => obj.id === object.id);
        projects.splice(index, 1);
      } else if (object.complete === false && object.dueDate >= currentDate) {
        const index = projects.findIndex((obj) => obj.id === object.id);
        projects.splice(index, 1);
      }
    } else if (
      (object.type === "proj" || object.type === "events") &&
      object.complete === true &&
      object.dueDate >= currentDate
    ) {
      const index = projects.findIndex((obj) => obj.id === object.id);
      const spliced = projects.splice(index, 1);
      bin.push(spliced);
    }
  });
  renderActualProj();
};

export const checkDueDatesAndRemoveCompleted = () => {
  const currentDate = new Date();
  projects.forEach((object) => {
    if (object.dueDate <= currentDate) {
      removeCompleted();
    }
  });
};
