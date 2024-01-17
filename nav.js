export function toggleMenu(menu, navlist) {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  }
  
  export function changeContent(navLinks, title, text, data) {
    navLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        title.textContent = data[index].title;
        text.innerHTML = data[index].frase;
      });
    });
  }
