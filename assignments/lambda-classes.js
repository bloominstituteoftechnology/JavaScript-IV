// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}.`;
    }
}

//Child Class

class Instructor extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.favLanguage = childAttributes.favLanguage;
        this.specialty = childAttributes.specialty; 
        this.catchPhrase = childAttributes.catchPhrase;
        this.subject = childAttributes.subject
    }
    demo(subject) {
        return `Hello today we will be learning about ${this.subject}`;
    }
}

//Grandchild Class

class Student extends Instructor {
    constructor(grandChildAttributes) {
        super(grandChildAttributes);
        this.previousbackground = grandChildAttributes.previousbackground;
        this.className = grandChildAttributes.className;
        this.faveSubjects = grandChildAttributes.faveSubjects;
    }
    listsSubjects() {
        return `These are my favorite subjects in Lambda School: ${this.faveSubjects}`;
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun the sprint challenge for ${this.subject}`;
    }
}

//Great-Grandchild class

class ProjectManager extends Student {
    constructor(greatGrandChildAttributes) {
        super(greatGrandChildAttributes);
        this.gradClassName = greatGrandChildAttributes.gradClassName;
        this.faveInstructor = greatGrandChildAttributes.faveInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${this.channel}, @channel It's StandUp time!`;
    }
    debugsCode() {
        return `${this.name} debugs ${David.name}'s code on ${this.subject}`;
    }
}

//Attributes

const Isaiah = new Person ({
    name: 'Isaiah',
    location: 'Merced',
    age: 22,
    gender: 'Male'
});

const Chase = new Instructor ({
    name: 'Chase',
    location: 'Atwater',
    age: 30,
    gender: 'Male',
    favLanguage: "Python, JavaScript",
    specialty: "JavaScript",
    catchPhrase: "That's Sick!",
    subject: "JavaScript"
});

const David = new Student ({
    name: 'David',
    location: 'Mariposa',
    age: 45,
    gender: 'Male',
    subject: "JavaScript",
    previousbackground: "Construction/Painting",
    className: "CS114",
    faveSubjects: ["HTML", "CSS", "JavaScript"],
});

const Misty = new ProjectManager ({
    name: 'Misty',
    location: 'Cathy"s Valley',
    age: 37,
    gender: 'Female',
    gradClassName: "CS2",
    faveInstructor: "Keanu Reeves",
    channel: "CSPT1",
    subject: "JavaScript"
});

//Testing
console.log(Isaiah.name);
console.log(Isaiah.age);
console.log(Isaiah.speak());
console.log(Chase);
console.log(David);
console.log(David.listsSubjects());
console.log(Chase.demo('JavaScript'));
console.log(David.PRAssignment());
console.log(David.sprintChallenge('today'));
console.log(Misty.standUp());
console.log(Misty.debugsCode());
