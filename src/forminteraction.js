// Opening the form and submitting the form
import { toggleVisible } from "./togglevisibility.js";
import { newToDo, allLists } from "./listfunctions.js";

function openForm() {
  document.querySelector("#open-form").addEventListener("click", () => {
    const listName = Object.keys(allLists);
    for (let i = 0; i < listName.length; i++) {
      const listOption = document.createElement("option");
      listOption.textContent = listName[i];
      listOption.value = listName[i];
      document.querySelector("#choose-list").appendChild(listOption);
    }
    toggleVisible("form");
  });
}
function submitForm() {
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
    const list = document.querySelector("#choose-list");
    const listValue = list.value;
    newToDo(
      listValue,
      nameValue,
      deadlineValue,
      priorityValue,
      descriptionValue
    );
    console.log(allLists);
    console.log(listValue);
    toggleVisible("form");
  });
}

export { openForm, submitForm };
