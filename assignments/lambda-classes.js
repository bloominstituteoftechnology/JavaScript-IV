// Base Class

class Person {
  constructor(attr) {
    this.name = attr.name,
    this.age = attr.age,
    this.location = attr.location,
    this.gender = attr.gender
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty,
    this.favLanguage = attr.favLanguage,
    this.catchPhrase = attr.catchPhrase
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground,
    this.className = attr.className,
    this.favSubjects = attr.favSubjects
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => {
      console.log(subject);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName,
    this.favInstructor = attr.favInstructor
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// Instances

const fred = new Instructor({
  name: 'Fred',
  age: '32',
  location: 'Utah',
  gender: 'Male',
  specialty: 'Front-End',
  catchPhrase: "Big Boss Time"
});

const dan = new Instructor({
  name: 'dan',
  age: '24',
  location: 'Utah',
  gender: 'Male',
  specialty: 'Back-End',
  catchPhrase: "Build Fam"
});

const diane = new Student({
  name: 'Diane',
  age: '45',
  location: 'NYC',
  gender: 'F',
  previousBackground: 'Scientist',
  className: 'FSW16',
  favSubjects: ['Biology', 'Front-End', 'Data-Science']
});

const chris = new Student({
  name: 'Chris',
  age: '19',
  location: 'Dallas',
  gender: 'M',
  previousBackground: 'Farmer',
  className: 'FSW16',
  favSubjects: ['JavaScript', 'Front-End', 'Server Side Rendering']
});

const mary = new Student({
  name: 'Mary',
  age: '32',
  location: 'Seattle',
  gender: 'F',
  previousBackground: 'WRiter',
  className: 'FSW15',
  favSubjects: ['Books', 'Back-End', 'Data-Science']
});

const sara = new ProjectManager({
  name: 'Sara',
  age: '28',
  location: 'Miami',
  gender: 'F',
  specialty: 'Back-End',
  catchPhrase: "Aww yeah!",
  gradClassName: 'FSW10',
  favInstructor: 'Josh Knell'
});

const richard = new ProjectManager({
  name: 'Richard',
  age: '32',
  location: 'San Francisco',
  gender: 'M',
  specialty: 'CSS',
  catchPhrase: "Chill My Dawgi",
  gradClassName: 'CS8',
  favInstructor: 'Ryan Hamblin'
});

//

fred.speak();
fred.demo('webapis');
dan.grade(diane, 'databases');
diane.speak();
diane.listsSubjects();
chris.sprintChallenge('Responsive Web Design');
mary.PRAssignment('JavaScript III');
sara.speak();
sara.demo('HTML5');
sara.standUp('#fsw16-sara');
richard.grade(mary, 'Redux');
richard.debugsCode(chris, 'Prototypal Inheritance');