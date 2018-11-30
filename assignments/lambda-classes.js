// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructProps) {
        super(instructProps);
        this.specialty = instructProps.specialty;
        this.favLanguage = instructProps.favLanguage;
        this.catchPhrase = instructProps.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects(subject1, subject2, subject3) {
        console.log(`I like ${subject1}, ${subject2}, and ${subject3}.`);
    }

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log (`${this.name} has begun a sprint challenge on ${subject}`);
    }
}

class ProjectMngr extends Instructor {
    constructor(prjctMngrProps) {
        super(prjctMngrProps);
        this.gradClassName = prjctMngrProps.gradClassName;
        this.favInstructor = prjctMngrProps.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}


const mark = new Instructor({
    name: 'Mark',
    age: 34,
    location: 'San Jose',
    gender: 'M',
    specialty: 'Front-end',
    favLanguage: 'HTML',
    catchPhrase: 'Bananas!',
});

const linda = new Instructor({
    name: 'Linda',
    age: 27,
    location: 'New York',
    gender: 'F',
    specialty: 'Back-End',
    favLanguage: 'JavaScript',
    catchPhrase: 'Holy Smokes!',
});

const berkeley = new Student({
    name: 'Berkeley',
    age: 20,
    location: 'San Francisco',
    gender: 'F',
    previousBackground: 'Barista',
    className: 'FSW16',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const brad = new Student({
    name: 'Brad',
    age: '37',
    location: 'Miami',
    gender: 'M',
    previousBackground: 'Bank Teller',
    className: 'FSW15',
    favSubjects: ['JavaScript', 'Redux', 'React' ],
});

const alonso = new ProjectMngr({
    name: 'Alonso',
    age: 28,
    location: 'Philadelphia',
    gender: 'M',
    specialty: 'Data',
    favLanguage: 'Python',
    catchPhrase: 'How you doin\'?',
    favInstructor: 'Linda',
});

const thyme = new ProjectMngr({
    name: 'Thyme',
    age: 27,
    location: 'Seattle',
    gender: 'F',
    specialty: 'Mobile',
    favLanguage: 'Objective C',
    catchPhrase: 'It\'s Gibby',
    favInstructor: 'Mark',
});

console.log(mark.name); // Mark
console.log(thyme.age); //27
console.log(linda.speak()); // Hello my name is Linda, I am from New York.
console.log(mark.demo('CSS')); // Today we are learning about CSS.
console.log(linda.grade (berkeley,'Javascript')); // Berkeley receives a perfect score on Javascript.
console.log(brad.listsSubjects(brad.favSubjects));
console.log(berkeley.prAssignment('Html'));
console.log(brad.sprintChallenge('UI'));
console.log(thyme.standUp('fsw16_thyme'));
console.log(alonso.debugsCode(brad, 'Html'));

