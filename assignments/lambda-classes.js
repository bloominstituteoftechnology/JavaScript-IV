// CODE here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    // This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
    return console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
  }
}

class Instructor extends Person {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return console.log(`Today we are learning about ${subject}.`)
  }
  grade(student, subject) {
    return console.log(`${student} receives a perfect score on ${subject}.`)
  }
  evaluate(student) {
    student.grade += (Math.random() < 0.5 ? -1 : 1)*(Math.round(Math.random() * 10));
    return student.grade;
  }
}

class Student extends Person {
  constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }
  listsSubjects() {
    return this.favSubjects.forEach(subject => {console.log(subject)})
  }
  PRAssignment(subject) {
    return console.log(`${this.name} has submitted a PR for ${subject}.`)
  }
  sprintChallenge(subject) {
    return console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return console.log(`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject) {
    return console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'StoneScript',
  specialty: 'Flint-end',
  catchPhrase: `Don't forget the homies`
});

const arnold = new Student({
  name: 'Arnold',
  location: 'Red Rock',
  age: 26,
  gender: 'male',
  previousBackground: 'quarry yard manager',
  className: 'CS-12',
  favSubjects: [
    'archaeology', 'paleontology', 'gerontology'
  ],
  grade: 85
})

const barney = new ProjectManager({
  name: 'Barney',
  location: 'Slate City',
  age: 28,
  gender: 'male',
  gradClassName: 'BC-13',
  favInstructor: 'Fred'
})

/*-------------
| Test Output |
-------------*/

console.log(fred.evaluate(arnold));
arnold.speak();
barney.speak();
fred.demo('BC+');
fred.grade('Tom', 'the test');
arnold.listsSubjects();
arnold.PRAssignment('Python');
arnold.sprintChallenge('Ruby');
console.log(arnold.grade);
console.log(barney.gradClassName);
barney.standUp('cs13_barneys-group');
barney.debugsCode('Arnold', 'StoneScript');