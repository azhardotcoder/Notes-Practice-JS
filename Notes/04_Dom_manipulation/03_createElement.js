// * ------- Create element ----------------
const div = document.createElement('div') // We can create any element by this propertity
div.style.backgroundColor = "green"
div.style.textAlign = "center"
div.innerText = "Hello"
div.style.fontSize = "60px"

document.body.appendChild(div)

// function for creating and appending element
function addEle(createEle){
    const h1 = document.createElement('h1')
    h1.style.backgroundColor = "yellow"
    h1.innerText = "Created element with function"
    h1.style.color = "black"
    h1.style.textAlign = "center"

    document.body.appendChild(h1)

}

addEle()