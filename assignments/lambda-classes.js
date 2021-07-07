// CODE here for your Lambda Classes
class Person {
  constructor(attribs) {
    this.name = attribs.name;
    this.age = attribs.age;
    this.location = attribs.location;
    this.gender = attribs.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attribs) {
    super(attribs)
    this.specialty = attribs.specialty;
    this.favLanguage = attribs.favLanguage;
    this.catchPhrase = attribs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
  // Sprint Challenge function
  sprintGrade(student) {  
    student.grade += Math.random() < 0.5 ? -5 : 5;
    return `${this.name} grades ${student.name}'s sprint and it changes their grade to ${student.grade}`
  }
}

class Student extends Person {
  constructor(attribs) {
    super(attribs)
    this.previousBackground = attribs.previousBackground;
    this.className = attribs.className;
    this.favSubjects = attribs.favSubjects;
    this.grade = attribs.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(x => console.log(x));
}
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }

  // Sprint Challenge function - showing as 'undefined'
  graduate(instructor) {
    while (this.grade < 70) {
      instructor.sprintGrade(this.student); 
      console.log(grade);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attribs) {
    super(attribs)
    this.gradClassName = attribs.gradClassName;
    this.favInstructor = attribs.favInstructor;
  }
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject ) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

// Test Person Objects
const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
});

const wilma = new Person({
  name: 'Wilma',
  location: 'Bedrock',
  age: 34,
  gender: 'female',
});


// Test Instructor Objects
const dan = new Instructor({
  name: 'Dan',
  location: 'Desert Town',
  age: 35,
  gender: 'male',
  favLanguage: 'Go',
  specialty: 'Front-end',
  catchPhrase: `Yo dawg, I heard you liked Mixins. So I put Mixins in your Mixins`
});

const cam = new Instructor({
  name: 'Cam',
  location: 'Alexa\s Mind Palace',
  age: 28,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `Alexa! play some sweet coding tunes`
});


// Test Student Objects
const james = new Student({
  name: 'James',
  location: 'Buffalo, NY',
  age: 29,
  gender: 'male',
  previousBackground: 'Customer Service',
  className: 'FSWPT3',
  favSubjects: ['Class Constructors', 'Java', 'Music Theory'],
  grade: 50
});
const elon = new Student({
  name: 'Elon',
  location: 'Fresno, California',
  age: 38,
  gender: 'male',
  previousBackground: 'failed entrepreneur',
  className: 'CS1',
  favSubjects: ['rockets', 'Car Engineering', 'Space Travel'],
  grade: 90
});

// Test Project Manager Objects
const brock = new ProjectManager({
  name: 'Brock',
  location: 'Republic of California',
  age: 25,
  gender: 'male',
  speciality: "Coaching",
  favLanguage: 'C++',
  catchPhrase: 'Welcome to STANDUP!!!!!',
  gradClassName: 'FSW10',
  favInstructor: 'Dan',
  
});
const lauren = new ProjectManager({
  name: 'Lauren',
  location: 'Miami, Florida',
  age: 30,
  gender: 'female',
  speciality: 'React Router',
  favLanguage: 'Japanese',
  catchPhrase: 'James gets all 3\'s!',
  gradClassName: 'CS2',
  favInstructor: 'Austin',
});

//Person method tests
console.log(fred.speak()); 
console.log(wilma.speak());

//instructor method tests
console.log(dan.grade(james, 'C'));
console.log(cam.demo(cam.favLanguage));

//Student method tests
console.log(james.listsSubjects()); //returns the list but also an undefined for some reason.
console.log(elon.PRAssignment('Java'));
console.log(james.sprintChallenge('Javascript'));

//ProjectManager method tests
console.log(brock.standup('FSWPT3'));
console.log(lauren.debugsCode(james, 'react'));

//Stretch goal tests
//Grade Change function
console.log(cam.sprintGrade(james, 'React')); // Grading function
console.log(james.graduate()); //Graduate method