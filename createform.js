// Function to add a form to the page to input data

function openForm() {
  const form = document.querySelector("#right-column").prepend("form");
  const name = form.appendChild("input");
  name.type = "text";
}

export { openForm };
