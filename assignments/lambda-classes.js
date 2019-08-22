// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.newName = personAttributes.name;
    this.newAge = personAttributes.age;
    this.newLocation = personAttributes.location;
  }
  speak() {
    return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.newSpecialty = instructorAttributes.specialty;
    this.newFavLanguage = instructorAttributes.favLanguage;
    this.newCatchPhrase = instructorAttributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${this.newFavSubjects}`;
  }
  grade() {
    return `${this.name} receives a perfect score on the ${this.subject}}`;
  }
}

class Students extends Person {
  constructor(studentsAttributes) {
    super(studentsAttributes);
    this.newPreviousBackground = studentsAttributes.previousBackground;
    this.newClassName = studentsAttributes.className;
    this.newFavSubjects = studentsAttributes.favSubjects;
  }
  listsSubjects() {
    return `${this.newFavSubjects}`;
  }
  PRAssignment() {
    return `${this.newName} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge() {
    return `${this.newName} has begun sprint challenge on ${this.subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.newGradClassName = pmAttributes.gradClassName;
    this.newFavInstructor = pmAttributes.favInstructor;
  }
  standUp() {
    return `${this.NewName} annouces to ${
      this.channel
    }, at @channel standy times!`;
  }
  debugsCode() {
    return `${this.newName} debugs ${student.name}'s code on the ${
      this.subject
    }`;
  }
}

//*********** INSTRUCTORS ***********//

const eddard = new Instructor({
  name: "Eddard Stark",
  location: "Winterfell",
  age: 45,
  favLanguage: "Common Tongue",
  specialty: "Sword Fighting",
  catchPhrase: `The man who passes the sentence should swing the sword.`
});

const jon = new Instructor({
  name: "Jon Snow",
  location: "Castle Black",
  age: 23,
  favLanguage: "Common Tongue",
  specialty: "Sword Fighting",
  catchPhrase: `Winter is coming!`
});

const madQueen = new Instructor({
  name: "Daenarys Targeryan",
  location: "Essos",
  age: 22,
  favLanguage: "Dothraki & Valerian",
  specialty: "Riding Dragons",
  catchPhrase: "The Iron Throne is mine! Dracarys rawr!"
});

//*********** STUDENTS ***********//
const arya = new Students({
  name: "Arya Stark",
  location: "Winterfell",
  age: 15,
  className: "Web 23",
  favSubjects: ["HTML", "CSS", "JavaScript", "Phython"],
  specialty: "Faceless Assassin",
  catchPhrase: `A girl has no name!`
});

const joffrey = new Students({
  name: "Joffrey Baratheon",
  location: "Kings Landing",
  age: 15,
  className: "Web 23",
  favSubjects: ["Ruby ", "C++ ", "PHP ", "C#"],
  specialty: "Being an ass",
  catchPhrase:
    'They say Stannis never smiles. I"ll give him a Red smile, from ear to ear'
});

//*********** PROJECT MANAGERS ***********//

const tyrion = new ProjectManager({
  name: "Tyrion Lannister",
  location: "Kings Landing",
  age: 35,
  gradClassName: "Blackwater University",
  favInstructor: "Sir Bron"
});

const varys = new ProjectManager({
  name: "Lord Varys",
  location: "Kings Landing",
  age: 48,
  gradClassName: "Wisperers University",
  favInstructor: "Mad King"
});

// Instructors
console.log(eddard.speak());
console.log(jon.speak());
console.log(madQueen.speak());
console.log(jon.demo());
console.log(madQueen.demo());
console.log(eddard.demo());
console.log(madQueen.grade());

// Student
console.log(arya.listsSubjects());
console.log(joffrey.listsSubjects());
console.log(arya.PRAssignment());
console.log(joffrey.sprintChallenge());

// Project Managers
console.log(tyrion.standUp());
console.log(varys.debugsCode());
