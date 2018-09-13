// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
} // end Person class

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
} // end Instructor class

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(subj => {
      console.log(subj);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
} // end Student class

class ProjectManager extends Instructor {
  constructor(PMProps) {
    super(PMProps);
    this.gradClassName = PMProps.gradClassName;
    this.favInstructor = PMProps.favInstructor;
  }
  standup(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
} // end of ProjectManager class

const josh = new Instructor({
  name: 'Josh',
  location: 'Salt Lake',
  age: 'UNKNOWN',
  gender: 'male',
  favLanguage: 'Javascript',
  specialty: 'rad-ness',
  catchPhrase: "Let's take a 5 minute break",
});

josh.demo('Javascript');

const evilJosh = new Instructor({
  name: 'Hsoj',
  location: 'Saltier Lake',
  age: 'INFINITE',
  gender: 'yes',
  favLanguage: 'LOLCODE',
  specialty: 'bad-ness',
  catchPhrase: "Let's not take a 5 minute break",
});

const zach = new Student({
  name: 'Zach',
  location: 'Minneapolis',
  age: '28',
  gender: 'male',
  previousBackground: 'failing',
  className: 'FSW14',
  favSubjects: ['JS', 'HTML', 'other'],
});

const evilZach = new Student({
  name: 'Hcaz',
  location: 'Heck',
  age: 'NONE',
  gender: 'yes',
  previousBackground: 'winning',
  className: 'CS14',
  favSubjects: ['evil JS', 'HTML', 'other'],
});

const luis = new ProjectManager({
  name: 'Luis',
  age: 24,
  location: 'Los Angeles',
  gender: 'male',
  specialty: 'PMing',
  favLanguage: 'Javascript',
  catchPrase: "That's tricky",
  gradClassName: 'CS10',
  favInstructor: 'Josh',
});

const evilLuis = new ProjectManager({
  name: 'Evil Luis',
  age: 42,
  location: 'San Francisco',
  gender: 'male',
  specialty: 'Not PMing',
  favLanguage: 'Evil Javascript',
  catchPrase: "That's not so tricky",
  gradClassName: 'CS100',
  favInstructor: 'Hsoj',
});
