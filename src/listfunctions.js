// All list variables and functions in one place

// Object containing all of the todo lists
const allLists = { globalList: {} };

// Adds a new to do object to the chosen list
function newToDo(list, name, deadline, priority, description) {
  list[name] = {
    name: name,
    completed: "unchecked",
    deadline: deadline,
    priority: priority,
    description: description,
    selected: "",
  };
}

// Creates a new ToDo List
function newList(name) {
  allLists[name] = {};
}

//Changes the priority of the ToDo
function changePriority(todo, list, newpriority) {
  allLists[list][todo].priority = newpriority;
}

//Flips between checked and unchecked for completed on the todo
function completeToDo(todo, list) {
  allLists[list][todo].completed = allLists[list][todo].completed = "unchecked"
    ? "checked"
    : "unchecked";
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
    selected: old.selected,
  };
  delete allLists[oldList][obj];
}

export {
  allLists,
  globalList,
  newToDo,
  newList,
  changePriority,
  completeToDo,
  moveList,
};
