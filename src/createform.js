// Function to add a form to the page to input data

function openForm() {
  const form = document.createElement("form");
  document.querySelector("#right-column").prepend(form);
  form.appendChild(document.createElement("label")).for = "todoname";
  const name = document.createElement("input");
  name.type = "text";
  name.name = "toDoName";
  name.placeholder = "Task";
  name.id = "todoname";
  form.appendChild(name);
  const deadline = document.createElement("input");
  form.appendChild(document.createElement("label")).for = "deadline";
  deadline.type = "date";
  deadline.name = "deadlineDate";
  deadline.id = "deadline";
  form.appendChild(deadline);
  const priority = document.createElement("select");
  form.appendChild(document.createElement("label")).for = "priority";
  priority.name = "priorityOption";
  priority.id = "priority";
  form.appendChild(priority);
  const valNone = document.createElement("option");
  valNone.value = "None";
  valNone.textContent = "None";
  priority.appendChild(valNone);
  const valLow = document.createElement("option");
  valLow.value = "Low";
  valLow.textContent = "Low";
  priority.appendChild(valLow);
  const valMed = document.createElement("option");
  valMed.value = "Med";
  valMed.textContent = "Med";
  priority.appendChild(valMed);
  const valHigh = document.createElement("option");
  valHigh.value = "High";
  valHigh.textContent = "High";
  priority.appendChild(valHigh);
  const description = document.createElement("textarea");
  description.name = "Description";
  description.placeholder = "ToDo Description";
  form.appendChild(description);
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Create ToDo";
  form.appendChild(submit);
}

export { openForm };
