//todo --------------For of loop----------------
// * The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
// * The for...of loop is used to loop through an iterable object (array, set, map, arguments object, etc).
// * The for...of loop was introduced in ECMAScript 6.
// * The for...of loop does not work on objects.

//todo --------------Syntax of forof----------------
// for (const iterator of object) {
    
// }

//todo --------------Example of forof----------------
let arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    console.log(element);
}