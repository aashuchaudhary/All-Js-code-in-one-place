// <!-- WAP to find factorial of agiven number using reduce and using for loop. -->
    

// solution:

// let a = 6
// function factorial(number) {
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,))
//     let c = arr.slice(1).reduce((a, b) => {
//       return a * b;
//     });
//     console.log(c)
// }
// factorial(a)

// OR

let a = 6
function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1).reduce((a, b) => a*b)
    return c
}


function facFor(number) {
    let fac = 1;
     for (let index = 1; index <= number; index++) {
         fac = fac * index
        
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))