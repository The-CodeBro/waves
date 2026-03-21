const header = document.querySelector("header");
// const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-btn img");
const menuPanel = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li");

// console.log(menuBtn, menuIcon, menuPanel);

const currentPage = window.location.href;

console.log(currentPage, navLinks);

header.addEventListener("click", (e) => {
  //menu toggle
  if (e.target.matches(".menu-btn img")) {
    menuPanel.classList.toggle("is-toggled");
  }
  if (menuPanel.classList.contains("is-toggled")) {
    header.classList.add("is-toggled-active");
    menuIcon.src = "./icons/close-icon.svg";
  } else {
    header.classList.remove("is-toggled-active");
    menuIcon.src = "./icons/menu-icon.svg";
  }

  //Preventing page reload on current page
});
