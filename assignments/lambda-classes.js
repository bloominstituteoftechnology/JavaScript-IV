// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    //properties
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  //methods
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
} //end of Person class

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    //properties
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  //methods
  demo(subject) {
    return `Today we learned about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  evaluate(student, subject) {
    student.grade = Math.random().toFixed(2) * 100;
    return `${student.name} has been scored a ${
      student.grade
    }% on ${subject} by ${this.name} `;
  }
} //end of Instructor class

class Student extends Person {
  constructor(obj) {
    super(obj);
    //properties
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    this.grade = obj.grade;
  }
  //methods
  listsSubjects() {
    return `These are my favorite subjects: ${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    while (this.grade < 70) {
      console.log(
        `You have not passed Lambda School. Your score is: ${
          this.grade
        }. Keep trying!`
      );
      tom.evaluate(this, "Javascript");
    }
    if (this.grade >= 70) {
      return `Congratulations! You have graduated from Lambda School`;
    }
  }
} //end of Student class

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    //properties
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  //methods
  standup(channel) {
    `${this.name} announces to ${channel} @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

let tom = new Instructor({
  name: "Tom",
  age: 35,
  location: "Utah",
  gender: "M",
  specialty: "Web Development",
  favLanguage: "Javascript",
  catchPhrase: "dont forget the homies"
});

let jerry = new Student({
  name: "Jerry",
  age: 25,
  location: "California",
  gender: "M",
  previousBackground: "Project Management",
  className: "CS13",
  favSubjects: ["Javascript", "HTML", "CSS"],
  grade: 100
});

console.log(jerry.sprintChallenge("classical inheritance"));

let jeremy = new ProjectManager({
  name: "Jeremy",
  age: 30,
  location: "California",
  gender: "M",
  specialty: "Web Development",
  favLanguage: "Javascript",
  gradClassName: "CS1",
  favInstructor: "Josh"
});

console.log(jeremy);
console.log(jeremy.debugsCode(jerry, "JS prototype object"));

console.log(tom.evaluate(jerry, "Javascript"));
console.log(jerry);
console.log(jerry.graduate());
