//todo ---------------- try catch ----------------
// try catch is used to handle errors in the code
// try block is used to write the code that may cause an error
// catch block is used to handle the error
// finally block is used to write the code that will run regardless of the error

//todo ---------------- syntax ----------------
try {
    console.log("Start of try runs");
    console.log("End of try runs -- never reached");
} catch (error) {
    console.log("Error has occurred: " + error);
} finally {
    console.log("This is always run");
}

//todo ---------------- .then() .catch() ----------------
// .then() is used to handle the success of the promise
// .catch() is used to handle the error of the promise

//! Getting data from api using fetch
const respone = fetch("https://randomuser.me/api/")
.then((respone) => {
    return respone.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error));