//todo-----------------Truthy and Falsy values----------------
// * In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// * All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).
// * A falsy value is a value that is considered false when encountered in a Boolean context.

//todo-----------------Example of truthy and falsy values----------------
let x = 10
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//todo-----------------Truty and falsy Values----------------
// * The following values are always falsy:
//     - false
//     - 0 (zero)
//     - '' or "" (empty string)
//     - null
//     - undefined
//     - NaN (e.g., the result of 1/0)
// * Everything else is truthy.
// * The following values are always truthy:
// * Anything in string form is truthy, even if it is an empty string.
//     - '0' (a string containing a single zero)
//     - 'false' (a string containing the text "false")
//     - [] (an empty array)
//     - {} (an empty object)
//     - function(){} (an "empty" function)
//     - Infinity or -Infinity
//     - -Infinity
//     - ' ' (space)
//     - 'null'
//     - 'undefined'
//     - 'NaN'
//     - 'true'
//     - 'false'

//todo ----------How to check empty array and objects.----------------
let arr = [1]
if (arr === undefined || arr.length === 0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

let obj = { name: "Ali" }
if (Object.keys(obj).length === 0) {
    console.log("Truthy");
} else {
    console.log("Falsy"); //output
}

//todo -----------------Nullish Coalescing Operator----------------
// * The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// * It is the logical counterpart to the ternary operator (?:).
// * The nullish coalescing operator is written as two question marks ??.
// * It is used to provide a default value to a variable if the variable is null or undefined.

//todo -----------------Example of Nullish Coalescing Operator----------------

let val1;
val1 = 4 ?? 5;
console.log(val1); //output: 4

val1 = null ?? 10;
console.log(val1); //output: 10