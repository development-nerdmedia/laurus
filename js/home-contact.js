var navToggler = document.querySelector(".contacto7");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".seccontactopage").classList.toggle("open");
}