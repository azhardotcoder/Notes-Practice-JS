const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button)=>{
   console.log(button);
   console.log(button.id);
   button.addEventListener("click", function(e){

    //*if statement
//     if (button.id === "grey") {
//         body.style.backgroundColor = button.id
//     }
//     if (button.id === "white") {
//         body.style.backgroundColor = button.id
//     }
//     if (button.id === "blue") {
//         body.style.backgroundColor = button.id
//     }
//     if (button.id === "yellow") {
//         body.style.backgroundColor = button.id
//     }
//     if (button.id === "green") {
//         body.style.backgroundColor = button.id
//     }
//     if (button.id === "yellowgreen") {
//         body.style.backgroundColor = button.id
//     }
//    })

    //* Switch statement
switch (button.id) {
    case "grey":
    case "white":
    case "blue":
    case "yellow":
    case "green":
    case "yellowgreen":
      body.style.backgroundColor = button.id;
      break;
    default:
      break;
  }
  

   })
})



let colorIndex = 0;
const colors = ["grey", "white", "blue", "yellow", "green", "yellowgreen"];


 // Function to change background color automatically
// function changeColor() {
//   body.style.backgroundColor = colors[colorIndex];
//   colorIndex = (colorIndex + 1) % colors.length;
// }

// Call the function every second
// setInterval(changeColor, 1000);
