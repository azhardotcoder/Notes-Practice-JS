//todo --------------Foreach loop----------------
// * The forEach() method executes a provided function once for each array element.
// * The forEach() method does not return anything.
// * The forEach() method does not change the original array.
// * The forEach() method is not executed for array elements without values.
// * The forEach() method does not execute the function for array elements without values.


//todo --------------Syntax of foreach----------------
// array.forEach(element => {
    
// });

//todo --------------Example of foreach----------------
let arr = [1, 2, 3, 4, 6]
arr.forEach(e => {
   // console.log(e.valueOf());
})


//todo --------------Questions of foreach----------------
// Question: Access the index of the elements in the array using the forEach() method.
// Answer:
let arra = [1, 2, 3, 4, 6]
arra.forEach((e, index) => {
    //console.log(index);
})

// Question: Access the array itself using the forEach() method.
let arrb = [1, 2, 3, 4, 6]
arrb.forEach((e, index, arr) => {
    //console.log(arr);
})

// Question: Perform operation on array elements and change each value using the forEach() method.
let arrc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrc.forEach((e, index, arr) => {
   let ans = arr[index] = e * 5
   //console.log(`${e} * 5 = ${ans}`);
})

