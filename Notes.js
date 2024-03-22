// Purpose: To write notes for the javascript concepts
// Created date: 22-03-2024
// Created by: Azhar Khan


/*
TODO---------- Variables----------------
! Variables are containers for storing data values.
const, let, var
var can redeclare and reassignable variable       //! eg- var b = 17        ------- Var is a ES5 version
let cannot redecalre but it can reassign          //! eg - let a = 10       ------ let is a ES6 version
const cannot redecalre & reassign                 //! eg - const c = 20     ------ const is a ES6 version
? var is a ES5 version, let and const are ES6 version
*/

/*
TODO------------variables conversion----------------
let a = 10  ------ Number
let b = "20" ------ String
let c = 1 ------ Number

let valueInString = String(a)
let valueInNumber = Number(b)
let ValueInBoolean = Boolean(b)
console.log(value);

?-------------Operations----------------
a + b = 30
a - b = -10
a * b = 200
a / b = 0.5
a % b = 10
a ** b = 100000000000000000000
?---------------------------------------
!example code
let a = 10
let nega = -a
console.log(nega);


!----Important-------
"33" => 33 //string to number
"33abc" => NaN //string to number
true => 1 //boolean to number
false => 0 //boolean to number

*/
/*
todo -------------Types of datatypes in javascript----------------
1. Primitive Datatypes
    * String
    * Number
    * Boolean
    * Null
    * Undefined
    * Symbol
    * BigInt
2. Non-Primitive Datatypes
    * Object
    * Array
    * Function
*/

/*

todo ---------------comparision operators----------------
console.log("2" > 1 ); // Comparison with using greater than operator
console.log("02" >= 1 ); // Comparison with using greater than equal to operator
console.log("2" < 1 ); // Comparison with using less than operator
console.log("2" == 1 ); // Comparison with using equal to operator
console.log("2" =! 1 ); // Comparison with using not equal to operator
console.log("2" === 1 ); // Comparison with using strict equal to operator
console.log("2" !== 1 ); // Comparison with using strict not equal to operator
*/



/*
TODO------------DOM manipulation----------------
! Dom manipulation is the process of changing the HTML content of a web page using JavaScript.
let h2 = document.getElementById("sub-heading")
let h1 = document.getElementsByClassName("heading") //selected by using index
let h3 = document.getElementsByTagName("h3") //selected by using index
let div = document.querySelector("#duv")
let list = document.querySelectorAll(".list") //selected by using index
console.log(list);
h1[0].style.color="red"
div.style.color="red"
//*======================================================
*/

/*
todo ----------Add event listener---------------------
/* let btn = document.querySelector("#btn")
let azhar = document.querySelector("#azhar")
let div = document.getElementById("div")
let inp = document.getElementById("inp")
btn.addEventListener("click", (e)=>{
    azhar.style.color="red"
     console.log(e);
    
})
btn.addEventListener("dblclick", ()=>{
    azhar.style.color="green"

})

div.style.height="400px"
div.style.width="400px"
div.style.border="2px solid red"

div.addEventListener("mouseenter", ()=>{
    div.style.backgroundColor="red"
    console.log("mouseenter");
})
div.addEventListener("mouseleave", ()=>{
    div.style.backgroundColor="grey"
    console.log("mouseleave");
})

div.addEventListener("keydown", ()=>{
    console.log("keydown");

})

window.addEventListener("resize", ()=>{
    console.log("resize");
})

addEventListener("keypress", (e)=>{
    console.log(e.key);
    switch (e.key) {
        case "a": 
            console.log("kuch bhi");
            break;
        case "b":
            console.log("kuch kuch");
        default:
            break;
    }
} ) 
*/
//*=======================================================
//todo functions

// abc()
// function abc(){
//     console.log("Pure function");
// }
// const bcd =()=>{
//     console.log("arrow function");
// }
// bcd()
//*======================================================
// todo Objects
// let a = {
//     name: "Azhar",
//     last: "khan",
// }
