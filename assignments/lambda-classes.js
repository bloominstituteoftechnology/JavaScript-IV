// CODE here for your Lambda Classes

class Person {
    constructor(stats){
        this.name = stats.name;
        this.age = stats.age;
        this.location = stats.location;
        this.gender = stats.gender;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person {
    constructor(stats) {
        super(stats);
        this.speciality = stats.speciality;
        this.favLanguage = stats.favLanguage;
        this.catchPhrase = stats.catchPhrase;
    };
    demo (subject) {
        return `Today we are learning about ${subject}`;
    };
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };
    addPoints (student) {
        let points = Math.floor(Math.random()*100);
        if (points > 10) {
            student.grade += points;
        } else {
            student.grade -= points;
        }
        return `${this.name} has altered ${student.name}'s score by ${points}.`;
    }
};

class Student extends Person {
    constructor(stats){
        super(stats);
        this.previousBackground = stats.previousBackground;
        this.className = stats.className;
        this.favSubjects = stats.favSubjects;
        this.grade = stats.grade;
    };
    listsSubjects () {
        return `${this.favSubjects}`;
    };
    PRAssignment (subject) {
       return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
    graduate () {
        if (this.grade > 70) {
            return `${this.name} is ready to graduate Lambda School!`;
        };
    };
};

class ProjectManagers extends Instructor{
    constructor(stats){
        super(stats);
        this.gradClassName = stats.gradClassName;
        this.favInstructor = stats.favInstructor;
    };
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    };
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
};

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Utah',
    gender: 'Male',
    speciality: [
        'html',
        'css',
    ],
    favLanguage: 'Javascript',
    catchPhrase: 'Banjoooo!'
});

const trevor = new ProjectManagers({
    name: 'Trevor',
    age: 28,
    location: 'California',
    gender: 'Male',
    gradClassName: 'FSW15',
    favInstructor: 'Josh',
    speciality: [
        'JavaScript',
        'Deepdiving',
    ],
    favLanguage: [
        'html',
        'css',
    ],
    catchPhrase: 'Werewolves!'
});

const austin = new Student({
    name: 'Austin',
    age: 26,
    location: 'Utah',
    gender: 'Male',
    previousBackground: 'Odd Jobs',
    className: 'FSW 15',
    favSubjects: [
        'JavaScript',
        'CSS',
    ],
    grade: 50
});

console.log(josh.speak());
console.log(austin.listsSubjects());
console.log(josh.demo('JavaScript'));
console.log(josh.grade(austin, 'JavaScript'));
console.log(austin.PRAssignment('JavaScript IV'));
console.log(austin.sprintChallenge('JavaScript Fundamentals'));
console.log(trevor.standUp('FSW15'));
console.log(trevor.debugsCode(austin, 'JavaScript'));
console.log(josh.addPoints(austin));
console.log(austin.grade); 
console.log(austin.graduate());
console.log(josh.addPoints(austin));
console.log(austin.grade); 
console.log(austin.graduate());
