// Opening the form and submitting the form
import { toggleVisible } from "./togglevisibility.js";
import { newToDo, allLists } from "./listfunctions.js";
import { onClick } from "./toDOM.js";

// Open the form when clicking on the open form button
function openForm() {
  document.querySelector("#open-form").addEventListener("click", () => {
    const listName = Object.keys(allLists);
    const choiceOfList = document.querySelector("#choose-list");
    choiceOfList.innerHTML = "";
    for (let i = 0; i < listName.length; i++) {
      const listOption = document.createElement("option");
      listOption.textContent = listName[i];
      listOption.value = listName[i];
      choiceOfList.appendChild(listOption);
    }
    toggleVisible("form");
  });
  submitForm();
}

//Submits the form when clicking on the submit button
function submitForm() {
  document.querySelector("#submit").addEventListener("click", () => {
    event.preventDefault();
    const name = document.querySelector("#to-do-name");
    const nameValue = name.value;
    console.log("name value");
    console.log(nameValue);
    const deadline = document.querySelector("#form-deadline");
    const deadlineValue = deadline.value;
    console.log("deadline value");
    console.log(deadlineValue);
    const priority = document.querySelector("#form-priority");
    const priorityValue = priority.value;
    console.log("priority value");
    console.log(priorityValue);
    const description = document.querySelector("#form-description");
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
    toggleVisible("form");
    const rightColumn = document.querySelector("#right-column");
    onClick(rightColumn, listValue);
  });
}

export { openForm };
