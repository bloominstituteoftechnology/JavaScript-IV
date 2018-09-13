// CODE here for your Lambda Classes

//base/master class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    //methods
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//instructor class
class Instructor extends Person{
    constructor(instOption) {
        super(InstOption);
        this.specialty = instOption.specialty;
        this.favLanguage = instOption.favLanguage;
        this.catchPhrase = instOption.catchPhrase;
    }
    //methods
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

//student class
class Student extends Person {
    constructor(studOptions) {
        super(studOptions);
        
    }
    
}

