/*
// creating a buisness name generator by combing=ng lists of adjectives and shop name and shop name and another word

Adjective :
crazy
amzing
fire


shop name:
Engine
Foods
Garments

Another Word: 
Bros
Limited
Hub
*/

// SOLUTIONS:


let rand = Math.random();
let first, second, third;
// 0 0.33 0.66 1

// generating first word

if (rand < 0.33) {
  first = "Craxy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

// generating Second word
rand = Math.random();
if (rand < 0.33) {
  second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Food";
} else {
  second = "Garmrnts";
}

// generating Third word
rand = Math.random();
if (rand < 0.33) {
  third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);