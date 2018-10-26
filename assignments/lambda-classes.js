// CODE here for your Lambda Classes

//BASE CLASS///////////////////////////
class Person {
  constructor(attributes) {
    // attributes
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}
//Instructor class////////////////////
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  gradeStudent(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  markGrade(Student) {
    return (Student.grade - Math.random()) ||
     (Student.grade + Math.random());
     console.log(`${Student.name} got a ${Student.grade}!`)
  }

}

//Student Class//////////////////////////////////////

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade
  }
  listsSubjects() {
    console.log(this.favSubjects);
  }
  PRAssignment(student, subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(student, subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}

//Project Manager Class//////////////////////////////////////

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
}
}

//New Instructor Objects////////////////////
const Fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const Cali = new Instructor({
  name: "Cali",
  location: "Chicago",
  age: 25,
  gender: "female",
  favLanguage: "python",
  specialty: "Back-End",
  catchPhrase: `The homies have been forgotten`
});

//New Student Objects//////////////////////////////////

const Jack = new Student({
  name: "Jack",
  location: "up the hill",
  age: 88,
  gender: "male",
  previousBackground: "Tiger Juggling",
  className: "fswp3",
  favSubject: "Python basics",
  grade:'44'
});

const Jill = new Student({
  name: "Jill",
  location: "up the hill",
  age: 99,
  gender: "female",
  previousBackground: "Lion Catching",
  className: "fswp3",
  favSubject: "React",
  grade:'88'
});

//New Project Manager Objects//////////////////////////////////

const Conan = new ProjectManager({
  name: "Conan",
  location: "in battle bathing in the blood of his enemies",
  age: "imortal so age has lost all meaning",
  gender: "male",
  gradClassName: "Ancient battleaxing of time immemorial",
  favInstructor: "Great Shaman Blargggg"
});

const Nathan = new ProjectManager({
  name: "Nathan",
  location: "LA",
  age: "3",
  gender: "male",
  gradClassName: "Xavier school for the gifted",
  favInstructor: "Professor Xavier"
});

console.log(Conan.age);
console.log(Conan.standUp(42345));
console.log(Conan.debugsCode(Jill, 'Hemotology'));
console.log(Fred.speak())
console.log(Cali.markGrade(Jack))