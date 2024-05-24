console.log("Ashu web and flutter developer...!!!");
console.log("manish Android developer...!!!");

setTimeout(() => {
  console.log("Ashu flutter Android developer 0...!!!");
}, 0);
setTimeout(() => {
  console.log("Ashu flutter Android developer 3...!!!");
}, 0);

console.log("Hey Baby........!!");

const fn = () => {
  console.log("Nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Ashu",fn);
  document.head.append(sc);
};

loadScript(
  " https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js ",
  (arg, fn) => {
    console.log(arg);
    fn("firstarg", () => {
        ddg("secongarg", () => {
          
      });
    });
  });

//the Above loadscripts known as prymid  of dom ,yea bhut complex ho jta hai manage krne waqt so hmlog promises ka use krte hai. 