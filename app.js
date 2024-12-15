const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.nav-content');
const nav = document.querySelector('nav')



hamburgerMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('nav-content');
})

window.addEventListener('scroll',()=>{
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
 
})

