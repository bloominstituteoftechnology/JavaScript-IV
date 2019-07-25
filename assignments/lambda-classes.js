// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchphrase = attributes.catchphrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    changeGrade(student) {
        let change = Math.round(Math.random())*2-1; //pos or negative number
        change = change * 20;
        student.grade += change;
        console.log(`${student.name}'s grade has changed by ${change}! Their grade is now ${student.grade}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = Math.floor(Math.random()*100);
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => (console.log(subject)));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} can graduate from Lambda School`);
        } else {
            console.log(`${this.name} cannot graduate yet :( Has a grade of ${this.grade}, needs at least 70!`);
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

let jordan = new Student({
    name: "jordan",
    location: "seattle",
    age: 23,
    previousBackground: "Meteorology",
    className: "WEB22",
    favSubjects: ["Math", "JavaScript", "Forecasting"]
});

let josh = new Instructor({
    name:"josh",
    location:"somewhere",
    age:1,
    specialty:"notion hub",
    favLanguage: "english",
    catchphrase:"chicken nuggets are bomb"
});

josh.changeGrade(jordan);
josh.changeGrade(jordan);
josh.changeGrade(jordan);
josh.changeGrade(jordan);
josh.changeGrade(jordan);   
jordan.graduate();