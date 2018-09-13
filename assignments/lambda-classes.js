// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}
  
class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    };
    listsSubjects() {
        this.favSubjects.forEach(item => console.log(item));
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;       
    };
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
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

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'CSS Floats',
    catchPhrase: `Bananas`
});

const rahul = new Student({
    name: 'Rahul',
    location: 'New Jersey',
    age: 23,
    gender: 'male',
    previousBackground: 'Strategy Consulting',
    className: 'FSW14',
    favSubjects: ['CSS', 'HTML'],
});

const bob = new Student({
    name: 'Bob',
    location: 'Somewhere',
    age: 42,
    gender: 'male',
    previousBackground: 'Retail Sales',
    className: 'FSW14',
    favSubjects: ['JS', 'HTML'],
});

const tai = new ProjectManager({
    name: 'Tai',
    location: 'Mississippi',
    age: 27,
    gender: 'male',
    favLanguage: 'Node',
    specialty: 'React',
    catchPhrase: `Don't hesitate to ask for help!`,
    gradClassName: 'CS11',
    favInstructor: 'Josh',
});

const austen = new ProjectManager({
    name: 'Austen',
    location: 'San Franscisco',
    age: 35,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Being CEO',
    catchPhrase: `Ashton Kutcher loves our hat.`,
    gradClassName: 'CS1',
    favInstructor: 'Fred',
});

console.log(fred.catchPhrase);
fred.demo('Javascript');

console.log(josh.specialty);
josh.grade(rahul, 'JavaScript');
josh.speak();

console.log(rahul.previousBackground);
rahul.listsSubjects();
rahul.PRAssignment('Responsive Web');

console.log(bob.className);
bob.sprintChallenge('Applied Javascript');

console.log(tai.name);
console.log(tai.gradClassName);
tai.standUp('FSW 14 Tai');
tai.debugsCode(rahul, 'Javascript');

console.log(austen.favInstructor);
console.log(austen.catchPhrase);
console.log(austen.specialty);