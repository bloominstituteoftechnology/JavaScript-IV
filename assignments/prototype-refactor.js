class GameObject {
    constructor(attributes) {
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game.`;
    }
  }
  
  class CharacterStats extends GameObject {
    constructor(characterAttributes) {
      super(characterAttributes);
      this.healthPoints = characterAttributes.healthPoints;
    }
    takeDamage() {
      if (this.healthPoints > 0) {
        return `${this.name} took damage.`;
      } else {
        this.destroy;
        return `${this.name} is dead.`;
      }
    }
  }
  
  class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
      super(humanoidAttributes);
      this.team = humanoidAttributes.team;
      this.weapons = humanoidAttributes.weapons;
      this.language = humanoidAttributes.language;
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }
  
  class Villain extends Humanoid {
    constructor(villainAttributes) {
      super(villainAttributes);
    }
    castSpell(otherPlayer) {
      otherPlayer.healthPoints -= 2;
      if (otherPlayer.healthPoints > 0) {
        return `${this.name} attacked ${otherPlayer.name}! \n${
          otherPlayer.name
        }'s HP: ${otherPlayer.healthPoints} \n${this.name}'s HP: ${
          this.healthPoints
        }`;
      } else {
        console.log(otherPlayer.destroy());
        return `${this.name} KILLED ${otherPlayer.name}!`;
      }
    }
  }
  
  class Hero extends Humanoid {
    constructor(heroAttributes) {
      super(heroAttributes);
    }
    slash(otherPlayer) {
      otherPlayer.healthPoints -= 2;
      if (otherPlayer.healthPoints > 0) {
        return `${this.name} attacked ${otherPlayer.name}! \n${
          otherPlayer.name
        }'s HP: ${otherPlayer.healthPoints} \n${this.name}'s HP: ${
          this.healthPoints
        }`;
      } else {
        console.log(otherPlayer.destroy());
        return `${this.name} KILLED ${otherPlayer.name}!`;
      }
    }
  }
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  const mephisto = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 6
    },
    healthPoints: 10,
    name: "Mephisto",
    team: "Demon World",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  const gargantuan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 6
    },
    healthPoints: 10,
    name: "Gargantuan",
    team: "Sky World",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  console.log("--------------------------");
  
  console.log(mephisto.castSpell(gargantuan));
  console.log("--------------------------");
  
  console.log(gargantuan.slash(mephisto));
  console.log("--------------------------");
  
  console.log(mephisto.castSpell(gargantuan));
  console.log("--------------------------");
  
  console.log(gargantuan.slash(mephisto));
  console.log("--------------------------");
  
  console.log(mephisto.castSpell(gargantuan));
  console.log("--------------------------");
  
  console.log(mephisto.castSpell(gargantuan));
  console.log("--------------------------");
  
  console.log(mephisto.castSpell(gargantuan));