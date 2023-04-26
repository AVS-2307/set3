import Swordsman from '../swordsman.js'

test('correct create swordsman', () => {
    const swordsman = new Swordsman('Nick', 'Swordsman');
    const correct = {attack: 40, defense: 10, level: 1, health: 100, name: 'Nick', type: 'Swordsman'}
    expect(swordsman).toEqual(correct);
  });