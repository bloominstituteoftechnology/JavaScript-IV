// CODE here for your Lambda Classes


//=========== Base class

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}


//=========== Instructor class

class Instructor extends Person {
    constructor(instructAttribs) {
        super(instructAttribs);
        this.specialty = instructAttribs.specialty;
        this.favLanguage = instructAttribs.favLanguage;
        this.catchPhrase = instructAttribs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}
