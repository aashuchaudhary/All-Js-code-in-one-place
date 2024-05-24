// let arr = [1, 2, 3, 4, 5]
// index   0  1  2  3  4

// console.log(arr)
// console.log(arr,typeof arr)

// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// arr[0] = 88
// console.log(arr)

// console.log(arr.toString())

// console.log(arr.join(" and "))

// let a = [1, 2, 3, 4, 5, 6]

// console.log(a.pop())

// console.log(a.push(7))

// console.log(a.push("Deepu"))

// console.log(a.shift())

// console.log(a.unshift("Dips"))

// console.log(a.delete(a[5]))

// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let c = [7, 8, 9]
// console.log(a.concat(b, c))

// let a = [3,1,7,9,5]
// console.log(a.sort())

// const num = [1, 2, 3, 4, 5, 6]
// console.log(num.splice(1,3))  //iska mtlb index one mai se 3 element nikala gya hai

// add krn ahua to
// console.log(num.splice(1,3,33,55))

// const num = [1,2,3,5,6]
// console.log(num.slice(2))
// console.log(num.slice(1,3))

// console.log(a.reverse())

// LOOPS

// let a = [1, 93, 5, 6, 88]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// 1.forEach:

// a.forEach((value, index, arr) => {
//     console.log(value,index,arr)
// });

// 3.forin :

// let obj = {
//     a: 1,
//     b: 2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
// // or      console.log(key, element)

//     }
// }

// 4.forof

// let a = [1, 93, 5, 6, 88]
// for (const value of a ) {
//     console.log(value)
// }

// 2.map :

// Method  1:

// let arr = [1, 13, 5, 7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)
// }

// Method 2:

// let arr = [1, 13, 5, 7, 11];
// let newArr = arr.map((e) => {
//   return e ** 2;
// });

// console.log(newArr);

// 5.filter :

// let arr = [1, 13, 5, 7, 11];
// let newArr = arr.map((e, index, array) => {
//   return e ** 2;
// });

// console.log(newArr);
// const greaterThanSevan = (e ) => {
//   if (e > 7) {
//     return true;
//   }
//       return false;
// };
// console.log(arr.filter(greaterThanSevan));

// Reduce :

// let arr = [1, 2, 3, 4, 5, 6]
// const red = (a, b) => {
//     return a * b
// }
// console.log(arr.reduce(red))