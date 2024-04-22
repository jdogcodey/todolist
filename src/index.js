import "./styles.css";
import Logo from "./images/logo.svg";
import { newToDo } from "./newtodo.js";
import { newList } from "./newlist.js";
import { moveList } from "./movelist.js";
import { completeToDo } from "./completetodo.js";
import { changePriority } from "./changepriority.js";
import { openForm } from "./createform.js";

const globalToDoList = [];

const myLogo = new Image();
myLogo.src = Logo;
document.querySelector("#logo").appendChild(myLogo);

newToDo(
  globalToDoList,
  "Make To Do List",
  "Tomorrow",
  "High",
  "List Not Organised Properly currently",
  "Description goes here"
);

document.querySelector("#open-form").addEventListener("click", openForm(input));
