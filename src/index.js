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
  popupSubmit,
  profileAvatarEdit,
  popupAvatar,
  editAvatarLink,
  editAvatarForm,
  deleteForm
} from './scripts/constants.js';

import FormValidator from './scripts/validation.js';
import Api from './scripts/api.js';
import User from './scripts/user.js';
import LoadingTool from './scripts/loadingTool.js';

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

const loadingTool = new LoadingTool('.button');

const showCardImage = ({name, link}) => {
  displayedImage.src = link;
  displayedImage.alt = name;
  displayedImageDescription.textContent = name;

  openPopup(popupImage);
};

const cardDeleteHandler = (cardID, cardElement) => {
  openPopup(popupSubmit);

  const currentCard = { cardID, cardElement };

  deleteForm.onSubmit = function (evt) {
    evt.preventDefault();

    console.log("test");

    loadingTool.popup = popupSubmit;
    loadingTool.toggleLoading(true);

    api.deleteCard(currentCard.cardID)
      .then((card) => {
        currentCard.remove();
        closePopup(popupSubmit);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loadingTool.toggleLoading(false);
      })
    return false;
  }
}

const cardFeatures = {
  handlerDelete: cardDeleteHandler,
  handlerLike: likeCard,
  handlerImageClick: showCardImage,
  loadingTool: loadingTool
};

const submitProfileHandler = (evt) => {
  evt.preventDefault();
  let newUserData;

  loadingTool.popup = popupEdit;
  loadingTool.toggleLoading(true);

  api.updateUser({
    name: editProfileName.value,
    about: editProfileDescription.value
  })
    .then((res) => {
      currentUser.userInfo = res;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      currentUser.renderUserInfo();
      closePopup(popupEdit);
      loadingTool.toggleLoading(false);
    })
};

const submitCardHandler = (evt) => {
  evt.preventDefault();

  loadingTool.popup = popupAdd;
  loadingTool.toggleLoading(true);

  api.addCard({
    name: addCardName.value,
    link: addCardLink.value,
  })
    .then((res) => {
      cardList.prepend(createCard(res, cardFeatures, api));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      closePopup(popupAdd);
      addCardForm.reset();
      loadingTool.toggleLoading(false);
    })
}

const submitAvatarHandler = (evt) => {
  evt.preventDefault();

  loadingTool.popup = popupAvatar;
  loadingTool.toggleLoading(true);

  api.updateAvatar(editAvatarLink.value)
    .then((data) => {
      currentUser.setAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      currentUser.renderUserInfo();
      closePopup(popupAvatar);
      loadingTool.toggleLoading(false);
    })
}

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    currentUser.userInfo = userData;
    currentUser.renderUserInfo();

    cards.forEach((card) => {
      cardList.append(createCard(card, cardFeatures, api, currentUser.id));
    })
  })
  .catch((err) => {
    console.log(err);
  })

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

profileAvatarEdit.addEventListener('click', () => {
  openPopup(popupAvatar);
})

editProfileForm.addEventListener('submit', submitProfileHandler);
editAvatarForm.addEventListener('submit', submitAvatarHandler);
addCardForm.addEventListener('submit', submitCardHandler);
addCardForm.addEventListener('reset', () => {
  const submitButton = addCardForm.querySelector(".popup__button");
  
  formValidator.disableButton(submitButton);
})

setEventListeners(popupAdd);
setEventListeners(popupEdit);
setEventListeners(popupImage);
setEventListeners(popupSubmit);
setEventListeners(popupAvatar);

// validation
formValidator.enableValidation(document.forms);