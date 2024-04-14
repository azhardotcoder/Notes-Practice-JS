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
