const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

if (toggle && nav) {
  const setMenuState = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  toggle.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('open'));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const carousel = document.querySelector('[data-carousel="resultados"]');

if (carousel) {
  const track = carousel.querySelector('.before-after-grid');
  const slides = Array.from(carousel.querySelectorAll('.before-after-card'));
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  if (track && slides.length) {
    let currentIndex = 0;

    const dots = slides.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Ir para resultado ${index + 1}`);
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer?.appendChild(dot);
      return dot;
    });

    const updateUi = () => {
      dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === currentIndex);
        dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
      });

      if (prevButton) prevButton.disabled = currentIndex === 0;
      if (nextButton) nextButton.disabled = currentIndex === slides.length - 1;
    };

    const goToSlide = (index) => {
      currentIndex = Math.max(0, Math.min(index, slides.length - 1));
      slides[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      updateUi();
    };

    prevButton?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton?.addEventListener('click', () => goToSlide(currentIndex + 1));

    track.addEventListener('scroll', () => {
      const slideWidth = track.clientWidth;
      if (!slideWidth) return;
      const newIndex = Math.round(track.scrollLeft / slideWidth);
      if (newIndex !== currentIndex) {
        currentIndex = Math.max(0, Math.min(newIndex, slides.length - 1));
        updateUi();
      }
    }, { passive: true });

    updateUi();
  }
}
