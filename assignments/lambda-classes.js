// CODE here for your Lambda Classes
class Person    {
    constructor(personObject)   {
        this.name = personObject.name;
        this.age = personObject.age;
        this.location = personObject.location;
        this.gender = personObject.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorObject)   {
        super(instructorObject)
        this.specialty = instructorObject.specialty;
        this.favLanguage = instructorObject.favLanguage;
        this.catchPhrase = instructorObject.catchPhrase;
    }
    demo(subject)  {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}
