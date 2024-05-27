let a = prompt("Enter first message")
let b = prompt("Enter second message")
if (isNaN(a) || (isNaN(b)))
    throw SyntaxError("SORRY THIS IS NOT ALLOWED ")

// let sum = a + b  //It append the no's. whwn it is string
let sum = parseInt(a) +parseInt(b) 

function main() {
    
    let x = 1;
    
    // try is used synchronous, code rum if it has error
try {
    
    console.log("The sum is", sum * x);
    return true // whenever er return function ukse baad ka code run nhi hota hai.
} catch (error) {
    console.log("Error aa gya bhai");
    return false
}

// finally used to close the file,basically it is used in function.
    
    // return ke baad code chalta nhi hai finalluy return ka code chla deta hai.

finally {
    console.log("files are being closed and db connection is being closed. ");
}
}

let c = main()