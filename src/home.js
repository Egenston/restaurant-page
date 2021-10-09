import { clearButtons } from "./clearButtons";
export function displayHome() {
    clearButtons();
    document.getElementById('home-button').classList.add('active');
}