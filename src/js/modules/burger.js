const menu = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".menu-mobile__list");
const menuButtonImage = document.getElementById("menuButtonImage");
menuButtonImage.style.padding = "0 14px";
let isImage = true;

menu.addEventListener("click", function () {
  menuList.classList.toggle("translate-x-[-100%]");
  menuList.classList.toggle("translate-x-0");

  if (isImage) {
    menuButtonImage.setAttribute("src", "../assets/img/close.svg");
    menuButtonImage.setAttribute("alt", "close");
    menuButtonImage.style.padding = "0 16px";
    isImage = false;
    document.body.style.overflowY = "hidden";
  } else {
    menuButtonImage.setAttribute("src", "../assets/img/menu.svg");
    menuButtonImage.setAttribute("alt", "menu");
    menuButtonImage.style.padding = "0 14px";
    isImage = true;
    document.body.style.overflowY = "auto";
  }
});
