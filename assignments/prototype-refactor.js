/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  

class GameObject {
  constructor (attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
  };
  
  destroy() {
    return `${this.name} was removed from the game`;
  }
}

class CharacterStats extends GameObject {
  constructor (characterStatsAttributes) {
  super(characterStatsAttributes);
    this.hp = characterStatsAttributes.hp;
    this.name = characterStatsAttributes.name;
  }
  takeDamage () {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats{
  constructor (humanoidAttributes) {
  super (humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
  }
  greet (){
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
class Hero extends Humanoid {
  constructor (heroAttributes) {
  super(heroAttributes);
    this.magic = heroAttributes.magic;
    this.defenseMechanisms = heroAttributes.defenseMechanisms;
    this.allies = heroAttributes.allies;
  }

  attack() {
    //causes 3 dmg to villain
  }
  masterAttack() {
    //causes super awesome 5dmg attack to villain
  }
  usesMagic() {
    //uses magic to cause 4 dmg to villain
  }
}

class Villain extends Humanoid {
 constructor (villainAttributes) {
 super (villainAttributes);
   this.magic = villainAttributes.magic;
   this.defenseMechanisms = villainAttributes.defenseMechanisms;
   this.allies = villainAttributes.allies;
 }  

  firstAttack() {
  //causes 1 dmg to hero
  }
  secondAttack() {
  //causes super awesome 5dmg attack to hero
  }
  thirdAttack() {
  //causes 2 dmg to hero
  }
  usesMagic() {
  //uses magic to cause 3 dmg to hero
  }
}
 
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const link = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    hp: 18,
    name: 'Link',
    faction: 'Hyrule',
    weapons: [
      'Master Sword',
      'Bombs',
      'Bow and Arrows',
    ],
    language: 'Elvish',
    defenseMechanisms: ['shield', 'armor'],
    allies: ['Zelda', 'Forest Kingdom faction'],
    magic: 'magic wand',
  });

  const evil = new Villain({
   createdAt: new Date(),
   dimensions: {
      length: 3,
      width: 1,
      height:6,
    },
   hp:35,
   name: 'Ganondorf',
   weapons: [
    'Sword',
      ],
   defenseMechanisms: ['shield', 'armor'],
   allies: ['Mage Guild',],
   magic: 'magic staff',
  })
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(link.language);
  console.log(evil.defenseMechanisms)


  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!