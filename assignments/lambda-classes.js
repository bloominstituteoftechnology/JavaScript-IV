class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    console.log(`Today's subject is ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  changeGrade(student) {
    student.grade += Math.floor(Math.random() * Math.floor(20)) - 10; //changes grade by plus or minus 10
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = Math.floor(Math.random() * Math.floor(99)) + 1;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
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
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const joe = new Student({
  name: 'Joe',
  location: 'Bedrock',
  age: 17,
  gender: 'male',
  previousBackground: 'HS student',
  className: 'CS23',
  favSubjects: ['CSS', 'HTML', 'JavaScript']
});
const harry = new ProjectManager({
  name: 'Harry',
  location: 'Bedrock',
  age: 31,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'DADA1',
  favInstructor: 'Snape'
});

fred.speak();
fred.demo('hard knocks');
fred.grade(joe, 'CSS');
joe.listsSubjects();
joe.PRAssignment('JavaScript-IV');
joe.sprintChallenge('JavaScript Week');
harry.standUp('DADA12');
harry.debugsCode(joe, 'Charms')
console.log(joe.grade);