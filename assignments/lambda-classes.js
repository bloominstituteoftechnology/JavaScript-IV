// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Person{
    constructor(instAtt){
        super(instAtt);
        this.specialty = instAtt.specialty;
        this.favLanguage = instAtt.favLanguage;
        this.catchPhrase = instAtt.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studAtt){
        super(studAtt);
        this.previousBackground = studAtt.previousBackground;
        this.className = studAtt.className;
        this.favSubjects = studAtt.favSubjects;
        this.grade = studAtt.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade > 70) {
            return `${this.name} has graduated from Lambda School with a grade of ${this.grade}!`;
        }
    }
}

class ProjectManager extends Instructors {
    constructor(pmAtt){
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standUp(slackChannel) {
       return `${this.name} announces to ${slackChannel} @channel standy times!`;
    }
    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Alexandra = new Student({
    'name': 'Alexandra',
    'age': 26,
    'location': 'Philadelphia',
    'gender': 'Female',
    'previousBackground': 'none',
    'className': 'CS13',
    'favSubjects': ['JavaScript', 'LESS', 'CSS flexbox'],
    'grade': 90
});

const Dave = new ProjectManager({
    'name': 'Dave',
    'age': 32,
    'location': 'Toledo',
    'gender': 'Male',
    'gradClassName': 'CS8',
    'favInstructor': 'Sean'
});

const Toby = new Instructors({
    'name': 'Toby',
    'age': 36,
    'location': 'Miami',
    'gender': 'Male',
    'specialty': 'coming up with fun challenges',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'fingers on keyboards!'
});

console.log(Alexandra.PRAssignment('.this keyword'));
console.log(Dave.standUp('#cs13-team-dave'));
console.log(Dave.debugsCode(Alexandra, '.this keyword'));
console.log(Toby.demo('JS class syntax'));
console.log(Toby.grade(Alexandra, 'JS class syntax'));
console.log(Alexandra.graduate());
console.log(`${Alexandra.favSubjects[0]}, ${Alexandra.favSubjects[1]}, ${Alexandra.favSubjects[2]}`);