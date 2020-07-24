const monsters = {
    id: 'monsters',
    title: 'A Den of Monsters',
    map: {
        top: '79%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `You enter the quest chamber only to be confronted by a hoard of monsters. And they look hungry. What do you do?`,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: {
            message: `Knowing the monsters are not too bright, you offer to go buy them all
        turkey dinners from the village pub. They give you 35 gold for meals
        that will never be delivered. I hope you can live with yourself.`, dyingmessage: 'You should have known you were too weak for this'
        },
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: {
            message: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `, dyingmessage: 'you didnt make it'
        },
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: -50,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Problem Dragon',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: {
            message: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `, dyingmessage: 'youre a pansy'
        },
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters,
    treasure,
    dragon, {
        id: 'pleasure',
        title: 'The Bold Folding Pleasure',
        map: {
            top: '61%',
            left: '10%'
        },
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
        choices: [{
            id: 'wooden',
            description: 'WOW',
            result: {
                message: `
                As you make a dash for the door a giant spider descends and take a bite of flesh,
                causing 50 hp damage.
            `, dyingmessage: 'youre a pansy'
            },
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'NOW',
            result: {
                message: `
                As you make a dash for the door a giant spider descends and take a bite of flesh,
                causing 50 hp damage.
            `, dyingmessage: 'youre a pansy'
            },
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'POW',
            result: {
                message: `
                As you make a dash for the door a giant spider descends and take a bite of flesh,
                causing 50 hp damage.
            `, dyingmessage: 'youre a pansy'
            },
            hp: 35,
            gold: 0
        }
        ]
    }
];

export default quests;