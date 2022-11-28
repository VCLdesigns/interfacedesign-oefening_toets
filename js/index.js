var navMenuButtonClosed = document.querySelector("#nav_button_closed");
var navMenuButtonOpenend = document.querySelector("#nav_button_opened");
var navMenuLinks = document.querySelector("#nav_links");

navMenuButtonClosed.addEventListener("click", openMenu);
function openMenu(evt){
    navMenuButtonClosed.classList.toggle("verborgen");
    navMenuButtonOpenend.classList.toggle("verborgen");
    navMenuLinks.classList.toggle("verborgen");
}
navMenuButtonOpenend.addEventListener("click", openMenu);
function openMenu(evt){
    navMenuButtonClosed.classList.toggle("verborgen");
    navMenuButtonOpenend.classList.toggle("verborgen");
    navMenuLinks.classList.toggle("verborgen");
}