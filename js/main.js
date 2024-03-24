document.querySelector(".material-symbols-outlined").addEventListener("click", showNav)

function showNav() {
    let nav = document.querySelector(".nav-mobile")
    nav.classList.toggle("show")
}