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
function createCard({ data }, cardSelector) {
  const handleCardClick = (card) => {
    popupWithImageShowCard.setEventListeners();
    popupWithImageShowCard.open(card);
  };

  const handleDeleteCard = (cardId, cardElement) => {
    popupDeleteCard.setEventListeners();
    popupDeleteCard.open();
    popupDeleteCard.setDeleteCard(cardId, cardElement);
  }

  const handleLikeCard = (cardId, likeButton, likeCount) => cardLikeHandler(cardId, likeButton, likeCount);

  const card = new Card({ data, handleCardClick, handleDeleteCard, handleLikeCard }, cardSelector);
  return card;
}

// Обработка лайка
function cardLikeHandler(cardId, likeButton, likeCount) {
  if (!likeButton.classList.contains('button_type_add-like-active')) {
    likeButton.classList.add('button_type_add-like-active');
    api.addLike(cardId)
      .then(data => {
        likeCount.classList.remove('card__like-count_hidden');
        likeCount.textContent = data.likes.length;
      })
      .catch(err => console.log(err));
  } else {
    likeButton.classList.remove('button_type_add-like-active');
    api.deleteLike(cardId)
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
  renderLoading(true, popupWithFormEditProfile);
  api.editProfile({
    name: inputValues['profile-name'],
    job: inputValues['profile-job']
  })
    .then(data => {
      user.setUserInfo(data);
    })
    .finally(() => {
      renderLoading(false, popupWithFormEditProfile);
      popupWithFormEditProfile.close();
    });
}

// Создание экземпляра класса Card по submit
function popupAddCardFormHandler(inputValues) {
  const card = createCard({
    data: {
      owner: {
        _id: user.userId
      },
      name: inputValues['card-name'],
      link: inputValues['card-link'],
      likes: [],
    },
  }, cardTemplateSelector);
  renderLoading(true, popupWithFormAddCard);
  api.addCard({
    name: inputValues['card-name'],
    link: inputValues['card-link'],
  })
    .then(data => {
      card.setCardIds(data.owner._id, data._id);
      cardContainer.addItem(card.createCard(user.userId), true);
    })
    .catch(err => console.log(err))
    .finally(() => {
      renderLoading(false, popupWithFormAddCard);
      popupWithFormAddCard.close();
    });
}

// Подтвердить удаление карточки
function popupDeleteCardHandler(cardId, cardElement) {
  api.deleteCard(cardId)
    .then(res => {
      if (res.ok) {
        cardElement.remove();
        popupDeleteCard.close();
      }
    }
    );
}

// Обновление аватара по submit
function popupUpdateAvatarHandler() {
  renderLoading(true, popupWithFormUpdateAvatar);
  api.updateAvatar(popupElementUpdateAvatarLink.value)
    .then(data => profileAvatar.src = data.avatar)
    .catch(err => console.log(err))
    .finally(() => {
      renderLoading(true, popupWithFormUpdateAvatar)
      popupWithFormUpdateAvatar.close();
    });
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
      data: item
    }, cardTemplateSelector);
    cardContainer.addItem(card.createCard(user.userId));
  }
}, cardContainerSelector);

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
// Отрисовка карточек по умолчанию. Загрузка карточек с сервера
Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([userData, initialCards]) => {
    user.userId = userData._id;
    profileAvatar.src = userData.avatar;
    profileAvatar.alt = userData.name;
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;
    cardContainer.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });