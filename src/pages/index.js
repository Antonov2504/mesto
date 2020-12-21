import './index.css';

import {
  buttonEditProfile,
  buttonAddCard,
  cardContainerSelector,
  cardTemplateSelector,
  popupElementEditProfile,
  popupElementEditProfileName,
  popupElementEditProfileJob,
  popupElementEditProfileForm,
  popupElementAddCard,
  popupElementAddCardForm,
  popupElementShowCard,
  initialCards,
  formValidationEditProfileConfig,
  formValidationAddCardConfig
} from './../components/constants.js'

import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import PopupWithImage from './../components/PopupWithImage.js';
import PopupWithForm from './../components/PopupWithForm.js';
import UserInfo from './../components/UserInfo.js';

// Создание экземпляра карточки
function createCard({ data, handleCardClick }, cardSelector) {
  const card = new Card({ data, handleCardClick }, cardSelector);
  return card;
}

// Обработка клика по кнопке редактирования профиля
function editProfileHandler() {
  formValidationEditProfile.resetForm();
  formValidationEditProfile.setButtonStateEnable();
  const { name: userName, job: userJob } = user.getUserInfo();
  popupElementEditProfileName.value = userName;
  popupElementEditProfileJob.value = userJob;
  popupWithFormEditProfile.setEventListeners();
  popupWithFormEditProfile.open();
}

// Обработка формы изменения профиля по submit
function popupEditProfileFormHandler(inputValues) {
  user.setUserInfo(inputValues);
  popupWithFormEditProfile.removeEventListeners();
  popupWithFormEditProfile.close();
}

// Создание экземпляра класса Card по submit
function popupAddCardFormHandler(inputValues) {
  const card = createCard({
    data: {
      name: inputValues['card-name'],
      link: inputValues['card-link']
    },
    handleCardClick: (card) => {
      popupWithImageShowCard.setEventListeners();
      popupWithImageShowCard.open(card);
    }
  }, cardTemplateSelector);
  // cardContainer.addItem(card.createCard(), true);
  cardContainer.addItem(card.createCard());
  popupWithFormAddCard.removeEventListeners();
  popupWithFormAddCard.close();
}

// Для каждой формы создаем экземпляр класса FormValidator и запускаем валидацию формы
const formValidationEditProfile = new FormValidator(formValidationEditProfileConfig, popupElementEditProfileForm);
formValidationEditProfile.enableValidation();

const formValidationAddCard = new FormValidator(formValidationAddCardConfig, popupElementAddCardForm);
formValidationAddCard.enableValidation();

// Инициализация попапов
const popupWithFormEditProfile = new PopupWithForm(popupElementEditProfile, popupEditProfileFormHandler);
const popupWithFormAddCard = new PopupWithForm(popupElementAddCard, popupAddCardFormHandler);
const popupWithImageShowCard = new PopupWithImage(popupElementShowCard);

// Создание карточек и наполнение контейнера карточек, как экземпляра класса Section
const cardContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard({
      data: item,
      handleCardClick: (card) => {
        popupWithImageShowCard.setEventListeners();
        popupWithImageShowCard.open(card);
      }
    }, cardTemplateSelector);
    cardContainer.addItem(card.createCard());
  }
}, cardContainerSelector);

// Отрисовка карточек по умолчанию
cardContainer.renderItems();

// Создание пользователя
const user = new UserInfo({
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__job'
});

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonAddCard.addEventListener('click', () => {
  formValidationAddCard.resetForm();
  popupWithFormAddCard.setEventListeners();
  popupWithFormAddCard.open();
});
