const addProfile = document.querySelector('.add-profile');
const btnAddProfile = addProfile.querySelector('.add-profile__btn');
const modalBusiness = addProfile.querySelector('.modal-business');
const closeModalBusiness = addProfile.querySelector('.modal-business__btn');

btnAddProfile.addEventListener('click', () => {
  modalBusiness.classList.remove('hidden');
});

closeModalBusiness.addEventListener('click', () => {
  modalBusiness.classList.add('hidden');
});


