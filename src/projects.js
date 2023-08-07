export const projects = [];

export function Project(title, id, date, complete, priority, note) {
  this.title = title;
  this.id = id;
  this.tasks = [];
  this.dueDate = date;
  this.completionDate = date;
  this.complete = complete;
  this.priority = priority;
  this.note = note;
}
