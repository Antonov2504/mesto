class Popup {
  constructor(popup) {
    this._element = popup;
    this._clickHandler = this._popupClickHandler.bind(this);
    this._escCloseHandler = this._handleEscClose.bind(this);
  }

  open() {
    this._element.classList.add('popup_opened');
  }

  close() {
    this._element.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(this._element);
      this.removeEventListeners();
    };
  }

  _popupClickHandler(evt) {
    evt.stopPropagation();
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close-popup')) {
      this.removeEventListeners();
      this.close(this._element);
    };
  }

  setEventListeners() {
    this._element.addEventListener('mousedown', this._clickHandler);
    document.addEventListener('keydown', this._escCloseHandler);
  }

  removeEventListeners() {
    this._element.removeEventListener('mousedown', this._clickHandler);
    document.removeEventListener('keydown', this._escCloseHandler);
  }
}

export default Popup;