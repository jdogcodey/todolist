// Function to create a new todo list and adds that list to the global list

function newList(globalList) {
  const newArray = ["newitem1", "newitem2", "newitem3"];
  globalList.push(newArray);
}

export { newList };
