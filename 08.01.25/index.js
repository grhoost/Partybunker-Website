function updateIndicator(gallery, activeIndex) {
  const indicators = gallery.querySelectorAll(".image-indicator span");
  indicators.forEach((indicator, index) => {
    if (index === activeIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function createIndicators(gallery) {
  const images = gallery.querySelectorAll("img");
  const indicatorContainer = document.createElement("div");
  indicatorContainer.classList.add("image-indicator");

  images.forEach((img, index) => {
    const indicator = document.createElement("span");
    if (index === 0) {
      indicator.classList.add("active");
    }
    indicator.addEventListener("click", () => {
      images.forEach(img => img.classList.remove("active"));
      images[index].classList.add("active");
      updateIndicator(gallery, index);
    });
    indicatorContainer.appendChild(indicator);
  });

  gallery.appendChild(indicatorContainer);
}

document.querySelectorAll(".image-gallery .image-container").forEach(container => {
  const gallery = container.querySelector(".image-content");
  createIndicators(gallery);

  const images = gallery.querySelectorAll("img");
  let currentIndex = 0;

  setInterval(() => {
    images.forEach(image => image.classList.remove("active"));
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
    updateIndicator(gallery, currentIndex);
  }, 2000); // Wechselintervall auf 2 Sekunden setzen
});