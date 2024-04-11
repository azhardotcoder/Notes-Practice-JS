//todo ---------Id selector----------------

// let title = document.getElementById("titleD") // Gets the element with the id of titleID
// let sub = document.getElementById("subD") // Gets the element with the id of subID


// title.innerHTML = "Hello World" // Changes the text of the element
// title.style.color = "green" // Changes the color of the text
// title.style.fontSize = "80px" // Changes the font size of the text


// sub.innerHTML = "This is a subheading"

//todo ---------Class selector----------------
// * We cannot perform direct operations on the getElementsByClassName method
// * We have to convert the value and then we can perform operations.

let clsSelected = document.getElementsByClassName("azg") // Gets all the elements with the class of title
 const arr = Array.from(clsSelected)

 arr.forEach( (anyValue) => {
    anyValue.style.color = "blue"
 } )


//todo ---------Tag selector----------------
let titlet = document.getElementsByTagName("h1") // Gets all the elements with the tag of h1
let subT = document.getElementsByTagName("h2") // Gets all the elements with the tag of h2


//todo ---------Query selector---------------- Most usable selector
let titleq = document.querySelector("#titleID") // Gets the first element with the id of titleID
let subQ = document.querySelector(".sub") // Gets the first element with the class of sub
let titleQA = document.querySelector("h1") // Gets the first element with the tag of h1

//todo ---------Query selector all----------------
    //* We cannot perform direct operations on the querySelectorAll method
    //* Or we have to give index value to perform operations
    //* We have to loop through the elements to perform operations

//!-----------Syntax----------------
let ul = document.querySelectorAll("ul") // Gets all the elements with the id of titleID

const orderListLi = document.querySelectorAll("li")

orderListLi[1].style.color = "red"


let titlecv = document.querySelectorAll(".title") // Gets all the elements with the class of title
let subvc = document.querySelectorAll(".sub") // Gets all the elements with the class of sub
let titleaz = document.querySelectorAll("h1") // Gets all the elements with the tag of h1


// todo ----------DIfference between innerHTML, innerText and innerContent----------------
// innerHTML: returns the HTML content and //!tags of an element
// innerText: returns the text content of an element //!which is visible on screen
// innerContent: returns the text content of an element including all the hidden text //!eg: its return display none text also.


// Reference : https://www.youtube.com/watch?v=Ab6K57WjWTE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=32&ab_channel=ChaiaurCode