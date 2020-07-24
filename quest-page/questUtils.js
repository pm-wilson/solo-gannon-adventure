import { findById, loadFromLocalStorage } from '../userUtils.js';

export function renderQuest(questId, questData) {
    const userData = loadFromLocalStorage(),
        containerDiv = document.createElement('div'),
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
            currentInput = document.createElement('input'),
            enoughGold = hasEnoughGoldForChoice(userData.gold, currentChoices.gold);

        currentLabel.textContent = currentChoices.description;
        currentInput.type = 'radio';

        if (enoughGold) {
            currentInput.name = 'choice';
        } else {
            currentInput.name = 'disabled';
            currentLabel.classList.add('disabled');
            currentInput.disabled = true;
            currentLabel.textContent += ' (If only you had more rupees)';
        }

        currentInput.value = currentChoices.id;

        currentLabel.append(currentInput);
        form.append(currentLabel);
    }

    form.append(button);
    containerDiv.append(h3, img, p, form);

    return containerDiv;
}

function hasEnoughGoldForChoice(userGold, choiceGold) {
    const choiceGoldNeeded = choiceGold * -1;

    if (userGold >= choiceGoldNeeded) {
        return true;
    }
    return false;
}