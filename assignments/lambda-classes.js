// CODE here for your Lambda Classes

class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
    }
}

class Instructor extends Person{
    constructor(insAttr){
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person{
    constructor(studentdAttr){
        super(studentdAttr);
        this.previousBackground = studentdAttr.previousBackground;
        this.className = studentdAttr.className;
        this.favSubjects = studentdAttr.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun Sprint Challenge on ${subject}`;
    }
}
