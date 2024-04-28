import "./styles.css";
import Logo from "./images/logo.svg";
import { openForm, submitForm } from "./forminteraction.js";
import {
  allLists,
  globalList,
  newToDo,
  newList,
  changePriority,
  completeToDo,
  moveList,
} from "./listfunctions.js";

const myLogo = new Image();
myLogo.src = Logo;
document.querySelector("#logo").appendChild(myLogo);

openForm();
submitForm();
