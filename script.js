const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

function showNav() {
  let x = document.getElementById("responsiveID");
  if (x.className === "responsive") {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}
