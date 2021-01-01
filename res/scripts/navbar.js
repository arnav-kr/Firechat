var hamburger = document.querySelector("nav .hamburger");
var navbar = document.getElementById("ul");

hamburger.addEventListener("click", hamburgerToggle)

function hamburgerToggle(){
    ul.style.transition = "transform 0.3s ease-in-out";
    ul.classList.toggle("ul_open");
    
    if(hamburger.id == "hamburger_open"){
        hamburger.id = "";
    }else{
        hamburger.id = "hamburger_open";
    }
}