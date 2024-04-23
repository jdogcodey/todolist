// Opening the form and submitting the form
import { toggleVisible } from "./togglevisibility.js";
import { newToDo } from "./newtodo.js";
// import { globalToDoList } from "./index.js";

function openForm() {
  document.querySelector("#open-form").addEventListener("click", () => {
    toggleVisible("form");
  });
}
function submitForm(array) {
  document.querySelector("#submit").addEventListener("click", () => {
    event.preventDefault();
    const name = document.querySelector("#to-do-name");
    const nameValue = name.value;
    const deadline = document.querySelector("#deadline");
    const deadlineValue = deadline.value;
    const priority = document.querySelector("#priority");
    const priorityValue = priority.value;
    const description = document.querySelector("#description");
    const descriptionValue = description.value;
    newToDo(array, nameValue, deadlineValue, priorityValue, descriptionValue);
    console.log(array);
  });
}

export { openForm, submitForm };
