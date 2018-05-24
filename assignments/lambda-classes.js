
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}. I am from ${this.location}`;
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
  grade(student, subject) {
    return `${student.name} received a perfect score on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel} standy times!`;
  }
  debugsCode(student, subject) {
    return `${student.name}'s code on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects(subjects) {
    subjects = this.favSubjects;

    subjects.forEach((subject) => {
      console.log(subject);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

// instructors
const emily = new Instructor({
  name: 'Emily',
  age: 35,
  gender: 'F',
  specialty: 'Mobile Web',
  favLanguage: 'JavaScript',
  catchPhrase: 'The hard way is the easy way.'
});

const zoe = new Instructor({
  name: 'Zoe',
  age: 42,
  gender: 'F',
  specialty: 'Django',
  favLanguage: 'Toml',
  catchPhrase: 'Fake it \'til you make it.'
});

// Project Managers
const stephan = new ProjectManager({
  name: 'Stephan',
  age: 26,
  gender: 'M',
  specialty: 'iOS',
  favLanguage: 'Swift',
  catchPhrase: 'It ain\'t over \'til it\'s over',
  gradClassName: 'CS5',
  favInstructor: 'Zoe'
});

const jess = new ProjectManager({
  name: 'Jess',
  age: 30,
  gender: 'F',
  specialty: 'Machine Learning',
  favLanguage: 'R',
  catchPhrase: 'Copy/Paste until you can\'t',
  gradClassName: 'CS1',
  favInstructor: 'Emily'
});

// Students

const ciara = new Student({
  name: "Ciara",
  age: 31,
  location: 'NJ',
  gender: 'F',
  previousBackground: 'Web Developer',
  className: 'CS11',
  favSubjects: ['HTML', 'CSS', 'Python', 'Data Science']
});

const jon = new Student({
  name: "Jon",
  age: 29,
  location: 'WY',
  gender: 'M',
  previousBackground: 'Office Assistant',
  className: 'CS18',
  favSubjects: ['JavaScript', 'Ruby on Rails', 'MySQL']
});

console.log(emily.catchPhrase);
console.log(emily.demo('Preprocessors'));

console.log(zoe.catchPhrase);
console.log(zoe.grade(ciara, 'DOM'));

console.log(stephan.catchPhrase);
console.log(stephan.standUp('show-it-off'));

console.log(jess.catchPhrase);
console.log(jess.debugsCode(ciara, 'DOM'));

console.log(ciara);
console.log(ciara.previousBackground);
console.log(ciara.listsSubjects());
console.log(jon);
console.log(jon.sprintChallenge('React'));
