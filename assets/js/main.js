const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
const navLinks = document.querySelectorAll('.nav-links a');

>>>>>>> a763ca9 (Refine frontend assets for accessibility and maintainability)
if (toggle && nav) {
  const setMenuState = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
<<<<<<< HEAD
>>>>>>> d51cd87 (Refactor homepage into structured HTML, CSS, and JS files)
=======
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  toggle.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('open'));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
>>>>>>> a763ca9 (Refine frontend assets for accessibility and maintainability)
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
