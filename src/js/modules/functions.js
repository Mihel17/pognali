const spollers = document.querySelector('.js-spollers');
const spoller1 = spollers.querySelector('.js-spoller-1');
const spollerHidden1 = spollers.querySelector('.js-spoller-hidden-1');
const spoller2 = spollers.querySelector('.js-spoller-2');
const spollerHidden2 = spollers.querySelector('.js-spoller-hidden-2');
const spoller3 = spollers.querySelector('.js-spoller-3');
const spollerHidden3 = spollers.querySelector('.js-spoller-hidden-3');
const spoller4 = spollers.querySelector('.js-spoller-4');
const spollerHidden4 = spollers.querySelector('.js-spoller-hidden-4');

spoller1.addEventListener('click', () => {
  spollerHidden1.classList.toggle('js-spoller-hidden');
});
spoller2.addEventListener('click', () => {
  spollerHidden2.classList.toggle('js-spoller-hidden');
});
spoller3.addEventListener('click', () => {
  spollerHidden3.classList.toggle('js-spoller-hidden');
});
spoller4.addEventListener('click', () => {
  spollerHidden4.classList.toggle('js-spoller-hidden');
});

