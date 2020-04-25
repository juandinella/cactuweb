const menu = () => {
  const toggle = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.menu-close');
  const body = document.querySelector('body');

  toggle.addEventListener('click', () => {
    overlay.classList.toggle('is-open');
    menu.classList.toggle('is-open');
    body.classList.toggle('is-block');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('is-block');
  });
};

export default menu;
