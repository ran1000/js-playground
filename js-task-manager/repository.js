class Repository {
  constructor() {
    this.tasks = [];
  };

  addTask(task) {
    this.tasks.push(task);
  };

  allTasks() {
    this.tasks
  };

  find(index) {
    this.tasks[index];
  };
}

module.exports = Repository;
