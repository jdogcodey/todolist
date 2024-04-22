// Creating a New To Do list object on the to do array

function newToDo(
  arrayName,
  name,
  completed,
  deadline,
  priority,
  list,
  description
) {
  let toDo = {
    name: name,
    completed: completed,
    deadline: deadline,
    priority: priority,
    list: list,
    description: description,
    selected: "",
  };

  arrayName.push(toDo);
}

export { newToDo };
