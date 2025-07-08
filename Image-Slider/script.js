let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


// setInterval(nextSlide,3000); // slideshow 





// This function makes only one image visible at a time.
// slides is a list of all your images.
// First, it hides all images by removing the "active" class.
// Then, it shows the image at the given index by adding "active" back only to that one.

// Moves to the previous image.
// currentSlide - 1 goes back one step.
// The + slides.length ensures it doesn’t go negative (e.g., -1).
// Again, % slides.length makes sure it wraps around to the last image when going back from the first one.