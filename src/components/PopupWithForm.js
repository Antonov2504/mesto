import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit, handleFormReset) {
    super(popup);
    this._formElement = this._element.querySelector('.form');
    this._handleFormSubmit = handleFormSubmit;
    this._handleFormReset = handleFormReset;
    this._submitHandler = this._handleFormElementSubmit.bind(this);
  }

  close() {
    super.close();
    this._handleFormReset();
  }

  _handleFormElementSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }

  _getInputValues() {
    this._inputValues = {};
    Array.from(this._formElement.elements).forEach(element => {
      if (element.classList.contains('form__input')) {
        this._inputValues[element.name] = element.value;
      }
    })
    return this._inputValues;
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', this._submitHandler);
    super._setEventListeners();
  }

  _removeEventListeners() {
    this._formElement.removeEventListener('submit', this._submitHandler);
    super._removeEventListeners();
  }
}

export default PopupWithForm;
