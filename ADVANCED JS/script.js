async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// Spread Function 

function sum(a, b, c)
{
    return a+ b+ c;
}


// Here we will get error so we created invoked function as below
// let a = await sleep()
// let b = await sleep()

// Imeaditely involked function (IIFE)

(async function main() {
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // Destructuring
    
    // let [x, y,...rest] = [1, 5,7,4,5,6,7,67,88,9]
    // console.log(x,y,rest)

    // Destructuring in object
    let obj = {
        a: 1,
        b: 2,
        c:3
    }

    let { a, b } = obj
    console.log(a, b);
    
    let arr = [1, 4, 6]
    console.log(arr[0]+arr[1]+arr[2]);

    // or

    console.log(sum(arr[0],arr[1],arr[2]));
    // or
    console.log(sum(...arr));  //Spread Operator used to open the Values.

    
})()



