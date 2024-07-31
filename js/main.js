const navLinks = document.querySelectorAll('.nav__links'), links2 = document.querySelectorAll('.nav__links2'), accLinks = document.querySelectorAll('.acc__links');


function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction))
links2.forEach(n => n.addEventListener('click', linkAction))
accLinks.forEach(n => n.addEventListener('click', linkAction))


const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY>=50 ? header.classList.add('shadow-header'): header.classList.remove('shadow-header');
}
window.addEventListener('scroll',shadowHeader);


const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY>=350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)