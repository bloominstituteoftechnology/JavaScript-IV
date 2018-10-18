// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instuctors extends Person {
    constructor(instuctorAtts) {
        super(instuctorAtts);
        this.specialty = instuctorAtts.specialty;
        this.favLanguage = instuctorAtts.faveLanguage;
        this.catchPhrase = instuctorAtts.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {  
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentAtts){
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubject = studentAtts.favSubject;
        this.grade = studentAtts.grade;
    }

    listSubjects() {  
        return `My facorite subjects are ${this.favSubject}`
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for a ${subject}`
    }
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instuctors {
    constructor(projectManagerAtts) {
        super(projectManagerAtts);
        this.gradClassName = projectManagerAtts.gradClassName;
        this.favInstructor = projectManagerAtts.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times!`
    }
}


//Instructor
const josh = new Person ({
    name: 'Josh',
    age: 34,
    location: 'Internets',
    gender: 'Male',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Invoke!'
});

//Student
const student = new Student ({
    name: 'Latifah',
    age: 27,
    location: 'Austin TX',
    gender: 'Female',
    previousBackground: 'Teacher',
    className: 'FSW15',
    favSubject: ['HTML', 'CSS', 'JavaScript'],
    grade: 90
});

//Project Manager
const jon = new ProjectManager ({
    name: 'Jon',
    age: 29,
    location: 'Interwebs',
    gender: 'Male',
    gradClassName: 'CS14',
    favInstructor: 'Josh'
});

console.log(student.name);
console.log(student.speak());
console.log(jon.speak());
console.log(jon.demo('JavaScript'));
console.log(jon.grade(student,'CSS'));
console.log(student.listSubjects());
console.log(jon.standUp('FWS15_jonathan'));
console.log(student.sprintChallenge('CSS'));