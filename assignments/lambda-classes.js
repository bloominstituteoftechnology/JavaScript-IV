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
    return console.log(
      `Hello, my name is ${this.name}, I am from ${this.location}.`
    );
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
    return console.log(`Today we are learning about ${this.subject}`);
  }
  grade() {
    return console.log(
      `${this.name} receives a perfect score on ${this.subject}`
    );
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
    return console.log(`${this.favSubjects}`);
  }
  PRAssignment() {
    return console.log(
      `${this.name} has submitted a PR for ${this.favSubjects}`
    );
  }
  sprintChallenge() {
    return console.log(
      `${this.name} has begun a sprint challenge on ${this.favSubjects}`
    );
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
    return console.log(
      `${this.name} announces to the ${this.channel}, @channel standy times}`
    );
  }
  debugsCode() {
    console.log(`${this.name} debugs ${this.name} code on ${this.favSubjects}`);
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
  speciality: 'excellent communication',
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
const don = new Project({
  name: 'Donald Murphy',
  age: 75,
  location: 'In hiding and healing from a beat down somewhere, Canada',
  gradClassName: 'Web 16',
  favInstructor: 'John Wick'
});

console.log(todd.speak()); //logs 'Hello, my name is Liam Murphy, I am from Halifax, Nova Scotia, Canada'
