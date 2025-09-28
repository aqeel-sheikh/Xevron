const hamburger = document.querySelector("#hamburger-btn");
const hamburgerIcon = document.querySelector("#hamburger");
const offScreenMenu = document.querySelector(".offScreenMenu");
const navLinks = document.querySelector(".nav-right .nav-links");
const hamburgerMenu = document.querySelector(".hamburger-menu");

let mql = window.matchMedia("(max-width: 860px)");
let isHamburgerIcon = true;

function toggleImageSrc() {
  if (isHamburgerIcon) {
    hamburgerIcon.src = "assets/images/icons/header/close.svg";
  } else {
    hamburgerIcon.src = "assets/images/icons/header/hamburger.svg";
  }
  isHamburgerIcon = !isHamburgerIcon;
}
function toggleMobileMenu() {
  offScreenMenu.classList.toggle("active");
  toggleImageSrc();
}

function closeMobileMenu() {
  offScreenMenu.classList.remove("active");
  if (!isHamburgerIcon) {
    toggleImageSrc();
  }
}

function resetHamburgerIcon() {
  if (isHamburgerIcon === false) {
    hamburgerIcon.src = "assets/images/icons/header/hamburger.svg";
    isHamburgerIcon = true;
  }
}

function checkScreenSize() {
  if (mql.matches) {
    hamburgerMenu.style.display = "block";
    hamburger.style.display = "block";
    navLinks.style.display = "none";
  } else {
    hamburgerMenu.style.display = "none";
    hamburger.style.display = "none";
    navLinks.style.display = "block";
    closeMobileMenu();
    resetHamburgerIcon();
  }
}

hamburger.addEventListener("click", toggleMobileMenu);

document.addEventListener("click", function (event) {
  if (
    !hamburger.contains(event.target) &&
    !offScreenMenu.contains(event.target)
  ) {
    closeMobileMenu();
  }
});

const mobileMenuLinks = offScreenMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

mql.addEventListener("change", checkScreenSize);

document.addEventListener("DOMContentLoaded", checkScreenSize);
