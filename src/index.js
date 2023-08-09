import "./styles.css";
import { renderHeader } from "./header";
import { renderProjPage } from "./renderProjPage";
import { renderEvents } from "./renderEventsPage";
import { renderDailyPage } from "./renderDailyPage";
import { renderFooter } from "./footer";
import { initialization } from "./initialization";
import { clearPage } from "./clearPage";
import { renderPage } from "./renderPage";
import { renderNotesPage } from "./renderNotesPage";
import { handleEscape } from "./handleEscape";
import { handleEnter } from "./handleEnter";
import { checkDueDatesAndRemoveCompleted } from "./removeCompleted";

initialization(renderHeader, renderProjPage, renderFooter);

const buttons = document.querySelectorAll(".navLi");
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const target = ev.target.closest(".navLi");
    clearPage();
    renderPage(
      target.id,
      renderProjPage,
      renderDailyPage,
      renderEvents,
      renderNotesPage
    );
  });
});

setInterval(checkDueDatesAndRemoveCompleted, 1000 * 120);
document.addEventListener("keydown", handleEscape);
document.addEventListener("keydown", handleEnter);
