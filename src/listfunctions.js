// All list variables and functions in one place

// Object containing all of the todo lists
const allLists = {};

// Adds a new to do object to the chosen list
function newToDo(list, name, deadline, priority, description) {
  allLists[list][name] = {
    name: name,
    completed: "unchecked",
    deadline: deadline,
    priority: priority,
    description: description,
  };
}

// Creates a new ToDo List
function newList(listName, func) {
  allLists[listName] = {};
  func();
}

//Changes the priority of the ToDo
function changePriority(todo, list, newpriority) {
  allLists[list][todo].priority = newpriority;
}

//Flips between checked and unchecked for completed on the todo
function completeToDo(todo, list) {
  if (allLists[list][todo].completed === "checked") {
    allLists[list][todo].completed = "unchecked";
  } else {
    allLists[list][todo].completed = "checked";
  }
}

//Allows you to move the todo between different lists
function moveList(oldList, newList, obj) {
  const old = allLists[oldList][obj];
  allLists[newList][obj] = {
    name: old.name,
    completed: old.completed,
    deadline: old.deadline,
    priority: old.priority,
    description: old.description,
  };
  delete allLists[oldList][obj];
}

export { allLists, newToDo, newList, changePriority, completeToDo, moveList };
