const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
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
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
>>>>>>> d51cd87 (Refactor homepage into structured HTML, CSS, and JS files)
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
