// profile
export const profileName = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

// cards
export const cardTemplate = document.querySelector('#card-template').content;
export const cardList = document.querySelector('.places__list');

// buttons
export const profileaddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');

// popups
export const popupAdd = document.querySelector('.popup_type_new-card');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupImage = document.querySelector('.popup_type_image');

export const displayedImage = popupImage.querySelector('.popup__image');
export const displayedImageDescription = popupImage.querySelector('.popup__caption');

// forms
export const addCardForm = document.forms['new-place'];
export const editProfileForm = document.forms['edit-profile'];

// form-elements
export const addCardName = addCardForm.elements['place-name'];
export const addCardLink = addCardForm.elements.link;
export const editProfileName = editProfileForm.elements.name;
export const editProfileDescription = editProfileForm.elements.description;