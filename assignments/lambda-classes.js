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

// Test student
const george = new Student({
  'name': 'George',
  'age': '25',
  'location': 'New York, NY',
  'gender': 'M',
  'previousBackground': 'Math Tutor',
  'className': 'CS20',
  'favSubjects': ['Python', 'R']
});

const paige = new Student({
  'name': 'Paige',
  'age': '18',
  'location': 'Reno, NV',
  'gender': 'F',
  'previousBackground': 'High School Student',
  'className': 'CS11',
  'favSubjects': ['HTML', 'CSS', 'JS']
});

console.log(george);
console.log(george.speak());
console.log(george.listsSubjects());
console.log(george.PRAssignment('Node I'));
console.log(george.sprintChallenge('Node'));

console.log(paige);
console.log(paige.speak());
console.log(paige.listsSubjects());
console.log(paige.PRAssignment('Graphs II'));
console.log(paige.sprintChallenge('Graphs'));

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