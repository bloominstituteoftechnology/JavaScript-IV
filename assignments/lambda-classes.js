// CODE here for your Lambda Classes

// Person
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

// Instructor
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
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// Student
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


// Project Manager
class ProjectManager extends Instructor {
    constructor (grandChildSpecs) {
        super(grandChildSpecs);
        this.gradClassName = grandChildSpecs.gradClassName;
        this.favInstructor = grandChildSpecs.favInstructor;
    }   
    standUp (slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`)
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

// Students
const Tereza = new Student({
    name: 'Tereza',
    age: '48',
    location: 'Istanbul',
    gender: 'F',
    previousBackground: 'Reporter',
    className: 'CS103',
    favSubjects: ['HTML', 'React', 'MongoDB']
});

const Muirne = new Student({
    name: 'Muirne',
    age: '24',
    location: 'Tainan',
    gender: 'F',
    previousBackground: 'Artist',
    className: 'CS138',
    favSubjects: ['Javascript', 'Redux', 'Python']
});

// Project Managers
const anselmo = new ProjectManager({
    name: 'Anselmo',
    age: '36',
    location: 'Hamburg',
    gender: 'M',
    specialty: 'Data Structures',
    favLanguage: 'Django',
    catchPhrase: 'Wicked',
    gradClassName: 'CS92',
    favInstructor: 'Agapetus'
});

const mat = new ProjectManager({
    name: 'Mat',
    age: '34',
    location: 'Toronto',
    gender: 'M',
    specialty: 'Algorithms',
    favLanguage: 'React',
    catchPhrase: 'You know it',
    gradClassName: 'CS53',
    favInstructor: 'Rosalie'
});

// Test Code

//console.log(florentina.specialty);
//florentina.demo('HTML');
//florentina.grade(Tereza, 'HTML');


//console.log(Tereza.age);
//Tereza.PRAssignment('HTML');
//Tereza.sprintChallenge('HTML');

//console.log(mat.name);
//mat.standUp('cs12');
//mat.debugsCode(Muirne, 'HTML')