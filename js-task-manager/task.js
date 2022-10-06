class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  };

  isCompleted() {
    this.completed = true;
  }
}

// const par = "The key to understand it all.";
// const a = new Task(par);
// console.log(a);
