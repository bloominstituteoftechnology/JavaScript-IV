// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        student.grade += Math.random();
        student.grade -= Math.random();
        return `${student.name} receives a ${Math.round(student.grade * 100)} on ${subject}!`;
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has has begun the sprint challenge on ${subject}.`;
    }
    graduate() {
        if (this.grade > .7) {
            return `${this.name} has graduated from Lambda with a ${Math.round(this.grade * 100)}!`;
        } else {
            return `${this.name} hasn't graduated from Lamba. ${(this.gender == 'M') ? 'He' : 'She'} received a ${Math.round(this.grade * 100)}. Better luck next time!`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel [standup times here]!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on  ${subject}.`;
    }
}


// Tests

const instructor = new Instructor({
    name: 'Josh',
    age: null,
    location: null,
    gender: 'M',
    speciality: 'Frontend',
    favLanguage: 'Javascript',
    catchPhrase: 'Caveman it!',
});

const student = new Student({
    name: 'John',
    age: 19,
    location: 'TN',
    gender: 'M',
    previousBackground: 'College',
    className: 'CS12',
    favSubjects: [
        'Preprocessing',
        'JavaScript',
        'C.S.',
    ],
    grade: .8,
});

const futureStudent = new Student({
    name: 'Hailey',
    age: 24,
    location: 'MI',
    gender: 'F',
    previousBackground: 'I.T.',
    className: 'CS35',
    favSubjects: [
        'A.I.',
        'J.S.',
        'C.S.',
    ],
    grade: .9,
});

const projectManager = new ProjectManager({
    name: 'Gerri',
    age: 26,
    location: 'L.A.',
    gender: 'F',
    speciality: 'Backend',
    favLanguage: 'Python',
    catchPhrase: 'What a serendipity!',
    gradClassName: 'CS5',
    favInstructor: 'Josh',
});

console.log(student.speak());
console.log(student.listSubjects());
console.log(student.PRAssignment('Javascript'));
console.log(projectManager.debugsCode(student, 'Javascript'));
console.log(student.sprintChallenge('Javascript'));
console.log(projectManager.grade(student, 'Javascript'));
console.log(student.graduate());

console.log(projectManager.standUp('CS35_gerri'));
console.log(instructor.demo('self-driving space motorcycles'));
console.log(futureStudent.sprintChallenge('S.D.S.M.'));
console.log(instructor.grade(futureStudent, 'S.D.S.M.'));
console.log(futureStudent.graduate());