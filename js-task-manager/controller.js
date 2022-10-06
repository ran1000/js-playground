import Task from "./task"

export default class Controller {

  constructor(repository, view) {
    this.repository = repository;
    this.view = view;
  };

  createTask() {
    const description = this.view.askUser("task");
    const task = new Task(description);
    this.repository.addTask(task);
  };

  listTasks() {
    const tasks = this.repository.allTasks();
    this.view.display(tasks);
  };

  markAsComplete() {
    listTasks();
    const taskIndex = this.view.askUser("index");
    const task = this.repository.find(taskIndex);
    task.isCompleted();
    listTasks();
  };

};
