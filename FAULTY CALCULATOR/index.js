// CREATES A FAULTY CAlCUlATOR USING JAVASCRIPT

/*this faulty calculator does following .
1. It takes two number as input from user.
2. It performs wrong operation as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It perform  wrong opertaiond 10% of the times.
*/

// SOLUTION:

let random = Math.random();

let a = prompt("Enter first Number");
console.log(random)
let c = prompt("Enter operation");
let b = prompt("Enter Second Number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**", 
};
if (random > 0.1) {
  // performs correct calculation
  alert(`${eval(`${a} ${c} ${b}`)}`);
} else {
  // perform wrong Calculation
  c = obj[c];
  alert(`${eval(`${a} ${c} ${b}`)}`);
}
