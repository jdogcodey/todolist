import "./styles.css";
import Logo from "./images/logo.svg";
import { openForm, submitForm } from "./forminteraction.js";
import {
  allLists,
  newToDo,
  newList,
  changePriority,
  completeToDo,
  moveList,
} from "./listfunctions.js";
import { updatePage, addList } from "./toDOM.js";

const myLogo = new Image();
myLogo.src = Logo;
document.querySelector("#logo").appendChild(myLogo);

openForm();

newList("Generic List", updatePage);
// console.log("All lists");
// console.log(allLists);
// newList("globalList");
// console.log("Global List");
// console.log(allLists[`globalList`]);
// newToDo("globalList", "Test", "Test date", "Test priority", "Test description");
// console.log("Global List - added 'test'");
// console.log(allLists[`globalList`]);
// console.log("All lists - added 'test' to global list");
// console.log(allLists);
// newList("Does this work");
// console.log("Does this work in all lists");
// console.log(allLists);
// moveList("globalList", "Does this work", "Test");
// console.log("Moved to does this work from global list");
// console.log(allLists["Does this work"]);
// console.log(allLists);
// changePriority("Test", "Does this work", "This is the new priority");
// completeToDo("Test", "Does this work");
// console.log(allLists);
// updatePage();
