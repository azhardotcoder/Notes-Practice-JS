//! NOTES -  Prototype
//todo-------- prototype ----------
// * Prototype is a property of an object that points to another object
// * Prototype is used to inherit properties from one object to another
// * Every object in JS has a prototype property
// * Prototype is also an object
// * Prototype is also known as parent object


//todo -------- Example -----------------
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.azhar = function(){
    console.log(`azhar is present in all objects`);
}

Array.prototype.heyazhar = function(){
    console.log(`azhar says hello`);
}

// heroPower.azhar()
// myHeros.azhar()
// myHeros.heyazhar()
// heroPower.heyazhar()

//todo-------- inheritance ----------
// * Inheritance is a mechanism in which one object acquires all the properties and behaviours of another object

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//! modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "


// User defined method which can be trim the string and return the length of the string
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"azhar".trueLength()
"iceTea".trueLength()