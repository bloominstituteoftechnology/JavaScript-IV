// CODE here for your Lambda Classes
class Person {
    constructor (specs) {
        this.name = specs.name;
        this.age = specs.age;
        this.location = specs.location;
        this.gender = specs.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I amd from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor (childSpecs) {
        super(childSpecs);
        this.specialty = childSpecs.specialty;
        this.favLanguage = childSpecs.favLanguage;
        this.catchPhrase = childSpecs.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade (student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor (childSpecs) {
        super(childSpecs);
        this.previousBackground = childSpecs.previousBackground;
        this.className = childSpecs.className;
        this.favSubjects = childSpecs.favSubjects;
    }
    listsSubjects () {
        console.log(`Today we are learning about ${this.favSubjects}`)
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}


class ProjectManager extends Instructors {
    constructor (grandChildSpecs) {
        super(grandChildSpecs);
        this.gradClassName = grandChildSpecs.gradClassName;
        this.favInstructor = grandChildSpecs.favInstructor;
    }   
    standUp (slackChannel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Instructors
const celio = new Instructor({
    name: 'Celio',
    age: '64',
    location: 'Brazzaville',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'C',
    catchPhrase: 'Top-notch'
});

const florentina = new Instructor({
    name: 'Florentina',
    age: '59',
    location: 'Omsk',
    gender: 'F',
    specialty: 'Redux',
    favLanguage: 'Ruby',
    catchPhrase: 'Glorious'
});

// 
