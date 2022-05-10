import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input',throttle (onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state'
const formData ={};
//взять value и записать в localstoge

function onTextareaInput (evt) {
formData[evt.target.name] = evt.target.value;

localStorage.setItem( STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)

}
function populateTextArea() {
    const savedMessage = JSON.stringify( localStorage.getItem(formData));
    if (savedMessage) {
       // console.log (savedMessage)
        refs.textarea.value = savedMessage
    }
}
populateTextArea();