import "./styles.css";
import { renderHeader } from "./header";
import { renderProjPage } from "./renderProjPage";
import { renderEvents } from "./renderEventsPage";
import { renderDailyPage } from "./renderDailyPage";
import { renderFooter } from "./footer";
import { initialization } from "./initialization";
import { clearPage } from "./clearPage";
import { renderPage } from "./renderPage";
import { renderNotes } from "./renderNotesPage";
import { handleEscape } from "./handleEscape";
import { handleEnter } from "./handleEnter";

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
      renderNotes
    );
  });
});

document.addEventListener("keydown", handleEscape);
document.addEventListener("keydown", handleEnter);
