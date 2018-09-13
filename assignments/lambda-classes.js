// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase; 
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(PMAttributes){
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standUp(slackChannel, subject){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`)
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

// ===================
// Object Creation
// ===================

const drew = new Student({
    name : "Drew",
    age : 18,
    location : "Montana",
    gender : "M",
    previousBackground : "self-taught",
    className : "FSW-14",
    favSubjects : "[HTML,CSS,JavaScript]"
});

const kamry = new ProjectManager({
    name : "Kamry",
    age : 23,
    location : "Utah",
    gender : "M",
    gradClassName : "CS-12",
    favInstructor : "Josh Knell"
});

const josh = new Instructor({
    name : "Josh",
    age : 35,
    location : "Utah",
    gender : "M",
    specialty : "Everything",
    favLanguage : "JavaScript",
    catchPhrase : "Let's play some banjo!"
})
// ===================
// Tests
// ===================
console.log(drew.name);
console.log(kamry.name);
console.log(josh.name);
kamry.debugsCode(drew,"JavaScript III");
kamry.speak();
drew.speak();
josh.grade(drew,"JavaScript IV")

