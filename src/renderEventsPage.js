const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let count = 0;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const renderEventsPage = () => {
  const container = document.querySelector("main");

  const eventsPage = ` <div class="listContainer">
  <div class="eventsContainer">
    <div class="dateWrapper">
      <div class="arrow backward" id="backward">B</div>
      <p class="currentDate"></p>
      <div class="arrow forward" id="forward">F</div>
    </div>
    <div class="calendarWrapper">
      <ul class="headings">
        <li class="heading">Mon</li>
        <li class="heading">Tue</li>
        <li class="heading">Wed</li>
        <li class="heading">Thu</li>
        <li class="heading">Fri</li>
        <li class="heading">Sat</li>
        <li class="heading">Sun</li>
      </ul>
      <ul class="calendarDays">
      </ul>
      <div class="eventNoteWrapper"></div>
    </div>
  </div>
</div>    
    `;

  container.insertAdjacentHTML("afterbegin", eventsPage);
  renderCalendar();
};

const renderCalendar = () => {
  const firstDateOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarContainer = document.querySelector(".calendarDays");
  const currentDate = document.querySelector(".currentDate");
  const dateString = firstDateOfMonth.toLocaleDateString("en-eu", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();
  const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

  const paddingDays = weekDays.indexOf(dateString.split(",")[0]);
  let calendarDay = "";

  for (let i = paddingDays; i > 0; --i) {
    calendarDay += `<li class="calendarDay inactive backward">${
      lastDateOfLastMonth - i + 1
    }</li> `;
  }
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    if (i > paddingDays) {
      calendarDay += `<li class="calendarDay day">${i - paddingDays}</li> `;
    }
  }
  for (let i = lastDayOfMonth; i < 7; i++) {
    calendarDay += `<li class="calendarDay inactive forward">${
      i - lastDayOfMonth + 1
    }</li> `;
  }
  calendarContainer.insertAdjacentHTML("beforeend", calendarDay);
  currentDate.textContent = `${months[month]} ${year}`;
  listeners();
};

const listeners = () => {
  const forwardBackward = document.querySelectorAll(".arrow");
  const calendarDays = document.querySelectorAll(".calendarDay");
  forwardBackward.forEach((arrow) => {
    arrow.removeEventListener("click", clickListener);
    arrow.addEventListener("click", clickListener);
  });
  calendarDays.forEach((day) => {
    day.removeEventListener("click", clickListener);
    day.addEventListener("click", clickListener);
  });
};

const clickListener = (ev) => {
  clearCalendar();
  changeMonth(ev);
  renderCalendar();
};

const clearCalendar = () => {
  const calendarDays = document.querySelectorAll(".calendarDay");
  calendarDays.forEach((day) => {
    day.remove();
  });
};

const changeMonth = (ev) => {
  if (ev.target.classList.contains("forward")) {
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  } else if (ev.target.classList.contains("backward")) {
    month -= 1;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
  }
  console.log(month);
};
