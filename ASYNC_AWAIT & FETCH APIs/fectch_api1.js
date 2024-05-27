async function getData() {
  let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'POST',
               body: JSON.stringify({
                 title: 'foo',
                 body: 'bar',
                 userId: 1,
               }),
               headers: {
                 'Content-type': 'application/json; charset=UTF-8',
               },
            })
         let data = await x.json()
         return data
}

// Main Function for Wrap
async function main() {
  console.log("Loding Modules....");
  console.log("Do something Else");

  console.log("Load data");
  let data = await getData(); 

  console.log(data);

  console.log("Process data");

  console.log("Task 2 ");
}
main();
