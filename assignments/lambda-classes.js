// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name} and I am from ${this.location}.`);
    }
} // Person

class Instructor extends Person {
    constructor(instrAttr) {
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
} // Instructor

class Student extends Person {
    constructor(stuAtrr) {
        super(stuAtrr);
        this.previousBackground = stuAtrr.previousBackground;
        this.className = stuAtrr.className;
        this.favSubjects = stuAtrr.favSubjects;
    }
    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++)
        console.log(`My favorite subjects are ${this.favSubjects[i]}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintCallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
} // Student

class ProjectManagers extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: "Fred",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: "Don't forget the homies"
});

const tom = new Instructor({
    name: "Tom",
    location: "Rocktown",
    age: 98,
    gender: "male",
    favLanguage: "HTML",
    specialty: "Everything",
    catchPhrase: "So yeah, I'm gonna need you to come in on Saturday."
});

const jerry = new Student({
    name: "Jerry",
    location: "Anytown",
    age: 20,
    gender: "male",
    previousBackground: "pizza delivery",
    className: "FSW16",
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const tommy = new Student({
    name: "Tommy",
    location: "Anycity",
    age: 21,
    gender: "male",
    previousBackground: "Sammich delivery",
    className: "FSW15",
    favSubjects: ['C', 'C+', 'C++']
});

const paul = new ProjectManagers({
    name: "Paul",
    location: "WhatsitTown",
    age: 55,
    gender: "male",
    gradClassName: "CS2",
    favInstructor: "Tom"
});

const paulie = new ProjectManagers({
    name: "Paulie",
    location: "ThisTown",
    age: 81,
    gender: "male",
    gradClassName: "CS1",
    favInstructor: "Fred"
});

fred.demo("Gym");
tom.grade(jerry, "BasketWeaving");

tommy.listsSubjects();
tommy.PRAssignment("Python");
jerry.sprintCallenge("Prototype");

paulie.standUp("FSW16");
paul.debugsCode(paulie, "Algos");