var btn = document.querySelector("button"); //! button selected by tag name
var p = document.querySelector("p");

btn.addEventListener("click", function(){
    p.textContent = "Someone clicked the button!";
});

//! addEventListener is use for adding event to the selected element