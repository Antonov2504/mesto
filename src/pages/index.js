import './index.css';
import { buttonEditProfile, buttonAddCard, popupEditProfile, popupAddCard, popupShowCard, initialCards } from './../components/constants.js'
import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import PopupWithImage from './../components/PopupWithImage.js';
import PopupWithForm from './../components/PopupWithForm.js';
import UserInfo from './../components/UserInfo.js';

// Обработка клика по кнопке редактирования профиля
function editProfileHandler() {
  formValidationEditProfile.setButtonStateEnable();
  const { name: userName, job: userJob } = user.getUserInfo();
  popupEditProfile.name.value = userName;
  popupEditProfile.job.value = userJob;
  popupEditProfile.class.open();
}

// Обработка формы изменения профиля по submit
function popupEditProfileFormHandler(inputValues) {
  user.setUserInfo(inputValues);
  popupEditProfile.class.close();
}

// Создание экземпляра класса Card по submit
function popupAddCardFormHandler(inputValues) {
  const card = new Card({
    data: {
      name: inputValues['card-name'],
      link: inputValues['card-link']
    },
    handleCardClick: (card) => popupShowCard.class.open(card)
  }, '#card-template');
  cardContainer.addItem(card.createCard(), true);
  popupAddCard.class.close();
}

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

// Инициализация попапов
popupEditProfile.class = new PopupWithForm(popupEditProfile.el, popupEditProfileFormHandler, formValidationEditProfile.resetForm.bind(formValidationEditProfile));
popupAddCard.class = new PopupWithForm(popupAddCard.el, popupAddCardFormHandler, formValidationAddCard.resetForm.bind(formValidationAddCard));
popupShowCard.class = new PopupWithImage(popupShowCard.el);

// Создание карточек и наполнение контейнера карточек, как экземпляра класса Section
const cardContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (card) => popupShowCard.class.open(card)
    }, '#card-template');
    cardContainer.addItem(card.createCard());
  }
}, '.cards');

// Отрисовка карточек по умолчанию
cardContainer.renderItems();

// Создание пользователя
const user = new UserInfo({
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__job'
});

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonAddCard.addEventListener('click', popupAddCard.class.open.bind(popupAddCard.class));
