document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskCounter = document.getElementById('task-counter');
    const clearTasksButton = document.getElementById('clear-tasks');
    const dateTime = document.getElementById('date-time');
    const quoteElement = document.getElementById('quote');
  
    // Motivational Quotes Array
    const quotes = [
      "Stay focused and never give up!",
      "Believe you can, and you're halfway there.",
      "Success is the sum of small efforts, repeated daily.",
      "Your future depends on what you do today.",
      "Dream big and dare to fail."
    ];
  
    // Display Current Date and Time
    function updateDateTime() {
      const now = new Date();
      dateTime.textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
  
    // Display a Random Motivational Quote
    function displayQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = `"${quotes[randomIndex]}"`;
    }
    displayQuote();
  
    // Update Task Counter
    function updateTaskCounter() {
      const totalTasks = taskList.children.length;
      const completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
      taskCounter.textContent = `Tasks: ${totalTasks} | Completed: ${completedTasks}`;
    }
  
    // Add a Task
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskText = taskInput.value;
      if (!taskText) return;
  
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="task-content">
          <input type="checkbox" class="task-checkbox">
          <span>${taskText}</span>
        </div>
        <button class="delete-btn">Delete</button>
      `;
  
      // Mark Task as Completed
      li.querySelector('.task-checkbox').addEventListener('change', updateTaskCounter);
  
      // Delete Task
      li.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(li);
        updateTaskCounter();
      });
  
      taskList.appendChild(li);
      taskInput.value = ''; // Clear input
      updateTaskCounter();
    });
  
    // Clear All Tasks
    clearTasksButton.addEventListener('click', () => {
      taskList.innerHTML = '';
      updateTaskCounter();
    });
  });
  