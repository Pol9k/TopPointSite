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
