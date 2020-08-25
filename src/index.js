document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskItem = document.getElementById('new-task-description')
  const newTaskForm = document.getElementById('create-task-form')
  const taskContainer = document.getElementById('tasks')

  let newTasks = []

  newTaskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    newTasks.push(
      `<li id="${newTaskItem.value}" > 
      ${newTaskItem.value} <button data-id="${newTaskItem.value}" class="delete-comment" >x</button> </li>`)
  	taskContainer.innerHTML = newTasks.join("")
  })

  taskContainer.addEventListener("click", function(e) {
    if (e.target.className == "delete-comment") {
      let taskId = e.target.dataset.id
      let deleteTask = document.getElementById(taskId)
      let deleteIndex = newTasks.indexOf(deleteTask)
      newTasks.splice(deleteIndex, 1)
      deleteTask.remove()
    }
  })
});