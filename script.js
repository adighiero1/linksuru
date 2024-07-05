const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel-service');
  let currentItem = 0;
  const totalItems = items.length;

  setInterval(() => {
      items[currentItem].classList.remove('active');
      currentItem = (currentItem + 1) % totalItems;
      items[currentItem].classList.add('active');
  }, 3000);
});