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
});

editProfileForm.addEventListener('submit', submitProfileHandler);
addCardForm.addEventListener('submit', submitCardHandler);

setEventListeners(popupAdd);
setEventListeners(popupEdit);
setEventListeners(popupImage);