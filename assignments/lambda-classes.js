// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instruct) {
        super(instruct);
        this.specialty = instruct.specialty;
        this.favLanguage = instruct.favLanguage;
        this.catchPhrase = instruct.catchPhrase;
        this.grade = instruct.grade;
    }
    demo(subject) {
        console.log(`Today we are learning ${this.subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect ${this.grade} on ${this.subject}.`);
    }
}
class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
        this.subject = student.subject;
    }
    listsSubjects(favSubjects) {
        console.log();
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(pmanager) {
        super(pmanager);
        this.gradClassName = pmanager.gradClassName;
        this.favInstructor = pmanager.favInstructor;
    }
    standUp() {
        console.log(`${this.name} @channel standby time!`);
    }
    debugsCode() {
        console.log(`${this.name} debugs ${this.student.name}'s code on ${this.subject}`);
    }
}



const john = new Instructor({
    name: 'John',
    location: 'Wisconsin',
    age: 27,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
});

const sarah = new Instructor({
    name: 'Sarah',
    location: 'Florida',
    age: 22,
    gender: 'female',
    favLanguage: 'REACT',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the ladies`
});

const michael = new Instructor({
    name: 'Michael',
    location: 'South Carolina',
    age: 47,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const thomas = new Student({
    name: 'Thomas',
    location: 'Wyoming',
    age: 19,
    gender: 'male',
    previousBackground: 'Retail',
    className: 'CS15',
    favSubjects: ['HTML', 'REACT', 'JavaScript'],
    subject: 'REACT'
});

const keysha = new Student({
    name: 'Keysha',
    location: 'New York',
    age: 26,
    gender: 'female',
    previousBackground: 'Receptionist',
    className: 'CS09',
    favSubjects: ['SASS', 'iOS', 'UX/UI'],
    subject: 'SASS'
});

const mark = new Student({
    name: 'Mark',
    location: 'South Carolina',
    age: 47,
    gender: 'male',
    previousBackground: 'Retired Veteran',
    className: 'Data Structures',
    favSubjects: ['Alogorithms', 'Python'],
    subject: 'Python'
});

const nicole = new ProjectManagers({
    name: 'Nicole',
    location: 'Massachusetts',
    age: 33,
    gender: 'female',
    gradClassName: 'CS09',
    favInstructor: 'Sarah',
});

const pablo = new ProjectManagers({
    name: 'Pablo',
    location: 'California',
    age: 29,
    gender: 'male',
    gradClassName: 'Python',
    favInstructor: 'John',
});

const peter = new ProjectManagers({
    name: 'peter',
    location: 'San Francisco',
    age: 29,
    gender: 'male',
    gradClassName: 'REACT',
    favInstructor: 'Michael',
});