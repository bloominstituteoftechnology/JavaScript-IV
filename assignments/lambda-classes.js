// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak() {
       return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
        this.gradedAnswer = Instructor.gradedAnswer;
    }
    demo(subject) {
       return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}`;
    }

    gradedNumber(student, max){
        student.gradedAnswer = Math.floor(Math.random() * Math.floor(max));
        return `${student.name}'s score is: ${student.gradedAnswer}`;
    }

    graduate(student) {
        if (student.gradedAnswer > 70) {
            return `${student.name} has graduated!`;
        } else {
            return `Try again next time!`;
        }
    }
}

class Student extends Person{
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    listsSubjects() {
       return `My favourite subjects are, ${this.favSubjects}`;
    }

    PRAssignment(subject) {
       return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
       return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(channel) {
       return `${this.name} announces to ${channel}, @channel standy times! `;
    }

    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Person({
    name: 'Fred',
    age: 27,
    location: 'Bedrock',
    gender: 'M',
});

const fred2 = new Person({
    name: 'Fred2',
    age: 82,
    location: 'Ballroom',
    gender: 'F',
});

const jack = new Instructor ({
    name: 'Jack',
    age: 32,
    location: 'Lambda',
    gender: 'M',
    specialty: 'redux',
    favLanguage: 'Javascript',
    catchPhrase: 'Don\'t forget the homies'
});

const jack2 = new Instructor ({
    name: 'Jack2',
    age: 23,
    location: 'Lamb',
    gender: 'M',
    specialty: 'pthyon',
    favLanguage: 'c++',
    catchPhrase: 'forget the homies'
});

const kate = new Student ({
    name: 'Kate',
    age: 24,
    location: 'Lambda',
    gender: 'F',
    previousBackground: 'Accounting',
    className: 'CS900',
    favSubjects: ['Html', ' CSS', ' Javascript'],
});

const kate2 = new Student ({
    name: 'Kate2',
    age: 42,
    location: 'Lam',
    gender: 'F',
    previousBackground: 'Cashier',
    className: 'CS90',
    favSubjects: ['Redux', ' React', ' Javascript'],
    gradeNumber: 62
});

const seve = new ProjectManagers ({
    name: 'Seve',
    age: '???',
    location: 'Lambda',
    gender: '???',
    gradClassName: 'CS2',
    favInstructor: 'Sean'
});

const seve2 = new ProjectManagers ({
    name: 'Seve',
    age: '19',
    location: 'Lambda',
    gender: 'M',
    gradClassName: 'CS5',
    favInstructor: 'Jack'
});



console.log(fred.speak());

console.log(fred2.speak());

console.log(jack.demo('Python'));
console.log(jack.grade(kate, 'Elm test'));
console.log(jack.gradedNumber(kate, 100));
console.log(jack.graduate(kate));

console.log(jack2.demo('Javascript'));
console.log(jack2.grade(kate2, 'React Test'));
console.log(jack2.gradedNumber(kate2, 100));
console.log(jack.graduate(kate2));

console.log(kate.listsSubjects());
console.log(kate.PRAssignment('Javascript IV'));
console.log(kate.sprintChallenge('Javascript Fundamentals'));

console.log(kate2.listsSubjects());
console.log(kate2.PRAssignment('React 8'));
console.log(kate2.sprintChallenge('Advanced CSS'));

console.log(seve.standUp('FSW15'));
console.log(seve.debugsCode(kate, 'C subject'));

console.log(seve2.standUp('FSW2095'));
console.log(seve2.debugsCode(kate2, 'Python'));