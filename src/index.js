import "./styles.css";
import Logo from "./images/logo.svg";
import { openForm, submitForm } from "./forminteraction.js";
import { newList } from "./listfunctions.js";
import { updatePage } from "./toDOM.js";

const myLogo = new Image();
myLogo.src = Logo;
document.querySelector("#logo").appendChild(myLogo);

openForm();

newList("Generic List", updatePage);
