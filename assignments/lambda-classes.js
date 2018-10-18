/*
  === Person ===
  * name
  * age
  * location
  * gender
  * speak() // returns the string: 'Hello my name is <name>, I am from <location>.'
*/
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

/*
  === Instructor ===
  Inherit from Person
  * specialty
  * favLanguage
  * catchPhrase
  * demo(subject) // returns the phrase: 'Today we are learning about <subject>'
  * grade(student, subject) // returns the phrase: '<student.name> receives a perfect score on <subject>'
*/
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  gradePoint(student) {
    let add = Math.random() > .3 || false;
    let point = Math.floor(Math.random() * 10);

    if (add) {
      student.grade += point;
    } else {
      student.grade -= point;
    }
  }
}

/*
  === Student ===
  Inherit from Person
  * previousBackground
  * className
  * favSubjects
  * listSubjects() // logs out the student's favorite subject one by one.
  * PRAssignment(subject) // logs out the phrase: '<student.name> has submitted a PR for <subject>'
  * sprintChallenge(student, subject) // logs out the phrase: '<student.name> has begun sprint challenge on <subject>'
*/
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = 50; // stretch: add a grade prop with default value
  }
  listSubjects() {
    this.favSubjects.forEach(e => console.log(e));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  checkGraduation(instructor) { // stretch: add a method to check for graduation.

    // automatically grade the student if not enough grade to graduate
    while(this.grade <= 70) {
      console.log(`${this.name}, your current grade is ${this.grade}. You need a higher grade to graduate!`)
      instructor.gradePoint(this);
    }

    console.log(`Congratulation, ${this.name}! You've graduated from Hogwarts School of Witchcraft and Wizardry.`);
  }
}

/*
  === ProjectManager ===
  Inherit from Instructor
  * gradClassName
  * favInstructor
  * standUp(channel) // logs out the phrase '<name> announces to <channel>, @channel standy times!'
  * debugsCode(student, subject) // logs out the phrase: '<name> debugs <student.name>'s code on <subject>'
*/
class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

/*
  === Test Lambda Classes ===
*/

const instOne = new Instructor({
  name: 'Minerva McGonagall',
  age: 58,
  location: 'Hogsmeade',
  gender: 'Female',
  specialty: 'Poition',
  favLanguage: 'HTML',
  catchPhrase: 'The Dark Arts are many, varied, ever-changing, and eternal.'
})

const instTwo = new Instructor({
  name: 'Remus Lupin',
  age: 39,
  location: 'Shrieking Shack',
  gender: 'Male',
  specialty: 'Defense Against The Dark Art',
  favLanguage: 'CSS',
  catchPhrase: 'Do I detect a flicker of fear?.'
})

const studentOne = new Student({
  name: 'Harry Potter',
  age: 11,
  location: 'Hogwarts',
  gender: 'Male',
  previousBackground: 'half-blood',
  className: 'Gryffindor',
  favSubjects: ['Defense Against the Dark Art', 'Flying']
})

const studentTwo = new Student({
  name: 'Luna Lovegood',
  age: 11,
  location: 'Hogwarts',
  gender: 'Female',
  previousBackground: 'pure-blood',
  className: 'Ravenclaw',
  favSubjects: ['History of Magic', 'Potions', 'Charms']
})

const studentThree = new Student({
  name: 'Hermione Granger',
  age: 11,
  location: 'Hogwarts',
  gender: 'Female',
  previousBackground: 'muggle',
  className: 'Gryffindor',
  favSubjects: ['History of Magic', 'Transfiguration']
})

const PMOne = new ProjectManager({
  name: 'Oliver Wood',
  age: 15,
  location: 'Hogwarts',
  gender: 'Male',
  specialty: 'Flying',
  favLanguage: 'CSS',
  catchPhrase: 'What up',
  gradClassName: 'CS2',
  favInstructor: 'McGonagall'
})

const PMTwo = new ProjectManager({
  name: 'George Weasley',
  age: 15,
  location: 'Hogwarts',
  gender: 'Male',
  specialty: 'Defense Against The Dark Art',
  favLanguage: 'JavaScript',
  catchPhrase: 'Wooohooo'
})

console.log(instOne.speak());
console.log(instOne.demo('Transfiguration'));
console.log(instOne.grade(studentOne, 'Transfiguration'));

console.log(studentOne.speak());
studentOne.listSubjects();
studentThree.PRAssignment('History of Magic');
studentTwo.sprintChallenge('Flying');

PMTwo.standUp('flex');
console.log(PMOne.grade(studentTwo, 'Flying'));

studentThree.checkGraduation(PMTwo);