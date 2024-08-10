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

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    checkboxes.forEach(box => {
                        if (box !== this) box.checked = false;
                    });
                }
            });
});

const stars = document.querySelectorAll('.stars i');

        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-value');

                
                stars.forEach(s => s.classList.remove('active'));

                stars.forEach(s => {
                    if (s.getAttribute('data-value') <= rating) {
                        s.classList.add('active');
                    }
                });
            });
});
// const scrollUp = ()=>{
//     const scrollUp = document.getElementById('scroll-up');
//     this.scrollY>=350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll',scrollUp)