export function Task(title, id, date, complete, priority, note) {
  this.title = title;
  this.id = id;
  this.completionDate = date;
  this.complete = complete;
  this.priority = priority;
  this.note = note;
}