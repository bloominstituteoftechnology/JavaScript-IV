// CODE here for your Lambda Classes

// ======= Classes =======

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(
      `Hello my name is ${this.name}, and I am from ${this.location}.`
    );
  }
}

class Instructor extends Person {
  constructor(instructAttrbs) {
    super(instructAttrbs);
    this.speciality = instructAttrbs.speciality;
    this.favLanguage = instructAttrbs.favLanguage;
    this.catchPhrase = instructAttrbs.catchPhrase;
  }

  demo(string) {
    console.log(`Today we are learning about ${string}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttrbs) {
    super(studentAttrbs);
    this.previousBackground = studentAttrbs.previousBackground;
    this.className = studentAttrbs.className;
    this.favSubjects = studentAttrbs.favSubjects;
    this.grade = studentAttrbs.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}.`);
  }
}

class PM extends Instructor {
  constructor(PMAttrbs) {
    super(PMAttrbs);
    this.gradClassName = PMAttrbs.gradClassName;
    this.favInstructor = PMAttrbs.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to the ${channel}, @channel standy times!`
    ); // Alex, the homework said "standy" time... I thought it was hilarious, so I kept it. Haha
  }

  debugsCode(studentObject, subject) {
    console.log(
      `${this.name} debugs ${studentObject.name}'s code on ${subject}.`
    );
  }

  scoreAssigment(student, subject) {
    const num = Math.random();
    let points = 0;
    if (num < 0.5) {
      points = 10;
    } else {
      points = -30;
    }
    student.grade += points;
    console.log(
      `${
        student.name
      }'s grade changed ${points} points from the score on their ${subject} assignment.`
    );
  }
}

// ======= Created Objects =======

// Objects from Person Class

const koby = new Person({
  name: "Koby",
  age: 12,
  location: "Da Bay",
  gender: "male"
});

const kate = new Person({
  name: "Kate",
  age: 20,
  location: "Chi-Town",
  gender: "female"
});

koby.speak();
kate.speak();

// Objects from Instructor Class

const josh = new Instructor({
  name: "Josh",
  age: 35,
  location: "Lambda School",
  gender: "male",
  specialty: "front-end technology",
  favLanguage: "JavaScript",
  catchPhrase: "Isn't that awesome, guys?"
});

const dustin = new Instructor({
  name: "Dustin",
  age: 32,
  location: "Lambda School",
  gender: "male",
  specialty: "front-end technology",
  favLanguage: "JavaScript",
  catchPhrase: "Five points for the Gryffindor house of your choice"
});

josh.demo("Classes");
dustin.grade(kate, "computer science");

// Objects from Student Class

const nathan = new Student({
  name: "Nathan",
  age: 31,
  location: "Napa Valley",
  gender: "male",
  previousBackground: "healthcare business",
  className: "FSW16",
  favSubjects: ["react", "html", "css", "javascript"],
  grade: 90
});

const christine = new Student({
  name: "Christine",
  age: 26,
  location: "New York City",
  gender: "female",
  previousBackground: "photography",
  className: "CS15",
  favSubjects: ["javascript", "python", "golang", "c++"],
  grade: 95
});

nathan.speak();
nathan.listsSubjects();
christine.PRAssignment("JavaScript-IV");
christine.sprintChallenge("Reponsive-II");

// Objects from PM Class

const frank = new PM({
  name: "Frank",
  age: 34,
  location: "Paris",
  gender: "male",
  specialty: "back-end technology",
  favLanguage: "golang",
  catchPhrase: "Well, let's just see if we can do it.",
  gradClassName: "CS3",
  favInstructor: "Dustin"
});

const jamal = new PM({
  name: "Jamal",
  age: 24,
  location: "Houston",
  gender: "male",
  specialty: "databases",
  favLanguage: "css",
  catchPhrase: "Let's get some fingers on keyboards!",
  gradClassName: "CS6",
  favInstructor: "Dustin"
});

frank.speak();
frank.demo("Pseudo-Classical Prototypal Inheritance");
jamal.grade(nathan, "javascript");
jamal.standUp("FSW16-Jamal");
jamal.debugsCode(nathan, "javascript");
frank.scoreAssigment(nathan, "javascript");
