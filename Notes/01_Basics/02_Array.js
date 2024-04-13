/* //TODO ------------Array---------------
*Array is a data structure that is used to store multiple values in a single variable. It is a collection of similar data types.
*Array is a reference data type.

?------- Declaration of an array -------
let a = [1, 2, 3, 4, 5]
const b = ["Azhar", "Khan"]
const c = [1, "Azhar", 3, "Khan", true, {}]

?-------Access the array elements-------
let arr = ["Azhar", 2, 3, 4, 5]
console.log(arr[0]); //* Output: Azhar
console.log(arr[1]); //* Output: 2

?-------Methods of arrays-------
👇👇👇👇👇These are few methods of arrays

let arr = ["Azhar", 2, 3, 4, 5]
console.log(arr.length); //* We can check length of an array by using length property
console.log(arr.toString()); //* It converts an array to a string
console.log(arr.join(" ")); //* It converts an array to a string with a separator
console.log(arr.pop()); //* It removes the last element from an array
console.log(arr.push("Khan")); //* It adds an element to the end of an array
console.log(arr.shift()); //* It removes the first element from an array
console.log(arr.unshift("Azhar")); //* It adds an element to the beginning of an array
console.log(arr.splice(1, 2)); //* It removes elements from an array
console.log(arr.concat(["Khan", "Ali"])); //* It merges two or more arrays
console.log(arr.slice(1, 3)); //* It selects a part of an array and returns a new array

!----Difference between slice and splice----
*The slice() this method doesnt manipulate orignal array, its create new array.
*The splice() This method manipulate orignal array and return the removed items.
*/

/* //todo ------------Advance level of array---------------
!----Array Operations----
const firstName = ["Azhar", "Fardeen", "Anas", "Arbaz"]
const lastName = ["Singh", "Khan", "Ali", "Jhunjhunwala"]
 
console.log(`${firstName[2]} ${lastName[1]}`); //* Output: Anas Khan

!---Array spread operator---
let completeName = [...firstName, ...lastName] //* It merges two arrays

!---Convert values into arrays---
let name = 
let lastName = "Khan""Azhar"
let anotherName = "Pata nahi"
let number = 123

console.log(array.of(name, lastName, anotherName, number)); //* Output: ["Azhar", "Khan", "Pata nahi", 123]
*/

