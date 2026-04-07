export default function copyRightYear() {
    const copyrightYearElement = document.querySelector(".copyright h3");
    const date = new Date();
    const currentYear = date.getFullYear();

    copyrightYearElement.textContent = `© ${currentYear} Waves. All rights reserved.`;
}