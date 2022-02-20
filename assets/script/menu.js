const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $(".menu");
const menuOpen = $(".menu-open");
const menuClose = $(".menu-close");

menuOpen.addEventListener("click", () => {
    menu.classList.add("menu--active");
    document.body.style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("menu--active");
    document.body.style.overflow = "auto";
});
