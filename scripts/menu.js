//Save the DOM elements needed into a variable
export const header = document.querySelector(".header");
export const contactBtn = document.querySelector(".js-contact-link");
export const menuIcon = document.querySelector(".menu-btn");
export const menuPanel = document.querySelector("header nav ul");
export const navlinks = document.querySelectorAll("header nav ul li a");

//A delegated event listener for menu button and navlinks

export function menuToggle(element) {
    element.addEventListener("click", (e) => {
        //menu toggle
        if (e.target.matches(".menu-btn i")) {
            if (!menuPanel.classList.contains("is-toggled")) {
                menuPanel.classList.add("is-toggled");
                menuIcon.innerHTML = `<i class="fa-solid fa-x fa-lg"></i>`;
            } else {
                closeMenu(menuPanel, menuIcon);
            }
        }

        //Preventing page reload when current page navlink is clicked
        if (e.target.closest("a.nav-link")) {
            const navLink = e.target.closest("a.nav-link");
            const navLinkPath = new URL(navLink.href).pathname;
            const currentPagePath = window.location.pathname;

            if (navLinkPath === currentPagePath) {
                closeMenu(menuPanel, menuIcon);
                e.preventDefault();
            }

            closeMenu(menuPanel, menuIcon);
        }
    });
}

export function closeMenu(menu, icon) {
    menu.classList.remove("is-toggled");
    icon.innerHTML = ` <i class="fa-solid fa-bars fa-lg"></i>`;
}

export function activateCurrentPage(navlinks) {
    navlinks.forEach((link) => {
        const linkPath = new URL(link.href).pathname;
        const currentPagePath = window.location.pathname;

        if (linkPath === currentPagePath) {
            link.classList.add("active");
        }
    });
}

export function mobileNavView() {
    if (window.innerWidth <= 768) {
        menuPanel.appendChild(contactBtn);
        contactBtn.style.visibility = "visible";
    }
}

export function desktopView() {
    if (window.innerWidth > 768) {
        header.appendChild(contactBtn);
    }
}