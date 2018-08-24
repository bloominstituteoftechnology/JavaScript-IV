// CODE here for your Lambda Classes
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    this.subject = subject;
    return `Today we are learning about ${this.subject}`;
  }
  grade(student) {
    this.percent = Math.random() < 0.5 ? -1 : 1;
    this.gradeChange = Math.round(Math.random() * 15) * this.percent;
    student.grade += this.gradeChange;
    if (student.grade >= 100) {
      return student.graduate(this.student.grade);
    }
    return`${student.name} receives a change of ${this.gradeChange} points, and a new grade of ${student.grade}`;
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    this.grade = obj.grade;
  }
  listsSubjects(favSubjects) {
    this.favSubjects = favSubjects;
    return this.favSubjects;
  }
  PRAssignment(subject) {
    this.subject = subject;
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge(subject) {
    this.subject = subject;
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
  graduate(instructor) {

    let graduate = this.grade >= 70 ? "Congratulations! You are ready to be a software developer" : instructor.grade(this.grade);
    return graduate;
}
}
class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    this.channel = channel;
    return `${this.name} annouces to ${this.channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    this.student = student;
    this.subject = subject;
    return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`;
  }
}

// Classes end here ------------------


// Instructors

const James = new Instructor({
  name: 'James',
  location: 'Arizona',
  age: 22,
  gender: 'male',
  favLanguage: 'Node',
  specialty: 'Back-end',
  catchPhrase: `Cali baby`
});
const Dan = new Instructor({
  name: 'Dan',
  location: 'Ohio',
  age: 38,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `Every day is a new challenge`
});
const Beth = new Instructor({
  name: 'Beth',
  location: 'Bedrock',
  age: 34,
  gender: 'female',
  favLanguage: 'Ruby',
  specialty: 'IOS',
  catchPhrase: `Keep on coding!`
});

// Students
let Jim = new Student({
  name: 'Jim',
  location: 'Bedrock',
  age: 34,
  gender: 'male',
  favLanguage: 'Ruby'
});
let Aaron = new Student({
  name: 'Aaron',
  location: 'Bedrock',
  age: 34,
  gender: 'female',
  favLanguage: 'Ruby'
});
let Sam = new Student({
  name: 'Sam',
  location: 'Bedrock',
  age: 34,
  gender: 'female',
  favLanguage: 'Ruby',
  previousBackground : 'Banker',
  grade : 65
});


// PM's
console.log(Beth.grade(Sam));
