// CODE here for your Lambda Classes



class Person {

    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {

    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {

    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects
    }

    listSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {

    constructor(projectManagerInfo) {
        super(projectManagerInfo);
        this.gradClassName = projectManagerInfo.gradClassName;
        this.favInstructor = projectManagerInfo.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}





const hector = new Instructor({
    name: 'Hector',
    location: 'Tampa',
    age: 56,
    gender: 'male',
    favLanguage: 'Spanish',
    specialty: 'Anatomy',
    catchPhrase: `I'm a Doctor`
});

const natalie = new Instructor({
    name: 'Natalie',
    location: 'Tampa',
    age: 52,
    gender: 'female',
    favLanguage: 'Spanish',
    specialty: 'Makeup',
    catchPhrase: `I'm a mom`
});

const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favSubjects: ['JavaScript','HTML','CSS'],
    className: 'Front-end',
    previousBackground: `Don't forget the homies`
});

const dan = new Student({
    name: 'Daniel',
    location: 'Tampa',
    age: 27,
    gender: 'male',
    favSubjects: ['JavaScript','HTML','CSS'],
    className: 'Full-Stack',
    previousBackground: `Uber Driver`
});

const jeff = new ProjectManager({
    name: 'Jeff',
    location: 'San Diego',
    age: 25,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'JS',
    catchPhrase: `Everybody ready?`,
    gradClassName: 'cs14',
    favInstructor: 'Hector'
});

const jim = new ProjectManager({
    name: 'Jim',
    location: 'Chicago',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'JS',
    catchPhrase: `I'm Jim`,
    gradClassName: 'cs14',
    favInstructor: 'Hector'
});

dan.speak();

hector.demo('JS');
natalie.grade(fred, 'JS');

dan.listSubjects();
fred.PRAssignment('JS');
dan.sprintChallenge('JS');

jeff.debugsCode(dan, 'JS');
jim.standUp('general');

