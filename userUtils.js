const magicKey = "MAGICKEY"

export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 0,
        completed: {}
    };
}

export function saveToLocalStorage(dataToSave) {
    const stringyData = JSON.stringify(dataToSave);
    localStorage.setItem(magicKey, stringyData);
}

export function loadFromLocalStorage() {
    const stringyData = localStorage.getItem(magicKey),
        data = JSON.parse(stringyData);

    return data;
}