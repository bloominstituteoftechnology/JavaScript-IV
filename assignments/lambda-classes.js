// CODE here for your Lambda Classes
class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}