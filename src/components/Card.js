export default class Card {
  constructor({ data, handleCardClick, handleDeleteCard, handleLikeCard }, cardSelector) {
    this._data = data;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._name = data.name;
    this._alt = data.alt;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
  }

  // Метод _getTemplate() создает клон template карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  // Метод createCard() создает готовую карточку с контентом и слушателями событий
  createCard(userId) {
    this._element = this._getTemplate();

    this._element.image = this._element.querySelector('.card__image');
    this._element.name = this._element.querySelector('.card__name');
    this._element.trash = this._element.querySelector('.button_type_remove-card');
    if (this._ownerId !== userId) this._element.trash.remove();
    this._element.like = this._element.querySelector('.button_type_add-like');
    if (this._likes.some(profile => profile._id === userId)) {
      this._element.like.classList.add('button_type_add-like-active');
    }
    this._element.likeCount = this._element.querySelector('.card__like-count');

    this._element.image.src = this._link;
    this._element.image.alt = this._alt || this._name;
    this._element.name.textContent = this._name || 'Лучшее место в мире';

    if (this._likes.length) {
      this._element.likeCount.textContent = this._likes.length;
    }

    this._setEventListeners();

    return this._element;
  }

  // Метод _setEventListeners() задает слушателей событий
  _setEventListeners() {
    this._element.trash.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId, this._element);
    });
    this._element.image.addEventListener('click', () => {
      this._handleCardClick(this._element);
    });
    this._element.like.addEventListener('click', (evt) => {
      this._handleLikeCard(this._cardId, evt.target, this._element.likeCount);
    });
  }

  setCardId(cardId) {
    this._cardId = cardId;
  }
}
