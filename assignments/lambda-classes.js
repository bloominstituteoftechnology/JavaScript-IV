// CODE here for your Lambda Classes
class Person {
    constructor(att){
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from {this.location}`);
    }
}

class Instructor extends Person {
    constructor(InstrAtt) {
        super(InstrAtt);
        this.specialty = InstrAtt.specialty;
        this.favLanguage = InstrAtt.favLanguage;
        this.catchPhrase = InstrAtt.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about {subject}`);
    }
}