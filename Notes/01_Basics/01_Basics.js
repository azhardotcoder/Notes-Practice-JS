//  * Created date: 22-03-2024
//  * Created by: Azhar Khan

/* //TODO---------- Variables----------------
! Variables are containers for storing data values.
const, let, var
var can redeclare and reassignable variable       //! eg- var b = 17        ------- Var is a ES5 version
let cannot redecalre but it can reassign          //! eg - let a = 10       ------ let is a ES6 version
const cannot redecalre & reassign                 //! eg - const c = 20     ------ const is a ES6 version
? var is a ES5 version, let and const are ES6 version
*/

/* //todo -------------Types of datatypes in javascript----------------
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

/* //todo ---------------Slack and Heap Memory---------------- 

!----STACK------
    *Stack memory is a temporary memory that is used to store the data temporarily. It is a small memory.
    *stack memory store primitive data types
    *In stack memory we get copy of the data

!----HEAP------
    *Heap memory is a large memory that is used to store the data permanently.
    *heap memory store non-primitive data types
    *In heap memory we get reference of the data

?-------diagram----------
 <img src="./Notes/diagram/image.png" alt="">

*/

/* //todo ---------------Strings---------------- 
string is a data type used to represent text rather than numbers. It is a sequence of characters that are enclosed in single or double quotes.

!-----Declaration of string-----
let a = "Azhar"  //* Whatever we write in double & single quotes is a string
const b = "Khan"
const c = `Azhar Khan` //* Backticks are used to write a string in multiple lines

!----Another way to write a string-----
let GameName = new String("AzharDotCoder") //* This is a string object
console.log(GameName);
console.log(typeof(GameName)); //* To check the type of the variable

!---Methods of strings---
👇👇👇👇👇These are few methods of strings👇👇👇👇👇👇👇👇👇👇

! Convert the string to uppercase
.toUpperCase()
    *let name = "Azhar"
    *console.log(name.toUpperCase()); //* Output: AZHAR

! Convert the string to lowercase
.toLowerCase()
    *let name = "AZHAR"
    *console.log(name.toLowerCase()); //* Output: azhar

!Find the character at a specific index
.charAt()
    *let name = "Azhar"
    *console.log(name.charAt(2)); //* Output: h

! Find the index of a specific character
.indexOf()
    *let name = "Azhar"
    *console.log(name.indexOf("a")); //* Output: 1

! Find the last index of a specific character
.lastIndexOf()
    *let name = "Azhar"
    *console.log(name.lastIndexOf("a")); //* Output: 3

! Check if the string includes a specific character
.includes()
    *let name = "Azhar"
    *console.log(name.includes("a")); //* Output: true

! Check if the string starts with a specific character
.startsWith()
    *let name = "Azhar"
    *console.log(name.startsWith("A")); //* Output: true
    *console.log(name.startsWith("Z")); //* Output: false

! Check if the string ends with a specific character
.endsWith()
    *let name = "Azhar"
    *console.log(name.endsWith("r")); //* Output: true
    *console.log(name.endsWith("h")); //* Output: false

! Split the string
.split()
    *let name = "Azhar"
    *console.log(name.split("")); //* Output: ["A", "z", "h", "a", "r"]
    *console.log(name.split("a")); //* Output: ["Azh", "r"]

! Replace a specific character
.replace()
    *let name = "Azhar"
    *console.log(name.replace("A", "K")); // first value should be replaced by second value
    //* Output: Kzhar

! Remove extra spaces from the beginning and end of the string
.trim()
    *let name = "     Azhar  .   "
    *console.log(name);  //* Output:      Azhar  .
    *console.log(name.trim()); //* Output: Azhar

! Repeat the string
.repeat()
    *let name = "Azhar"
    *console.log(name.repeat(3)); //* Output: AzharAzharAzhar


! Find the length of the string
.length
    *let name = "Azhar"
    *console.log(name.length); //* Output: 5

! Concatenate strings
.concat()
    *let name = "Azhar"
    *let lastName = "Khan"
    *console.log(name.concat(lastName)); //* Output: AzharKhan


! Slice the string //Can provide negative value
.slice()
    *let name = "Azhar"
    *console.log(name.slice(1)); //* Output: zhar


! Extract a portion of the string //cant provide negative value
.substring()
    *let name = "Azhar"
    *console.log(name.substring(1, 3)); //* Output: zh


!----Example code-----
We can access methods of string by using dot notation
let GameName = new String("AzharDotCoder")
console.log(GameName.toUpperCase());
console.log(GameName.toLowerCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf("a"));
*/

/* //TODO------------Maths----------------
Math object allows you to perform mathematical tasks on numbers.

!Math.PI           //returns the value of PI
    *eg - console.log(Math.PI); //* Output: 3.141592653589793

!Math.round()      //rounds the number to the nearest integer
    *eg - console.log(Math.round(4.7)); //* Output: 5

!Math.ceil()       //rounds the number up to the nearest integer
    *eg - console.log(Math.ceil(4.4)); //* Output: 5

!Math.floor()      //rounds the number down to the nearest integer
    *eg - console.log(Math.floor(4.7)); //* Output: 4

!Math.sqrt()       //returns the square root of the number
    *eg - console.log(Math.sqrt(64)); //* Output: 8

!Math.abs()        //converts the minus value into positive
    *eg - console.log(Math.abs(-4.7)); //* Output: 4.7

!Math.pow()        //returns the value of the number to the power of another number
    *eg - console.log(Math.pow(8, 2)); //* Output: 64

!Math.min()        //returns the smallest number
    *eg - console.log(Math.min(0, 150, 30, 20, -8, -200)); //* Output: -200

!Math.max()        //returns the largest number
    *eg - console.log(Math.max(0, 150, 30, 20, -8, -200)); //* Output: 150

!Math.random()     //returns a random number between 0 and 1
    *eg - console.log(Math.random()); //random number between 0 and 1
?----Example code-----
let min = 10
let max = 20
console.log(Math.floor(Math.random() * 10) + min); //* Output: random number between 10 and 20

*/

/* //todo------------Time and date----------------
Date object allows you to work with dates and times.
?Declaration of date
let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleDateString());

*/
/* //TODO------------variables conversion----------------
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

/* //todo ---------------comparision operators----------------
console.log("2" > 1 ); //* Comparison with using greater than operator
console.log("02" >= 1 ); //* Comparison with using greater than equal to operator
console.log("2" < 1 ); //* Comparison with using less than operator
console.log("2" == 1 ); //* Comparison with using equal to operator
console.log("2" =! 1 ); //* Comparison with using not equal to operator
console.log("2" === 1 ); //* Comparison with using strict equal to operator
console.log("2" !== 1 ); //* Comparison with using strict not equal to operator
*/


