import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit, handleFormReset) {
    super(popup);
    this._formElement = this._element.querySelector('.form');
    this._handleFormSubmit = handleFormSubmit;
    this._handleFormReset = handleFormReset;
  }

  close() {
    super.close();
    this._handleFormReset();
  }

  getInputValues = () => {
    this._inputValues = {};
    Array.from(this._formElement.elements).forEach(element => {
      if (element.classList.contains('form__input')) {
        this._inputValues[element.name] = element.value;
      }
    })
    return this._inputValues;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._formElement.addEventListener('submit', this._handleFormSubmit);
  }
}

export default PopupWithForm;
