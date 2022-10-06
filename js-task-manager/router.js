export default class Router {
  constructor(controller) {
    this.controller = controller;
  };

  run() {
    let running = true;
    console.log("Welcome to the task manager!");

    while (running) {
      console.log("What do you want to do?");
      console.log("1 - add a task");
      console.log("2 - list the tasks");
      console.log("3 -  mark a task as done");
      console.log("4 -  quit the task manager");
      const userRequest = prompt("Give a number!")
      switch (userRequest) {
        case 1:
          this.controller.createTask;
        case 2:
          this.controller.listTasks;
        case 3:
          this.controller.markAsComplete;
        case 4:
          running = false;
        default:
          console.log("Wrong input... try again!");
      };
    };
  };
};
