// CODE here for your Lambda Classes

class Person {
    constructor(personAttribs){
        this.name = personAttribs.name;
        this.age = personAttribs.age;
        this.location = personAttribs.location;
        this.gender = personAttribs.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructors extends Person {
    constructor(instAttribs){
        super(instAttribs);
        this.specialty = instAttribs.specialty;
        this.favLanguage = instAttribs.favLanguage;
        this.catchPhrase = instAttribs.catchPhrase;        
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}.`
    }
    grade(student,subject) {
        return `${student.name} receive a perfect score on ${this.subject}.` // this needed?
    }
}

class Students extends Person {
    constructor(studAttribs){
        super(studAttribs);
        this.previousBackground = studAttribs.previousBackground;
        this.className = studAttribs.className;
        this.favSubjects = studAttribs.favSubjects;     
        
    }
    listsSubjects() {
        return `Favorite subjects are: ${this.favSubjects}.`
    }
    PRAssignments(subject) {
        return `${student.name} has submitted a Pull Request for ${this.subject}.` // this needed?
    }
    sprintChallenge(subject) {
        return `${student.name} has begun the Sprint Challenge on ${this.subject}.` // this needed?
    }
}

class ProjectManagers extends Instructors {
    constructor(pmAttribs){
        super(pmAttribs);
        this.gradClassName = pmAttribs.gradClassName;
        this.favInstructor = pmAttribs.favInstructor;
        
    }
    standUp(channel) {
        return `${this.name} announces to channel: @channel standy times!`;
    }
    PRAssignments(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}.` // this needed?
    }
    
}