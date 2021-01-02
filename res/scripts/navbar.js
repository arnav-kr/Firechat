var hamburger = document.querySelector("nav .hamburger");
var navbar = document.getElementById("ul");

hamburger.addEventListener("click", hamburgerToggle)

function hamburgerToggle(){
    ul.style.transition = "transform 0.3s ease-in-out";
    ul.classList.toggle("ul_open");
    
    if(hamburger.id == "hamburger_open"){
        hamburger.id = "";
        document.body.classList.remove("body_overflow_hidden")
    }else{
        hamburger.id = "hamburger_open";
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.body.classList.add("body_overflow_hidden")
    }
}