// CODE here for your Lambda Classes
class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(options) {
    super(options);
    this.specialty = options.specialty;
    this.favLanguage = options.favLanguage;
    this.catchPhrase = options.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about , ${subject}`);
  }

  grade(Student, subject) {
    console.log(`${Student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(options) {
    super(options);
    this.previousBackground = options.previousBackground;
    this.className = options.className;
    this.favSubjects = options.favSubjects;
  }

  listSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(options) {
    super(options);
    this.gradClassName = options.gradClassName;
    this.favInstructor = options.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy time!`);
  }

  debugsCode(Student, subject) {
    console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
  }
}

const dav = new Instructor({
  name: "david",
  age: 2,
  location: "here",
  specialty: "front",
  favLanguage: "JS",
  catchPhrase: "Hello!"
});

const mk = new Student({
  name: "mark",
  age: 3,
  location: "there",
  specialty: "back",
  favLanguage: "python",
  catchPhrase: "Goodbye!",
  previousBackground: "sales",
  className: "CS1",
  favSubjects: ["node", "js", "python"]
});

const ty = new ProjectManager({
  name: "tyrone",
  age: 3,
  location: "anywhere",
  specialty: "design",
  favLanguage: "css",
  catchPhrase: "pow!",
  gradClassName: "CS2",
  favInstructor: "luis"
});

console.log(dav);
dav.speak();
dav.demo("node");
dav.grade(mk, "node");

console.log(mk);
mk.speak();
mk.listSubjects();
mk.PRAssignment("C");
mk.sprintChallenge("redux");

console.log(ty);
ty.speak();
ty.demo("css");
ty.grade(mk, "css");
ty.standUp("cs5");
ty.debugsCode(mk, "css");
