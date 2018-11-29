class Person {
    constructor(PERattributes) {
        this.name = PERattributes.name;
        this.age = PERattributes.age;
        this.location = PERattributes.location;
        this.gender = PERattributes.gender;
    }
    speak() {`Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(INSattributes) {
        super(INSattributes);
        this.specialty = INSattributes.specialty;
        this.favLanguage = INSattributes.favLanguage;
        this.catchPhrase = INSattributes.catchPhrase;
    }
    demo(subject) {`Today we are learning about ${subject}`
    }
    grade(this, subject) {`${this.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(PERattributes) {
        super(PERattributes);
        this.previousBackground = PERattributes.previousBackground;
        this.className = PERattributes.className;
        this.favSubjects = PERattributes.favSubjects;
    }
    listsSubjects() {this.favSubjects.forEach(item => console.log(item))
    }
    PRAssignment(subject) {console.log (`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge() {
    }
}