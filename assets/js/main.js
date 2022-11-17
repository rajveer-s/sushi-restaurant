/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

// Menu Show 
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

// Menu Hidden 
// validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // when we click on the eeach nav__link we remove the show-menu
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const Header = document.getElementById('header');
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? Header.classList.add('bg-header') : Header.class.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
