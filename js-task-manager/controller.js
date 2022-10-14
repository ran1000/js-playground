const Task = require("./task");

class Controller {
  constructor(view, repository) {
    this.repository = repository;
    this.view = view;
  }

  createTask() {
    const description = this.view.askFor("task");
    const task = new Task(description);
    this.repository.addTask(task);
  }

  listTasks() {
    const tasks = this.repository.allTasks();
    this.view.display(tasks);
  }

  markAsComplete() {
    this.listTasks();
    const taskIndex = this.view.askFor("index");
    const task = this.repository.find(taskIndex);
    task.isCompleted();
    this.listTasks();
  }
}

// This Class is now scoped to all the files requiring it
module.exports = Controller;

// export multiple variables
// module.exports = {
//   a,
//   b,
//   c
// };
