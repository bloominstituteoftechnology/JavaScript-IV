// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hellon my name is ${this.name}, I am from
        ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Students extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }        
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes){
        super(instructorAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUP(channle) {
        return `${this.name} annouces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}