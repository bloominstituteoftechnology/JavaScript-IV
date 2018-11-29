// CODE here for your Lambda Classes
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

  grading(student) {
    let studentGrade = student.grade;
    const random = Math.floor(Math.random() * 50);
    return `${student.name} Grade is ${(studentGrade -= random)}`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }

  listsSubjects() {
    this.favSubjects.map(favSubject => {
      console.log(favSubject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    const random = Math.floor(Math.random() * 50);
    let studentGrade = this.grade - random;
    if (studentGrade > 70) {
      console.log(`${this.name} has GRADUATED width ${studentGrade}%!!`);
    } else {
      console.log(
        `Please Try Again, your grade was ${studentGrade}% you need ${70 -
          studentGrade} points to pass`
      );
    }
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.faveInstructor = props.faveInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const josh = new Instructor({
  name: "Josh",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const hamza = new Student({
  name: "Hamza",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`,
  className: "FSW16",
  previousBackground: "Have done some coding",
  favSubjects: ["REACT", "HTML", "CSS"],
  grade: 100
});

const jordan = new ProjectManager({
  name: "Jordan",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`,
  gradClassName: "FSW10",
  faveInstructor: "Josh"
});

josh.speak();
josh.demo("classes in JS");
josh.grade(hamza, "JS");
hamza.listsSubjects();
hamza.PRAssignment("Sprint Challenge");
hamza.sprintChallenge("JS Class");
console.log(hamza.grade);
hamza.graduate();
console.log(jordan.grading(hamza));
jordan.standUp("FSW16");
jordan.debugsCode(hamza, "JS Classes");
