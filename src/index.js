import { newToDo } from "./newtodo.js";
import { newList } from "./newlist.js";
import { moveList } from "./movelist.js";
import { completeToDo } from "./completetodo.js";
import { changePriority } from "./changepriority.js";

const globalToDoList = [];
newToDo(
  globalToDoList,
  "Make To Do List",
  "Tomorrow",
  "High",
  "List Not Organised Properly currently",
  "Description goes here"
);

document.querySelector("#low").addEventListener("click", () => {
  changePriority(globalToDoList[0], "Low");
  console.log("Change priority to low");
  console.log(globalToDoList);
});

document.querySelector("#med").addEventListener("click", () => {
  changePriority(globalToDoList[0], "Med");
  console.log("Change priority to med");
  console.log(globalToDoList);
});

document.querySelector("#high").addEventListener("click", () => {
  changePriority(globalToDoList[0], "High");
  console.log("Change priority to high");
  console.log(globalToDoList);
});
