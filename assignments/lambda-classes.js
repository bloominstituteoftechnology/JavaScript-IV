// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instAttr) {
        super(instAttr);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    percentage(student) {
        student.grade += (Math.round((Math.random() + 0.2) * 30));
        return student.grade;
    }
}

class Student extends Person {
    constructor(studAttr) {
        super(studAttr);
        this.previousBackground = studAttr.previousBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
        this.grade = 85;
    }
    listsSibjects() {
        return `${this.favSubjects}.`;
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun spring challenge on ${subject}.`;
    }
    graduate(student) {
        if(this.grade >= 70) {
            return `Congrats ${student.name} you graduated!`
        }
        else {
            return `Sorry ${student.name} you did not graduate. You can take next cohort available.`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.faveInstructor = PMAttr.faveInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


const John = new Instructor({
    name: 'John',
    age: 35,
    location: 'Boston',
    gender: 'M',
    specialty: ['HTML', 'CSS', 'LESS', 'JS'],
    favLanguage: ['HTML', 'LESS', 'JS'],
    catchPhrase: 'Welcome to CS13!'
});

const David = new Instructor({
    name: 'David',
    age: 30,
    location: 'Chicago',
    gender: 'M',
    specialty: ['JS', 'Ruby', 'Java'],
    favLanguage: ['JS', 'Ruby'],
    catchPhrase: 'Practice Practice!'
});

const Linda = new Student({
    name: 'Linda',
    age: 24,
    location: 'New York City',
    gender: 'F',
    previousBackground: 'Front End',
    className: 'CS13',
    favSubjects: ['HTML', 'LESS', 'JS']
});

const Kevin = new Student({
    name: 'Kevin',
    age: 26,
    location: 'Buffalo',
    gender: 'M',
    previousBackground: 'Data Analysts',
    className: 'CS13',
    favSubjects: ['HTML', 'CSS']
});

const Josh = new ProjectManager({
    name: 'Josh',
    age: 29,
    location: 'San Jose',
    gender: 'M',
    specialty: ['Java', 'C', 'Python'],
    favLanguage: ['Java', 'Python'],
    catchPhrase: 'Have any questions?',
    gradClassName: 'CS8',
    faveInstructor: 'John'
});

const Jenny = new ProjectManager({
    name: 'Jenny',
    age: 27,
    location: 'Seattle',
    gender: 'F',
    specialty: ['C++', 'Ruby'],
    favLanguage: ['Ruby'],
    catchPhrase: 'Encourage pair programming',
    gradClassName: 'CS10',
    faveInstructor: 'David'
});


console.log(John.speak());
console.log(John.catchPhrase);
console.log(David.demo('JavaScript'));
console.log(David.grade(Linda, 'JavaScript'));
console.log(Linda.previousBackground);
console.log(Kevin.sprintChallenge(Kevin, 'User Interface'));
console.log(Josh.standUp('pmjosh'));
console.log(Jenny.debugsCode(Linda, 'JavaScript-IV'));
console.log(Josh.percentage(Kevin));
console.log(Kevin.graduate(Kevin));