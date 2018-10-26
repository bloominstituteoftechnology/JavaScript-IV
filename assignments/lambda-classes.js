// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location =  personAttr.location;
    this.gender = personAttr.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructors extends Person{
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  gradeMe(student) {
    let random = Math.round(Math.random());
    if(random === 0) {
      student.grade -= Math.floor(Math.random() * 10);
      console.log(student.grade);
    }
    else {
      student.grade += Math.floor(Math.random() * 10);
      console.log(student.grade);
    }
  }
}

class Students extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }
  listsSubjects() {
    //a method that logs out all of the student's favoriteSubjects one by one.
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if(this.grade > 70){
      console.log(`Congratulations! You are now ready to graduate!`);
    }
    else{
      console.log(`Keep working hard, you are not ready to graduate yet.`);
    }
  }
}

class ProjectManagers extends Instructors {
  constructor(projectManagersAttr) {
    super(projectManagersAttr);
    this.gradClassName = projectManagersAttr.gradClassName;
    this.favInstructor = projectManagersAttr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel stand up times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructors({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'Front-End',
  catchPhrase: 'Yabba Dabba Doo'
});

const barney = new Instructors({
  name: 'Barney',
  location: 'Bedrock',
  age: 36,
  gender: 'Male',
  favLanguage: 'Python',
  specialty: 'Back-End',
  catchPhrase: `Yabba Dabba Don't`
});

const xavier = new Students({
  name: 'Xavier',
  location: 'Houston',
  age: 25,
  gender: 'Male',
  previousBackground: 'Call Center Management',
  className: 'CSPT3',
  favSubjects: ['JavaScript', 'Blockchain'],
  grade: 70
});

const leslie = new Students({
  name: 'Leslie',
  location: 'Houston',
  age: 23,
  gender: 'Female',
  previousBackground: 'Hotel Hospitality',
  className: 'CSPT4',
  favSubjects: ['HTML', 'CSS', 'UI'],
  grade: 100
});

const judy = new ProjectManagers({
  name: 'Judy',
  location: 'Orbit City',
  age: 16,
  gender: 'Female',
  favLanguage: 'Emojicode',
  specialty: 'UI',
  catchPhrase: `:)`,
  gradClassName: 'CSFT1000',
  favInstructor: 'Fred'
});

const elroy = new ProjectManagers({
  name: 'Elroy',
  location: 'Orbit City',
  age: 8,
  gender: 'Male',
  favLanguage: 'Haskell',
  specialty: 'Sysadmin',
  catchPhrase: 'Hello',
  gradClassName: 'CSFT1000',
  favInstructor: 'Barney'
});

console.log(fred);
console.log(barney);
console.log(xavier);
console.log(leslie);
console.log(judy);
console.log(elroy);
fred.speak();
xavier.speak();
judy.speak();
xavier.listsSubjects();
leslie.listsSubjects();
leslie.PRAssignment('JavaScript');
leslie.sprintChallenge('HTML');
barney.demo('Python');
fred.grade(xavier, 'JavaScript');
judy.standUp('CSPT3');
elroy.debugsCode(leslie, 'HTML');
judy.demo('Python');
elroy.grade(xavier, 'JavaScript');
xavier.graduate();
fred.gradeMe(xavier);
judy.gradeMe(xavier);
fred.gradeMe(xavier);
xavier.graduate();
