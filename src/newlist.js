// Function to create a new todo list and adds that list to the global list

function newList(globalList) {
  let newitem1 = "newtest1";
  let newitem2 = "newtest2";
  let newitem3 = "newtest3";
  const newArray = [newitem1, newitem2, newitem3];
  globalList.push(newArray);
}

export { newList };
