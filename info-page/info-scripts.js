import { makeUser, saveToLocalStorage, loadFromLocalStorage } from '../userUtils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = makeUser(formData);

    saveToLocalStorage(user);


    console.log(loadFromLocalStorage());
});

