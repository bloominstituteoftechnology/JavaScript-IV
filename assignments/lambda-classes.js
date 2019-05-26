// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(insAttributes) {
        super(insAttributes);
        this.specialty = insAttributes.specialty;
        this.favLanguage = insAttributes.favLanguage;
        this.catchPhrase = insAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// ------------------------------

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies` 
  });

const dar = new Instructor({
    name: 'bob',
    location: 'rock',
    age: 3,
    gender: 'dolphin',
    favLanguage: 'Java',
    specialty: 'Front',
    catchPhrase: `get the homies` 
});
    
const mar = new Instructor({
    name: 'bel',
    location: 'ock',
    age: 32,
    gender: 'ma',
    favLanguage: 'Script',
    specialty: 'Frend',
    catchPhrase: `Don't s` 
  });
  
// ------------------------------

const bam = new Student({
    name: 'jon',
    location: 'Bed',
    age: 33,
    gender: 'mae',
    previousBackground: "uhh",
    className: "4",
    favSubjects: ["java", "mocha", "fetticini"]
  });

  const car = new Student({
    name: 'Frd',
    location: 'Bjjk',
    age: 66,
    gender: 'female',
    previousBackground: "uhhaaaaa",
    className: "47",
    favSubjects: ["java", "mocha"]
  });

// ------------------------------

const lawn = new ProjectManagers({
    name: 'bbb',
    location: 'rk',
    age: 366,
    gender: 'dhin',
    favLanguage: 'Javaaa',
    specialty: 'Front0',
    catchPhrase: `the homies`,
    gradClassName: "cs99",
    favInstructor: "josh"
});

const sky = new ProjectManagers({
    name: 'bobbbbbbbbbb',
    location: 'rockkkkkkkkkkk',
    age: 399999,
    gender: 'dolphinnnnnnnnnnnn',
    favLanguage: 'Javaaaaaaaaaaaa',
    specialty: 'Fronteeeeeee',
    catchPhrase: `get the homiesddddddd`,
    gradClassName: "cs99888",
    favInstructor: "joshknell"
});

// ------------------------------

console.log("lambda classes start");
console.log("______________");

console.log(fred);
console.log(dar);
console.log(bam);
console.log(sky);

console.log();

fred.demo("music appreciation");
mar.grade(bam, "dog-watching");

console.log();

car.PRAssignment("react");
bam.listsSubjects();
car.sprintChallenge("youtube");

console.log();

lawn.standUp("challenge");
sky.debugsCode(bam, "react-monkey");