// CODE here for your Lambda Classes
class Person {
    constructor(personProps) {
        this.gender = personProps.gender;
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
    }
    speak() {
        return `Hello my name is ${this.name} , I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) { //checking if quotes are needed later
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person { 
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects.map(subject => subject)} `;
    }
    PRAssignments(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    debugsCode(student) {
        return `${name} debugs ${student.name}'s code on ${subject} `
    }
    standUp(slackChannel) {
        return `${name} announces to ${slackChannel}, @channel standy times! `
    }
}


const fred = new Person({
    gender: 'M',
    name: 'Fred',
    age: '28',
    location: 'Italy'
});
console.log(fred);

const angela = new Person({
    gender: 'F',
    name: 'Angela',
    age: '22',
    location: 'Paris'
});
console.log(angela);


const john = new Person({
    gender: 'M',
    name: 'Joh',
    age: '26',
    location: 'Germany'
});
console.log(john);


// const fred = new Instructor({
//     gender: 'M',
//     name: 'Fred',
//     age: '28',
//     location: 'Italy',
//     specialty: 'traveling',
//     favLanguage: 'Arabic',
//     catchPhrase: 'Chances Make Champions',
// });
// console.log(fred);

// const angela = new Instructor({
//     gender: 'F',
//     name: 'Angela',
//     age: '22',
//     location: 'Paris',
//     specialty: 'travel',
//     favLanguage: 'Arabic',
//     catchPhrase: 'Chances Make Champions',
// });
// console.log(angela);

// const john = new Instructor({
//     gender: 'M',
//     name: 'Joh',
//     age: '26',
//     location: 'Germany',
//     specialty: 'traveling',
//     favLanguage: 'Arabic',
//     catchPhrase: 'Chances Make Champions',
// });
// console.log(john);

// const fred = new Student({
//     name: 'Fred',
//     age: '28',
//     location: 'Italy',
//     previousBackground: '',
//     className: '',
//     favSubjects: ''
// });
// console.log(fred);

// const angela = new Student({
//     name: 'Angela',
//     age: '22',
//     location: 'Paris',
//     previousBackground: '',
//     className: '',
//     favSubjects: ''
// });
// console.log(angela);


// const john = new Student({
//     name: 'Joh',
//     age: '26',
//     location: 'Germany',
//     previousBackground: '',
//     className: '',
//     favSubjects: ''
// });
// console.log(john);

// const fred = new ProjectManager({
//     name: 'Fred',
//     age: '28',
//     location: 'Italy',
//     specialty: '',
//     favLanguage: '',
//     catchPhrase: '',
//     gradClassName: '',
//     favInstructor: ''
// });
// console.log(fred);

// const angela = new ProjectManager({
//     gender: 'F',
//     name: 'Angela',
//     age: '22',
//     location: 'Paris',
//     specialty: '',
//     favLanguage: '',
//     catchPhrase: '',
//     gradClassName: '',
//     favInstructor: ''
// });
// console.log(angela);


// const john = new ProjectManager({
//     gender: 'M',
//     name: 'Joh',
//     age: '26',
//     location: 'Germany',
//     specialty: '',
//     favLanguage: '',
//     catchPhrase: '',
//     gradClassName: '',
//     favInstructor: ''
// });
// console.log(john);
