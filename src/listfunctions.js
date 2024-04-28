// All list variables and functions in one place

// Array to contain all the todo lists

// Array to contain all the global To Do items (unassigned to a list)
const globalList = {};
const allLists = { globalList: globalList };

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

function newList(name) {
  allLists[name] = {};
}

function changePriority(todo, newpriority) {
  allLists[todo["priority"]] = newpriority;
}

function completeToDo(todo, list) {
  allLists[list[todo]].completed = allLists[list[todo]].completed = "unchecked"
    ? "unchecked"
    : "checked";
}

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
