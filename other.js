// Get the input element and add-button element
const nameInput = document.getElementById("name-input");
const addButton = document.getElementById("add-button");

// Get the ul element where the names will be displayed
const nameList = document.getElementById("name-list");

// Initialize an empty array to store the names
let names = [];

// Function to add a new name to the queue
function addName() {
  // Get the name from the input element
  const name = nameInput.value.trim();

  // Check if the name is not empty and not already in the queue
  if (name && !names.includes(name)) {
    // Add the name to the array
    names.push(name);

    // Create a new li element to display the name
    const li = document.createElement("li");
    li.innerHTML = `<span>${name}</span>
                    <button class="remove-button">Remove</button>
                    <div>
                      <button class="move-up">Move Up</button>
                      <button class="move-down">Move Down</button>
                    </div>`;
    nameList.appendChild(li);

    // Clear the input element
    nameInput.value = "";
  }
}

// Function to remove a name from the queue
function removeName(li) {
  // Get the name from the li element
  const name = li.querySelector("span").textContent;

  // Remove the name from the array
  names = names.filter((n) => n !== name);

  // Remove the li element from the ul element
  li.remove();
}

// Function to move a name up in the queue
function moveUp(li) {
  // Get the previous sibling of the li element
  const prevLi = li.previousElementSibling;

  // Check if the previous sibling exists and is not the first child
  if (prevLi && prevLi.nodeName === "LI") {
    // Swap the positions of the li elements
    nameList.insertBefore(li, prevLi);
  }
}

// Function to move a name down in the queue
function moveDown(li) {
  // Get the next sibling of the li element
  const nextLi = li.nextElementSibling;

  // Check if the next sibling exists and is not the last child
  if (nextLi && nextLi.nodeName === "LI") {
    // Swap the positions of the li elements
    nameList.insertBefore(nextLi, li);
  }
}

// Event listener for the add-button element
addButton.addEventListener("click", addName);

// Event listener for the input element to add a name when the Enter key is pressed
nameInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addName();
  }
});

// Event listener for the remove-button and move-up and move-down buttons
nameList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("remove-button")) {
    // Call the removeName function with the li element as the argument
    removeName(target.closest("li"));
  } else if (target.classList.contains("move-up")) {
    // Call the moveUp function with the li element as the argument
    moveUp(target.closest("li"));
  } else if (target.classList.contains("move-down")) {
    // Call the moveDown function with the li element as the argument
    moveDown(target.closest("li"));
  }
});
