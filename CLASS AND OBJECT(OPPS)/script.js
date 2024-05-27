// let obj = {
//     a:1,
//     b:"Ashu"
// }
// console.log(obj);


// let animals = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };


// prototype is additional property help to addd in object.

// rabbit.__proto__ = animals;  //sets rabbit.[[prototype]] = animal


// OOPS



class Animal{
    // passing argument in constructor
    constructor(name)
    {
        // this keyword is  a way  for us used to create properties in a object ,which object is being created.
        this.name = name 
        console.log("Object is created");
    }

    eats()
    {
        console.log("khanakha rha hun");
    }

    jumps()
    {
        console.log("Kuud gya");
    }
};

// use of extend keyword to inheritance all property of animal in it.

// class lion extends Animal{

// };

// let a = new Animal("Bunny");
// console.log(a);

// let l = new lion("Shera")
// console.log(l);

// Changing Constructr in lion

class lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("Object is created");
    }
    
    // Method Overridding
    
    eats() {
      super.eats() //using Super both the result is printed Fter methid Overrigging also.
    console.log("khanakha rha hun Roars....");
  }
};

let a = new Animal("Bunny");
console.log(a);

let l = new lion("Shera")
console.log(l);

// instannceof  is used to find that a class is made an object