var form = document.querySelector('form');
var inp1 = document.querySelector("#input1");
var inp2 = document.querySelector("#input2");
var h3 = document.querySelector('h3');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if(inp1.value === '' || inp2.value === '') {
    h3.textContent = "Error, some fields are empty";
    h3.style.fontSize = "30px";
    h3.style.color = "red";
  }
  else{
    h3.textContent = " ";

  }
});