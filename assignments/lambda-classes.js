// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.gender = attrs.gender;
        this.location = attrs.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instrAttrs) {
        super(instrAttrs);
        this.specialty = instrAttrs.specialty;
        this.favLanguage = instrAttrs.favLanguage;
        this.catchPhrase = instrAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(Student, subject) {
        console.log(`${Student.name} receives a perfect score on ${subject}`);
    }
    curve(grade) {
        return Math.random() + grade;
    }
}

class Student extends Person {
    constructor(StudentAttrs) {
        super(StudentAttrs);
        this.previousBackground = StudentAttrs.previousBackground;
        this.className = StudentAttrs.className;
        this.favSubjects = StudentAttrs.favSubjects;
        this.grade = StudentAttrs.grade;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }

    PRAssignment(subject) {
        console.log(`${Student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${Student.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (grade > 70) {
            console.log(`${Student.name} has graduated!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttrs) {
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`);
    }

    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on {subject}`);
    }
}

const Arthur = new Student({
    previousBackground: 'Graphic Design',
    className: 'CS12',
    favSubjects: 'JavaScript',
    grade: 90
});

const Josh = new Instructor({
    specialty: ['teaching', 'coding'],
    favLanguage: ['C++', 'Python', 'redux'],
    catchPhrase: "Don't forget the homies"
});

const Nathan = new ProjectManager({
    gradClassName: 'CS7',
    favInstructor: 'Josh',

});

console.log(Arthur.previousBackground);
console.log(Arthur.grade);
console.log(Josh.specialty);
console.log(Josh.catchPhrase)
console.log(Nathan.gradClassName);
console.log(Arthur.speak());
console.log(Nathan.standUp());
console.log(Josh.grade(Arthur, JavaScript));
