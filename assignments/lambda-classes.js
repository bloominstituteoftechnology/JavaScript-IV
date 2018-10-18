// CODE here for your Lambda Classes
class Person{
    constructor(Pers){
    this.name = pers.name;
    this.age = pers.age;
    this.location = pers.location;
    this.gender = pers.gender;
    }
speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
     }
    }

class Instructor extends Person{
    constructor(inst){
        this.specialty = inst.specialty;
        this.favLanguage = inst.favLanguage;
        this.catchPhrase = inst. catchPhrase;
    }
    demo(){
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade(){
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`);
    }
    
}


class Student extends Person{
    constructor(stud){
        this.previousBackground = stud.previousBackground;
        this.className = stud.className;
        this.favSubjects = stud.favSubjects;
    }
    listsSubjects(){
        console.log();
    }
    PRAssignment(){
        console.log();
    }
    sprintChallenge(){
    console.log();
    }
}

class ProjectManagers extends Instructor{
    constructor(pm){
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(){
        console.log(`${this.name} announces to ${this.channel} @channel standy times!`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${this.student.name}'s code on ${this.subject}`);
    }
}