// CODE here for your Lambda Classes

// ***** Person Class *****
class Person {
  constructor (info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
    this.gender = info.gender;
  }

  speak () {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//***** Instructor Class *****
class Instructor extends Person {
  constructor (info) {
    super(info);
    this.specialty = info.specialty;
    this.favLanguage = info.favLanguage;
    this.catchPhrase = info.catchPhrase;
  }

  demo (subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade (student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  gradeCheck (student) {
    while (student.graduate() === false) {
      console.log(`${student.name}'s grade is ${student.grade}. Keep grading`);
      student.grade += Math.floor((Math.random() * (5 - (-4)) + (-4)));
    }

    console.log(`${student.name} is ready to graduate!`);
  }
}

// *****Student Class *****
class Student extends Person {
  constructor (info) {
    super(info);
    this.previousBackground = info.previousBackground;
    this.className = info.className;
    this.favSubjects = info.favSubjects;
    this.grade = info.grade
  }

  listsSubjects () {
    console.log(`${this.name}'s favorite subjects are:`)
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate () {
    if (this.grade > 70) {
      return true;
    }

    return false;
  }
}

// ***** Project Manager Class *****
class ProjectManager extends Instructor {
  constructor (info) {
    super(info);
    this.gradClassName = info.gradClassName;
    this.favInstructor = info.favInstructor;
  }

  standUp (channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`);
  }

  debugsCode (student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const josue = new Student ({
  name: 'Josue',
  location: 'Chicago',
  age: '25',
  gender: 'male',
  previousBackground: 'Warehouse Worker',
  className: 'CS12',
  favSubjects: ['HTML', 'JavaScript'],
  grade: 60
});

const valerie = new Student ({
  name: 'Valerie',
  location: 'New York City',
  age: '24',
  gender: 'female',
  previousBackground: 'Clothing Designer',
  className: 'CS 11',
  favSubjects: ['CSS', 'Bootstrap', 'React'],
  grade: 91
});

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const sarah = new Instructor({
  name: 'Sarah',
  location: 'Seattle',
  age: 26,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: 'Sisters before misters'
});

const levi = new ProjectManager ({
  name: 'Levi',
  location: 'Austin',
  age: 29,
  gender: 'male',
  favLanguage: 'Ruby',
  specialty: 'Front-end',
  catchPhrase: 'Live with no regrets',
  gradClassName: 'CS2',
  favInstructor: 'Josh'
});

const angelo = new ProjectManager ({
  name: 'Angelo',
  location: 'L.A.',
  age: 27,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: 'Just keep swimming',
  gradClassName: 'CS3',
  favInstructor: 'Sean'
});

console.log(fred);
console.log(sarah);
console.log(josue);
console.log(valerie);
console.log(levi);
console.log(angelo);

josue.speak();
valerie.speak();
fred.speak();
sarah.speak();
levi.speak();
angelo.speak();

fred.demo("React");
levi.demo("CSS");
sarah.grade(valerie, "Bootstrap");
angelo.grade(josue, "CSS");

josue.listsSubjects();
valerie.listsSubjects();

josue.PRAssignment("JavaScript");
valerie.PRAssignment("React");

josue.sprintChallenge("React");
valerie.sprintChallenge("JavaScript");

levi.standUp("CS12");
angelo.standUp("CS12");

levi.debugsCode(josue, "HTML");
angelo.debugsCode(valerie, "CSS");

sarah.gradeCheck(valerie);
levi.gradeCheck(josue);
