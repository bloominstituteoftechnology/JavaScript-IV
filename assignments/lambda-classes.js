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
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);

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
        console.log(`Today we are learing about ${subject}`);
    }
    grade(studentName, subject) {
        console.log(`${studentName} receives a perfect scoer on ${subject}`);
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
        console.log(this.favSubjects);
    }
    PRAassignment(studentName, subject) {
        console.log(`${studentName} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
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
        console.log(`${name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode() {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });