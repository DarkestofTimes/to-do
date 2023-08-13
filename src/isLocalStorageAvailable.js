import { fromLocalStorage } from "./fromLocalStorage";

export function isLocalStorageAvailable() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

if (isLocalStorageAvailable()) {
  fromLocalStorage();
} else {
  console.log("local storage is not available");
}
