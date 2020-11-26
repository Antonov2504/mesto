// Элементы страницы
const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profileJob = page.querySelector('.profile__job');
const buttonEditProfile = page.querySelector('.button_type_edit-profile');
const buttonAddCard = page.querySelector('.button_type_add-card');
const cardContainer = page.querySelector('.cards');

// Элементы попапа редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileNameInput = popupEditProfile.querySelector('.form__input_el_profile-name');
const popupEditProfileJobInput = popupEditProfile.querySelector('.form__input_el_profile-job');
const popupEditProfileForm = popupEditProfile.querySelector('.form');
const popupEditProfileFormSubmitButton = popupEditProfileForm.querySelector('.button_type_submit');

// Элементы попапа добавления карточки
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardNameInput = popupAddCard.querySelector('.form__input_el_card-name');
const popupAddCardLinkInput = popupAddCard.querySelector('.form__input_el_card-link');
const popupAddCardForm = popupAddCard.querySelector('.form');

// Элементы попапа открытия карточки
const popupShowCard = document.querySelector('.popup_type_show-card');
const popupShowCardImage = popupShowCard.querySelector('.popup__image');
const popupShowCardName = popupShowCard.querySelector('.popup__caption');

// Открытый на странице popup
let popupActive = document.querySelector('.popup_opened');

// Шаблон карточек
const initialCards = [
  {
    name: 'Череповец',
    alt: 'Камерный театр в городе Череповце.',
    link: './images/Cherepovets.jpg'
  },
  {
    name: 'Сочи',
    alt: 'Ночной город Сочи с высоты птичьего полета. Сочи - жаркие ночи.',
    link: './images/Sochi.jpg'
  },
  {
    name: 'Нижний Новгород',
    alt: 'Слияние Оки и Волги. Знаменитая стрелка в городе Нижнем Новгороде. Вид от стен Кремля.',
    link: './images/Nizhny-Novgorod.jpg'
  },
  {
    name: 'Москва',
    alt: "'Москва-Сити' с высоты птичьего полета. Главный бизнес-центр в Москве.",
    link: './images/Moscow.jpg'
  },
  {
    name: 'Санкт-Петербург',
    alt: 'Исаакиевский собор в лучах солнца, город Санкт-Петербург. Над золотым куполом пролетает стая птиц.',
    link: './images/Saint-Petersburg.jpg'
  },
  {
    name: 'Казань',
    alt: 'Кул-Шариф - главная соборная джума-мечеть республики Татарстан и города Казани.',
    link: './images/Kazan.jpg'
  }
];
const cardTemplate = document.querySelector('#card-template').content;

function likeHandler(event) {
  event.target.classList.toggle('button_type_add-like-active');
}

function removeHandler(event) {
  event.target.closest('.card').remove();
}

function imageHandler(event) {
  const card = event.target.closest('.card');
  const cardName = card.querySelector('.card__name');
  const cardImage = card.querySelector('.card__image');

  popupShowCardImage.src = cardImage.src;
  popupShowCardImage.alt = cardImage.alt;
  popupShowCardName.textContent = cardName.textContent;
  openPopup(popupShowCard);
}

function popupClickHandler(event) {
  const popup = page.querySelector('.popup_opened');
  event.stopPropagation();
  if (event.target.classList.contains('popup') || event.target.classList.contains('button_type_close-popup')) closePopup(popup);
}

function keydownHandler(event) {
  const popupOpened = page.querySelector('.popup_opened');
  if (popupOpened && event.key === "Escape") closePopup(popupOpened);
}

function setButtonState(buttonElement, buttonState) {
  if (buttonState) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('button_disabled');
  } else {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('button_disabled');
  }
}

function resetPopupForm(popupForm) {
  const inputList = Array.from(popupForm.querySelectorAll(`.${objSettings.inputErrorClass}`));
  const errorList = Array.from(popupForm.querySelectorAll(`.${objSettings.errorClass}`));
  // console.log(errorList, objSettings.errorClass);
  // console.log(popupForm.querySelector(`.${objSettings.errorClass}`));
  inputList.forEach(inputElement => inputElement.classList.remove(objSettings.inputErrorClass));
  errorList.forEach(error => error.classList.remove(objSettings.errorClass));
  popupForm.reset();
}

// Функция openPopup() выполняет только одну задачу - открывает popup. Данная функция не предназначена для заполнения полей формы.
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', popupClickHandler);
  window.addEventListener('keydown', keydownHandler);
  popupActive = popup;
}

function closePopup(popup) {
  const popupForm = popup.querySelector(objSettings.formSelector);
  popup.removeEventListener('mousedown', popupClickHandler);
  window.removeEventListener('keydown', keydownHandler);
  if (popupForm) resetPopupForm(popupForm);
  popup.classList.remove('popup_opened');
}

function editProfileHandler() {
  openPopup(popupEditProfile);
  popupEditProfileNameInput.value = profileName.textContent;
  popupEditProfileJobInput.value = profileJob.textContent;
  setButtonState(popupActive.querySelector('.button_type_submit'), true);
}

function addCardHandler() {
  openPopup(popupAddCard);
  setButtonState(popupActive.querySelector('.button_type_submit'), false);
  // popupEditProfileFormSubmitButton.removeAttribute('disabled');
  // popupEditProfileFormSubmitButton.classList.remove('button_disabled');
}

function createCard(cardName, cardLink, cardAlt = cardName) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');
  const cardElementName = cardElement.querySelector('.card__name');
  const cardElementTrash = cardElement.querySelector('.button_type_remove-card');
  const cardElementLike = cardElement.querySelector('.button_type_add-like');

  cardElementImage.src = cardLink;
  cardElementImage.alt = cardAlt;
  cardElementName.textContent = cardName || 'Лучшее место в мире';

  cardElementTrash.addEventListener('click', removeHandler);
  cardElementImage.addEventListener('click', imageHandler);
  cardElementLike.addEventListener('click', likeHandler);
  return cardElement;
}

function addCard(cardContainer, card, isPrepend = true) {
  isPrepend ? cardContainer.prepend(card) : cardContainer.append(card);
}

function popupEditProfileFormHandler(event) {
  event.preventDefault();
  profileName.textContent = popupEditProfileNameInput.value;
  profileJob.textContent = popupEditProfileJobInput.value;

  closePopup(popupEditProfile);
}

function popupAddCardFormHandler(event) {
  event.preventDefault();
  addCard(cardContainer, createCard(popupAddCardNameInput.value, popupAddCardLinkInput.value));
  closePopup(popupAddCard);
  event.target.reset();
}

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonAddCard.addEventListener('click', addCardHandler);
popupEditProfileForm.addEventListener('submit', popupEditProfileFormHandler);
popupAddCardForm.addEventListener('submit', popupAddCardFormHandler);

// Создание карточек по умолчанию
initialCards.forEach(card => addCard(cardContainer, createCard(card.name, card.link, card.alt), false));
