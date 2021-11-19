const mainNav = document.querySelector('.main-nav');
const navToogle = mainNav.querySelector('.main-nav__toggle');

navToogle.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--open');
  navToogle.classList.toggle('toggle--open');
});
