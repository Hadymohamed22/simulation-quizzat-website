// convert position nav when scroll
const nav = document.querySelector("nav");
function convertNavPosition() {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", convertNavPosition);
// copyright year
const copyrightYear = document.querySelector(".copyright-year");
let currentYear = new Date().getFullYear();
copyrightYear.innerHTML = currentYear;
