//todo ------- Create element ----------------
const div = document.createElement('div') // We can create any element by this propertity
div.style.backgroundColor = "green"
div.style.textAlign = "center"
div.innerText = "Hello"
div.style.fontSize = "60px"

document.body.appendChild(div)

// function for creating and appending element
function addEle(createEle){
    const li = document.createElement('li')
    li.innerText = `${createEle}`
    document.querySelector(".parent").appendChild(li)
}

addEle("Azhar")
addEle("Ayush")

// todo ------ edit element -------
const firstLi = document.querySelector("li:nth-child(1)")
// newLi.innerHTML = "Newli" //First way to edit element but not optimiz way

//Optimize approach
const newLi = document.createElement('li')
newLi.textContent = "First Li"
firstLi.replaceWith(newLi)

//Outer html way to edit
const secondLi = document.querySelector("li:nth-child(2)")
secondLi.outerHTML = "<li>SecondLi</li>" //We have to write complete html to change


// todo ------ Remove element ---------
const lastLi = document.querySelector("li:last-child")
lastLi.remove()