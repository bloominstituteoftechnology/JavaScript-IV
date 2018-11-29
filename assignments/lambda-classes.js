// CODE here for your Lambda Classes
// Person Class - Parent
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// Instructors - Child
class Instructors extends Person{
    constructor(instructAttrs){
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
// Students - Child 
class Students extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// Project Managers - Grandchild to Instructors
class ProjectManagers extends Instructors{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standup(channel){
        console.log(`${this.name} annouces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debug ${student.name}'s code on ${subject}.`)
    }
}

const josh = new Instructors({
    name: "Josh Knell",
    age: 30,
    location: "Company Retreat",
    gender: "Male",
    specialty: "Frontend Magic and Massaging the Big Cheese",
    favLanguage: "JavaScript",
    catchPhrase: "Isn't that neat?!?"
});


const matt = new Students({
    name: "Matt Basile",
    age: 24,
    location: "Brooklyn",
    gender: "Male",
    previousBackground: "Analyst & Social Media",
    className: "FSW16",
    favSubjects: "JS, LESS, HTML"
})

const emily = new ProjectManagers({
    name: "Emily McClanahan",
    age: 24,
    location: "Houston",
    gender: "Female",
    specialty: "Frontend Magic",
    favLanguage: "JavaScript",
    catchPhrase: "You guys are awesome!",
    gradClassName: "FSW15",
    favInstructor: "Ryan Hamblin"

})
// console.log(josh);
// console.log(matt);
// console.log(emily);
josh.demo("HTML");
josh.grade(matt, "CSS");
matt.listSubjects();
matt.PRAssignment("JS");
matt.sprintChallenge("Objects");
emily.standup("FSW16-emily");
emily.debugsCode(matt, "Prototypes");