
// 1.What will the following print in js?
// console.log("har\"length)


// SOLUTONS :
console.log("har\"length");



// 2. Explore the includes ,start with & ends With Functions of a string ?


// In JavaScript, the includes, startsWith, and endsWith functions are used to check certain conditions of a string. Here's a brief explanation of each:

// includes: This function checks if a string contains another specified string within it. It returns true if the string contains the specified substring, and false otherwise.

// Example:
const str = 'Hello, world!';
console.log(str.includes('world')); // Output: true
console.log(str.includes('foo'));   // Output: false

// startsWith: This function checks if a string starts with the specified substring. It returns true if the string starts with the specified substring, and false otherwise.

// Example:
const str_1 = 'Hello, world!';
console.log(str_1.startsWith('Hello')); // Output: true
console.log(str_1.startsWith('world')); // Output: false

// endsWith: This function checks if a string ends with the specified substring. It returns true if the string ends with the specified substring, and false otherwise.

// Example:

const str_2 = 'Hello, world!';
console.log(str_2.endsWith('world!')); // Output: true
console.log(str_2.endsWith('Hello'));  // Output: false

// These functions are commonly used in JavaScript to perform various string manipulation and validation tasks.




// 3.Write a program to convert a given String to lowercase.

let a = "hello deepu"
console.log(a.toUpperCase())

// 4.Extract the amount out of string
// "plesase give Rs 1000 "

// sol 1:

const str_3 = "Please give Rs 1000";
const match = str_3.match(/\d+/); // Match one or more digits
const amount = match ? parseInt(match[0]) : null; // Convert the matched digits to an integer

console.log(amount); // Output: 1000

// Explanation:

// \d+ is a regular expression pattern that matches one or more digits.
// str.match(/\d+/) searches for the first occurrence of one or more digits in the string and returns it as an array.
// parseInt(match[0]) converts the matched digits (if any) to an integer.
// If a match is found, the amount variable will contain the extracted amount as an integer (1000 in this case). Otherwise, it will be null.



// method 2

const str_4 = "Please give Rs 1000";
const amountStr = str_4.split(" ")[3]; // Split the string by spaces and get the fourth element
const amount_2 = parseInt(amountStr); // Convert the extracted string to an integer

console.log(amount_2); // Output: 1000

// Explanation:

// str.split(" ") splits the string into an array of substrings using a space as the delimiter.
// We then access the fourth element of the array (str.split(" ")[3]), which corresponds to the amount "1000".
// Finally, we use parseInt to convert the extracted string "1000" to an integer.

// method 3:

const str_5 = "Please give Rs 1000";
const amountMatch = str_5.match(/\d+/); // Match one or more digits (\d+)

if (amountMatch) {
  const amount = parseInt(amountMatch[0]); // Extract the matched amount
  console.log(amount); // Output: 1000
} else {
  console.log("No amount found");
}
//   method 4:

const str_6 = "Please give Rs 1000";
const amount_3 = str_6.match(/\d+/)[0];
console.log(amount_3); // Output: 1000


// method 5:

const str_7 = "Please give Rs 1000";
const words = str_7.split(" ");

for (const word of words) {
  const num = parseInt(word);
  if (!isNaN(num)) {
    console.log(num); // Output: 1000
    break;
  }
}


// 5. Try to charge $Th Character Of a given String Were You able to do it ?

const str_8 = "Deepu Chaudhary";
const n = 5; // Index of the character to extract

if (n >= 0 && n < str_8.length) {
  const char = str.charAt(n);
  console.log(`Character at position ${n} is: ${char}`);
} else {
  console.log("Invalid index provided");
}


