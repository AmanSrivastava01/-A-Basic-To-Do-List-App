// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to create and add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;
    
    // Toggle task completion
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    
    // Delete task
    li.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';  // Clear input field
}

// Add task when the button is clicked
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
