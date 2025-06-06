/* Constants & Configs */

const myNav = document.querySelector("#nav-bar");
const mobileNav = document.querySelector("#mobile-nav");
const navMenu = document.querySelector("#nav-menu");
const menuToggle = document.querySelector("#nav-toggle");
const menuLinks = navMenu.querySelectorAll(".nav-link");
const whiteLogo = myNav.querySelector("#white-nav-logo");
const blackLogo = myNav.querySelector("#black-nav-logo");
const logoContainer = myNav.querySelector("#logo");
let isMenuOpen = false;

/* Navigation Bar */

function setSolidNavbar() {
  whiteLogo.classList.remove("transparent");
  blackLogo.classList.add("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.remove("black"));
}

function setTransparentNavbar() {
  whiteLogo.classList.add("transparent");
  blackLogo.classList.remove("transparent");
  Array.from(menuLinks).forEach(menuLink => menuLink.classList.add("black"));
}

/* Mobile Menu */

// Toggle Menu Active State.
menuToggle.addEventListener("click", e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // Toggle ally attributes and active class
  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  navMenu.hidden = !isMenuOpen;
  mobileNav.classList.toggle("nav--open");
  logoContainer.classList.toggle("mobile-nav");
  blackLogo.classList.toggle("mobile-nav");
});

// Trap tab inside when open.
mobileNav.addEventListener("keydown", e => {
  // Abort if menu isn't open or modifier keys are pressed.
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // Listen for tab press and move focus,
  // if we're on either end of the navigation.
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});
