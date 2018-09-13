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