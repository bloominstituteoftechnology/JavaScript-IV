// CODE here for your Lambda Classes

// Base Class Person
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Instructor Class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `{student.name} receives a perfect score on ${subject}`;
    }
}

// Student Class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log([i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// Project Manager Class
class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standup(slackChannel) {
        return `${this.name} announces to ${slackChannel} @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}


// Test Objects

// Instructor Test
const fred = new Instructor ({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
});

const josh = new Instructor ({
    name: 'Josh Knell',
    location: 'Utah',
    age: 38,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Full-stack',
    catchPhrase: `What's up FSW 15...how is everyone doing today?!`,
});

// Student Test
const daren = new Student ({
    name: 'Daren Larson',
    location: 'Minnesota',
    age: 31,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'FSW 15',
    favSubjects: 'Javascript',
});

const mrRobot = new Student ({
    name: 'Elliot Alderson',
    location: 'New York City',
    age: 28,
    gender: 'male',
    previousBackground: 'Cyber Security',
    className: 'FSW 1',
    favSubjects: 'Hacking things',
});

// Project Manager Test
const Trevor = new ProjectManager ({
    name: 'Trevor Noah',
    location: 'New York City',
    age: 25,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Mr. Rodgers'
});

const Stewart = new ProjectManager ({
    name: 'Jon Stewart',
    location: 'New York City',
    age: 55,
    gender: 'male',
    gradClassName: 'CS0',
    favInstructor: 'John Kennedy'
});

