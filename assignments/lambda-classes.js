// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class Instructor extends Person {
  constructor(personAttributes) {
    super(personAttributes);
    this.specialty = personAttributes.specialty;
    this.favLanguage = personAttributes.favLanguage;
    this.catchPhrase = personAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}


class Student extends Person {
  constructor(personAttributes) {
    super(personAttributes);
    this.previousBackground = personAttributes.previousBackground;
    this.className = personAttributes.className;
    this.favSubjects = personAttributes.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}


class ProjectManager extends Person {
  constructor(personAttributes) {
    super(personAttributes);
    this.gradClassName = personAttributes.gradClassName;
    this.favInstructor = personAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}


const josh = new Instructor({
  name: 'josh',
  location: 'Utah',
  age: 35,
  gender: 'male',
  favLanguage: 'React',
  specialty: 'Full Stack',
  catchPhrase: `Waddup`
});


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 45,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Yabba Dabba Doo`
});




const joe = new Student({
  name: 'joe',
  location: 'California',
  age: 25,
  gender: 'male',
  previuosBackground: 'NodeJS',
  className: 'FSW 14',
  favSubjects: ['JS', 'HTML', 'CSS', 'LESS' ]
});

const larry = new Student({
  name: 'larry',
  location: 'Florida',
  age: 55,
  gender: 'male',
  previousBackground: 'PHP',
  className: 'FSW 14',
  favSubjects: ['LESS', 'CSS', 'HTML', 'JS']
});




const luis = new ProjectManager({
  name: 'luis',
  location: 'california',
  age: 25,
  gender: 'male',
  gradClassName: 'FSW 14',
  favInstructor: 'josh'
});

const gary = new ProjectManager({
  name: 'gary',
  location: 'Florida',
  age: 55,
  gender: 'male',
  gradClassName: 'FSW 14',
  favInstructor: 'fred'
});


