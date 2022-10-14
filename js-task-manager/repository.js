class Repository {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    return this.tasks.push(task);
  }

  allTasks() {
    return this.tasks;
  }

  find(index) {
    return this.tasks[index];
  }
}

module.exports = Repository;
