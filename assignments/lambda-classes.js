// CODE here for your Lambda Classes
/* ----- */
// Person Class
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person {
  constructor (personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// Instructor Class
// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor (instructorAttrs) {
    super (instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo (subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade (student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  popQuiz (student, subject) {
    const points = Math.ceil(Math.random() * 5);
    console.log(`Pop Quiz on ${subject}!`);
    if (Math.random() > .5){
      console.log(`Good answer! ${student.name} receives ${points} points.`);
      student.grade += points;
    } else {
      console.log(`Back to the TK for you! ${student.name} is docked ${points} points.`);
      student.grade -= points;
    }
  }
}

// Student Class
// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor (studentAttrs) {
    super (studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects; // Array!
    this.grade = studentAttrs.grade;
  }
  listsSubjects () {
    for (const subject of this.favSubjects) {
      console.log(subject);
    }
  }
  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
  graduate () {
    if (this.grade > 70) {
      console.log(`Congratulations, ${this.name}! You graduate with a ${this.grade}%, now go make money.`);
    } else {
      console.log(`Unfortunately a ${this.grade}% is not sufficient to graduate. Back to the TK for you, ${this.name}!`);
    }
  }
}

// Project Manager Class
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
  constructor (pmAttrs) {
    super (pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp (channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
  }
  debugsCode (student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

// Test classes
// Instructors:
const jimBob = new Instructor ({
  name: 'JimBob',
  age: '35',
  location: 'SLC',
  gender: 'M',
  specialty: 'Frontend',
  favLanguage: 'JavaScript',
  catchPhrase: 'Let\'s take a 5-minute break!'
});

const janeBeth = new Instructor ({
  name: 'JaneBeth',
  age: '37',
  location: 'LA',
  gender: 'F',
  specialty: 'CS',
  favLanguage: 'C',
  catchPhrase: 'Let\'s take a 7-minute break!'
});

// Students:
const lilRoy = new Student ({
  name: 'LittleRoy',
  age: '27',
  location: 'NYC',
  gender: 'M',
  previousBackground: 'Carpentry',
  className: 'FSW16',
  favSubjects: ['Preprocessing', 'Symantec Markup', 'Array Methods'],
  grade: 85
});

const bigRae = new Student ({
  name: 'Big Raylene',
  age: '22',
  location: 'PDX',
  gender: 'F',
  previousBackground: 'Construction',
  className: 'DS1',
  favSubjects: ['Linear Algebra', 'Statistics', 'Python Lists'],
  grade: 92
});

// Project Managers:
const maryBeth = new ProjectManager ({
  name: 'Mary Beth',
  age: '25',
  location: 'HOU',
  gender: 'F',
  specialty: 'Frontend',
  favLanguage: 'JavaScript',
  catchPhrase: 'You\'re all doing great!',
  gradClassName: 'FSW13',
  favInstructor: 'JimBob',
});

const michaelBen = new ProjectManager ({
  name: 'Michael Ben',
  age: '24',
  location: 'BR',
  gender: 'M',
  specialty: 'Backend',
  favLanguage: 'Ruby',
  catchPhrase: 'Keep it up y\'all!',
  gradClassName: 'FSW14',
  favInstructor: 'JaneBeth',
});

// // Test that instances are working
// // jimBob tests:
// console.log(jimBob.name) // 'JimBob'
// console.log(jimBob.age) // '35',
// console.log(jimBob.location) // 'SLC',
// console.log(jimBob.gender) // 'M',
// console.log(jimBob.specialty) // 'Frontend',
// console.log(jimBob.favLanguage) // 'JavaScript',
// console.log(jimBob.catchPhrase) // 'Let\'s take a 5-minute break!'
// jimBob.demo('Banjo');
// jimBob.grade(bigRae, 'Banjo');

// // janeBeth tests:
// console.log(janeBeth.name) // 'JaneBeth'
// console.log(janeBeth.age) // '37',
// console.log(janeBeth.location) // 'LA',
// console.log(janeBeth.gender) // 'F',
// console.log(janeBeth.specialty) // 'CS',
// console.log(janeBeth.favLanguage) // 'C',
// console.log(janeBeth.catchPhrase) // 'Let\'s take a 7-minute break!'
// janeBeth.demo('CS');
// janeBeth.grade(lilRoy, 'CS');

// // lilRoy tests:
// console.log(lilRoy.name) //: 'LittleRoy',
// console.log(lilRoy.age) //: '27',
// console.log(lilRoy.location) //: 'NYC',
// console.log(lilRoy.gender) //: 'M',
// console.log(lilRoy.previousBackground) //: 'Carpentry',
// console.log(lilRoy.className) //: 'FSW16',
// console.log(lilRoy.favSubjects) //: ['Preprocessing', 'Symantec Markup', 'Array Methods']
// lilRoy.listsSubjects();
// lilRoy.PRAssignment('JS-I');
// lilRoy.sprintChallenge('JavaScript');

// // bigRae tests:
// console.log(bigRae.name) //: 'Big Raylene',
// console.log(bigRae.age) //: '22',
// console.log(bigRae.location) //: 'PDX',
// console.log(bigRae.gender) //: 'F',
// console.log(bigRae.previousBackground) //: 'Construction',
// console.log(bigRae.className) //: 'DS1',
// console.log(bigRae.favSubjects) //: ['Linear Algebra', 'Statistics', 'Python Lists']
// bigRae.listsSubjects();
// bigRae.PRAssignment('PY-I');
// bigRae.sprintChallenge('DescriptiveStatistics');

// // maryBeth tests:
// console.log(maryBeth.name) //: 'Mary Beth',
// console.log(maryBeth.age) //: '25',
// console.log(maryBeth.location) //: 'HOU',
// console.log(maryBeth.gender) //: 'F',
// console.log(maryBeth.specialty) //: 'Frontend',
// console.log(maryBeth.favLanguage) //: 'JavaScript',
// console.log(maryBeth.catchPhrase) //: 'You\'re all doing great!',
// console.log(maryBeth.gradClassName) //: 'FSW13',
// console.log(maryBeth.favInstructor) //: 'JimBob',.
// maryBeth.standUp('#fsw16');
// maryBeth.debugsCode(lilRoy, 'Arrays');

// // michaelBen tests:
// console.log(michaelBen.name) //: 'Michael Ben',
// console.log(michaelBen.age) //: '24',
// console.log(michaelBen.location) //: 'BR',
// console.log(michaelBen.gender) //: 'M',
// console.log(michaelBen.specialty) //: 'Backend',
// console.log(michaelBen.favLanguage) //: 'Ruby',
// console.log(michaelBen.catchPhrase) //: 'Keep it up y\'all!',
// console.log(michaelBen.gradClassName) //: 'FSW14',
// console.log(michaelBen.favInstructor) //: 'JaneBeth',
// michaelBen.standUp('#DS1');
// michaelBen.debugsCode(bigRae, 'Constructors');

// Test grade attribute and popQuiz method
console.log(lilRoy.grade);
janeBeth.popQuiz(lilRoy, 'banjo');
console.log(lilRoy.grade);

// Test graduate method
lilRoy.graduate();