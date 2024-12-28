function getCardTemplate() {
  return document
    .querySelector('#card-template').content
    .querySelector('.card')
    .cloneNode(true);
}

export const createCard = (card, features, api, userID) => {
  const { name, link, likes, _id, owner } = card;
  const {
    handlerDelete,
    handlerLike,
    handlerImageClick } = features;

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
    handlerDelete(_id, evt.target.closest('.card'));
  });

  cardLikeButton.addEventListener('click', () => {
    handlerLike(
      _id,
      cardLikeButton.classList.contains('card__like-button_is-active'),
      (newLikesCount) => {
        cardLikeButton.classList.toggle('card__like-button_is-active');
        cardLikes.textContent = newLikesCount;
      }
    );
  });

  cardImage.addEventListener('click', () => {
    handlerImageClick(card);
  });

  return newCard;
}