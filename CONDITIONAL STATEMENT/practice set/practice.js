// 1.Write a program to print the marks of a student in an object using for loop.
// obj = { harry: 98, rohan: 70, aakash: 7 }

// ANSWER:

// const obj = { harry: 98, rohan: 70, aakash: 7 };
// const students = Object.keys(obj);

// for (let i = 0; i < 3; i++) {
//   const student = students[i];
//   console.log(student + ": " + obj[student]);
// }




// 2. Write the program in Q1 using for in loop

// ANSWER:

// let obj = { harry: 98, rohan: 70, aakash: 7 };

// for (const student in obj) {
//      const element = obj[student];
//      console.log( student, element);
// }

// 3. Write a programe to print a "try again " untill the users enter the correct number.
// let a = 3;
// let guess;
// do {
//     guess = parseInt(prompt("Guess no ( betwn 1 to 100):"));
//     if (guess === a) {
//         console.log("correct");
//         break;
//     }
//     else {
//         console.log("Try Again");
//     }
// } while (true);




// 4. Write a function to find mean of 5 numbers

function findMean(num1, num2, num3, num4, num5) {
  let sum = num1 + num2 + num3 + num4 + num5;
  let mean = sum / 5;
  return mean;
}

// Example usage:

let mean = findMean(10, 20, 30, 40, 50);
console.log("Mean:", mean);
