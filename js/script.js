// Эелементы страницы
const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profileJob = page.querySelector('.profile__job');
const buttonEditProfile = page.querySelector('.button_type_edit-profile');
const buttonAddCard = page.querySelector('.button_type_add-card');
const cardContainer = page.querySelector('.cards');

// Эелементы попапа редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileNameInput = popupEditProfile.querySelector('.popup__item_el_profile-name');
const popupEditProfileJobInput = popupEditProfile.querySelector('.popup__item_el_profile-job');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');

// Эелементы попапа добавления карточки
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardNameInput = popupAddCard.querySelector('.popup__item_el_card-name');
const popupAddCardLinkInput = popupAddCard.querySelector('.popup__item_el_card-link');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');

// Шаблон карточек
const initialCards = [
  {
    name: 'Казань',
    alt: 'Кул-Шариф - главная соборная джума-мечеть республики Татарстан и города Казани.',
    link: './images/Kazan.jpg'
  },
  {
    name: 'Санкт-Петербург',
    alt: 'Исаакиевский собор в лучах солнца, город Санкт-Петербург. Над золотым куполом пролетает стая птиц.',
    link: './images/Saint-Petersburg.jpg'
  },
  {
    name: 'Москва',
    alt: "'Москва-Сити' с высоты птичьего полета. Главный бизнес-центр в Москве.",
    link: './images/Moscow.jpg'
  },
  {
    name: 'Нижний Новгород',
    alt: 'Слияние Оки и Волги. Знаменитая стрелка в городе Нижнем Новгороде. Вид от стен Кремля.',
    link: './images/Nizhny-Novgorod.jpg'
  },
  {
    name: 'Сочи',
    alt: 'Ночной город Сочи с высоты птичьего полета. Сочи - жаркие ночи.',
    link: './images/Sochi.jpg'
  },
  {
    name: 'Череповец',
    alt: 'Камерный театр в городе Череповце.',
    link: './images/Cherepovets.jpg'
  }
];
const cardTemplate = document.querySelector('#card-template').content;

function isValidUrl(url) {
  const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (res === null)
    return false;
  else
    return true;
}

function likeHandler(event) {
  event.target.classList.toggle('button_type_add-like-active');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  const buttonClosePopup = popup.querySelector('.button_type_close-popup');
  buttonClosePopup.addEventListener('click', () => closePopup(popup));
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editProfileHandler() {
  openPopup(popupEditProfile);
  popupEditProfileNameInput.value = profileName.textContent;
  popupEditProfileJobInput.value = profileJob.textContent;
}

function addCard(cardName, cardLink, cardAlt = cardName, isPrepend = true) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');
  const cardElementName = cardElement.querySelector('.card__name');
  const cardElementLike = cardElement.querySelector('.button_type_add-like');

  isValidUrl(cardLink) ? cardElementImage.src = cardLink : cardElementImage.src = 'https://www.russiadiscovery.ru/upload/files/files/Samie-krasivie-mesta-Rossii.jpg';
  cardElementImage.alt = cardAlt;
  cardName ? cardElementName.textContent = cardName : cardElementName.textContent = 'Лучшее место в мире';
  isPrepend ? cardContainer.prepend(cardElement) : cardContainer.append(cardElement);

  cardElementLike.addEventListener('click', likeHandler);
}

function popupEditProfileFormHandler(event) {
  event.preventDefault();
  profileName.textContent = popupEditProfileNameInput.value;
  profileJob.textContent = popupEditProfileJobInput.value;
  closePopup(popupEditProfile);
}

function popupAddCardFormHandler(event) {
  event.preventDefault();
  addCard(popupAddCardNameInput.value, popupAddCardLinkInput.value);
  closePopup(popupAddCard);
  popupAddCardNameInput.value = '';
  popupAddCardLinkInput.value = '';
}

buttonEditProfile.addEventListener('click', editProfileHandler);
buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));
popupEditProfileForm.addEventListener('submit', popupEditProfileFormHandler);
popupAddCardForm.addEventListener('submit', popupAddCardFormHandler);

// Создание карточек по умолчанию
initialCards.forEach(card => addCard(card.name, card.link, card.alt));
