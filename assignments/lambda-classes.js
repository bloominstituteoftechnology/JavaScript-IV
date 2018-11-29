// CODE here for your Lambda Classes
class Person {
    constructor (attributes){
        this.name= attributes.name;
        this.age= attributes.age;
        this.location= attributes.location;
        this.gender= attributes.gender;
    }
    speak(){
        return (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = ["redux", "web building", "banjo- playing"]
        this.favLanguage = ["JavaScript, C+"]
        this.catchPhrase= "When excellence becomes tradition, there is no end to greatness."
    }
    demo(){
        return (`Today we are learning about ${this.subject} `);
    }
    grade(){
        return (`${this.name} recieves a perfect score on ${this.subject}`);
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground= studentAttributes.previousBackground;
        this.className= studentAttributes.className;
        this.favSubjects= ["Html", "JS", "CSS"]
    }
    listSubjects(){
        return (`${this.favSubjects}`);
    }
    PRAssignments(){
        return (`${student.name} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge(){
        return(`${student.name} has begun sprint challenge on ${this.subject}`);
    }
}