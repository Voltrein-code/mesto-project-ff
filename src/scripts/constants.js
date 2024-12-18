// profile
export const profileName = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');
export const profileAvatar = document.querySelector('.profile__image');

// cards
export const cardTemplate = document.querySelector('#card-template').content;
export const cardList = document.querySelector('.places__list');

// buttons
export const profileaddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAvatarEdit = document.querySelector('.profile__avatar-edit');

// popups
export const popupAdd = document.querySelector('.popup_type_new-card');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupImage = document.querySelector('.popup_type_image');
export const popupSubmit = document.querySelector('.popup_type_delete');
export const popupAvatar = document.querySelector('.popup_type_avatar');

export const displayedImage = popupImage.querySelector('.popup__image');
export const displayedImageDescription = popupImage.querySelector('.popup__caption');

// forms
export const addCardForm = document.forms['new-place'];
export const editProfileForm = document.forms['edit-profile'];
export const deleteForm = document.forms['delete-card'];
export const editAvatarForm = document.forms['update-avatar'];

// form-elements
export const addCardName = addCardForm.elements['place-name'];
export const addCardLink = addCardForm.elements.link;
export const editProfileName = editProfileForm.elements.name;
export const editProfileDescription = editProfileForm.elements.description;
export const editAvatarLink = editAvatarForm.elements.link;

// api
export const token = '692a357d-afe9-4b35-8cd7-75d259739a6d'; // тестовый токен
export const baseURL = 'https://nomoreparties.co/v1/cohort-mag-3/';