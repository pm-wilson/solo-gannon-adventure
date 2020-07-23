import quests from '../data.js';

function initializeMap() {
    for (let i = 0; i < quests.length; i++) {
        const currentQuest = quests[i],
            questLink = document.createElement('a'),
            mapArea = document.querySelector('section');

        questLink.href = '../quest-page/quest.html?id=' + currentQuest.id;
        questLink.textContent = currentQuest.title;
        questLink.style.top = currentQuest.map.top;
        questLink.style.left = currentQuest.map.left;

        mapArea.append(questLink);
    }
}

initializeMap();