class Person {
    constructor(base-class) {
        this.name = base-class.name;
        this.age = base-class.age;
        this.location = base-class.location;
        this.gender = base-class.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(subject) {
        super(subject);
        this.specialty = subject.specialty;
        this.favLanguage = subject.favLanguage;
        this.catchphrase = subject.catchphrase;
    }

    demo() {
        console.log(`Today we are learning about ${this.subject}`)
    }

    grade() {
        console.log(`${this.name} receives a perfect score on ${this.subject}`);
    }
}

class Student extends Instructor {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listSubjects() {
        console.log(`${studentAttributes.favSubjects}`);
    }

    PRAssignment() {
        console.log(`${this.name} has submitted a PR for ${this.subject}`);
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${this.subject}`);
    }
}

class ProjectManagers extends Instructors {
    constructor(PMAttributes) {
        super(PMAttributes) {
            this.gradClassName = PMAttributes.gradClassName;
            this.favInstructor = PMAttributes.favInstructor;
    }
        
    standUp() {
        console.log(`${this.name} announces to ${this.channel}`);
    }

    debugsCode() {
        console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`);
    }
}


