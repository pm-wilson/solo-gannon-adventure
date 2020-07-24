const MAGIC_KEY = 'MAGICKEY';

export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: getHP(formData.get('class')),
        gold: getGP(formData.get('class')),
        completed: {},
        questMessage: {}
    };
}

function getHP(playerClass) {
    const randomAmount = Math.floor(Math.random() * 25);

    switch (playerClass) {
        case 'strong': return randomAmount + 200;
        case 'not-broke': return randomAmount + 100;
        case 'not-weak': return randomAmount + 50;
        default: return randomAmount + 25;
    }
}

function getGP(playerClass) {
    const randomAmount = Math.floor(Math.random() * 50);

    switch (playerClass) {
        case 'strong': return randomAmount + 5;
        case 'not-broke': return randomAmount + 10;
        case 'not-weak': return randomAmount + 200;
        default: return randomAmount + 1000;
    }
}

export function saveToLocalStorage(dataToSave) {
    const stringyData = JSON.stringify(dataToSave);
    localStorage.setItem(MAGIC_KEY, stringyData);
}

export function loadFromLocalStorage() {
    const stringyData = localStorage.getItem(MAGIC_KEY),
        data = JSON.parse(stringyData);

    return data;
}

export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        const currentArrayItem = array[i];

        if (currentArrayItem.id === id) {
            return currentArrayItem;
        }
    }
    return null;
}

export function showMinGold(currentGold) {
    if (currentGold < 0) {
        return 0;
    }
    return currentGold;
}