import { clearButtons } from "./clearButtons";
export function displayContact() {
    clearButtons();
    document.getElementById('contact-button').classList.add('active');
}