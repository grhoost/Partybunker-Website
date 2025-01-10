document.addEventListener("DOMContentLoaded", function() {
    const imageInput = document.getElementById('ContactForm-images');
    const imageCount = document.getElementById('image-count');
    const imagePreview = document.getElementById('image-preview');
    const submitButton = document.getElementById('submit-button');
  
    imageInput.addEventListener('change', function() {
      const files = imageInput.files;
      const fileCount = files.length;
      imageCount.textContent = `Mind (${fileCount}/4) Bilder`;
  
      // Clear previous previews
      imagePreview.innerHTML = '';
  
      // Display image previews
      for (let i = 0; i < fileCount; i++) {
        const file = files[i];
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.classList.add('preview-image');
        imagePreview.appendChild(img);
      }
  
      if (fileCount >= 4) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
});