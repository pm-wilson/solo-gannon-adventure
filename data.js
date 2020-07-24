const sword = {
    id: 'sword',
    title: 'Sword that Steals the Darkness',
    map: {
        top: '79%',
        left: '44%'
    },
    image: 'sword.jpg',
    description: `You track down the location of the sword and arrive at the place. There is a guard at the door, what do you do?`,
    choices: [{
        id: 'bribe',
        description: 'Knowing he can always use more rupees, you offer a bribe',
        result: {
            message: `You bribe the guard and easily get to the sword, but then he notices what you are up to and manages to hit you with an arrow as you disappear into the darkness. You have the sword, but it ends up costing you 2 health and 500 rupees.`, dyingmessage: `You should have known better than to bribe a guard, he sees through your plan and attacks you when you go for the sword. You don't survive`
        },
        hp: -2,
        gold: -500
    }, {
        id: 'fight',
        description: 'Attack!',
        result: {
            message: `As you approach the guard he doesn't seem concerned. These peaceful times are making the people weak. You attack the guard and he fights back well enough. You lose 50 health, but find 25 rupees on his corpse.`, dyingmessage: `The guard is tougher than he looks and makes short work of you.`
        },
        hp: -50,
        gold: 25
    }, {
        id: 'run',
        description: 'Sneak around to the back',
        result: {
            message: `You look around the building and find a back door that isn't guarded. You slip inside and manage to disappear into the night with the sword along with 20 rupees you found on a table.`, dyingmessage: 'You truly are weak, there should have been no way to get hurt with this option!'
        },
        hp: 0,
        gold: 20
    }]
};

const book = {
    id: 'book',
    title: 'Ancient Book of Wisdom',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'book.png',
    description: `You travel to Hyrule's biggest library and locate the room that holds the Ancient Book of Wisdom. Knowing this book has all the spells you will soon need to take over the world you make a decision on how to get it.`,
    choices: [{
        id: 'steal',
        description: 'Climb a tapestry to get access to the book',
        result: {
            message: `You climb the tapestry to get access to the upper floor where the book is stored and swipe it easily enough. As you are making your escape, you are discovered and have to jump out of a window. You take 60 damage from the fall, but survive with the book.`, dyingmessage: 'As you are climbing the tapestry it starts to rip and you fall on your head and never wake up.'
        },
        hp: -60,
        gold: 0
    }, {
        id: 'fight',
        description: 'Take it by force',
        result: {
            message: `You threaten the librarian and they give up the book easily enough, but you encounter a guard on your way out and have a good battle. You end up taking 65 damage and find 30 rupees on him as you get away.`, dyingmessage: 'The librarian is much more formadible than you thought and uses an old math book to destroy you, whoever thought math would be this deadly?!'
        },
        hp: -45,
        gold: 30
    }, {
        id: 'bribe',
        description: 'Bribe the librarian with chocolate',
        result: {
            message: `You stop outside and buy the largest box of chocolates sold at the market and use it to bribe the librarian to check out the book. It costs you 350 rupees and 1 health for stuffing yourself with some chocolates too. You easily walk out of the library with it, no need to worry about the return date.`, dyingmessage: 'You decide to indulge in some chocolate as you walk into the library and choke on a peanut. Who the hell put a peanut in your chocolate? You curse their existence as the world fades away.'
        },
        hp: -1,
        gold: -350
    }]
};

const bracelet = {
    id: 'bracelet',
    title: 'The Bracelet of Power',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'bracelet.jpg',
    description: `In order to build some of your dungeons you will need to obtain the Bracelet of Power. Luckily you know exactly where it is at, unfortunately it is at the top of a great spire. How do you go about getting it?`,
    choices: [{
        id: 'climb',
        description: 'Climb Up',
        result: {
            message: `You climb the tower carefully and arrive at the top. After grabbing the bracelet and looting some treasure boxes in the area for 80 rupees, you head down. Half way down you slip and take 102 damage from the fall. It hurt, but you are tough.`, dyingmessage: 'You slip on the way up and fall to your doom.'
        },
        hp: -102,
        gold: 80
    }, {
        id: 'bribe',
        description: 'Pay a Pesant',
        result: {
            message: `You find the strongest pesant in the area and offer him 300 rupees to climb up and pull you up behind him. It is uncomfortable and you take 1 damage, but get the bracelet relatively unharmed.`, dyingmessage: 'The pesant slips as he pulls you up and both of you fall to your doom. There were no survivors.'
        },
        hp: -1,
        gold: -300
    }, {
        id: 'stairs',
        description: 'Search for Stairs',
        result: {
            message: `You find some stairs conveinently going up the back of the spire. As you walk up, the famous stone rain of Hyrule begins to fall in the form of giant boulders. You suffer 78 damage, but find some random equipment that you later sell for 30 rupees`, dyingmessage: 'You dont find any stairs, but you do find a bottomless pit and continue to fall for days and that is the last thing you remember.'
        },
        hp: -78,
        gold: 30
    }]
};

const key = {
    id: 'key',
    title: 'The Magic Key',
    map: {
        top: '61%',
        left: '45%'
    },
    image: 'key.jpg',
    description: `You will be locking and unlocking many doors as you rise to power and take over the world so you head to where you know the Magic Key is hidden. It is guarded by the queen of faries. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Take the Fairy and the Key',
        result: {
            message: `You attack the fairy and as soon as you make contact you freeze and can feel the warmth of life going into you. You gain 50 health. As you recover you realize the fairy has disappeared and you now have the key.`, dyingmessage: 'There is seriously no way this can hurt you.'
        },
        hp: 50,
        gold: 80
    }, {
        id: 'bribe',
        description: 'Pay the Fairy',
        result: {
            message: `You leave 550 rupees where the fairy can see it and sneak around the back of the lake to steal the key. You arent the best swimmer and take 3 damage as you breathe in some water.`, dyingmessage: 'You distract the fairy with some rupees and swim out into the lake to get the key, unfortunately you can not swim and the last thing you remember is the sun flickering through the water.'
        },
        hp: -3,
        gold: -550
    }, {
        id: 'distract',
        description: 'Distract with a pesant',
        result: {
            message: `You purchase some equpment for 40 rupees and build a trap for a pesant near by. As the trap goes off it not only injurs the pesant but you too. you suffer 60 damage, but manage to get the pesant carried off to the fairy. While healing the pesant you slip in and steal the key`, dyingmessage: 'You build a trap hoping to distract the fairy with a wounded pesant. Unfortunately the trap backfires and you crush yourself with a log.'
        },
        hp: -40,
        gold: -60
    }]
};

const quests = [
    sword,
    book,
    bracelet,
    key
];

export default quests;