// CODE here for your Lambda Classes

class Person {
    constructor (Pattributes) {
        this.name = Pattributes.name;
        this.age = Pattributes.age;
        this.location = Pattributes.location;
        this.gender = Pattributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}