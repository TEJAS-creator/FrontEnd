function toggle() {
  const btn = document.getElementById("btn");
  if (btn.innerText === "Show") {
    btn.innerText = "Hide";
  } else {
    btn.innerText = "Show";
  }
  const box = document.getElementById("box")
  box.classList.toggle("green")
}
