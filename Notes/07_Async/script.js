const  startBtn = document.querySelector("#start")
const  stopBtn = document.querySelector("#stop")
const indianTime = new Date().toLocaleTimeString('en-US');


const start = function(){
    console.log("Hello", indianTime);
}

startBtn.addEventListener("click", ()=>{
    intervalId = setInterval(start, 1000)
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(intervalId) // to stop the interval fn, we always require intervalID to stop
})