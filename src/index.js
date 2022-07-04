alert('Welcome to Webpack Boilerplate');
const user = prompt("What's your name?");

class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    document.body.innerHTML = `Hello ${this.name}! Your Boilerplate is properly running.`;
  }
}

const greeter = new Greeter(user);
greeter.sayHello();
