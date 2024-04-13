// todo ------ Execution of code ------
// * The code execution in JavaScript is synchronous and single-threaded.
// * A function that is currently executing is called a running function.
// * JavaScript code run in line by line order.

// Todo------Execution of js code------
//There are 3 phases of execution code.
    //! 1. Global Phase 
        //* Execute all global code.
    
    //! 2. Memory phase
        //* Assign memory to each variables.

    //! 3. Execution phase
        //* Assign values to all variables.

// ------Function execution-------
    //* for function execution they allot a new sandbox, and after execution they pass result to global scopre.


// todo ------Example------

let val1 = 10;
let val2 = 20;

function addNum(num1, num2){
    let result = num1 + num2;
    return result;
}
let sum1 = addNum(val1, val2);
let sum2 = addNum(10, 20);

// 1 Global phase
    // val1 = undefined
    // val2 = undefined
    // addNum = undefined
    // sum1 = undefined
    // sum2 = undefined

// 2 Memory phase
    // val1 = 10
    // val2 = 20
    // addNum = function
    // sum1 = undefined
    // sum2 = undefined

// 3 Execution phase
    // val1 = 10
    // val2 = 20

 /*   // addNum = function //function execution is done in a new sandbox
            {
            new sandbox {
                num1 = 10
                num2 = 20
                result = 30 => return 30 //global scope
            }
    }*/

    // sum1 = 30
    // sum2 = 30