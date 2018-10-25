// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
        `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttr){
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubject = studentAttr.favSubject;
        this.grade = studentAttr.grade;
    }
    listsSubject(){
        return `${this.favSubject}`
    }
    prAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallange(subject){
        `${student.name} has sprint challenge on ${subject}`
    }
}

class ProjectMaster extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}