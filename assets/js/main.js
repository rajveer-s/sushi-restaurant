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


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
