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
    passFail() {
        const generatePoints = Math.floor((Math.random() * 50) + 10);
        const addSubtract = Math.round(Math.random(), 2);
        if (addSubtract === 0) {
            return student.grade -= generatePoints;
        } else {
            return student.grade += generatePoints;
        }
    }
}

class Student extends Person { 
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
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
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} graduated!`;
        } else {
            `${this.name} needs to study more!`; 
       }
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


const joe = new Person({
    gender: 'M',
    name: 'Joe',
    age: '28',
    location: 'Italy'
});
console.log(joe);

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


const fred = new Instructor({
    gender: 'M',
    name: 'Fred',
    age: '28',
    location: 'Italy',
    specialty: 'traveling',
    favLanguage: 'British English',
    catchPhrase: 'What you waiting for',
});
console.log(fred);

const samantha = new Instructor({
    gender: 'F',
    name: 'Samantha',
    age: '22',
    location: 'Paris',
    specialty: 'travel',
    favLanguage: 'Spanish',
    catchPhrase: 'Chances Make Champions',
});
console.log(angela);

const clyde = new Instructor({
    gender: 'M',
    name: 'Clyde',
    age: '26',
    location: 'Germany',
    specialty: 'Flying',
    favLanguage: 'Arabic',
    catchPhrase: 'Get with it',
});
console.log(john);

const Matt = new Student({
    name: 'Matt',
    age: '28',
    location: 'Italy',
    previousBackground: 'Jackets',
    className: 'Class Of Hardknocks',
    favSubjects: 'Foreign Languages',
    grade: 60
});
console.log(fred);

const mariam = new Student({
    name: 'Mariam',
    age: '22',
    location: 'Paris',
    previousBackground: 'Active',
    className: 'By all means',
    favSubjects: 'Math',
    grade: 60
});
console.log(mariam);


const justin = new Student({
    name: 'Justin',
    age: '26',
    location: 'Germany',
    previousBackground: 'Priors',
    className: 'Intuition',
    favSubjects: 'The Hard Way',
    grade: 60
});
console.log(justin);

const freddy = new ProjectManager({
    name: 'Freddy',
    age: '28',
    location: 'Italy',
    specialty: 'Crafts',
    favLanguage: 'Turkish',
    catchPhrase: 'Stay Ready',
    gradClassName: '2006',
    favInstructor: 'Patrick'
});
console.log(freddy);

const amy = new ProjectManager({
    gender: 'F',
    name: 'Amy',
    age: '22',
    location: 'Paris',
    specialty: 'In the field',
    favLanguage: 'Polish',
    catchPhrase: 'watch where you step',
    gradClassName: '1997',
    favInstructor: 'Big Mo'
});
console.log(amy);


const johnathan = new ProjectManager({
    gender: 'M',
    name: 'Johnathan',
    age: '26',
    location: 'Germany',
    specialty: 'Making People Laugh',
    favLanguage: 'French',
    catchPhrase: 'pay attention',
    gradClassName: '2018',
    favInstructor: 'Josh'
});
console.log(johnathan);
