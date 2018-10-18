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
    constructor(childAttributes) {
        super(childAttributes);
        this.speciality = childAttributes.speciality;
        this.favLanguage = childAttributes.favLanguage;
        this.catchPhrase = childAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.previousBackground = childAttributes.previousBackground;
        this.className = childAttributes.className;
        this.favSubjects = childAttributes.favSubjects;
    }

    listSubjects() {
        this.favSubjects.forEach(function (element) {
            return `element`;
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        `${this.name} has begun sprint challenge on ${subject}`;
    }
}
