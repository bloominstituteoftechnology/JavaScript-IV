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
    let favorites = this.favSubjects;

//     for (var i = 0; i < favorites.length ; i++) {
// console.log(favorites[i]);
// }

favorites.forEach(favorite =>
              console.log( favorite));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(favLanguage, catchPhrase, gradClassName, favInstructor) {
    super(favLanguage, catchPhrase);
    this.fgradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor('Fred', 37, 'male', 'Bedrock', 'JavaScript', `Don't forget the homies`);

const pascale = new Student('Pascale', 30, 'female', 'New York', 'artist', 'CSPT2', ['math', 'science', 'english']);

pascale.listsSubjects();
