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

class Instructor extends Person {             // Child of Person
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
  nextAssignment (student) {
    if (!student) {student = lukeSkywalker};
    let currStudentScore = `${student.grade()}`;
    let plusMinus = 0;
    Math.random() > 0.5 ? plusMinus = -1: plusMinus = 1;
    let assignmentScore = Math.floor(Math.random()*10) * plusMinus;
    return parseInt(`${currStudentScore} + ${assignmentScore}`);
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
  grade() {
    return Math.floor(Math.random()*100);
  }

  gitCurrGrade() {
    let currGrade = `${this.grade()}` * 1;
    return currGrade;
  }
  graduate() {
    const currGraduatingScore = `${this.gitCurrGrade()}` * 1;
    currGraduatingScore + `${yoda.nextAssignment()}`;
    // console.log(`currGraduatingScore`, currGraduatingScore)
    return currGraduatingScore >= 70 ? `Congrats! Your final grade is ${currGraduatingScore}%. You are a Jedi!`: this.graduate();
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


const anakinSkywalker = new Student({
  name: 'Anakin Skywalker',
  age: 45,
  location: 'Tatooine',
  gender: 'M',
  previousBackground: ['slave'],
  className: 'Padawan',
  favSubjects: ['racing podracing', 'repairing droids', 'The Force', 'lightsaber training'],
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



const allStudents = [lukeSkywalker, anakinSkywalker];

const lukeSubjects = lukeSkywalker.listSubjects();
const anakinSubjects = anakinSkywalker.listSubjects();

// let gitStatus = `${lukeSkywalker.graduate()}`;
// console.log(gitStatus);

console.log(lukeSkywalker.speak()); 
console.log(yoda.speak()); 
console.log(oldBenKenobi.speak()); 


console.log(yoda.demo()); 
console.log(yoda.demo('Princesses')); 
console.log(yoda.grade(lukeSkywalker)); 
console.log(yoda.nextAssignment(anakinSkywalker))

console.log(lukeSkywalker.listSubjects());
console.log(lukeSkywalker.sprintChallenge()); 
console.log(lukeSkywalker.PRAssignment()); 
console.log(anakinSkywalker.listSubjects()); 
console.log(anakinSkywalker.sprintChallenge()); 
console.log(anakinSkywalker.PRAssignment()); 
console.log(anakinSkywalker.grade())
console.log(lukeSkywalker.graduate());
console.log(anakinSkywalker.graduate());

console.log(oldBenKenobi.standUp()); 
console.log(oldBenKenobi.debugsCode()); 
console.log(oldBenKenobi.demo()); 
console.log(oldBenKenobi.grade(anakinSkywalker)); 

















