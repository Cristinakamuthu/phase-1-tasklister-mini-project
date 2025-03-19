document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
    form.addEventListener('submit',(e)=> {
      e.preventDefault();
      let task = document.querySelector("#new-task-description")

      writeList(task.value)
      task.value ="  ";
    })

});

function writeList (todo){
  let write = document.createElement("p")
  write.style.color = "green"
  let btn = document.createElement ("button")
  btn.addEventListener('click', deleteTask)
  btn.textContent = "x"
  btn.style.color = "white"
  btn.style.backgroundColor = "black"
  write.textContent = `${todo}`
  write.appendChild(btn)
  console.log(write)
  document.querySelector('#list').appendChild(write)
}
function deleteTask(e){
  e.target.parentNode.remove();
}
