// CODE here for your Lambda Classes
'use strict';
class Person{
    constructor(atts){
        this.name = atts.name
        this.age = atts.age,
        this.location = atts.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase;
    }
    demo(){
        this.subject = attr.subject,
        `Today we are learning about ${this.subject}`
    }
    grade(){
        this.student = attr.student,
        `${this.student} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person{
    constructor(attx){
        super(attx);
        this.previouseBackground = attx.previouseBackground,
        this.className = attx.className,
        this.favSubjects = attx.favSubjects;
        this.prSubject = attx.prSubject,
        this.sprintSubject = attx.sprintSubject
    }
    listSubjects(){
        return(this.favSubjects)
    }
    PRAssignment(){
        return(`${this.name} has submitted a PR for ${this.prSubject}.`)
    }
    sprintChallenge(){
        return (`${this.name} has begun sprint challenge on ${this.sprintSubject}.`)
    }
}

class ProjectManager extends Instructor{
    constructor(attz){
        super(attz);
        this.gradClassName = attz.gradClassName,
        this.favInstructor = attz.favInstructor,
        this.channel = attz.channel,
        this.studentName = attz.studentName,
        this.subject = attz.subject;

    };
    standUp(){
        return(`${this.name} announces to ${this.channel}, @channel standy times!`)
    }
    debugsCode(){
        return(`${this.name} debugs ${this.studentName}'s code on ${this.subject}.`)
    }
    
}

const aasa = new Student({
    name: 'Aasa',
    age: 30,
    location: 'Virginia',
    previouseBackground: 'Doctor',
    className: "Web24",
    favSubjects: 'math, science, english',
    prSubject: 'JavaScript IV',
    sprintSubject: 'Advanced CSS'

});

const tom = new ProjectManager({
    name: 'Thomas',
    studentName: 'Aasa',
    subject: 'advanced CSS'

});

console.log(aasa.favSubjects)
console.log(aasa.sprintChallenge())
console.log(tom.debugsCode())