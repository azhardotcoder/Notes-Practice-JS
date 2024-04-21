//todo ----------- Class in javascrip ------------
// * Class is a blueprint for creating objects
// * Class is a template for creating objects
// * Class is a predefined JavaScript function
// * Class is a syntactical sugar for creating objects

//todo -------- Example ------------

class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptPassword(){
        return `${this.password}123anc`
    }
    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("Azhar", "123", "Azhardev.me@gmail.com",)

console.log(newUser.encryptPassword());
console.log(newUser.changeUser());