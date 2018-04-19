// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

const jose = new Person({ name: 'Jose', location: 'LA' });

console.log(jose.speak());

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}

// const ryan = new Instructor({
//   specialty: 'react',
//   favLanguage: 'javascript',
//   catchPhrase: 'none',
// });

// console.log(ryan.grade('luis', 'java'))

class Students extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackGround = attributes.previousBackGround;
    this.className = attributes.className;
    this.favSubject = attributes.favSubject;
  }
  listsSubjects() {
    return `${this.name} likes ${this.favSubject}`;
  }
}

const me = new Students({
  className: 10,
  name: 'ryan',
  favSubject: ['math', 'java', 'code'],
});

console.log(me.listsSubjects());
