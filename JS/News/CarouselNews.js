export function carousel() {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  let currentSlide = 0;
  let slideInterval;

  // Función para mostrar la diapositiva actual
  function showSlide() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
    updateIndicators();
  }

  // Función para avanzar a la siguiente diapositiva
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    slides[currentSlide].style.animation = "slide1 0.5s forwards";
    showSlide();
  }

  // Función para retroceder a la diapositiva anterior
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    slides[currentSlide].style.animation = "slide2 0.5s forwards ";
    showSlide();
    resetInterval();
  }

  // Event listeners para los botones de navegación
  prevButton.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
  });

  // Iniciar el carrusel automáticamente
  function startCarousel() {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 20000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startCarousel();
  }

  function updateIndicators() {
    indicatorsContainer.innerHTML = ""; // Limpiar los indicadores antes de actualizarlos
    slides.forEach((_, index) => {
      const indicator = document.createElement("span");
      indicator.classList.add("carousel-indicator");
      if (index === currentSlide) {
        indicator.classList.add("active");
      }
      indicator.addEventListener("click", () => {
        const prevSlideIndex = currentSlide;
        currentSlide = index;
        if (currentSlide > prevSlideIndex) {
          slides[currentSlide].style.animation = "slide1 0.5s forwards";
        } else {
          slides[currentSlide].style.animation = "slide2 0.5s forwards";
        }
        showSlide();
        resetInterval();
      });
      indicatorsContainer.appendChild(indicator);
    });
  }

  // Mostrar la primera diapositiva al cargar la página y comenzar el carrusel
  showSlide();
  startCarousel();
}
