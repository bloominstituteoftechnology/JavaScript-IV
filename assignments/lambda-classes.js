// CODE here for your Lambda Classes

class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructOptions) {
        super(instructOptions);
        this.specialty = instructOptions.specialty;
        this.favLanguage = instructOptions.favLanguage;
        this.catchPhrase = instructOptions.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) { //student object, subject string
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studOptions) {
        super(studOptions);
        this.previousBackground = studOptions.previousBackground;
        this.className = studOptions.className;
        this.favSubjects = studOptions.favSubjects; //an array
    }
    listsSubjects() {
        return  `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmOptions) {
        super(pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const stark = new Instructor({
    'name': 'Tony',
    'age': '48',
    'location': 'New York City',
    'gender': 'Male',
    'specialty': 'Object Oriented Programming',
    'favLanguage': 'Starkscript',
    'catchPhrase': 'I am Iron Man.'
});

const vision = new ProjectManager({
    'name': 'The Vision',
    'age': '3',
    'location': 'the Internet',
    'gender': 'Robot',
    'specialty': 'Computer Architecture',
    'favLanguage': 'Python',
    'catchPhrase': 'Challenge incites conflict, and conflict breeds catastrophe.',
    'gradClassName': 'CS13',
    'favInstructor': 'Bruce Banner'
});

const parker = new Student({
    'name': 'Peter',
    'age': '15',
    'location': 'Queens',
    'gender': 'Male',
    'previousBackground': 'Arachnology',
    'className': 'CS62',
    'favSubjects': ['Python', 'Javascript', 'HTML/CSS']
});

console.log(stark);
console.log(vision);
console.log(parker);
console.log(stark.location);
console.log(vision.gender);
console.log(parker.previousBackground);
console.log(stark.speak());
console.log(vision.speak());
console.log(parker.speak());
console.log(parker.listsSubjects());
console.log(stark.favLanguage);
console.log(stark.demo('hacking into government databases'));
console.log(stark.grade(parker, 'artificial intelligence communications'));
console.log(vision.standup('cs62_memesquad'));
console.log(vision.debugsCode(parker, 'Javascript'));
console.log(parker.PRAssignment('CSS'));
console.log(parker.sprintChallenge('React'));
console.log(stark.catchPhrase);
console.log(vision.catchPhrase);
console.log(vision.favInstructor);