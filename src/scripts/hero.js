const heroBtn = document.querySelector(".js-hero-btn");

heroBtn.addEventListener("mouseenter", () => {
  heroBtn.innerHTML = `<a href="tel:+18294261492" class=" fs-400 text-primary-700" >+1 (829) 426-1492</a>`;
});

heroBtn.addEventListener("mouseleave", () => {
  heroBtn.innerHTML = `<img
                    src="./assets/svg/phone.svg"
                    alt="phone illustration"
                    class="btn__icon"
                  />
                  CALL US!`;
});

heroBtn.addEventListener("focusout", () => {
  heroBtn.innerHTML = `<img
                    src="./assets/svg/phone.svg"
                    alt="phone illustration"
                    class="btn__icon"
                  />
                  CALL US!`;
});
