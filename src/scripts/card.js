import { deleteForm, popupSubmit } from "./constants";
import { closePopup, openPopup } from "./modal";

function getCardTemplate() {
  return document
    .querySelector('#card-template').content
    .querySelector('.card')
    .cloneNode(true);
}

const createCard = (card, features, api, userID) => {
  const { name, link, likes, _id, owner } = card;
  const {
    handlerDelete,
    handlerLike,
    handlerImageClick,
    loadingTool } = features;

  const newCard = getCardTemplate();

  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardLikes = newCard.querySelector('.card__like-count');

  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  const cardLikeButton = newCard.querySelector('.card__like-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardLikes.textContent = likes.length;

  userID && (() => {
    if (likes.some(user => user._id === userID)) {
      cardLikeButton.classList.add('card__like-button_is-active');
    }

    if (owner._id !== userID) {
      cardDeleteButton.classList.add('card__delete-button_hidden');
    }
  })();

  cardDeleteButton.addEventListener('click', (evt) => {
    openPopup(popupSubmit);

    const cardForDelete = evt.target.closest('.card');
    
    deleteForm.addEventListener('submit', function deleteCardCallback(evt) {
      evt.preventDefault();

      handlerDelete(_id, cardForDelete, api, loadingTool);
      deleteForm.removeEventListener('submit', deleteCardCallback);
    });
  });
  
  cardLikeButton.addEventListener('click', (evt) => {
    handlerLike({
      id: _id,
      likeButton: evt.target,
      likeCount: cardLikes
    }, api);
  });
  cardImage.addEventListener('click', () => {
    handlerImageClick(card);
  });

  return newCard;
}

const deleteCard = (id, cardElement, api, loadingTool) => {
  loadingTool.popup = popupSubmit;
  loadingTool.toggleLoading(true);

  api.deleteCard(id)
    .then((card) => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingTool.toggleLoading(false);
      closePopup(popupSubmit);
    })
}

const likeCard = (cardInstance, api) => {
  const { id, likeButton, likeCount } = cardInstance;
  const isLiked = likeButton.classList.contains('card__like-button_is-active');

  api.setLikeStatus(id, isLiked)
    .then((cardData) => {
      likeButton.classList.toggle('card__like-button_is-active');
      likeCount.textContent = cardData.likes.length;
    })
    .catch((err) => {
      console.log(err);
    })
}

export { createCard, deleteCard, likeCard };