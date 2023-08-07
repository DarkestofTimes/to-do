export const projects = [];

export function Object(
  title,
  id,
  dueDate,
  completionDate,
  complete,
  priority,
  note
) {
  this.title = title;
  this.id = id;
  this.tasks = [];
  this.dueDate = dueDate;
  this.completionDate = completionDate;
  this.complete = complete;
  this.priority = priority;
  this.note = note;
}
