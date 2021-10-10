import { clearButtons, clearContent } from "./clear";
export function displayMenu() {
    clearButtons();
    document.getElementById('menu-button').classList.add('active');

    clearContent();
    const contentWindow = document.getElementById('main');
}