// PRACTICE SET : 5
// parseFloat() is a JavaScript function used to convert a string containing a floating-point number into a floating-point number

// Eg .
// let numberString = "3.14";
// let number = parseFloat(numberString);
// console.log(number); // Output: 3.14

// Q1. CREATE AN ARRAY OF NUMBERS AND TAKE INPUT FROM THE USER TO ADD NUMBERS TO THE ARRAY.

//    !isNaN means not a number is a js function , It returns true if the value passed to it is not a number, otherwise it returns false.

// METHOD 1:

// // Initialise an array
// let numbers = [];

// // function to add an array

// function addNumber(number) {
//     numbers.push(number)
// }

// // Fuction to prompt the user for input and add  the number to the array.
// function promptAndAddNumber() {
//     let number = prompt("Enter a Number : ");
// // check if i/p is not null
//     if (number !== null) {
//         // convet the i/p string to a number
//         number = parseFloat(number);
// // check if the i/p is valid number.
//         if (!isNaN(number)) {
//             addNumber(number);
//             console.log("Number Added Sucessfully: ");
//         } else {

//             console.log("Invalid input ! please enter a valid number.");
//         }

//     } else {
//         console.log("Operation is Cancelled by the User. ");
//     }

// }

// // example Usages: Prompt The user to add numbers untill they cancel

// while (true) {
//     promptAndAddNumber();
//     let continueAdding = confirm("Do You Want to add another number?");
//     if (!continueAdding) {
//         break;

//     }
// }
// console.log("Array of Numbers :",numbers)

// OR
// *** METHOD 2:

// // Create an empty array
// let numbersArray = [];

// // Take input from the user until they enter "done"

// while (true) {
//     let userInput = prompt("Enter a number or type 'done' to finish:");

//     // If the user enters "done", exit the loop
//     if (userInput === "done") {
//         break;
//     }

//     // Convert the user input to a number and add it to the array
//     let number = parseFloat(userInput);
//     if (!isNaN(number)) {
//         numbersArray.push(number);
//     } else {
//         alert("Please enter a valid number.");
//     }
// }

// // Display the array
// console.log("Numbers entered by the user:", numbersArray);

// OR
// *** METHOD 3: using Array.from

// // Function to prompt the user for input and return a number
// function promptForNumber() {
//     let input = prompt("Enter a number:");
//     if (input === null) {
//         return null; // User cancelled
//     }
//     let number = parseFloat(input);
//     return isNaN(number) ? null : number;
// }

// // Prompt the user for numbers until they cancel

// let numbers = Array.from({ length: Infinity }, () => promptForNumber()).filter(n => n !== null);

// // Display the array of numbers
// console.log("Array of numbers:", numbers);

// Q2. KEEP ADDING NUMBERS TO THE ARRAY IN 1 UNTILL 0 IS ADDED TO THE ARRAY.

// let numbers = []; //empty array
// let userInput; //variable declared

// //keep prompting the user  for input untill 0
// while (true) {
//     userInput = parseInt(prompt("Enter  a number (0  to stop):"));

//     if (userInput === 0) {
//         break;  //if user input is 0,exit the loop
//     }
//     numbers.push(userInput); //Add the user input to tahe array

// }

// console.log("Numbers entered:", numbers);

// Q3. FILTER FOR NUMBER DIVISIBLE BY 10 FROM A GIVEN ARRAY.

// let numbers = [15, 20, 35, 40, 50, 65, 70];

// let divisbleBy10 = numbers.filter(number => number % 10 === 0)

// console.log("Number divisible by 10 :", divisbleBy10);

// // Q4. CREATE An ARRAY OF SQUARE OF GIVEN NUMBER.

// function SquareArray(numbers) {
//     return numbers.map(number => number ** 2);
// }
// let numbers = [1, 2, 3, 4, 5, 6];

// let squares = SquareArray(numbers);
// console.log(squares);

// Q5. USE REDUCE TO CALCULATE THE FACTORIAL OF A GIVEN NUMBER FROM AN ARRAY OF FIRST N NATURAL NUMBER (N BEGIN THE NUMBER WHOSE Fctorial needs to be calculated.)

// function factorialOfArrayNumber(n) {
//   let numbers = Array.from({ length: n }, (_, index) => index + 1);

//   // acc: accumulator

//   let factorial = numbers.reduce((acc, curr) => acc * curr, 1);

//   return factorial;
// }

// let n = 5;
// let factorial = factorialOfArrayNumber(n);
// console.log(factorial);
