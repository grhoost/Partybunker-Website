document.addEventListener("DOMContentLoaded", function() {
  const imageInput = document.getElementById('ContactForm-images');
  const imageCount = document.getElementById('image-count');
  const imagePreview = document.getElementById('image-preview');
  const submitButton = document.getElementById('submit-button');
  let selectedImages = [];

  imageInput.addEventListener('change', function() {
      const files = Array.from(imageInput.files);
      files.forEach(file => {
          selectedImages.push(file);
      });
      imageCount.textContent = `(${selectedImages.length}/4) Bilder`;

      // Clear previous previews
      imagePreview.innerHTML = '';

      // Display image previews
      selectedImages.forEach((file, index) => {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          img.classList.add('preview-image');
          imagePreview.appendChild(img);
      });

      // Reset the input so the same file can be selected again
      imageInput.value = '';

      if (selectedImages.length >= 4) {
          submitButton.disabled = false;
      } else {
          submitButton.disabled = true;
      }
  });
});