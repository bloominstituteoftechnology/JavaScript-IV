// CODE here for your Lambda Classes


class Person {
  constructor(properties) {
    this.name = properties.name;
    this.age = properties.age;
    this.location = properties.location;
    this.gender = properties.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}


class Instructor extends Person {
  constructor(properties) {
    super(properties);
    this.specialty = properties.specialty;
    this.favLanguage = properties.favLanguage;
    this.catchPhrase = properties.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}


class Student extends Person {
  constructor(properties) {
    super(properties);
    this.previousBackground = properties.previousBackground;
    this.className = properties.className;
    this.favSubjects = properties.favSubjects;
  }

  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are:`);
    this.favSubjects.forEach(item => console.log(`  ${item}`));
  }

  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}


class ProjectManager extends Instructor {
  constructor(properties) {
    super(properties);
    this.gradClassName = properties.gradClassName;
    this.favInstructor = properties.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}


// populate our school

const dan = new Instructor({
  name: 'Dan',
  location: 'Salt Lake City',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Yabba dabba doo!`
});


const josh = new Instructor({
  name: 'Josh',
  location: 'Seattle',
  age: 32,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Snake snake snake`
});


const jacob = new ProjectManager({
  name: 'Jacob',
  location: 'Portland',
  age: 28,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Full-stack',
  catchPhrase: `Make mine a venti, please`,
  gradClassName: 'CS1',
  favInstructor: 'Dan'
});


const moises = new ProjectManager({
  name: 'Moises',
  location: 'San Francisco',
  age: 30,
  gender: 'male',
  favLanguage: 'Javascript',
  specialty: 'React',
  catchPhrase: `Just do it`,
  gradClassName: 'CS2',
  favInstructor: 'Josh'
});


const ryan = new Student({
  name: 'Ryan',
  location: 'Denver',
  age: 26,
  gender: 'male',
  previousBackground: 'Short-order cook',
  className: 'CSPT2',
  favSubjects: ['Javascript', 'React', 'Less']
});


const abi = new Student({
  name: 'Abigayle',
  location: 'Dallas',
  age: 30,
  gender: 'female',
  previousBackground: 'Graphic Design',
  className: 'CSPT2',
  favSubjects: ['CSS', 'Javascript', 'Python']
});


// Now have them do some stuff

console.log('\nInstructors:');
console.log('\nDan:');
dan.demo('CSS');
dan.grade(ryan, 'Javascript');

console.log('\nJosh:');
josh.demo('Less');
josh.grade(abi, 'CSS');


console.log('\nProject Managers:');
console.log('\nJacob:');
jacob.standUp('cspt2_jacob');
jacob.debugsCode(ryan, 'Javascript');

console.log('\nMoises:');
moises.standUp('cspt2_moises');
moises.debugsCode(abi, 'CSS');


console.log('\nStudents:');
console.log('\nRyan:');
ryan.listsSubjects();
ryan.prAssignment('Javascript-III');
ryan.sprintChallenge('Javascript Fundamentals');

console.log('\nAbi:');
abi.listsSubjects();
abi.prAssignment('Preprocessing-II');
abi.sprintChallenge('Responsive-Less');

