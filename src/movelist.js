// Function to move a todo item into a particular list

function moveList(array, newarray, oldListPosition, newListPosition) {
  const item = array[oldListPosition];
  array.splice(oldListPosition, 1);
  newarray.splice(newListPosition, 0, item);
}

export { moveList };
