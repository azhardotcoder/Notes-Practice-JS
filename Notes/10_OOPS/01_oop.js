//todo --------------- OOPS -------------------
// * OOPS stands for Object Oriented Programming System
// * OOPS is a programming paradigm that is based on the concept of objects

//todo------- In oops we have 4 pillars -------
//? 1. Encapsulation
//? 2. Abstraction
//? 3. Inheritance
//? 4. Polymorphism

//todo --------------- Encapsulation -------------------
// * Encapsulation is the bundling of data and the methods that act on that data
// * Encapsulation is used to hide the values or state of a structured data object inside a class
// * Encapsulation is used to hide the implementation details of a class

//todo --------------- Abstraction -------------------
// * Abstraction is the process of hiding the implementation details of a class and showing
// * Only the functionality to the user
// * Abstraction is used to hide the complexity of a class

//todo --------------- Polymorphism -------------------
// * Plymorphism word is derived from the Greek word "poly" and "morphs" that means many forms
// * Polymorphism is the ability of an object to take on many forms
// * Polymorphism is used to define the behavior of an object in many ways

//todo --------------- Inheritance -------------------
// * Inheritance is a mechanism of deriving a new class from an existing class
// * Inheritance promotes reusability
// * Inheritance promotes code organization



const user = {
    username: "Azhar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Azhar", 12, true)
const userTwo = new User("AzharDotCoder", 11, false)
//console.log(userOne);
//console.log(userTwo);