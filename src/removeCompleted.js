import { projects } from "./projects";
import { renderObjects } from "./renderObjects";
import { checkCompletion } from "./getCompletion";
export const bin = [];

const removeCompleted = () => {
  const currentDate = new Date();

  projects.forEach((object) => {
    const midNight = new Date(currentDate);
    midNight.setDate(object.dueDate.getDate() + 1);
    midNight.setHours(0, 0, 0);
    const midNightAhead = new Date();
    midNightAhead.setDate(object.dueDate.getDate() + 2);
    midNightAhead.setHours(0, 0, 0);

    const twoHoursAhead = new Date();
    twoHoursAhead.setHours(object.dueDate.getHours() + 2);
    if (object.type === "daily") {
      if (
        object.complete === true &&
        currentDate >= object.dueDate &&
        currentDate >= midNight
      ) {
        const index = projects.findIndex((obj) => obj.id === object.id);
        projects.splice(index, 1);
      } else if (
        object.complete === false &&
        currentDate >= object.dueDate &&
        currentDate >= midNightAhead
      ) {
        const index = projects.findIndex((obj) => obj.id === object.id);
        projects.splice(index, 1);
      }
    } else if (
      (object.type === "proj" &&
        object.complete === true &&
        object.completionDate <= currentDate &&
        currentDate >= twoHoursAhead) ||
      (object.type === "events" &&
        object.dueDate <= currentDate &&
        currentDate >= twoHoursAhead)
    ) {
      const index = projects.findIndex((obj) => obj.id === object.id);
      const spliced = projects.splice(index, 1);
      bin.push(spliced);
    }
  });
  renderObjects();
};

export const checkDueDatesAndRemoveCompleted = () => {
  checkCompletion();
  removeCompleted();
};
