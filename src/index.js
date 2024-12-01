import './pages/index.css';
import initialCards from './scripts/cards.js';
import { closePopup, openPopup, setEventListeners } from './scripts/modal.js';
import { createCard, deleteCard, likeCard } from './scripts/card.js';
import {
  cardList,
  profileaddButton,
  profileEditButton,
  popupAdd,
  popupEdit,
  popupImage,
  editProfileName,
  editProfileDescription,
  profileName,
  profileDescription,
  editProfileForm,
  addCardName,
  addCardLink,
  addCardForm,
  displayedImage,
  displayedImageDescription
} from './scripts/constants.js';

import FormValidator from './scripts/validation.js';

const formValidator = new FormValidator({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

const showCardImage = ({name, link}) => {
  displayedImage.src = link;
  displayedImage.alt = name;
  displayedImageDescription.textContent = name;

  openPopup(popupImage);
};

const cardHandlers = {
  handlerDelete: deleteCard,
  handlerLike: likeCard,
  handlerImageClick: showCardImage
};

const submitProfileHandler = (evt) => {
  evt.preventDefault();

  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;

  closePopup(popupEdit);
};

const submitCardHandler = (evt) => {
  evt.preventDefault();

  const cardData = {
    name: addCardName.value,
    link: addCardLink.value,
  };

  cardList.prepend(createCard(cardData, cardHandlers));

  closePopup(popupAdd);
  addCardForm.reset();
}

initialCards.forEach((card) => {
  cardList.append(createCard(card, cardHandlers));
});

// events
profileaddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

profileEditButton.addEventListener('click', () => {
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;

  openPopup(popupEdit);
  
  formValidator.clearValidation(editProfileForm);
});

editProfileForm.addEventListener('submit', submitProfileHandler);
addCardForm.addEventListener('submit', submitCardHandler);
addCardForm.addEventListener('reset', () => {
  const submitButton = addCardForm.querySelector(".popup__button");
  
  formValidator.disableButton(submitButton);
})

setEventListeners(popupAdd);
setEventListeners(popupEdit);
setEventListeners(popupImage);

// validation
formValidator.enableValidation(document.forms);