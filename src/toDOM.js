import { allLists, completeToDo, newList } from "./listfunctions";

function updatePage() {
  const leftColumn = document.querySelector("#left-column");
  const rightColumn = document.querySelector("#right-column");
  leftColumn.innerHTML = "";
  rightColumn.innerHTML = "";
  let listColor = "pale";
  for (const [listKey, listValue] of Object.entries(allLists)) {
    const list = document.createElement("button");
    list.classList.add("list-button");
    list.textContent = `${listKey}`;
    leftColumn.appendChild(list);
    if (listColor === "pale") {
      listColor = "dark";
      list.style.backgroundColor = "#f6eee3";
    } else {
      listColor = "pale";
      list.style.backgroundColor = "#d9af84";
    }
    list.addEventListener("click", () => {
      onClick(rightColumn, listKey);
    });
  }
}

document.querySelector("#add-list").addEventListener("click", () => {
  newList(prompt("Add To Do List", "Name"), updatePage);
});

function addTaskDetails(listKey, toDoKey, toDoRow) {
  for (const [toDoItemKey, toDoItemValue] of Object.entries(
    allLists[listKey][toDoKey]
  )) {
    if (toDoItemKey === "completed") {
      const toDoDetail = document.createElement("input");
      toDoDetail.type = "checkbox";
      toDoDetail.checked = toDoItemValue;
      toDoDetail.name = "completed-task";
      toDoRow.appendChild(toDoDetail);
      toDoDetail.classList.add("completed");
      toDoDetail.addEventListener("click", () => {
        completeToDo(toDoKey, listKey);
      });
    } else {
      const toDoDetail = document.createElement("span");
      toDoDetail.textContent = `${toDoItemValue}`;
      toDoDetail.id = `${toDoItemKey}`;
      toDoDetail.classList.add(`${toDoItemKey}`);
      toDoRow.appendChild(toDoDetail);
    }
  }
}

function onClick(rightColumn, listKey) {
  console.log("triggered");
  rightColumn.innerHTML = "";
  let taskColor = "pale";
  for (const [toDoKey, toDoValue] of Object.entries(allLists[listKey])) {
    const toDoRow = document.createElement("div");
    if (taskColor === "pale") {
      taskColor = "dark";
      toDoRow.style.backgroundColor = "#f6eee3";
    } else {
      taskColor = "pale";
      toDoRow.style.backgroundColor = "#d9af84";
    }
    toDoRow.classList.add("to-do-row");
    rightColumn.appendChild(toDoRow);
    addTaskDetails(listKey, toDoKey, toDoRow);
  }
}

export { updatePage, onClick };
