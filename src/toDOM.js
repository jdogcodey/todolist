import { allLists, newList } from "./listfunctions";

function updatePage() {
  const leftColumn = document.querySelector("#left-column");
  const rightColumn = document.querySelector("#right-column");
  leftColumn.innerHTML = "";
  rightColumn.innerHTML = "";
  for (const [listKey, listValue] of Object.entries(allLists)) {
    const list = document.createElement("button");
    list.classList.add("list-button");
    list.textContent = `${listKey}`;
    leftColumn.appendChild(list);
    list.addEventListener("click", function onClick() {
      rightColumn.innerHTML = "";
      for (const [toDoKey, toDoValue] of Object.entries(allLists[listKey])) {
        const toDoRow = document.createElement("button");
        rightColumn.appendChild(toDoRow);
        for (const [toDoItemKey, toDoItemValue] of Object.entries(
          allLists[listKey][toDoKey]
        )) {
          const toDoDetail = document.createElement("span");
          toDoDetail.textContent = `${toDoItemValue}`;
          toDoRow.appendChild(toDoDetail);
        }
      }
    });
  }
}

document.querySelector("#add-list").addEventListener("click", () => {
  newList(prompt("Add ToDo List", "Name"), updatePage);
});

export { updatePage };
