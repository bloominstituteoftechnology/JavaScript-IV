// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }
    listSubjects() {
        this.favSubject.forEach(function(element) {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge for ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 'Seems rude to ask for an age',
    location: 'Somewhere in time and space',
    gender: 'Male',
    speciality: 'JavaScript',
    favLanguage: 'JavaScript, Pythom, Elm',
    catchPhrase: 'Let\'s get started!'
});

const luis = new Student({
    name: 'Luis',
    age: 21,
    location: 'Clifton Forge',
    gender: 'Male',
    previousBackground: 'Front End Development, Videogame Development and Chatbots',
    className: 'CSPT2',
    favSubject: ['Node', 'JavaScript', 'HTML', 'CSS', 'React']
});

const julian = new ProjectManager({
    name: 'Julian',
    age: 'I have no idea',
    location: 'GPS signal not found',
    gender: 'Male',
    gradClassName: 'CSPT2',
    favInstructor: 'Dan'
});

console.log(dan.speak());
console.log(luis.speak());
console.log(julian.speak());
console.log(dan.demo('JavaScript Fundamentals'));
console.log(dan.grade(luis, 'JSIV'));
luis.listSubjects();
console.log(luis.PRAssignment('JSIV'));
console.log(luis.sprintChallenge('JavaScript Fundamentals'));
console.log(julian.standUp('CSPT2'));
console.log(julian.debugsCode(luis, 'C'));