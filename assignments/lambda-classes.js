// CODE here for your Lambda Classes

class Person {
    constructor(initProperties) {
        this.name = initProperties.name;
        this.age = initProperties.age;
        this.gender = initProperties.gender;
        this.location = initProperties.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructProperties) {
        super(instructProperties);
        this.specialty = instructProperties.specialty;
        this.favLanguage = instructProperties.favLanguage;
        this.catchPhrase = instructProperties.catchPhrase;
    }
    demo(topic) {
        console.log(`Today we are learning about ${topic}`);
    }
    grade(stu, topic) {
        console.log(`${stu.name} receives a perfect score on ${topic}`);
    }
}

class Student extends Person {
    constructor(studentProperties) {
        super(studentProperties);
        this.previousBackground = studentProperties.previousBackground;
        this.className = studentProperties.className;
        this.favSubjects = studentProperties.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject) {
            console.log(subject);
        }
    }
    PRAssignment(topic) {
        console.log(`${this.name} has submitted a PR for ${topic}`);
    }
    sprintChallenge(topic) {
        console.log(`${this.name} has begun sprint challenge on ${topic}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmProperties) {
        super(pmProperties);
        this.gradClassName = pmProperties.gradClassName;
        this.favInstructor = pmProperties.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(stu, topic) {
        console.log(`${this.name} debugs ${stu.name}'s code on ${topic}`)
    }
}