// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Student extends Person {
  constructor(sAttributes) {
    super(sAttributes);
    this.previousBackground = sAttributes.previousBackground;
    this.className = sAttributes.className;
    this.favSubjects = sAttributes.favSubjects;
  }

  listSubjects(arr) {}

  PRAssignment() {}

  sprintChallenge() {}
}

class Instructor extends Person {
  constructor(iAttributes) {
    super(iAttributes);
    this.specialty = iAttributes.specialty;
    this.favLanguage = iAttributes.favLanguage;
    this.catchPhrase = iAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${this.subject}`;
  }

  grade(student, subject) {
    return `${this.student} receives a perfect score on ${this.subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp() {}

  debugsCode() {}
}

const Tibby = new Person({
  name: "Tibby",
  age: 21,
  location: "Missouri"
});

const Leith = new Person({
  name: "Leith",
  age: 39,
  location: "Texas"
});

const Adetokunbo = new Student({
  name: "Adetokunbo",
  age: 27,
  location: "Louisiana",
  previousBackground: "Mechanical Engineering",
  className: "CS43",
  favSubjects: ["PostgreSQL", "MongoDB"]
});

const Aeron = new Student({
  name: "Aeron",
  age: 31,
  location: "Kentucky",
  previousBackground: "Financial Advisor",
  className: "CS60",
  favSubjects: ["JavaScipt", "Node"]
});

const Ayomide = new Instructor({
  name: "Ayomide",
  age: 26,
  location: "Washington",
  specialty: "UI/UX",
  favLanguage: "Ruby",
  catchPhrase: "I sing like a designer"
});

const Nsonowa = new Instructor({
  name: "Nsonowa",
  age: 32,
  location: "Maine",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "I take online dancing classes"
});

const Guanyu = new ProjectManager({
  name: "Guanyu",
  age: 45,
  location: "Maryland",
  specialty: "Node",
  favLanguage: "JavaScript",
  catchPhrase: "I node everything",
  gradClassName: "CS28",
  favInstructor: "Nsonowa"
});

const Alinafe = new ProjectManager({
  name: "Alinafe",
  age: 25,
  location: "Iowa",
  specialty: "C++",
  favLanguage: "C",
  catchPhrase: "Master of adding functions",
  gradClassName: "CS35",
  favInstructor: "Nsonowa"
});

console.log(Tibby.age);
console.log(Leith.speak());
console.log(Adetokunbo.previousBackground);
console.log(Aeron.listSubjects());
console.log(Ayomide.favLanguage);
console.log(Nsonowa.grade("Aeron", "English"));
console.log(Guanyu.catchPhrase);
console.log(Alinafe.standUp());
