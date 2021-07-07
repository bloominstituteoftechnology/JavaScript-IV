// CODE here for your Lambda Classes

  
class Person {
    constructor (attributes) {
      this.age = attributes.age;
      this.name = attributes.name;
      this.location = attributes.location;
    }

    speak () {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor (instAttributes) {
        super (instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }

    demo(subject) {
      return `Today we are learning about ${subject}.`;
    }

    grade(student , subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
      }
}


class Student extends Instructor {
    constructor (stuAttributes) {
      super (stuAttributes);
      this.previousBackground =stuAttributes.previousBackground;
      this.className = stuAttributes.className;
      this.favSubjects = stuAttributes.favSubjects;
    }

   listSubjects () {
      return `${this.name} offers a greeting in ${this.language}.`;
    }

    PRAssignment() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }

    sprintChallenge () {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

class TeamLeads extends Instructor {
    constructor (TLAttributes) {
      super (TLAttributes);
      this.gradClassName =TLAttributes.gradClassName;
      this.favInstructor = TLAttributes.favInstructor;
    }

   standUp (slack) {
      return `${this.name} announcest to ${slack}, @channel standy times!​​​​​`;
    }

    debugsCode(student) {
        return `${this.name} debugs ${student.name}'s code on .`;
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


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  const heroOfTime = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Link',
    team: 'Kokiri',
    weapons: [
      'Master Sword',
      'Ocarina of Time',
    ],
    language: 'Hylian',
  });

  const darkPrince = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Ganondorf',
    team: 'Gerudo',
    weapons: [
      'Magic',
    ],
    language: 'Hylian',
  });
