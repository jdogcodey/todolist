// Function to toggle visibility of element

function toggleVisible(input) {
  const form = document.querySelector(input);
  if (form.style.display === "grid") {
    form.style.display = "none";
  } else {
    form.style.display = "grid";
  }
}

export { toggleVisible };
