import Bowman from './bowman.js';
import Swordsman from './swordsman.js';

export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(Character) {        
        if (this.members.has(Character.name)) {
            throw Error("You can't include one character twice");
        }
        this.members.add(Character.name)
    }

    addAll(...characters) {
        characters.forEach((item) => this.members.add(item.name));
    }

    toArray() {
        return Array.from(this.members);
      }
}

const bowman = new Bowman('Nick', 'Bowman');
const swordsman = new Swordsman('Nick2', 'Swordsman');
const characters = [bowman, swordsman];
const myTeam = new Team;
myTeam.add(bowman);
/*myTeam.addAll();
myTeam.toArray(); */
console.log(myTeam);
console.log(characters);

