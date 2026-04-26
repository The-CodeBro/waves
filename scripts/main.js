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
  } else {
    desktopView();
  }
});

initForm();

preventReloadOnActiveFooterLink();

//footer copyright year
copyRightYear();
