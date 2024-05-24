// Exercise 12
console.log("script.js is initializing");
// let boxes = document.getElementsByClassName("box");

// console.log(boxes);

// Array.from(boxes).forEach(e => {
//     console.log(e);
// })

// or
let boxes = document.querySelector(".container").children;

console.log(boxes);

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});

// we use a function of Math.random()

// function randomNumber(min, max) {
//     min + Math.random(max - min);
// }

// here min is zero,r is Math.random and (max - min) is : (255 - 0).
