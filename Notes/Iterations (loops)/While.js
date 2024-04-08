//todo ---------------------------- While Loop ----------------------------
//* while loop is used to iterate over a block of code multiple times.
//* while loop is used when we do not know the number of iterations.

 //!-----------Syntax ----------------------------
 while (index <= 10) //condition  
    {

    //block of code
    //increment or decrement
    }

//!-----------Example--------------
let val1 = 0;
while (val1 <= 10) {
    //console.log(`Number of Hello World is ${val1}`);
    val1 = val1 + 1 //* Increment the value of val1
}

//! -----------While loop on array --------------

const arr = ['Apple', 'Banana', 'Cherry', 'Dates', 'Egg Fruit'];
let i = 0;
while (i < arr.length) {
   //console.log(`Number of fruit is: ${i} and name is: ${arr[i]}`);
    i++; //* Increment the value of i
}

//todo ---------------------------- Do While Loop ----------------------------
//* do while loop is used to iterate over a block of code multiple times.
//* do while loop is used when we want to execute the block of code at least once.
//* do while loop execute first and then check the condition.

//!-----------Syntax ----------------------------
let index = 0;
do {
    //block of code
    //increment or decrement
} while ( index <= 10) // Condition

//!-----------Example--------------
let val2 = 0;
do {
    console.log(`Number of print is ${val2}`);
    val2 = val2 + 1 //* Increment the value of val2
} while (val2 <= 10)