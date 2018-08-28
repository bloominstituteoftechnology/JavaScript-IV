// CODE here for your Lambda Classes
class Person {
    constructor(personAtt) {
        this.name = personAtt.name;
        this.age = personAtt.age;
        this.location = personAtt.location;
        this.gender = personAtt.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
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
        return `Today we are learning about ${subject}`
    }
    grade(student) {
        return`${student.name} receives a perfect score on ${subject}`
    }
    test(student) {
        student.grade += 10;
        student.graduate(this);
    }
}

class Student extends Person {
    constructor(stuAtt) {
        super(stuAtt);
        this.previousBackground = stuAtt.previousBackground;
        this.className = stuAtt.className;
        this.favSubjects = stuAtt.favSubjects;
        this.grade = stuAtt.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(item => console.log(item))
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }

    graduate(instructor) {
        if (this.grade > 70) {
            return `Hooray! ${this.name} has graduated from Lambda School!`
        }
        else {
            instructor.test(this);
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAtt) {
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}