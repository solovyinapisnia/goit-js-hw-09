'use strict';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

let savedFormData = localStorage.getItem(localStorageKey);
if (savedFormData) {
    savedFormData = JSON.parse(savedFormData);
    for (const key in savedFormData) {
        const value = savedFormData[key];
        form.elements[key].value = value;
    }
}

form.addEventListener("input", (event) => {
    const formData = {
        email: event.currentTarget.elements.email.value.trim(),
        message: event.currentTarget.elements.message.value.trim(),
    };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (email.length && message.length) {
        const formData = {
            email: event.target.elements.email.value,
            message: event.target.elements.message.value,
        };
        console.log(formData);
        form.reset();
        localStorage.removeItem(localStorageKey);   
    }
});
