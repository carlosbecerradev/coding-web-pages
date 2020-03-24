
window.addEventListener('load', () => {      
    var preloader = document.querySelector(".preloader");
    preloader.className += " hidden";  
});

var hamburger = document.getElementById("menu-toggle");
var brand = document.getElementById("brand-name");
var navbar = document.getElementById("nav");
var square = document.getElementsByClassName("change-sq");


hamburger.addEventListener("click", () => {
    navbar.classList.toggle("toggle");
    brand.classList.toggle("toggle");
    for (i = 0; i < square.length; i++) {
        square[i].classList.toggle("toggle");
    }
});
   

var nav_item = document.getElementsByClassName("nav__item");
 
for (i = 0; i < nav_item.length; i++) {
    console.log(nav_item[i]);
    nav_item[i].addEventListener("click", () => {
        navbar.classList.toggle("toggle");
        brand.classList.toggle("toggle");
        for (i = 0; i < square.length; i++) {
            square[i].classList.toggle("toggle");
        }
    });
}
