class Person {
  constructor(personAttrs){
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttrs){
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  gradeThis(student, subject) {
    const theGrade = (Math.floor(Math.random()*40)+1)-20;
    const oldGrade = student.grade;
    student.grade += theGrade;
    return `${this.name} gave ${student.name} a ${theGrade} on their ${subject} assignment. ${student.name}'s grade was: ${oldGrade} and now it is: ${student.grade}`;
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
    this.weeks = studentAttrs.weeks;
  }

  listSubjects() {
    this.favSubjects.forEach((subject, index) => console.log(`${index+1}: ${subject}`));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate(){
    if(this.grade >= 70){
      return `${this.name} has graduated with a grade of ${this.grade} after ${this.weeks} weeks!`;
    }else{
      this.weeks++;
      return `${this.name} is not elligible to graduate with ${this.gender === 'M' ? 'his' : 'her'} current grade of ${this.grade}`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttrs){
    super(PMAttrs);
    this.gradClassName = PMAttrs.gradClassName;
    this.favInstructor = PMAttrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const nick = new Student({
  name: 'Nick',
  age: 21,
  location: 'Colorado',
  gender: 'M',
  previousBackground: 'UX/UI Work',
  className: 'FSW 16',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  grade: Math.floor(Math.random()*30)+1,
  weeks: 0
});

const fred = new Student({
  name: 'Fred',
  age: 30,
  location: 'Crystal Cove',
  gender: 'M',
  previousBackground: 'Mystery Solving',
  className: 'FSW 16',
  favSubjects: ['HTML', 'CSS', 'JavaScript', 'Monster Catching'],
  grade: Math.floor(Math.random()*30)+1,
  weeks: 0
});

const scooby = new Student({
  name: 'Scooby Doo',
  age: 5,
  location: 'Crystal Cove',
  gender: 'M',
  previousBackground: 'Eating Scooby Snacks',
  className: 'FSW 16',
  favSubjects: ['HTML', 'CSS', 'JavaScript', 'Eating Scooby Snacks'],
  grade: Math.floor(Math.random()*30)+1,
  weeks: 0
});

const jeremy = new Instructor({
  name: 'Jeremy',
  age: 26,
  location: 'California',
  gender: 'M',
  specialty: 'React',
  favLanguage: 'Javascript',
  catchPhrase: `it's me, Jeremy!`
});

const zach = new Instructor({
  name: 'Zach',
  age: 35,
  location: 'Washington',
  gender: 'M',
  specialty: 'Python',
  favLanguage: 'Python',
  catchPhrase: `Woah guys it's me Zach.`
});

const kelly = new Instructor({
  name: 'Kelly',
  age: 29,
  location: 'Texas',
  gender: 'F',
  specialty: 'Backend',
  favLanguage: 'Javascript',
  catchPhrase: `Hey everyone, it's me Kelly`
});

const velma = new ProjectManager({
  name: 'Velma',
  age: 25,
  location: 'Crystal Cove',
  gender: 'F',
  gradClassName: 'CSW 14',
  favInstructor: 'Kelly'
});

const shaggy = new ProjectManager({
  name: 'Shaggy',
  age: 23,
  location: 'Crystal Cove',
  gender: 'M',
  gradClassName: 'CSW 13',
  favInstructor: 'Jeremy'
});

const daphne = new ProjectManager({
  name: 'Daphne',
  age: 24,
  location: 'Crystal Cove',
  gender: 'F',
  gradClassName: 'CSW 14',
  favInstructor: 'Zach'
});

console.log(fred.speak());
console.log(kelly.speak());
console.log(shaggy.speak());

fred.listSubjects();
console.log(fred.PRAssignment('Javascript-III'));
console.log(fred.sprintChallenge('Javascript'));

console.log(kelly.demo('React'));
console.log(kelly.grade(scooby, 'CSS'));

console.log(shaggy.standUp('fsw16_Shaggy'));
console.log(shaggy.debugsCode(fred,'Javascript'));

const randSubs = ['Javascript', 'React', 'Html', 'CSS', 'Python', 'Computer Science', 'MYSQL', 'Back End', 'Front End'];

while(scooby.grade < 70){
  console.log(shaggy.gradeThis(scooby, randSubs[Math.floor(Math.random()*randSubs.length)]));
  console.log(scooby.graduate());
}