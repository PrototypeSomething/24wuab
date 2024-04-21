document.querySelector(".menu-button").addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector(".menu-button");
    menu.classList.toggle("show-menu");

    let menuItems = document.querySelector(".menuItems");
    menuItems.classList.toggle("visible");
}
