// // CODE here for your Lambda Classes

// We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.

// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors

// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. 

// For example:
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
  constructor(property) {
    this.name = property.name;
    this.age = property.age;
    this.location = property.location;
    this.gender = property.gender;
  }
  speak() {
    console.log `Hello, may name is ${this.name}, I am from ${this.location}.`;
  }
}

// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(instructorproperty) {
    super(instructorproperty);
    this.specialty = instructorproperty.specialty;
    this.favLanguage = instructorproperty.favLanguage;
    this.catchPhrase = instructorproperty.catchPhrase;
  }
  demo(subject) {
    console.log `Today we are learning about ${subject}.`;
  }
  grade(Student, subject) {
    console.log `${Student.name} receives a perfect score on ${subject}.`;
  }
}

// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person {
  constructor(studentproperty) {
    super(studentproperty);
    this.previousBackground = studentproperty.previousBackground;
    this.className = studentproperty.className;
    this.favSubjects = studentproperty.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach(function(element) {
      console.log(element);
    });
    
  }
  PRAssignment(subject) {
    console.log `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    console.log `${this.name} has begun sprint challenge on ${subject}.`;
  }
}


// Project Mananger
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following uniqe props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManangers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManager extends Instructor {
  constructor(pmproperty) {
    super(pmproperty);
    this.gradClassName = pmproperty.gradClassName;
    this.favInstructor = pmproperty.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @${channel} stand-up time!`);
  }
  debugsCode(Student, subject) {
    console.log `${this.name} debugs ${Student.name}'s code on ${subject}.`;
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

  const josh = new Instructor({
    name: 'Josh',
    location: 'USA',
    age: 36,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Banjo',
    catchPhrase: `Isn't this awesome guys?`
  });

  const medusa = new Instructor({
    name: 'Medusa',
    location: 'Underworld',
    age: 999,
    gender: 'female',
    favLanguage: 'snake',
    specialty: 'Turning you into stone',
    catchPhrase: `:stares:`
  });

  const elvis = new Student({
    name: 'Elvis',
    location: 'Los Angeles',
    age: 32,
    gender: 'male',
    favLanguage: 'the one he is currently learning',
    specialty: 'walking dogs and bjj',
    catchPhrase: `You ready?`,
    previousBackground: 'teaching',
    className: 'FSW14',
    favSubjects: ['HTML/CSS', 'Javascript', 'BJJ', 'math']
  });

  const diego = new Student({
    name: 'Diego',
    location: 'Chicago',
    age: 31,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'networking',
    catchPhrase: `Eyyyyyyyyyyy`,
    previousBackground: 'accounting',
    className: 'FSW15',
    favSubjects: ['taxes', 'music', 'python', 'ruby']
  });

  const arya = new Student({
    name: 'Arya',
    location: 'Winterfell',
    age: 16,
    gender: 'female',
    favLanguage: 'silence',
    specialty: 'swordplay',
    catchPhrase: `Not today.`,
    previousBackground: 'princess',
    className: 'FSW16',
    favSubjects: ['revenge', 'swordfighting', 'stealth']
  });

  const wolverine = new ProjectManager({
    name: 'Wolverine',
    location: 'New York',
    age: 38,
    gender: 'male',
    favLanguage: 'english',
    specialty: 'cracking jokes',
    catchPhrase: `bub.`,
    gradClassName: 'CS1',
    favInstructor: 'Professor X',
  });

  const turk = new ProjectManager({
    name: 'Turk',
    location: 'Sacred Heart Medical',
    age: 35,
    gender: 'male',
    favLanguage: 'bro talk',
    specialty: 'surgery',
    catchPhrase: `I love brinner`,
    gradClassName: 'CS2',
    favInstructor: 'Dr. Surgery',
  });

  const peach = new ProjectManager({
    name: 'Princess Peach',
    location: 'Mushroom Kingdom',
    age: 20,
    gender: 'female',
    favLanguage: 'mushroom',
    specialty: 'getting kidnapped by Bowser',
    catchPhrase: `oh no!`,
    gradClassName: 'CS3',
    favInstructor: 'Queen of Mushroom Kingdom',
  });

fred.demo('CSS');
medusa.grade(elvis,'python');
arya.listSubjects();
diego.PRAssignment('Javascript');
elvis.sprintChallenge('Preprocessors');
wolverine.standUp('FSW15-Wolverine');
turk.debugsCode(elvis, 'Javascript IV');
arya.speak();
peach.standUp('FSW-16-Peach');

// Stretch Problem
// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.