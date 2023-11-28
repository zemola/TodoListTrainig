//capture the value of the input text
//List the catpured value


function addTask() {
   var taskInput = document.getElementById('todoInput') 
   var taskList = document.getElementById('taskList')

   //condition to check if the input is empty

   if (taskInput.value === "") {
      alert("Please enter a task")
      return false
   }

   var newTask = document.createElement("li")
   newTask.innerText = taskInput.value
   taskList.appendChild(newTask)

   newTask.onclick = function () {
      this.parentNode.removeChild(this)
   }
}



function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        var taskInput = document.getElementById('todoInput') 
   var taskList = document.getElementById('taskList')

   //condition to check if the input is empty

   if (taskInput.value === "") {
      alert("Please enter a task")
      return false
   }

   var newTask = document.createElement("li")
   newTask.innerText = taskInput.value

   taskList.appendChild(newTask)

    }
}