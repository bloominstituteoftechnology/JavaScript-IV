// CODE here for your Lambda Classes
//************ Base Class ******************
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}
//*************** Instructor and PM *****************
class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${this.subject}.`;
  }
  grading(student, subject) {
    student.grade = function() {
      const min = 0;
      const max = 100;
      return Math.floor(Math.random() * (max - min)) + min;
    };
    return `${student.name} received a ${student.grade} on ${this.subject}.`;
  }
}

class PM extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${this.channel} @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${this.subject}.`;
  }
}
//*************** Student **********************
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${this.subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `${this.name} is ready to graduate!`;
    } else {
      return `Sorry, ${this.name} keep working at it.`;
    }
  }
}

// *********** Objects ****************

//----------- Instructors ---------------
const profJ = new Instructor({
  name: 'Professor Jackson',
  age: 55,
  location: 'New York',
  gender: 'Male',
  specialty: 'User Interface',
  favLanguage: 'JavaScript',
  catchPhrase: 'Always consider the user.'
});

const profT = new Instructor({
  name: 'Professor Tanaka',
  age: 45,
  location: 'Tokyo',
  gender: 'Female',
  specialty: 'Cyber Security',
  favLanguage: 'C++',
  catchPhrase: 'You are the first line of defense against malware.'
});
const profO = new Instructor({
  name: 'Professor Obasi',
  age: 57,
  location: 'London',
  gender: 'Female',
  specialty: 'Quality Assurance',
  favLanguage: 'Java',
  catchPhrase: `Dot those I's and cross those T's.`
});

//----------- PMs ---------------
const rob = new PM({
  name: 'Rob',
  age: 30,
  location: 'Seattle',
  gender: 'Male',
  specialty: 'Android',
  favLanguage: 'Java',
  catchPhrase: 'Keep working even if you fail. It will pay off.',
  gradClassName: 'AD-1',
  favInstructor: 'Professor O.'
});

const nikki = new PM({
  name: 'Nikki',
  age: 28,
  location: 'Melbourne',
  gender: 'Female',
  specialty: 'iOS',
  favLanguage: 'C',
  catchPhrase: 'Make your product fun. More people will want to use it.',
  gradClassName: 'iOS-1',
  favInstructor: 'Professor J.'
});

const maya = new PM({
  name: 'Maya',
  age: 25,
  location: 'Sao Paulo',
  gender: 'Female',
  specialty: 'Data Science',
  favLanguage: 'R',
  catchPhrase: 'Look at the data. It tells a big story.',
  gradClassName: 'DS-1',
  favInstructor: 'Professor T.'
});

//----------- Students ---------------
const natalia = new Student({
  name: 'Natalia',
  age: 27,
  location: 'St. Petersburg',
  gender: 'Female',
  previousBackground: 'Math Teacher',
  className: 'AD-2',
  favSubjects: ['Python', 'Java', 'Ruby'],
  grade: 60
});

const mikaela = new Student({
  name: 'Mikaela',
  age: 33,
  location: 'Auckland',
  gender: 'Female',
  previousBackground: 'Sales Associate',
  className: 'iOS-2',
  favSubjects: ['Objective-C', 'CSS', 'JavaScript'],
  grade: 90
});

const jamal = new Student({
  name: 'Jamal',
  age: 35,
  location: 'Chicago',
  gender: 'Male',
  previousBackground: 'Paralegal',
  className: 'DS-2',
  favSubjects: ['Python', 'R', 'Java'],
  grade: 70
});
