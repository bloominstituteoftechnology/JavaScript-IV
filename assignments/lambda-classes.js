// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.gender = attrs.gender;
        this.location = attrs.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instrAttrs) {
        super(attrs);
        this.specialty = instrAttrs.specialty;
        this.favLanguage = instrAttrs.favLanguage;
        this.catchPhrase = instrAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(Student, subject) {
        console.log(`${Student.name} receives a perfect score on ${subject}`);
    }
    curve(grade) {
        return Math.random() + grade;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(attrs);
        this.previousBackground = instrAttrs.previousBackground;
        this.className = StudentAttrs.className;
        this.favSubjects = StudentAttrs.favSubjects;
        grade = 90;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }

    PRAssignment(subject) {
        console.log(`${Student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${Student.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (grade > 70) {
            console.log(`${Student.name} has graduated!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttrs) {
        super(InstrAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`);
    }

    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on {subject}`);
    }
}