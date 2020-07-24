import { loadFromLocalStorage } from '../userUtils.js';
import quests from '../data.js';

const resultDescription = document.querySelector('#result-description'),
    resultImage = document.querySelector('#result-image'),
    resultMessage = document.querySelector('#result-message'),
    resultMessage2 = document.querySelector('#result-message2'),
    clickArea = document.querySelector('main');

function initializeResults() {
    const userData = loadFromLocalStorage();

    if (userData.hp <= 0) {
        earlyDeath(userData);
    } else if (Object.keys(userData.completed).length === quests.length) {
        victory(userData);
    } else {
        missionComplete(userData);
    }
}

function earlyDeath(userData) {
    resultDescription.textContent = 'Unfortunately, you did not survive.';
    resultImage.src = '../assets/dead.jpg';
    resultMessage.textContent = userData.questMessage.dyingmessage;
    resultMessage2.textContent = 'You die with ' + userData.gold + ' rupees in your pocket, the pesants will eat well today.';
}

function victory(userData) {
    resultDescription.textContent = 'Victory is yours!';
    resultImage.src = '../assets/victory.jpg';
    resultMessage.textContent = 'You can now run amok through out Hyrule, the people live in fear of you and the world is yours until that pesky hero comes back.';
    resultMessage2.textContent = 'Your coffers overflow with ' + userData.gold + ' rupees!';
}

function missionComplete(userData) {
    resultDescription.textContent = 'Congratulations on a mission well done! Click the image to continue.';
    resultImage.src = '../assets/mission-complete.jpg';
    resultMessage.textContent = userData.questMessage.message;
    resultMessage2.textContent = 'You walk away with ' + userData.gold + ' rupees in your pocket and ' + userData.hp + ' health points remaining.';
}

clickArea.addEventListener('click', () => {
    const userData = loadFromLocalStorage();

    if (userData.hp <= 0) {
        window.location.href = '../index.html';
    } else if (Object.keys(userData.completed).length === quests.length) {
        window.location.href = '../index.html';
    } else {
        window.location.href = '../list-page/map.html';
    }
});

initializeResults();