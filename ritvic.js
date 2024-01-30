

let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.getElementById('image-slider');

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const displacement = -currentIndex * 100 + '%';
    slider.style.transform = `translateX(${displacement})`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }


  function toggleElement() {
    const element = document.getElementById('elementToToggle');
    if (element.style.display === 'none') {
      element.style.display = 'block'; // Or 'inline', 'flex', etc. based on your layout needs
    } else {
      element.style.display = 'none';
    }
  }
