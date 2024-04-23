// Function to toggle visibility of element

function toggleVisible(input) {
  const form = document.querySelector(input);
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

export { toggleVisible };
