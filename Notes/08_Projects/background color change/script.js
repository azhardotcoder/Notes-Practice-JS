const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
// Generating a random number

const randomNum = function(){
    const hex = "123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
}

let intervalId;
const startChangingColor = function(){

  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
     function changeBgColor(){
        document.body.style.backgroundColor = randomNum()

    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

stopBtn.addEventListener("click", stopChangingColor)
startBtn.addEventListener("click", startChangingColor)