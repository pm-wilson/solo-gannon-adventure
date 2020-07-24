import quests from '../data.js';
import { loadFromLocalStorage } from '../userUtils.js';

function initializeMap() {
    const userData = loadFromLocalStorage();

    for (let i = 0; i < quests.length; i++) {
        const currentQuest = quests[i],
            questLink = document.createElement('a'),
            mapArea = document.querySelector('section');


        questLink.textContent = currentQuest.title;
        questLink.style.top = currentQuest.map.top;
        questLink.style.left = currentQuest.map.left;

        if (userData.completed[currentQuest.id]) {
            questLink.style.textDecoration = 'line-through';
            questLink.classList.add('completed');
        } else {
            questLink.href = '../quest-page/quest.html?id=' + currentQuest.id;
        }

        mapArea.append(questLink);
    }
}

initializeMap();