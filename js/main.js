const faqHeader = document.querySelectorAll(".faq__item-header");
const faqText = document.querySelectorAll(".faq__item-text");
const faqImg = document.querySelectorAll(".faq__item-header img");
const toggleShown = (index) => {
  faqText[index].classList.toggle("none");
  faqImg[index].classList.toggle("rotated");
};

faqHeader.forEach((item, index) => {
  item.onclick = () => toggleShown(index);
});

const burger = document.querySelector(".burger");
const navOpen = document.querySelector(".burger__open");
const navClose = document.querySelector(".burger__close");

const nav = document.querySelector(".header__nav");

burger.onclick = () => {
  nav.classList.toggle("header__nav_opened");
  navOpen.classList.toggle("none");
  navClose.classList.toggle("none");
};
