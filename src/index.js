// index.js
import "./style.css";
import { Task } from "./task.js";
// Call the function to set up initial content
let taskbar = document.createElement("div");
taskbar.classList.add("taskbar");
taskbar.style.display = "none";
let input = document.createElement("input");
input.classList.add("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add a task...");
taskbar.appendChild(input);
let br=document.createElement("br");
taskbar.appendChild(br);
let description = document.createElement("input");
description.classList.add("description");
description.setAttribute("type", "text");
description.setAttribute("placeholder", "Add a description...");
taskbar.appendChild(description);

let date = document.createElement("input");
date.classList.add("date");
date.setAttribute("type", "date");
taskbar.appendChild(date);

let addbutton = document.createElement("button");
addbutton.classList.add("button");
addbutton.textContent = "Add";


taskbar.appendChild(addbutton);
document.body.appendChild(taskbar);

// div
let display = document.createElement("div");
display.classList.add("display");


let list = document.createElement("ul");
list.classList.add("task-list");

addbutton.addEventListener("click", () => {
  // display.innerHTML = " ";
  let currenttask = new Task(input, description, date);
  Task.updateTask(list, display);

  display.appendChild(list);
  document.body.appendChild(display);
});

// Get the elements
const openModalButton = document.getElementById("open-modal");
const modalContainer = document.getElementById("modal-container");
const closeModalButton = document.getElementById("close-modal");

// Add event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

// Function to open the modal
function openModal() {
  modalContainer.style.display = "block"; // Show the modal
  taskbar.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modalContainer.style.display = "none"; // Hide the modal
  taskbar.style.display = "none";
}
