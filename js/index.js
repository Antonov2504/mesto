import Section from './Section.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';

// Элементы страницы
const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profileJob = page.querySelector('.profile__job');
const buttonEditProfile = page.querySelector('.button_type_edit-profile');
const buttonAddCard = page.querySelector('.button_type_add-card');
// const cardContainer = page.querySelector('.cards');

// Элементы попапа редактирования профиля
const popupEditProfile = {
  el: document.querySelector('.popup_type_edit-profile')
};
popupEditProfile.name = popupEditProfile.el.querySelector('.form__input_el_profile-name');
popupEditProfile.job = popupEditProfile.el.querySelector('.form__input_el_profile-job');
popupEditProfile.form = popupEditProfile.el.querySelector('.form');
popupEditProfile.form.submitButton = popupEditProfile.form.querySelector('.button_type_submit');

// Элементы попапа добавления карточки
const popupAddCard = {
  el: document.querySelector('.popup_type_add-card')
};
popupAddCard.name = popupAddCard.el.querySelector('.form__input_el_card-name');
popupAddCard.link = popupAddCard.el.querySelector('.form__input_el_card-link');
popupAddCard.form = popupAddCard.el.querySelector('.form');

// Элементы попапа открытия карточки
const popupShowCard = {
  el: document.querySelector('.popup_type_show-card'),
};
popupShowCard.image = popupShowCard.el.querySelector('.popup__image');
popupShowCard.imageCaption = popupShowCard.el.querySelector('.popup__caption');

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

// let popupActive = document.querySelector('.popup_opened');    // Открытый на странице popup

// function keydownHandler(event) {
//   if (event.key === "Escape") {
//     closePopup(popupActive)
//   };
// }

// function popupClickHandler(event) {
//   const popup = document.querySelector('.popup_opened');
//   event.stopPropagation();
//   if (event.target.classList.contains('popup') || event.target.classList.contains('button_type_close-popup')) closePopup(popup);
// }

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   popup.addEventListener('mousedown', popupClickHandler);
//   document.addEventListener('keydown', keydownHandler);
//   popupActive = popup;
// }

// function closePopup(popup) {
//   popup.removeEventListener('mousedown', popupClickHandler);
//   document.removeEventListener('keydown', keydownHandler);
//   popup.classList.remove('popup_opened');
// }

function editProfileHandler() {
  formValidationEditProfile.resetForm();
  formValidationEditProfile.setButtonStateEnable();
  popupEditProfile.name.value = profileName.textContent;
  popupEditProfile.job.value = profileJob.textContent;
  popupEditProfile.class.open();
}

function addCardHandler() {
  formValidationAddCard.resetForm();
  popupAddCard.class.open();
}

function popupEditProfileFormHandler(event) {
  event.preventDefault();
  profileName.textContent = popupEditProfile.name.value;
  profileJob.textContent = popupEditProfile.job.value;
  popupEditProfile.class.close();
}

// Создание экземпляра класса Card по submit
function popupAddCardFormHandler(evt) {
  evt.preventDefault();
  const cardContent = {
    name: popupAddCard.name.value,
    link: popupAddCard.link.value
  };
  const card = new Card(cardContent, '#card-template');
  cardContainer.addItem(card.createCard(), true);
  popupAddCard.class.close();
}

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonAddCard.addEventListener('click', addCardHandler);
popupEditProfile.form.addEventListener('submit', popupEditProfileFormHandler);
popupAddCard.form.addEventListener('submit', popupAddCardFormHandler);

// Создание карточек и наполнение контейнера карточек, как экземпляра класса Section
const cardContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template');
    cardContainer.addItem(card.createCard());
  }
}, '.cards');

// Отрисовка карточек по умолчанию
cardContainer.renderItems();

// initialCards.forEach(card => {
//   const cardElement = new Card(card, '#card-template');
//   // cardContainer.append(cardElement.createCard());
//   cardContainer.addItem(cardElement.createCard(), true);
// });

// Инициализация попапов
popupEditProfile.class = new Popup(popupEditProfile.el);
popupAddCard.class = new Popup(popupAddCard.el);
popupShowCard.class = new Popup(popupShowCard.el);

// Для каждой формы создаем экземпляр класса FormValidator и запускаем валидацию формы
const formValidationEditProfile = new FormValidator({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}, popupEditProfile.form);

formValidationEditProfile.enableValidation();

const formValidationAddCard = new FormValidator({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}, popupAddCard.form);

formValidationAddCard.enableValidation();

