import { openPopup } from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._alt = data.alt;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  // Метод _getTemplate() создает клон template карточки
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  // Метод createCard() создает готовую карточку с контентом и слушателями событий
  createCard = () => {
    this._element = this._getTemplate();

    this._element.image = this._element.querySelector('.card__image');
    this._element.name = this._element.querySelector('.card__name');
    this._element.trash = this._element.querySelector('.button_type_remove-card');
    this._element.like = this._element.querySelector('.button_type_add-like');

    this._element.image.src = this._link;
    this._element.image.alt = this._alt || this._name;
    this._element.name.textContent = this._name || 'Лучшее место в мире';

    this._setEventListeners();

    return this._element;
  }

  // Метод _setEventListeners() задает слушателей событий
  _setEventListeners = () => {
    this._element.trash.addEventListener('click', (evt) => {
      this._removeHandler(evt);
    });
    this._element.image.addEventListener('click', () => {
      this._showImage();
    });
    this._element.like.addEventListener('click', (evt) => {
      this._likeHandler(evt);
    });
  }

  // Метод _removeHandler() удаляет карточку из DOM
  _removeHandler = (evt) => {
    evt.target.closest('.card').remove();
  }

  // Метод _showImage() вызывает попап с изображением карточки
  _showImage = () => {
    const popup = document.querySelector('.popup_type_show-card');
    const image = popup.querySelector('.popup__image');
    const imageCaption = popup.querySelector('.popup__caption');
    image.src = this._element.image.src;
    image.alt = this._element.image.alt;
    imageCaption.textContent = this._element.name.textContent;
    openPopup(popup);
  }

  // Метод _likeHandler() управляет состоянием лайка
  _likeHandler = (evt) => {
    evt.target.classList.toggle('button_type_add-like-active');
  }
}
