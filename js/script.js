document.querySelector(".menu-button").addEventListener("click", showMenu);

document.querySelector(".fade-layer").addEventListener("click", showMenu);


function showMenu(){
    // let menu = document.querySelector(".menu");
    // menu.classList.toggle("show");

    let menu = document.querySelector(".menu-button");
    menu.classList.toggle("show-menu");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}
