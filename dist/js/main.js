let nav = document.getElementById("nav-icon");
let menu = document.getElementById("menu-responsive");
let wrapp = document.getElementById("nav-wrapp");
nav.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("open");
  wrapp.classList.toggle("open");
  menu.classList.toggle("open");
});
