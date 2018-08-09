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
        this.faveSubjects = studentDetails.faveSubjects;
  }
        listsSubjects() {
            return `${subject.name}`;
        }
        PRAssignement() {
            return '${student.name} has submitted a PR for ${subject.name}'
        }
        sprintChallenge () {
            return '${student.name} has begun sprint challenge on ${subject.name}' /////Look into the xxxx.name syntax////
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