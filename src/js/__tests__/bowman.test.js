import Bowman from '../bowman.js'

test('correct create bowman', () => {
    const bowman = new Bowman('Nick', 'Bowman');
    const correct = {attack: 25, defense: 25, level: 1, health: 100, name: 'Nick', type: 'Bowman'}
    expect(bowman).toEqual(correct);
  });