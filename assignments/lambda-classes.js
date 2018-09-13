// CODE here for your Lambda Classes


// ================== Base Class =======================
class Person {
    constructor(aboutMe) {
        this.name = aboutMe.name;
        this.age = aboutMe.age;
        this.location = aboutMe.location;
        this.gender = aboutMe.gender;
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// ================== Descendent of Person =======================
class Instructor extends Person {
    constructor(instructorAboutMe) {
        super(instructorAboutMe);
        this.specialty = instructorAboutMe.specialty;
        this.favLanguage = instructorAboutMe.favLanguage;
        this.catchPhrase = instructorAboutMe.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
     return (`${student.name} receives a perfect score on ${subject}`)
    }
}

// ================== Descendent of Person =======================
class Student extends Person {
    constructor(studentAboutMe) {
        super(studentAboutMe);
        this.previousBackground = studentAboutMe.previousBackground;
        this.className = studentAboutMe.className;
        this.favSubjects = studentAboutMe.favSubjects;
    }
    listsSubjects() {
        return (`${this.favSubjects}`)
    }
    PRAssignment(student, subject) {
        return (`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(student, subject) {
        return (`${student.name} has begun a sprint challenge on ${subject}`)
    }
}

// ================== Heritage Chain: Instructor --> Person =======================
class ProjectManager extends Instructor {
    constructor(pmAboutMe) {
        super(pmAboutMe);
        this.gradClassName = pmAboutMe.gradClassName;
        this.favInstructor = pmAboutMe.favInstructor;
    }
    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// ================== New Bindings binding 'this' context to new object(s). =======================
const josh = new Instructor({
    name: 'Josh Knell',
    age: '35',
    location: 'Provo Utah',
    gender: 'Male',
    specialty: 'Teaching',
    favLanguage: 'Action Script',
    catchPhrase: `Isn't this so great? I mean this is really exciting. It's like the inline block to flexbox.`,
});

const daniel = new Instructor({
    name: 'Daniel Frehner',
    age: '41',
    location: 'Canada',
    gender: 'Male',
    specialty: 'Part-Time Teaching',
    favLanguage: 'Javascript',
    catchPhrase: 'Let me very slowly introduce you to git.',
});

const jordan = new Student({
    name: 'Jordan Stoddard',
    age: '29',
    location: 'San Jose, CA',
    gender: 'Male',
    previousBackground: 'Commercial Sales',
    className: 'FSW14',
    favSubjects: ['HTML', 'Javascript', 'CSS'],
})

const jasmine = new Student({
    name: 'Jasmine Galang',
    age: '24',
    location: 'Santa Clarita, CA',
    gender: 'Female',
    previousBackground: 'Student in the Philippines',
    className: 'FSW14',
    favSubjects: ['Ruby', 'Javascript', 'CSS', 'HTML'],
})

const cesar = new ProjectManager({
    name: 'Cesar Leiva',
    age: '31',
    location: 'Los Angeles, CA',
    gender: 'Male',
    gradClassName: 'CS12',
    favInstructor: 'Josh Knell'
})

const allen = new ProjectManager({
    name: 'Allen Hai',
    age: '28',
    location: 'Houston, TX',
    gender: 'Male',
    gradClassName: 'CS12',
    favInstructor: 'Josh Knell'
})

// ================== Instructor method proofs =======================
console.log(josh);
console.log(josh.speak());
console.log(josh.demo('Javascript'));
console.log(josh.grade(jordan, 'Class Syntax'));


console.log(daniel);
console.log(daniel.speak());
console.log(daniel.demo('git Bash'));
console.log(daniel.grade(jordan, 'pushing to git'));

// ================== Student method proofs =======================
console.log(jordan);
console.log(jordan.speak());
console.log(jordan.listsSubjects());
console.log(jordan.PRAssignment(jordan, 'Class Syntax'));
console.log(jordan.sprintChallenge(jordan, 'Javascript Fundamentals'));

console.log(jasmine);
console.log(jasmine.speak());
console.log(jasmine.listsSubjects());
console.log(jasmine.PRAssignment(jasmine, 'Javascript III'));
console.log(jasmine.sprintChallenge(jasmine, 'Javascript Fundamentals'));

// ================== PM method proofs =======================
console.log(cesar);
console.log(cesar.speak());
console.log(cesar.standUp('fsw_cesar'));
console.log(cesar.debugsCode(jordan, 'Class Syntax'));

console.log(allen);
console.log(allen.speak());
console.log(allen.standUp('fsw14_PMs'));
console.log(allen.debugsCode(jordan, 'flexbox'));