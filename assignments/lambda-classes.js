// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
    // Methods
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{             // Child of Person
    // always in strict mode
  constructor(instructorAttributes) {        
    super(instructorAttributes)              // similar to Object.create
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  // Methods
  demo(subject) {
    if (!subject) {subject = lukeSubjects[Math.floor(Math.random()*lukeSubjects.length)  ]};
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    if (!student) {student = lukeSkywalker}
    if (!subject) {subject = lukeSubjects[Math.floor(Math.random()*lukeSubjects.length)  ]};
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}


class Student extends Person{          // Child of Person
  // always in strict mode
constructor(studentAttributes) {        
  super(studentAttributes)              // similar to Object.create
  this.previousBackground = studentAttributes.previousBackground;
  this.className = studentAttributes.className;
  this.favSubjects = studentAttributes.favSubjects;
}
// Methods
  listSubjects() {
    let allSubjects = `${this.favSubjects}`
    return allSubjects.split(',');
  }
  PRAssignment(subject) {
    if (!subject) {subject = lukeSubjects[Math.floor(Math.random()*lukeSubjects.length)  ]};
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    if (!subject) {subject = lukeSubjects[Math.floor(Math.random()*lukeSubjects.length)  ]};
    return `${this.name} has begun a sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor{          // Child of Instructor
  // always in strict mode
constructor(pmAttributes) {        
  super(pmAttributes)              // similar to Object.create
  this.gradClassName = pmAttributes.gradClassName;
  this.favInstructor = pmAttributes.favInstructor;
}
// Methods
  standUp(slackChannel) {
    const slackArr =['Blast!', 'Laserbrain', 'Walking-carpet', 'Scruffy-looking-Nerfherder', 'Flyboy', 'Son-of-a-Bantha', 'Thank-the-Maker', 'Droid-Work']
    if (!slackChannel) {slackChannel = slackArr[Math.floor(Math.random()*slackArr.length)  ]}
    console.log(slackChannel)
    return `${this.name} announces to @${slackChannel} standy times!`;
  }
  debugsCode(student, subject) {
    if (!student) {student = lukeSkywalker};
    if (!subject) {subject = lukeSubjects[Math.floor(Math.random()*lukeSubjects.length)  ]};
    return `${this.name} debugs ${lukeSkywalker.name}'s code on ${subject}.`;
  }
}

const yoda = new Instructor({
  name: 'Yoda',
  age: 900,
  location: 'Dagobah',
  gender: 'M',
  speciality: 'The Force',
  favLanguage: ['Object-Subject-Verb', 'Galactic Basic', 'inspirational speeches'],
  catchPhrase: "Do, or do not. There is no try.",
});

const lukeSkywalker = new Student({
  name: 'Luke Skywalker',
  age: 19,
  location: 'Tatooine',
  gender: 'M',
  previousBackground: ['farming', 'droids'],
  className: 'Young Jedi',
  favSubjects: ['aviation', 'The Force', 'lightsaber training'],
});



const oldBenKenobi = new ProjectManager({
  name: 'Obi-Wan Kenobi',
  age: 57,
  location: 'everywhere. I am omnipresent',
  gender: 'M',
  speciality: 'Sith Lords',
  favLanguage: ['Galactic Basic', 'Shyriiwook'],
  catchPhrase: 'Use the Force, Luke',
});

const lukeSubjects = lukeSkywalker.listSubjects();


console.log(lukeSkywalker.speak()); // Lilith offers a greeting in Elvish.
console.log(yoda.speak()); // Bruce took damage.
console.log(oldBenKenobi.speak()); // Sir Mustachio was removed from the game.


console.log(yoda.demo()); // Today's date
console.log(yoda.demo('Princesses')); // Bruce took damage.
console.log(yoda.grade(lukeSkywalker)); // Bruce

console.log(lukeSkywalker.listSubjects()); // { length: 1, width: 2, height: 4 }
console.log(lukeSkywalker.sprintChallenge()); // 15
console.log(lukeSkywalker.PRAssignment()); // Elvish


console.log(oldBenKenobi.standUp()); // The Round Table
console.log(oldBenKenobi.debugsCode()); // Staff of Shamalama

console.log(oldBenKenobi.demo()); // Today's date
console.log(oldBenKenobi.grade(lukeSkywalker)); // Bruce

