// CODE here for your Lambda Classes

class Person {
    constructor(){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    }
    speak() {
        return `Hellon my name is ${this.name}, I am from
        ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject)
}
