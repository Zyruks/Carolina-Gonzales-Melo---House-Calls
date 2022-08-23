const burgerMenu = document.querySelector(".js-hamburger");
const burgerLine = document.querySelectorAll(".js-line");
const navMenu = document.querySelector(".js-nav");

/* This is a function that is being called when the burger menu is clicked.3

    if line-[x]--open is not present in burgerLine[x] then do this:
    
    add open animation for burger menu and remove close animation burger menu
    add open animation for nav and remove close animation for nav
    
    else
    add close animation for burger menu and remove open animation burger menu
    add close animation for nav and remove open animation for nav */
burgerMenu.addEventListener("click", () => {
  if (
    burgerLine[0].classList.contains("line-1--open") == false &&
    burgerLine[1].classList.contains("line-2--open") == false &&
    burgerLine[2].classList.contains("line-3--open") == false
  ) {
    /* add open animation burger menu*/
    burgerLine[0].classList.add("line-1--open");
    burgerLine[1].classList.add("line-2--open");
    burgerLine[2].classList.add("line-3--open");

    /* add open animation navigation menu */
    navMenu.classList.add("nav--open");
    navMenu.classList.toggle("dp-flex");

    /* remove close animation burger menu*/
    burgerLine[0].classList.remove("line-1--close");
    burgerLine[1].classList.remove("line-2--close");
    burgerLine[2].classList.remove("line-3--close");

    /* remove  close animation navigation menu  */
    navMenu.classList.remove("nav--close");
  } else {
    /* add close animation burger menu */
    burgerLine[0].classList.remove("line-1--open");
    burgerLine[1].classList.remove("line-2--open");
    burgerLine[2].classList.remove("line-3--open");

    /* add close animation  navigation menu */
    navMenu.classList.add("nav--close");

    /* remove open animation burger menu*/
    burgerLine[0].classList.add("line-1--close");
    burgerLine[1].classList.add("line-2--close");
    burgerLine[2].classList.add("line-3--close");

    /* remove open animation navigation menu  */
    navMenu.classList.remove("nav--open");

    setTimeout(() => {
      /* remove open animation navigation menu  */
      navMenu.classList.toggle("dp-flex");
      navMenu.classList.remove("nav--close");
    }, 500);
  }
});
