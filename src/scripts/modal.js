const escKeyClosingHandler = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');

    closePopup(openedPopup);
  }
}

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');

  document.removeEventListener('keyup', escKeyClosingHandler);
}

const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');

  document.addEventListener('keyup', escKeyClosingHandler);
}

const setEventListeners = (popup) => {
  const popupCloseButton = popup.querySelector('.popup__close');

  popupCloseButton.addEventListener('click', () => {
    closePopup(popup);
  })

  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  })
}

export { openPopup, setEventListeners, closePopup };