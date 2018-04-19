// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello! My name is ${this.name} and I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        for (let subject of this.favSubjects) {
            console.log(subject);       
        }
        return `That's all my favorite subjects!`;
    }
    PRAssignent(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times! :)`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

/* ------ Exploratory Laboratory ------ */

const ronaldAttr = {
    "name": "Ronald",
    "age": "A positive integer",
    "location": "Los Angeles",
    "gender": "Male",
    "previousBackground": "Accounting",
    "className": "CS10",
    "favSubjects": ["JavaScript", "HTML", "CSS", "Computer Science"],
}

// Can I make a simple object?
console.log(ronaldAttr);
// Yes I can.

// Can I use this object to supply arguments for my classes?

const ronald = new Student(ronaldAttr);

// Person
console.log(ronald);
console.log(ronald.location);
// Student
console.log(ronald.className);
console.log(ronald.listsSubjects());
console.log(ronald.PRAssignent('JavaScript IV'));
// Seems to be good with Student, and by extension, Person.

// How about Project Manager?

const csabaAttr = {
    "name": "Csaba",
    "age": "An awesome integer",
    "location": "Fontana",
    "gender": "male",
    "specialty": "Being awesome",
    "favLanguage": "JavaScript",
    "catchPhrase": "\"Any blockers?\"",
    "gradClassName": "CS5",
    "favInstructor": "Josh Knell",
}

const csaba = new ProjectManager(csabaAttr);
// Person
console.log(csaba);
console.log(csaba.gender);
// Instructor
console.log(csaba.specialty);
console.log(csaba.demo('JavaScript'));
// Project Manager
console.log(csaba.debugsCode(ronald, 'JavaScript'));

// Everything seems to be good!

/* ------ Testing FINISHED ------ */