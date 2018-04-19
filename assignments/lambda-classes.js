// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects; // array [JS, HTML, life]
    }
    listsSubjects() {
        // let emptyArray = [];
        this.favSubjects.forEach(function(element) {
            console.log(element);
            // emptyArray.push(element);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

/* ------ Exploratory Laboratory ------ */

const davidAttr = {
    "name": "David",
    "age": 36,
    "location": "Seattle",
    "gender": "Male",
    "previousBackground": "Engineering",
    "className": "CS10",
    "favSubjects": ["JavaScript", "HTML", "CSS", "Computer Science"],
}

const david = new Student(davidAttr);

console.log(david);
console.log(david.location);

console.log(david.className);
david.listsSubjects(); // logs to console like we expect
console.log(david.PRAssignment('JavaScript'));

const csabaAttr = {
    "name": "Csaba",
    "age": 34,
    "location": "Fontana",
    "gender": "male",
    "specialty": "Being awesome",
    "favLanguage": "JavaScript",
    "catchPhrase": "\"Any blockers?\"",
    "gradClassName": "CS5",
    "favInstructor": "Josh Knell",
}

const csaba = new ProjectManager(csabaAttr);

console.log(csaba);
console.log(csaba.age);
console.log(csaba.specialty);
console.log(csaba.grade(david, 'JavaScript'));
console.log(csaba.gradClassName);
console.log(csaba.standUp("CS10_Csaba"));


