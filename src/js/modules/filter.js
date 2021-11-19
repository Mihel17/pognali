const filter = document.querySelector('.filter');
const filterOpen = filter.querySelector('.filter__open-btn');
const filterOpenAll = filter.querySelector('.filter__open-all');
const Openfilter = filter.querySelector('.filter__title');
const filterClose = filter.querySelector('.filter__close');

filterOpen.addEventListener('click', () => {
  filter.classList.toggle('filter--opened');
});

filterOpenAll.addEventListener('click', () => {
  filter.classList.toggle('filter--opened');
});

Openfilter.addEventListener('click', () => {
  filter.classList.toggle('filter--opened');
});

filterClose.addEventListener('click', () => {
  filter.classList.toggle('filter--opened');
});
