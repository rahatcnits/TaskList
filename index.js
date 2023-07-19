// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

import Task from "./task.js";
import UI from "./ui.js";

const ui = new UI();

ui.showAllTask();

document.querySelector(".AddTaskBtn").addEventListener("click", () => {
  const taskValue = document.querySelector("#newtaskID").value;

  if (taskValue.length > 0) {
    const task = new Task(taskValue);

    ui.addToUi(task);
    ui.resetform();

    console.log(task);
  }
});

document.querySelector(".task-list").addEventListener("click", (e) => {
  if (e.target.className.includes("task__op_edit")) {
    ui.editTask(e);
  }

  if (e.target.className.includes("task__op_delete")) {
    ui.deleteTask(e);
  }

  if (e.target.className.includes("task-check")) {
    ui.completeTask(e);
  }
});

document.querySelector(".EditTaskBtn").addEventListener("click", (e) => {
  ui.updateTask(e);
});

document.querySelector(".CancelTaskBtn").addEventListener("click", (e) => {
  ui.cancelTask(e);
});
