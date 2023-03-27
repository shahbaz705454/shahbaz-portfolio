// toggle icon nav bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Section

let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector("header nav a[href*='" + id + "']").classList.add('active');
        };
    });




    // STICKY NAV BAR

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



// Remove toggle icon when click on navbar links(scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}; 


// SCROLL REVEAL 

ScrollReveal({ 
    
    reset: true,
    distance: '80px',
    duration : 2000,
    delay : 200

 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin:'bottom' });
 ScrollReveal().reveal('.home h3', { origin:'left' });






