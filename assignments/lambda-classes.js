// CODE here for your Lambda Classes
class Person {
    constructor(details){
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.gender;
    }

    speak () {
        console.log(`Hello my name is {this.name} I am from {this.loacation}`);
    }
}

class Instructor extends Person{
    constructor(details) {
        super(details);
        this.specialty = details.specialty;
        this.favLanguage = details.favLanguage;
        this.catchPharae = details.catchPharae;
    }

    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade (student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

class Students extends Instructor {
    constructor(details) {
        super(details);
        this.previousBacground = details.previousBacground;
        this.className = details.className;
        this.favSubjects = details.favSubjects;
    }
 
    listSubjects () {
        console.log(this.favSubjects.forEach())
    }

    



}

