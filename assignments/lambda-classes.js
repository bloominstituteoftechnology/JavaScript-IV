// CODE here for your Lambda Classes

class Person {
    constructor(stats){
        this.name = stats.name;
        this.age = stats.age;
        this.location = stats.location;
        this.gender = stats.gender;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person {
    constructor(stats) {
        super(stats);
        this.speciality = stats.speciality;
        this.favLanguage = stats.favLanguage;
        this.catchPhrase = stats.catchPhrase;
    };
    demo (subject) {
        `Today we are learning about ${subject}`;
    };
    grade (student, subject) {
        `${student.name} receives a perfect score on ${subject}`;
    };
};

class Student extends Person {
    constructor(stats){
        super(stats);
        this.previousBackground = stats.previousBackground;
        this.className = stats.className;
        this.favSubjects = stats.favSubjects;
    };
    listsSubjects () {
        return `${this.favSubjects}`;
    };
    PRAssignment (subject) {
        `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge (subject) {
        `${this.name} has begun sprint challenge on ${subject}`;
    };
};

class ProjectManagers extends Instructor{
    constructor(stats){
        super(stats);
        this.gradClassName = stats.gradClassName;
        this.favInstructor = stats.favInstructor;
    };
    standUp (channel) {
        `${this.name} announces to ${channel}, @channel standy times!`;
    };
    debugsCode (student, subject) {
        `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
};

