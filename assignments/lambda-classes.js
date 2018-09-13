
class Person {
    constructor(baseAttr) {
        this.name = baseAttr.name;
        this.age = baseAttr.age;
        this.location = baseAttr.location;
        this.gender = baseAttr.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    distributePoints(student) {
        let addOrSubtract = Math.random();
        if (addOrSubtract > 0.5) {
            student.grade += Math.floor(Math.random() * Math.random() * 10);
            return `Points awarded to ${student.name}! Current grade: ${student.grade}`;
        } else {
            student.grade -= Math.floor(Math.random() * Math.random() * 10);
            return `Points deducted from ${student.name}! Current grade: ${student.grade}`;
        }
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    listsSubjects() {
        return this.favSubjects.toString();
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
        return (this.grade < 70 ? 'You didn\'t graduate! ~_~ Try again!' : 'You graduated! :D');
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Zoom Meeting Client',
    age: 'eternal',
    gender: 'male',
    specialty: 'instructing',
    favLanguage: 'ActionScript 3',
    catchPhrase: 'This is the inline-block to flexbox!'
});

const bigBoss = new Instructor({
    name: 'BIG BOSS',
    location: 'EVERYWHERE',
    age: 1000,
    gender: 'ALL',
    specialty: 'ALL',
    favLanguage: 'REGEX', 
    catchPhrase: 'NEED THOSE REPORTS'
});

const lola = new Student({
    name: 'Lola',
    location: 'Philadelphia suburbs',
    age: 21,
    gender: 'female',
    previousBackground: 'Pre-med student; just finished B.S. in Health Sciences',
    className: 'FSW14',
    favSubjects: ['Flexbox', 'LESS', 'JS Classes', 'JS Array Methods'],
    grade: 90
});

const stuart = new Student({
    name: 'Stuart Little',
    location: 'New York City',
    age: 15,
    gender: 'male',
    previousBackground: 'Anthropomorphic mouse',
    className: 'FSW20',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 50
});

const bill = new ProjectManager({
    name: 'Bill',
    location: '#FSW14_help',
    age: 'eternal',
    gender: 'male',
    specialty: 'managing projects',
    favLanguage: 'ES6',
    catchPhrase: 'Today was tough, but you know, tomorrow - well, actually - tomorrow will be tougher.',
    gradClassName: 'FSWinfinite',
    favInstructor: 'Josh, probably'
});

const geralt = new ProjectManager({
    name: 'Geralt of Rivia',
    location: 'Kaer Morhen',
    age: 100,
    gender: 'male',
    specialty: 'being a witcher',
    favLanguage: 'Polish',
    catchPhrase: 'Have you seen a girl with ashen hair?',
    gradClassName: 'FSW3',
    favInstructor: 'Harshness of Life'
});

console.log(josh.demo('JS Classes'));
console.log(bigBoss.grade(lola, 'User Interface'));
console.log(lola.listsSubjects());
console.log(lola.PRAssignment('prototypes'));
console.log(stuart.sprintChallenge('JavaScript'));
console.log(bill.standUp('#FSW14_bill'));
console.log(geralt.debugsCode(stuart, 'closures'));
console.log(geralt.speak());
console.log(bigBoss.distributePoints(stuart));
console.log(lola.graduate());
console.log(stuart.graduate());
