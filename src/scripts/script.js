const burgerMenu = document.querySelector(".js-hamburger");
const burgerLine = document.querySelectorAll(".js-line");
const navMenu = document.querySelector(".js-nav");

burgerMenu.addEventListener("click", () => {
  if (
    burgerLine[0].classList.contains("line-1--open") == false &&
    burgerLine[1].classList.contains("line-2--open") == false &&
    burgerLine[2].classList.contains("line-3--open") == false
  ) {
    /* add open animation*/
    burgerLine[0].classList.add("line-1--open");
    burgerLine[1].classList.add("line-2--open");
    burgerLine[2].classList.add("line-3--open");
    navMenu.classList.add("nav--open");
    navMenu.classList.toggle("dp-flex");

    /* remove close animation */
    burgerLine[0].classList.remove("line-1--close");
    burgerLine[1].classList.remove("line-2--close");
    burgerLine[2].classList.remove("line-3--close");
    navMenu.classList.remove("nav--close");
  } else {
    /* add close  animation*/
    burgerLine[0].classList.remove("line-1--open");
    burgerLine[1].classList.remove("line-2--open");
    burgerLine[2].classList.remove("line-3--open");
    navMenu.classList.add("nav--close");

    /* remove open animation*/
    burgerLine[0].classList.add("line-1--close");
    burgerLine[1].classList.add("line-2--close");
    burgerLine[2].classList.add("line-3--close");

    navMenu.classList.remove("nav--open");

    setTimeout(() => {
      navMenu.classList.toggle("dp-flex");
      navMenu.classList.remove("nav--close");
    }, 500);
  }
});
