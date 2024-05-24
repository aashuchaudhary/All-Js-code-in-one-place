// 1.Create a variable of type string and try to add a number to it

// var a = "Hello";
// var a = a + 1;
// console.log(a)



// 2. Use type of oberator to find the data type of the string in last question

// console.log(typeof a)



// 3. Create a const object in  js . can you change it to hold number later ?

// And,

// 4. Try to add in Problem 3 a new key to the const object in problem 3 Were you able to do it?

// AnsWer:

// Yes, you can create a const object in JavaScript and change it to hold a number later. However, you cannot reassign the const object to a new object.

// or

// The property of a const object can be changed but it cannot be changed to a reference to the new object

// const obj = {
//   name: "John",
//   age: 30,
// };

// console.log(obj)
// // Change the value of the age property
// obj.age = 31;
// console.log(obj)

// This will not work

// obj = {
//   name: "Jane",
//   age: 25,
// };



// 5. Write α js program to create word meaning Dictionary of 5 words


// Create a dictionary object
const dictionary = {};

// Add 5 words to the dictionary
dictionary["apple"] = "A sweet red fruit";
dictionary["banana"] = "A long yellow fruit";
dictionary["cat"] = "A furry four-legged animal";
dictionary["dog"] = "A loyal four-legged animal";
dictionary["house"] = "A building where people live";

// Print the dictionary
console.log(dictionary);