// Function to move a todo item into a particular list

function moveList(oldList, newList, name) {
  newList[name] = {};
  Object.assign(newList[name], oldList[name]);
  delete oldList[name];
}

export { moveList };
