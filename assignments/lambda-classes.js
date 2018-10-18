// CODE here for your Lambda Classes
class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;        
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(skills){
        super(skills);
        this.specialty = skills.specialty;
        this.favLanguage = skills.favLanguage;
        this.catchPhrase = skills.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade() {
        return `${this.name} receives a perfect score on ${this.subject}`
    }
}