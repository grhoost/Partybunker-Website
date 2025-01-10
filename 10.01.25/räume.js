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

function nextImage(button) {
  const gallery = button.parentElement;
  const images = gallery.querySelectorAll("img");
  const activeIndex = Array.from(images).findIndex(img => img.classList.contains("active"));

  images[activeIndex].classList.remove("active");
  const nextIndex = (activeIndex + 1) % images.length; // Zyklisch zum ersten Bild
  images[nextIndex].classList.add("active");

  updateIndicator(gallery, nextIndex);
}

function prevImage(button) {
  const gallery = button.parentElement;
  const images = gallery.querySelectorAll("img");
  const activeIndex = Array.from(images).findIndex(img => img.classList.contains("active"));

  images[activeIndex].classList.remove("active");
  const prevIndex = (activeIndex - 1 + images.length) % images.length; // Zyklisch zum letzten Bild
  images[prevIndex].classList.add("active");

  updateIndicator(gallery, prevIndex);
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

document.querySelectorAll(".room-card .image-gallery").forEach(gallery => {
  createIndicators(gallery);

  const images = gallery.querySelectorAll("img");
  let hoverInterval;

  images.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
      clearInterval(hoverInterval);
      let currentIndex = Array.from(images).findIndex(image => image.classList.contains("active"));
      hoverInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        images.forEach(image => image.classList.remove("active"));
        images[currentIndex].classList.add("active");
        updateIndicator(gallery, currentIndex);
      }, 2000); // Wechselintervall auf 2 Sekunden setzen
    });

    img.addEventListener("mouseout", () => {
      clearInterval(hoverInterval);
    });
  });
});