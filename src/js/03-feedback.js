import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));


const STORAGE_KEY = 'feedback-form-state'
const formData = {};

populateTextArea();

//взять value и записать в localstoge
function onInput (evt) {
 formData[evt.target.name] = evt.target.value;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    
}

function populateTextArea() {
    const message = localStorage.getItem(formData.message);
    const email = localStorage.getItem(formData.email);

    if (message && email) {
        refs.input.value = email;
        refs.textarea.value = message
    }
}

