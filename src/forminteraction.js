// Opening the form and submitting the form
import { toggleVisible } from "./togglevisibility.js";

function openForm(form, toggle) {
  document.querySelector(form).addEventListener("click", () => {
    toggleVisible(toggle);
  });
}

export { openForm };
