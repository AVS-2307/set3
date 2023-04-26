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

test('Получим ошибку имени', () => {
    const description = () => new Character('Bravo111111', 'Bowman');
    expect(description).toThrow('Name length should be between 2 and 10 letters');
  });
  
  test('Получим ошибку типа имени', () => {
      const description = () => new Character(15, 'nsw');
      expect(description).toThrow('Name should be string');
  });
  
  test('Получим ошибку типа', () => {
      const description = () => new Character('Nick', 15);
      expect(description).toThrow('Type should be string');
  });
  
  test('Получим ошибку типа2', () => {
      const description = () => new Character('Nick', '15');
      expect(description).toThrow('Type should be one of this: Bowman, Daemon, Magician, Swordsman, Undead, Zombie');
  });
  
