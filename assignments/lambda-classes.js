// CODE here for your Lambda Classes

class Person {
    constructor(innate) {
        this.name = innate.name;
        this.age = innate.age;
        this.location = innate.location;
        this.gender = innate.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    }
    
}
