// Creating a New To Do list object on the to do array

function newToDo(arrayName, name, deadline, priority, list, description) {
  let toDo = {
    name: name,
    completed: 0,
    deadline: deadline,
    priority: priority,
    list: list,
    description: description,
    selected: "",
  };

  arrayName.push(toDo);
}

export { newToDo };
