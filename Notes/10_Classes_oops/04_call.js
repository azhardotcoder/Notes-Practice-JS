//todo -------- call ------------
// * call() method is a predefined JavaScript method
// * It is used to call a method with an owner object as an argument (parameter)

//todo -------- Example ------------
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //! We have to pass this keyword to hold the context of the object
   
    this.email = email
    this.password = password
}

const detail = new createUser("Azhar", "azhar@fb.com", "1223")
console.log(detail);