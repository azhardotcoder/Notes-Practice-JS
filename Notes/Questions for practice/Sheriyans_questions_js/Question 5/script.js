var start = document.getElementById('start');
var stop = document.getElementById('stop');
var h1 = document.querySelector("h1");

var int;
start.addEventListener('click', function(){
    var count = 0;
    int = setInterval(function(){
        h1.textContent = count;
        count++;
    }, 1000);  
});
//! setInterval is use for calling a function or timer (in milliseconds)

stop.addEventListener('click', function(){
    clearInterval(int);
});
//! clearInterval is use for stopping the interval