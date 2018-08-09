class Person  {
    constructor(traits){
    this.name = traits.name;
    this.age = traits.age;
    this.location = traits.location;
    this.gender = traits.gender;
  }
  
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
  };
  
  class Instructor extends Person {
      constructor(detailsOfInstructor) {
        super(detailsOfInstructor)
        this.specialty = detailsOfInstructor.specialty;
        this.favLanguage = detailsOfInstructor.favLanguage;
        this.catchPhrase = detailsOfInstructor.catchPhrase;
  }
      demo() {
        return `Today we are learning about ${subject.name}`
      }

      grade() {
        return `${student.name} receives a perfect score on ${subject.name}`  
      }
  };
  
  
  class Student extends Person {
      constructor(studentDetails) {
        super(studentDetails)
        this.previousBackground = studentDetails.previousBackground;
        this.classname = studentDetails.classname;
        this.favSubjects = studentDetails.faveSubjects;
  }
        listsSubjects() {
            return `${this.favSubjects}`;
        }
        PRAssignement() {
            return `${student.name} has submitted a PR for ${subject.name}`
        }
        sprintChallenge () {
            return `${student.name} has begun sprint challenge on ${subject.name}` /////Look into the xxxx.name syntax////
        }
  };
  
  class ProjectManager extends Instructor {
    constructor(detailsOfPm) {
        super(detailsOfPm)
      this.gradClassName = detailsOfPm.gradClassName;
      this.favInstructor = detailsOfPm.favInstructor;
}
    standUp() {
      return `${student.name} announces to ${channel.name}, @channel standy times!`
    }

    debugsCode() {
      return `${PM.name} debugs ${student.name}'s code on ${subject.name}.`  
    }
};

  
const fred = new Person({
    name: 'Fred',
    age: 104,
    location: 'Bedrock',
    gender: 'M'
  });  

const arlo = new Student({
    name: 'Arlo',
    age: 20,
    location: 'Arksville',
    gender: 'M',
    previousBackground: 'Pro Bass Fisherman',
    classname: 'CS90',
    favSubjects: ['CompSci for n00bs', 'Torture Code', 'RocknRoll Smoke WiFi']
  });

  const guthrie = new Student({
    name: 'Guthrie',
    age: 32,
    location: 'Londale',
    gender: 'F',
    previousBackground: 'Zoo Cat Keeper',
    classname: 'CS93',
    favSubjects: ['Rowdy Debugging 101', 'Torture Code', 'RocknRoll Smoke WiFi']
  });

  const monty = new Student({
    name: 'Fred',
    age: 90,
    location: 'Nonletty Corner',
    gender: 'F',
    previousBackground: 'Member of the Skankin\'Pickles',
    classname: 'CS90',
    favSubjects: ['Rowdy Debugging 101', 'Hardware Buffet: Eating Right', 'RocknRoll Smoke WiFi']
  });

  const korko = new Instructor({
    name: 'Korko',
    age: 49,
    location: 'Bakersfield',
    gender: 'M',
    specialty: 'HACK',
    favLanguage: 'GO',
    catchPhrase: 'There\'s never a good time to check the time.'
  });

  const slapdash = new Instructor({
    name: 'Slapdash',
    age: 10,
    location: 'Riverdale',
    gender: 'F',
    specialty: 'Search Engines',
    favLanguage: 'JavaScript',
    catchPhrase: 'Score one for the old kipper.'
  });

  const chauncy = new Instructor({
    name: 'Chauncy',
    age: 36,
    location: 'Dalton',
    gender: 'F',
    specialty: 'kernel bustin',
    favLanguage: 'JavaScript',
    catchPhrase: 'Rick Roll? Rick ROCK!'
  });

  const smeckleroot = new ProjectManager({
    name: 'Smeckleroot',
    age: 10000,
    location: 'Mesopotamia',
    gender: 'F',
    specialty: 'Stick Craft',
    favLanguage: 'StoneScript',
    catchPhrase: 'Gold.',
    gradClassName: 'CS5',
    favInstructor: 'Nettion'
  });

  const rondo = new ProjectManager({
    name: 'Rondo',
    age: 22,
    location: 'Manhattan',
    gender: 'M',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Solid and Liquid....Gas Man!',
    gradClassName: 'CS1',
    favInstructor: 'Tom from MySpace'
  });

  const rj = new ProjectManager({
    name: 'RJ',
    age: 23,
    location: 'Mechnicsville',
    gender: 'F',
    specialty: 'Vue.js',
    favLanguage: 'C++',
    catchPhrase: 'I feel the need, the need for speed.',
    gradClassName: 'CS4',
    favInstructor: 'Austen'
  });
  
//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2
//     },
//     hp: 15,
//     name: 'Sir Mustachio',
//     faction: 'The Round Table',
//     weapons: ['Giant Sword', 'Shield'],
//     language: 'Common Toungue'
//   });
  
//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4
//     },
//     hp: 10,
//     name: 'Lilith',
//     faction: 'Forest Kingdom',
//     weapons: ['Bow', 'Dagger'],
//     language: 'Elvish'
//   });
  
//   console.log(mage.createdAt); // Today's date
//   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//   console.log(swordsman.hp); // 15
//   console.log(mage.name); // Bruce
//   console.log(swordsman.faction); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(fred.age);
console.log(smeckleroot.catchPhrase);
console.log(monty.listsSubjects);