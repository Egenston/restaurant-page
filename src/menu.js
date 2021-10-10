import { clearButtons, clearContent } from "./clear";
export function displayMenu() {
    clearButtons();
    document.getElementById('menu-button').classList.add('active');

    clearContent();
    const contentWindow = document.getElementById('main');
    let menu = document.createElement('div');
    menu.className = "menu";
    contentWindow.appendChild(menu);

    addDish("Khachapuri Adjaruli", "https://the-challenger.ru/wp-content/uploads/2019/05/Hachapuri-800x558.jpeg");
    addDish("Khinkali", "https://www.patee.ru/r/x6/19/9f/f2/960m.jpg");
    addDish("Kharcho", "https://www.maggi.ru/data/images/recept/img640x500/recept_4443_r9s1.jpg");
    addDish("Shkmeruli", "https://live.staticflickr.com/65535/48554259206_7b2136221c_c.jpg");
    addDish("Mtsvadi", "https://georgianjournal.ge/media/_thumb/images/GJ/2014/31/mwvadiiii.jpg");
    addDish("Dolma", "https://cdni.rbth.com/rbthmedia/images/2021.09/article/6131e18015e9f9357b2e0d01.jpg");
    addDish("Churchkhela", "https://m.media-amazon.com/images/I/61yU47JAxfL._SL1004_.jpg");
    addDish("Lobio", "https://walnuts.org/wp-content/uploads/2017/09/9e64386da924bdf-4DF8BA02-8EE8-4754-8648B47D92585213-900x600.jpg");

}
function addDish(name, imgLink) {
    const menu = document.querySelector('.menu');
    let dish = document.createElement('div');
    dish.className = "dish-card";
    let dishImage = document.createElement('img');
    dishImage.setAttribute('src', imgLink);
    dishImage.className = "dish-photo";
    dish.appendChild(dishImage);
    let dishName = document.createElement('p');
    dishName.textContent = name;
    dish.appendChild(dishName);
    menu.appendChild(dish);
}