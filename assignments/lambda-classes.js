// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person{
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
  final(student) {
    let newGrade = 0;
    if (Math.random() > 0.5) {
      newGrade = student.grade - Math.round(Math.random() * 5);
    } else {
      newGrade = student.grade + Math.round(Math.random() * 5);
    }
    student.grade = newGrade;
    return newGrade;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }
  listsSubjects() {
    return (this.favSubjects);
  }
  prAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
  graduate() {
    if(this.grade >= 70) {
      return `Congratulations ${this.name}! You graduated!`
    } else {
      return `Sorry ${this.name}, you have not graduated yet.`
    }
  }
}

class PM extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}


const fred = new Instructor({
  'name': 'Fred',
  'age': 37,
  'location': 'Bedrock', 
  'gender': 'Male',
  'specialty': 'Front-end',
  'favLanguage': 'JavaScript',
  'catchPhrase': `Don't forget the homies`
});

const leslie = new PM({
  'name': 'Leslie',
  'age': 24,
  'location': 'New York', 
  'gender': 'Female',
  'specialty': 'Back-end',
  'favLanguage': 'Python',
  'catchPhrase': `Everything's gonna be alright`,
  'gradClassName': 'CS5',
  'favInstructor': 'Fred'
});

const mae = new Student({
  'name': 'Mae',
  'age': 30,
  'location': 'Chicago', 
  'gender': 'Female',
  'previousBackground': 'business management',
  'className': 'CS13',
  'favSubjects': ['LESS', 'HTML', 'JavaScript'],
  'grade': 75
});

console.log(fred);
console.log(leslie);
console.log(mae);
console.log(fred.speak());
console.log(fred.demo('Javascript'));
console.log(fred.grade(mae, 'HTML'));
console.log(leslie.speak());
console.log(leslie.standUp('lescode'));
console.log(leslie.debugsCode(mae, 'CSS'));
console.log(mae.speak());
console.log(mae.prAssignment('CSS'));
console.log(mae.sprintChallenge('CSS'));
console.log(mae.listsSubjects());

console.log(fred.final(mae));
console.log(mae.graduate());