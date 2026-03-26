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
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
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
  });
}

=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
