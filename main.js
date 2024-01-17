import { data } from './data.js';
import { toggleMenu, changeContent } from './nav.js';

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

//cambiar contenido de la pagina
let text = document.getElementById("text");
let title = document.getElementById("title");
let navLinks = document.querySelectorAll(".navlist a");

// const data = [
//   {
//     title: "Ditto",
//     frase:
//       "Transform your gameplay experience with Ditto, the versatile Pokémon that adapts effortlessly to any challenge.<br />Mimic opponents, diversify your strategy, and engage in thrilling battles!",
//   },
//   {
//     title: "About",
//     frase:
//       "Ditto is a unique Pokémon that has the ability to transform itself into any other Pokémon it encounters. This website is dedicated to showcasing the versatility and strategic potential of Ditto in gameplay. Here, you can compare Ditto's abilities with those of other Pokémon, watch gameplay videos featuring Ditto, and learn more about how to incorporate Ditto into your battle strategy.",
//   },
//   {
//     title: "Services",
//     frase:
//       "Compare Ditto's abilities with those of any other Pokémon. Find out how Ditto stacks up against the competition.<br>Gameplay Videos<br>Watch videos of Ditto in action. Learn new strategies and techniques from experienced players.<br>Strategy Guides<br>Read our comprehensive strategy guides. Learn how to incorporate Ditto into your battle strategy effectively.",
//   },
//   {
//     title: "Contact",
//     frase: `Contact Us <br>Have questions or feedback? We'd love to hear from you. Reach out to us at: <br>Email: info@ditto.com <br>Phone: +1 123-456-7890`,
//   },
// ];
document
  .querySelector(".scroll-down a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("Gracias por su visita :)");
    setTimeout(function () {
      window.location.href = "#top";
    }, 2000);
  });

// //cambiar contenido de la pagina
// navLinks.forEach((link, index) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     title.textContent = data[index].title;
//     text.innerHTML = data[index].frase;
//   });
// });
// menu.onclick = () => {
//   menu.classList.toggle("bx-x");
//   navlist.classList.toggle("open");
// };
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
