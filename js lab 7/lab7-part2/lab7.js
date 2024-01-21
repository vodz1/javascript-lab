//-------------------------PART 2----------------------

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
    taskInput.value = "";
  }
}

function markDone(element) {
  var taskItem = element.parentElement.parentElement;

  taskItem.style.backgroundColor = "rgba(76, 175, 80, 0.7)";
}

function deleteTask(element) {
  var taskItem = element.parentElement.parentElement;
  taskItem.remove();
}
