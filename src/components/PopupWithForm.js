import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._formElement = this._element.querySelector('.form');
    this._formSubmitButton = this._formElement.querySelector('.button_type_submit');
    this._handleFormSubmit = handleFormSubmit;
    this._submitHandler = this._handleFormElementSubmit.bind(this);
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

  setEventListeners() {
    this._formElement.addEventListener('submit', this._submitHandler);
    super.setEventListeners();
  }

  _removeEventListeners() {
    this._formElement.removeEventListener('submit', this._submitHandler);
    super._removeEventListeners();
  }

  setSubmitButtonText(text) {
    this._formSubmitButton.textContent = text;
  }
}

export default PopupWithForm;
