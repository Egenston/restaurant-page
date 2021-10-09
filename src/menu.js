import { clearButtons } from "./clearButtons";
export function displayMenu() {
    clearButtons();
    document.getElementById('menu-button').classList.add('active');
}