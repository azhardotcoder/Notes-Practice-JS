//todo --------------Forin loop----------------
// * The for...in statement iterates over all non-Symbol, enumerable properties of an object.
// * The for...in loop is used to loop through an object's properties.

//todo --------------Syntax of forin----------------
// for (const key in object) {
    
// }

//todo --------------Example of forin----------------
let obj = { name: "Ali", age: 20 }
for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

