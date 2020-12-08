let popupActive = document.querySelector('.popup_opened');    // Открытый на странице popup

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', popupClickHandler);
  window.addEventListener('keydown', keydownHandler);
  popupActive = popup;
}

function closePopup(popup) {
  const popupForm = popup.querySelector(objSettings.formSelector);
  popup.removeEventListener('mousedown', popupClickHandler);
  window.removeEventListener('keydown', keydownHandler);
  if (popupForm) resetPopupForm(popupForm);
  popup.classList.remove('popup_opened');
}

function keydownHandler(event) {
  const popupOpened = document.querySelector('.popup_opened');
  if (popupOpened && event.key === "Escape") closePopup(popupOpened);
}

function popupClickHandler(event) {
  const popup = document.querySelector('.popup_opened');
  event.stopPropagation();
  if (event.target.classList.contains('popup') || event.target.classList.contains('button_type_close-popup')) closePopup(popup);
}

// Вынести в класс Form метод _resetForm()
function resetPopupForm(popupForm) {
  const inputList = Array.from(popupForm.querySelectorAll(`.${objSettings.inputErrorClass}`));
  const errorList = Array.from(popupForm.querySelectorAll(`.${objSettings.errorClass}`));
  inputList.forEach(inputElement => inputElement.classList.remove(objSettings.inputErrorClass));
  errorList.forEach(error => error.classList.remove(objSettings.errorClass));
  popupForm.reset();
}

function setButtonState(buttonElement, buttonState) {
  if (buttonState) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('button_disabled');
  } else {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('button_disabled');
  }
}

export { popupActive, resetPopupForm, openPopup, closePopup, setButtonState };
