// CODE here for your Lambda Classes
class Person {
    constructor(base) {
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(atts) {
        super(atts);
        this.specialty = atts.specialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(atts) {
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
    }
    listSubjects(){
        for (let i = 0; i < this.favSubjects.length, i++;){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject} `);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challange on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(atts){
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}