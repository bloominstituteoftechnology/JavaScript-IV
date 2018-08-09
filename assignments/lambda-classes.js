// Person Class
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// Instructor Class inherits from Person Class
class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchphrase = attr.catchphrase;

    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// Student Class inherits from person class
class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach((subject) => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}


// ProjectManager class extends Instructor class
class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradeClassName = attr.gradeClassName;
        this.favInstructor = attr.faveInstructor;
    }

    standup(slackChannel) {
        console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugCode(student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}


// starting the tests 


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred.speak();