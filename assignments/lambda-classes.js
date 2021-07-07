// CODE here for your Lambda Classes

// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.

//==================================== Person Class =====================================

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

//------------------------------ Person Objects

const jim = new Person({
  name: "Jim",
  location: "Miami",
  age: 36,
  gender: "Male"
});

//==================================== Instructor Class =====================================

class Instructor extends Person {
  constructor(instAttributes) {
    super(instAttributes);
    this.specialty = instAttributes.specialty;
    this.favLanguage = instAttributes.favLanguage;
    this.catchPhrase = instAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today, we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
  calculateGrade(student) {
    if (Math.random() > 0.3 && student.grade < 100) {
      student.grade++;
    } else {
      student.grade--;
    }
    return student.grade;
  }
}

//------------------------------ Instructor Objects

const ted = new Instructor({
  name: "Ted",
  location: "Salt Lake City",
  age: 40,
  gender: "Male",
  specialty: "Front-end",
  favLanguage: "JavaScript",
  catchPhrase: `Don't forget the homies.`
});

const kim = new Instructor({
  name: "Kim",
  location: "New York City",
  age: 37,
  gender: "Female",
  specialty: "Back-end",
  favLanguage: "Python",
  catchPhrase: `It's freaking cool!`
});

//==================================== Student Class =====================================

class Student extends Person {
  constructor(studAttributes) {
    super(studAttributes);
    this.previousBackground = studAttributes.previousBackground;
    this.className = studAttributes.className;
    this.favSubjects = studAttributes.favSubjects;
    this.grade = studAttributes.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(function(favSubject) {
      console.log(favSubject);
    });
    // return `${this.name}'s favorite subjects: \n${this.favSubjects.join("\n")}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
  graduate() {
    if (this.grade > 70) {
      return `Congratulations, You have graduated from Lambda School!`;
    } else {
      return `Your grade is ${
        this.grade
      }% and you are not ready to graduate yet.`;
    }
  }
}

//------------------------------ Student Objects

const mark = new Student({
  name: "Mark",
  location: "San Francisco",
  age: 22,
  gender: "Male",
  previousBackground: "College Student",
  className: "FSW 16",
  favSubjects: ["Javascript", "React"],
  grade: 95
});

const sarah = new Student({
  name: "Sarah",
  location: "Houston",
  age: 29,
  gender: "Female",
  previousBackground: "Accountant",
  className: "FSW 16",
  favSubjects: ["HTML", "CSS", "Javascript"],
  grade: 68
});

//==================================== Project Manager Class =====================================

class ProjectManager extends Instructor {
  constructor(pmAtrributes) {
    super(pmAtrributes);
    this.gradClassName = pmAtrributes.gradClassName;
    this.favInstructor = pmAtrributes.favInstructor;
  }
  standup(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

//------------------------------ Project Manager Objects

const dev = new ProjectManager({
  name: "Dev",
  location: "San Jose",
  age: 35,
  gender: "Male",
  specialty: "Front-end",
  favLanguage: "HTML",
  catchPhrase: "Think outside the box",
  gradClassName: "CS1",
  favInstructor: "Jen"
});

const john = new ProjectManager({
  name: "John",
  location: "Illinois",
  age: 38,
  gender: "Female",
  specialty: "Back-end",
  favLanguage: "Ruby",
  catchPhrase: "Debugger is your friend",
  gradClassName: "CS1",
  favInstructor: "Sean"
});

//---------------------------- Console.logs of Person

console.log(jim.speak());
console.log(jim.age);
console.log(jim.gender);

//---------------------------- Console.logs of Instructor

console.log(ted.specialty);
console.log(kim.catchPhrase);
console.log(kim.favLanguage);
console.log(ted.demo("HTML"));
console.log(kim.grade(mark, "CSS"));
console.log(ted.calculateGrade(mark));
console.log(ted.calculateGrade(mark));
console.log(ted.calculateGrade(mark));

//---------------------------- Console.logs of Student

console.log(sarah.className);
console.log(mark.previousBackground);
//console.log(mark.listsSubjects());
mark.listsSubjects();
console.log(sarah.PRAssignment("Prototype"));
console.log(mark.sprintChallenge("Javascript"));
console.log(mark.graduate());
console.log(sarah.graduate());

//---------------------------- Console.logs of Project Managers

console.log(dev.gradClassName);
console.log(john.favInstructor);
console.log(dev.standup("FSW 16"));
console.log(john.debugsCode(sarah, "Classes"));
console.log(ted.calculateGrade(sarah));
console.log(ted.calculateGrade(sarah));
console.log(ted.calculateGrade(sarah));
