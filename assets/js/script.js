const hamburgerBtn = document.querySelector("#hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerContent = document.querySelector(".hamburger-content");
const navLinks = document.querySelector(".nav-right .nav-links");
const navRight = document.querySelector(".nav-right");
const getStartedBtn = document.querySelector(".nav-right .get-started");

const mql = window.matchMedia("(max-width: 860px)");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  hamburgerContent.classList.toggle("active");
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
    if (hamburgerContent.contains(navLinks))
      hamburgerContent.removeChild(navLinks);
    navRight.insertBefore(navLinks, getStartedBtn);
    hamburgerContent.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
}

document.addEventListener("click", function (event) {
  if (
    !hamburgerBtn.contains(event.target) &&
    !hamburgerContent.contains(event.target)
  ) {
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

gsap.registerPlugin(ScrollSmoother);
const clamp = gsap.utils.clamp(-20, 20);
const skewSetter = gsap.quickTo("#portfolio img", "skewY");

ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 2,
  speed: 3,
  effects: true,
  onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
  onStop: () => skewSetter(0),
});

gsap.registerPlugin(ScrollTrigger);

const portfolioSection = document.querySelector("#portfolio");
const portfolioImages = gsap.utils.toArray("#portfolio .images img");

if (portfolioSection && portfolioImages.length) {
  portfolioImages.forEach((img) => {
    const speed = parseFloat(img.getAttribute("data-speed")) || 1;

    const movement = (1 - speed) * 200;

    gsap.fromTo(
      img,
      { y: -movement },
      {
        y: movement,
        ease: "none",
        scrollTrigger: {
          trigger: portfolioSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}
// Swiper
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 6000,
  freeMode: true,
  autoplay: {
    delay: 0,
  },
});
// Faq accordian
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  const img = this.querySelector('img.icon');

  items.forEach(item => {
    item.setAttribute('aria-expanded', 'false');
    const icon = item.querySelector('img.icon');
    if (icon) {
      icon.src = 'assets/images/icons/faq/arrowDown.svg'; 
    }
  });
  if (itemToggle === 'false') {
    this.setAttribute('aria-expanded', 'true');
    if (img) {
      img.src = 'assets/images/icons/faq/arrowUp.svg';
    }
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



