// CODE here for your Lambda Classes

// Person class is the base-class

class Person {
  constructor(personAttrib) {
    this.name = personAttrib.name;
    this.age = personAttrib.age;
    this.gender = personAttrib.gender;
    this.location = personAttrib.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.\n`);
  }
}

// Instructor class

class Instructor extends Person {
  constructor(instructorAttrib) {
    super(instructorAttrib);
    this.specialty = instructorAttrib.specialty;
    this.favLanguage = instructorAttrib.favLanguage;
    this.catchPhrase = instructorAttrib.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.\n`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.\n`);
  }
}

// Student class

class Student extends Person {
  constructor(studentAttrib) {
    super(studentAttrib);
    this.previousBackground = studentAttrib.previousBackground;
    this.className = studentAttrib.className;
    this.favSubjects = studentAttrib.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach((item) =>{
      console.log(`${item}`);
    });
  }
  PRAssignment(subject) {
    console.log(`\n${this.name} has submitted a PR for ${subject}.\n`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun the sprint challenge on ${subject}.\n`);
  }
}

// ProjectManager class

class ProjectManager extends Instructor {
  constructor(pmAttrib) {
    super(pmAttrib);
    this.gradClassName = pmAttrib.gradClassName;
    this.favInstructor = pmAttrib.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!\n`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.\n`)
  }
}

const fred = new Instructor({
  name: 'Fred',
  age: 37,
  gender: 'male',
  location: 'Bedrock',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const eddy = new Student({
  name: 'Eddy',
  age: 24,
  gender: 'male',
  location: 'New York',
  previousBackground: 'Information Technology',
  className: 'CS10',
  favSubjects: ['Programming', 'Hacking', 'Math']
})

const dresean = new ProjectManager({
  name: 'Dre\'Sean',
  age: 28,
  gender: 'male',
  location: 'North Carolina',
  favLanguage: 'Python',
  specialty: 'JavaScript',
  catchPhrase: 'There is no dance without the dancers.',
  gradClassName: 'CS1',
  favInstructor: 'Josh Knell'
})

// Testing properties and methods for Instructor class

console.log(`Hello my name is ${fred.name} and I am the instructor for CS10. I am ${fred.age} years old and I am from ${fred.location}. My gender is ${fred.gender}. My favorite language is ${fred.favLanguage} and my specialty is ${fred.specialty}. My favorite catchphrase is "${fred.catchPhrase}."\n`);
fred.speak();
fred.demo('JavaScript');
fred.grade(eddy, 'JavaScript');


// Testing properties and methods for Student class

console.log(`Hello my name is ${eddy.name} and I am a student in ${eddy.className}. I am ${eddy.age} years old and I am from ${eddy.location}. My gender is ${eddy.gender}. My favorite subjects are ${eddy.favSubjects} and my previous background is ${eddy.previousBackground}.\n`);
eddy.speak();
eddy.listSubjects();
eddy.PRAssignment('JavaScript-IV');
eddy.sprintChallenge('JavaScript');


// Testing properties and methods for ProjectManager class

console.log(`Hello my name is ${dresean.name} and I am a project manager for ${eddy.className}. I am a graduate of ${dresean.gradClassName}. I am ${dresean.age} years old and I am from ${dresean.location}. My gender is ${dresean.gender}. My favorite language is ${dresean.favLanguage} and my specialty is ${dresean.specialty}. My favorite instructor is ${dresean.favInstructor}. My favorite catchphrase is "${dresean.catchPhrase}."\n`);
dresean.speak();
dresean.demo('React');
dresean.grade(eddy, 'JavaScript-IV');
dresean.standUp('cs10_dreseanninjas');
dresean.debugsCode(eddy,'JavaScript');
