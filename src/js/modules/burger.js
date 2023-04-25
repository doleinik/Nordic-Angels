const menu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close");
const menuList = document.querySelector(".menu-mobile__list");

menu.addEventListener("click", function () {
  menuList.classList.toggle("translate-x-[-100%]");
  menuList.classList.toggle("translate-x-0");
});

closeButton.addEventListener("click", function () {
  menuList.classList.toggle("translate-x-0");
  menuList.classList.toggle("translate-x-[-100%]");
});
