function getCardTemplate() {
  return document
    .querySelector('#card-template').content
    .querySelector('.card')
    .cloneNode(true);
}

const createCard = (card, handlers) => {
  const { name, link } = card;
  const {
    handlerDelete,
    handlerLike,
    handlerImageClick } = handlers;

  const newCard = getCardTemplate();

  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');

  const cardDeleteButton = newCard.querySelector('.card__delete-button');
  const cardLikeButton = newCard.querySelector('.card__like-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardDeleteButton.addEventListener('click', handlerDelete);
  cardLikeButton.addEventListener('click', handlerLike);
  cardImage.addEventListener('click', () => {
    handlerImageClick(card);
  });

  return newCard;
}

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
}

const likeCard = (evt) => {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard };