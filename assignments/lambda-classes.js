// CODE here for your Lambda Classes
class Person {
    constructor(peopleStuff) {
        this.name = peopleStuff.name;
        this.age = peopleStuff.age;
        this.location = peopleStuff.location;
        this.gender = peopleStuff.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorStuff) {
        super(instructorStuff);
        this.specialty = instructorStuff.specialty;
        this.favLanguage = instructorStuff.favLanguage;
        this.catchPhrase = instructorStuff.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
    }

    listsSubjects() {
        let list = this.favSubjects;
        list.forEach(element => {console.log(`${element}`)});
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`)
    }
} 

class ProjectMananager extends Instructor {
    constructor(pMStuff) {
        super(pMStuff);
        this.gradClassName = pMStuff.gradClassName;
        this.favInstructor = pMStuff.favInstructor;
    }

    standUp(slack) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
