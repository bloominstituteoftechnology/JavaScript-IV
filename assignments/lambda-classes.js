// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}