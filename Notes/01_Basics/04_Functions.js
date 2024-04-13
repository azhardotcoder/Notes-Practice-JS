/* //todo ---------------Functions & return keyword----------------
 * Function is a block of code that can be defined once and run multiple times.
 * Function can take parameters and return values.

!------return keyword------
* The return statement ends function execution and specifies a value to be returned to the function caller.
 
*/
/* //todo ---------------Types of Functions----------------
1. Named Function
    * Named functions are defined using the function keyword followed by the function name.
2. Anonymous Function
    * Anonymous functions are defined without a name.
3. Arrow Function
    * Arrow functions are defined using the => syntax.
    * Arrow functions are anonymous functions.
   
*/

/* //todo ---------------Declaration of functions----------------
1. Named Function   
    function greet() {
        console.log("Hello World"); 
    }

2. Anonymous Function // we dont write function keyword
    Login(){
    console.log("Login");
    }
3. Arrow Function // we dont write function keyword and name of function
    ()=>{
         console.log("Arrow function");
    }

!---Calling of function---
greet();
Login();

*/

/* //todo ---------------example of functions----------------

function add(num1, num2){
    return num1 + num2;
}

console.log(add(10, 15))

*/

/* //todo ---------------Rest operator in function----------------

function ShoppingDetails(price, item, ...rest){
    return price, item, rest

}
    * price will take first argument
    * item will take second argument
    * rest will take all the remaining arguments
console.log(add(10, 15))
*/

