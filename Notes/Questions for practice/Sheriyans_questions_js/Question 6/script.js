var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#about-text");
var contacttext = document.querySelector("#contact-text");

hometext.style.display = "block";
hometext.style.width = "50%";
hometext.style.marginTop = "4%";

home.addEventListener("click", function () {
    removetext();
  hometext.style.display = "block";
  hometext.style.width = "50%";
  hometext.style.marginTop = "4%";
});
about.addEventListener("click", function () {
    removetext();
  abouttext.style.display = "block";
  abouttext.style.width = "50%";
  abouttext.style.marginTop = "4%";
});
contact.addEventListener("click", function () {
    removetext();
  contacttext.style.display = "block";
  contacttext.style.width = "50%";
  contacttext.style.marginTop = "4%";
});

function removetext(h3){
    document.querySelectorAll("h3").forEach(function (h3) {
        h3.style.display = "none";
    });
}