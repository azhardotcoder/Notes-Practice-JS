//todo -------- getter and setter --------
// * getter and setter are used to get and set the value of an object property.
// * We use getter and setter to hide the actual value of the property.


//! class based getter and setter
// * In modern time 90% of the time we use class based getter and setter
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() // Always we have to change the value of parameter to avoid infinite loop
    }
    set email(value){
        this._email = value // Always we have to change the value of parameter to avoid infinite loop
    }

    get password(){
        return `${this._password}azhar`
    }

    set password(value){
        this._password = value
    }
}

const azhar = new User("h@azhar.ai", "abc")
console.log(azhar.email);

//! function based getter and setter
// * Function based get set is old way of doing things

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

//! Object based getter and setter
// * Rarely used, weird way of doing things
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);