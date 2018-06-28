// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        console.log(`Hello name name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguagel;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject} `);
    }
    grade(student, subject) {
        console.log(`${student} received a perfect score on ${subject}.`);
    }
}

class Student extends Instructor {

}