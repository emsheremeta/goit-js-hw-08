import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onInput, 500));
refs.message.addEventListener('input', throttle(onInput, 500));


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
    // const message = localStorage.getItem(STORAGE_KEY);
    // const email = localStorage.getItem(STORAGE_KEY);

    // if (message && email) {
    //     refs.input.value = email;
    //     refs.textarea.value = message
    // }

    let fields = localStorage.getItem(STORAGE_KEY);
    if (fields) {
        fields = JSON.parse(fields);
      Object.entries(fields).forEach(([key, value]) => {
        refs[key].value = value;
      });
    }


}

