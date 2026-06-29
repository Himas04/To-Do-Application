document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("input");
  const todoList = document.getElementById("output");
  const addTaskBtn = document.getElementById("btn");
  const dustbin = document.getElementById("dustbin");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText == "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    renderTask(newTask);
    saveTask();
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

   li.querySelector("button").addEventListener("click", (e) => {
     e.stopPropagation();

     dustbin.classList.add("show");

     li.classList.add("delete-animation");

     setTimeout(() => {
       tasks = tasks.filter((t) => t.id !== task.id);

       li.remove();

       saveTask();

       dustbin.classList.remove("show");
     }, 800);
   });
    todoList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
