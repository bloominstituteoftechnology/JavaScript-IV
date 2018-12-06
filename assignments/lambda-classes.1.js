// CODE here for your Lambda Classes
class Person {
    constructor (attrs){
        this.name = attrs.name;
        this.age = atts.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak(){
        return (`Hello my ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor (attrs){
        super (attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(){
        return (`Today we are learning about ${this.subject}.`)
    }
    grade(){
        return (`${student.name} receives a perfect score on ${this.subject}.`)
    }
}

class Student extends Person {
    constructor (attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects(){
        return (`${this.favSubjects}`);
    }
    PRAssignment(){
        return (`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(){
        return (`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class Project_Manager extends Person {
    constructor (attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(){
        return (`${this.name} announces to ${channel}, @channel stand time! `)
    }
    debugsCode(){
        return (`${this.name} debugs ${this.name}'s code on ${subject}`)
    }
}