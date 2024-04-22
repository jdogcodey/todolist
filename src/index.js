import { newToDo } from "./newtodo.js";
import { newList } from "./newlist.js";
import { moveList } from "./movelist.js";

let item1 = "test1";
let item2 = "test2";
let item3 = "test3";
let item4 = "test4";
let item5 = "test5";
let item6 = "test6";

let newArray = [item1, item2, item3, item4, item5, item6];
moveList(newArray, newArray, 2, 0);
console.log(newArray);
