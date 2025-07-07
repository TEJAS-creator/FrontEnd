function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}



// theory
// In JavaScript, stopPropagation() is a method used to prevent an event from bubbling up the DOM hierarchy.
// When an event occurs, it typically propagates through three phases: capturing, target, and bubbling.
// By calling stopPropagation(), you stop the event from continuing to propagate to parent elements during the
// bubbling or capturing phase.


// The createElement method in JavaScript is used to create a new HTML element specified by the tag name.
// This method is part of the Document Object Model (DOM) and is commonly used to dynamically add elements to
// a webpage.


// To work with text content in JavaScript, you can manipulate text in various ways, such as retrieving,
// modifying, or appending text to elements.


// The appendChild method is used to add a node to the end of the list of child nodes of a specified parent node.

// In JavaScript, a "toggle" typically refers to switching between two states, such as showing/hiding an element,
// adding/removing a class, or toggling a boolean value.