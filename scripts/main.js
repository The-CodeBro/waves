// import { logIt, footer } from "../scripts/footer.js";
import {
    header,
    navlinks,
    menuToggle,
    indicateActivePage,
    mobileNavView,
    desktopView,
} from "./menu.js";

import preventReloadOnActiveFooterLink from "./footer.js";
import copyRightYear from "./date.js";

//mobile menu toggle and desktop nav view
menuToggle(header);

indicateActivePage(navlinks);

desktopView();

mobileNavView();

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        mobileNavView();
    } else {
        desktopView();
    }
});

preventReloadOnActiveFooterLink();

//footer copyright year
copyRightYear();