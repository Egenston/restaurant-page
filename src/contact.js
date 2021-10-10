import { clearButtons, clearContent } from "./clear";
export function displayContact() {
    clearButtons();
    document.getElementById('contact-button').classList.add('active');

    clearContent();
    const contentWindow = document.getElementById('main');
}