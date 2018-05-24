// CODE here for your Lambda Classes

class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    }
}
