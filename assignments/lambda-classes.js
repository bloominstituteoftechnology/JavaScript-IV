// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.speciality = childAttributes.speciality;
        this.favLanguage = childAttributes.favLanguage;
        this.catchPhrase = childAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }

    points(student, grade) {
        return student.grade + (Math.floor(Math.random() * 100) + (-100));
    }
}

class Student extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.previousBackground = childAttributes.previousBackground;
        this.className = childAttributes.className;
        this.favSubjects = childAttributes.favSubjects;
        this.grade = childAttributes.grade;
    }

    listSubjects() {
        this.favSubjects.forEach(function (element) {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(grandChildAttributes) {
        super(grandChildAttributes);
        this.gradClassName = grandChildAttributes.gradClassName;
        this.favInstructor = grandChildAttributes.favInstructor;
    }
    standUp(channel) {
        return`${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const george = new Instructor ({
    name: 'George',
    location: 'Texas',
    age: 75,
    gender: 'male',
    favLanguage: 'R',
    speciality: 'Data Science',
    catchPhrase: 'Show me the data!'
});

const jody = new Student ({
    name: 'Jody',
    location: 'London',
    age: 26,
    gender: 'female',
    favLanguage: ['Lisp', 'Haskell'],
    speciality: 'Functional Programming',
    catchPhrase: 'Lambda Calculus',
    grade: 87
});

const kevin = new ProjectManager ({
    name: 'Kevin',
    location: 'Nashville',
    age: 43,
    gender: 'male',
    favLanguage: 'Golang',
    speciality: 'Devops',
    catchPhrase: 'It is what it is.'
});

console.log(jody.location);
console.log(kevin.catchPhrase);
console.log(george.speciality);
console.log(george.favLanguage);
console.log(kevin.debugsCode('Jody', 'CSS'));
console.log(kevin.standUp('FSW15'));
console.log(jody.PRAssignment('Javascript-IV'));
console.log(jody.sprintChallenge('Javascript'));
console.log(kevin.points(jody));
console.log(george.speak());
