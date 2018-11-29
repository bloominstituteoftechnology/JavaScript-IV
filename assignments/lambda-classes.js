// CODE here for your Lambda Classes


// Create parent 'person' class
class Person {
    constrtuctor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    };
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};

class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.speciality = attributes.spaciality; //"redux",
        this.favLanguage = attributes.favLanguage; //"JavaScript, Python, Elm",
        this.catchPhrase = attributes.catchPhrase //"Don't forget the homies"
    };
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    };
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    };
};

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className; // "CS116",
        this.favSubjects = attributes.favSubjects; // ['Html', 'CSS', 'JavaScript']
    };
    listsSubjects () {
        return ` ${this.favSubjects}.`;
    };
    PRAssignment (subject) {
        return `${student.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge (subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`
    };
};

class ProjectManagers extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName; // "CS16",
        this.favInstructor = attributes.favInstructor; // "Josh",
    };
    standUp (channel) {
        return ` ${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
    };
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    };
};
