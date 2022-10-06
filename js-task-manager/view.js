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
