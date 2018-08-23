// CODE here for your Lambda Classes
class Person {
    constructor(info){
        this.name = info.name;
        this.city = info.city;
        this.age = info.age;
        this.gender = info.gender;
    }
    speak(){ return `Hello, my name is ${this.name}, and I am from ${this.city}`; }
}

class Instructor extends Person {
    constructor(instructorInfo){
    super(instructorInfo);
    this.specialty = instructorInfo.specialty;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject){ return `Today we are learning about ${subject}!`; }
}