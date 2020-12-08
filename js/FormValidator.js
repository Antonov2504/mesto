export default class FormValidator {
  constructor(dataSettings, formElement) {
    this._element = formElement;
    this._settings = Object.assign({}, dataSettings);                                                     // Глобальный объект с настройками классов и селекторов форм и полей ввода
    this._inputList = Array.from(this._element.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._element.querySelector(this._settings.submitButtonSelector);
  }

  // Метод resetPopupForm очищает форму от ошибок, очищает поля ввода 
  resetPopupForm = () => {
    this._inputErrorList = Array.from(this._element.querySelectorAll(`.${this._settings.inputErrorClass}`));
    this._errorList = Array.from(this._element.querySelectorAll(`.${this._settings.errorClass}`));
    this._inputErrorList.forEach(inputElement => inputElement.classList.remove(this._settings.inputErrorClass));
    this._errorList.forEach(error => error.classList.remove(this._settings.errorClass));
    this._element.reset();
  }

  // Метод showInputError выводит описание ошибки валидации поля ввода 
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.classList.add(this._settings.errorClass);
    errorElement.textContent = errorMessage;
  }

  // Метод hideInputError скрывает описание ошибки валидации поля ввода 
  _hideInputError = (inputElement) => {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = '';
  }

  // Метод hasInvalidInput проверяет наличие невалидных полей ввода в исходном массиве
  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  // Функиця checkInputValidity валидирует поля ввода, отображает и скрывает ошибки полей ввода
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Обработчик _formInputHandler следит за изменением содержания полей ввода, проверяет поля на валидность, меняет состояние кнопки submit
  _formInputHandler = (evt) => {
    const inputElement = evt.target;
    this._checkInputValidity(inputElement);
    this._toggleButtonState();
  }

  // Метод toggleButtonState меняет состояние кнопки активна/неактивна в зависимости от валидности полей
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute('disabled', true);
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  // Метод setEventListeners следит за изменением полей ввода и вызывает валидацию
  _setEventListeners = () => {
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._element.addEventListener('input', (evt) => {
      this._formInputHandler(evt);
    });
  }

  // Метод enableValidation запускает валидацию формы
  enableValidation = () => {
    this._setEventListeners();
  }
}