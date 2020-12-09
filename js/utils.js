function setButtonState(buttonElement, buttonState) {
  if (buttonState) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('button_disabled');
  } else {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('button_disabled');
  }
}

export { setButtonState };
