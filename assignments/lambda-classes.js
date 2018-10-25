// CODE here for your Lambda Classes
class Person {
    constructor(personalInfo) {
        this.name =(personalInfo).name;
        this.age =(personalInfo).age;
        this.location =(personalInfo).location;
        this.gender =(personalInfo).gender;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    };
    listsSubjects() {
        let subjects = this.favSubjects;
        subjects.forEach(subject => console.log(subject));
    };
    PRAssignment(student, subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(student, subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
};

class ProMananger extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    };
    standUp(student, channel) {
        return `${this.name} announces to ${channel} @channel put ya hands in the air! It's stand-up time!`;
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}

const rajesh = new Instructor({
    name: 'Raj',
    location: 'California',
    age: 31,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `I am resplendent, am I not?`
});

const sheldon= new Instructor({
    name: 'Sheldon',
    location: 'Calfiornia',
    age: 33,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: 'BAZINGA!'
});