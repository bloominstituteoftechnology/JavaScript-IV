// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender
    }
    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    
    grade(subject) {
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment() {
        console.log(`${this.name} has submitted a PR for ${this.className}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(projectManagerInfo) {
        super(projectManagerInfo);
        this.gradClassName = projectManagerInfo.gradClassName;
        this.favInstructor = projectManagerInfo.favLanguage;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`)
    }
    debug (studentObject, subject) {
        console.log(`${this.name} debugs ${studentObject.name}'s code on ${subject}`)
    }
}

