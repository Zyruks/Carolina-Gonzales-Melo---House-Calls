const servicesImg = document.querySelectorAll(".js-service-img");
const additionalServicesImg = document.querySelectorAll(
  ".js-additional-services-img"
);

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
