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


