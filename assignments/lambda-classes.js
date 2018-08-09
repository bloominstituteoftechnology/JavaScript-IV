// CODE here for your Lambda Classes

class Person {
    constructor(personAttribs) {
        this.name = personAttribs.name;
        this.age = personAttribs.age;
        this.location = personAttribs.location;
        this.gender = personAttribs.gender;
    }

    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttribs) {
        super(instructorAttribs);
        this.specialty = instructorAttribs.specialty;
        this.favLanguage = instructorAttribs.favLanguage;
        this.catchPhrase = instructorAttribs.catchPhrase;
    }

    demo(subject) {
        return (`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }

    addOrSubtractPoints(student) {
        const min = Math.ceil(1);
        const max = Math.floor(10);
        let points = Math.floor(Math.random() * (max - min)) + min;

        const negOrPos = Math.random() < .5 ? -1 : 1;
        const pointsNegOrPos = negOrPos * points;

        student.grade = parseInt(student.grade) + pointsNegOrPos;
        return (student.grade);
    }
}


class Student extends Person {
    constructor(studentAttribs) {
        super(studentAttribs);
        this.previousBackground = studentAttribs.previousBackground;
        this.className = studentAttribs.className;
        this.favSubjects = studentAttribs.favSubjects;
        this.grade = studentAttribs.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(function (subject) {
            console.log(subject);
        })
        //figure out how to return actually nothing, currently gives an empty line
        return;
    }

    PRAssignments(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate() {
        if (this.grade >= 70) {
            return (`${this.name} has graduated!`);
        } else {
            return (`${this.name} did not graduate. :(`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttribs) {
        super(projectManagerAttribs);
        this.gradClassName = projectManagerAttribs.gradClassName;
        this.favInstructor = projectManagerAttribs.favInstructor;
    }

    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        return (`${this.name} debugs ${student}'s code on ${subject}.`);
    }
}


const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male'
});

const john = new Instructor({
    name: 'John',
    location: 'Bedrock',
    age: 42,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const josephina = new Student({
    name: 'Josephina',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    previousBackground: 'nothing',
    className: 'CS13',
    favSubjects: ['MongoDB', 'JavaScript'],
    grade: 100
});

const sally = new ProjectManager({
    name: 'Sally',
    location: 'Bedrock',
    age: 27,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS8',
    favInstructor: 'Josh'
});

console.log(fred.name);
console.log(fred.age);
console.log(fred.location);
console.log(fred.gender);
console.log(fred.speak());

console.log(john.name);
console.log(john.age);
console.log(john.location);
console.log(john.gender);
console.log(john.speak());
console.log(john.favLanguage);
console.log(john.specialty);
console.log(john.catchPhrase);
console.log(john.demo('Bootstrap'));
console.log(john.grade(josephina, 'Javascript'));
console.log(john.addOrSubtractPoints(josephina));

console.log(josephina.name);
console.log(josephina.age);
console.log(josephina.location);
console.log(josephina.gender);
console.log(josephina.speak());
console.log(josephina.previousBackground);
console.log(josephina.className);
console.log(josephina.favSubjects);
console.log(josephina.listsSubjects());
console.log(josephina.PRAssignments('jQuery'));
console.log(josephina.sprintChallenge('Responsive Design'));
console.log(josephina.graduate());

console.log(sally.name);
console.log(sally.age);
console.log(sally.location);
console.log(sally.gender);
console.log(sally.speak());
console.log(sally.gradClassName);
console.log(sally.favInstructor);
console.log(john.demo('Bootstrap'));
console.log(john.grade(josephina, 'Javascript'));
console.log(john.addOrSubtractPoints(josephina));
console.log(sally.standUp('CS13-Megan'));
console.log(sally.debugsCode('Keiran', 'Javascript'));