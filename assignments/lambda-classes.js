class Person {
  constructor(atr) {
    this.name = atr.name;
    this.age = atr.age;
    this.location = atr.location;
    this.gender = atr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(atr) {
    super(atr);
    this.specialty = atr.specialty;
    this.favLanguage = atr.favLanguage;
    this.catchPhrase = atr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(subject) {
    return `${this.name} recieves a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(atr) {
    super(atr);
    this.previousBackground = atr.previousBackground;
    this.className = atr.className;
    this.favSubjects = atr.favSubjects;
  }
  listsSubject(subject) {
    const smap = [];
    return `${this.favSubjects.map(i => i)} is ${
      this.name
    }'s favorite subjects/subject.`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(atr) {
    super(atr);
    this.gradClassName = atr.gradClassName;
    this.favInstructor = atr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${
      this.channel
    }, @channel standy times!​​​​​`;
  }
  debugsCode(subject) {
    return `${this.name} debugs ${this.name}'s code challenge on ${subject}.`;
  }
}

const cecil = new Student({
  name: "Cecil",
  age: "27",
  location: "LA",
  gender: "?",
  previousBackground: "House Keeper",
  className: "FSW16",
  favSubjects: ["Vanilla Javascript Dom"]
});

const joe = new Student({
  name: "Joe",
  age: "21",
  location: "In the Middle Of No Where",
  gender: "Helicopper",
  previousBackground: "Comedian",
  className: "FSW16",
  favSubjects: ["Sleep"]
});

const brad = new Student({
  name: "Brad",
  age: "23",
  location: "Russia",
  gender: "Male",
  previousBackground: "Slangin' bricks",
  className: "FSW16",
  favSubjects: ["Css Grid, JQuery"]
});

const josh = new Instructor({
  name: "Josh",
  age: "35",
  location: "Utah",
  gender: "Male",
  specialty: "Front End",
  favLanguage: "Javascript",
  catchPhrase: "5 minute break"
});

const roy = new Instructor({
  name: "Roy",
  age: "100",
  location: "Bottom of the Ocean",
  gender: "Male",
  specialty: "Front End",
  favLanguage: "Javascript",
  catchPhrase: "Yummy!"
});

const tod = new Instructor({
  name: "Bob",
  age: "9",
  location: "Iraq",
  gender: "Male",
  specialty: "Sword Fighting",
  favLanguage: "Chinese",
  catchPhrase: "Esssskeeeeeeeetit"
});

const gabby = new ProjectManager({
  name: "Gabby",
  age: "45",
  location: "Indonesia",
  gender: "?",
  specialty: "Talking",
  favLanguage: "Jquery",
  favSubjects: "Java 101",
  gradClassName: "CS5",
  favInstructor: "Dustin"
});

const karla = new ProjectManager({
  name: "Karla",
  age: "26",
  location: "India",
  gender: "?",
  specialty: "Hacky Sack",
  favLanguage: "C#",
  favSubjects: "Python",
  gradClassName: "CS5",
  favInstructor: "Dustin"
});

const polly = new ProjectManager({
  name: "Polly",
  age: "37",
  location: "Austraila",
  gender: "?",
  specialty: "Drinking",
  favLanguage: "Ruby",
  favSubjects: "Ruby",
  gradClassName: "CS5",
  favInstructor: "Josh"
});

/* Instructor 
demo
grade

student
listsSubject
PRAssignment
sprintChallenge

ProjectManager
standUp
debugsCode
 */
console.log(cecil.listsSubject());
console.log(cecil.PRAssignment("Javascript"));
console.log(cecil.sprintChallenge("history"));
console.log(tod.grade("nothing"));
console.log(tod.demo("everything"));
console.log(polly.standUp("Lambda"));
console.log(polly.debugsCode("Lambda Training Kit"));
