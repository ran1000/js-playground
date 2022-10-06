import Task from "./task"

class Controller {

  constructor(repository, view) {
    this.repository = repository;
    this.view = view;
  };

  createTask() {
    description = this.view.ask_user("task");
    task = new Task(description);
    this.repository.addTask(task);
  }
}
