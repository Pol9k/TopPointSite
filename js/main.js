$(function () {
  $(".portfolio__slider").slick({
    // arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-1.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-2.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });
});

// SCROLL
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// Burger handler
(function () {
  const burgerItem = document.querySelector(".burito");
  const menu = document.querySelector(".header__burger_back");
  const menuCloseItem = document.querySelector(".header__burger_back-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__burger_back-active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__burger_back-active");
  });
})();
// (function () {
//   const burgerItem = document.querySelector(".burger");
//   console.log(burgerItem);
//   const menu = document.querySelector(".header__burger_back");
//   const menuCloseItem = document.querySelector(".header__nav-close");
//   burgerItem.addEventListener("click", () => {
//     menu.classList.add("header__nav_active");
//   });
//   menuCloseItem.addEventListener("click", () => {
//     menu.classList.remove("header__nav_active");
//   });
// })();
