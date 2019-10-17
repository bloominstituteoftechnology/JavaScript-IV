// CODE here for your Lambda Classes
/******Step 1: Create the classes for: Person, Instructor, Student, and Project Manager********/
//'Person' is the base class
class Person {
  constructor(parentAttributes) {
    this.name = parentAttributes.name;
    this.age = parentAttributes.age;
    this.location = parentAttributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

//'Instructor' class -> inherits(extends) from 'Person' class
class Instructor extends Person {
  constructor(instructorAttributes) {
    //super connects intructorAttributes to Person
    super(instructorAttributes);
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${this.speciality}`;
  }
  grade() {
    return `${this.name} receives a perfect score on ${this.favLanguage}`;
  }
}

//'Student' class -> inherits(extends) from the 'Person' class
class Student extends Person {
  constructor(studentAttributes) {
    //super connects studentAttributes to the 'Person' class
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.favSubjects}`;
  }
  sprintChallenge() {
    return `${this.name} has begun a sprint challenge on ${this.favSubjects}`;
  }
}

//'Project Manager' class -> inherits(extends) from the 'Instructor' class
class Project extends Instructor {
  constructor(projectAttributes) {
    //super connects projectAttributes to the 'Instructor class
    super(projectAttributes);
    this.gradClassName = projectAttributes.gradClassName;
    this.favInstructor = projectAttributes.favInstructor;
  }
  standUp() {
    return `${this.name} announces to the ${this.gradClassName}, @channel standy times and I'm back!.`;
  }
  debugsCode() {
    return `${this.name} debugs ${this.name} code on ${this.favSubjects}`;
  }
}

/*****STEP 2:CREATE PERSON, INSTRUCTOR(SAMPLE GIVEN TO US), STUDENT, AND PROJECT MANAGER OBJECTS */
//Sample Instructor object
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });

//Person object
const todd = new Person({
  name: 'Liam Murphy',
  age: 44,
  location: 'Halifax, Nova Scotia, Canada'
});

// Instructor object
const marina = new Instructor({
  name: 'Marina Baskova',
  age: '58',
  location: 'San Fran, California, United States',
  speciality: 'node.js',
  favLanguage: 'JavaScript',
  catchPhrase: 'Our team is the best!'
});

//Student object
const alicia = new Student({
  name: 'Alicia Murphy',
  age: 40,
  locaton: 'Toronto, Ontario, Canada',
  previousBackground: 'startups',
  className: 'Web25',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

//Project Manager object
const john = new Project({
  name: 'John Wick',
  age: 75,
  location: 'In hiding and healing from a beat down somewhere, Canada',
  gradClassName: 'Web 16',
  favInstructor: 'Don Murphy'
});

console.log(todd.speak()); //logs 'Hello, my name is Liam Murphy, I am from Halifax, Nova Scotia, Canada'
console.log(marina.demo()); //logs 'Today we are learning about node.js'
console.log(marina.grade()); //logs 'Marina Baskova receives a perfect score on JavaScript '
console.log(alicia.listSubjects()); //logs 'HTML, CSS, JavaScript'
console.log(alicia.PRAssignment()); //logs 'Alicia Murph has submitted a PR for HTML, CSS, JavaScript'
console.log(alicia.sprintChallenge()); //logs 'Alica Murphy has begun a sprint challenge on HTML, CSS, JavaScript'
console.log(john.standUp()); //logs 'John Wick announces to the Web 16, @channel standy times and I'm Back.'
console.log(john.debugsCode()); //logs 'John Wick debugs code on undefined'
