export default class Api {
  #headers;
  #baseURL;

  constructor(options) {
    this.#headers = options.headers;
    this.#baseURL = options.baseURL;
  }

  #getServerResponse(res) {
    if(res.ok) {
      return res.json();
    }

    return Promise.reject(`Не удалось получить ответ от сервера. Произошла ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.#baseURL}/users/me`, {
      headers: this.#headers,
    })
      .then(this.#getServerResponse);
  }

  getCards() {
    return fetch(`${this.#baseURL}/cards`, {
      headers: this.#headers,
    })
      .then(this.#getServerResponse);
  }

  addCard(cardData) {
    return fetch(`${this.#baseURL}/cards`, {
      headers: { ...this.#headers, 'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({...cardData})
    })
      .then(this.#getServerResponse);
  }

  updateUser(userData) {
    return fetch(`${this.#baseURL}/users/me`, {
      headers: { ...this.#headers, 'Content-Type': 'application/json'},
      method: 'PATCH',
      body: JSON.stringify({...userData})
    })
      .then(this.#getServerResponse);
  }
}