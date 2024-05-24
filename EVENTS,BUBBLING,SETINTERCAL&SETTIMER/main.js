let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
  // alert("I was clicked .yaaa!!");

  document.querySelector(".box").innerHTML =
    "<b> yaaa you were clicked</b> Enjoy your click";
});

button.addEventListener("contextmenu", () => {
  alert("Dont't hack us by right click:!! ");
});

Document.addEventListener("keydown", (e) => {
  console.log(e, e.key);
});
