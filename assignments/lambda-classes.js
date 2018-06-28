class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    }
  }

class Instructor extends Person {
  constructor(InsAttr) {
    super(InsAttr);
    this.specialty = InsAttr.specialty;
    this.favLanguage = InsAttr.favLanguage;
    this.catchPhrase = InsAttr.catchPhrase;
    }

  demo (subject) {
    return `Today we are learning about ${subject}.`;
    }

  grade (subject) {
    return `${this.name} receives a perfect score on ${subject}.`;
    }
  }

class Student extends Person {
  constructor(stuAttr) {
    super(stuAttr);
    this.previousBackground = stuAttr.previousBackground;
    this.className = stuAttr.className;
    this.favSubjects = stuAttr.favSubjects;
    }

  listsSubjects () {
    this.favSubjects.forEach(function (x) {console.log(x);});
    }

  PRAssignment (subject) {
    return `${this.name} receives a perfect score on ${subject}.`;
    }

  sprintChallenge (subject) {
    return `${this.name} has begun their sprint challenge on ${subject}.`;
    }
  }

class ProjectManager extends Instructor {
  constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
  }

  standUp (channel) {
    return `${this.name} announces to {channel}, @channel standy times!`;
  }

  debugsCode (studentName, subject) {
    return `${this.name} debugs ${studentName}s code on ${subject}.`;
  }
}

const jordan = new Student({
  name: "Jordan",
  age: 28,
  location: "Texas",
  gender: "F",
  previousBackground: "Biology",
  className: "CS12",
  favSubjects: ["biology", "physics", "psychology", "philosophy"]
});

const jane = new Instructor ({
  name: "Jane",
  age: 47,
  location: "UK",
  gender: "F",
  specialty: "Front End Dev",
  favLanguage: "JavaScript",
  catchPhrase: "Where there is code, there will be bugs."
});

const philippe = new ProjectManager ({
  name: "Philippe",
  age: 32,
  location: "Nevada",
  gender: "fluid",
  specialty: "Databases",
  favLanguage: "JavaScript",
  catchPhrase: "I came here to eat cheetos and debug code, and I'm all out of cheetos.",
  gradClassName: "CS 3",
  favInstructor: "Jane"
});

console.log(jane);
