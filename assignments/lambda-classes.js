// CODE here for your Lambda Classes
class Person {
    constructor(personAtt) {
        this.name = personAtt.name;
        this.age = personAtt.age;
        this.location = personAtt.location;
        this.gender = personAtt.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instrAtt) {
        super(instrAtt);
        this.specialty = instrAtt.specialty;
        this.favLanguage = instrAtt.favLanguage;
        this.catchPhrase = instrAtt.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(stuAtt) {
        super(stuAtt);
        this.previousBackground = stuAtt.previousBackground;
        this.className = stuAtt.className;
        this.favSubjects = stuAtt.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(item => console.log(item))
    }

    PRAssignment(subject) {
        cnosole.log(`${this.name} has submitted a PR for ${subject}`)
    }
    
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAtt) {
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(subject) {
        console.log(`this.${name} debugs ${student.name}'s code on ${subject}`)
    }
}