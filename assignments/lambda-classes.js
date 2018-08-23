// CODE here for your Lambda Classes
class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(details) {
        super(details);
        this.specialty = details.specialty;
        this.favLanguage = details.favLanguage;
        this.catchPhrase = details.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${this.subject}`
    }

    grade(student, subject) {
        return `${this.student.name} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person {
    constructor(details) {
        super(details);
        this.previousBackground = details.previousBackground;
        this.className = details.className;
        this.favSubjects = details.favSubjects;
    }

    listSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${this.subject}`;
    }

    sprintChallange(subject) {
        return `${this.name} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(details) {
        super(details);
        this.gradClassName = details.gradClassName;
        this.favInstructor = details.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`
    }
}