import Bowman from '../bowman.js';
import Swordsman from '../swordsman.js';
import Team from '../app.js';

test('Добавление героя в команду', () => {    
    const bowman = new Bowman ('Nick', 'Bowman');
    const myTeam = new Team;    
    myTeam.add(bowman); 
    const arr = [bowman.name];      
    const result = new Set(arr);
    expect(myTeam.members).toEqual(result);
});

test('Невозможно добавить одного и того же героя в команду', () => {
    const bowman = new Bowman ('Nick', 'Bowman');    
    const myTeam = new Team;
    myTeam.add(bowman); 
    expect(() => myTeam.add(bowman)).toThrow("You can't include one character twice"); 
});

test('Добавление нескольких героев в команду', () => {
    const bowman = new Bowman ('Nick', 'Bowman');
    const swordsman = new Swordsman ('Nick2', 'Swordsman');
    const myTeam = new Team;
    myTeam.addAll(bowman, swordsman);
    const arr = [bowman.name, swordsman.name];
    const result = new Set(arr);
    expect(myTeam.members).toEqual(result);
})

test('Конвертация Set в массив', () => {
    const bowman = new Bowman ('Nick', 'Bowman');
    const swordsman = new Swordsman ('Nick2', 'Swordsman');
    const myTeam = new Team;
    myTeam.addAll(bowman, swordsman);
    const received = myTeam.toArray();
    const result = ['Nick', 'Nick2'];
  
    expect(received).toEqual(result);
  });