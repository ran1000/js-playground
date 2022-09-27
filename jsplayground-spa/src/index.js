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

// const domRoot = document.getElementById("root");
// const welcImg = domRoot.childNodes;
// console.log(domRoot);
// console.log(welcImg);

// Changing Element

// domRoot.style.color = "white";
// welcImg[3].src = "https://images.unsplash.com/photo-1568749229204-d0bae9465fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80";
// welcImg[3].style.height = "300px";

// Adding and Removing

// const newText = document.createTextNode("A description for an not yet existing tag");
// console.log(newText);
// const subTitle = document.createElement("h3");
// subTitle.appendChild(newText);
// domRoot.appendChild(subTitle);
// const textAfterTag = document.createTextNode("Now a description for an existing tag");
// subTitle.replaceChild(textAfterTag, newText);

// Animations

// let pos = 0;
// const t = setInterval(move, 1);
// domRoot.style.position = "relative";
// welcImg[3].style.position = "absolute";
// function move() {
//   if (pos >= window.innerWidth) {
//     pos = 0;
//   } else {
//     pos += 1;
//     welcImg[3].style.left = `${pos}px`;
//   }
// }

// Event Handler

// const TitleEl = welcImg[0].nextSibling;
// function border() {
//   TitleEl.style.border = "5px solid red";
//   TitleEl.style.color = "blue";
// }

// Event Listener

// TitleEl.addEventListener("click", border);

// Image Slider

// const images = [
//   "https://images.unsplash.com/photo-1496277016162-7ca4da89c94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
//   "https://images.unsplash.com/photo-1561888416-4dba58c7170f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
//   "https://images.unsplash.com/photo-1556764025-e8e74bddc284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
// ]

// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// const carousel = document.getElementById("slider");
// let posCar = 0;
// carousel.src = images[posCar];
// console.log(nextBtn);
// prevBtn.addEventListener("click", prev);
// nextBtn.addEventListener("click", next);
// function next() {
//   posCar += 1;
//   if (posCar >= images.length) {
//     posCar = 0;
//   }
//   carousel.src = images[posCar];
// }
// function prev() {
//   posCar -= 1;
//   if (posCar <= images.length) {
//     posCar = 0;
//   }
//   carousel.src = images[posCar];
// }

// Pointer

// const spotLight = document.createElement("div");
// spotLight.style.position = "absolute";
// spotLight.style.background = "radial-gradient(circle, rgba(131,58,180,1) 16%, rgba(125,29,253,1) 30%, rgba(122,143,254,1) 58%, rgba(255,255,255,0) 90%)";
// spotLight.style.borderRadius = "50%";
// spotLight.style.height = "200px";
// spotLight.style.width = "200px";
// spotLight.style.zIndex = "-3";
// domRoot.appendChild(spotLight);

// Position function

// const spotPos = (e) => {
//   spotLight.style.left = e.pageX - 100 + 'px';
//   spotLight.style.top = e.pageY - 100 + 'px';
// }
// document.addEventListener("mousemove", spotPos);

// Transitioning Banner
const slidingBanner = document.getElementById("js-slider");
let pos = 0;
const t = setInterval(move, 10);
function move() {
  if (pos >= window.innerWidth) {
    pos = 0;
  } else {
    pos += 1;
    slidingBanner.style.left = `${pos}px`;
  }
}

// Pointer Night Mode

const domRoot = document.getElementById("root");
// console.log(domRoot);
const banner = document.getElementById("js-slider").children[0];
// console.dir(banner);
const link = document.getElementById("js-slider");
link.onclick = (e) => {
  e.preventDefault();
};

const spotLight = document.createElement("div");

function handleNightMode() {
  // Handles page colour.
  domRoot.parentElement.classList.toggle("night-mode");
  // Handles the pointer.
  if (spotLight.classList.contains("night-pointer")) {
    domRoot.removeChild(spotLight);
    spotLight.classList.toggle("night-pointer");
  } else {
    domRoot.appendChild(spotLight);
    spotLight.classList.toggle("night-pointer");
    const spotPos = (e) => {
      spotLight.style.left = e.pageX - 100 + 'px';
      spotLight.style.top = e.pageY - 100 + 'px';
    };
    document.addEventListener("mousemove", spotPos);
  }
}

banner.addEventListener("click", handleNightMode);
