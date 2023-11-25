// script.js
var typed = new Typed(".auto-type", {
  strings: ["Desenvolvedor", "Engenheiro de Dados", "Analista de Dados"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
