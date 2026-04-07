export default function preventReloadOnActiveFooterLink() {
    const footerNav = document.querySelector(".footer-nav");

    footerNav.addEventListener("click", (e) => {
        if (e.target.closest("a.footer-link")) {
            const navLink = e.target.closest("a.footer-link");
            const navLinkPath = new URL(navLink.href).pathname;
            const currentPagePath = window.location.pathname;

            if (navLinkPath === currentPagePath) {
                e.preventDefault();
            }
        }
    });
}