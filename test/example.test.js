// IMPORT MODULES under test here:
import { showMinGold } from '../userUtils.js';

const test = QUnit.test;

/*this function now needs to access the user data, so it no longer works on the test.
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div><h3>A Den of Monsters</h3><img src="../assets/monsters.jpg" alt=""><p>You enter the quest chamber only to be confronted by a hoard of monsters. And they look hungry. What do you do?</p><form><label>Negotiate with them<input type="radio" name="choice" value="negotiate"></label><label>Fiiiiiggghhhttt!<input type="radio" name="choice" value="fight"></label><label>Run away like good Sir Robin<input type="radio" name="choice" value="run"></label><button>Submit</button></form></div>';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderQuest('key', quests).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
*/


test('showMinGold will return 0 if the paramater is less than 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const gold = -50;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = showMinGold(gold);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

