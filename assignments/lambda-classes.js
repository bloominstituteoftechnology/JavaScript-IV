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
        return `Today we are learning about ${subject}`;
    }

    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`;
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
        return `My favorite subjects are ${this.favSubjects}`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade > 70) {
            return `${this.name} has graduated!`;
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
        return `${this.name} announces to ${slack}, @channel standy times!`;
    }

    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const Arthur = new Student({
    name: 'Arthur',
    location: 'Greensboro',
    previousBackground: 'Graphic Design',
    className: 'CS12',
    favSubjects: ['JavaScript', ' Python', ' MySQL', ' React'],
    grade: 90

});

const Josh = new Instructor({
    specialty: ['teaching', 'coding'],
    favLanguage: ['C++', 'Python', 'redux'],
    catchPhrase: "Don't forget the homies"
});

const Nathan = new ProjectManager({
    name: 'Nathan',
    gradClassName: 'CS7',
    favInstructor: 'Josh',

});

console.log(Arthur.previousBackground);
console.log(Arthur.listsSubjects());
console.log(Arthur.PRAssignment('mySQL'));
console.log(Arthur.sprintChallenge('JavaScript'));
console.log(Arthur.graduate());
console.log(Josh.specialty);
console.log(Josh.catchPhrase);
console.log(Josh.demo('Python'));
console.log(Josh.curve(99));
console.log(Nathan.gradClassName);
console.log(Nathan.debugsCode(Arthur, 'Javascript'));
console.log(Arthur.speak());
console.log(Nathan.standUp('CS12'));
console.log(Josh.grade(Arthur, 'JavaScript'));
