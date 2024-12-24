 export default class FormValidator {
  #selectors;
  
  constructor(selectors) {
    this.#selectors = selectors;
  }

  #checkInputValitity(form, input) {
    const customErrorMessage = input.validity.patternMismatch ? input.dataset.errorMessage : "";
    const errorElement = form.querySelector(`#${input.id}-error`);

    input.setCustomValidity(customErrorMessage);


    if (!input.validity.valid) {
      this.#showInputError(errorElement, input);
    } else {
      this.#hideInputError(errorElement, input);
    }
  }

  #showInputError(errorElement, input) {
    input.classList.add(this.#selectors.inputErrorClass);

    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this.#selectors.errorClass);
  }

  #hideInputError(errorElement, input) {
    input.classList.remove(this.#selectors.inputErrorClass);

    errorElement.textContent = "";
    input.setCustomValidity("");
    errorElement.classList.remove(this.#selectors.errorClass);
  }

  #hasInvalidInput(inputs) {
    return inputs.some(input => !input.validity.valid);
  }

  disableButton(button) {
    button.disabled = true;
    button.classList.add(this.#selectors.inactiveButtonClass);
  }

  #enableButton(button) {
    button.disabled = false;
    button.classList.remove(this.#selectors.inactiveButtonClass);
  }

  #toggleButtonAvailability(inputs, button) {
    if (this.#hasInvalidInput(inputs)) {
      this.disableButton(button);
    } else {
      this.#enableButton(button);
    }
  }

  #setEventListeners(form) {
    const inputs = Array.from(form.querySelectorAll(this.#selectors.inputSelector));
    const buttonSubmit = form.querySelector(this.#selectors.submitButtonSelector);

    this.#toggleButtonAvailability(inputs, buttonSubmit);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.#checkInputValitity(form, input);
        this.#toggleButtonAvailability(inputs, buttonSubmit);
      })
    })
  }

  clearValidation(form) {
    const inputs = Array.from(form.querySelectorAll(this.#selectors.inputSelector));
    const buttonSubmit = form.querySelector(this.#selectors.submitButtonSelector);

    inputs.forEach((input) => {
      const errorElement = form.querySelector(`#${input.id}-error`);

      this.#hideInputError(errorElement, input);
    });

    this.disableButton(buttonSubmit);
  }

  enableValidation(forms) {
    Array.from(forms).forEach((form) => {
      this.#setEventListeners(form);
    })
  }
}