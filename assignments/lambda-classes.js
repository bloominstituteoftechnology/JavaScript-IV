/**
* Lambda Objects in Class Syntax
**/
/**
 * Constructors
 */
//* BASE CLASS

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

//* INSTRUCTOR CLASS

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

//* STUDENT CLASS

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
        })
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

//* PROJECT MANAGER CLASS

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}'`);
    }
}

/**
 * Objects
 */

 //* Instructor Objects

 const Josh  = new Instructor ({
     name: 'Josh',
     location: `Josh's House`,
     age: `Oh like 22 at most`,
     gender: 'male',
     favLanguage: 'Esperanto',
     speciality: 'Karate',
     catchPhrase: 'Calm down CS 12, just calm down.'
 });