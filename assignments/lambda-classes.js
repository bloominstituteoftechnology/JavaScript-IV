// CODE here for your Lambda Classes
class Person{
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender; 
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructors extends Person{
    constructor (attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(Subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(Subject){
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor (attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }
    listsSubjects(){
        console.log(this.favSubject)
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
}

class PM extends Instructors{
    constructor (attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(name){
        console.log(`${name} announces to channel, @Channel stand times!`)
    }
    debugsCode(name,subject){
        console.log(`${name}debugs ${student.name}'s code on ${subject}`)
    }
}