// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {console.log(`Hello, my name is ${this.name}, and I am from ${this.location}`)};
};

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {console.log(`Today, we are learning ${subject}!`)};
    grade (student, subject) {console.log(`${student.name} recieves a perfect score in ${subject}`)};
};

class Student extends Person {
    constructor(studAttributes) {
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
    }
    listsSubjects() {console.log(...this.favSubjects)};
    PRassignment(subject) {console.log(`${student.name} has submitted a PR for ${subject}`)};
    sprintChallenge(subject) {console.log(`${student.name} has begun sprint challenge on ${subject}`)};
};

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {console.log(`${this.name} announces to ${channel}, @channel standy times!`)};
    debugsCode (student, subject) {console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`)};
;}

