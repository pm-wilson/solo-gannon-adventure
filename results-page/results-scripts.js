import { loadFromLocalStorage } from '../userUtils.js';
import quests from '../data.js';

const resultDescription = document.querySelector('#result-description'),
    resultImage = document.querySelector('#result-image'),
    resultMessage = document.querySelector('#result-message'),
    resultMessage2 = document.querySelector('#result-message2'),
    clickArea = document.querySelector('main');

function initializeResults() {
    const userData = loadFromLocalStorage();

    console.log(userData)


    if (userData.hp <= 0) {
        earlyDeath(userData);
    } else if (userData.completed.length === quests.length) {
        victory(userData);
    } else {
        missionComplete(userData);
    }
}

function earlyDeath(userData) {
    resultDescription.textContent = 'Unfortunately, you did not survive.';
    resultImage.src = '../assets.dead.jpg';
    resultMessage.textContent = userData.questMessage.dyingmessage;
    resultMessage2.textContent = 'You die with ' + userData.gold + ' gold coins in your pocket that the next adventurer gladly pockets..';
}

function victory(userData) {
    resultDescription.textContent = 'Victory is yours';
    resultImage.src = '../assets/victory.jpg';
    resultMessage.textContent = 'You have solved all the quests';
    resultMessage2.textContent = 'You retire with ' + userData.gold + ' gold.';
}

function missionComplete(userData) {
    resultDescription.textContent = 'Congratulations on a mission well done';
    resultImage.src = '../assets/mission-complete.jpg';
    resultMessage.textContent = userData.questMessage.message;
    resultMessage2.textContent = 'You walk away with ' + userData.gold + ' coins in your pocket and ' + userData.hp + 'hit points remaining.';
}

clickArea.addEventListener('click', () => {
    const userData = loadFromLocalStorage();

    if (userData.hp > 0 && userData.completed.length !== quests.length) {
        window.location.href = '../list-page/map.html';
    }
});

initializeResults();