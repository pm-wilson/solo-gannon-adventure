// import functions and grab DOM elements
import quests from '../data.js';

// initialize state
const questCountArea = document.querySelector('#quest-count'),
    questCount = quests.length;

// set event listeners to update state and DOM
const beginAdventureButton = document.querySelector('#begin-adventure-button');

beginAdventureButton.addEventListener('click', () => {
    window.location.href = './info-page/info.html';
});

function initializeIndex() {
    questCountArea.textContent = questCount;
    localStorage.clear();
}

initializeIndex();