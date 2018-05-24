// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.gender = attributes.gender;
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location}!`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo () {
        return `Today we are learning ${this.subject}.`;
    }
    grade () {
        return `${this.name} receives a perfect score on ${this.subject}!`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects () {
        return `${this.name}'s favorite subject's are ${this.favSubjects[0]}, ${this.favSubjects[1]}`;
    }
    PRAssignment () {
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge () {
        return `${this.name} has begun the sprint challenge on ${this.subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes); 
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standUp () {
        return `${this.name} announces to the {channel} @channel standup time!`
    }
    debugsCode () {
        return `${this.name} debugs ${Student.name}'s code on ${Student.subject}.`
    }
}