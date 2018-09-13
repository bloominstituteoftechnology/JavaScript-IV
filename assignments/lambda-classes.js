// CODE here for your Lambda Classes
class Person {
    constructor(attribites) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}`);
    }
} //end parent class

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`);  //use this here???
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${this.subject}`);
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
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${this.subject}`);  //subject arg??  this.subject??
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${this.subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
    }
    debugsCode(student) {
        console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`);
    }
}