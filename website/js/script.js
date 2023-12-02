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

const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://3aeo7mhfv22tk24pj5h77jnc3e0vugkj.lambda-url.us-east-2.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = `Este portifólio já teve ${data["views"]} views. <span class="counter-number-colored">Obrigado por contribuir!</span>`;
}
updateCounter();

document.addEventListener("DOMContentLoaded", () => {
  const clickableContents = document.querySelectorAll(
    ".clickable-content, .clickable-content__2"
  );
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  clickableContents.forEach((clickable, index) => {
    clickable.onclick = function () {
      modals[index].style.display = "block";
      setTimeout(() => {
        modals[index].style.opacity = 1;
        modals[index].querySelector(".modal-content").style.transform =
          "scale(1)";
      }, 10);
    };
  });

  closeButtons.forEach((button, index) => {
    button.onclick = function () {
      modals[index].style.opacity = 0;
      modals[index].querySelector(".modal-content").style.transform =
        "scale(0.95)";
      setTimeout(() => {
        modals[index].style.display = "none";
      }, 200);
    };
  });

  window.onclick = function (event) {
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.opacity = 0;
        modal.querySelector(".modal-content").style.transform = "scale(0.95)";
        setTimeout(() => {
          modal.style.display = "none";
        }, 500);
      }
    });
  };
});
