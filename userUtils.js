const MAGIC_KEY = 'MAGICKEY';

export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 0,
        completed: {},
        questMessage: {}
    };
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