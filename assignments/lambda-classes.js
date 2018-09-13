// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects(){
        return `${this.name}'s favorite subjects are ${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}
class ProjectManager extends Instructor{
    constructor(PmAttributes){
        super(PmAttributes);
        this.gradClassName = PmAttributes.gradClassName;
        this.favInstructor = PmAttributes.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @${slackChannel} standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name} code on ${subject}`
    }
}
//Instructor Objects
const andrew = new Instructor({
    name: "Andrew Mendez",
    age: "38",
    location: "Australia",
    gender: "Male",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies!"
});

const aaron = new Instructor({
    name: "Aaron Swartz",
    age: "27",
    location: "New York",
    gender: "Male",
    specialty: "Python",
    favLanguage: "C++",
    catchPhrase: "IDKKK!!!"
});
const sarah = new Instructor({
    name: "Sarah Vega",
    age: "31",
    location: "Spain",
    gender: "Female",
    specialty: "C",
    favLanguage: "C#",
    catchPhrase: "Idk!!!!"
});
//Student Objects
const richard = new Student({
    name: "Richard Velasco",
    age: "20",
    location: "Louisiana",
    gender: "Male",
    previousBackground: "Real Estate Broker",
    className: "CS40",
    favSubjects:["Flexbox", "JavaScript", "Python"]
});
const ana = new Student({
    name: "Ana Hoffman",
    age: "19",
    location: "California",
    gender: "Female",
    previousBackground: "College Student",
    className: "CS30",
    favSubjects: ["JavaScript", "C"]
});

//Project Manager Objects
const kevin = new ProjectManager({
    name: "Kevin Hart",
    age: "39",
    location: "Philadelphia",
    gender: "Male",
    gradClassName:"CS8",
    favInstructor: "Aaron Swartz"
});
const robin = new ProjectManager({
    name: "Robin Haney",
    age: "26",
    location: "Florida",
    gender: "Male",
    gradClassName: "CS9",
    favInstructor: "Sarah Vega"
});

//=====TEST=====
// console.log(robin.name);
// console.log(`Favorite Instructor: ${robin.favInstructor}`);
// console.log(kevin.standUp("FSW78"));
// console.log(kevin.debugsCode(ana, "Python"));
// console.log(sarah.demo("JavaScript"));
// console.log(richard.favSubjects);
// console.log(ana.listSubjects());
// console.log(richard.PRAssignment("Python"));
// console.log(ana.sprintChallenge("Flexbox"));