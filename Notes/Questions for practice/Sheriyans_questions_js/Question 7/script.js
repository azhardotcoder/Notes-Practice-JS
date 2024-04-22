var prg = document.getElementById("progress");
var cmp = document.getElementById("#comp");
var count = 0;

var int = setInterval(function() {
  if (count < 100) {
    count += 1;
    prg.style.width = count + "%";
    prg.innerHTML = count + "%";
    
  } else {
    clearInterval(int);
  }
}, 50);    