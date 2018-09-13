// CODE here for your Lambda Classes
class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(inProps) {
        super(inProps);
        this.specialty = inProps.specialty;
        this.favLanguage = inProps.favLanguage;
        this.catchPhrase = inProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects() {
        JSON.stringify(this.favSubjects, null, "  ");
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const harry = new Instructor({
    name: 'Harry',
    location: 'Hogwarts',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Accio`
});

const knox = new Student({
    name: 'Knox',
    location: 'Texas',
    age: 24,
    gender: 'male',
    className: 'cs14',
    favSubjects: ["js", "css", "food"]
})

const elloise = new ProjectManager({
    name: 'Elloise',
    location: 'the Dark Web',
    age: '00',
    gender: 'non-binary',
    specialty: 'criminal activity',
    favLanguage: 'c++',
    catchPhrase: 'Let me tell you about this new cryptocurrency',
    gradClassName: 'cs14',
    favInstructor: 'Does not subscribe to the Idea of Favorites'
})

console.log(elloise.standUp('cs14_elloise'));
console.log(knox.sprintChallenge('javascript'));
console.log(harry.grade(elloise, 'html'));