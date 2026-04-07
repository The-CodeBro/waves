// import { logIt, footer } from "../scripts/footer.js";
import {
    header,
    navlinks,
    menuToggle,
    activateCurrentPage,
    mobileNavView,
    desktopView,
} from "./menu.js";

//mobile menu toggle and desktop nav view
menuToggle(header);

activateCurrentPage(navlinks);

desktopView();

mobileNavView();

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        mobileNavView();
    } else {
        desktopView();
    }
});