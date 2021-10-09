export function displayContentWindow() {
    const content = document.getElementById('content');

    let contentWindow = document.createElement('main');
    contentWindow.setAttribute('id', 'main');

    content.appendChild(contentWindow);
}