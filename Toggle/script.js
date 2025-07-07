function toggleDarkMode() {
  const body = document.body; // selects the entire page body
  const button = document.getElementById("toggleBtn"); // selects the button by its ID

  // This line adds or removes a class named "dark-mode" from the body
  body.classList.toggle("dark-mode");

  // If the class is now applied (dark mode is ON)
  if (body.classList.contains("dark-mode")) {
    button.innerText = "🌞 Light Mode"; // change button text
  } else {
    button.innerText = "🌙 Dark Mode"; // change it back
  }
}
