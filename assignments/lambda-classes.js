class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(element) {
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

class projectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const rick = new Instructor({
    name: 'Rick',
    location: 'The Smith Household',
    age: 70,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const morty = new Student({
    name: 'Morty',
    location: 'The Smith Household',
    age: 14,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    previousBackground: `Science`,
    className: `WEBPT7`,
    favSubjects: [`Math`, `Physics`, `Javascript`],
    grade: 87
});

const ryan = new projectManager({
    name: 'Ryan',
    location: 'Utah', //right?
    age: 25, 
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: `WEB1`,
    favInstructor: `WEBPT7`
});

// console.log(rick);
// console.log(rick.speak());
// console.log(rick.demo('Javascript'));
// console.log(rick.grade(morty, 'Javascript'));

// console.log(morty);
// console.log(morty.speak());
// console.log(morty.listsSubjects());
// console.log(morty.PRAssignment('JavaScript'));
// console.log(morty.sprintChallenge('JavaScript'));

// console.log(ryan);
// console.log(ryan.speak());
// console.log(ryan.standUp('webpt7_ryanf'));
// console.log(ryan.debugsCode(morty, 'JavaScript'));