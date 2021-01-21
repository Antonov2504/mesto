import './index.css';

import {
  profileAvatar,
  profileName,
  profileJob,
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
  popupElementDeleteCard,
  popupElementUpdateAvatar,
  popupElementUpdateAvatarForm,
  popupElementUpdateAvatarLink,
  formValidationEditProfileConfig,
  formValidationAddCardConfig,
  formValidationUpdateAvatarConfig,
  textLoading,
  textLoadingComplete
} from '../utils/constants.js'

import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import PopupWithImage from './../components/PopupWithImage.js';
import PopupWithForm from './../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard';
import UserInfo from './../components/UserInfo.js';
import Api from './../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: 'c965dbbc-afa4-4385-8eef-dcc49737a825',
    'Content-Type': 'application/json'
  }
});

// UX Загрузка данных сервера
function renderLoading(isLoading, popup) {
  if (isLoading) {
    popup.setSubmitButtonText(textLoading);
  } else {
    popup.setSubmitButtonText(textLoadingComplete);
  }
}

// Создание экземпляра карточки
function createCard({ data, handleCardClick, handleDeleteCard, handleLikeCard }, cardSelector) {
  const card = new Card({ data, handleCardClick, handleDeleteCard, handleLikeCard }, cardSelector);
  return card;
}

// Обработка лайка
function cardLikeHandler(cardId, likeButton, likeCount) {
  if (!likeButton.classList.contains('button_type_add-like-active')) {
    likeButton.classList.add('button_type_add-like-active');
    api.addLike(cardId)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => {
        likeCount.classList.remove('card__like-count_hidden');
        likeCount.textContent = data.likes.length;
      })
      .catch(err => console.log(err));
  } else {
    likeButton.classList.remove('button_type_add-like-active');
    api.deleteLike(cardId)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => {
        if (data.likes.length) {
          likeCount.classList.remove('card__like-count_hidden');
          likeCount.textContent = data.likes.length
        } else {
          likeCount.classList.add('card__like-count_hidden');
          likeCount.textContent = data.likes.length
        }
      })
      .catch(err => console.log(err));
  }
}

// Обработка клика по аватару
function updateAvatarHandler(evt) {
  evt.stopPropagation();
  formValidationUpdateAvatar.resetForm();
  formValidationUpdateAvatar.setButtonStateEnable();
  popupElementUpdateAvatarLink.value = profileAvatar.src;
  popupWithFormUpdateAvatar.setEventListeners();
  popupWithFormUpdateAvatar.open();
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
  renderLoading(true, popupWithFormEditProfile);
  api.editProfile(user.getUserInfo())
    .finally(renderLoading(false, popupWithFormEditProfile));
}

// Создание экземпляра класса Card по submit
function popupAddCardFormHandler(inputValues) {
  const card = createCard({
    data: {
      owner: {
        id: user.userId
      },
      name: inputValues['card-name'],
      link: inputValues['card-link'],
      likes: [],
    },
    handleCardClick: (card) => {
      popupWithImageShowCard.setEventListeners();
      popupWithImageShowCard.open(card);
    },
    handleDeleteCard: (cardId, cardElement) => {
      popupDeleteCard.setEventListeners();
      popupDeleteCard.open();
      popupDeleteCard.setDeleteCard(cardId, cardElement);
    },
    handleLikeCard: (cardId, likeButton, likeCount) => cardLikeHandler(cardId, likeButton, likeCount)
  }, cardTemplateSelector);
  cardContainer.addItem(card.createCard(), true);
  popupWithFormAddCard.removeEventListeners();
  popupWithFormAddCard.close();
  renderLoading(true, popupWithFormAddCard);
  api.addCard({
    name: inputValues['card-name'],
    link: inputValues['card-link'],
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then(data => {
      card.setCardId(data._id);
    })
    .catch(err => console.log(err))
    .finally(renderLoading(false, popupWithFormAddCard));
}

// Подтвердить удаление карточки
function popupDeleteCardHandler(cardId, cardElement) {
  cardElement.remove();
  popupDeleteCard.close();
  api.deleteCard(cardId);
}

// Обновление аватара по submit
function popupUpdateAvatarHandler() {
  renderLoading(true, popupWithFormUpdateAvatar);
  api.updateAvatar(popupElementUpdateAvatarLink.value)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then(data => profileAvatar.src = data.avatar)
    .catch(err => console.log(err))
    .finally(renderLoading(true, popupWithFormUpdateAvatar));
  popupWithFormUpdateAvatar.removeEventListeners();
  popupWithFormUpdateAvatar.close();
}

// Для каждой формы создаем экземпляр класса FormValidator и запускаем валидацию формы
const formValidationEditProfile = new FormValidator(formValidationEditProfileConfig, popupElementEditProfileForm);
formValidationEditProfile.enableValidation();

const formValidationAddCard = new FormValidator(formValidationAddCardConfig, popupElementAddCardForm);
formValidationAddCard.enableValidation();

const formValidationUpdateAvatar = new FormValidator(formValidationUpdateAvatarConfig, popupElementUpdateAvatarForm);
formValidationUpdateAvatar.enableValidation();

// Инициализация попапов
const popupWithFormEditProfile = new PopupWithForm(popupElementEditProfile, popupEditProfileFormHandler);
const popupWithFormAddCard = new PopupWithForm(popupElementAddCard, popupAddCardFormHandler);
const popupWithImageShowCard = new PopupWithImage(popupElementShowCard);
const popupDeleteCard = new PopupDeleteCard(popupElementDeleteCard, popupDeleteCardHandler);
const popupWithFormUpdateAvatar = new PopupWithForm(popupElementUpdateAvatar, popupUpdateAvatarHandler);

// Создание карточек и наполнение контейнера карточек, как экземпляра класса Section
const cardContainer = new Section({
  renderer: (item) => {
    const card = createCard({
      data: item,
      handleCardClick: (card) => {
        popupWithImageShowCard.setEventListeners();
        popupWithImageShowCard.open(card);
      },
      handleDeleteCard: (cardId, cardElement) => {
        popupDeleteCard.setEventListeners();
        popupDeleteCard.open();
        popupDeleteCard.setDeleteCard(cardId, cardElement);
      },
      handleLikeCard: (cardId, likeButton, likeCount) => cardLikeHandler(cardId, likeButton, likeCount)
    }, cardTemplateSelector);
    cardContainer.addItem(card.createCard(user.userId));
  }
}, cardContainerSelector);

// Отрисовка карточек по умолчанию. Загрузка карточек с сервера
api.getInitialCards()
  .then(cards => cardContainer.renderItems(cards));

// Создание пользователя
const user = new UserInfo({
  userId: '',
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__job'
});

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonAddCard.addEventListener('click', () => {
  formValidationAddCard.resetForm();
  popupWithFormAddCard.setEventListeners();
  popupWithFormAddCard.open();
});
profileAvatar.parentElement.addEventListener('click', updateAvatarHandler)

// Загрузка информации о пользователе с сервера
api.getUserInfo()
  .then((result) => {
    user.userId = result._id;
    profileAvatar.src = result.avatar;
    profileAvatar.alt = result.name;
    profileName.textContent = result.name;
    profileJob.textContent = result.about;
  });
