// PRACTICE SET 3

// 1.Write a program to print the marks of a student in an object using for loop.
// obj = { harry: 98, rohan: 70, aakash: 7 }

// let obj = { harry: 98, rohan: 70, aakash: 7 };

// for (let keys in obj) {
//     console.log(`${keys} : ${obj[keys]}`);
// }

// 2. same ques using for loop

// const obj = { harry: 98, rohan: 70, aakash: 7 };
// const students = Object.keys(obj);

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(student + ':' + obj[student])
// }

// Q3. Write a programe to print a "try again " untill the users enter the correct number.

// const correctNumber = 96;
// let guess;

// do {
//     guess = parseInt(prompt("Guess the number (between  1 to 100:"));
//     if (guess === correctNumber) {
//         console.log("You guessed correct Number: ");
//         break;

//     } else {
//         console.log("Try Again:")
//     }
// }
// while (true);

// Q4. Write a function to find mean of 5 numbers

// function findMean(num1, num2, num3, num4, num5) {
//     let sum = num1 + num2 + num3 + num4 + num5;
//     let mean = sum / 5;
//     return mean;
// }
// let mean = findMean(10,20,30,40,50)
// console.log("Mean: ",mean)

// FAULTY CALCULATOR taking input two number
// let random = Math.random();

// let a = prompt("Enter first number: ")
// console.log(random)
// let c = prompt("enter operation")
// let b = prompt("enter second number")
// let obj = {
//     "+": "-",
//     "*": "*",
//     "-": "/",
//     "/": "**",
// };
// if (random > 0.1) {

//     alert(`${eval(`${a} ${c} ${b}`)}`)
// } else {
//     c = obj[c];
//     alert(`${eval(`${a} ${c} ${b}`)}`)

// }

// PRACTICE SET 4

// Q1. Extract the amount out of string
//  "plesase give Rs 1000 "

// \d+ is a regular expression pattern that matches one or more digits.

// str.match(/\d+/) searches for the first occurrence of one or more digits in the string and returns it as an array.

// parseInt(match[0]) converts the matched digits (if any) to an integer.

// Method - 1 :

// Code --->
// const str = "Can i Borrow 1000";
// const match = str.match(/\d+/);
// const amount = match ? parseInt(match[0]) : null;
// console.log(amount);

// OR

// const str = "Can i Borrow 1000";
// const amount = str.match(/\d+/)[0];
// console.log(amount);

// Explanation:

// We use the match method with a regular expression \d+ to find one or more consecutive digits in the string.

// The [0] index is used to access the first match found.

// This approach directly extracts the numeric part from the string without splitting or iterating through words.






// Method - 2 :

// NOTE :
// str.split(" ") splits the string into an array of substrings using a space as the delimiter.

// We then access the fourth element of the array (str.split(" ")[3]), which corresponds to the amount "1000".


// Code --->
// const str = "Can i borrow 1000"
// const amountStr = str.split(" ")[3];
// const amount = parseInt(amountStr);
// console.log(amount);

// METHOD 3 :
// const str = "can i Borrow 1000"
// const amountMatched = str.match(/\d+/);

// if (amountMatched) {
//     const amount = parseInt(amountMatched[0]);
//     console.log(amount);

// } else {
//     console.log("No mount Found: ");
// }

// METHOD 4:
// const str = "Can i borrow 1000"
// const words = str.split(" ");

// for (const word of words) {
//     const num = parseInt(word);
//     if (!isNaN(num)) {
//         console.log(num);
//         break;
//     }
// }


// Explanation:

// We split the string into an array of words using split(" ").
// We iterate through each word in the array.

// We attempt to convert each word to a number using parseInt.

// If the conversion is successful (i.e., the word is a numeric value), we print the number and exit the loop using break.



// Q2. Try to charge $Th Character Of a given String Were You able to do it ?
// soln: To extract the third character of a given string in JavaScript, you can use array-like indexing. In JavaScript, strings can be accessed using array-like notation, where each character in the string has an index starting from 0.

// const str = "example"; // Given string
// const thirdChar = str[2]; // Accessing the third character using array-like indexing
// console.log(thirdChar); // Output: "a"



// Explanation:

// Declare a variable str and assign the given string to it.

// Use array-like indexing str[2] to access the third character of the string. Remember, array indices in JavaScript start from 0, so the third character has an index of 2.

// Assign the extracted character to a variable thirdChar.

// Print thirdChar to the console, which will output the third character of the given string.


// OR

// METHoD  2 : Yes, I was able to extract the character at the nth position of a given string.

// const str = "Example String"
// const n = 5;


// if (n >= 0 && n < str.length) {
//     const char = str.charAt(n);
//     console.log(`character at position ${n} is : {char}`);

// } else {
//     console.log("Invalid Index provided");
// }


// SQAUARE OF ELEMENTS....

// const arr = [1, 13, 5, 7, 11];

// // Map eacch element to its square

// const newArr = arr.map((e,index,Elements) => e ** 2);
// console.log(newArr);

// // Filter Elements greater than 7

// const greaterThanSeven = arr.filter((e) => e > 7);
// console.log(greaterThanSeven);

// USING TRUE FALSE

// let arr = [1, 13, 5, 7, 11];
// let newArr = arr.map((e) => {
//   return e ** 2;
// });

// console.log(newArr);
// const greaterThanSeven = (e) => {
//   if (e > 7) {
//     return true;
//   }
//   return false;
// };
// console.log(newArr.filter(greaterThanSeven));



// FACTORIAL  OF A NUMBER USING ARRAY METHODS AND ARRAY.FROM

// METHOD 1 :

// let a = 6; //VARIABLE DEFINED

// // define function
// function factorial(number) {
//     // create an array contain number from 1 to number.
//     let arr = Array.from(Array(number + 1).keys());
//     console.log(arr.slice(1)); //print aray without first element
//     let c = arr.slice(1).reduce((a, b) => a * b); //calculate array by multiplying al the numbers in the array

//     return c;
// }
// // Print the factorial of 'a' calculated using the 'factorial' function
// console.log(factorial(a));


// METHOD 2 :

// // Define a function named 'facFor' that takes a parameter 'number'
// function facFor(number) {
//     // Initialize a variable 'fac' with a value of 1
//     let fac = 1;
    
//     // Loop from 1 to 'number' (inclusive)
//     for (let index = 1; index <= number; index++) {
//         // Multiply 'fac' with the current value of 'index' and update 'fac'
//         fac = fac * index;
//     }
    
//     // Return the calculated factorial
//     return fac;
// }


// // Print the factorial of 'a' calculated using the 'facFor' function
// console.log(facFor(a));



