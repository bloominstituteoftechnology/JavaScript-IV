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

// *********** Objects **************
