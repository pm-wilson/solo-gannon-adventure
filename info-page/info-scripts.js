import { makeUser, saveToLocalStorage } from '../userUtils.js';

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form),
        user = makeUser(formData);

    saveToLocalStorage(user);
    window.location.href = '../list-page/map.html';
});