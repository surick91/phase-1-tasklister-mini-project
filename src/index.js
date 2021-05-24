document.addEventListener("DOMContentLoaded", () => {
  // your code here
  Event.preventDefault()

});

const newForm = document.getElementById("create-task-form") 
newForm.addEventListener('submit',(Event) => {
  Event.preventDefault()
  const newList = document.createElement("li")
   newList.textContent=Event.target["new-task-description"].value
   const taskList = document.getElementById('tasks')
   taskList.append(newList)
})


