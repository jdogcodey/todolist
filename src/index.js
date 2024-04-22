import { newToDo } from "./newtodo.js";
import { newList } from "./newlist.js";
import { moveList } from "./movelist.js";
import { completeToDo } from "./completetodo.js";

const globalToDoList = [];
newToDo(
  globalToDoList,
  "Make To Do List",
  "Tomorrow",
  "High",
  "List Not Organised Properly currently",
  "Description goes here"
);

document.querySelector("button").addEventListener("click", () => {
  completeToDo(globalToDoList[0]);
  console.log(globalToDoList);
});
