import { findById, loadFromLocalStorage, saveToLocalStorage } from '../userUtils.js';
import quests from '../data.js';

export function renderQuest(questId, questData) {
    const containerDiv = document.createElement('div'),
        currentQuestData = findById(questData, questId),
        h3 = document.createElement('h3'),
        h3Text = currentQuestData.title,
        img = document.createElement('img'),
        p = document.createElement('p'),
        form = document.createElement('form'),
        button = document.createElement('button');

    h3.textContent = h3Text;

    img.src = '../assets/' + currentQuestData.image;
    img.alt = '';

    p.textContent = currentQuestData.description;

    button.textContent = 'Submit';

    for (let i = 0; i < currentQuestData.choices.length; i++) {
        const currentChoices = currentQuestData.choices[i],
            currentLabel = document.createElement('label'),
            currentInput = document.createElement('input');

        currentLabel.textContent = currentChoices.description;

        currentInput.type = 'radio';
        currentInput.name = 'choice';
        currentInput.value = currentChoices.id;

        currentLabel.append(currentInput);
        form.append(currentLabel);
    }

    form.append(button);
    containerDiv.append(h3, img, p, form);

    return containerDiv;
}

function initializeQuestPage() {
    const questInfo = new URLSearchParams(window.location.search),
        questId = questInfo.get('id'),
        divToAppend = renderQuest(questId, quests),
        questArea = document.querySelector('#quest-section');

    questArea.append(divToAppend);

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form),
            userSelect = formData.get('choice'),
            currentQuestData = findById(quests, questId),
            userData = loadFromLocalStorage(),
            currentDecision = findById(currentQuestData.choices, userSelect),
            choiceHPMod = currentDecision.hp,
            choiceGPMod = currentDecision.gold;

        userData.hp += choiceHPMod;
        userData.gold += choiceGPMod;
        userData.questMessage = currentDecision.result;
        userData.completed[questId] = true;
        saveToLocalStorage(userData)
        window.location.href = '../results-page/results.html';
    });
}

initializeQuestPage();