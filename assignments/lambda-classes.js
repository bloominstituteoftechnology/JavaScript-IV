// CODE here for your Lambda Classes
class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Instructor({
    name: "Josh Knell",
    age: 35,
    location: "Lambda HQ",
    gender: "M",
    specialty: "Front-end",
    favLanguage: "CSS",
    catchPhrase: "Lost in the sauce"
});

josh.speak();
console.log(josh.location);
josh.demo("inheritance");

const andrew = new Student({
    name: "Andrew Safran",
    age: 24,
    location: "Michigan",
    gender: "M",
    previousBackground: "Customer Service",
    className: "Web18",
    favSubjects: ["JavaScript", "Preprocessing"]
});

console.log(andrew.age);
console.log(andrew.previousBackground);
andrew.listsSubjects();
andrew.sprintChallenge("JavaScript");