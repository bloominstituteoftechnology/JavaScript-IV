//====Classes====

//Person
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//Instructor
class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  gradeStudent(student) {
    student.grade += (Math.round((Math.random() - 0.5) * 40));
    if (student.grade < 0) student.grade = 0;
    if (student.grade > 100) student.grade = 100;
    return student.grade;
  }
}

//Student
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }
  listSubjects() {
    return this.favSubjects.forEach(subject => {console.log(subject)});
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

//ProjectManager
class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

//====Tests====

//Test Person
const bert = new Person({
  name: 'Bert',
  age: '45',
  location: 'Sesame Street',
  gender: 'male'
});

bert.speak();
console.log(bert.gender);

//Test Student
const doug = new Student({
  name: 'Doug',
  age: '11',
  location: 'Bluffington',
  gender: 'male',
  previousBackground: 'php',
  className: 'CS13',
  favSubjects: ['User Interface', 'Web APIs'],
  grade: 52
})

doug.speak();
doug.listSubjects();
doug.PRAssignment();
doug.sprintChallenge('Responsive Design');
console.log(doug.age);
console.log(doug.previousBackground);

//Test Instructor
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

fred.speak();
fred.demo('JavaScript');
fred.grade(doug, 'React')

//Test ProjectManager
const clarissa = new ProjectManager({
  name: 'Clarissa',
  location: 'some suburban town',
  age: '14',
  gender: 'female',
  gradClassName: 'CS4',
  favInstuctor: 'Josh Knell'
});

clarissa.speak();
clarissa.demo('Node');
clarissa.standUp('cs13_clarissa');
clarissa.debugsCode(doug, 'Relational Databases')
console.log(clarissa.gradClassName);
console.log(clarissa.gender);

//====Stretch Goals====

//gradeStudent
console.log(doug.grade);
console.log(fred.gradeStudent(doug));
console.log(clarissa.gradeStudent(doug));

//graduate
doug.graduate = function() {
  (this.grade >= 70) ? console.log(`${this.name} has graduated Lambda School. Congrats!`) : console.log(`${this.name} has more studying to do. Keep trying!`);
};

console.log(fred.gradeStudent(doug));
doug.graduate();
console.log(clarissa.gradeStudent(doug));
doug.graduate();
console.log(fred.gradeStudent(doug));
doug.graduate();
console.log(clarissa.gradeStudent(doug));
doug.graduate();
