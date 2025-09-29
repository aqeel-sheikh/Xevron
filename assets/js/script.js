const hamburgerBtn = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerContent = document.querySelector(".hamburger-content");
const navLinks = document.querySelector(".nav-right .nav-links");
const navRight = document.querySelector(".nav-right");
const getStartedBtn = document.querySelector(".nav-right .get-started");

const mql = window.matchMedia("(max-width: 860px)");

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  hamburgerContent.classList.toggle('active');
});

function checkScreenSize() {
  if (mql.matches) {
    hamburgerMenu.style.display = "block";
    hamburgerBtn.style.display = "block";
    if (navRight.contains(navLinks)) navRight.removeChild(navLinks);
    hamburgerContent.appendChild(navLinks);
  } else {
    hamburgerMenu.style.display = "none";
    hamburgerBtn.style.display = "none";
    if (hamburgerContent.contains(navLinks)) hamburgerContent.removeChild(navLinks);
    navRight.insertBefore(navLinks, getStartedBtn);
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
}

document.addEventListener("click", function (event) {
  if (!hamburgerBtn.contains(event.target) && !hamburgerContent.contains(event.target)) {
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
});

hamburgerContent.addEventListener("click", function (event) {
  if (event.target.matches("a")) {
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
});

mql.addEventListener("change", checkScreenSize);
document.addEventListener("DOMContentLoaded", checkScreenSize);
