class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  isCompleted() {
    this.completed = true;
  }
}

module.exports = Task;
