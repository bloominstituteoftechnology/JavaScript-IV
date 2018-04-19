// CODE here for your Lambda Classes

class Person {
    constructor(deets){
        this.name = deets.name;
        this.age = deets.age;
        this.location = deets.location;
        this.gender = deets.gender;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}



class Instructor extends Person {
    constructor(instructorDeets){
        super(instructorDeets);
        this.specialty = instructorDeets.specialty;
        this.favLanguage = instructorDeets.favLanguage;
        this.catchPhrase = instructorDeets.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(name, subject) {
        return `${name} receives a perfect score on ${subject}`;
    }
}


class Students extends Person {
    constructor(studentDeets){
        super(studentDeets);
        this.previousBackground = studentDeets.previousBackground;
        this.className = studentDeets.className;
        this.favSubjects = studentDeets.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge() {
        return `${this.name} has begun spring challenge on ${subject}.`;
    }
}



class ProjectManagers extends Instructor {
    constructor(PMdeets){
        super(PMdeets);
        this.gradClassName = PMdeets.gradClassName;
        this.favInstructor = PMdeets.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentName, subject) {
        return `${this.name} debugs ${studentName}'s code on ${subject}`;
    }
}