// CODE here for your Lambda Classes

class Person {
    constructor (Pattributes) {
        this.name = Pattributes.name;
        this.age = Pattributes.age;
        this.location = Pattributes.location;
        this.gender = Pattributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
constructor (Iattributes) {
    super(Iattributes);
    this.specialty = Iattributes.specialty;
    this.favLanguage = Iattributes.favLanguage;
    this.catchPhrase = Iattributes.catchPhrase;
}

    demo(subject) {
        return `Today we are learning about ${this.subject}`
    }

    grade(student, subject) {
        return `${this.student.name} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person {
    constructor (Sattributes) {
        super (Sattributes);
        this.previousBackground = Sattributes.previousBackground;
        this.className = Sattributes.className;
        this.favSubjects = Sattributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }

    PRAssignment(subject) {
        return `${this.student.name} has submitted a PR for ${this.subject}`
    }

    sprintChallenge(subject) {
        return `${this.student.name} has begun sprint challenge on ${this.subject}`
    }
}

