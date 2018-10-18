class Person {
    constructor(param) {
        this.name = param.name;
        this.age = param.name;
        this.location = param.location;
        this.gender = param.gender;
    }
    speak(params) {
        console.log(
            `Hello my name is ${this.name}, I am from ${this.location}`
        );
    }
}

class Instructor extends Person {
    constructor(param) {
        super(param);
        this.specialty = param.specialty;
        this.favLanguage = param.favLanguage;
        this.catchPhrase = param.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject, percentage) {
        student.grade = console.log(
            `${student.name} receives a perfect score on ${subject}`
        );
    }
}

class Student extends Person {
    constructor(param) {
        super(param);
        this.previousBackground = param.previousBackground;
        this.className = param.className;
        this.favSubjects = param.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submtted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(param) {
        super(param);
        this.gradClassName = param.gradClassName;
        this.favInstructor = param.favInstructor;
    }
    standUp(channel) {
        console.log(
            `${this.name} announces to ${channel}, @channel stand up time!`
        );
    }
    debugCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const david = new Student({
    name: 'David',
    location: 'Florida',
    age: '24',
    gender: 'male',
    favSubjects: ['js', 'html', 'css'],
    className: 'FSW15',
    grade: '60'
});

const joe = new ProjectManager({
    name: 'joe',
    location: 'Somewhere',
    age: '23',
    gender: 'male',
    specialty: 'Frontend development',
    favLanguage: 'Javascript',
    favSubjects: ['js', 'html', 'react']
});

fred.demo('js');
fred.grade(david, 'html');
david.listsSubjects();
david.PRAssignment('Javascript IV');
david.sprintChallenge('Javascript');
joe.standUp('fsw15_joe');
joe.debugCode(david, 'js');
