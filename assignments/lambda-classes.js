// CODE here for your Lambda Classes
class Person {
    constructor(details) {
        this.name = details.name;
        this.location = details.location;
        this.age = details.age;
        this.gender = details.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, i am from ${this.location}!`);
    }
}

class Instructor extends Person {
    constructor(instDetails) {
        super(instDetails);
        this.specialty = instDetails.specialty;
        this.favLanguage = instDetails.favLanguage;
        this.catchPhrase = instDetails.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentDetails) {
        super(studentDetails);
        this.previousBackground = studentDetails.previousBackground;
        this.className = studentDetails.className;
        this.favSubjects = studentDetails.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManagers extends Person {
    constructor(pmDetails) {
        super(pmDetails);
        this.gradClassName = pmDetails.gradClassName;
        this.favInstructor = pmDetails.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const chris = new Student({
    name: 'Chris',
    location: 'Queens NY',
    age: 23,
    gender: 'male',
    previousBackground: 'Freelance Websites',
    className: 'FSW 14',
    favSubjects: ['CSS / LESS', 'Javascript', 'Node.JS', 'Python'],
})

const bill = new ProjectManagers({
    name: 'William',
    location: 'City of a State',
    age: 23,
    gender: 'male',
    gradClassName: 'FSW 14',
    favInstructor: 'Batman Josh',
});

const fred = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 29,
    gender: 'male',
    favLanguage: 'Flash',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

chris.speak();
chris.listsSubjects();
chris.PRAssignment('Javascript');
chris.sprintChallenge('React');

bill.speak();
bill.standUp('fsw14_bill');
bill.debugsCode(chris, 'Javascript');

fred.speak();
fred.demo('Javascript');
fred.grade(chris, 'Javascript');