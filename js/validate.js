// Глобальный объект с настройками классов и селекторов форм и полей ввода
const objSettings = {};

// Функция hasInvalidInput проверяет наличие невалидных полей ввода в исходном массиве
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

// Функция toggleButtonState меняет состояние кнопки активна/неактивна в зависимости от валидности полей
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(objSettings.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove(objSettings.inactiveButtonClass);
  }
}

// Функция showInputError выводит описание ошибки валидации поля ввода 
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objSettings.inputErrorClass);
  errorElement.classList.add(objSettings.errorClass);
  errorElement.textContent = errorMessage;
}

// Функция hideInputError скрывает описание ошибки валидации поля ввода 
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objSettings.inputErrorClass);
  errorElement.classList.remove(objSettings.errorClass);
  errorElement.textContent = '';
}

// Функиця checkInputValidity валидирует поля ввода, отображает и скрывает ошибки полей ввода
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

// Функция setEventListeners следит за изменением полей ввода и вызывает валидацию
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(objSettings.inputSelector));
  const buttonElement = formElement.querySelector(objSettings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  formElement.addEventListener('input', (evt) => {
    const inputElement = evt.target;
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
}

// Функция enableValidation:
//  - наполняет глобальный объект objSettings настроеками пользователя
//  - находит формы на странице
//  - отменяет действие по умолчанию при событии submit для всех форм
//  - вешает прослушивание событий на каждую форму
const enableValidation = (userSettings) => {
  Object.assign(objSettings, userSettings);
  const formList = Array.from(document.querySelectorAll(objSettings.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formElement);
  })
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
