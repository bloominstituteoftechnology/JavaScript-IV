// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location= attributes.location;
    }
    //meathods
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}.`
    }
}//person

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    //meathods
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}// instructor

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBkg = attributes.previousBkg;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    //meathods
    listsSubjects(){
        return (`${this.favSubjects}`)
    }
    praassignment(subject){
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradeClassName = attributes.gradeClassName;
        this.favInstructor = attributes.favInstructor;
        this.standup = attributes.standup; 
    }
    //meathods
    standup(channel,){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    deBugsCode(){
        return `${this.name} debugs ${student.name}`
    }
}



const Dan = new Instructor({

})

























const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})