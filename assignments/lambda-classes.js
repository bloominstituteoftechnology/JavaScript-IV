// CODE here for your Lambda Classes

// Person 
// * Student
// * Instructor
// * Project Manager

// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     gender: 'male',
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });

class Person {
    constructor(personObject) {
        this.name = personObject.name;
        this.age = personObject.age;
        this.location = personObject.location;
        this.gender = personObject.gender;
}

  speak() {
    return `Hello, my name is ${this.name}, I am from {this.location}.`;
  }
};

class Instructor extends Person {
    constructor (instructorObject) {
        super (instructorObject);
        this.specialty = instructorObject.specialty;
        this.favLanguage = instructorObject.favLanguage;
        this.catchPhrase = instructorObject.catchPhrase;
    } 
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade (student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }
};

class Student extends Person {
    constructor (studentObject) {
        super (studentObject);
        this.previousBackground = studentObject.previousBackground;
        this.className = studentObject.className;
        this.favSubjects = studentObject.favSubjects;
        this.grade =  Math.floor(Math.random() * 100) + 1;
    }

    listSubjects () {
        return `${this.favSubjects}`;
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge (subject) {
        return `${this.name} has begun the sprint challenge on ${subject}.`;
    }
};

// extension of instructor
class ProjectManager extends Instructor {
    constructor (pmObject) {
        super (pmObject);
        this.gradeClassName = pmObject.gradeClassName;
        this.favInstructor = pmObject.favInstructor;
        this.channel = pmObject.channel;
    }

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
};

const josh = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const thom = new Student({
    name: 'Fred',
    age: 25,
    location: 'Fort Pierce',
    gender: 'male',
    previousBackground: 'bum',
    className: 'WEB17',
    favSubjects: ['HTML', 'CSS', 'Javascript']
  });

console.log(thom.grade);
