import Character from '../character.js';

test('Получим объект Character', () => {
    const description = new Character('Nick', 'Bowman');

    const result = {
        name: 'Nick', 
        type: 'Bowman', 
        level: 1,
        health: 100    
    };
    expect(description).toEqual(result);
});
