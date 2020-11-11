// Эелементы страницы
const page = document.querySelector('.page');
const profileName = page.querySelector('.profile__name');
const profileJob = page.querySelector('.profile__job');
const buttonEditProfile = page.querySelector('.button_type_edit-profile');
const cardContainer = page.querySelector('.cards');
const formElement = page.querySelector('.popup__form');


// Эелементы попапа
const popupEditProfile = document.querySelector('.popup');
const buttonClosePopupEditProfile = popupEditProfile.querySelector('.button_type_close-popup');
const popupEditProfileNameInput = popupEditProfile.querySelector('.popup__item_el_profile-name');
const popupEditProfileJobInput = popupEditProfile.querySelector('.popup__item_el_profile-job');

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

function closePopupEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}

function formSubmit(event) {
  event.preventDefault();
  profileName.textContent = popupEditProfileNameInput.value;
  profileJob.textContent = popupEditProfileJobInput.value;
  closePopupEditProfile();
}

function editProfile() {
  popupEditProfile.classList.add('popup_opened');
  popupEditProfileNameInput.value = profileName.textContent;
  popupEditProfileJobInput.value = profileJob.textContent;
}

buttonEditProfile.addEventListener('click', editProfile);
buttonClosePopupEditProfile.addEventListener('click', closePopupEditProfile);
formElement.addEventListener('submit', formSubmit);

// Создание карточек по умолчанию
initialCards.forEach(card => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.alt;
  cardElement.querySelector('.card__name').textContent = card.name;
  cardContainer.append(cardElement);
});
