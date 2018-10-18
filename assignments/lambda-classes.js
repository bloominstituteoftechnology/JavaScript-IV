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
        return `Today we are learning ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect ${grade} on ${subject}.`;
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
        return `These are ${this.name}'s favorite subjects  ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(pmanager) {
        super(pmanager);
        this.gradClassName = pmanager.gradClassName;
        this.favInstructor = pmanager.favInstructor;
    }
    standUp(channel) {
        return `${this.name}, hey @channel ${channel} standby time!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${this.name}'s code on ${subject}`;
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
    favSubjects: ['HTML ', 'REACT ', 'JavaScript'],
    subject: 'REACT'
});

const keysha = new Student({
    name: 'Keysha',
    location: 'New York',
    age: 26,
    gender: 'female',
    previousBackground: 'Receptionist',
    className: 'CS09',
    favSubjects: ['SASS ', 'iOS ', 'UX/UI'],
    subject: 'SASS'
});

const mark = new Student({
    name: 'Mark',
    location: 'South Carolina',
    age: 47,
    gender: 'male',
    previousBackground: 'Retired Veteran',
    className: 'Data Structures',
    favSubjects: ['Alogorithms', ' Python'],
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
    name: 'Peter',
    location: 'San Francisco',
    age: 29,
    gender: 'male',
    gradClassName: 'REACT',
    favInstructor: 'Michael',
});



console.log(michael.demo('python'));
console.log(mark.listsSubjects());
console.log(mark.PRAssignment('HTML'));
console.log(mark.sprintChallenge('REACT'));
console.log(mark.className);
console.log(peter.standUp('FSW15'));
console.log(pablo.debugsCode('Keysha', 'JavaScript'));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();