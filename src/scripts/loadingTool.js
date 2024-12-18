export default class LoadingTool {
  #popup;
  #buttonSelector;
  #buttonElement;
  #defaultButtonText;

  constructor(buttonSelector) {
    this.#buttonSelector = buttonSelector;
  }

  set popup(popup) {
    const buttonElement = popup.querySelector(this.#buttonSelector);

    if(!buttonElement) {
      console.log("Данный попап не содержит кнопки с заданными селектором");
      return;
    }

    this.#popup = popup;
    this.#buttonElement = buttonElement;
    this.#defaultButtonText = buttonElement.textContent;
  }

  toggleLoading(isLoading) {
    const loadingMessage = this.#popup.classList.contains('popup_type_delete') ? "Удаление..." : "Сохранение...";

    this.#buttonElement.textContent = isLoading ? loadingMessage : this.#defaultButtonText;
  }
}