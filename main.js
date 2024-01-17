import { data } from './data.js';

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

//cambiar contenido de la pagina
let text = document.getElementById("text");
let title = document.getElementById("title");
let navLinks = document.querySelectorAll(".navlist a");

document
  .querySelector(".scroll-down a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("Gracias por su visita :)");
    setTimeout(function () {
      window.location.href = "#top";
    }, 2000);
  });

//cambiar contenido de la pagina
navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = data[index].title;
    text.innerHTML = data[index].frase;
  });
});
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
//scroll animation
const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

changeContent(navLinks, title, text, data);
toggleMenu(menu, navlist);
sr.reveal(".ditto-text", { delay: 200, origin: "top" });
sr.reveal(".ditto-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 460, origin: "left" });
sr.reveal(".scroll-down", { delay: 460, origin: "left" });
