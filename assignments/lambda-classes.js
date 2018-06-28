// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has has begun the sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel [standup times here]!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on  ${subject}.`;
    }
}


// Tests

const student = new Student({
    name: 'John',
    age: 19,
    location: 'TN',
    gender: 'M',
    previousBackground: 'College',
    className: 'CS12',
    favSubjects: [
        'Preprocessing',
        'JavaScript',
        'C.S.',
    ],
});

console.log(student.speak());
student.listSubjects().forEach(subject => console.log(subject));
console.log(student.PRAssignment('Javascript'));
console.log(student.sprintChallenge('Preprocessing'));