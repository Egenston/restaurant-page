import { clearButtons, clearContent } from "./clear";
export function displayHome() {
    clearButtons();
    document.getElementById('home-button').classList.add('active');
    
    clearContent();
    const contentWindow = document.getElementById('main');
    contentWindow.style.justifyContent = "flex-start";
    contentWindow.style.gap = "60px"
    //restaurant quote
    let phrase = document.createElement('h1');
    phrase.setAttribute('id', 'phrase');
    phrase.textContent = "Georgian food you deserve";
    contentWindow.appendChild(phrase);
    
    //About us card
    let aboutCard = document.createElement('div');
    aboutCard.className = "info-card";
    //About us card name
    let aboutCardName = document.createElement('p');
    aboutCardName.className = "info-card-name";
    aboutCardName.textContent = "About us";
    aboutCard.appendChild(aboutCardName);
    //About us card text content
    let aboutCardText = document.createElement('p');
    aboutCardText.textContent = "We keep traditions unchanged. Our restaurant gives you an opportunity to taste traditional georgian food and feel the atmosphere of the Caucasus Mountains.";
    aboutCard.appendChild(aboutCardText);
    
    //opening hours card
    let hoursCard = document.createElement('div');
    hoursCard.className = "info-card";
    //opening hours card name
    let hoursCardName = document.createElement('p');
    hoursCardName.className = "info-card-name";
    hoursCardName.textContent = "Opening hours";
    hoursCard.appendChild(hoursCardName);
    //opening hours card text content
    let MondaySaturday = document.createElement('p');
    MondaySaturday.textContent = "Monday - Saturday";
    let MondaySaturdayHours = document.createElement('p');
    MondaySaturdayHours.textContent = "10AM - 10PM";
    hoursCard.appendChild(MondaySaturday);
    hoursCard.appendChild(MondaySaturdayHours);
    hoursCard.appendChild(document.createElement('br'));
    let Sunday = document.createElement('p');
    Sunday.textContent = "Sunday";
    let SundayHours = document.createElement('p');
    SundayHours.textContent = "10AM - 6PM";
    hoursCard.appendChild(Sunday);
    hoursCard.appendChild(SundayHours);
    
    //location card
    let locationCard = document.createElement('div');
    locationCard.className = "info-card";
    //location card name
    let locationCardName = document.createElement('p');
    locationCardName.className = "info-card-name";
    locationCardName.textContent = "Location";
    locationCard.appendChild(locationCardName);
    //location card text content
    let location = document.createElement('p');
    location.textContent = "953 Pinewood Drive, Chicago, Illinois";
    locationCard.appendChild(location);

    contentWindow.appendChild(aboutCard);
    contentWindow.appendChild(hoursCard);
    contentWindow.appendChild(locationCard);
}