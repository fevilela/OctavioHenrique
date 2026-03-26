const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
