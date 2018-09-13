// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousbackground = studentAttributes.previousbackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignments(subject) {
        console.log(`${this.student.name} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.student.name} has begun sprint challenge on ${this.subject}`);
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
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade(student, subject) {
        console.log(`${this.student.name} receives a perfect score on ${subject}`);
    }
}

class PM extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${this.slackChannel}, @channel standup time!`)
    }
    debugCode(student, subject) {
        console.log(`${this.name} debugs ${this.student.name}'s code on ${this.subject}`);
    }
}