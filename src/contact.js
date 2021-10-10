import { clearButtons, clearContent } from "./clear";
export function displayContact() {
    clearButtons();
    document.getElementById('contact-button').classList.add('active');

    clearContent();
    const contentWindow = document.getElementById('main');
    contentWindow.style.justifyContent = "center";
    contentWindow.style.gap = "20px"

    let phoneNumber = document.createElement('p');
    phoneNumber.setAttribute('id', 'phone-number');
    phoneNumber.innerHTML = '<i class="fas fa-phone-alt"></i> 863-559-8463';
    contentWindow.appendChild(phoneNumber);

    let map = document.createElement('iframe');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.329071380502!2d-87.90832577997858!3d41.62701800517033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e410eca8c268b%3A0x58984e2154ecfe60!2s14366%20Pinewood%20Dr%2C%20Orland%20Park%2C%20IL%2060467%2C%20USA!5e0!3m2!1sen!2sde!4v1633866867242!5m2!1sen!2sde');
    map.setAttribute('width', '400');
    map.setAttribute('height', '300');
    map.setAttribute('style', 'border:0;');
    map.setAttribute('allowfullscreen', "");
    map.setAttribute('loading', 'lazy');
    contentWindow.appendChild(map);
}