// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.faveLanguage = instructorAttr.faveLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    };
};

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    };

    listSubjects() {
        let i = 0;
        while (i<this.favSubjects.length, i++){
            return `I like ${this.favSubjects[i]}`;
        }
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    sprintChallenge(subject){
        return `${this.name} has begun Sprint Challenge for ${subject}.`;
    };
};

class TeamLeader extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, "@channel standup time!"`;
    };

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
}

const dan = new Instructor({
    name: 'Dan',
    age: 35,
    location: 'SLC',
    gender: 'Male',
    specialty: 'Front End Development',
    faveLanguage: 'C++',
    catchPhrase: 'Alright, let\'s get started.'
});

const vick = new TeamLeader({
    name: 'Vick',
    age: 30,
    location: 'Puerto Rico',
    gender: 'Male',
    specialty: 'Junior Fullstack Development',
    faveLanguage: 'Javascript',
    catchPhrase: 'Looks good to me.',
    gradClassName: 'webpt',
    favInstructor: 'Dan'
});

const jess = new Student({
    name: 'Jess',
    age: 31,
    location: 'Las Vegas',
    gender: 'Female',
    previousBackground: 'customer service',
    className: 'web25',
    favSubjects: ['HTML', 'CSS', 'LESS']
});

console.log(dan.name);
console.log(dan.age);
console.log(dan.location);
console.log(dan.gender);
console.log(dan.specialty);
console.log(dan.faveLanguage);
console.log(dan.catchPhrase);
console.log(vick.name);
console.log(vick.age);
console.log(vick.location);
console.log(vick.gender);
console.log(vick.specialty);
console.log(vick.faveLanguage);
console.log(vick.catchPhrase);
console.log(vick.gradClassName);
console.log(vick.favInstructor);
console.log(jess.name);
console.log(jess.age);
console.log(jess.location);
console.log(jess.gender);
console.log(jess.previousBackground);
console.log(jess.className);
console.log(jess.favSubjects);
console.log(dan.speak());
console.log(vick.speak());
console.log(jess.speak());
console.log(dan.demo('Javascript'));
console.log(dan.grade(jess, 'Javascript'));
console.log(vick.standUp('web25_Vick'));
console.log(vick.debugsCode(jess, 'Javascript'));
console.log(jess.listSubjects());
console.log(jess.PRAssignment('Javascript'));
console.log(jess.sprintChallenge('LESS'));