const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTaskElement(taskText, taskDate) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    taskDetails.innerHTML = `<span>${taskText}</span><small>${taskDate || "No deadline"}</small>`;
    taskItem.appendChild(taskDetails);

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "✎";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        const newTaskText = prompt("Edit Task:", taskText);
        if (newTaskText !== null) {
            taskDetails.querySelector("span").innerText = newTaskText;
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✘";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    taskItem.appendChild(actions);

    return taskItem;
}

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDate = taskDateTime.value;

    if (!taskText) return alert("Please enter a task.");

    const taskItem = createTaskElement(taskText, taskDate);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskDateTime.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});
