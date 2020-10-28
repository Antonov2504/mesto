let page = document.querySelector('.page');
let popupEditProfile = document.querySelector('.popup');
let popupEditProfileNameInput = popupEditProfile.querySelector('.popup__item_el_name');
let popupEditProfileJobInput = document.querySelector('.popup__item_el_job');
let buttonEditProfile = document.querySelector('.button_type_edit-profile');
let buttonClosePopupEditProfile = document.querySelector('.button_type_close-popup');

function buttonEditProfileHandler() {
  popupEditProfile.classList.add('popup_opened');
  page.classList.add('page_overflow_hidden');
}

function buttonClosePopupEditProfileHandler() {
  popupEditProfile.classList.remove('popup_opened');
  page.classList.remove('page_overflow_hidden');
}

buttonEditProfile.addEventListener('click', buttonEditProfileHandler);
buttonClosePopupEditProfile.addEventListener('click', buttonClosePopupEditProfileHandler);
