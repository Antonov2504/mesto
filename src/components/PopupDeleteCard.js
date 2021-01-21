import Popup from "./Popup.js";

class PopupDeleteCard extends Popup {
  constructor(popup, handleDeleteCard) {
    super(popup);
    this._buttonDelete = this._element.querySelector('.button_type_submit');
    this._handleDeleteCard = handleDeleteCard;
    this._deleteHandler = this._deleteCard.bind(this);
  }

  _deleteCard() {
    this._handleDeleteCard(this._cardDeleteId, this._cardDeleteElement);
  }

  setDeleteCard(cardId, cardElement) {
    this._cardDeleteId = cardId;
    this._cardDeleteElement = cardElement;
  }

  setEventListeners() {
    this._buttonDelete.addEventListener('click', this._deleteHandler);
    super.setEventListeners();
  }

  removeEventListeners() {
    this._buttonDelete.removeEventListener('click', this._deleteHandler);
    super.removeEventListeners();
  }
}

export default PopupDeleteCard;