// CODE here for your Lambda Classes
class Person {
    constructor(stuff) {
        this.name = stuff.name;
        this.age = stuff.age;
        this.location = stuff.location;
        this.gender = stuff.gender;
    }
    speak = () => `Hello my name is ${this.name}, I am from ${this.location}`
}

class Instructor extends Person {
    constructor(teacherStuff) {
        super(teacherStuff);
        this.specialty = teacherStuff.specialty;
        this.favLanguage = teacherStuff.favLanguage;
        this.catchPhrase = teacherStuff.catchPhrase;
    }
    demo = (subject) => `Today we are learning about ${subject}`
    grade = (student, subject) => `${student.name} receives a perfect score on ${subject}`
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
    }
    listsSubjects = () => `...${studentStuff.favSubjects}`
    PRAssignment = (subject) => `${student.name} has submitted a PR for ${subject}`
    sprintChallenge = (subject) => `${student.name} has begun sprint challenge on ${subject}`
}

