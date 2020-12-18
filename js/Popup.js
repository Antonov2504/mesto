class Popup {
  constructor(popup) {
    this._element = popup;
  }

  open() {
    this._element.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._element.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close(this._element);
    };
  }

  _popupClickHandler = (evt) => {
    evt.stopPropagation();
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close-popup')) this.close(this._element);
  }

  _setEventListeners() {
    this._element.addEventListener('mousedown', this._popupClickHandler);
    document.addEventListener('keydown', this._handleEscClose);
  }

  _removeEventListeners() {
    this._element.removeEventListener('mousedown', this._popupClickHandler);
    document.removeEventListener('keydown', this._handleEscClose);
  }
}

export default Popup;