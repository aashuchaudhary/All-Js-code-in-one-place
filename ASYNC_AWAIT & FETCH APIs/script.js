// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// Creating Async Function.

// async function getData() {
//   // simulate getting data from the server.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// copy of the function to make it actual function. for fetch Api
async function getData() {
  // simulate getting data from the server.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
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
main()

// .then approach through call back

// data.then((v) => {

//   console.log(data);

//   console.log("Process data");

//   console.log("Task 2 ");
// })
