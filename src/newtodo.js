// Creating a New To Do list object on the to do array

function newToDo(arrayName, name, deadline, priority, description) {
  arrayName[name] = {
    name: name,
    completed: "unchecked",
    deadline: deadline,
    priority: priority,
    description: description,
    selected: "",
  };
}

export { newToDo };
