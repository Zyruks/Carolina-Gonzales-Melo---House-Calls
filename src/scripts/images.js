const servicesImg = document.querySelectorAll(".js-service-img");
const additionalServicesImg = document.querySelectorAll(
  ".js-additional-services-img"
);

let images = [];
/**
 * It takes a list of image URLs as arguments, and then creates new Image objects, and sets their src
 * property to the URLs you passed in
 */
function preload() {
  for (let i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

//-- usage --//
preload(
  "./assets/images/services/ambulance.webp",
  "./assets/images/services/heart.webp",
  "./assets/images/services/lungs.webp",
  "./assets/images/services/capsules.webp",
  "./assets/images/services/glucometer.webp",
  "./assets/images/services/aditional-services/blood-test.webp",
  "./assets/images/services/aditional-services/chemotherapy.webp",
  "./assets/images/services/aditional-services/fetus.webp",
  "./assets/images/services/aditional-services/wound.webp",
  "./assets/images/services/aditional-services/tube.webp",
  "./assets/images/services/aditional-services/kidney.webp"
);

/**
 * It takes an array of images as an argument, and then adds an event listener to each image that
 * changes the image's source to a .webp file when the mouse hovers over it, and then changes it back
 * to a .png file when the mouse leaves
 * @param servicesImages - This is the array of images that we want to animate.
 */

function servicesAnimation(servicesImages) {
  for (let i = 0; i < servicesImages.length; i++) {
    servicesImages[i].addEventListener("mouseover", () => {
      let attributeValue = servicesImages[i].getAttribute("src");
      servicesImages[i].src = `${attributeValue.slice(0, -4)}.webp`;
    });

    servicesImages[i].addEventListener("mouseout", () => {
      let attributeValue = servicesImages[i].getAttribute("src");
      servicesImages[i].src = `${attributeValue.slice(0, -5)}.png`;
    });
  }
}

servicesAnimation(servicesImg);
servicesAnimation(additionalServicesImg);
