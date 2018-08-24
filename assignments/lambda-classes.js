// CODE here for your Lambda Classes
class Person {
  constructor(name, age, gender, location) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.location = location;
  }

  get speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }

}

class Instructor extends Person {
  constructor(name, age, gender, location, favLanguage, catchPhrase) {
    super(name, age, gender, location);
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(name, age, gender, location, previousBackground, className, favSubjects) {
    super(name, age, gender, location);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listsSubjects() {
    // for (let i = 0; i < favSubjects.length; i++) {
      return this.favSubjects;
    // }
  }

  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${this.subject}`;
  }

  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge on ${this.subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(favLanguage, catchPhrase, gradClassName, favInstructor) {
    super(favLanguage, catchPhrase);
    this.fgradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(channel) {
    return `{$this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor(
'Fred',
'Bedrock',
37,
  'male',
  'JavaScript',
'Front-end',
`Don't forget the homies`
);

const pascale = new Student('Pascale', 30, 'female', 'New York', 'artist', 'CSPT2', [
  'math', 'science', 'english'
]);

console.log(pascale);
