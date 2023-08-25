import { projects } from "./projects";
import { addObject } from "./getObject";
import { generatedId } from "./idGenerator";

export const prepopulate = () => {
  const projectsJSON = localStorage.getItem("projects");
  const parsedProjects = JSON.parse(projectsJSON);
  const id = generatedId();
  const title = "Create To-Do list";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = "";
  const complete = false;
  const priority = "high";
  const note = "Create some basic to-do";
  const type = "proj";
  if (projects.length === 0 && parsedProjects === null) {
    addObject(
      null,
      title,
      id,
      dueDate,
      completionDate,
      complete,
      priority,
      note,
      type
    );
    addTask1(id);
    addTask2(id);
    addTask3(id);
  }
};

const addTask1 = (ObjId) => {
  const id = generatedId();
  const title = "Add different pages";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = new Date();
  const complete = true;
  const priority = "high";
  const note = "For projects, daily stuff, events and notes";
  const type = "proj";
  addObject(
    ObjId,
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note,
    type
  );
};

const addTask2 = (ObjId) => {
  const id = generatedId();
  const title = "Make it work with localStorage";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = new Date();
  const complete = true;
  const priority = "med";
  const note = "And add preexisting project";
  const type = "proj";
  addObject(
    ObjId,
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note,
    type
  );
};

const addTask3 = (ObjId) => {
  const id = generatedId();
  const title = "Make it pretty";
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() - 1);
  const completionDate = null;
  const complete = false;
  const priority = "low";
  const note = "Add some reactivity and some fancy gradients and whatnot";
  const type = "proj";
  addObject(
    ObjId,
    title,
    id,
    dueDate,
    completionDate,
    complete,
    priority,
    note,
    type
  );
};
