import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";
export function displayHeader() {
    const content = document.getElementById('content');
    let header = document.createElement('header');

    //creating restaurant name
    let restaurantName = document.createElement('h1');
    restaurantName.textContent = "Tbilisi";
    header.appendChild(restaurantName);

    //creating nav buttons div
    let navButtons = document.createElement('div');
    navButtons.setAttribute('id', 'nav-buttons');

    //creating home button
    let homeButton = document.createElement('a');
    homeButton.setAttribute('id', 'home-button');
    homeButton.className = "nav-button";
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', () => {displayHome();});
    navButtons.appendChild(homeButton);

    //creating menu button
    let menuButton = document.createElement('a');
    menuButton.setAttribute('id', 'menu-button');
    menuButton.className = "nav-button";
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', () => { displayMenu(); });
    navButtons.appendChild(menuButton);

    //creating contact button
    let contactButton = document.createElement('a');
    contactButton.setAttribute('id', 'contact-button');
    contactButton.className = "nav-button";
    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', () => { displayContact(); });
    navButtons.appendChild(contactButton);

    //adding nav buttons to header
    header.appendChild(navButtons);
    //adding header to the page
    content.appendChild(header);
}