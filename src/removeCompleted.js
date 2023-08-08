import { projects } from "./projects";
import { renderActualProj } from "./renderProject";
const bin = [];

export const removeCompleted = () => {
  const currentDate = new Date();
  const midNightAhead = new Date();
  midNightAhead.setDate(currentDate.getDate() + 2);
  midNightAhead.setHours(0, 0, 0);
  const midNight = new Date(currentDate);
  midNight.setDate(currentDate.getDate() + 1);
  midNight.setHours(0, 0, 0);
  const tenAgo = new Date();
  tenAgo.setSeconds(currentDate.getSeconds() - 10);
  const twoHoursAgo = new Date();
  twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
  projects.forEach((object) => {
    if (object.type === "daily") {
      console.log("object.dueDate:", object.dueDate);
      console.log("currentDate", currentDate);
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
        object.completionDate <= twoHoursAgo) ||
      (object.type === "events" && object.dueDate <= twoHoursAgo)
    ) {
      const index = projects.findIndex((obj) => obj.id === object.id);
      const spliced = projects.splice(index, 1);
      bin.push(spliced);
    }
  });
  renderActualProj();
};

export const checkDueDatesAndRemoveCompleted = () => {
  removeCompleted();
};
