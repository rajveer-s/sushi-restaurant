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
  this.scrollY >= 50 ? Header.classList.add('bg-header') : Header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpId = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add teh show-scroll class to the a tag with the scrollUp
  this.scrollY >= 350 ? scrollUpId.classList.add('show-scroll') : scrollUpId.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously seclected topic (if user selected the theme)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark-theme' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Validate if the user previously chose the topic.
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was tp know if we activated or deactiavted the dark-theme.
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactiavte the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // we save the theme and the current icoon that the user selected
  localStorage.setItem('selectedTheme', getCurrentTheme())
  localStorage.setItem('selectedIcon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // animations repeat 
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, { origin: 'bottom' })
sr.reveal(`.about__data, .recently__data`,  { origin: 'left' })
sr.reveal(`.about__img, .recently__img`, { origin: 'right' })
sr.reveal(`.popular__card`, { interval: 100 })