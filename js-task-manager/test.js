// import Controller from "./controller";
// import View from "./view";
// import Repository from "./repository";
// import Router from "./router";

const prompt = require('prompt');

class Router {
  constructor(controller) {
    this.controller = controller;
  };

  async run() {
    let running = true;
    console.log("Welcome to the task manager!");

    while (running) {
      console.log("What do you want to do?");
      console.log("1 - add a task");
      console.log("2 - list the tasks");
      console.log("3 -  mark a task as done");
      console.log("4 -  quit the task manager");
      prompt.start();
      const { userRequest } = await prompt.get(['userRequest']);
      console.dir(userRequest);
      switch (userRequest) {
        case "1":
          this.controller.createTask();
        case "2":
          this.controller.listTasks();
        case "3":
          this.controller.markAsComplete();
        case "4":
          running = false;
        default:
          console.log("Wrong input... try again!");
      };
    };
  };
};

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  };

  isCompleted() {
    this.completed = true;
  }
}

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

class Controller {

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

class View {
  askFor(item) {
    prompt(`What is the ${item}`);
  };
  display(items) {
    items.forEach((item, index) => {
      console.log(`${index + 1} ${item.completed ? "[x]" : "[ ]"} - ${item.description}`);
    });
  };
}

const view = new View();
const repository = new Repository();
const controller = new Controller(view, repository);
new Router(controller).run();
