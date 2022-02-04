const hamburger = document.querySelector(".navbar__hamburger");
const sidebar = document.querySelector(".sidebar")


hamburger.addEventListener('click',()=>{
    sidebar.classList.toggle("show")
})