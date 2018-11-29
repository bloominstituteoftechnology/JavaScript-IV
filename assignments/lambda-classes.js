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
        this.speciality = "redux",
        this.favLanguage = "JavaScript, Python, Elm",
        this.catchPhrase = "Don't forget the homies"
    };
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    };
    grade (subject, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    };
};

