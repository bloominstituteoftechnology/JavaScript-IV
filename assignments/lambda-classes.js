// CODE here for your Lambda Classes

let instructorsArr = [];

class People {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends People {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.faveLanguage;
    this.catchPhrase = props.catchPhrase;
    instructorsArr.push(this);
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
  mark(student){
    console.log(`${this.name} is currently grading ${student.name}'s latest work.`);
    console.log(`${student.name}'s previous grade was: ${student.grade}`);
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    student.grade += Math.floor(Math.random() * 10) * plusOrMinus;
    if(student.grade < 0) {
      student.grade = 0;
    }
    console.log(`${student.name}' new grade is: ${student.grade}`);
    student.graduate();
  }
}

class Student extends People {
  constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = Math.floor(Math.random() * 100);
  }
  listsSubjects(){
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
  graduate() {
    if(this.grade < 70) {
      let randInstructor = Math.floor(Math.random() * instructorsArr.length);
      instructorsArr[randInstructor].mark(this);
    }else {
      console.log(`${this.name} has graduated from Lambda School!`);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.faveInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const exampleInstructor = new Instructor({
  name: 'John',
  age: 29,
  location: 'The Bronx',
  gender: 'M',
  specialty: 'Scripting',
  faveLanguage: 'Javascript',
  catchPhrase: "It's not magic, it's code.",
});

const exampleInstructor2 = new Instructor({
  name: 'Mary',
  age: 35,
  location: 'Somewhere in Canada',
  gender: 'F',
  specialty: 'Notepad++',
  faveLanguage: 'Java',
  catchPhrase: "Just keep at it.",
});

const exampleStudent = new Student({
  name: 'Max',
  age: 23,
  location: 'Washington, D.C.',
  gender: 'M',
  previousBackground: 'none',
  className: 'CS15',
  favSubjects: ['HTML', 'CSS', 'Preprocessors', 'Bootstrap'],
});

const exampleStudent2 = new Student({
  name: 'Amanda',
  age: 19,
  location: 'Austin, tx',
  gender: 'F',
  previousBackground: 'BS - I.T.',
  className: 'CS15',
  favSubjects: ['JavaScript', 'Nodejs', 'Expressjs'],
});

const examplePM = new ProjectManager({
  name: 'Amelia',
  age: 27,
  location: 'Seattle, WA',
  gender: 'F',
  specialty: 'Front-End',
  faveLanguage: 'React.js',
  catchPhrase: "Get it working, then get it working well",
  gradClassName: 'CS10',
  favInstructor: 'John',
});

const examplePM2 = new ProjectManager({
  name: 'Eric',
  age: 26,
  location: 'Cincinnati, OH',
  gender: 'M',
  specialty: 'Graphs',
  faveLanguage: 'Python',
  catchPhrase: "See me afterwards.",
  gradClassName: 'CS9',
  favInstructor: 'Mary',
});

// console.log(exampleInstructor.name);//John
// exampleInstructor.demo('javascript');//Today we are learning about javascript.
// exampleInstructor2.grade(exampleStudent, 'javascript');//Max receives a perfect score on javascript.
// console.log(exampleStudent.name);//Max
// exampleStudent.listsSubjects();//HTML /n CSS /n Preprocessors /n Bootstrap /n
// exampleStudent2.PRAssignment('JavaScript-IV');//Amanda has submitted a PR for JavaScript-IV.
// exampleStudent.sprintChallenge('Javascript Fundamentals');//Max has begun sprint challenge on Javascript Fundamentals
// console.log(examplePM.name);//Amelia
// examplePM.standUp('CS15_Amelia');//Amelia announces to CS15_Amelia, @channel standy times!
// examplePM2.debugsCode(exampleStudent, 'Preprocessors-I');//Eric debugs Max's code on Preprocessors-I

//will print out a loop of Instructor grading, previous grade, new grade, until they get above 70 and graduated
//or their grade is already 70 and they just graduate.
exampleStudent2.graduate();
