// CODE here for your Lambda Classes

// Person class

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
};

// Student class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade; 
    }

    listSubjects() {
        favSubjects.forEach(function(subject) {
            console.log(subject);
        })
    }

    PRAssignment(favSubjects) {
        return `${this.name} has submitted a PR for ${this.subject}.`;
    }

    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.subject}.`;
    }

    graduate() {
        return `${this.name} has graduated from Lambda School!`;

    }
};

// Instructor class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today, we are learning about ${this.subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${this.subject}.`;

    }
};

// Project Manager class
class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
};
