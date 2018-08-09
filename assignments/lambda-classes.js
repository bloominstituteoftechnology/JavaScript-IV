// CODE here for your Lambda Classes

class Person {
    constructor(options) {
        this.name = options.name,
        this.age = options.age,
        this.location = options.location,
        this.gender = options.gender
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructOptions) {
        super(instructOptions);
        this.specialty = instructOptions.specialty,
        this.favLanguage = instructOptions.favLanguage,
        this.catchPhrase = instructOptions.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) { //student object, subject string
        return `${student.name} receives a perfect score on ${subect}.`
    }
}

class Student extends Person {
    constructor(studOptions) {
        super(studOptions);
        this.previousBackground = studOptions.previousBackground,
        this.className = studOptions.className,
        this.favSubjects = studOptions.favSubjects, //an array
    }
    listsSubjects() {
        //array method that lists out items...apply?
    }
    PRAssignment(subject) {
        return `{this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `{this.name} has begun sprint challenge on ${subject}.`;
    }
}