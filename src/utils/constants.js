import cherepovetsImage from './../images/Cherepovets.jpg';
import sochiImage from './../images/Sochi.jpg';
import nizhnyNovgorodImage from './../images/Nizhny-Novgorod.jpg';
import moscowImage from './../images/Moscow.jpg';
import saintPetersburgImage from './../images/Saint-Petersburg.jpg';
import kazanImage from './../images/Kazan.jpg';

const textLoading = 'Сохранение...';
const textLoadingComplete = 'Сохранить';

// Элементы страницы
const profileAvatar = document.querySelector('.profile__avatar-img');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonEditProfile = document.querySelector('.button_type_edit-profile');
const buttonAddCard = document.querySelector('.button_type_add-card');
const cardTemplateSelector = '#card-template';
const cardContainerSelector = '.cards';

// Элементы попапа редактирования профиля
const popupElementEditProfile = document.querySelector('.popup_type_edit-profile');
const popupElementEditProfileName = popupElementEditProfile.querySelector('.form__input_el_profile-name');
const popupElementEditProfileJob = popupElementEditProfile.querySelector('.form__input_el_profile-job');
const popupElementEditProfileForm = popupElementEditProfile.querySelector('.form');

// Элементы попапа добавления карточки
const popupElementAddCard = document.querySelector('.popup_type_add-card');
const popupElementAddCardForm = popupElementAddCard.querySelector('.form');

// Элементы попапа открытия карточки
const popupElementShowCard = document.querySelector('.popup_type_show-card');

// Элементы попапа удаления карточки
const popupElementDeleteCard = document.querySelector('.popup_type_delete-card');

// Элементы попапа обновления аватара
const popupElementUpdateAvatar = document.querySelector('.popup_type_update-avatar');
const popupElementUpdateAvatarForm = popupElementUpdateAvatar.querySelector('.form');
const popupElementUpdateAvatarLink = popupElementUpdateAvatar.querySelector('.form__input_el_avatar-link');

// Шаблон карточек
const initialCards = [];
//   const initialCards = [
//   {
//     name: 'Череповец',
//     alt: 'Камерный театр в городе Череповце.',
//     link: cherepovetsImage
//   },
//   {
//     name: 'Сочи',
//     alt: 'Ночной город Сочи с высоты птичьего полета. Сочи - жаркие ночи.',
//     link: sochiImage
//   },
//   {
//     name: 'Нижний Новгород',
//     alt: 'Слияние Оки и Волги. Знаменитая стрелка в городе Нижнем Новгороде. Вид от стен Кремля.',
//     link: nizhnyNovgorodImage
//   },
//   {
//     name: 'Москва',
//     alt: "'Москва-Сити' с высоты птичьего полета. Главный бизнес-центр в Москве.",
//     link: moscowImage
//   },
//   {
//     name: 'Санкт-Петербург',
//     alt: 'Исаакиевский собор в лучах солнца, город Санкт-Петербург. Над золотым куполом пролетает стая птиц.',
//     link: saintPetersburgImage
//   },
//   {
//     name: 'Казань',
//     alt: 'Кул-Шариф - главная соборная джума-мечеть республики Татарстан и города Казани.',
//     link: kazanImage
//   }
// ];

// Настройки селекторов и классов для валидации форм
const formValidationEditProfileConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
const formValidationAddCardConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const formValidationUpdateAvatarConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

export {
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
  initialCards,
  formValidationEditProfileConfig,
  formValidationAddCardConfig,
  formValidationUpdateAvatarConfig,
  textLoading,
  textLoadingComplete
}
