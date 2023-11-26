// script.js
const typed = new Typed(".auto-type", {
  strings: ["Desenvolvedor", "Engenheiro de Dados"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
