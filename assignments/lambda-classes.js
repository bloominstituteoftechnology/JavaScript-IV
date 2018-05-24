// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
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
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(managerProps) {
        super(managerProps);
        this.gradClassName = managerProps.gradClassName;
        this.favInstructor = managerProps.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const dan = new Person({
    name: 'Dan',
    age: 22,
    location: 'Canada',
    gender: 'male'
});

const sara = new Person({
    name: 'Sara',
    age: 24,
    location: 'Mexico',
    gender: 'female'
});

const sol = new Instructor({
    name: 'Sol',
    age: 'unknown',
    location: 'USA',
    gender: 'male',
    specialty: 'front-end',
    favLanguage: 'Actionscript',
    catchPhrase: 'Time to fight, huh? GRAND VIPER!'
});

const ky = new Instructor({
    name: 'Ky',
    age: 'late 20s',
    location: 'France',
    gender: 'male',
    specialty: 'back-end',
    favLanguage: 'PHP',
    catchPhrase: 'Oh no, I\'m falling!'
});

const brandy = new Student({
    name: 'Brandy',
    age: '20',
    location: 'Russia',
    gender: 'female',
    previousBackground: 'waitress',
    className: 'CS11',
    favSubjects: ['HTML', 'CSS']
});

const jon = new Student({
    name: 'Jon',
    age: '21',
    location: 'Germany',
    gender: 'male',
    previousBackground: 'cashier',
    className: 'CS11',
    favSubjects: ['Javascript']
});

const aria = new ProjectManagers({
    name: 'Aria',
    age: 'unknown',
    location: 'USA',
    gender: 'female',
    specialty: 'front-end',
    favLanguage: 'HTML',
    catchPhrase: 'Bugs are gross!',
    gradClassName: 'CS6',
    favInstructor: 'Sol'
});

const dizzy = new ProjectManagers({
    name: 'Dizzy',
    age: 'unknown',
    location: 'France',
    gender: 'female',
    specialty: 'back-end',
    favLanguage: 'Ruby',
    catchPhrase: 'Yup! Good work!',
    gradClassName: 'CS8',
    favInstructor: 'Ky'
});

console.log(dan.speak()); // Hello my name is Dan, I am from Canada
console.log(sol.catchPhrase); // 'Time to fight, huh? GRAND VIPER!'
console.log(ky.catchPhrase); // Oh no, I'm falling!
console.log(sol.demo('Actionscript')); // Today we are learning about Actionscript
console.log(ky.grade(brandy, 'CSS')); // Brandy receives a perfect score on CSS
console.log(jon.listsSubjects()); // ['Javascript']
console.log(brandy.PRAssignment('preprocessors')); // Brandy has submitted a PR for preprocessors
console.log(jon.sprintChallenge('Web Design')); // Jon has begun sprint challenge on Web Design
console.log(aria.standUp('#CS11')); // Aria announces to #CS11, @channel standy times!
console.log(dizzy.debugsCode(jon, 'Ruby')); // Dizzy debugs Jon's code on Ruby
