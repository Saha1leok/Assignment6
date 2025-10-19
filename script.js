//Task0
console.log("Ayaulym","SE-2433")
alert("Hello, JavaScript World!");
//Task1
let name = "Ayaulym";
let group = 2433;
let logic= true;
console.log("Name:", name);
console.log("Group:", group);
console.log("Logic:", logic);

let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

let first="Hello, ";
let second="World!";
let message= first + second;
console.log(message);

//Task2
function changeTextColor() {
    const textElement = document.getElementById("myText");
    textElement.style.color = "blue";
}

//Task3
function changeBgColor() {
    const block = document.getElementById("myBlock");
    block.style.backgroundColor = "lightgreen";
}

function changeFontSize() {
    const block = document.getElementById("myBlock");
    block.style.fontSize = "26px";
}

//Task4
function AddItem() {
    const list = document.getElementById("myList");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
}

function RemoveItem() {
    const list = document.getElementById("myList");
    const lastItem = list.lastElementChild;
    
    if (lastItem) {
        list.removeChild(lastItem);
    }
}

//Task5
function hoverEffect() {
    const box = document.getElementById("mouseBox");
    box.style.backgroundColor = "cornflowerblue";
    box.textContent = "Mouse is here🖱️";
}

function resetEffect() {
    const box = document.getElementById("mouseBox");
    box.style.backgroundColor = "lightgray";
    box.textContent = "Hover over me!";
}
//Task6

function updateText() {
    const inputField = document.getElementById("textInput");
    const display = document.getElementById("displayText");
    const currentValue = inputField.value;
    display.textContent = currentValue;
}

/* --- Task 7: Calculator --- */

function add() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    const result = num1 + num2;
    
    const display = document.getElementById("calcResult");
    display.textContent = result;
}

function subtract() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    const result = num1 - num2;
    
    const display = document.getElementById("calcResult");
    display.textContent = result;
}

function multiply() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    const result = num1 * num2;
    
    const display = document.getElementById("calcResult");
    display.textContent = result;
}

function divide() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    const display = document.getElementById("calcResult");

    // Add a check for division by zero
    if (num2 === 0) {
        display.textContent = "Error: Cannot divide by zero";
        return; // Exit the function
    }
    
    const result = num1 / num2;
    display.textContent = result;
}

let tasks = [];

function addTask() {
    const titleInput = document.getElementById("taskTitle");
    const descInput = document.getElementById("taskDescription");

    const title = titleInput.value;
    const description = descInput.value;

    if (title === "" || description === "") {
        alert("Please fill in both Title and Description");
        return;
    }

    const newTask = {
        title: title,
        description: description,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();

    titleInput.value = "";
    descInput.value = "";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        
        const li = document.createElement("li");
        li.className = "task-card";

        if (task.completed) {
            li.classList.add("completed");
        }

        const controlsDiv = document.createElement("div");
        controlsDiv.className = "task-controls";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            deleteTask(index);
        };
        
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "✓";
        toggleBtn.className = "toggle-btn";
        toggleBtn.onclick = function() {
            toggleComplete(index);
        };

        const titleEl = document.createElement("h3");
        titleEl.textContent = task.title;

        const descEl = document.createElement("p");
        descEl.textContent = task.description;

        controlsDiv.appendChild(toggleBtn);
        controlsDiv.appendChild(deleteBtn);
        
        li.appendChild(controlsDiv);
        li.appendChild(titleEl);
        li.appendChild(descEl);

        list.appendChild(li);
    });
}

renderTasks();