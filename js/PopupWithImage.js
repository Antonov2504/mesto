import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._element.querySelector('.popup__image');
    this._imageCaption = this._element.querySelector('.popup__caption');
  }

  open(card) {
    const cardImage = card.querySelector('.card__image');
    const cardName = card.querySelector('.card__name');
    this._image.src = cardImage.src;
    this._image.alt = cardImage.alt;
    this._imageCaption.textContent = cardName.textContent;
    super.open();
  }
}

export default PopupWithImage;