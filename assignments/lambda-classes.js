// CODE here for your Lambda Classes
// class GameObject{
//     constructor(attr){
//       this.createdAt = attr.createdAt;
//       this.dimensions = attr.dimensions;
//     }
//     destroy() {
//       return `Object was removed from the game.`;
//     }
//   }

class Person {
    constructor(attr){
        this.name = attr.name;
        this.location = attr.location;
        this.age = attr.age;
        this.gender = attr.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// class CharacterStats extends GameObject {
//     constructor(charStatsOptions) {
//       super(charStatsOptions);
//       this.hp = charStatsOptions.hp;
//       this.name = charStatsOptions.name;
//     }
//     takeDamage() {
//       return `${this.name} took damage.`;
//     }
//   }

class Instructor extends Person {
    constructor(attr2){
        super(attr2);
        this.specialty = attr2.specialty;
        this.favLanguage = attr2.favLanguage;
        this.catchPhrase = attr2.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${this.subject}`;
    }

    grade(student, subject){
        return `​​${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attr3){
        super(attr3);
        this.previousBackground = attr3.previousBackground;
        this.className = attr3.className;
        this.favSubjects = attr3.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(attr4){
        super(attr4);
        this.gradClassName = attr4.gradClassName;
        this.favInstructor = attr4.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
const Jeff = new ProjectManagers({
    name: "Jeff",
    location: "USA",
    age: 28,
    gender: "male",
    className: "CS10",
    favInstructor: "Josh"
})
const Sagar = new Instructor({
    name: 'Sagar',
    location: 'San Francisco',
    age: 27,
    gender: 'male',
    specialty: "JS",
    favLanguage: "CSS",
    catchPhrase: "hello world"
  });

  const Thuy = new Student ({
      name: "Thuy",
      location: "Seattle",
      age: 28,
      gender: "female",
      previousBackground: "astronaut",
      favSubjects: "Ruby"
  });
  console.log(Sagar.speak());
  console.log(Sagar.grade(Thuy, "JS"));
  console.log(Thuy.sprintChallenge("Javascript I-IV"));
  console.log(Jeff.debugsCode(Thuy, "CSS"));