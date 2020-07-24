import { findById, loadFromLocalStorage, saveToLocalStorage, showMinGold } from '../userUtils.js';
import quests from '../data.js';
import { renderQuest } from './questUtils.js';

function initializeQuestPage() {
    const questInfo = new URLSearchParams(window.location.search),
        questId = questInfo.get('id'),
        divToAppend = renderQuest(questId, quests),
        userData = loadFromLocalStorage(),
        questArea = document.querySelector('#quest-section'),
        hpDisplay = document.querySelector('#current-hp'),
        gpDisplay = document.querySelector('#current-gp');

    questArea.append(divToAppend);

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form),
            userSelect = formData.get('choice'),
            currentQuestData = findById(quests, questId),
            currentDecision = findById(currentQuestData.choices, userSelect),
            choiceHPMod = currentDecision.hp,
            choiceGPMod = currentDecision.gold;

        userData.hp += choiceHPMod;
        userData.gold += choiceGPMod;
        if (userData.gold < 0) {
            userData.gold = 0;
        }
        userData.questMessage = currentDecision.result;
        userData.completed[questId] = true;
        saveToLocalStorage(userData);
        window.location.href = '../results-page/results.html';
    });

    hpDisplay.textContent = userData.hp;
    gpDisplay.textContent = showMinGold(userData.gold);
}

initializeQuestPage();