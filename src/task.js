// Purpose: Task class to create and delete tasks

export class Task {
  static tasklist = [];
  constructor(title, description, dueDate) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate = dueDate.value;
    Task.tasklist.push(this);
    // console.log(Task.tasklist);
    return this;
  }

  static deletetask(title, listItem,deleteButton,list) {
    Task.tasklist = Task.tasklist.filter((task) => task.title !== title);
    listItem.remove();
    deleteButton.remove();
    console.log(Task.tasklist);
  }
  static updateTask(list) {
    list.innerHTML = " ";
    Task.tasklist.forEach((task) => {
      let listItem = document.createElement("li");
      listItem.textContent = `${task.title}  ${task.description} ${task.dueDate}`;
      list.appendChild(listItem);
      let deletebutton = document.createElement("button");
      deletebutton.textContent = "Delete";
      deletebutton.classList.add("delete");
      deletebutton.addEventListener("click", () => {
        Task.deletetask(task.title, listItem,deletebutton,list);
      });
      list.appendChild(deletebutton);
    });
  }
}

window.Tasklist = Task.tasklist;