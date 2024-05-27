class User {
    constructor(name) {
        this.name = name
    }
    
get name(){
    return this._name
}

set name(value)
{
    if (value.length < 4) {
        alert("Name is too Short");
        return;
    }
    this._name = value;
}
};

// For Getter
let user = new User("Ashu");
console.log(user.name); //Ashu

// For Setter
// when we set an existing user property

// user = new user("") // name is too short.
user.name = "Ashu"
console.log(user);
// console.log(user.name);  //Ashu