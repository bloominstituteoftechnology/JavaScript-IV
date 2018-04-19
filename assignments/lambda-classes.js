// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listSubjects(arr) {
        arr.forEach(element => {
            console.log(`${element}`);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @${slackChannel} standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
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

const john = new Instructor({
    name: 'John',
    location: 'NYC',
    age: 42,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Web Development',
    catchPhrase: 'Skippity Dippity Doo'
});

const mary = new Instructor({
    name: 'Mary',
    location: 'California',
    age: 36,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Android App Development',
    catchPhrase: 'Yup'
});

const susan = new Student({
    name: 'Susan',
    age: 22,
    location: 'Oregon',
    gender: 'female',
    previousBackground: 'waitress',
    className: 'CS10',
    favSubjects: ['JavaScript', 'Python', 'React', 'C']
});

const matthias = new Student({
    name: 'Matthias',
    age: 35,
    location: 'Thailand',
    gender: 'male',
    previousBackground: 'Founder of Bakken Enterprises, Inc.',
    className: 'CS10',
    favSubjects: ['JavaScript', 'Python', 'React', 'C', 'Mobile Development', 'Security']
});

const daojai = new Student({
    name: 'Daojai',
    age: 27,
    location: 'Thailand',
    gender: 'female',
    previousBackground: 'waitress',
    className: 'CS15',
    favSubjects: ['JavaScript', 'Python', 'HTML', 'CSS']
});

const thomas = new ProjectManager({
    name: 'Thomas',
    age: 24,
    location: 'n/a',
    gender: 'male',
    gradClassName: 'CS7',
    favInstructor: 'Josh'
});

const moises = new ProjectManager({
    name: 'Moises',
    age: 25,
    location: 'n/a',
    gender: 'male',
    gradClassName: 'CS5',
    favInstructor: 'Ryan'
});

const bonn = new ProjectManager({
    name: 'Bonn',
    age: 23,
    location: 'California',
    gender: 'male',
    gradClassName: 'CS7',
    favInstructor: 'Josh'
});

fred.demo('JavaScript');
fred.grade(matthias, 'JavaScript-IV');

matthias.listSubjects(matthias.favSubjects);
matthias.PRAssignment('JavaScript');
matthias.sprintChallenge('JavaScript');

moises.standUp('moises-CS10');
moises.debugsCode(matthias, 'JavaScript');