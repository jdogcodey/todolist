// Function to switch the completion status of a todo item

function completeToDo(todo) {
  todo.completed = 1 - todo.completed;
}

export { completeToDo };
