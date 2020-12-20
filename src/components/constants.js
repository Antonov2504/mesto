import cherepovetsImage from './../images/Cherepovets.jpg';
import sochiImage from './../images/Sochi.jpg';
import nizhnyNovgorodImage from './../images/Nizhny-Novgorod.jpg';
import moscowImage from './../images/Moscow.jpg';
import saintPetersburgImage from './../images/Saint-Petersburg.jpg';
import kazanImage from './../images/Kazan.jpg';

// Элементы страницы
const buttonEditProfile = document.querySelector('.button_type_edit-profile');
const buttonAddCard = document.querySelector('.button_type_add-card');
const cardTemplateSelector = '#card-template';
const cardContainerSelector = '.cards';

// Элементы попапа редактирования профиля
const popupEditProfile = {
  el: document.querySelector('.popup_type_edit-profile')
};
popupEditProfile.name = popupEditProfile.el.querySelector('.form__input_el_profile-name');
popupEditProfile.job = popupEditProfile.el.querySelector('.form__input_el_profile-job');
popupEditProfile.form = popupEditProfile.el.querySelector('.form');

// Элементы попапа добавления карточки
const popupAddCard = {
  el: document.querySelector('.popup_type_add-card')
};
popupAddCard.form = popupAddCard.el.querySelector('.form');

// Элементы попапа открытия карточки
const popupShowCard = {
  el: document.querySelector('.popup_type_show-card'),
};

// Шаблон карточек
const initialCards = [
  {
    name: 'Череповец',
    alt: 'Камерный театр в городе Череповце.',
    link: cherepovetsImage
  },
  {
    name: 'Сочи',
    alt: 'Ночной город Сочи с высоты птичьего полета. Сочи - жаркие ночи.',
    link: sochiImage
  },
  {
    name: 'Нижний Новгород',
    alt: 'Слияние Оки и Волги. Знаменитая стрелка в городе Нижнем Новгороде. Вид от стен Кремля.',
    link: nizhnyNovgorodImage
  },
  {
    name: 'Москва',
    alt: "'Москва-Сити' с высоты птичьего полета. Главный бизнес-центр в Москве.",
    link: moscowImage
  },
  {
    name: 'Санкт-Петербург',
    alt: 'Исаакиевский собор в лучах солнца, город Санкт-Петербург. Над золотым куполом пролетает стая птиц.',
    link: saintPetersburgImage
  },
  {
    name: 'Казань',
    alt: 'Кул-Шариф - главная соборная джума-мечеть республики Татарстан и города Казани.',
    link: kazanImage
  }
];

// Настройки селекторов и классов для валидации форм
const formValidationConfigEditProfile = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
const formValidationConfigAddCard = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

export {
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
}
