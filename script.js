let page = document.querySelector('.page');
let profileName = page.querySelector('.profile__name');
let profileJob = page.querySelector('.profile__job');
let buttonEditProfile = page.querySelector('.button_type_edit-profile');
let formElement = page.querySelector('.popup__form');

let popupEditProfile = document.querySelector('.popup');
let buttonClosePopupEditProfile = popupEditProfile.querySelector('.button_type_close-popup');
let popupEditProfileNameInput = popupEditProfile.querySelector('.popup__item_el_name');
let popupEditProfileJobInput = popupEditProfile.querySelector('.popup__item_el_job');

function closePopupEditProfileHandler() {
  popupEditProfile.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = popupEditProfileNameInput.value;
  profileJob.textContent = popupEditProfileJobInput.value;
  closePopupEditProfileHandler();
}

function editProfileHandler() {
  popupEditProfile.classList.add('popup_opened');
  popupEditProfileNameInput.value = profileName.textContent;
  popupEditProfileJobInput.value = profileJob.textContent;
}

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonClosePopupEditProfile.addEventListener('click', closePopupEditProfileHandler);
formElement.addEventListener('submit', formSubmitHandler)
