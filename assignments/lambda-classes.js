// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }
  speak() {
    return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(students, subject) {
    return `${student.name} receives a perfect score on the ${subject}`;
  }
}

class Students extends Person {
  constructor(studentsAttributes) {
    super(studentsAttributes);
    this.previousBackground = studentsAttributes.previousBackground;
    this.className = studentsAttributes.className;
    this.favSubjects = studentsAttributes.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp() {
    return `${this.NewName} annouces to ${
      this.channel
    }, at @channel standy times!`;
  }
  debugsCode() {
    return `${this.newName} debugs ${arya.name}'s code on the ${this.subject}`;
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
