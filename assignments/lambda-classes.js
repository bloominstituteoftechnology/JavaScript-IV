class Person {
    constructor (params) {
        this.name = params.name;
        this.age = params.age;
        this.location = params.location;
        this.gender = params.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (params) {
        super(params);
        this.specialty = params.specialty;
        this.favLanguages = params.favLanguages;
        this.catchPhrase = params.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(params) {
        super(params);
        this.previousBackground = params.previousBackground;
        this.className = params.className;
        this.favSubjects = params.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects.join('\n');
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(params) {
        super(params);
        this.gradClassName = params.gradClassName;
        this.favInstructor = params.favInstructor;
    }

    standUp(channel) {
        return  `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}\'s code on ${subject}.`;
    }
}

const mary = new Instructor({
    'name': 'Mary',
    'age': 32,
    'location': 'MA',
    'gender': 'Female',
    'previousBackground': 'Software Engineer',
    'className': 'CS5',
    'favSubjects': ['Web Dev', 'Computer Science', 'Hardware'],
    'specialty': 'React',
    'favLanguage': 'JS',
    'catchPhrase': 'Practice! Practice! Practice!'
});

const keven = new ProjectManager({
    'name': 'Keven',
    'age': 34,
    'location': 'CA',
    'gender': 'Male',
    'previousBackground': 'Web Developer',
    'className': 'CS6',
    'favSubjects': ['Web Dev', 'Computer Science', 'Hardware', 'Game Dev'],
    'specialty': 'C++',
    'favLanguage': 'C',
    'catchPhrase': 'Keep moving on!',
    'gradClassName': 'CS13',
    'favInstructor': 'Mary'
});

const jeremy = new Student({
    'name': 'Jeremy',
    'age': 25,
    'location': 'GA',
    'gender': 'Male',
    'previousBackground': 'Stock Clerk',
    'className': 'CS13',
    'favSubjects': ['Web Dev', 'Computer Science']
});

console.log(mary.speak());
console.log(mary.demo('JS'));
console.log(mary.grade(jeremy, 'JS'));

console.log('\n');

console.log(keven.speak());
console.log(keven.standUp('CS13'));
console.log(keven.debugsCode(jeremy, 'UI'));

console.log('\n');

console.log(jeremy.speak());
console.log(jeremy.listsSubjects());
console.log(jeremy.PRAssignment('JS'));
console.log(jeremy.sprintChallenge('User Interface'));
