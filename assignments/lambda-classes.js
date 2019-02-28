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
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    changeGrade(student){
        const delta = Math.floor(Math.random()*6) - 1.5;
        student.grade += delta;
        return `${student.name}'s grade was changed to ${student.grade}`;
    }
}

class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = 40;
        this.graduated = false;
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
    graduate(){
        this.graduated = true;
        return `${this.name} graduated from Lambda School!`;
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

const Austen = new Instructor({
    name: "Austen Allred",
    age: "30",
    location: "Everywhere",
    gender: "M",
    specialty: "Everything",
    favLanguage: "Python",
    catchPhrase: "Welcome to Lambda School!"
})


const andrew = new Student({
    name: "Andrew Safran",
    age: 24,
    location: "Michigan",
    gender: "M",
    previousBackground: "Customer Service",
    className: "Web18",
    favSubjects: ["JavaScript", "Preprocessing"]
});

const otherStudent = new Student({
    name: "Someone else",
    age: 100,
    location:"USA",
    gender: "F",
    previousBackground: "Lawyer",
    className: "Web24",
    favSubjects: ["HTML","CSS","JS Fundamentals"]
})

console.log(andrew.age);
console.log(andrew.previousBackground);
andrew.listsSubjects();
andrew.sprintChallenge("JavaScript");
otherStudent.PRAssignment("React");
console.log(andrew.grade);
console.log(otherStudent.grade);

josh.speak();
console.log(josh.location);
josh.demo("inheritance");
josh.grade(andrew, "Preprocessing");

const dennis = new ProjectManager({
    name:"Dennis Orbison",
    age: 25,
    location: "N/A: Nomad",
    gender: "M",
    specialty: "Object Inheritance",
    favLanguage: "JavaScript",
    catchPhrase: "Hi Everyone!",
    gradClassName: "Web15",
    favInstructor: "Josh"
});

dennis.grade(otherStudent, "React");
console.log(dennis.location);
dennis.debugsCode(andrew, "JavaScript");

while(andrew.grade <=70){
    console.log(dennis.changeGrade(andrew));
}
console.log(andrew.graduate());