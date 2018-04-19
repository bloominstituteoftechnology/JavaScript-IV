// CODE here for your Lambda Classes

// ==== Person ====
class Person {
  constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// ==== Instructor ====
class Instructor extends Person {
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

// ==== Student ====
class Student extends Person {
  constructor(studentAttributes){
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach(x => console.log(x));
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun the sprint challenge on ${subject}.`;
  }
}

// ==== Project Manager ====
class ProjectManager extends Instructor {
  constructor(projectManagerAttributes){
    super(projectManagerAttributes);
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
  }
  standUp(slackChannel){
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}


// Test classes

// Test person
const frank = new Person({
  'name': 'Frank',
  'age': '23',
  'location': 'San Diego, CA',
  'gender': 'M'
});

const jacob = new Person({
  'name': 'Jacob',
  'age': '35',
  'location': 'Atlanta, GA',
  'gender': 'M'
});

console.log(frank);
console.log(frank.speak());
console.log(jacob);
console.log(jacob.speak());

// Test instructor
const jackie = new Instructor({
  'name': 'Jackie',
  'age': '28',
  'location': 'Fort Worth, TX',
  'gender': 'F',
  'speciality': 'Front End Development, UX',
  'favLanguage': 'JavaScript',
  'catchPhrase': 'Shut the front door!'
});

const doug = new Instructor({
  'name': 'Doug',
  'age': '31',
  'location': 'Tampa, Fl',
  'gender': 'M',
  'speciality': 'MEAN Stack',
  'favLanguage': 'JavaScript',
  'catchPhrase': 'Computer says no'
});

console.log(jackie);
console.log(jackie.speak());
console.log(jackie.demo('HTML'));
// console.log(jackie.grade(studentObj, subject));

console.log(doug);
console.log(doug.speak());
console.log(doug.demo('LESS'));
// console.log(doug.grade(studentObj, subject));