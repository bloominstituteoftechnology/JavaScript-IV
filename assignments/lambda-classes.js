// CODE here for your Lambda Classes
class Person {
    constructor(stats){
        this.name = stats.name,
        this.age = stats.age,
        this. location = stats.location,
        this. gender = stats.gender
    }
    speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(details) {
    super (details);
    this.specialty = details.specialty,
    this.favLanguage = details.favLanguage,
    this.catchPhrase = details.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}
