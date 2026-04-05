//Save the DOM elements needed into a variable
const header = document.querySelector("header");
const contactBtn = document.querySelector(".contact-link");
const menuIcon = document.querySelector(".menu-btn img");
const menuPanel = document.querySelector("header nav ul");

//Append contact button as a navlink child on mobile devices
window.addEventListener("resize", () => {
  appendContactBtn();
});

function appendContactBtn() {
  if (window.innerWidth <= "768") {
    menuPanel.append(contactBtn);
    document.querySelector(".contact-link img").src =
      "./icons/arrow-purple.svg";
  } else {
    document.querySelector(".contact-link img").src = "./icons/left-arrow.svg";
  }
}
appendContactBtn();

//A delegated event listener for menu button and navlinks
header.addEventListener("click", (e) => {
  //menu toggle
  if (e.target.matches(".menu-btn img")) {
    if (!menuPanel.classList.contains("is-toggled")) {
      openMenu(menuPanel, header, menuIcon);
    } else {
      closeMenu(menuPanel, header, menuIcon);
    }
  }

  //Preventing page reload when current page navlink is clicked
  if (e.target.closest("a.nav-link")) {
    const navLink = e.target.closest("a.nav-link");
    const navLinkPath = new URL(navLink).pathname;
    const currentPagePath = window.location.pathname;

    if (navLinkPath === currentPagePath) {
      closeMenu(menuPanel, header, menuIcon);
      e.preventDefault();
    }
  }
});

function openMenu(menu, parent, icon) {
  menu.classList.add("is-toggled");
  // parent.style.position = "fixed";
  icon.src = "./icons/close-icon.svg";
}

function closeMenu(menu, parent, icon) {
  menu.classList.remove("is-toggled");
  // parent.style.position = "static";
  icon.src = "./icons/menu-icon.svg";
}
