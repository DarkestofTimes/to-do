import { bin } from "./removeCompleted";
import { clearPopUp } from "./clearPopUp";
import { toLocalStorage } from "./toLocalStorage";

export const renderBin = () => {
  const container = document.querySelector("main");
  const bin = ` <div class="binBtnWrapper">
    <div class="binBtn">BIN</div>
  </div>`;

  container.insertAdjacentHTML("beforeend", bin);
  const binBtn = document.querySelector(".binBtn");
  binBtn.removeEventListener("click", openBinEvent);
  binBtn.addEventListener("click", openBinEvent);
};

const renderBinContainer = () => {
  const container = document.querySelector("main");
  const bin = `<div class="popUpContainer">
    <div class="binBox">
      <h2 class="bin__h2">BIN STORAGE</h2>
      <div class="binInsides"></div>
      <button class="closePopUp">Close</button>
    </div>
  </div>`;
  container.insertAdjacentHTML("beforeend", bin);
  populateBin();
  const closeBtn = document.querySelector(".closePopUp");
  closeBtn.removeEventListener("click", closePopUpEvent);
  closeBtn.addEventListener("click", closePopUpEvent);
};

const populateBin = () => {
  clearRenderedBinItems();
  bin.forEach((item) => {
    renderBinItem(item);
  });
};

const renderBinItem = (item) => {
  const container = document.querySelector(".binInsides");
  const binItem = `<div class="binWrapper wrapper" id="bi${item.id}">
  <div class="object ${item.priority} ${item.complete}" id="bo${item.id} ">
  <p class="eventTitle" id="bt${item.id}">${item.title}</p>
  <p class="eventDate" id="bd${item.id}">${item.completionDate}</p>
  <p class="delete" id="dp${item.id}">D</p>
  <p class="eventBody" id="bb${item.id}">${item.note}</p>
</div>
</div>`;

  container.insertAdjacentHTML("beforeend", binItem);
  listeners();
};

const clearRenderedBinItems = () => {
  const renderedBinItems = document.querySelectorAll(".binWrapper");
  renderedBinItems.forEach((item) => {
    item.remove();
  });
};

const removeBinItem = (ev) => {
  const itemId = Number(ev.target.id.slice(2));
  const itemIndex = bin.findIndex((obj) => obj.id === itemId);
  bin.splice(itemIndex, 1);
};

const listeners = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.removeEventListener("click", removeEvent);
    btn.addEventListener("click", removeEvent);
  });
};

const closePopUpEvent = (ev) => {
  ev.preventDefault();
  clearPopUp();
};

const removeEvent = (ev) => {
  ev.stopPropagation();
  removeBinItem(ev);
  populateBin();
  toLocalStorage();
};

const openBinEvent = (ev) => {
  renderBinContainer();
};
