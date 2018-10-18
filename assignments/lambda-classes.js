// CODE here for your Lambda Classes
class Person {
    constructor(att){
        this.name = att.name;
        this.age = att.age;
        this.location = att.age;
        this.gender = att.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instAtt) {
        super(instAtt);
        this.specialty = instAtt.specialty;
        this.favLanguage = instAtt.favLanguage;
        this.catchPhrase = instAtt.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studAtt){
        super(studAtt);
        this.previousBackground = studAtt.previousBackground;
        this.className = studAtt.className;
        this.favSubjects = studAtt.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(projAtt){
        super(projAtt);
        this.gradClassName = projAtt.gradClassName;
        this.favInstructor = projAtt.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(StudentObj, subject){
        console.log(`${this.name} debugs ${StudentObj.name}'s code on ${subject}`)
    }
}