// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    
    listsSubjects() {
        return (`${this.name}'s favorite subjects are:` + "\n" + this.favSubjects.join(",\n") + ".");
    }
    
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName;
        this.favInstructor;
    }
    standup(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}


//Instructors listed below:
const rachel = new Instructor({
    name: "Rachel",
    location: "Raleigh",
    age: 23,
    gender: "female",
    favLanguage: "Python",
    specialty: "mobile",
    catchPhrase: "Thank god it's Friday."
});

const michael = new Instructor({
    name: "Michael",
    location: "Los Angeles",
    age: 29,
    gender: "male",
    favLanguage: "Java",
    specialty: "Automation",
    catchPhrase: "We're gonna need a bigger boat."
});

console.log(rachel.speak());
console.log(rachel.demo("the JavaScript 'Prototype' object"));
//End list of Instructors and Instructor tests.

//Project Managers listed below:
const dylan = new ProjectManager({
    name: "Dylan",
    location: "Charlotte",
    age: 33,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Back-end",
    catchPhrase: "Open the pod bay doors, HAL!",
    gradClassName: "CS4",
    favInstructor: "Jake"
});

const julia = new ProjectManager({
    name: "Julia",
    location: "Jacksonville",
    age: 26,
    gender: "female",
    favLanguage: "Ruby",
    specialty: "Front-end",
    catchPhrase: "Danger, Will Robinson!",
    gradClassName: "CS8",
    favInstructor: "Michael"
});

console.log(dylan.speak());
console.log(dylan.demo("JavaScript Inheritance"));
console.log(dylan.standup("fsw14_dylan"));

console.log(julia.speak());
console.log(julia.demo("JavaScript Arrays"));
console.log(julia.standup("fsw12_julia"));
//End list of Project Managers and PM tests.

//Students listed below:
const nick = new Student({
    name: "Nick",
    location: "Wilmington",
    age: 42,
    gender: "male",
    previousBackground: "math teacher",
    className: "CS12",
    favSubjects: ["Algorithms", "CSS", "AI"],
});

const haley = new Student({
    name: "Haley",
    location: "Emerald Isle",
    age: 19,
    gender: "female",
    previousBackground: "college student",
    className: "CS14",
    favSubjects: [],
});

console.log(nick.speak());
console.log(nick.listsSubjects());
console.log(nick.PRAssignment("JavaScript-III"));
console.log(nick.PRAssignment("JavaScript-III"));
console.log(nick.sprintChallenge("Javascript"));

console.log(haley.speak());
console.log(haley.listsSubjects());
console.log(haley.PRAssignment("Flexbox-II"));
console.log(haley.sprintChallenge("Advanced CSS"));



console.log(dylan.debugsCode(nick, "JavaScript-III"));
console.log(julia.debugsCode(haley, "Flexbox-II"));

console.log(rachel.grade(nick, "JavaScript-III"));
console.log(michael.grade(haley, "Flexbox-II"));