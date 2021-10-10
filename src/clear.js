export function clearButtons() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    })
}
export function clearContent() {
    const content = document.getElementById('main');
    content.innerHTML = "";
}