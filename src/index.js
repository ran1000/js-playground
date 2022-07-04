// alert('Welcome to Webpack Boilerplate');
// const user = prompt("What's your name?");

// class Greeter {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     document.body.innerHTML = `Hello ${this.name}! Your Boilerplate is properly running.`;
//   }
// }

// const greeter = new Greeter(user);
// greeter.sayHello();

// Selectors
const domRoot = document.getElementById("root");
const welcImg = domRoot.childNodes;
console.log(domRoot);
console.log(welcImg);
// Changing Element
domRoot.style.color = "red";
welcImg[3].src = "https://images.unsplash.com/photo-1568749229204-d0bae9465fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80";
welcImg[3].style.height = "300px";
// Adding and Removing
const newText = document.createTextNode("A description for an not yet existing tag");
console.log(newText);
const subTitle = document.createElement("h3");
subTitle.appendChild(newText);
domRoot.appendChild(subTitle);
const textAfterTag = document.createTextNode("Now a description for an existing tag");
subTitle.replaceChild(textAfterTag, newText);
// Animations
let pos = 0;
const t = setInterval(move, 1);
domRoot.style.position = "relative";
welcImg[3].style.position = "absolute";
function move() {
  if (pos >= window.innerWidth) {
    pos = 0;
  } else {
    pos += 1;
    welcImg[3].style.left = `${pos}px`;
  }
}
// Event Handler
const TitleEl = welcImg[0].nextSibling;
function border() {
  TitleEl.style.border = "5px solid red";
  TitleEl.style.color = "blue";
}
TitleEl.addEventListener("click", border);

// Event Listener

export default { border };
