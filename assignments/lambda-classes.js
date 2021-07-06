// CODE here for your Lambda Classes

// Base-class
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;

    }
}

//  Instructor Extension
class Instructor extends Person {
    constructor(insAttrs) {
        super(insAttrs);
        this.speciality = insAttrs.speciality;
        this.favLanguage = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learing about ${subject}`;
    }
    grade(studentName, subject) {
        return `${studentName} receives a perfect scoer on ${subject}`;
    }
}

// Student Extension

class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
    }
    ListsSubjects() {
    return this.favSubjects;
    }
    PRAassignment(studentName, subject) {
        return `${studentName} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

// Project Manager Extension 
class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp() {
        return `${name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode() {
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`
  });

  const sam = new Instructor({
    name: 'Sam',
    location: 'Vegas',
    age: 32,
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'HTML',
    catchPhrase: `All love`
  });

  const red = new Student({
    name: 'Red',
    location: 'June',
    age: 23,
    gender: 'male',
    previousBackground: 'teacher',
    className:'async',
    favSubjects:'math',
  });

  const jess = new Student({
    name: 'Jess',
    location: 'Guesden',
    age: 30,
    gender: 'female',
    previousBackground: 'actor',
    className:'async',
    favSubjects:'english',
  });

  const dan = new ProjectManager({
    name: 'Dan',
    location: 'Rose',
    age: 31,
    gender: 'male',
    gradClassName: 'Baest',
    favInstructor: 'Mr.Red',
  });

  const drew = new ProjectManager({
    name: 'Drew',
    location: 'Berry',
    age: 28,
    gender: 'female',
    gradClassName: 'Roast',
    favInstructor: 'Mr.Blue',
  });