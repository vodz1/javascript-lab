
// Function to add a task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var taskItem = document.createElement("li");
    taskItem.className = "taskItem";
    taskItem.innerHTML = `
                    <span>${taskInput.value}</span>
                    <div style="text-decoration : none">
                    <button class="taskDone taskelement" onclick="markDone(this)"><i class="fa-solid fa-square-check"></i></button> 
                   <button class="taskDelete taskelement" onclick="deleteTask(this)"><i class="fa-solid fa-square-xmark"></i></button>
                   </div>
                `;
    taskList.appendChild(taskItem);
    
    // Save task to local storage
    saveTask(taskInput.value);
    
    taskInput.value = "";
  }
}

// Function to mark a task as done
function markDone(element) {
  var taskItem = element.parentElement.parentElement;

  taskItem.style.backgroundColor = "rgba(76, 175, 80, 0.7)";
}

// Function to delete a task
function deleteTask(element) {
  var taskItem = element.parentElement.parentElement;
  taskItem.remove();
  
  // Remove task from local storage
  removeTask(taskItem.querySelector("span").innerText);
}

// Function to save task to local storage
function saveTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove task from local storage
function removeTask(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(function(item) {
    return item !== task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
