// import functions and grab DOM elements
import quests from '../data.js';

// initialize state
const questCountArea = document.querySelector('#quest-count'),
    questCount = quests.length;

// set event listeners to update state and DOM
function initializeIndex() {
    questCountArea.textContent = questCount;
    localStorage.clear();
}

initializeIndex();