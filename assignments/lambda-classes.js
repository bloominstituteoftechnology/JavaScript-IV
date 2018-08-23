// CODE here for your Lambda Classes
cl = console.log;

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }

  speak() {
    cl(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instrAttributes) {
    super(instrAttributes);
    this.specialty = instrAttributes.specialty;
    this.favLanguage = instrAttributes.favLanguage;
    this.catchPhrase = instrAttributes.catchPhrase;
  }

  demo(subject) {
    cl(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    cl(`${student.name} receives a perfect score on ${subject}`);
  }

  randomScoring(student) {
    let upOrDown = 1;
    if (Math.random() < 0.47) {
      upOrDown = -1;
    }
    let adjustment = Math.ceil(Math.random() * 10);
    student.grade += adjustment * upOrDown;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => {
      cl(element);
    });
  }

  PRAssignment(subject) {
    cl(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    cl(`${this.name} has begun a sprint challenge on ${subject}`);
  }

  graduate(grader) {
    for (let i = 0; i >= 0; i++) {
      if (this.grade >= 70) {
        cl(`${this.name} has graduated thanks to ${grader.name}`);
        break;
      } else if (this.grade <= 40) {
        cl(
          `${grader.name} has determined that ${
            this.name
          } needs to try again next year`
        );
        break;
      } else {
        grader.randomScoring(this);
        cl(`${grader.name} has adjusted ${this.name}'s grade to ${this.grade}`);
      }
    }
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttributes) {
    super(PMAttributes);
    this.gradClassName = PMAttributes.gradClassName;
    this.favInstructor = PMAttributes.favInstructor;
  }

  standUp(slack) {
    cl(`${this.name} announces to ${slack}, @channel standup time!`);
  }

  debugsCode(student, subject) {
    cl(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const jerry = new Instructor({
  name: "Jerry",
  age: 34,
  location: "Undisclosed area of Wyoming",
  gender: "female",
  specialty: "demonstrations",
  favLanguage: "Python",
  catchPhrase: "Why not?"
});

const michael = new Student({
  name: "Michael",
  age: 43,
  location: "Durham, NC",
  gender: "male",
  previousBackground: "construction",
  className: "CSPT2",
  grade: 50,
  favSubjects: ["HTML", "LESS CSS", "Javascript"]
});

const lucy = new ProjectManager({
  name: "Lucy",
  age: 25,
  location: "Jacksonville, FL",
  gender: "fluid",
  specialty: "positive reinforcement",
  favLanguage: "Javascript",
  catchPhrase: "And awaaaay we go!",
  gradClassName: "CS6",
  favInstructor: "Joshua"
});

// cl(lucy.name);
// cl(michael.className);
// cl(jerry.favLanguage);
// jerry.demo("CSS");
// lucy.grade(michael, "HTML");
// michael.listsSubjects();
// lucy.speak();
// michael.PRAssignment("JS IV");
// michael.sprintChallenge("User Interface");
// lucy.standUp("#cspt2");
// lucy.debugsCode(michael, "JS II");

michael.graduate(jerry);
