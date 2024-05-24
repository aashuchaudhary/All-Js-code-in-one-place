function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

console.log("Loading Module");

console.log("Do something else");

console.log("Load data");
let data = getData();
data.then((v) => {
  console.log(v); // Logging the resolved data value
  console.log("Process data");
  // Confirm if "Task 2" should be executed here or moved outside the promise resolution block
});
