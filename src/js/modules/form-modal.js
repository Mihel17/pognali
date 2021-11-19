const addCountry = document.querySelector('.select-country-js');
const addCountryBtn = addCountry.querySelector('.select-country__edit');
const deleteCountry = addCountry.querySelector('.select-country__delete');
const addCountrySelect = addCountry.querySelector('.select-country__icon-add');
const addCountryModal = addCountry.querySelector('.country-filter');
const closeCountryModal = addCountryModal.querySelector('.country-filter__close');

addCountryBtn.addEventListener('click', () => {
  addCountryModal.classList.remove('hidden');
  deleteCountry.classList.add('hidden');
});

addCountrySelect.addEventListener('click', () => {
  addCountryModal.classList.remove('hidden');
  deleteCountry.classList.add('hidden');
});

closeCountryModal.addEventListener('click', () => {
  addCountryModal.classList.add('hidden');
  deleteCountry.classList.remove('hidden');
});
