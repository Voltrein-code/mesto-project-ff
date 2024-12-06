export default class User {
  #nameSelector;
  #aboutSelector;
  #avatarSelector;
  #userInfo;

  constructor(nameSelector, aboutSelector, avatarSelector) {
    this.#nameSelector = nameSelector;
    this.#aboutSelector = aboutSelector;
    this.#avatarSelector = avatarSelector;
  };

  set userInfo(data) {
    if (typeof data === 'object') {
      this.#userInfo = { ...data };
    } else {
      throw new Error('Ошибка получения данных пользователя. Данные о пользователе должны быть в виде объекта.');
    }
  }

  get userInfo() {
    return this.#userInfo;
  }

  get id() {
    return this.#userInfo._id;
  }

  setAvatar(avatar) {
    this.#userInfo.avatar = avatar;
  }

  renderUserInfo() {
    const { name, about } = this.#userInfo;

    this.#nameSelector.textContent = name;
    this.#aboutSelector.textContent = about;

    this.renderAvatar();
  }

  renderAvatar() {
    const { name, avatar } = this.#userInfo;

    this.#avatarSelector.src = avatar;
    this.#avatarSelector.alt = `Аватар пользователя: ${name}`;
  }
}