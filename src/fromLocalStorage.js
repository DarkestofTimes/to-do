import { setProjects } from "./projects";
import { setStoredId } from "./idGenerator";
import { setBin } from "./removeCompleted";
import { parseIsoDate } from "./parseIsoDate";

export const fromLocalStorage = () => {
  const storedStoredId = localStorage.getItem("storedId");
  if (storedStoredId !== null) {
    setStoredId(parseInt(storedStoredId));
  }
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects !== null) {
    const parsedArray = JSON.parse(storedProjects);
    const nonNullArray = parsedArray.filter((item) => item !== null);
    const convertedArray = parseIsoDate(nonNullArray);
    setProjects(convertedArray);
  } else {
  }
  const storedBin = localStorage.getItem("bin");
  if (storedBin !== null) {
    const parsedArray = JSON.parse(storedBin);
    const nonNullArray = parsedArray.filter((item) => item !== null);
    const convertedArray = parseIsoDate(nonNullArray);
    setBin(convertedArray);
  } else {
  }
};
