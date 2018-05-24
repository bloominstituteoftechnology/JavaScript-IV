// CODE here for your Lambda Classes

class Person {
  constructor(traits) {
    this.name = traits.name;
    this.age = traits.age;
    this.location = traits.location;
    this.gender = traits.gender;    
  }
  speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(teachTraits) {
    super(teachTraits);
    this.specialty = teachTraits.specialty;
    this.favLanguage = teachTraits.favLanguage;
    this.catchPhrase = teachTraits.catchPhrase;
  }   
  demo(subject) {
    if (subject > '') {
      return `Today, we are learning about ${subject}.`;
    }
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}!`;
  }
  tutor(student) {
    let grade = student.grade;
    let randomNum = Math.floor(Math.random()*24); 
    let upOrDown = Math.random() < 0.5 ? -1 : 1;
    let scoreChange = randomNum * upOrDown;
    if (grade) {
      return grade + scoreChange;
    }
  }
}

class Student extends Person {
  constructor(neoTraits) {
    super(neoTraits);
    this.previousBackground = neoTraits.previousBackground;
    this.className = neoTraits.className;
    this.favSubjects = neoTraits.favSubjects;
    this.grade = neoTraits.grade;
  }
  listsSubjects() {
    let list = this.favSubjects.join(', '); 
    return `${this.name}'s favorite subjects are: ${list}.`
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`     
  }
  graduate() {
    if (this.grade > 70) {
      let finalGrade = this.grade;
      return `Congratulations! You've passed our examinations with a score of ${finalGrade}. This means that you're ready to graduate! Go forth and prosper with code.` 
    }
    return `${this.name}'s score of ${this.grade} is not enough to graduate yet. Keep studying!`
  }
}

class ProjectManager extends Instructor {
  constructor(pmTraits) {
    super(pmTraits);
    this.gradClassName = pmTraits.gradClassName;
    this.favInstructor = pmTraits.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}: Hey @${channel}, it's standup time!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const beatrix = new Person({
  name: 'Beatrix',
  age: 28,
  location: 'Alexandria',
  gender: 'Female',
});

const bigBoss = new Instructor({
  name: 'John',
  age: 83,
  location: 'Unknown, USA',
  gender: 'Male',
  specialty: 'Covert Operations (and also redux)',
  favLanguage: 'CQC',
  catchPhrase: 'We are soldiers without borders, our purpose defined by the era we live in.'
});

const mark = new Student({
  name: 'Mark',
  age: 28,
  location: 'Florida',
  gender: 'Male',
  previousBackground: 'Jack-of-all-trades',
  className: 'CS11',
  favSubjects: ['Digital Art', 'JavaScript', 'UI Design', 'UX Heuristics & Theorycrafting', 'Game Design', 'Music'],
  grade: Math.floor(Math.random() * 10) + 65
});

const hiawatha = new ProjectManager({
  name: 'Hiawatha',
  age: 99,
  location: 'The Land Before Time',
  gender: 'Male',
  gradClassName: 'CS00: Reloaded',
  favInstructor: 'Merlin the Legendary Wizard'
})

console.log(beatrix.speak());
console.log(bigBoss.demo(bigBoss.favLanguage));
console.log(bigBoss.grade(beatrix,bigBoss.favLanguage));
console.log(mark.listsSubjects());
console.log(mark.PRAssignment(mark.favSubjects[2]));
console.log(mark.sprintChallenge(mark.favSubjects[4]));
console.log(hiawatha.standUp(`cs11`));
console.log(hiawatha.debugsCode(mark,mark.favSubjects[1]));

console.log(mark.grade);
console.log(hiawatha.tutor(mark));
console.log(mark.graduate());







