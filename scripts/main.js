import {
  header,
  navlinks,
  menuToggle,
  indicateActivePage,
  mobileNavView,
  desktopView,
} from "./menu.js";
import preventReloadOnActiveFooterLink from "./footer.js";
import copyRightYear from "./utils/date.js";
import { initForm } from "../scripts/formValidator.js";

//mobile menu toggle and desktop nav view
menuToggle(header);

indicateActivePage(navlinks);

desktopView();

mobileNavView();

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    mobileNavView();
    indicateActivePage(navlinks);
  } else {
    desktopView();
  }
});

//form validation
initForm();

//Prevent footer link from reloading on current page
preventReloadOnActiveFooterLink();

//footer copyright year
copyRightYear();
