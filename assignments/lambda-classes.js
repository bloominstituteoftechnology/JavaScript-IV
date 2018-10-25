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