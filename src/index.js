import "./styles.css";
import Logo from "./images/logo.svg";
import { newToDo } from "./newtodo.js";
import { newList } from "./newlist.js";
import { moveList } from "./movelist.js";
import { completeToDo } from "./completetodo.js";
import { changePriority } from "./changepriority.js";
import { openForm } from "./forminteraction.js";

const globalToDoList = [];

const myLogo = new Image();
myLogo.src = Logo;
document.querySelector("#logo").appendChild(myLogo);

openForm("#open-form", "form");
