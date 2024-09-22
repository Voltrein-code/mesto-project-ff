import './pages/index.css';
import { initialCards } from './scripts/cards';

const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

const createCard = (card, handlerDelete) => {
  const { name, link } = card;

  const newCard = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardDeleteButton.addEventListener('click', handlerDelete);

  return newCard;
}

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
}

const renderCards = () => {
  initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard));
  });
  
}

renderCards();