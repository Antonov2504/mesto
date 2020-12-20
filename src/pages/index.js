import './index.css';

import {
  buttonEditProfile,
  buttonAddCard,
  cardContainerSelector,
  cardTemplateSelector,
  popupEditProfile,
  popupAddCard,
  popupShowCard,
  initialCards,
  formValidationConfigEditProfile,
  formValidationConfigAddCard
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
  const card = createCard({
    data: {
      name: inputValues['card-name'],
      link: inputValues['card-link']
    },
    handleCardClick: (card) => popupShowCard.class.open(card)
  }, cardTemplateSelector);
  // cardContainer.addItem(card.createCard(), true);
  cardContainer.addItem(card.createCard());
  popupAddCard.class.close();
}

// Для каждой формы создаем экземпляр класса FormValidator и запускаем валидацию формы
const formValidationEditProfile = new FormValidator(formValidationConfigEditProfile, popupEditProfile.form);
formValidationEditProfile.enableValidation();

const formValidationAddCard = new FormValidator(formValidationConfigAddCard, popupAddCard.form);
formValidationAddCard.enableValidation();

// Инициализация попапов
popupEditProfile.class = new PopupWithForm(popupEditProfile.el, popupEditProfileFormHandler, formValidationEditProfile.resetForm.bind(formValidationEditProfile));
popupAddCard.class = new PopupWithForm(popupAddCard.el, popupAddCardFormHandler, formValidationAddCard.resetForm.bind(formValidationAddCard));
popupShowCard.class = new PopupWithImage(popupShowCard.el);

// Создание карточек и наполнение контейнера карточек, как экземпляра класса Section
const cardContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard({
      data: item,
      handleCardClick: (card) => popupShowCard.class.open(card)
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
buttonAddCard.addEventListener('click', popupAddCard.class.open.bind(popupAddCard.class));
