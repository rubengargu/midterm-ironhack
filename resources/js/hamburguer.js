const hamburguer = document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburguer.addEventListener("cick", () =>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");

}) )