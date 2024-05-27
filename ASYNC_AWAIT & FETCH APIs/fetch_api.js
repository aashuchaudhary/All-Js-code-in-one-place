
// copy of the function to make it actual functio. for fetch Api

// settle means resolve or reject 
// resolve means promise has settled sucessfully
// reject means promise has not settled sucessfully

async function getData() {
    // simulate getting data from the server.
    // Converting into async await and it return promise 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     let data = await x.json() //await krne ke baad dat ayega url se
    //  let data = await x.text()  //here we can use text also.
    // return two promise or 2 bar await ka use karte hai....

    //   .then(response => response.json())
    //   .then(json => console.log(json))

    console.log(data); // isko krne se data aa jta hai jo es url ke website pe hota hai. 
    

    // console.log(x);
    return 455 //here we see data koload leta hai but promise pending hai.
}

// Main Function for Wrap
async function main() {
  console.log("Loding Modules....");
  console.log("Do something Else");

  console.log("Load data");
  let data = await getData(); //for using Await we have to make  asyn function in which wrap krna easy ho, by creating a main function....

  // using Async Await:
  // By Creating Async Function means bg mai chalta rhega

  console.log(data);

  console.log("Process data");

  console.log("Task 2 ");
}
main();

// .then approach through call back

// data.then((v) => {

//   console.log(data);

//   console.log("Process data");

//   console.log("Task 2 ");
// })
