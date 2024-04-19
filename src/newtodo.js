// Creating a New To Do list object on the to do array

function newToDo(arrayName) {
  let toDo = {
    name: "",
    completed: "",
    deadline: "",
    priority: "",
    list: "",
    description: "",
  };

  arrayName.push(toDo);
}

export { newToDo };
