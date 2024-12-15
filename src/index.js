import './pages/index.css';
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
  displayedImageDescription,
  token,
  baseURL,
  profileAvatar,
  popupSubmit
} from './scripts/constants.js';

import FormValidator from './scripts/validation.js';
import Api from './scripts/api.js';
import User from './scripts/user.js';

const formValidator = new FormValidator({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

const api = new Api({
  headers: {
    authorization: token
  },
  baseURL: baseURL
});

const currentUser = new User(
  profileName,
  profileDescription,
  profileAvatar
);

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
  let newUserData;

  profileName.textContent = "Загрузка...";
  profileDescription.textContent = "Загрузка...";

  api.updateUser({
    name: editProfileName.value,
    about: editProfileDescription.value
  })
    .then((res) => {
      newUserData = {...res};
    })
    .finally(() => {
      profileName.textContent = newUserData.name;
      profileDescription.textContent = newUserData.about;
    })
    .catch((err) => {
      console.log(err);
    })

  closePopup(popupEdit);
};

const submitCardHandler = (evt) => {
  evt.preventDefault();

  api.addCard({
    name: addCardName.value,
    link: addCardLink.value,
  })
    .then((res) => {
      cardList.prepend(createCard(res, cardHandlers, api));
    })
    .catch((err) => {
      console.log(err);
    })

  closePopup(popupAdd);
  addCardForm.reset();
}

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    currentUser.userInfo = userData;
    currentUser.renderUserInfo();

    cards.forEach((card) => {
      cardList.append(createCard(card, cardHandlers, api, currentUser.id));
    })
    .catch((err) => {
      console.log(err);
    })
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
setEventListeners(popupSubmit);

// validation
formValidator.enableValidation(document.forms);