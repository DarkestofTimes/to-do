export const renderEventsPage = () => {
  const container = document.querySelector("main");
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
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

  const renderCalendar = () => {
    const firstDateOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const calendarContainer = document.querySelector(".calendarDays");
    const currentDate = document.querySelector(".currentDate");
    const dateString = firstDateOfMonth.toLocaleDateString("en-eu", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfLastMonth = new Date(year, month, 0).getDate();
    const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();

    const paddingDays = weekDays.indexOf(dateString.split(",")[0]);
    let calendarDay = "";

    for (let i = paddingDays; i > 0; --i) {
      calendarDay += `<li class="calendarDay inactive">${
        lastDateOfLastMonth - i + 1
      }</li> `;
    }
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      if (i > paddingDays) {
        calendarDay += `<li class="calendarDay day">${i - paddingDays}</li> `;
      }
    }
    for (let i = lastDayOfMonth; i < 7; i++) {
      calendarDay += `<li class="calendarDay inactive">${
        i - lastDayOfMonth + 1
      }</li> `;
    }
    calendarContainer.insertAdjacentHTML("beforeend", calendarDay);
    currentDate.textContent = `${months[month]} ${year}`;
  };

  const listeners = () => {
    const forwardBackward = document.querySelectorAll(".arrow");
    const calendarDays = document.querySelectorAll(".calendarDay");
    forwardBackward.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        month = arrow.id === "forward" ? month + 1 : month - 1;
        clearCalendar();
        renderCalendar();
      });
    });
    calendarDays.forEach((day) => {
      day.addEventListener("click", () => console.log("click"));
    });
  };

  const clearCalendar = () => {
    const calendarDays = document.querySelectorAll(".calendarDay");
    calendarDays.forEach((day) => {
      day.remove();
    });
  };

  const eventsPage = ` <div class="listContainer">
  <div class="eventsContainer">
    <div class="dateWrapper">
      <div class="arrow" id="backward">B</div>
      <p class="currentDate"></p>
      <div class="arrow" id="forward">F</div>
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
  listeners();
};

/* for (let i = 1; i <= paddingDays + daysInMonth; i++) {
  if (i > paddingDays) {
    calendarDay = `<li class="calendarDay">${i - paddingDays}</li> `;
  } else {
    calendarDay = `<li class="calendarDay inactive">${
      lastDateOfMonth - i
    }</li> `;
  }
  calendarContainer.insertAdjacentHTML("beforeend", calendarDay);
} */

/* 
let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
      lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
      lastDayOfMonth = new Date(
        currentYear,
        currentMonth,
        lastDateOfMonth
      ).getDay(),
      lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let calendarDay = "";

    for (let i = firstDayOfMonth - 1; i > 0; i--) {
      calendarDay += `<li class="calendarDay inactive">${
        lastDateOfLastMonth - i + 1
      }</li>`;
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
      calendarDay += `<li class="calendarDay">${i}</li>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
      calendarDay += `<li class="calendarDay inactive">${
        i - lastDayOfMonth + 1
      }</li>`;
    } */
