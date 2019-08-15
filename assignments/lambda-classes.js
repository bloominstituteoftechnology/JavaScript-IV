// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun the sprint challenge on ${subject}.`
    }
}

class TeamLead extends Instructor {
    constructor(tlAttrs) {
        super(tlAttrs);
        this.gradClassName = tlAttrs.gradClassName;
        this.favInstructor = tlAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const instructor = new Instructor ({
    name: 'Angie',
    location: 'Brandon',
    age: 28,
    specialty: 'CSS',
    favLanguage: 'JavaScript',
    catchPhrase: 'Balls!'
});

const student = new Student ({
    name: 'Joseph',
    location: 'Merced',
    age: 27,
    previousBackground: 'Chef',
    className: 'Webpt9',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const teamLead = new TeamLead ({
    name: 'David',
    location: 'Mariposa',
    age: 25,
    gradClassName: 'Web9',
    favInstructor: 'Ben'
});

console.log(instructor.demo('Web Dev'));
console.log(instructor.grade('JavaScript I'));
console.log(student.listsSubjects());
console.log(student.PRAssignment('JavaScript II'));
console.log(student.sprintChallenge('JavaScript II'));
console.log(teamLead.standUp('#Webpt9-David'));
console.log(instructor.grade('JavaScript I'));

