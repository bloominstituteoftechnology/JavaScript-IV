class GameObject {
    constructor(attributes) {
      this.createdAt = attributes.createdAt;
      this.dimensions = attributes.dimensions;
    }
  
    destroy() {
      return `${this.name} was removed from the game.`;
    }
  }
  
    class CharacterStats extends GameObject {
      constructor(characterStatsAttributes) {
      super(characterStatsAttributes);
      this.healthPoints = characterStatsAttributes.healthPoints;
      this.name = characterStatsAttributes.name;
      }
  
      takeDamage() {
        return `${this.name} took damage.`;
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
  
      removeHealth() {
        this.healthPoints--;
        return `${this.name} from team ${this.team} inflicted 1 damage with ${this.weapons}: ${this.healthPoints} health remaining.`;
      }
  
      dead() {
        if (this.healthPoints <= 0) {
          return this.destroy();
        }
      }
    }
  
    class Hero extends Humanoid {
      constructor(heroAttributes) {
        super(heroAttributes);
      }
  
      removeHealth() {
        this.healthPoints--;
        return `${this.name} from team ${this.team} inflicted 1 damage with ${this.weapons}: ${this.healthPoints} health remaining.`;
      }
  
      dead() {
        if (this.healthPoints <= 0) {
          return this.destroy();
        }
      }
    }
    
      const mage = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
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
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
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
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
      });
    
      const badGuy = new Villain({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 1,
        name: 'Rogue',
        team: 'Assassin Guild',
        weapons: [
          'Poison Dagger',
        ],
        language: 'Common Tongue',
      });
    
      const goodGuy = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 1,
        name: 'Paladin',
        team: 'Bringers of Light',
        weapons: [
          'Sword of Light',
        ],
        language: 'Common Tongue',
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
    
      console.log(badGuy.removeHealth());
      console.log(badGuy.dead());
      console.log(goodGuy.removeHealth());
      console.log(goodGuy.dead());