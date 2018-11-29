// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


class Instructor extends Person {
    constructor(personAttributes) {
       super(personAttributes);
       this.specialty = personAttributes.specialty;
       this.favLanguage = personAttributes.favLanguage;
       this.catchPhrase = personAttributes.catchPhrase; 
    }
    demo() {
        console.log(`Today we are learning about ${this.favLanguage}`)
    }
    grade() {
        console.log(`${student.name} receives a perfect score on ${this.favLanguage}`)
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
        console.log(`${this.favSubjects}`)
    }
    PRAssignment() {
        console.log(`${this.name} has submitted a PR for ${this.favSubjects}`)
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${this.favSubjects}`)
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp() {
        console.log(`${this.name} announces to ${this.channel}`)
    }
    debugsCode() {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}
