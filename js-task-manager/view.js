const readline = require('readline');

class View {
  askFor(item) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`What is the ${item}`, (answer) => {
      console.log(`Your answer: ${answer}`);
      return answer;
    });
  }

  display(items) {
    console.dir(items);
    items.forEach((item, index) => {
      console.log(`${index + 1} ${item.completed ? "[x]" : "[ ]"} - ${item.description}`);
    });
  }
}

module.exports = View;
