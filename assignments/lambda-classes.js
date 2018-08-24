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

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, "@channel standy times!"`;
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

const jacob = new ProjectManager({
    name: 'Jacob',
    age: 30,
    location: 'Florida',
    gender: 'Male',
    specialty: 'Junior Fullstack Development',
    faveLanguage: 'Javascript',
    catchPhrase: 'Looks good to me.',
    gradClassName: 'CS8',
    favInstructor: 'Dan'
});

const abi = new Student({
    name: 'Abi',
    age: 33,
    location: 'Texas',
    gender: 'Female',
    previousBackground: 'Safety Coordinator',
    className: 'CSPT2',
    favSubjects: ['Design', 'HTML', 'CSS', 'LESS']
});

console.log(dan.name);
console.log(dan.age);
console.log(dan.location);
console.log(dan.gender);
console.log(dan.specialty);
console.log(dan.faveLanguage);
console.log(dan.catchPhrase);
console.log(jacob.name);
console.log(jacob.age);
console.log(jacob.location);
console.log(jacob.gender);
console.log(jacob.specialty);
console.log(jacob.faveLanguage);
console.log(jacob.catchPhrase);
console.log(jacob.gradClassName);
console.log(jacob.favInstructor);
console.log(abi.name);
console.log(abi.age);
console.log(abi.location);
console.log(abi.gender);
console.log(abi.previousBackground);
console.log(abi.className);
console.log(abi.favSubjects);
console.log(dan.speak());
console.log(jacob.speak());
console.log(abi.speak());
console.log(dan.demo('Javascript'));
console.log(dan.grade(abi, 'Javascript'));
console.log(jacob.standUp('CSPT2_Jacob'));
console.log(jacob.debugsCode(abi, 'Javascript'));
console.log(abi.listSubjects());
console.log(abi.PRAssignment('Javascript'));
console.log(abi.sprintChallenge('LESS'));