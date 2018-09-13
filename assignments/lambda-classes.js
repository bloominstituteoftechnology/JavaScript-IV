// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}`);
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
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
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
        for (let i = 0; i < favSubjects.length; i++) {
            return favSubjects[i];
        }
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName;
        this.favInstructor;
    }
    standup(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//Instructors listed below
const rachel = new Instructor({
    name: "Rachel",
    location: "Raleigh",
    age: 23,
    gender: "female",
    favLanguage: "Python",
    specialty: "mobile",
    catchPhrase: "Thank god it's Friday."
});

const michael = new Instructor({
    name: "Michael",
    location: "Los Angeles",
    age: 29,
    gender: "male",
    favLanguage: "Java",
    specialty: ""


});